import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput, Button } from 'reactstrap';

const RowItem = ({todo,toggledSelect,toggledComplete}) => {
  return (
    <tr>
      <td>
        <CustomInput
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={()=>toggledSelect(todo.id)}
        />
      </td>
      <td>
        <p>{todo.time.toDateString()}</p>
        {/* <p>{todo.time}</p> */}
      </td>
      <td><h4>{todo.title}</h4></td>
      <td>
        <Button color={todo.isComplete ? 'danger' : 'success'}
              onClick={()=>toggledComplete(todo.id)}
        >
          {todo.isComplete ? 'Completed' : 'Running'}
        </Button>
      </td>
    </tr>
  )
}

RowItem.proptype = {
  todo: PropTypes.object.isRequired,
  toggledSelect: PropTypes.func.isRequired,
  toggledComplete: PropTypes.func.isRequired
}


export default RowItem
