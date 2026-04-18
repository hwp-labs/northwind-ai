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
import { Toolbar } from "@/features/dashboard/components/toolbar";
import { PageParams } from "@/types";
import { PROTECTED_PATH } from "@/constants/PATH";
// 
import { VisitorsTableAction } from "@/features/visitors/components/visitors-table-action";
import { VisitorsTableEmpty } from "@/features/visitors/components/visitors-table-empty";
import { VisitorHelper } from "@/lib/supabase/services/visitors/helper";
import { getVisitorsAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";
import { TABLE } from "@/lib/supabase/services/visitors/types";

export const metadata: Metadata = {
  title: "Manage Visitors",
};

const visitor = new VisitorHelper();

export default async function VisitorsPage({ searchParams }: PageParams) {
  const searchParamsAsync = await searchParams;
  const filtered = searchParamsAsync.filtered ? true : false;

  const { data, error } = await getVisitorsAction({
    sortBy: "updated_at",
  });

  const transformedData = data
    ? filtered
      ? data.filter(({ geolocation }) => {
          if (geolocation && geolocation.latitude && geolocation.longitude) {
            const [lat, lng] = [
              Number(process.env.NEXT_PUBLIC_BLACKLIST_LATITUDE || 0),
              Number(process.env.NEXT_PUBLIC_BLACKLIST_LONGITUDE || 0),
            ];
            return (
              geolocation.latitude === lat && geolocation.longitude === lng
            );
          }
        })
      : data
    : [];
  //
  return (
    <main className="grid gap-4">
      <Toolbar
        path={PROTECTED_PATH.visitors}
        table={TABLE}
        total={data?.length}
        selected={transformedData.length}
        filteredIds={filtered ? transformedData.map(({ id }) => id) : undefined}
      />
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
                  <VisitorsTableAction id={item.id} />
                </TableRow>
              );
            })
          ) : (
            <VisitorsTableEmpty />
          )}
        </TableBody>
      </TableUI.Container>
    </main>
  );
}
