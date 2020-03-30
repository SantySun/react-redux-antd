import React from 'react';
import Login from './components/login.component';
import List from './components/todo.component';

function App() {
  return (
    <>
      <div>
        <Login />
      </div>
      <div>
        <List />
      </div>
    </>
  );
}

export default App;
