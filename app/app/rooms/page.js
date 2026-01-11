export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      title: "1 BHK Room",
      price: 4000,
      city: "Raipur"
    },
    {
      id: 2,
      title: "2 BHK Room",
      price: 6500,
      city: "Bilaspur"
    }
  ];

  return (
    <main style={{ padding: 20 }}>
      <h1>Available Rooms</h1>

      {rooms.map(room => (
        <div key={room.id} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <h3>{room.title}</h3>
          <p>₹{room.price} / month</p>
          <p>City: {room.city}</p>

          <a href={`/rooms/${room.id}`}>View Details</a>
        </div>
      ))}
    </main>
  );
}
