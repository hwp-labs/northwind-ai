import { z, zodUtil } from "@/utils/zod-util";
import { BaseEntity, PrimaryKeyType } from "../base/types";
import { ApiQueryParams } from "../../types";

export const TABLE = "listeners";

export interface ListenerEntity extends BaseEntity {
  podcast_id: PrimaryKeyType;
  username: string;
}

export type CreateListenerDto = Required<
  Omit<ListenerEntity, keyof BaseEntity>
>;

export interface QueryListenerDto extends ApiQueryParams<
  Pick<ListenerEntity, "podcast_id">
> {
  filterByPodcastId?: PrimaryKeyType;
}

export const listenerSchema = z.object({
  username: zodUtil.emailOrTel(),
});

export type ListenerSchema = z.infer<typeof listenerSchema>;
