import React from 'react'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  weight:["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})
export const metadata = {
    title: 'About Page',
    description: 'About Page of the app',
  }
function About() {
  return (
    <div className={`${montserrat.className}`}>This is the About Page</div>
  )
}

export default About