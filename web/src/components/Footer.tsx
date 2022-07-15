import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react"

export function Footer() {
  return (
    <div className="bg-slate-700 flex justify-around items-center gap-2 p-4 mt-auto">
      <p className="text-lg">©{new Date().getFullYear()} Takkuya</p>
      <div className="flex gap-2 items-center">
        <a href="mailto:takuyagabriel@gmail.com">
          <EnvelopeSimple
            size={36}
            className="hover-transition duration-200 hover:opacity-40 cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/notifications/">
          <LinkedinLogo
            size={32}
            className="hover-transition duration-200 hover:opacity-40 cursor-pointer"
          />
        </a>
        <a href="https://github.com/Takkuya">
          <GithubLogo
            size={34}
            className="hover-transition duration-200 hover:opacity-40 cursor-pointer"
          />
        </a>
      </div>
    </div>
  )
}
