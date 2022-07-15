import { Link, useLocation } from "react-router-dom"
import { Profile } from "./Profile"

export function Header() {
  const hideOnRoutes = ["/login", "/signUp"]

  const location = useLocation()

  if (hideOnRoutes.includes(location.pathname)) {
    return null
  }

  return (
    <div className="flex justify-center bg-slate-700 p-4 px-24 mb-12">
      <div className="max-w-7xl flex items-center justify-between w-full ">
        <div className="flex items-center">
          <Link to="/">
            <h3 className="hover-transition text-3xl cursor-pointer hover:text-custom-200">
              My {""}
              <span className="text-custom-200 font-bold">| {""}</span>
              Repo
            </h3>
          </Link>
        </div>
        <Profile />
      </div>
    </div>
  )
}
