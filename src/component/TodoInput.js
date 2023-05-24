/**
 * TodoInput component handles user input for adding tasks to the todo list.
 * It provides functionality to add tasks by pressing Enter or clicking the "Add Task" button.
 * It also renders the TodoList component to display the list of tasks.
 */

import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const TodoInput = () => {
  // State variables for input text and stored tasks
  const [inputText, setInputText] = useState("");
  const [storeValue, setStoreValue] = useState([]);

  /**
   * Updates the inputText state as the user types in the input field.
   * @param {object} e - Event object
   */
  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  /**
   * Handles the key press event when the user presses Enter.
   * If Enter is pressed, calls the handleOnClick function to add the task.
   * @param {object} e - Event object
   */
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  /**
   * Handles the click event when the user clicks the "Add Task" button.
   * Adds the inputText value as a task to the storeValue state.
   * Clears the inputText value after adding the task.
   */
  const handleOnClick = () => {
    if (inputText !== "") {
      setStoreValue((prevStoreValue) => [...prevStoreValue, inputText]);
      setInputText("");
    }
  };

  /**
   * Deletes a task from the storeValue state based on its index.
   * @param {number} index - Index of the task to be deleted
   */
  const deleteData = (index) => {
    const updateList = [...storeValue];
    updateList.splice(index, 1);
    setStoreValue(updateList);
  };

  /**
   * Updates the inputText state with the task to be edited.
   * Deletes the task from the storeValue state based on its index.
   * @param {string} item - Task to be edited
   * @param {number} index - Index of the task to be edited
   */
  const UpdateData = (item, index) => {
    setInputText(item);
    const updateDeleteList = [...storeValue];
    updateDeleteList.splice(index, 1);
    setStoreValue(updateDeleteList);
    console.log(index);
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                {/* Todo input section */}
                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          placeholder="Add new..."
                          value={inputText}
                          onChange={handleOnChange}
                          onKeyPress={handleKeyPress}
                        />
                        <a
                          href="#!"
                          data-mdb-toggle="tooltip"
                          title="Set due date"
                        >
                          <i className="fas fa-calendar-alt fa-lg me-3"></i>
                        </a>
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleOnClick}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                {/* Todo list section */}
                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                  <p className="small mb-0 me-2 text-muted">Filter</p>
                  <select className="select">
                    <option value="1">All</option>
                    <option value="2">Completed</option>
                    <option value="3">Active</option>
                    <option value="4">Has due date</option>
                  </select>
                  <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                  <select className="select">
                    <option value="1">Added date</option>
                    <option value="2">Due date</option>
                  </select>
                  <a
                    href="#!"
                    style={{ color: "#23af89" }}
                    data-mdb-toggle="tooltip"
                    title="Ascending"
                  >
                    <i className="fas fa-sort-amount-down-alt ms-2"></i>
                  </a>
                </div>

                <div className="todo-list">
                  <TodoList
                    storeValue={storeValue}
                    deleteData={deleteData}
                    UpdateData={UpdateData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
