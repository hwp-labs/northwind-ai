import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

export const Summary = ({
  isFiresideChat,
  guest,
  topic,
}: TransformedPodcastDto) => {
  if (topic.descriptionRichText) {
    return (
      <span dangerouslySetInnerHTML={{ __html: topic.descriptionRichText }} />
    );
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
