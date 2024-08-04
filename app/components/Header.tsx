import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-12 bg-[#FDFBFD] top-0 z-10 transition-all duration-300 hidden md:flex">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="Logo da Empresa"
            width={300}
            height={100}
            priority
          />
        </Link>
        <nav className="space-x-8">
          <a
            href="/"
            className="text-2xl text-black transition-all duration-300 hover:text-[#B2572B]"
          >
            Home
          </a>
          <a
            href="#atendimentos"
            className="text-2xl text-black transition-all duration-300 hover:text-[#B2572B]"
          >
            Atendimentos
          </a>
          <Link
            href="/saiba-mais"
            className="text-2xl text-black transition-all duration-300 hover:text-[#B2572B]"
          >
            Saiba Mais
          </Link>
          <a
            href="#contato"
            className="text-2xl text-black transition-all duration-300 hover:text-[#B2572B]"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
