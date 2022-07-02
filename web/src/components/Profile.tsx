import { CustomDropdown } from "./Dropdown"

export function Profile() {
  return (
    <div className="flex items-center justify-center gap-1">
      <img
        src="https://avatars.githubusercontent.com/u/56007750?v=4"
        className="inline object-cover w-12 h-12 mr-2 rounded-full"
        alt="Profile Image"
      />

      <div className="flex items-center justify-center gap-1">
        <h2 className="text-xl font-normal">Takkuya</h2>
        <CustomDropdown />
      </div>
    </div>
  )
}
