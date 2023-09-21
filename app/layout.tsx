import "./globals.css";
import NavigationBar from "./components/navigationBar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "skudunter.com",
  referrer: "origin-when-cross-origin",
  keywords: [
    "skudunter",
    "skudunter.com",
    "portfolio",
    "web developer",
    "cape town",
  ],
  authors: { name: "daniel", url: "https://skudunter.com" },
  colorScheme: "dark",
  creator: "Skudunter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: "Skudunters place on the web",
  description:
    "Skudunters home page for his personal website,providing links to all his projects",
  verification: {
    google: "",
  },

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
