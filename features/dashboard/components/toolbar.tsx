"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2Icon, SendIcon } from "lucide-react";
import { render, pretty } from "@react-email/render";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { PaginationUI } from "@/components/atoms/tables/pagination-ui";
import { PodcastInviteEmail } from "@/components/emails/podcast-invite-email";
import { useToast } from "@/hooks/use-toast";
import { sendEmailAction } from "@/lib/nodemailer/sendEmailAction";
import { deleteAction } from "@/lib/supabase/services/base/actions/deleteAction";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

interface Props {
  path: string;
  table: string;
  total?: number;
  selected?: number;
  filteredIds?: number[];
  recipients?: string[];
}

export const Toolbar = ({
  path,
  table,
  total = 0,
  selected = 0,
  filteredIds = [],
  recipients = [],
}: Props) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    if (!filteredIds.length) {
      toast.error("No rows selected");
      return;
    }

    if (confirm("Send email invite?")) {
      setLoading(true);

      const { error } = await sendEmail({
        recipients,
        podcast: PodcastHelper.GetMostRecentItem(),
      });

      if (error) toast.error(error);
      else toast.success(`${recipients.length} invites sent!`);

      setLoading(false);
    }
  };

  const handleDeleteSelected = async () => {
    if (!filteredIds.length) {
      toast.error("No rows selected");
      return;
    }

    if (confirm("Delete selected?")) {
      setLoading(true);

      const { data, error } = await deleteAction({
        path,
        table,
        id: filteredIds,
      });

      if (error) toast.error(error);
      if (data) toast.success(`${data} rows deleted!`);

      setLoading(false);
    }
  };
  //
  return (
    <section className="flex-row-cb gap-2.5">
      <PaginationUI.Container>
        {/* <PaginationUI.SizeSelector /> */}
        <PaginationUI.SelectedRowsCaption selected={selected} total={total} />
        {/* <PaginationPageSelector /> */}
      </PaginationUI.Container>
      <div className="flex-row-cs gap-2.5">
        {[
          { label: "All", path },
          { label: "Filtered", path: "?filtered=true" },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className="bg-secondary text-secondary-foreground rounded-md px-3 py-2 text-xs font-medium shadow"
          >
            {item.label}
          </Link>
        ))}
        {/* DELETE */}
        {filteredIds.length ? (
          <>
            <Button variant={"primary"} size={"icon"} onClick={handleSendEmail}>
              {loading ? <Spinner /> : <SendIcon />}
            </Button>
            <Button
              variant={"destructive"}
              size={"icon"}
              onClick={handleDeleteSelected}
            >
              {loading ? <Spinner /> : <Trash2Icon />}
            </Button>
          </>
        ) : null}
      </div>
    </section>
  );
};

const sendEmail = async ({
  recipients,
  podcast,
}: {
  recipients: string[];
  podcast: TransformedPodcastDto;
}) => {
  const body = await pretty(
    await render(<PodcastInviteEmail data={podcast} />),
  );

  return await sendEmailAction({
    to: recipients,
    subject: podcast.titleSeriesText,
    body,
  });
};
