import Navmenu from "../components/navmenu"
import { AnalyticsWrapper } from './components/analytics';

import "./layout.sass"
import Warning from "../components/development"

const devlopmentStatus = true

export default function RootLayout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en-US">
        <head />
        <body>
            {devlopmentStatus
                ? <Warning />
                : <></>
            }
            <div className="root">
                <div className="root_sidebar">
                    {/* <Navmenu /> */}
                    <h1>navigation</h1>
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
  