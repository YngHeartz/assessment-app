import React from 'react';
import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Performance Assessment: State and Hooks</h1>
        <Counter />
        <TextInput />
        <TodoList />
        <h1>This is the test for the 4.3 PA</h1>
      </header>
    </div>
  );
}

export default App;