import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NewPlaces } from './places/pages/NewPlaces';
import { User } from './user/pages/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/new/places' element={<NewPlaces/>} />
        <Route path='*' element={<User/>} />
      </Routes>
    </Router>
  );
}

export default App;
