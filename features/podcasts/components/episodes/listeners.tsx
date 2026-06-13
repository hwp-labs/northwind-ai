export const Listeners = ({ value }: { value?: number }) => {
  return (
    <small className="font-f2_ text-muted-foreground text-sm font-medium whitespace-nowrap">
      {value ? <>{value}x</> : "RSVP"}
    </small>
  );
};
