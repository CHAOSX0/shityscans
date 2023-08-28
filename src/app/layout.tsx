import './globals.css';
import '../../styles/index/style.css';


import '../../styles/index/lassic-theme-styles-inline-css.css';
import '../../styles/index/anon.css'
import '../../styles/index/select2-css-css.css';
import '../../styles/index/lightmode.css';
import '../../styles/index/swiper.css';
import '../../styles/index/fontawsome.css';
import '../../styles/index/rtcss.css';
import '../../styles/index/post-views-counter-frontend-css.css'
import '../../styles/index/owl-carousel-css.css'
import '../../styles/index/custom.css';

import type { Metadata } from 'next';
import { Changa } from 'next/font/google'
const changa = Changa({
  weight: '400',
  subsets: ['latin'],
})


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
    <html lang="en">

      <body className={changa.className}>{children}</body>
    </html>
  )
}
