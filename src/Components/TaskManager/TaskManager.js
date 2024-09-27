
import React, { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

const TaskManager = () => {
  // State for managing the list of tasks
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Function to handle the submission of a new task
  const handleTaskSubmit = (newTask) => {
    if (taskToEdit) {
      // Editing existing task
      setTasks(tasks.map(task => task.id === taskToEdit.id ? { ...newTask, id: taskToEdit.id } : task));
      setTaskToEdit(null);
    } else {
      // Adding a new task
      const newTaskWithId = { ...newTask, id: Date.now() };
      setTasks([...tasks, newTaskWithId]);
    }
    setIsFormVisible(false);
  };

  // Function to handle task deletion
  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to handle task editing
  const handleTaskEdit = (task) => {
    setTaskToEdit(task);
    setIsFormVisible(true);
  };

  // Toggles the form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setTaskToEdit(null);
  };

  return (
    <div className="task-manager">
      <button 
        className="slds-button slds-button_neutral"
        style={{ backgroundColor: '#ffffe0', color: 'black' }}
        onClick={toggleFormVisibility}
      >
        {isFormVisible ? 'Cancel' : 'Add Task'}
      </button>

      {isFormVisible && (
        <TaskForm 
          taskToEdit={taskToEdit} 
          onSubmit={handleTaskSubmit} 
          onCancel={toggleFormVisibility} 
        />
      )}

      <TaskList 
        tasks={tasks} 
        onEdit={handleTaskEdit} 
        onDelete={handleTaskDelete} 
      />
    </div>
  );
};

export default TaskManager;