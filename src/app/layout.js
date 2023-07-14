import "./globals.css";
import { Inter } from "next/font/google";
import Cursor from "@/components/shared/Cursor/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rabby Khan - MERN Stack Developer",
  description: "Rabby Khan - MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-accent`}>
        <Cursor />
        <main>{children}</main>
      </body>
    </html>
  );
}
