import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

export default function ModalContainer({ children, type, onClose, onConfirm }) {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 top-24">
        <div className="relative my-6 mx-auto max-w-xl">
          <div className="shadow-lg relative flex flex-col w-full bg-wetAsphalt px-2 py-4">
            <ModalHeader onClose={onClose} />

            {children}

            {type === "confirm" && (
              <ModalFooter onConfirm={onConfirm} onClose={onClose} />
            )}
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
