import React from 'react';
import { Container } from 'reactstrap';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Todos />
      </Container>
    </div>
  );
}

export default App;
