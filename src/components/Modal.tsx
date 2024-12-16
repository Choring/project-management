import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom"
import { Button } from "./Button";

export const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({ children, buttonCaption }, ref ) {
    const dialog = useRef<HTMLDialogElement | null>(null);
  
    useImperativeHandle(ref, () => ({
      open() {
        dialog.current?.showModal(); // dialog가 null이 아닌 경우 showModal 호출
      },
    }));
  
    return createPortal(
      <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button>{buttonCaption}</Button>
        </form>
      </dialog>,
      document.getElementById("modal-root")! // modal-root가 null이 아니라고 명시
    );
});
