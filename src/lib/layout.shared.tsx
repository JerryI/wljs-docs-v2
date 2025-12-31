import { Book,BookIcon, BookA, Drum, Rocket, Pyramid, AppWindowMac } from 'lucide-react';

import Image from 'next/image'

import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';

import Logo from './../../public/logo.svg'

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
      src={Logo}
      width={32}
      height={32}
      alt="WLJS Logo"
    />
          <span>WLJS Notebook</span>
        </>
      ),
    },
    links: [
                  {
          type: 'custom',
          // only displayed on navbar, not mobile menu
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>Documentation</NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/frontend/Overview">Overview</NavbarMenuLink>
                <NavbarMenuLink href="/frontend/Wolfram-Language">Wolfram Language</NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
      {
        icon: <BookIcon />,
        text: 'Blog',
        url: '/blog',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },

      {
        icon: <Pyramid />,
        text: 'Demonstration Project',
        url: '/demo',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },

      {
        icon: <Rocket/>,
        text: 'Releases',
        url: '/releases',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },      
      {
        icon: <AppWindowMac />,
        text: 'Mini apps',
        url: '/apps',
        // secondary items will be displayed differently on navbar
        secondary: false,
      }
    ],
    githubUrl: 'https://github.com/WLJSTeam/wolfram-js-frontend'
  };
}