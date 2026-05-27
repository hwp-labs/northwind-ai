import { toast } from "sonner";
import { sleep } from "@/utils";
import { COLOR } from "@/constants/COLOR";

type Payload = string | { title: string; description: string };

export function useToast() {
  const _parsePayload = (payload: Payload) =>
    typeof payload === "string"
      ? [payload, undefined]
      : [payload.title, payload.description];

  const success = (payload: Payload) => {
    const [title, description] = _parsePayload(payload);

    toast.success(title, {
      description,
      style: { background: COLOR.success },
    });
  };

  const error = (payload: Payload) => {
    const [title, description] = _parsePayload(payload);

    toast.warning(title, {
      description,
      style: { background: COLOR.danger },
    });
  };

  const previewAsync = async (_: unknown) => {
    const [title, description] = [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    ];

    toast(title, { description });

    await sleep(1.5);
    toast.info(title, {
      description,
      style: { background: COLOR.info },
    });

    await sleep(1.5);
    toast.success(title, {
      description,
      style: { background: COLOR.success },
    });

    await sleep(1.5);
    toast.warning(title, {
      description,
      style: { background: COLOR.warning },
    });

    await sleep(1.5);
    toast.error(title, {
      description,
      style: { background: COLOR.danger },
    });
  };

  return { success, error, previewAsync };
}
