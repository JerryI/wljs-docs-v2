import { BookIcon, Drum, Rocket, Pyramid, AppWindowMac } from 'lucide-react';

import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img src="logo.svg" alt="Logo" style={{ width: '32px', height: '32px' }} />
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
                <NavbarMenuLink href="/docs">Hello World</NavbarMenuLink>
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