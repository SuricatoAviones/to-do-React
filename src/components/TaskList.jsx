import React from 'react'

export const TaskList = ({tasks, deleteTask}) => {
  return (
    <div>
        <h2>Tareas:</h2>
        {tasks.length === 0 ? (
            <p>No hay tareas disponibles</p>
        ): (
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button style={{marginLeft:'10px', color: 'red'}} onClick={()=> deleteTask(task.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}
