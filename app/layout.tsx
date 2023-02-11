'use client'

import { AnalyticsWrapper } from '../components/analytics';
import Navmenu from "../components/navmenu"
import Warning from "../components/development"

import "./layout.sass"



const devlopmentStatus = true

export default function RootLayout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html>
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
      // <html lang="en-US">
      //   <head />
      //   <body>
      //       {devlopmentStatus
      //           ? <Warning />
      //           : <></>
      //       }
      //       <div className="root">
      //           <div className="root_sidebar">
      //               <Navmenu />
      //           </div>
      //           <div className="root_children">
      //               {children}
      //           </div>
      //       </div>


      //       <AnalyticsWrapper />
      //   </body>
      // </html>
    );
  }
  