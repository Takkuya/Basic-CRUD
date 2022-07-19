import { Dialog } from "@headlessui/react"
import { PencilSimple, X, Plus } from "phosphor-react"
import { useContext, useMemo, useState } from "react"
import { AuthContext, Repository } from "../context/auth"
import { SingleRepo } from "../pages/Main"

import { CustomModal } from "./Modal"

type RepositoriesProps = {
  repositories: SingleRepo[]
  onDeleteRepository: (repository: SingleRepo) => void
  onNewRepository: (repository: string) => void
}

export function Repositories({
  repositories,
  onDeleteRepository,
  onNewRepository,
}: RepositoriesProps) {
  const { user } = useContext(AuthContext)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCreateRepositoryModalOpen, setIsCreateRepositoryModalOpen] =
    useState(false)
  const [newRepository, setNewRepository] = useState("")
  const [repository, setRepository] = useState<SingleRepo>()

  //____
  //validação na criação dos repositórios
  const isRepositoryNameEmpty = !newRepository.trim()

  const isRepositoryNameRepeated = useMemo(() => {
    return repositories.some((repo: SingleRepo) => {
      return repo.repositoryName === newRepository
    })
  }, [newRepository])

  const hasError = isRepositoryNameEmpty || isRepositoryNameRepeated

  return (
    <div className="flex flex-col max-w-lg w-screen mx-auto text-xl gap-y-4">
      <div className="flex justify-between items-center text-xl border-b-2 border-custom-200 pb-2">
        <h1>Meus repositórios</h1>

        <div className="h-6">
          <CustomModal
            visible={isCreateRepositoryModalOpen}
            toggle={setIsCreateRepositoryModalOpen}
            buttonContent={
              <Plus
                color="#fff"
                weight="bold"
                size={24}
                onClick={() =>
                  setIsCreateRepositoryModalOpen(!isCreateRepositoryModalOpen)
                }
              />
            }
            title={"Criar novo repositório"}
          >
            <>
              <div className="flex flex-col gap-1 my-2">
                <label htmlFor="new-repo">Nome repositório</label>
                <input
                  type="text"
                  name="new-repo"
                  value={newRepository}
                  className="input-primary bg-slate-700"
                  onChange={(e) => setNewRepository(e.target.value)}
                />

                {isRepositoryNameRepeated && (
                  <div className="flex items-center justify-center p-2 border-2 bg-error-100 border-error-300 text-error-300 rounded-md my-2">
                    <h1>Nome do repositório já existe</h1>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-end mt-2 gap-4">
                <button
                  onClick={() =>
                    setIsCreateRepositoryModalOpen(!isCreateRepositoryModalOpen)
                  }
                  className="bg-slate-600 border-2 border-slate-600 text-lg rounded-md p-2 tracking-wider hover-transition hover:transition hover:bg-transparent"
                >
                  Cancelar
                </button>
                <button
                  className={
                    "bg-custom-200 text-lg rounded-md  p-2 tracking-wider hover-transition border-2 border-custom-200 hover:transition hover:bg-transparent disabled:opacity-30 disabled:bg-custom-200"
                  }
                  disabled={hasError}
                  onClick={() => {
                    onNewRepository(newRepository)
                  }}
                >
                  Criar
                </button>
              </div>
            </>
          </CustomModal>
        </div>
      </div>

      {repositories.map((repo: any) => (
        <div
          className="flex flex-col gap-2 rounded-lg border-2 border-slate-700 p-4"
          key={repo._id}
        >
          <div className="flex justify-between">
            <p className="text-lg text-slate-400">{user?.username}</p>
            <X
              color="#F75A68"
              className="cursor-pointer"
              weight="bold"
              size={24}
              onClick={() => {
                setIsDeleteModalOpen(!isDeleteModalOpen)
                setRepository(repo)
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <p>{repo.repositoryName}</p>
            <button className="hover-transition duration-200 hover:opacity-40">
              <PencilSimple color="#FBA94C" weight="bold" size={24} />
            </button>
          </div>
        </div>
      ))}

      <button className="hover-transition duration-200 hover:opacity-40">
        <CustomModal
          visible={isDeleteModalOpen}
          toggle={setIsDeleteModalOpen}
          title={"Apagar repositório?"}
        >
          <>
            <Dialog.Description className="flex text-lg break-all">
              Você tem certeza que deseja deletar esse repositório? Essa ação
              será permanente
            </Dialog.Description>

            <div className="flex items-center justify-end mt-2 gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
                className="bg-slate-600 border-2 border-slate-600 text-lg rounded-md p-2 tracking-wider hover-transition hover:transition hover:bg-transparent"
              >
                Cancelar
              </button>
              <button
                className="bg-error-300 text-lg rounded-md  p-2 tracking-wider hover-transition border-2 border-error-300 hover:transition hover:bg-transparent"
                onClick={() => {
                  if (repository) {
                    onDeleteRepository(repository)
                  }
                  setIsDeleteModalOpen(!isDeleteModalOpen)
                }}
              >
                Apagar
              </button>
            </div>
          </>
        </CustomModal>
      </button>
    </div>
  )
}
