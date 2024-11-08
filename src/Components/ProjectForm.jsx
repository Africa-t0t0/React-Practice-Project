import InputField from "./InputField"

export default function ProjectForm() {
    return (
        <menu>
            <li>
                <button>Cancel</button>
            </li>
            <li>
                <button>
                    Save
                </button>
            </li>
            <div>
                <InputField
                    labelName={"Title"}
                />
                <InputField
                    labelName={"Description"}
                    textarea
                />
                <InputField
                    labelName={"Due Date"}
                />
            </div>
        </menu>
    );
}