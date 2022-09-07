import InputText from "../Atom/InputText"
import Button from "../Atom/Button"
const InputForm = ({id, name, onNameChange, onIdChange, onClick, cancelEdit, editStudent, disabled}) => {
    
    return(
        <div className="flex flex-col w-96 text-lg">
            <label>{editStudent.id ? 'Update Student ID:' : 'Student ID:'}</label>
            <InputText value={id} onChange={onIdChange}/>
            <label>{editStudent.id ? 'Update Student Name:' : 'Student Name:'}</label>
            <InputText value={name} onChange={onNameChange}/>
            <div className="flex justify-center">
                <Button isDisabled={disabled} title={editStudent.id ? 'Edit Student' : 'Submit'} addStyle={"w-44 p-2 mt-3"} onClick={onClick}/>
                {editStudent.id && <Button title='Cancel' onClick={cancelEdit} addStyle={"w-44 p-2 mt-3 ml-2"}/>}
            </div>
        </div>
    )
}
export default InputForm