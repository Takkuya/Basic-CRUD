import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api, createSession } from "../services/api"

type AuthContextProps = {
  isAuthenticated: boolean
  user: {
    id: string
    username: string
    email: string
  } | null
  loading: boolean
  signIn: ({ email, password }: SignInProps) => Promise<void>
  signOut: () => void
}

type AuthContextProviderProps = {
  children: JSX.Element
}

type SignInProps = {
  email: string
  password: string
}

export type Repository = {
  repositoryName: string
  _id: string
  name: string
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("user")

    const token = localStorage.getItem("token")

    if (user && token) {
      setUser(JSON.parse(user))
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setIsAuthenticated(true)
      setLoading(false)
      navigate("/")
    } else {
      setLoading(false)
      navigate("/login")
    }

    setLoading(false)
  }, [])

  //login
  const signIn = async ({ email, password }: SignInProps) => {
    const response = await createSession({ email, password })

    localStorage.setItem("user", JSON.stringify(response.data.user))

    localStorage.setItem("token", response.data.token)

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`

    //getting user
    setUser(response.data.user)

    navigate("/")
  }

  const signOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    api.defaults.headers.common["Authorization"] = ""
    setUser(null)
    setIsAuthenticated(false)

    navigate("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
