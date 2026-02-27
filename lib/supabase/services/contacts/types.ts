import { z, zodUtil } from "@/utils/zod-util";
import { BaseEntity, PrimaryKeyType } from "../base/types";

export const TABLE = "contacts";

export interface ContactEntity extends BaseEntity {
  name?: string;
  email: string;
  telephone?: string;
  //
  business_name?: string;
  industry_id?: PrimaryKeyType | null;
  industry_other?: string | null;
  location?: string;
  state_id?: PrimaryKeyType;
  //
  subscribed?: boolean;
}

export type CreateContactDto = Required<Omit<ContactEntity, keyof BaseEntity>>;

export const contactSchema = z
  .object({
    name: zodUtil.personName("Contact name"),
    email: zodUtil.email(),
    telephone: zodUtil.tel(),
    business_name: zodUtil.personName("Business name", 5),
    industry_id: z.string(),
    industry_other: z.string().nullable().optional(),
    location: zodUtil.personName("Location"),
    state_id: z.string(),
    subscribed: z.boolean().optional(),
  })
  .refine((v) => v.industry_id !== "other" || !!v.industry_other, {
    message: "Please specify your industry",
    path: ["industryOther"],
  });

export type ContactSchema = z.infer<typeof contactSchema>;
