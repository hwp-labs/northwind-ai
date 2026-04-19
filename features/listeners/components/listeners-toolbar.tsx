"use client";

import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { SendIcon } from "lucide-react";

export const ListenersToolbar = ({ id }: { id: PrimaryKeyType }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleAction = async (value: string) => {
    if (value !== "delete") return;

    if (confirm("Confirm delete?")) {
      setLoading(true);

      const { data, error } = await deleteAction({
        path: PROTECTED_PATH.industries,
        table: TABLE,
        id,
      });

      if (error) toast.error(error);
      if (data) toast.success(`Row id ${id} deleted!`);

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
