import { Link } from "react-router-dom"

export function SignupPage() {
  return (
    <div className="flex align-center items-center h-screen">
      <div className="max-w-lg w-4/12 flex flex-col mx-auto p-8 gap-8 rounded-lg bg-slate-800">
        <div className="flex mx-auto text-5xl ">
          <h2 className="tracking-widest">CADASTRO</h2>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-xl ">
            Userame:
          </label>
          <input
            type="text"
            name="username"
            className="input-primary bg-slate-800"
          />
          <label htmlFor="email" className="text-xl ">
            Email:
          </label>
          <input
            type="text"
            name="email"
            className="input-primary bg-slate-800"
          />
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input-primary bg-slate-800"
          />
        </div>
        <div className="flex justify-center align-center text-xl">
          <p className="">Já tem uma conta? </p> &nbsp;
          <Link to="/login" className="text-custom-200">
            Login
          </Link>
        </div>
        <button className="btn-primary">Entrar</button>
      </div>
    </div>
  )
}
