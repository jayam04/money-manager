import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import { AlertCircle, FileWarning, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

let developmentBuild = true;

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
      <body className={inter.className}>
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
        <div className="h-auto" style={{ height: "calc(100vh - 60px)" }}>
          {children}
        </div>
        {/* navbar  */}
        <Navbar />
        {/* unicons css */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        ></link>
      </body>
    </html>
  );
}
