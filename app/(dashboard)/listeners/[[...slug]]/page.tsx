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

  const { data, error } = await getListenersAction();
  const transformedData = data || [];
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
          <TableHead>Podcast</TableHead>
          <TableHead>Guest</TableHead>
          <TableHead>notionUrl</TableHead>
          <TableHead>spaceUrl</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Listeners</TableHead>
          <TableHead>Series</TableHead>
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
                    src={listener.podcast.lastLogoSrc}
                    name={listener.podcast.title}
                    email={listener.podcast.datetimeText}
                    showBadge={listener.IsUpdatedToday()}
                  />
                  <TableUI.CellBadge
                    text={listener.podcast.guestUsername}
                    variant="secondary"
                  />
                  <TableCell>{listener.podcast.notionUrl}</TableCell>
                  <TableCell>{listener.podcast.spaceUrl}</TableCell>
                  <TableUI.CellBadge
                    text={item.username}
                    // variant="outline-muted"
                  />
                  <TableCell>{listener.podcast.listeners}</TableCell>
                  <TableCell>{listener.podcast.seriesText}</TableCell>
                  <TableCell>{listener.createdAt}</TableCell>
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
