import React from "react";

/**
 * TodoList component renders the list of tasks.
 * It receives the following props:
 * - storeValue: An array containing the list of tasks.
 * - deleteData: A function to delete a task from the list.
 * - UpdateData: A function to update a task in the list.
 */
export const TodoList = (props) => {
  const { storeValue, deleteData, UpdateData } = props;

  // Handle click event for deleting a task
  const handleDeleteClick = (index) => {
    deleteData(index);
  };

  // Handle click event for updating a task
  const handleUpdateClick = (item, index) => {
    UpdateData(item, index);
  };

  return (
    <div>
      {/* Render each task in the storeValue array */}
      {storeValue.map((item, index) => (
        <ul className="list-group list-group-horizontal rounded-0" key={index}>
          <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
            <div className="form-check">
              <input
                className="form-check-input me-0"
                type="checkbox"
                value=""
                aria-label="..."
              />
            </div>
          </li>
          <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
            <p className="lead fw-normal mb-0">{item}</p>
          </li>
          <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
            <div className="d-flex flex-row justify-content-end mb-1">
              {/* Edit button */}
              <a
                href="#!"
                className="text-info"
                data-mdb-toggle="tooltip"
                title="Edit todo"
                onClick={() => handleUpdateClick(item, index)}
              >
                <i className="fas fa-pencil-alt me-3"></i>
              </a>
              {/* Delete button */}
              <a
                href="#!"
                className="text-danger"
                data-mdb-toggle="tooltip"
                title="Delete todo"
                onClick={() => handleDeleteClick(index)}
              >
                <i className="fas fa-trash-alt"></i>
              </a>
            </div>
            <div className="text-end text-muted">
              <a
                href="#!"
                className="text-muted"
                data-mdb-toggle="tooltip"
                title="Created date"
              >
                <p className="small mb-0">
                  <i className="fas fa-info-circle me-2"></i>28th Jun 2020
                </p>
              </a>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};
