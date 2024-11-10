import React from 'react';
import { FaCheck, FaTrashAlt } from 'react-icons/fa'; // Import ikon dari react-icons

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
        {/* Tampilkan tombol Delete hanya jika task belum selesai */}
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