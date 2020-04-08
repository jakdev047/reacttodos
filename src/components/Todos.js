import React, { useState } from 'react';
import ListViews from './ListViews/ListViews';
import TableViews from './TableViews/TableViews';

const Todos = () => {
  const [todos,setTodos] =useState([
    {
      id:1,
      title:'Heading',
      time:new Date().getTime(),
      isComplete:false,
      isSelect:false
    }
  ])
  return (
    <>
      <h2 className="display-4 my-5 text-center">Todos</h2>
      <ListViews todos={todos}/>
      <TableViews todos={todos}/>
    </>
  );
};

export default Todos;