import React, { useEffect, useState } from 'react'
import TaskService from '../services/TaskService'
import {Link} from 'react-router-dom';


const ListTaskComponent = () => {
    
    const [tasks, setTasks] = useState([])

    useEffect(() => {

        TaskService.getAllTasks().then((response) => {
            setTasks(response.data)
            console.log(response.data);

        }).catch(error =>{
            console.log(error);
        })
    }, [])

    const getAllTasks = () => {
        TaskService.getAllTasks().then((response) => {
            setTasks(response.data)
            console.log(response.data);

        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteTask = (id) => {

            TaskService.deleteTask(id).then((response) => {
                getAllTasks();

            }).catch(error => {
                console.log(error);
            })    }


  return (
    <div className = 'container'>
        <h2 className = 'text-center'> Task List </h2>
        <Link to ="/add-task" className="btn btn-primary mb-2" > Add Task</Link>
        <table border={5} width = "100%">
            <thead>
                <th width = "40%"> Title </th>
                <th> Date </th>
                <th> Time </th>
                <th> Completed </th>
                <th> Actions </th>
            </thead>
            <tbody>{
                tasks.map(
                task => 
                <tr key = {task.title}>
                    <td>  {task.title} </td>
                    <td>  {task.date} </td>
                    <td>  {task.time} </td>
                    <td>  {task.completed} </td>
                    <td>
                        <Link className='btn btn-info' to={'/edit-task/${task.id}'}> Update </Link>
                        <button className='btn btn-danger' onClick={() => deleteTask(task.id)}
                        style = {{marginLeft:"10px"}}> Delete</button>
                    </td>
                </tr>
                )
}</tbody>
        </table>
      
    </div>
  )
}

export default ListTaskComponent
