export async function GET() {
  return Response.json({
    success: true,
    data: [
      {
        id: 22,
        datetime: "2026-07-08T09:00:00.000Z",
        thumbnail: "/uploads/logos/oau.jpg",
        topic: "Event-Driven Programming Pt.2",
        summary: "E.O. Tugbeh",
        favorite: true,
      },
      {
        id: 20,
        datetime: "2026-07-01T09:00:00.000Z",
        thumbnail: "/uploads/logos/oau.jpg",
        topic: "Event-Driven Programming Pt.1",
        summary: "H.M. Oshomoh",
        virtualLink: "https://youtu.be/dhMPSzedWNQ",
        favorite: false,
      },
    ],
  });
}
