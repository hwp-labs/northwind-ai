import { useState } from "react";
//
import { useToast } from "@/hooks/use-toast";
import { createListenersAction } from "@/lib/supabase/services/listeners/actions/createListenerAction";
import { deleteListenersByPodcastIdAndUsernamesAction } from "@/lib/supabase/services/listeners/actions/deleteListenerAction";
import { PATH_PROTECTED } from "@/constants/PATH";
import { seed } from "./seed";

const path = PATH_PROTECTED.seedPortal;
const podcast_id = 29;

export type ActionType = "Commit" | "Rollback";

export function useSeedInHouzEmails() {
  const toast = useToast();
  const [actionName, setActionName] = useState<ActionType | undefined>();
  const [loading, setLoading] = useState(false);

  const handleCommitRsvp = async () => {
    if (confirm(`Confirm action?`)) {
      setActionName("Commit");
      setLoading(true);

      const payload = seed.map((username) => ({
        podcast_id,
        username,
      }));

      {
        const { data, error } = await createListenersAction(payload, path);
        if (error) toast.error(error);
        else if (data) toast.success(`Seeded ${data.length} emails!`);
        setLoading(false);
      }
    }
  };

  const handleRollbackRsvp = async () => {
    if (confirm(`Confirm action?`)) {
      setActionName("Rollback");
      setLoading(true);

      const payload = {
        podcast_id,
        usernames: seed,
      };

      {
        const { data, error } =
          await deleteListenersByPodcastIdAndUsernamesAction(payload);
        if (error) toast.error(error);
        else if (data) toast.success(`Deleted ${data.length} emails!`);
        setLoading(false);
      }
    }
  };

  return {
    actionName,
    loading,
    handleCommitRsvp,
    handleRollbackRsvp,
  };
}
