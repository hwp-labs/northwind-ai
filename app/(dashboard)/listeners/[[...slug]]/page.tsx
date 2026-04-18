import { Metadata } from "next";
import { IconBrandNotion, IconBrandX } from "@tabler/icons-react";
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
          <TableHead>Urls</TableHead>
          <TableHead className="text-right">Listeners</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Last Seen</TableHead>
        </TableUI.HeaderRow>
        <TableBody>
          {transformedData.length ? (
            transformedData.map((item, i) => {
              listener.setListener(item);
              //
              return (
                <TableRow key={item.id}>
                  <TdAvatarBio
                    src={listener.podcast.lastLogoSrc}
                    name={listener.podcast.title}
                    email={listener.podcast.datetimeText}
                    showBadge={listener.IsUpdatedToday()}
                  />
                  <TdBadge
                    label={listener.podcast.guestUsername}
                    variant="secondary"
                  />
                  <TableCell>
                    <TableUI.Url
                      label="Notion"
                      value={listener.podcast.notionUrl}
                      icon={<IconBrandNotion size={16} />}
                    />
                    <TableUI.Url
                      label="Space"
                      value={listener.podcast.spaceUrl}
                      icon={<IconBrandX size={16} />}
                    />
                  </TableCell>
                  <TableUI.Amount>{listener.podcast.listeners}</TableUI.Amount>
                  <TdBadge>{item.username}</TdBadge>
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
