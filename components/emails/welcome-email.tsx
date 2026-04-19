import { ContactHelper } from "@/lib/supabase/services/contacts/helper";
import { ContactSchema } from "@/lib/supabase/services/contacts/types";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";
//
import { Builder } from "./builder";

interface Props {
  data: ContactSchema;
}

export const WelcomeEmail = ({ data }: Props) => {
  const contact = new ContactHelper(data);
  const greeting = `${COPY.email.welcome} ${contact.DisplayName()}!`;
  //
  return (
    <Builder.Template preview={greeting} heading={greeting}>
      <Builder.P>{APP.description}</Builder.P>
      <Builder.Banner />
      <Builder.List
        list={COPY.valueProposition.map(({ description }) => description)}
      />
    </Builder.Template>
  );
};
