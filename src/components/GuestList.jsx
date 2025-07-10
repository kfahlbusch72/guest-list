import React from "react";

export default function GuestList({ guests = [], onSelectGuest }) {
  return (
    <div>
      <h2>Guest List</h2>
      {guests.length === 0 ? (
        <p>No guests available</p>
      ) : (
        <ul>
          {guests.map((guest) => (
            <li
              key={guest.id}
              style={{ cursor: "pointer", marginBottom: "1rem" }}
              onClick={() => onSelectGuest(guest.id)}
            >
              <strong>{guest.name}</strong> <br />
              <em>{guest.email}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
