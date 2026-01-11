export default function RoomDetailPage({ params }) {
  const rooms = [
    {
      id: "1",
      title: "1 BHK Room",
      price: 4000,
      city: "Raipur",
      owner: "Sunil",
      mobile: "9999999999"
    },
    {
      id: "2",
      title: "2 BHK Room",
      price: 6500,
      city: "Bilaspur",
      owner: "Ramesh",
      mobile: "8888888888"
    }
  ];

  const room = rooms.find(r => r.id === params.id);

  if (!room) {
    return <h2>Room not found</h2>;
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>{room.title}</h1>
      <p>Rent: ₹{room.price} / month</p>
      <p>City: {room.city}</p>
      <p>Owner: {room.owner}</p>
      <p>Mobile: {room.mobile}</p>

      <br />
      <a href="/rooms">⬅ Back to Rooms</a>
    </main>
  );
}
