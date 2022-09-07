const InputText = ({value, onChange}) => {
    return(
        <input type="text" onChange={onChange} value={value} className="mt-2 mb-4 p-2 border-b-2 border-neutral-500"/>
    )
}
export default InputText