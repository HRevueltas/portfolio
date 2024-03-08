import { useState, useEffect } from 'react';
import { Container } from '@radix-ui/themes';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove(theme === 'light' ? 'dark' : 'light');
    html.classList.add(theme); // Apply theme class to HTML element
    html.setAttribute('color-scheme', theme); // Set color-scheme for OS integration
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <Container className={theme}>
        {children}
      </Container>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;