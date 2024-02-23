import { useContext} from 'react';
import { Box, Flex,  } from '@radix-ui/themes'
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../theme/ThemeContext';
import { Toggle } from '../../theme/Toggle';
export const NavBar = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <Flex as="div"
            position={'fixed'}
            top={'0'}
            left={'0'}
            width={'100%'}
            justify={'space-between'}
            p={'3'}
            z-index={'100'}
            className='fade-in'
m
        >

            <Box as='div' display={'block'} ></Box>

            <Flex as='nav'
                align={'center'}
                justify={'center'}
                width={'max-content'}
                style={{ borderRadius: '10px', backgroundColor: 'var(--backgroundSecondary)', padding: '5px', boxShadow: 'var(--shadows-medium)' }}

            >

                <Flex as='ul'
                    align={'center'}
                    justify={'center'}
                >
                    <Flex as='li'
                        ml={'4'}
                        mr={'4'}
                        gap={'4'}>

                        <NavLink
                            className={({ isActive }) => ` link ${isActive ? 'active' : 'hovered'} `}
                            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)' }}
                            to={'/home'} >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `link ${isActive ? 'active' : ''} hovered`}
                            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)' }}
                            to={'/projects'}> Projects
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered`}
                            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)' }}
                            to={'/craft'} > Craft
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered`}
                            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)' }}
                            to={'/about'} > About
                        </NavLink>
                    </Flex>
                </Flex>
            </Flex>

            <Toggle theme={theme} onToggle={toggleTheme} />

        </Flex>
    )
}