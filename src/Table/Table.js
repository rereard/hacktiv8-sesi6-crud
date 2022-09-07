import Button from "../Atom/Button"
const Table = ({students, deleteStudent, editStudent}) => {
    return(
        <div className='w-full mt-5 px-4'>
          <table className='xl:table-fixed w-full text-center'>
            <thead>
              <tr className="border-b-2 border-black">
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr className='h-14 border-b-2'>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>
                            <Button title="Edit" onClick={() => editStudent(student)} addStyle={"w-44 p-1 mr-3"} isDisabled={false}/>
                            <Button title="Delete" onClick={() => deleteStudent(student.id)} addStyle={"w-44 p-1"} isDisabled={false}/>
                        </td>
                    </tr>
                ))}
              {/* <tr className='h-14 border-b-2'>
                <td>A11.2020.12723</td>
                <td>Rere</td>
                <td>
                  <Button title="Edit" addStyle={"w-44 p-1 mr-3"}/>
                  <Button title="Delete" addStyle={"w-44 p-1"}/>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
    )
}
export default Table