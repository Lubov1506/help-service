import React from "react";
export interface ModalProps {
  className?: string;
}

export const Modal = ({ className }: ModalProps) => {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_2"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          } else {
            console.error("Modal element not found");
          }
        }}
      >
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
