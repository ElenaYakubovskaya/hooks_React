import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { GithubState } from './context/github/GithubState';

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: 'test alert' }} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile/:name" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
