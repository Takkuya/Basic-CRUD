import { Menu, Transition } from "@headlessui/react"
import { CaretDown, CaretUp } from "phosphor-react"

export function CustomDropdown() {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center">
            {open ? (
              <CaretUp
                color="#bd0040"
                weight="bold"
                size={26}
                className="hover-transition duration-200 hover:opacity-70"
              />
            ) : (
              <CaretDown
                color="#bd0040"
                weight="bold"
                size={26}
                className="hover-transition duration-200 hover:opacity-70"
              />
            )}
          </Menu.Button>

          {/* adicionando animações ao abrir e fechar o dropdown */}
          <Transition
            show={open}
            enter="transform transition duration-100 ease-in"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-75 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-4 w-44 rounded-md shadow-lg ring-1 ring-opacity-70 ring-slate-500 divide-y divide-slate-500 bg-slate-700 focus:outline-none">
              <Menu.Item>
                <a
                  href="#"
                  className="hover-transition group rounded-t-md flex items-center px-4 py-2 hover:bg-custom-200"
                >
                  Editar Perfil
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="hover-transition group rounded-b-md flex items-center px-4 py-2 hover:bg-custom-200"
                >
                  Deletar Perfil
                </a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
