import { Box, Container, Flex, Section, Separator } from '@radix-ui/themes'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (


    <>
    <Separator size={'4'} color='violet' />
    <Flex
      p={'9'}
      align={'center'}
      justify={'center'}
      // width={'max-content'}
    >
      <Flex align={'center'} justify={'center'}>
        <Flex ml={'4'} mr={'4'} gap={'4'}>
          <NavLink
            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered `}
            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)', fontSize: '16px' }}
            to={'/home'}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered`}
            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)',fontSize: '16px' }}
            to={'/projects'}
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered`}
            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)',fontSize: '16px'  }}
            to={'/craft'}
          >
            Craft
          </NavLink>
          <NavLink
            className={({ isActive }) => ` link ${isActive ? 'active' : ''} hovered`}
            style={{ textDecoration: 'none', fontSize: 'var(--fontSizes-14)', padding: '2px 4px', textAlign: 'center', fontWeight: 'var(--fontWeights-400)',fontSize: '16px'  }}
            to={'/about'}
          >
            About
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
    </>

  )
}
