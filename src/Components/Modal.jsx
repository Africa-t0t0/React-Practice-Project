import { forwardRef, useImperativeHandle, useRef } from "react";

import { createPortal } from "react-dom";


const Modal = forwardRef(function Modal({ children, buttonLabel }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    const elementId = document.getElementById('modal-root');

    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form action="" method="dialog">
                <button>
                    {buttonLabel}
                </button>
            </form>
        </dialog>, elementId
    );
})

export default Modal;