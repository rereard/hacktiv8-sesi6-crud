import './App.css';
import React, { useState, useEffect } from 'react';
import InputForm from './InputForm/InputForm';
import Table from './Table/Table';
let dataStorage = localStorage.getItem('studentList')
function App() {
  const [studentList, setStudentList] = useState(JSON.parse(dataStorage) || [])
  const [nameValue, setNameValue] = useState('')
  const [idValue, setIdValue] = useState('')
  const [edit, setEdit] = useState({})
  const [disabled, setDisabled] = useState(false)
  const handleNameChange = (event) => {
    setNameValue(event.target.value)
  }
  const handleIdChange = (event) => {
    setIdValue(event.target.value)
  }
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      if(!disabled){
        addStudentList()
      }
    }
  }
  const editStudentHandler = (student) => {
    setEdit(student)
    setIdValue(student.id)
    setNameValue(student.name)
  }
  const cancelEditStudent = () => {
    setEdit({})
    setIdValue('')
    setNameValue('')
  }
  const addStudentList = () => {
    if(edit.id){
      const updatedStudent = {
        ...edit,
        id: idValue,
        name: nameValue
      }
      const indexEdited = studentList.findIndex((student) => student.id === edit.id)
      const updatedStudentList = [...studentList]
      updatedStudentList[indexEdited] = updatedStudent
      setStudentList(updatedStudentList)
      localStorage.setItem('studentList', JSON.stringify(updatedStudentList))
      return cancelEditStudent()
    }
    setStudentList([...studentList, {id: idValue, name: nameValue}])
    localStorage.setItem('studentList', JSON.stringify([...studentList, {id: idValue, name: nameValue}]))
    setIdValue('')
    setNameValue('')
  }
  const deleteStudent = (studentId) => {
    const filteredStudents = studentList.filter((student) => student.id !== studentId)
    setStudentList(filteredStudents)
    localStorage.setItem('studentList', JSON.stringify(filteredStudents))
    if(edit.id){
      cancelEditStudent()
    }
  }
  useEffect(() => {
    if(nameValue.length > 0 && idValue.length > 0){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }, [nameValue, idValue]);
  return (
    <div className='lg:container mx-auto'>
      <div className="w-full flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 mt-2">Ini CRUD</h2>
        <InputForm id={idValue} onClick={addStudentList} name={nameValue} onNameChange={handleNameChange} onIdChange={handleIdChange}  cancelEdit={cancelEditStudent} editStudent={edit} disabled={disabled} onKeyPress={handleKeyPress}/>
        <Table students={studentList} deleteStudent={deleteStudent} editStudent={editStudentHandler}/>
      </div>
    </div>
    
  );
}
export default App;
