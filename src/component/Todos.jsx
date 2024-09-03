import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const Todos = () => {
  const [initial, setInitial] = useState("");
  const [data, setData] = useState([]);

  const getInput = (event) => {
    setInitial(event.target.value);
  };

  const getData = () => {
    let store = [...data, initial];
    setData(store);
    setInitial("");
  };

  const deleteTask = (index) => {
    let filterData = data.filter((_, id) => id !== index);
    setData(filterData);
  };

  return (
    <div>
      <div className="container">
        <div className="inputTask">
          <input 
            type="text" 
            placeholder="Enter Your Task" 
            value={initial} 
            onChange={getInput} 
          />
          <button onClick={getData}>Add
          </button>
        </div>
        {data.map((curVal, index) => (
          <div key={index} className="taskData">
            <p>{curVal}</p>
            <button onClick={() => deleteTask(index)} className="deleteButton">
              <FontAwesomeIcon icon={faTrash} /> {}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
