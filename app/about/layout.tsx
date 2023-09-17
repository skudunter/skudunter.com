import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Skudunter",
  description: "About me,my experience and expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
