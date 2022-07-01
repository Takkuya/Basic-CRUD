import { PencilSimple, X, Plus } from "phosphor-react"

export function Repositories() {
  return (
    <div className="flex flex-col max-w-lg w-screen mx-auto text-xl gap-y-4">
      <div className="flex justify-between items-center text-xl border-b-2 border-custom-200 pb-2">
        <h1>Meus repositórios</h1>
        <button className="hover-transition duration-200 hover:opacity-40">
          <Plus color="#fff" weight="bold" size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-2 rounded-lg border-2 border-slate-700 p-4 hover-transition hover:translate-y-2 hover:cursor-pointer">
        <div className="flex justify-between">
          <p className="text-lg text-slate-400">Takkuya</p>
          <button className="hover-transition duration-200 hover:opacity-40">
            <X color="#F75A68" weight="bold" size={24} />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <p>Criando JavaScript do 0</p>
          <button className="hover-transition duration-200 hover:opacity-40">
            <PencilSimple color="#FBA94C" weight="bold" size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
