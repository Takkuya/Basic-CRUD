import { Header } from "../components/Header"
import { Repositories } from "../components/Repositories"
import { Search } from "../components/Search"

export function MainPage() {
  return (
    <div className=" flex flex-col gap-12">
      <Header />
      <Search />
      <Repositories />
    </div>
  )
}
