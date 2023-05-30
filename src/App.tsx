import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Stadia from './pages/stadia';
import Add from './pages/add';
import Update from './pages/update';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stadia/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/update/:stadium_id" element={<Update stadium_id={0} stadium_name={''} capacity={0} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
