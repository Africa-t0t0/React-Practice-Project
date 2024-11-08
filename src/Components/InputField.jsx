export default function InputField({ labelName, textArea, ...props }) {
    return (
        <p>
            <label htmlFor="">
                {labelName}
            </label>
            {textArea ? <textarea {...props} /> : <input {...props} />}
        </p>
    );
}