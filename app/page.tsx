import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="w-full py-8 bg-[#FDFBFD] fixed top-0 z-10 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-4xl font-bold text-black">Logo</div>
          <nav className="space-x-8">
            <a
              href="#home"
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
            <a
              href="#saiba-mais"
              className="text-2xl text-black transition-all duration-300 hover:text-[#a52a2a]"
            >
              Saiba Mais
            </a>
            <a
              href="#contato"
              className="text-2xl text-black transition-all duration-300 hover:text-[#a52a2a]"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section
        id="banner"
        className="flex flex-col items-center justify-center w-full py-16 min-h-screen"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 h-96 relative">
            <Image
              src="https://via.placeholder.com/300"
              alt="Mariana Tiemi"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-4">
            <h2 className="text-5xl font-bold">Castro</h2>
            <p className="text-3xl font-semibold">PSICÓLOGA - CRP 06/192150</p>
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
            <a
              href="#saiba-mais"
              className="inline-block px-6 py-3 border border-black text-black font-semibold text-lg rounded transition-all duration-300 hover:bg-[#a52a2a] hover:text-white"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      <section
        id="atendimentos"
        className="w-full py-16 bg-[#FDFBFD] flex items-center justify-center"
      >
        <div className="container mx-auto bg-white p-12 shadow-lg rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-6">
            Atendimentos Presencial e Online
          </h2>
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
            <h2 className="text-4xl font-bold mb-8 text-center">Contato</h2>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4">
                    <Image
                      src="/icons/location.svg"
                      alt="Localização"
                      width={24}
                      height={24}
                    />
                    <span>
                      Rua Barata Ribeiro, 490, conj 104
                      <br />
                      Bela Vista, São Paulo SP
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Image
                      src="/icons/phone.svg"
                      alt="Telefone"
                      width={24}
                      height={24}
                    />
                    <span>(11) 99452-8773</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Image
                      src="/icons/calendar.svg"
                      alt="Atendimentos"
                      width={24}
                      height={24}
                    />
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
            Copyright © 2024 psicologamaritiemi
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com"
              className="text-black transition-all duration-300 hover:text-[#a52a2a]"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://wa.me/5511994528773"
              className="text-black transition-all duration-300 hover:text-[#a52a2a]"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>
            <a
              href="mailto:contato@psicologamaritiemi.com"
              className="text-black transition-all duration-300 hover:text-[#a52a2a]"
            >
              <Image
                src="/icons/email.svg"
                alt="E-mail"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
