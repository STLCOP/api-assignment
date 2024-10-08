import React, { useState, useEffect } from "react";
import { TaskListContainer, AddTaskButton, Input } from "./styles";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
interface Task {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");


  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj: Task = { id: Date.now(), text: newTask };
      setTasks((prevTasks) => [...prevTasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleTaskDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskListContainer>
      <h1>My To-Do List</h1>
      <Input
        type="text"
        value={newTask}
        placeholder="Enter new task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <AddTaskButton className="AddTask" onClick={addTask}>Add Task</AddTaskButton>
         <br/>
    

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <Link to="/ApiFetchApp">
        <Button variant="contained" color="secondary">
          Go to API Fetch App
        </Button>
      </Link>
    </TaskListContainer>
  );
};

export default App;
