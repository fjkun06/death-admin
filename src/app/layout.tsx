import type { Metadata } from "next";
import "../styles/main.scss";


export const metadata: Metadata = {
  title: "Digi-TB",
  description: "Death Certificate Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"zozo"}>{children}</body>
    </html>
  );
}
