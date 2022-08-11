import React, { useState } from 'react'
import './Todolist.css'
import Todotask from './Todotask'



export default function Todolist() {
  const [deletetask, setdeletetask] = useState([])
  const [taskTitle, settaskTitle] = useState("")
  const [taskList,setTaskList] = useState([
    {
      id:1,
      text: "TestTask",
      isDone: false
    }
    
  ])
  
  const deleteTask = (task,taskid) => {
    setdeletetask([...deletetask, task])

      
    setTaskList((oldv)=>{
      const newArrState = oldv.filter(task=> task.id !== taskid)
      return newArrState;
    })
  }


  

  const toggleIsDone = (e,tid) => {
    const newArr = taskList.map(t => { 
      if(t.id === tid){
        return {...t,isDone:e.target.checked}
      }
      return t;
    })
    setTaskList(newArr)
  }

  const handleInput = (e)=> {
    settaskTitle(e.target.value)
  }

  const addNewTask = ()=> {
 
   if(taskList.length <= 7 && taskTitle.length > 3){
    const d = new Date();
    let ms = d.getMilliseconds();
    const t = {
      text: taskTitle,
      isDone:false,
      id: ms
    }
    setTaskList([...taskList,t])
    settaskTitle('')
  }else if(taskTitle.length < 3){
    alert('Task mora sadrzati minimum 3 karaktera')
  }else{
    alert('Dostigli ste maximalan broj taskova')
  }
  }

  return (
   <div className='task-page'>
     <div className='task-container'>
      {taskList.map(task =>{
        return <Todotask key={task.id} task={task} taskToggle={toggleIsDone} deleteTask={deleteTask}/>
      })}
    </div>
    <div className='addTask-container'>
      <input type={'text'} value={taskTitle} onChange={handleInput}></input>
      <button onClick={addNewTask}>Add Task</button>
    </div>
    <div className='deletedTask'>{deletetask.map(el=>{
     return <div className='task-style'>{el.text}-{el.id}</div>
    })}</div>
   </div>
  )
}



