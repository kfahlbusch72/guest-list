const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2506-FT-Karl";
const API = BASE_URL + COHORT;

import { useState, useEffect } from "react";

export function useGuest() {
  const [guests, setGuests] = useState([]);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [guestDetails, setGuestDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API}/guests`);
        if (!response.ok) throw Error("Failed to fetch guests");
        const result = await response.json();
        setGuests(result.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGuests();
  }, []);

  useEffect(() => {
    if (!selectedGuestId) {
      setGuestDetails(null);
      return;
    }

    const fetchGuestDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API}/guests/${selectedGuestId}`);
        if (!response.ok) throw Error("Failed to fetch guest details");
        const result = await response.json();
        setGuestDetails(result.data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGuestDetails();
  }, [selectedGuestId]);

  return {
    guests,
    selectedGuestId,
    setSelectedGuestId,
    guestDetails,
    loading,
    error,
  };
}
