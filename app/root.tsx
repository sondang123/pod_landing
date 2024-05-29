import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import type { LinksFunction } from '@remix-run/cloudflare'
import tailwind from './tailwind.css?url'

import 'remixicon/fonts/remixicon.css'

import { Toaster } from '~/components/ui/toaster'
import { Header } from './components/Header'
export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwind },

    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap',
    },

    {
      rel: 'icon',
      type: 'image/png',
      href: 'favicon.png',
    },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-manrope antialiased">
        <Header />
        {children}
        {/* <Footer /> */}
        <ScrollRestoration />
        <Scripts /> <Toaster />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
