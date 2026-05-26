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

interface Props {
  recipients?: string[];
}

export const ListenersToolbar = ({ recipients = [] }: Props) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    if (!recipients.length) {
      toast.error("No emails selected");
      return;
    }

    if (confirm("Send email invite?")) {
      setLoading(true);

      const { error } = await sendEmail({
        recipients: MOCK.sendPodcastInviteEmail.formData
          ? [APP.ccEmail]
          : recipients,
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
