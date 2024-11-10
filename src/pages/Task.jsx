// src/pages/Task.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pastikan ini diimport
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { FaUser, FaEdit, FaSignOutAlt } from 'react-icons/fa';

const TaskPage = ({ user, onSignOut }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const navigate = useNavigate(); // Menggunakan useNavigate

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markAsDone = (index) => {
    const task = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Fungsi navigasi ke halaman edit profile
  const handleEditProfile = () => {
    navigate('/edit-profile'); // Pastikan rute ini sesuai
  };

  return (
    <div className="task-page">
      <div className="sidebar">
        <div className="profile-info">
          <FaUser size={50} className="profile-icon" />
          <p>{user.email}</p>
        </div>
        <div className="sidebar-buttons">
          <button onClick={handleEditProfile} className="edit-profile-button">
            <FaEdit /> Edit Profile
          </button>
          <button onClick={onSignOut} className="signout-button">
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </div>

      <div className="task-section">
        <TaskForm addTask={addTask} />
        <div className="tasks-container">
          <h2 className="tasks-title">Tasks to do - {tasks.length}</h2>
          <TaskList tasks={tasks} onDone={markAsDone} onDelete={deleteTask} />
          <h2 className="tasks-title">Done - {completedTasks.length}</h2>
          <TaskList tasks={completedTasks} isCompleted />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
