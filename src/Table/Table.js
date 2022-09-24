import Button from "../Atom/Button"
const Table = ({students, deleteStudent, editStudent}) => {
    return(
        <div className='mt-5 px-4'>
          <table className='table-fixed w-full text-center overflow-x-auto'>
            <thead>
              <tr className="border-b-2 border-black">
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id} className='md:h-14 h-28 border-b-2'>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td className="flex flex-col h-28 justify-evenly md:justify-center md:flex-row md:h-14 items-center">
                            <Button title="Edit" onClick={() => editStudent(student)} addStyle={"md:w-44 w-20 p-1 md:mr-3"} isDisabled={false}/>
                            <Button title="Delete" onClick={() => deleteStudent(student.id)} addStyle={"md:w-44 w-20 p-1"} isDisabled={false}/>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}
export default Table