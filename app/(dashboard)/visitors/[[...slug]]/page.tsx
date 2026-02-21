import { Metadata } from "next";
//
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/shadcn/ui/table";
import { TableUI } from "@/components/atoms/tables/table-ui";
import { Toolbar } from "@/features/dashboard/components/toolbar";
import { VisitorsTableAction } from "@/features/visitors/components/visitors-table-action";
import { VisitorsTableEmpty } from "@/features/visitors/components/visitors-table-empty";
import { VisitorHelper } from "@/lib/supabase/services/visitors/helper";
import { getVisitorsAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";
import { PageParams } from "@/types";

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
            return (
              geolocation.latitude === 6.4474 &&
              geolocation.longitude === 3.3903
            );
          }
        })
      : data
    : [];
  //
  return (
    <main className="grid gap-4">
      <Toolbar selected={transformedData.length} total={data?.length} />
      <TableUI.Container>
        <TableUI.HeaderRow hasAction>
          <TableHead>IP Address</TableHead>
          <TableHead className="text-right">Visits</TableHead>
          <TableHead>Device</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Geolocation</TableHead>
          <TableHead>Last Seen</TableHead>
        </TableUI.HeaderRow>
        <TableBody>
          {transformedData.length ? (
            transformedData.map((item, i) => {
              visitor.setVisitor(item);
              //
              return (
                <TableRow key={item.id}>
                  <TableUI.CellAvatarBio
                    name={item.ip_address}
                    email={item.pathname}
                    showBadge={visitor.IsUpdatedToday()}
                  />
                  <TableCell className="text-right">{item.visits}</TableCell>
                  <TableUI.CellBadge>{visitor.device}</TableUI.CellBadge>
                  <TableCell>{item.platform}</TableCell>
                  <TableUI.CellAvatarBio
                    name={visitor.location}
                    email={visitor.geolocation}
                    textOnly
                  />
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
