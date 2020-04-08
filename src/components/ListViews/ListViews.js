import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import ListItem from './ListItem';

const ListViews = ({todos,toggledSelect,toggledComplete}) => {
  return (
    <ListGroup>
      {
        todos.map(todo=>{
          return <ListItem 
            key={todo.id}
            todo={todo}
            toggledSelect={toggledSelect}
            toggledComplete={toggledComplete}

          />
        })
      }

      {
        console.log(todos)
      }
    </ListGroup>
  );
};

ListViews.proptype = {
  todos: PropTypes.object.isRequired,
  toggledSelect: PropTypes.func.isRequired,
  toggledComplete: PropTypes.func.isRequired
}

export default ListViews;