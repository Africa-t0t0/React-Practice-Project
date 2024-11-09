export default function InputField({ labelName, textarea, ...props }) {

    const classes = "w-full p-1 border-b-2 rounded-sm border-stone300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    return (
        <p
            className="flex flex-col gap-1 my-4"
        >
            <label
                className="text-sm font-bold uppercase text-stone-500"
                htmlFor="">
                {labelName}
            </label>
            {textarea ? <textarea className={classes} {...props} />
             :
            <input className={classes} {...props} />}
        </p>
    );
}