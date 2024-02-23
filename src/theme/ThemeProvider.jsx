import { useState, useEffect } from 'react';
import { Toggle } from './Toggle';
import { Container } from '@radix-ui/themes';
import { ThemeContext } from './ThemeContext';


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove(theme === 'light' ? 'dark' : 'light');
    html.classList.add(theme); // Apply theme class to HTML element
    html.setAttribute('color-scheme', theme); // Set color-scheme for OS integration
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Container className={theme}>
        {children}
      </Container>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
