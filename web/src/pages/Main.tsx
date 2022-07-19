import { useContext, useEffect, useState } from "react"
import { Repositories } from "../components/Repositories"
import { Search } from "../components/Search"
import { AuthContext } from "../context/auth"
import {
  createRepository,
  deleteRepository,
  getRepositories,
} from "../services/api"

//repositório que retorna do array de repositórios
export type SingleRepo = {
  createdAt: string
  repositoryName: string
  updatedAt: string
  url: string
  userId: string
  _id: string
}

export function MainPage() {
  const { user } = useContext(AuthContext)

  const [repositories, setRepositories] = useState<SingleRepo[]>([])
  const [loading, setLoading] = useState(true)

  const userId = user?.id

  //pegando dados do backend
  const loadData = async (query: string) => {
    if (!userId) {
      return
    }

    try {
      const response = await getRepositories({ userId, query })

      setRepositories(response.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
      // setLoadingError(true)
    }
  }

  //loading data
  useEffect(() => {
    if (userId) {
      async function fetchData() {
        setLoading(false)

        await loadData("")
      }
      fetchData()
    }
  }, [userId])

  const handleDeleteRepository = async (repository: SingleRepo) => {
    const id = repository._id

    if (!userId) {
      return
    }

    await deleteRepository({ userId, id })

    await loadData("")
  }

  const handleNewRepository = async (repositoryName: string) => {
    try {
      console.log("função de criar repoistório")

      if (!userId) {
        return
      }

      await createRepository({ userId, repositoryName })
      await loadData("")
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className=" flex flex-col gap-12">
      <Search />
      <Repositories
        repositories={repositories}
        onDeleteRepository={handleDeleteRepository}
        onNewRepository={handleNewRepository}
      />
    </div>
  )
}
