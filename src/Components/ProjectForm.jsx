import { useRef } from "react";

import InputField from "./InputField"

export default function ProjectForm({ onAdd }) {

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        });

    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button
                        className="text-stone-800 hover:text-stone-950"
                    >Cancel</button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <InputField
                    ref={title}
                    labelName={"Title"}
                    type="text"
                />
                <InputField
                    ref={description}
                    labelName={"Description"}
                    textarea
                />
                <InputField
                    ref={date}
                    labelName={"Due Date"}
                    type="date"
                />
            </div>
        </div>
    );
}