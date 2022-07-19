import axios from "axios"

type CreateSessionProps = {
  email: string
  password: string
}

type GetRepositoriesProps = {
  userId: string
  query?: string
}

type CreateRepositoryProps = {
  userId: string
  repositoryName: string
}

type DeleteRepositoryProps = {
  userId: string
  id: string
}

export const api = axios.create({
  baseURL: "http://localhost:5000",
})

export const createSession = async ({
  email,
  password,
}: CreateSessionProps) => {
  return api.post("/sessions", { email, password })
}

export const getRepositories = async ({
  userId,
  query,
}: GetRepositoriesProps) => {
  let url = `/users/${userId}/repositories`

  if (query !== url) {
    url += `?q=${query}`
  }

  return api.get(url)
}

export const createRepository = async ({
  userId,
  repositoryName,
}: CreateRepositoryProps) => {
  const url = `/users/${userId}/repositories`

  return api.post(url, { repositoryName })
}

export const deleteRepository = async ({
  userId,
  id,
}: DeleteRepositoryProps) => {
  const url = `/users/${userId}/repositories/${id}`

  return api.delete(url)
}

// const getRepositoryName = (name: string) => {
//   console.log("nome legal", name)
//   // const regex =
//   //   /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/

//   // //método match, recebe uma regex, retorna um array contendo os resultados da procura
//   // const match = url.match(regex)

//   // //   console.log('match', match)

//   // //se encontrei a segunda parte da minha regex
//   // if (match![2]) {
//   //   const values = match![2].split("/")

//   //   // console.log('values', values)

//   //   //o nome que retorna quando criamos o repositório
//   //   return `${values[1]}/${values[2]}`
//   // }

//   return name
// }
