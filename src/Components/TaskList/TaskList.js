import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  // Function to handle the delete confirmation
  const handleDelete = (taskId) => {
    const userConfirmed = window.confirm('Are you sure you want to delete this task?');
    if (userConfirmed) {
      onDelete(taskId);
    }
  };

  return (
    <div className="slds-box slds-p-around_medium">
      {/* Table header with task details */}
      <h1 className="slds-text-heading_large slds-m-bottom_medium">Tasks</h1>

      <div className="slds-scrollable_x">
        <table className="slds-table slds-table_bordered slds-table_fixed-layout slds-max-medium-table_stacked-horizontal">
          <thead>
            <tr className="slds-line-height_reset">
              <th scope="col">
                <div className="slds-truncate" title="Assigned To">Assigned To</div>
              </th>
              <th scope="col">
                <div className="slds-truncate" title="Status">Status</div>
              </th>
              <th scope="col">
                <div className="slds-truncate" title="Due Date">Due Date</div>
              </th>
              <th scope="col">
                <div className="slds-truncate" title="Priority">Priority</div>
              </th>
              <th scope="col">
                <div className="slds-truncate" title="Comments">Comments</div>
              </th>
              <th scope="col">
                <div className="slds-truncate" title="Actions">Actions</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task.id}>
                  <td data-label="Assigned To">
                    <div className="slds-truncate" title={task.assignedTo}>{task.assignedTo}</div>
                  </td>
                  <td data-label="Status">
                    <div className="slds-truncate" title={task.status}>{task.status}</div>
                  </td>
                  <td data-label="Due Date">
                    <div className="slds-truncate" title={task.dueDate}>{task.dueDate}</div>
                  </td>
                  <td data-label="Priority">
                    <div className="slds-truncate" title={task.priority}>{task.priority}</div>
                  </td>
                  <td data-label="Comments">
                    <div className="slds-truncate" title={task.comments}>{task.comments}</div>
                  </td>
                  <td data-label="Actions">
                    <button 
                      className="slds-button slds-button_neutral" 
                      style={{ backgroundColor: '#ffffe0', color: 'black' }}
                      onClick={() => onEdit(task)}
                    >
                      Edit
                    </button>
                    <button 
                      className="slds-button slds-button_destructive slds-m-left_small"
                      style={{ backgroundColor: '#D3D3D3', color: 'black' }}
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">
                  <div className="slds-align_absolute-center slds-text-body_regular">
                    No tasks available.
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
