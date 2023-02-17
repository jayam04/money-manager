import { Roboto } from "@next/font/google"

import { VercelAnalyticsWrapper } from './(components)/(analytics)/vercel';
import Navmenu from "./(components)/(sidebar)/sidebar"
import Warning from "./(components)/(development)/development"
// import Sidebar from "./(components)/sidebar"

import "./layout.sass"



const devlopmentStatus = false

// fonts
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--default-font'
});


// layout
export default function RootLayout({ children }) {
    return (
      <html lang='en-US' className={roboto.className}>
        <head />
        <body>
            {devlopmentStatus
                ? <Warning />
                : <></>
            }

            <div className="root">
                <div className="sidebar">
                    <Navmenu />
                    {/* <Sidebar /> */}
                </div>

                <div className="root_children">
                    {children}
                </div>
            </div>


            <VercelAnalyticsWrapper />
        </body>
      </html>
    );
  }
  