export function LoginPage() {
  return (
    <div>
      <div className="max-w-lg flex flex-col mx-auto p-8 gap-8 border-2 rounded-xl">
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
            className="h-10 bg-background-900 border-b-2 focus:outline-0 focus:border-custom-100"
          />
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="h-10 bg-background-900 border-b-2 focus:outline-0 focus:border-custom-100"
          />
        </div>
        <div className="flex justify-center items-center text-xl">
          <p className="">Não tem uma conta. </p> &nbsp;
          <a href="#" className="text-custom-100">
            Cadastre-se
          </a>
        </div>
        <button className="bg-custom-100 h-12 text-xl font-semibold rounded-xl ">
          Entrar
        </button>
      </div>
    </div>
  )
}
