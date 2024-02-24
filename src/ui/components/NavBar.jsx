import { useContext, useEffect, useRef } from 'react';
import { Box, Flex, Heading, IconButton, Select } from '@radix-ui/themes';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../theme/ThemeContext';
import { Toggle } from '../../theme/Toggle';

export const NavBar = () => {


    const { theme, setTheme } = useContext(ThemeContext);
    const navRef = useRef(null);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;

        const onScroll = () => {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                navRef.current.style.top = "0px";
                navRef.current.style.transition = "top 0.3s";
            } else {
                navRef.current.style.top = "-80px";
                navRef.current.style.transition = "top 0.3s";
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);


    return (
        <Heading
            ref={navRef}
            className='nav'
            size={{
                initial: '3',
                md: '4',
                xl: '7',
            }}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                zIndex: "100",
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                padding: '10px',
            }}
        >
            <Box display={'block'} />



       


            <Flex
                align={'center'}
                justify={'center'}
                width={'max-content'}
                style={{ borderRadius: '10px', backgroundColor: 'var(--backgroundSecondary)', padding: '5px', boxShadow: 'var(--shadows-medium)' }}
            >
                <Flex align={'center'} justify={'center'}>
                    <Flex ml={'4'} mr={'4'} gap={'4'}>
                        <NavLink
                            className={({ isActive }) => ` link ${isActive ? 'active' : ''} `}
                            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)' }}
                            to={'/home'}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered`}
                            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)' }}
                            to={'/projects'}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered`}
                            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)' }}
                            to={'/craft'}
                        >
                            Craft
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered`}
                            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)' }}
                            to={'/about'}
                        >
                            About
                        </NavLink>
                    </Flex>
                </Flex>
            </Flex>

{/* 
            <select id="navigation"
                style={{
                    color: 'var(--ruby-10)',
                    borderRadius: 'var(--radii-2)',
                    backgroundColor: 'var(--backgroundSecondary)',
                    padding: '5px',
                    boxShadow: 'var(--shadows-medium)'

                }}

            >
                <option value="home">Home</option>
                <option value="projects">Projects</option>
                <option value="craft">Craft</option>
                <option value="about">About</option>
            </select> */}





            <Toggle theme={theme} onToggle={toggleTheme} />
        </Heading>
    );
};