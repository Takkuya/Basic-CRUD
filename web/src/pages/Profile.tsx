import { Header } from "../components/Header"

export function ProfilePage() {
  return (
    <>
      <Header />
      <div className="mt-12 flex flex-col max-w-lg w-screen mx-auto ">
        <h1 className="text-xl border-b-2 border-b-custom-200 pb-2">
          Editar Perfil
        </h1>
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="flex flex-col gap-6 items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/56007750?v=4"
              className="inline object-cover w-52 h-52 mr-2 rounded-full"
              alt="Profile Image"
            />
            <button className="hover-transition p-2 border-2 rounded-lg border-slate-400 text-lg w-40 hover:bg-slate-400 hover:text-slate-900">
              Trocar Imagem
            </button>
          </div>
          <div className="flex flex-col">
            <h1>Olá mundo</h1>
            <input
              className="input-primary bg-background-900"
              type="text"
              placeholder="Username"
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
          <div className="flex flex-col gap-4">
            <button className="btn-primary">Salvar</button>
            <button className="btn-primary">Cancelar</button>
          </div>
        </div>
      </div>
    </>
  )
}
