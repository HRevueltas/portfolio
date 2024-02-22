import  { useState } from 'react';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

export const ToggleTheme = () => {
 
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };
  return (
    <IconButton  variant='soft' radius='small' onClick={toggleTheme} as='div'>
      {theme === 'light' ? <MoonIcon cursor={'pointer'} /> : <SunIcon cursor={'pointer'} />}
    </IconButton>
  );
};
