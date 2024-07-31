"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpansion = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold custom-h2 mb-6">
        Dúvidas Frequentes
      </h2>
      <div className="space-y-4">
        {faqs.map(({ id, question, answer }) => (
          <div key={id} className="border border-gray-200 rounded-md p-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpansion(id)}
            >
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                {question}
                <span className="ml-2">
                  {expanded === id ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </span>
              </h3>
            </div>
            {expanded === id && <div className="text-lg mt-2">{answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

const faqs = [
  {
    id: "1",
    question: "Como funciona a psicoterapia?",
    answer: `Inicialmente, tudo gira em torno das demandas apresentadas, pois preciso entender o que trouxe cada pessoa à psicoterapia. Diante disso, procuro saber quais são os contextos de insatisfação, o que os mantém e o que causam na vida da pessoa. Tudo isso pode englobar fortes emoções, incertezas, dificuldades e vulnerabilidades, daí a importância de ter uma profissional qualificada ao seu lado!`,
  },
  {
    id: "2",
    question: "Qual é a frequência e duração das sessões?",
    answer: `As sessões de psicoterapia têm duração aproximada de 1 hora. Geralmente é realizada uma sessão por semana, mas a depender das necessidades individuais podem ser combinadas duas ou três sessões semanais.`,
  },
  {
    id: "3",
    question: "Quando devo procurar uma psicóloga?",
    answer: `Quando o assunto é o seu bem estar, você é quem decide! Não existe uma regra para procurar o contato de um profissional, então fica a escolha de cada um iniciar o serviço ou não. Para ajudar a tomar essa decisão que tal se perguntar:
      <ul className="list-disc pl-5 mt-2">
        <li>Estou passando por um momento difícil?</li>
        <li>Tenho vontade de conversar com um profissional sobre o que me aflige?</li>
        <li>Minha vida seria mais fácil se houvesse alguém preparado e treinado para me auxiliar?</li>
        <li>Minha relação comigo mesmo e com o mundo ao meu redor precisa mudar?</li>
        <li>Tenho suspeita de algum transtorno que envolve minha saúde mental?</li>
      </ul>
      Se a resposta para qualquer uma dessas questões for “sim”, talvez seja do seu interesse contatar um profissional e iniciar em psicoterapia.`,
  },
  {
    id: "4",
    question: "Você aceita convênios ou atende por algum plano de saúde?",
    answer: `Não, mas é possível solicitar à sua seguradora de saúde o reembolso pelas consultas. É preciso verificar se possui reembolso para consultas e quais são os documentos necessários para obtê-lo. Estou acostumada a fazer declarações, atestados e relatórios para planos de saúde, portanto não se preocupe de pedir qualquer coisa!
      <p className="mt-2">Vale lembrar que de acordo com a Resolução Normativa n° 541, de 11 de julho de 2022, a Agência Nacional de Saúde Suplementar (ANS) aprovou o fim da limitação do número de consultas e sessões com psicólogos, fonoaudiólogos, terapeutas ocupacionais e fisioterapeutas. A medida vale para os usuários de planos de saúde com qualquer doença ou condição de saúde listada pela Organização Mundial de Saúde, como, por exemplo, depressão, ansiedade, transtornos alimentares, síndrome de Down e outros. A lista da OMS é ampla e engloba mais de 55 mil códigos diagnósticos.</p>`,
  },
  {
    id: "5",
    question: "Por quanto tempo preciso fazer terapia?",
    answer: `É sempre escolha da pessoa decidir quanto tempo será investido na terapia. Minha função é avaliar e dar meu parecer profissional, mas a decisão final sempre será da pessoa que contrata o serviço. Em geral, é difícil construir algo em menos de 6 meses, afinal, leva tempo para criar um espaço de confiança, gerar reflexões, investigar cada assunto por completo, elaborar emoções e construir resoluções. Além disso, é importante lembrar que sempre será preciso olhar para as individualidades de cada um e para o momento em que está vivendo.`,
  },
  {
    id: "6",
    question: "Qual é o valor das sessões?",
    answer: `O Conselho Federal de Psicologia (CFP) determina alguns cuidados quanto à divulgação de valores. Por isso, decido responder individualmente. Se está procurando por essa informação entre em contato.`,
  },
];

export default FAQSection;
