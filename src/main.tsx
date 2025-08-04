import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import AllProjects from './components/pages/AllProjects.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
