import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import RowItem from './RowItem';

const TableViews = ({todos,toggledSelect,toggledComplete}) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map(todo => {
              return <RowItem key={todo.id}
                              todo={todo} 
                              toggledSelect={toggledSelect}
                              toggledComplete={toggledComplete}
              />
            })
          }
          {
            console.log(todos)
          }
        </tbody>
      </Table>
    </div>
  )
}
TableViews.proptype = {
  todos: PropTypes.object.isRequired,
  toggledSelect: PropTypes.func.isRequired,
  toggledComplete: PropTypes.func.isRequired
}
export default TableViews;
