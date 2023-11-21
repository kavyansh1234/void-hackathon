import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [location, setLocation] = useState("Fetching location...");
  const date = new Date().toLocaleString();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Use a geocoding service to get the city name
        const city = await fetchCityName(latitude, longitude);
        setLocation(city);
      },
      (error) => {
        console.error(error);
        setLocation("Unable to retrieve location");
      }
    );
  }, []);

  const fetchCityName = async (latitude, longitude) => {
    // Example using OpenStreetMap's Nominatim service
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    return data.address.city || "City not found";
  };

  return (
    <div className="h-[93vh] w-screen flex flex-col items-center py-16">
      <div className="flex flex-col gap-10">
        <div className="flex gap-3 w-[340px] flex-wrap">
          <div className="border-2 p-4 rounded-2xl w-[330px]">
            <h1>Current time</h1>
            <p>{date}</p>
          </div>

          <div className="border-2 p-4 rounded-2xl w-[330px]">
            <h1>Locality</h1>
            <p>{location}</p>
          </div>
        </div>
        <div className="border-2 p-4 rounded-2xl w-[330px] text-center ">
          <div className="mb-2">Voting booth</div>
          <Link to={"/voting-booth"}>
            <button className="w-full bg-blue-300">Vote</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
