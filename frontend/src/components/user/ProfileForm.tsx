import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const ProfileForm = () => {
  return (
<div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">General Information</h2>
      <form>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="firstname">First Name</Label>
              <Input id="firstname" type="text" placeholder="First Name" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="lastname">Last Name</Label>
              <Input id="lastname" type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="country">Country</Label>
              <Input id="country" type="text" placeholder="Country" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="city">City</Label>
              <Input id="city" type="text" placeholder="City" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="location">Location</Label>
              <Input id="location" type="text" placeholder="Location" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="zip">Zip Code</Label>
              <Input id="zip" type="text" placeholder="ZIP Code" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>

          <Button className="default w-fit">Save all</Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
