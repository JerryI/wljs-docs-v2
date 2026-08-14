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
        icon: <BookIcon />,
        text: 'Documentation',
        url: '/frontend/Overview',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <BookIcon />,
        text: 'Blog',
        url: '/blog',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },

      {
        icon: <Rocket/>,
        text: 'Releases',
        url: '/releases',
        // secondary items will be displayed differently on navbar
        secondary: false,
      }
    ],
    githubUrl: 'https://github.com/WLJSTeam/wljs-notebook'
  };
}
