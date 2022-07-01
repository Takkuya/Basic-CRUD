export function Search() {
  return (
    <div className="max-w-lg w-full mx-auto bg-slate-700 p-4 rounded-lg">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Procurar..."
          className="input-primary bg-slate-700 text-xl focus:outline-0 focus:border-custom-200 placeholder:text-zinc-300 "
        />
        <button className="btn-primary">Procurar</button>
        <button className="btn-primary">Limpar</button>
      </div>
    </div>
  )
}
