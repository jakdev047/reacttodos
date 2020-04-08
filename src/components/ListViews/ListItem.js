import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, CustomInput, Button } from 'reactstrap';

const ListItem = ({todo,toggledSelect,toggledComplete}) => {
  return (
    <ListGroupItem className="d-flex align-items-center">

      <CustomInput
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={()=>toggledSelect(todo.id)}
      />

      <div className="mx-3">
        <h4>{todo.title}</h4>
        <p>{todo.time.toDateString()}</p>
        {/* <p>{todo.time}</p> */}
      </div>

      <Button className="ml-auto" 
              color={todo.isComplete ? 'danger' : 'success'}
              onClick={()=>toggledComplete(todo.id)}
      >
        {todo.isComplete ? 'Completed' : 'Running'}
      </Button>
    </ListGroupItem>
  );
};

ListItem.proptype = {
  todo: PropTypes.object.isRequired,
  toggledSelect: PropTypes.func.isRequired,
  toggledComplete: PropTypes.func.isRequired
}

export default ListItem;