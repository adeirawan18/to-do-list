import React from 'react';
import { FaCheck, FaTrashAlt } from 'react-icons/fa'; 

const TaskList = ({ tasks, onDone, onDelete, isCompleted, title }) => (
  <div className="task-list">
    <h3>{title}</h3>
    {tasks.map((task, index) => (
      <div className="task-item" key={index}>
        <span className={isCompleted ? 'task-item-title task-completed' : 'task-item-title'}>
          {task}
        </span>
        {!isCompleted && (
          <button onClick={() => onDone(index)} className="done-button">
            <FaCheck />
          </button>
        )}
        {!isCompleted && (
          <button onClick={() => onDelete(index)} className="delete-button">
            <FaTrashAlt />
          </button>
        )}
      </div>
    ))}
  </div>
);

export default TaskList;
