"use client";

import { useState } from "react";
import { SendIcon } from "lucide-react";
import { render, pretty } from "@react-email/render";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { PodcastInviteEmail } from "@/components/emails/podcast-invite-email";
import { useToast } from "@/hooks/use-toast";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { sendEmailAction } from "@/lib/nodemailer/sendEmailAction";
import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";
import { APP } from "@/constants/APP";
import { MOCK } from "@/constants/MOCK";

const M = MOCK.sendPodcastInviteEmail;
interface Props {
  emails?: string[];
}

export const ListenersToolbar = ({ emails = [] }: Props) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const recipients = M.formData ? [APP.email] : emails;

  const handleSendEmail = async () => {
    if (!recipients.length) {
      toast.error("No emails selected");
      return;
    }

    if (confirm(`Send (${recipients.length}) email invites?`)) {
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
  //
  return (
    <Button variant={"primary"} size={"icon"} onClick={handleSendEmail}>
      {loading ? <Spinner /> : <SendIcon />}
    </Button>
  );
};

const sendEmail = async ({
  recipients,
  podcast,
}: {
  recipients: string[];
  podcast: TransformedEpisodeDto;
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
