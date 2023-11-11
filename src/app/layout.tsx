import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Header } from '@/components/Header'
import {shadesOfPurple } from '@clerk/themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: { colorPrimary: 'blue' },
        layout: {
          socialButtonsPlacement: 'bottom',
          socialButtonsVariant: 'iconButton',
          termsPageUrl: '/term',
          privacyPageUrl: "/privacy-policy",
          helpPageUrl: "/contact",
          logoLinkUrl: "/auth-logo.png",
          logoPlacement: "inside"
        }
      }} >

      <html data-new-gr-c-s-check-loaded={true} data-gr-ext-installed={true} lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
