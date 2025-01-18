import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Cargar tareas desde localStorage al inicio
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Actualizar el temporizador cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer); // Limpieza del efecto
  }, []);

  // Añadir una tarea
  const addTask = (task) => {
    setTasks((prevTask) => [...prevTask, task]);
  };

  // Eliminar una tarea
  const deleteTask = (id) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Gestion de Tareas</h1>
        <p>Hora actual: {time}</p>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;