import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Sams's social media feed</h1>
      </header>
      <main className="App-main">
      <Timeline messages={timelineData}/>
      </main>
    </div>
  );
}

export default App;
