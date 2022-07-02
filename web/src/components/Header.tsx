import { Profile } from "./Profile"

export function Header() {
  return (
    <div className="flex justify-center bg-slate-700 p-4 px-24">
      <div className="max-w-7xl flex items-center justify-between w-full ">
        <div className="flex items-center">
          <h3 className="text-3xl cursor-pointer">
            My <span className="text-custom-200 font-bold">| </span>Repo
          </h3>
          <h1></h1>
        </div>
        <Profile />
      </div>
    </div>
  )
}
