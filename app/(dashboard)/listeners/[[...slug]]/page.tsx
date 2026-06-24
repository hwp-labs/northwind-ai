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
import { TdActionMenu } from "@/components/atoms/tables/td-action-menu";
import { TableEmpty } from "@/components/atoms/tables/table-empty";
import { Toolbar } from "@/components/species/dashboard/components/toolbar";
import { isValidEmail } from "@/utils";
import { PageParams } from "@/types";
import { PROTECTED_PATH } from "@/constants/PATH";
//
import { ListenersToolbar } from "@/components/species/listeners/components/listeners-toolbar";
import { ListenerHelper } from "@/lib/supabase/services/listeners/helper";
import { getListenersAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { ListenerEntity, TABLE } from "@/lib/supabase/services/listeners/types";

export const metadata: Metadata = {
  title: "Manage Listeners",
};

const path = PROTECTED_PATH.listeners;
const table = TABLE;
const listener = new ListenerHelper();

const getDistinctEmails = (data: ListenerEntity[]) => {
  const emails: string[] = [];
  const items: ListenerEntity[] = [];

  data.forEach((item) => {
    const email = item.username;
    if (!item.deleted_at && isValidEmail(email) && !emails.includes(email)) {
      emails.push(email);
      items.push(item);
    }
  });

  return items;
};

export default async function ListenersPage({ searchParams }: PageParams) {
  const searchParamsAsync = await searchParams;
  const filtered = searchParamsAsync.filtered ? true : false;

  const { data, error } = await getListenersAction();

  const transformedData = data
    ? filtered
      ? getDistinctEmails(data)
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
          <ListenersToolbar
            emails={transformedData.map(({ username }) => username)}
          />
        )}
      </Toolbar>
      <TableUI.Container>
        <TableUI.HeaderRow hasAction>
          <TableHead>Podcast</TableHead>
          <TableHead>Guest</TableHead>
          <TableHead>Urls</TableHead>
          <TableUI.ThAmount>Listeners</TableUI.ThAmount>
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
                    src={listener.podcast.thumbnail}
                    name={listener.podcast.topic}
                    email={
                      <>
                        EP {listener.podcast.id0} &bull;{" "}
                        {listener.podcast.datetimeShort}
                      </>
                    }
                    showBadge={listener.IsCreatedToday()}
                  />
                  <TdBadge
                    label={listener.podcast.Speakers.map(
                      ({ socials }) => socials.x,
                    )}
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
                  <TableUI.TdAmount>
                    {listener.podcast.listeners}
                  </TableUI.TdAmount>
                  <TdBadge
                    variant={item.deleted_at ? "destructive" : "outline"}
                  >
                    {item.username}
                  </TdBadge>
                  <TableCell>{listener.createdAt}</TableCell>
                  <TdActionMenu
                    path={path}
                    table={table}
                    id={item.id}
                    canDelete
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
