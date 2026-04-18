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
import { isValidEmail } from "@/utils";
import { PageParams } from "@/types";
import { PROTECTED_PATH } from "@/constants/PATH";
//
import { ListenersTableAction } from "@/features/listeners/components/listeners-table-action";
import { ListenersTableEmpty } from "@/features/listeners/components/listeners-table-empty";
import { ListenerHelper } from "@/lib/supabase/services/listeners/helper";
import { getListenersAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { TABLE } from "@/lib/supabase/services/listeners/types";

export const metadata: Metadata = {
  title: "Manage Listeners",
};

const listener = new ListenerHelper();

export default async function ListenersPage({ searchParams }: PageParams) {
  const searchParamsAsync = await searchParams;
  const filtered = searchParamsAsync.filtered ? true : false;

  const { data, error } = await getListenersAction();
  const transformedData = data
    ? filtered
      ? data.filter(({ username }) => isValidEmail(username))
      : data
    : [];
  //
  return (
    <main className="grid gap-4">
      <Toolbar
        path={PROTECTED_PATH.listeners}
        table={TABLE}
        total={data?.length}
        selected={transformedData.length}
        filteredIds={filtered ? transformedData.map(({ id }) => id) : undefined}
        recipients={
          filtered ? transformedData.map(({ username }) => username) : undefined
        }
      />
      <TableUI.Container>
        <TableUI.HeaderRow hasAction>
          <TableHead>Podcast</TableHead>
          <TableHead>Guest</TableHead>
          <TableHead>Urls</TableHead>
          <TableHead className="text-right">Listeners</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Registered</TableHead>
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
                    name={listener.podcast.titleSeriesText}
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
                  <TdBadge variant={"outline"}>{item.username}</TdBadge>
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
