import ModalButton from "./ModalButton";

export default function ModalContainer({ children, type, onClose, onConfirm }) {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 top-44">
        <div className="relative my-2 mx-auto max-w-xl">
          <div className="shadow-xl rounded-tl-xl rounded-br-xl relative flex flex-col w-full bg-wetAsphalt px-2 py-2">
            <div className="flex px-2 py-1">
              <span className="ml-auto">
                <i
                  className="bx bx-x text-clouds text-2xl p-1 cursor-pointer"
                  onClick={onClose}
                ></i>
              </span>
            </div>

            {children}

            {type === "confirm" && (
              <div className="flex items-center justify-end px-2 py-4 border-t border-solid border-clouds mt-4">
                <ModalButton
                  type="button"
                  onClick={onConfirm}
                  color="text-pumpkin"
                >
                  Confirm
                </ModalButton>
                <ModalButton
                  type="button"
                  onClick={onClose}
                  color="text-clouds"
                >
                  Close
                </ModalButton>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
