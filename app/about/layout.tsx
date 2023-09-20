import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Skudunter",
  description: "Here I list my skills and technologies I have used aswell as all my job experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
