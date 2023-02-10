import Navmenu from "../components/navmenu"
import "./layout.sass"

export default function RootLayout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en-US">
        <head />
        <body>
            <div className="root">
                <div className="root_sidebar">
                    {/* <Navmenu /> */}
                    <h1>navigation</h1>
                </div>
                <div className="root_children">
                    {children}
                </div>
            </div>
        </body>
      </html>
    );
  }
  