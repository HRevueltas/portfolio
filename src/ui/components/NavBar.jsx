import { useState } from 'react';
import { Box, Code, Flex, IconButton, Link as LinkRadix } from '@radix-ui/themes'
import styles from './navbar.module.css'
import { GitHubLogoIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Link, NavLink } from 'react-router-dom';
import { ToggleTheme } from './ToggleTheme';

export const NavBar = () => {


    return (
        <Flex className={`${styles.navigationContainer} `} as="div">
            <Link href={'/'}> <GitHubLogoIcon /> </Link>
            <Flex className={styles.navigationMenu} as='nav' >
                <Flex className={styles.navigationList} as='ul' height={'9'} >
                    <Flex className={styles.navigationItem} as='li' gap={'4'}>
                        <NavLink

                            className={({ isActive }) => `${styles.navigationLink}  ${isActive ? styles.active : ''}`}
                            to={'/home'} >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `${styles.navigationLink}  ${isActive ? styles.active : ''}`}
                            to={'/projects'}> Projects
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `${styles.navigationLink}  ${isActive ? styles.active : ''}`}
                            to={'/craft'} > Craft
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `${styles.navigationLink}  ${isActive ? styles.active : ''}`}
                            to={'/about'} > About
                        </NavLink>
                    </Flex>
                </Flex>
            </Flex>

            <ToggleTheme />
        </Flex>
    )
}