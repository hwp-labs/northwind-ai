"use client";

import { useState } from "react";
import { SendIcon } from "lucide-react";
import { render, pretty } from "@react-email/render";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { PodcastInviteEmail } from "@/components/emails/podcast-invite-email";
import { useToast } from "@/hooks/use-toast";
import {
  TransformedEpisode,
  transformEpisode,
} from "@/lib/podcast/episodes/utils";
import { sendEmailAction } from "@/lib/nodemailer/sendEmailAction";
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
  const totalRecipients = recipients.length;

  const handleSendEmail = async () => {
    const episodeId = prompt(
      `Send Episode ID __ invite to ${totalRecipients} recipients?`,
    );

    if (Number(episodeId) > 0) {
      const episode = transformEpisode(episodeId);

      if (confirm(episode.topic)) {
        setLoading(true);

        const { error } = await sendEmail({
          recipients,
          episode,
        });

        if (error) toast.error(error);
        else toast.success(`${totalRecipients} invites sent!`);

        setLoading(false);
      }
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
  episode,
}: {
  recipients: string[];
  episode: TransformedEpisode;
}) => {
  const body = await pretty(
    await render(<PodcastInviteEmail data={episode} />),
  );

  return await sendEmailAction({
    to: recipients,
    subject: episode.topic,
    body,
    incognito: true,
  });
};
