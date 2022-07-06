import { Header } from "../components/Header"
import { WarningCircle } from "phosphor-react"

export function ProfilePage() {
  return (
    <>
      <Header />
      <div className="my-12 flex flex-col max-w-lg w-screen mx-auto ">
        <h1 className="text-xl border-b-2 border-b-custom-200 pb-2">
          Editar Perfil
        </h1>

        <div className="flex flex-col items-center justify-center mt-8">
          <div className="flex flex-col gap-4 items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/56007750?v=4"
              className="inline object-cover w-52 h-52 mr-2 rounded-full"
              alt="Profile Image"
            />
            <button className="hover-transition p-2 border-2 rounded-lg border-slate-400 text-lg w-40 hover:bg-slate-400 hover:text-slate-900">
              Trocar Imagem
            </button>
          </div>
          <div className="flex flex-col w-80 gap-4 mt-8 ">
            {/* <div className="flex flex-col justify-center items-center text-lg w-90 p-2 border-2 border-error-300 text-error-300 rounded-md font-medium tracking-wider">
              <WarningCircle weight="bold" size={32} />
              <span>Mensagem de erro maneira</span>
            </div> */}
            <input
              className="input-primary bg-background-900"
              type="text"
              placeholder="Username"
            />
            <input
              className="input-primary bg-background-900"
              type="email"
              placeholder="Email"
            />
            <input
              className="input-primary bg-background-900"
              type="password"
              placeholder="Password"
            />
            <input
              className="input-primary bg-background-900"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex align-center justify-between gap-8 mt-8 border-b w-80 pb-4 border-custom-200">
            <button className="bg-gray-700 border-2 border-gray-700 text-lg rounded-md p-2 tracking-wider hover-transition hover:transition hover:bg-transparent">
              Cancelar
            </button>
            <button className="btn-primary">Salvar</button>
          </div>
          <button className="text-error-300 w-40 mt-4 border-2 border-error-300 text-lg rounded-md p-2 tracking-wider hover-transition hover:transition hover:bg-transparent">
            Deletar conta
          </button>
        </div>
      </div>
    </>
  )
}
