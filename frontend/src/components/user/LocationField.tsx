import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface LocationFieldProps {
  location: string;
  setLocation: (loc: string) => void;
}

export default function LocationField({
  location,
  setLocation,
}: LocationFieldProps) {
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
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();

          // Use city + state + country if available
          const address = data.address;
          const formattedLocation =
            `${address.city || address.town || address.village || ""}, ` +
            `${address.state || ""}, ${address.country || ""}`;

          setLocation(formattedLocation);
        } catch (err) {
          console.error(err);
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        }
      },
      (error) => {
        console.error(error);
        alert("Unable to retrieve your location.");
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
          onChange={(e) => setLocation(e.target.value)}
        />

        <Button type="button" onClick={handleGetLocation} variant="default">
          Use My Location
        </Button>
      </div>
    </div>
  );
}
