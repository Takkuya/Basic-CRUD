import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth"

export function LoginPage() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    signIn({ email, password })
  }

  return (
    <div>
      <div className="flex align-center items-center h-screen">
        <div className="max-w-lg w-4/12 flex flex-col mx-auto p-8 gap-8 rounded-lg bg-slate-800">
          <div className="flex mx-auto text-5xl ">
            <h2 className="tracking-widest">LOGIN</h2>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xl ">
              Email:
            </label>
            <input
              type="text"
              name="email"
              className="input-primary bg-slate-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input-primary bg-slate-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center align-center text-xl">
            <p className="">Não tem uma conta? </p> &nbsp;
            <Link to="/signup" className="text-custom-200">
              Cadastre-se
            </Link>
          </div>
          <button className="btn-primary" onClick={handleLogin}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  )
}
