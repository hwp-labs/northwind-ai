import { z, zodUtil } from "@/utils/zod-util";
import { BaseEntity, PrimaryKeyType } from "../base/types";

export const TABLE = "listeners";

export interface ListenerEntity extends BaseEntity {
  podcast_id: PrimaryKeyType;
  display_name: string;
}

export type CreateListenerDto = Required<Omit<ListenerEntity, keyof BaseEntity>>;

export const listenerSchema = z
  .object({
    podcast_id: z.string(),
    display_name: zodUtil.text({ msg: "Display name is required" }),
  })

export type ListenerSchema = z.infer<typeof listenerSchema>;
