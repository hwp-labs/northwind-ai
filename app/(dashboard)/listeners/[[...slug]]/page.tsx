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
import { ListenersTableAction } from "@/features/listeners/components/listeners-table-action";
import { ListenersTableEmpty } from "@/features/listeners/components/listeners-table-empty";
import { ListenerHelper } from "@/lib/supabase/services/listeners/helper";
import { getListenersAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { PageParams } from "@/types";

export const metadata: Metadata = {
  title: "Manage Listeners",
};

const listener = new ListenerHelper();

export default async function ListenersPage({ searchParams }: PageParams) {
  const searchParamsAsync = await searchParams;
  const filtered = searchParamsAsync.filtered ? true : false;

  const { data, error } = await getListenersAction({
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
        selected={transformedData.length}
        total={data?.length}
        filteredIds={filtered ? transformedData.map(({ id }) => id) : undefined}
      />
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
              listener.setListener(item);
              //
              return (
                <TableRow key={item.id}>
                  <TableUI.CellAvatarBio
                    name={item.ip_address}
                    email={item.pathname}
                    showBadge={listener.IsUpdatedToday()}
                  />
                  <TableCell className="text-right">{item.visits}</TableCell>
                  <TableUI.CellBadge>{item.username}</TableUI.CellBadge>
                  <TableCell>{item.username}</TableCell>
                  <TableUI.CellAvatarBio
                    name={listener.location}
                    email={listener.geolocation}
                    textOnly
                  />
                  <TableCell>{listener.updatedAt}</TableCell>
                  <ListenersTableAction id={item.id} />
                </TableRow>
              );
            })
          ) : (
            <ListenersTableEmpty />
          )}
        </TableBody>
      </TableUI.Container>
    </main>
  );
}
