import "./globals.css";
import NavigationBar from "./components/navigationBar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skudunters place on the web",
  description: "My Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-primary font-Roboto">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
