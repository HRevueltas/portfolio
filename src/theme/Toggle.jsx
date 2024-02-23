import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { IconButton } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const Toggle = ({ theme, onToggle }) => {
    const { theme: tema } = useContext(ThemeContext); // Access theme context

    return (
        
            <IconButton  className={`toggle ${tema}`} aria-label='toggle theme'  variant='soft' radius='small' onClick={onToggle} as='div'  title="Change theme" > 
                {tema === 'light' ? <MoonIcon cursor={'pointer'} /> : <SunIcon cursor={'pointer'}  />}
            </IconButton>
        
    );
};

