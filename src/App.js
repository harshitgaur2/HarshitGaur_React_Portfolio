import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import HomeBanner from './components/HomeBanner';
import WorkHistory from './components/WorkHistory';
import Projects from './components/Projects';
import Sessions from './components/Sessions';
import CV from './components/CV';

// Define light and dark themes
const lightTheme = {
  bgColor: '#ffffff',
  textColor: '#000000',
  bgSecondaryColor: '#f0f0f0',
  textSecondaryColor: '#555555',
};

const darkTheme = {
  bgColor: '#121212',
  textColor: '#ffffff',
  bgSecondaryColor: '#1e1e1e',
  textSecondaryColor: '#aaaaaa',
};

// Global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: ${({ theme }) => theme.bgColor};
    --text-color: ${({ theme }) => theme.textColor};
    --bg-secondary-color: ${({ theme }) => theme.bgSecondaryColor};
    --text-secondary-color: ${({ theme }) => theme.textSecondaryColor};
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
  }
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Main>
          <Routes>
            <Route path="/" element={<HomeBanner />} />
            <Route path="/work-history" element={<WorkHistory />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const Main = styled.main`
  padding: 2rem;
`;
