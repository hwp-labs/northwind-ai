import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

interface Props extends TransformedPodcastDto {
  noLineBreak?: boolean;
}

export const Summary = ({
  isFiresideChat,
  guest,
  topic,
  noLineBreak,
}: Props) => {
  if (topic.descriptionRichText) {
    let html = topic.descriptionRichText
      .replaceAll("%x", guest.name)
      .replaceAll("%y", topic.title);
    html = noLineBreak ? html.replaceAll("<br/>", " ") : html;
    //
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return isFiresideChat ? (
    <>
      A fireside chat with <strong>{guest.name}</strong> ({guest.jobTitle},{" "}
      {guest.company}); on {topic.description}.
    </>
  ) : (
    <>
      A design session with <strong>{guest.name}</strong> ({guest.jobTitle},{" "}
      {guest.company}); creator of <strong>{topic.title}</strong> -{" "}
      {topic.description}.
    </>
  );
};
