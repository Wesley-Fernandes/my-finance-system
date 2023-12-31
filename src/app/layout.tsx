import Navbar from "@modules/components/Navbar";
import { Inter } from "next/font/google";
import Scroller from "@modules/components/Scroller";
import Security from "@modules/components/Security";

import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MY FINANCE",
  description: "Controle suas finanças com My Finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className} data-theme="cupcake">
        <Security>
          {children}
        </Security>
      </body>
    </html>
  );
}
