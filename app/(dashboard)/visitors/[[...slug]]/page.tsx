import { Metadata } from "next";
//
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/shadcn/ui/table";
import { TableUI } from "@/components/atoms/tables/table-ui";
import { TdAvatarBio } from "@/components/atoms/tables/td-avatar-bio";
import { TdBadge } from "@/components/atoms/tables/td-badge";
import { TdActionMenu } from "@/components/atoms/tables/td-action-menu";
import { TableEmpty } from "@/components/atoms/tables/table-empty";
import { Toolbar } from "@/features/dashboard/components/toolbar";
import { DeleteMultipleWidget } from "@/features/dashboard/components/delete-multiple-widget";
import { PageParams } from "@/types";
import { PROTECTED_PATH } from "@/constants/PATH";
//
import { VisitorHelper } from "@/lib/supabase/services/visitors/helper";
import { getVisitorsAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";
import { TABLE } from "@/lib/supabase/services/visitors/types";
import { IpApiResponse } from "@/lib/ip-api/interface";

export const metadata: Metadata = {
  title: "Manage Visitors",
};

const path = PROTECTED_PATH.visitors;
const table = TABLE;
const visitor = new VisitorHelper();

const filterGeolocationBlacklist = (geolocation?: IpApiResponse) => {
  if (!geolocation) return false;

  if (geolocation.latitude && geolocation.longitude) {
    const [lat, lng] = [
      Number(process.env.NEXT_PUBLIC_BLACKLIST_LATITUDE || 0),
      Number(process.env.NEXT_PUBLIC_BLACKLIST_LONGITUDE || 0),
    ];
    return geolocation.latitude === lat && geolocation.longitude === lng;
  }
};

export default async function VisitorsPage({ searchParams }: PageParams) {
  const searchParamsAsync = await searchParams;
  const filtered = searchParamsAsync.filtered ? true : false;

  const { data, error } = await getVisitorsAction({
    sortBy: "updated_at",
  });

  const transformedData = data
    ? filtered
      ? data.filter(({ geolocation }) =>
          filterGeolocationBlacklist(geolocation),
        )
      : data
    : [];
  //
  return (
    <main className="grid gap-4">
      <Toolbar
        path={path}
        total={data?.length}
        selected={transformedData.length}
      >
        {filtered && (
          <DeleteMultipleWidget
            path={PROTECTED_PATH.visitors}
            table={TABLE}
            ids={transformedData.map(({ id }) => id)}
          />
        )}
      </Toolbar>
      <TableUI.Container>
        <TableUI.HeaderRow hasAction>
          <TableHead>Visitor</TableHead>
          <TableHead>Geolocation</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Device</TableHead>
          <TableHead>Last Seen</TableHead>
        </TableUI.HeaderRow>
        <TableBody>
          {transformedData.length ? (
            transformedData.map((item, i) => {
              visitor.setVisitor(item);
              //
              return (
                <TableRow key={item.id}>
                  <TdAvatarBio
                    srcText={item.visits}
                    name={item.ip_address}
                    email={item.pathname}
                    showBadge={visitor.IsUpdatedToday()}
                  />
                  <TdAvatarBio
                    name={visitor.location}
                    email={visitor.geolocation}
                    textOnly
                  />
                  <TableCell>{item.platform}</TableCell>
                  <TdBadge>{visitor.device}</TdBadge>
                  <TableCell>{visitor.updatedAt}</TableCell>
                  <TdActionMenu
                    path={path}
                    table={table}
                    id={item.id}
                    canDelete
                    // actions={[
                    //   { label: "Receipt", value: "Receipt", disabled: true },
                    //   {
                    //     label: "Duplicate",
                    //     value: "Duplicate",
                    //     hasSeparator: true,
                    //   },
                    // ]}
                  />
                </TableRow>
              );
            })
          ) : (
            <TableEmpty />
          )}
        </TableBody>
      </TableUI.Container>
    </main>
  );
}
