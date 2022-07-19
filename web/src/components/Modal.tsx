import { Dialog, Transition } from "@headlessui/react"
import { X } from "phosphor-react"
import { Fragment } from "react"

type CustomModalProps = {
  buttonContent?: string | JSX.Element
  children: JSX.Element
  title: string
  visible: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export function CustomModal({
  buttonContent,
  children,
  title,
  visible,
  toggle,
}: CustomModalProps) {
  return (
    <>
      <span className="hover-transition duration-200 cursor-pointer hover:opacity-40">
        {buttonContent}
      </span>
      <div className="relative">
        <Transition show={visible} as={Fragment}>
          <Dialog open={visible} onClose={() => toggle(!visible)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* backdrop */}
              <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-slate-700 p-5 absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md flex flex-col gap-2 max-w-md w-full">
                <>
                  <Dialog.Title className="flex justify-between items-center">
                    <span className="text-xl font-medium">{title}</span>
                    <button
                      className="hover-transition cursor-pointer duration-200 hover:opacity-40"
                      onClick={() => toggle(!visible)}
                    >
                      <X size={24} weight={"bold"} />
                    </button>
                  </Dialog.Title>
                  <div className="border" />

                  <div className="flex flex-col text-lg break-all">
                    {children}
                  </div>
                </>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}
