import { z, zodUtil } from "@/utils/zod-util";
import { BaseEntity, PrimaryKeyType } from "../base/types";

export const TABLE = "listeners";

export interface ListenerEntity extends BaseEntity {
  podcast_id: PrimaryKeyType;
  username: string;
}

export type CreateListenerDto = Required<
  Omit<ListenerEntity, keyof BaseEntity>
>;

export const listenerSchema = z.object({
  username: z.string().refine(
    (val) =>
      z.email().safeParse(val).success ||
      z
        .string()
        .regex(/^\+?[0-9]{10,15}$/)
        .safeParse(val).success,
    { message: "Entry must be a valid Email or telephone" },
  ),
});

export type ListenerSchema = z.infer<typeof listenerSchema>;
