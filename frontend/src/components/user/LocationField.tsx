import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationField({ value, onChange }: Props) {
  const [location, setLocation] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocation(newValue);
    onChange(newValue); // ✅ update parent immediately
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/api/location/reverse?lat=${latitude}&lon=${longitude}`
          );

          if (!response.ok) throw new Error("Failed to get location");

          const data = await response.json();
          const address = data.address || {};

          const formattedLocation = [
            address.house_number,
            address.road,
            address.suburb,
            address.city || address.town || address.village,
            address.state,
            address.postcode,
            address.country,
          ]
            .filter(Boolean)
            .join(", ");

          setLocation(formattedLocation);
          onChange(formattedLocation);
        } catch (err) {
          console.error("Geocoding error:", err);
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          onChange(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        }
      },
      (error) => {
        console.error(error);
        alert("Unable to retrieve your location.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="grid gap-1">
      <Label htmlFor="joblocation">Job Location</Label>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter job location"
          value={location}
          onChange={handleInputChange}
        />

        <Button type="button" onClick={handleGetLocation} variant="default">
          Use My Location
        </Button>
      </div>
    </div>
  );
}
