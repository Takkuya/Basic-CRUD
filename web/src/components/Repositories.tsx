import { Dialog } from "@headlessui/react"
import { PencilSimple, X, Plus } from "phosphor-react"
import { useState } from "react"
import { CustomModal } from "./Modal"

export function Repositories() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col max-w-lg w-screen mx-auto text-xl gap-y-4">
      <div className="flex justify-between items-center text-xl border-b-2 border-custom-200 pb-2">
        <h1>Meus repositórios</h1>
        <button className="hover-transition duration-200 hover:opacity-40">
          <Plus color="#fff" weight="bold" size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-2 rounded-lg border-2 border-slate-700 p-4 hover-transition hover:translate-y-1 hover:cursor-pointer">
        <div className="flex justify-between">
          <p className="text-lg text-slate-400">Takkuya</p>
          <button className="hover-transition duration-200 hover:opacity-40">
            <CustomModal
              visible={isModalOpen}
              toggle={setIsModalOpen}
              buttonContent={<X color="#F75A68" weight="bold" size={24} />}
            >
              <>
                <Dialog.Title className="flex justify-between items-center">
                  <h2 className="text-xl font-medium">Apagar repositório?</h2>
                  <button
                    className="hover-transition cursor-pointer duration-200 hover:opacity-40"
                    onClick={() => setIsModalOpen(!isModalOpen)}
                  >
                    <X size={24} weight={"bold"} />
                  </button>
                </Dialog.Title>
                <div className="border" />
                <Dialog.Description className="flex text-lg break-all">
                  Isso irá deletar seu repositório permanentemente
                </Dialog.Description>

                <div className="flex items-center justify-end mt-2 gap-4">
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="bg-slate-600 border-2 border-slate-600 text-lg rounded-md p-2 tracking-wider hover-transition hover:transition hover:bg-transparent"
                  >
                    Cancelar
                  </button>
                  <button className="bg-error-100 text-lg rounded-md  p-2 tracking-wider hover-transition border-2 border-error-100 hover:transition hover:bg-transparent">
                    Apagar
                  </button>
                </div>
              </>
            </CustomModal>
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
