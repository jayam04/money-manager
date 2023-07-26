import "./globals.css";
import { Inter } from "next/font/google";

import { AlertCircle, FileWarning, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui2/alert";
import { Sidebar } from "@/components/Sidebar";

let developmentBuild = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "monymngr",
  description: "your finance manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={inter.className}> {/* body height is set to 100vh */}
      
        {developmentBuild ? (
          <Alert variant="destructive" className="w-7/8 m-1">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>NOTICE!</AlertTitle>
            <AlertDescription>
              You are using a development build of the application.
            </AlertDescription>
          </Alert>
        ) : (
          <></>
        )}

        {/* main body */}
        <div className="flex flex-row h-full">
          <div className="w-1/5"><Sidebar /></div>
          <div className="w-4/5">{children}</div>
        </div>

        {/* icon scout icons */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        ></link>
      </body>
    </html>
  );
}
