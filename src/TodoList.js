import React, { useState } from 'react';

function TodoList() {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function addActivity() {
    if (editIndex !== -1) {
      const updatedListData = [...listData];
      updatedListData[editIndex] = activity;
      setListData(updatedListData);
      setActivity('');
      setEditIndex(-1);
    } else {
      setListData((prevListData) => {
        const updatedList = [...prevListData, activity];
        setActivity('');
        return updatedList;
      });
    }
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }
  function editActivity(i) {
    setActivity(listData[i]);
    setEditIndex(i);
  }

  function removeAllActivities() {
    setListData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List:</p>
        {listData.length > 0 &&
          listData.map((data, i) => (
            <p key={i}>
              <div className="listData">{data}</div>
              <div className="btn-position">
              <button onClick={() => editActivity(i)}>Edit</button>
                <button onClick={() => removeActivity(i)}>remove(-)</button>
              </div>
            </p>
          ))}
        {listData.length >= 1 && (
          <button onClick={removeAllActivities}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
