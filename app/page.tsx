import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TfiAgenda } from "react-icons/tfi";
export default function Home() {
  return (
    <main>
      <section
        id="banner"
        className="flex flex-col items-center justify-center w-full py-16 min-h-screen"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 h-96 relative">
            <Image
              src="/psicastrophoto.jpeg"
              alt="Psicastro"
              layout="fill"
              objectFit="cover"
              objectPosition="center top" // Ajuste aqui
              className="rounded-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6 px-6">
            <h2 className="text-5xl font-bold custom-h2 mb-6">Castro</h2>
            <p className="text-3xl font-semibold custom-h2 mb-6">
              PSICÓLOGA - CRP 06/192150
            </p>
            <p className="text-xl">
              Orientada pela teoria Analítico Comportamental, ofereço um espaço
              de acolhimento e mudança. Percebo que começar processos
              terapêuticos pode ser difícil e complicado, mas acredite, investir
              em auto cuidado pode ser uma experiência transformadora.
            </p>
            <p className="text-xl">
              Minha função é auxiliar nos processos, de forma gentil e
              comprometida, ajudando as pessoas a construir o caminho entre o
              que vivem e o que desejam viver.
            </p>
            <Link
              href="/saiba-mais"
              className="inline-block px-6 py-3 border border-black text-black font-semibold text-lg rounded transition-all duration-300 hover:bg-[#B2572B] hover:text-white"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      <section
        id="atendimentos"
        className="w-full py-16 bg-[#FDFBFD] flex items-center justify-center"
      >
        <div className="container mx-auto bg-white p-12 shadow-lg rounded-lg text-center">
          <h2 className="custom-h2 mb-6">Atendimentos Presencial e Online</h2>
          <p className="text-xl">
            Em um primeiro encontro, gosto de oferecer uma entrevista para
            esclarecer qualquer tipo de dúvida. Essa opção não é obrigatória,
            portanto fica à escolha do(a) paciente escolher entre iniciar o
            processo de cara ou solicitar a entrevista.
          </p>
        </div>
      </section>

      <section
        id="contato"
        className="flex flex-col md:flex-row min-h-screen bg-[#FDFBFD] pt-24"
      >
        <div className="flex-1 p-8">
          <div className="container mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-center custom-h2 mb-6">
              Contato
            </h2>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4">
                    <img
                      width={22}
                      height={22}
                      alt="Localizacao"
                      src="https://res.cloudinary.com/aguadeira/image/upload/v1685242685/FTM/pinoteste_1_1_jg8cqk.png"
                    />
                    <span>
                      Rua Barata Ribeiro, 490, conj 104
                      <br />
                      Bela Vista, São Paulo SP
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <AiOutlinePhone className="mr-2 text-lg" />
                    <span>(11) 99452-8773</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <TfiAgenda className="mr-2 text-lg" />
                    <span>
                      Disponibilidade para atendimentos presenciais nas regiões:
                      Morumbi, Butantã, Pinheiros, Paulista e Higienópolis.
                    </span>
                  </li>
                </ul>
                <p className="mt-6">
                  Consultório localizado ao lado do Hospital Sírio Libanês, a
                  poucos minutos das avenidas Paulista e 9 de Julho. Perfeito
                  para quem está próximo às linhas verde e amarela do metrô.
                </p>
                <p className="mt-4">
                  Para esclarecer dúvidas, obter informações ou agendar sua
                  sessão, entre em contato.
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full h-96 relative">
                  <Image
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Rua+Barata+Ribeiro,+490,+conj+104,+Bela+Vista,+São+Paulo+SP&zoom=15&size=600x300&maptype=roadmap&key=YOUR_GOOGLE_MAPS_API_KEY"
                    alt="Mapa"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-4 bg-[#FDFBFD] text-center">
        <div className="container mx-auto">
          <nav className="mb-4">
            <a
              href="#home"
              className="text-lg text-black transition-all duration-300 hover:text-[#a52a2a] mx-4"
            >
              Home
            </a>
            <a
              href="#atendimentos"
              className="text-lg text-black transition-all duration-300 hover:text-[#a52a2a] mx-4"
            >
              Atendimentos
            </a>
            <a
              href="#saiba-mais"
              className="text-lg text-black transition-all duration-300 hover:text-[#a52a2a] mx-4"
            >
              Saiba Mais
            </a>
            <a
              href="#contato"
              className="text-lg text-black transition-all duration-300 hover:text-[#a52a2a] mx-4"
            >
              Contato
            </a>
          </nav>
          <p className="text-sm text-gray-600 mb-2">
            Rua Barata Ribeiro, 490, conj 104, Bela Vista, São Paulo SP
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Copyright © 2024 psicastro
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com"
              className="text-black transition-all duration-300 hover:text-[#a52a2a]"
            >
              <FaInstagram className="mr-2 text-lg text-pink-500" />
            </a>
            <a
              href="https://wa.me/5511974528773"
              className="text-black transition-all duration-300 hover:text-[#a52a2a]"
            >
              <AiOutlineWhatsApp className="mr-2 text-lg text-green-500" />
            </a>
            <a
              href="mailto:contato@psicologamaritiemi.com"
              className="text-black transition-all duration-300 hover:text-[#a52a2a]"
            >
              <AiOutlineMail className="mr-2 text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
