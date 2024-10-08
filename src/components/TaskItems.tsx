import React from "react";

interface TaskItemProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, onDelete }) => {
  return (
    <li>
      {text}
      <button onClick={() => onDelete(id)}>Delete</button>
      <input  placeholder="emial"/>
      <button  onClick={()=> onDelete(id)}></button>
    </li>
  );
};

export default TaskItem;
