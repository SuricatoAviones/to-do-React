import React, {useState} from 'react'

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if(title.trim() === '' || description.trim() === ''){
            alert('Todos los campos son obligatorios')
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            description,
        }

        addTask(newTask)
        setTitle('')
        setDescription('')
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" 
            placeholder='Titulo'
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <input type="text" 
        placeholder='Descripcion'
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Añadir tarea</button>
    </form>
  )
}

export default TaskForm