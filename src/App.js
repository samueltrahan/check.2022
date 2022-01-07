import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import Calendar from './components/Calendar/Calendar';

function App () {
  return (
    <div>
    <NavBar />
    <Routes>
      <Route exact path="/" render={() =>
      <LandingPage />
      }>
      </Route>
      <Route exact path="/calendar" render={() => 
        <Calendar />
      }>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
