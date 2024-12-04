import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Profile.jsx'
import Projects from './pages/Projects';
import Hobby from './pages/Hobby';
import Page1 from './pages/Hobby/Page1.jsx';
import Page2 from './pages/Hobby/Page2.jsx';
import Page3 from './pages/Hobby/Page3.jsx';
import Page4 from './pages/Hobby/Page4.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobby" element={<Hobby />}>
          <Route path="1" element={<Page1 />} />
          <Route path="2" element={<Page2 />} />
          <Route path="3" element={<Page3 />} />
          <Route path="4" element={<Page4 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
