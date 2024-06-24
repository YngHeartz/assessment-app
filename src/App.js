import React from 'react';
import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';
import SVGBarChart from './components/SVGBarChart';

function App() {
  const barChartData = [25, 45, 60, 80, 50, 70, 98];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Performance Assessment: State and Hooks</h1>
        <Counter />
        <TextInput />
        <TodoList />
        <SVGBarChart data={barChartData} />
        <h1>This is the test for the 4.3 PA</h1>
      </header>
    </div>
  );
}

export default App;