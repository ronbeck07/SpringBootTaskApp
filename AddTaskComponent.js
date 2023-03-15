import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import TaskService from '../services/TaskService'

const AddTaskComponent = () => {

    const [title, setTitle]= useState('')
    const [date, setDate]= useState('')
    const [time, setTime]= useState('')
    const [completed, setCompleted]= useState('')
    const navigate = useNavigate();
    const {nId} = useParams();


    const saveTask = (e) => {
        e.preventDefault();

        const task = {title, date, time, completed}

        TaskService.createTask(task).then((response) => {

            console.log(response.data)
            navigate('/tasks');

        }).catch(error => { 
            console.log(error)
        })
    }

    useEffect(()=> { 
        TaskService.getTaskByTitle(nId).then((response) =>{
            setTitle(response.data.title)
            setDate(response.data.date)
            setTime(response.data.time)
            setCompleted(response.data.component)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    const newtitle = () => {
        if(nId){
            return <h2 className='text-center'> Update Task</h2>}
                else{
                return <h2 className='text-center'>Add Task</h2>
                }
            }
        
    
  return (
    <div>
        <br /> <br />
      <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    newtitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Title :</label>
                            <input
                                 type="text"
                                 placeholder = "Enter Task title"
                                 name='task'
                                 className='form-control'
                                 value={title}
                                 onChange = {(e) => setTitle(e.target.value)}>

                                 </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Date :</label>
                            <input
                                 type="text"
                                 placeholder = "Enter Task date"
                                 name='date'
                                 className='form-control'
                                 value={date}
                                 onChange = {(e) => setDate(e.target.value)}>
                                    
                                 </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Time :</label>
                            <input
                                 type="text"
                                 placeholder = "Enter Task time"
                                 name='time'
                                 className='form-control'
                                 value={time}
                                 onChange = {(e) => setTime(e.target.value)}>
                                    
                                 </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Completed :</label>
                            <input
                                 type="text"
                                 placeholder = "Enter Completion Status"
                                 name='completed'
                                 className='form-control'
                                 value={completed}
                                 onChange = {(e) => setCompleted(e.target.value)}>
                                    
                                 </input>
                        </div>
                        <button className='btn btn-success' onClick={(e) => saveTask(e)}> Submit </button>
                        <Link to="/tasks" className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddTaskComponent
