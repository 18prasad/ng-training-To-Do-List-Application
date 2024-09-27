import React, { useState, useEffect } from 'react';

const TaskForm = ({ taskToEdit, onSubmit, onCancel }) => {
  // States to manage the form input fields
  const [assignedTo, setAssignedTo] = useState('');
  const [newUser, setNewUser] = useState('');
  const [showNewUserInput, setShowNewUserInput] = useState(false);
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [comments, setComments] = useState('');

  // Effect hook to populate form fields if taskToEdit is provided (Edit Mode)
  useEffect(() => {
    if (taskToEdit) {
      setAssignedTo(taskToEdit.assignedTo);
      setStatus(taskToEdit.status);
      setDueDate(taskToEdit.dueDate);
      setPriority(taskToEdit.priority);
      setComments(taskToEdit.comments);
    }
  }, [taskToEdit]);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { 
      assignedTo: showNewUserInput ? newUser : assignedTo,
      status, 
      dueDate, 
      priority, 
      comments 
    };
    // Calls onSubmit with the task data and clears the form
    onSubmit(task);
    clearForm();
  };

  // Clears the form input fields after submission
  const clearForm = () => {
    setAssignedTo('');
    setNewUser('');
    setShowNewUserInput(false);
    setStatus('');
    setDueDate('');
    setPriority('');
    setComments('');
  };

  // Handles change in "Assigned To" dropdown
  const handleAssignedToChange = (e) => {
    const value = e.target.value;
    setAssignedTo(value);
    setShowNewUserInput(value === 'newUser');
  };

  return (
    <div className="slds-box slds-p-around_medium">
      {/* Title changes based on whether it's a new task or editing an existing one */}
      <h2 className="slds-text-heading_medium">{taskToEdit ? 'Edit Task' : 'Add New Task'}</h2>
      <form onSubmit={handleSubmit} className="slds-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        {/* Assigned To dropdown */}
        <div className="slds-form-element">
          <label htmlFor="assignedTo" className="slds-form-element__label">Assigned To</label>
          <div className="slds-form-element__control">
            <div className="slds-select_container">
              <select id="assignedTo" name="assignedTo"
                className="slds-select" 
                value={assignedTo} 
                onChange={handleAssignedToChange} 
                required
              >
                <option value="">Please Select User</option>
                <option value="User1">User1</option>
                <option value="User2">User2</option>
                <option value="newUser">New User</option>
              </select>
            </div>
          </div>
        </div>

        {/* Input for adding new user */}
        {showNewUserInput && (
          <div className="slds-form-element" style={{ gridColumn: 'span 1' }}>
            <label htmlFor="newUser" className="slds-form-element__label">New User</label>
            <div className="slds-form-element__control">
              <input 
                id="newUser" 
                name="newUser"
                type="text"
                className="slds-input"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                placeholder="Enter new user name"
                required
              />
            </div>
          </div>
        )}

        {/* Status dropdown */}
        <div className="slds-form-element">
          <label htmlFor="status" className="slds-form-element__label">Status</label>
          <div className="slds-form-element__control">
            <div className="slds-select_container">
              <select id="status" name="status"
                className="slds-select" 
                value={status} 
                onChange={(e) => setStatus(e.target.value)} 
                required
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Due Date field */}
        <div className="slds-form-element">
          <label htmlFor="dueDate" className="slds-form-element__label">Due Date</label>
          <div className="slds-form-element__control">
            <input id="dueDate" name="dueDate"
              type="date"
              className="slds-input"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Priority dropdown */}
        <div className="slds-form-element">
          <label htmlFor="priority" className="slds-form-element__label">Priority</label>
          <div className="slds-form-element__control">
            <div className="slds-select_container">
              <select id="priority" name="priority"
                className="slds-select" 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)} 
                required
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Comments field */}
        <div className="slds-form-element" style={{ gridColumn: 'span 2' }}>
          <label htmlFor="comments" className="slds-form-element__label">Comments</label>
          <div className="slds-form-element__control">
            <textarea id="comments" name="comments"
              className="slds-textarea"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Enter your comments here"
            />
          </div>
        </div>

        {/* Form buttons */}
        <div className="slds-m-top_medium" style={{ gridColumn: 'span 2' }}>
          <button type="submit" className="slds-button slds-button_brand"
          style={{ backgroundColor: '#ffffe0', color: 'black'}}>
            {taskToEdit ? 'Update' : 'Add Task'}
          </button>
          <button 
            type="button" 
            className="slds-button slds-button_neutral slds-m-left_small" 
            style={{ backgroundColor: '#D3D3D3', color: 'black' }}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default TaskForm;
