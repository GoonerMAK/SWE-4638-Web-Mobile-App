import React, { useState, useMemo, useCallback  } from 'react';
import SubmitButton from './SubmitButton';
import Timer from './Timer';

const ToDoList = () => {
  const [info, setInfo] = useState({
    title: "",
    description: ""
  });

  const handleTitleChange = (e) => {
    setInfo(prevState => ({
      ...prevState,
      title: e.target.value
    }));
  };

  const handleDescriptionChange = (e) => {
    setInfo(prevState => ({
      ...prevState,
      description: e.target.value
    }));
  };

  const handleSubmit = useCallback((e) => {

    e.preventDefault();

    console.log('Title:', info.title);
    console.log('Description:', info.description);

  }, []);



  return (
    <div>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={info.title} onChange={handleTitleChange} />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={info.description} onChange={handleDescriptionChange} />
        </div>

        <div>
          <p>Title: {info.title}</p>
          <p>Description: {info.description}</p>
        </div>

        <Timer/>

        <SubmitButton onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default ToDoList;
