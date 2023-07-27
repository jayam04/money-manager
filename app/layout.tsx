import "./globals.css";
import { Inter } from "next/font/google";

import { Sidebar } from "@/components/Sidebar";

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
      <body className={inter.className}> {/* body height is set to 100vh */}
      
        {developmentBuild ? (
          <div className="text-red-500 font-mono border-2 border-red-500 rounded-xl p-4 m-1">
            <p className="font-bold">NOTICE!</p>
            <p>You are using development build.</p>
          </div>
        ) : (
          <></>
        )}

        {/* main body */}
        <div className="flex flex-row h-full">
          <div className="w-64"><Sidebar /></div>
          <div className="w-[calc(100%-256px)]">{children}</div>
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
