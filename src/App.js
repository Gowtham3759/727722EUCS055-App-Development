import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Animations from './Components/Animations';
import Storybook from './Components/Storybook';
import Flippy from './Components/Flipbooks/Flippy';

const App = () => {
  return (
    <Flippy />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginForm />} />
    //     <Route path="/login" element={<LoginForm />} />
    //     <Route path="/register" element={<RegisterForm />} />
    //     <Route path="/animation" element={<Animations />} />
    //     <Route path="/flipbook" element={<Storybook />} />
        
    //   </Routes>
    // </Router>
  );
}

export default App;
