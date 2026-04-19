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

export function useToolbar(filteredIds,recipients) {
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
}