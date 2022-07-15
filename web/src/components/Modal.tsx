import { Dialog } from "@headlessui/react"
import { IconProps, X } from "phosphor-react"

type CustomModalProps = {
  buttonContent: string | JSX.Element
  children: JSX.Element
  visible: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export function CustomModal({
  buttonContent,
  children,
  visible,
  toggle,
}: CustomModalProps) {
  return (
    <>
      <button onClick={() => toggle(!visible)}>{buttonContent}</button>
      <div className="relative">
        <Dialog open={visible} onClose={() => toggle(!visible)}>
          {/* backdrop */}
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

          <Dialog.Panel className="bg-slate-700 p-5 absolute z-50 top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 rounded-md flex flex-col gap-2">
            {children}
          </Dialog.Panel>
        </Dialog>
      </div>
    </>
  )
}
