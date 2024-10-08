import React from "react";
import TaskItem from "./TaskItems";

interface Task {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} text={task.text} onDelete={onDeleteTask} />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </ul>
  );
};

export default TaskList;
