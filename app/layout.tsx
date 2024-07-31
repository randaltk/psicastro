import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psicóloga - Castro",
  description: "| Terapia online e presencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {" "}
          <header className="w-full py-12 bg-[#FDFBFD]  top-0 z-10 transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/">
                <div className="text-4xl font-bold text-black">Logo</div>
              </Link>

              <nav className="space-x-8">
                <a
                  href="/"
                  className="text-2xl text-black transition-all duration-300 hover:text-[#a52a2a]"
                >
                  Home
                </a>
                <a
                  href="#atendimentos"
                  className="text-2xl text-black transition-all duration-300 hover:text-[#a52a2a]"
                >
                  Atendimentos
                </a>
                <Link
                  href="/saiba-mais"
                  className="text-2xl text-black transition-all duration-300 hover:text-[#a52a2a]"
                >
                  Saiba Mais
                </Link>
                <a
                  href="#contato"
                  className="text-2xl text-black transition-all duration-300 hover:text-[#a52a2a]"
                >
                  Contato
                </a>
              </nav>
            </div>
          </header>{" "}
          {children}
        </div>
      </body>
    </html>
  );
}
