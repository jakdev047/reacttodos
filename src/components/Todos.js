import React, { useState } from 'react';
import ListViews from './ListViews/ListViews';
import TableViews from './TableViews/TableViews';
import TodoForm from './TodoForm/TodoForm';

const Todos = () => {
  const [todos,setTodos] =useState([
    {
      id:1,
      title:'Heading',
      time:new Date(),
      isComplete:false,
      isSelect:false
    }
  ])

  const toggledSelect = id => {
    console.log(id);
  }

  const toggledComplete = id => {
    console.log(id);
  } 

  return (
    <>
      <h2 className="display-4 my-5 text-center">Todos</h2>

      <TodoForm />

      <ListViews todos={todos} toggledSelect={toggledSelect} toggledComplete={toggledComplete}/>

      <TableViews todos={todos} toggledSelect={toggledSelect} toggledComplete={toggledComplete}/>

    </>
  );
};

export default Todos;