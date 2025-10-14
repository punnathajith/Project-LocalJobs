import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PasswordForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Password Information</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="currentPassword">
            Current Password<span className="text-red-500">*</span>
          </Label>
          <Input
            type="password"
            placeholder="Enter your current password"
          />
        </div>

        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="new-password">
            New Password<span className="text-red-500">*</span>
          </Label>
          <Input
            type="password"
            placeholder="Enter your new password"
          />
        </div>

        <ul className="col-span-2 text-sm text-gray-500 space-y-1 mt-2 font-Geist">
          <li>• At least 8 characters and up to 12 characters</li>
          <li>• At least one lowercase character</li>
          <li>• Password must include at least one uppercase character</li>
        </ul>

        <Button
          type="submit"
          className="default col-span-2"
        >
          Save all
        </Button>
      </form>
    </div>
  )
}

export default PasswordForm