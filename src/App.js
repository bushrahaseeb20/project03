import React from 'react';
import './App.css';
import Courses from './courses.js';
function App() {
  return (
    <div className="App">
     <Courses name="AI"/>
     <hr/>
     <Courses name="CNC"/>
     <hr/>
     <Courses name="BCC"/>
     <hr/>
     <Courses name="IOT"/>
     <hr/>

    </div>
  );
}

export default App;
