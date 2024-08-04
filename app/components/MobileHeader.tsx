"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-6 bg-[#FDFBFD] top-0 z-10 transition-all duration-300 flex md:hidden">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo da Empresa"
            width={200}
            height={50}
            priority
            style={{ borderRadius: "8px" }}
          />
        </Link>
        <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      {isOpen && (
        <nav className="w-full bg-[#FDFBFD] transition-all duration-300 flex flex-col items-center space-y-4 mt-4">
          <a
            href="/"
            className="text-xl text-black transition-all duration-300 hover:text-[#B2572B]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#atendimentos"
            className="text-xl text-black transition-all duration-300 hover:text-[#B2572B]"
            onClick={() => setIsOpen(false)}
          >
            Atendimentos
          </a>
          <Link
            href="/saiba-mais"
            className="text-xl text-black transition-all duration-300 hover:text-[#B2572B]"
            onClick={() => setIsOpen(false)}
          >
            Saiba Mais
          </Link>
          <a
            href="#contato"
            className="text-xl text-black transition-all duration-300 hover:text-[#B2572B]"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
