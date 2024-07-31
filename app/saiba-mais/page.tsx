import React from "react";
import FAQSection from "../components/FaqSection";

const About: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre Castro</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold custom-h2 mb-6">
            Mais sobre mim e meu trabalho
          </h2>
          <p className="text-lg mb-4">
            Formada em Psicologia pela Pontifícia Universidade Católica de São
            Paulo (PUC-SP), realizo atendimentos individuais a adultos, jovens e
            crianças.
          </p>
          <p className="text-lg mb-4">
            Aqui, você encontrará um espaço seguro e confidencial, onde a escuta
            atenta e o diálogo são fundamentais. Seja em consultas presenciais
            ou online, minha prioridade é proporcionar um ambiente inclusivo e
            acessível para todos que buscam acompanhamento psicológico.
          </p>
          <p className="text-lg mb-4">
            Acredito profundamente na importância de uma abordagem acolhedora e
            baseada em evidências científicas para promover transformações
            significativas na vida de cada indivíduo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold custom-h2 mb-6">
            Terapia e Análise do Comportamento
          </h2>
          <p className="text-lg mb-4">
            Na Análise do Comportamento, buscamos entender como problemas
            surgiram a partir da história de cada indivíduo. Para as psicólogas
            comportamentais, mesmo os comportamentos e sentimentos que menos
            gostamos se desenvolveram como formas de lidar com situações da
            vida. É exatamente por esse motivo que o consultório psicológico é
            um espaço de gentileza e acolhimento, para reconhecer e validar as
            dificuldades e problemas. Só assim seria possível conhecer o
            significado dos sofrimentos e o que faz com que eles continuem
            acontecendo.
          </p>
          <p className="text-lg ">
            E por que tentamos entender tudo isso? Para que mudança seja
            possível! Toda uma abordagem teórica que foca no entendimento das
            coisas que fazemos e porque as fazemos. É ideal para desenvolver
            habilidades novas, mudar a relação com a própria vida e com o mundo
            em que vivemos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold custom-h2 mb-6">
            Como trabalho
          </h2>
          <p className="text-lg mb-4">
            Tenho em mente que as pessoas procuram psicoterapia quando estão
            insatisfeitas ou sofrendo. Seja com a forma como lidam com os
            próprios sentimentos, com outras pessoas, com mudanças, fins,
            começos ou com a própria vida. Vejo que as pessoas procuram
            psicoterapia na busca de atuar em cima dessas insatisfações e de
            transformá-las em algo novo.
          </p>
          <p className="text-lg mb-4">
            É meu trabalho acolher e procurar soluções realistas. Seja qual for
            o seu ponto de partida, saiba que você não está sozinho nesta
            jornada. Estou aqui para oferecer suporte, orientação e um espaço
            seguro para que você possa explorar, crescer e se transformar.
          </p>
          <p className="text-lg">
            Se sente que esse é o estilo de terapia que procura, entre em
            contato e agende sua consulta.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold custom-h2 mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg mb-4">
            Consultório localizado ao lado do Hospital Sírio Libanês, a poucos
            minutos das avenidas Paulista e 9 de Julho. Perfeito para quem está
            próximo às linhas verde e amarela do metrô.
          </p>
          <p className="text-lg mb-4">
            Rua Barata Ribeiro, 490, conj 104
            <br />
            (11) 99452-8773
            <br />
            Com disponibilidade para atendimentos presenciais nas regiões:
            Morumbi, Butantã, Pinheiros, Paulista e Higienópolis.
          </p>
          <p className="text-lg mb-4">
            Para esclarecer dúvidas, obter informações ou agendar sua sessão,
            entre em contato.
          </p>
        </section>

        <FAQSection />
      </div>
    </div>
  );
};

export default About;
