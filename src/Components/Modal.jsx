import { forwardRef, useImperativeHandle, useRef } from "react";

import { createPortal } from "react-dom";

import Button from "./Button";


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
        <dialog
            ref={dialog}
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
            {children}
            <form
                action=""
                method="dialog"
                className="mt-4 text-right"
            >
                <Button>
                    {buttonLabel}
                </Button>
            </form>
        </dialog>, elementId
    );
})

export default Modal;