import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class TodoForm extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e =>  {
    e.peventDefault();
    this.props.createTodo(this.state);  

    // clear fields
    e.target.reset();     

    // state update
    this.setState({
      title: '', description:''
    })      
  }
  render() {
    return (
      <Form className="my-5" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            type="text"
            placeholder="Do Some Code"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Describe task</Label>
          <Input
            type="textarea"
            placeholder="Describe task..."
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit" color="success">Create task</Button>
      </Form>
    );
  }
}

TodoForm.proptype = {
  createTodo: PropTypes.func.isRequired
}

export default TodoForm;