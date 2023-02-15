import { Roboto } from "@next/font/google"

import { AnalyticsWrapper } from '../components/analytics';
import Navmenu from "../components/navmenu"
import Warning from "../components/development"

import "./layout.sass"



const devlopmentStatus = true

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
                <div className="root_sidebar">
                    <Navmenu />
                </div>

                <div className="root_children">
                    {children}
                </div>
            </div>


            <AnalyticsWrapper />
        </body>
      </html>
    );
  }
  