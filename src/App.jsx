import React from "react";
import { useGuest } from "./useGuest";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const {
    guests,
    selectedGuestId,
    setSelectedGuestId,
    guestDetails,
    loading,
    error,
  } = useGuest();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!guests || !Array.isArray(guests)) {
    return <p>Loading guests...</p>;
  }

  return (
    <>
      <h1>Fullstack Convention Guest Directory</h1>
      {selectedGuestId && guestDetails ? (
        <GuestDetails
          guestDetails={guestDetails}
          onBack={() => setSelectedGuestId(null)}
        />
      ) : (
        <GuestList guests={guests} onSelectGuest={setSelectedGuestId} />
      )}
    </>
  );
}
