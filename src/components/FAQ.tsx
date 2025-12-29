import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "1. O que é a Bíblia em Música?",
    answer: "A Bíblia em Música é uma coleção completa que transforma os textos da Bíblia em canções devocionais. São 351 músicas inspiradas nos Salmos, Provérbios, Cartas de Paulo e Evangelhos — compostas com base nas Escrituras, para te ajudar a memorizar, meditar e viver a Palavra de Deus de um jeito novo: cantando."
  },
  {
    question: "2. O conteúdo é fiel ao texto bíblico?",
    answer: "Sim. Todas as letras foram escritas a partir dos textos originais da Bíblia, mantendo fidelidade às Escrituras. O objetivo é que cada música seja uma forma de louvor e meditação, sem distorções, traduzindo a mensagem bíblica em poesia e melodia."
  },
  {
    question: "3. Como vou acessar as músicas depois da compra?",
    answer: "O acesso é 100% digital. Assim que a compra é confirmada, você receberá um e-mail para entrar na área exclusiva de membros. Lá, você pode ouvir todas as músicas online ou baixar os arquivos MP3, além de acessar os PDFs com letras e materiais de apoio."
  },
  {
    question: "4. Preciso pagar mensalidade ou é acesso vitalício?",
    answer: "Não há mensalidades. O pagamento é único, e o acesso é vitalício. Depois de adquirir, o conteúdo é seu para sempre — você pode ouvir e baixar quando quiser, sem limite de tempo."
  },
  {
    question: "5. As músicas são para qual momento do dia?",
    answer: "Você pode ouvir em qualquer momento: durante o devocional, nas orações, no trabalho, antes de dormir ou enquanto relaxa. Há músicas mais suaves, ideais para oração, e outras que elevam o ânimo e fortalecem a fé. Além disso, o material inclui versões instrumentais exclusivas para momentos de paz e meditação."
  },
  {
    question: "6. O material é indicado para quem?",
    answer: "Para todos que desejam se aproximar de Deus de forma leve, musical e profunda. É ideal para quem quer criar o hábito de um devocional diário, memorizar versículos, fortalecer a fé, compreender melhor os ensinamentos bíblicos e transformar o ambiente com canções inspiradas na Palavra."
  },
  {
    question: "7. O que vou receber?",
    answer: "Você recebe as 4 coleções completas — Salmos, Provérbios, Cartas de Paulo e Evangelhos — somando 351 músicas em alta qualidade. Também ganha PDFs com letras e devocionais, Guia Emocional, Devocional de 30 dias, Versões Instrumentais, Guia Visual dos Personagens Bíblicos e o Desafio 7 Dias para Memorizar a Palavra."
  },
  {
    question: "8. Posso ouvir as músicas mesmo sem internet?",
    answer: "Sim! Você pode baixar todas as músicas em formato MP3 e ouvir offline, em qualquer celular, tablet ou computador. Isso permite levar sua jornada espiritual para onde quiser — seja em viagens, momentos de oração ou descanso."
  },
  {
    question: "9. E se eu não gostar do conteúdo?",
    answer: "Você tem garantia total de 7 dias. Se por qualquer motivo sentir que o conteúdo não fortaleceu sua fé ou não atendeu às suas expectativas, basta pedir o reembolso dentro do prazo — e devolvemos 100% do valor, sem perguntas."
  },
  {
    question: "10. Qual é a diferença entre a Bíblia em Música e outras versões devocionais?",
    answer: "A Bíblia em Música vai além da leitura: ela transforma a experiência em adoração. Cada versículo é vivido por meio da melodia, tornando o aprendizado mais emocional, prazeroso e memorável. É uma forma de sentir e cantar a Palavra de Deus, e não apenas estudá-la."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqData.map((item, index) => (
        <details 
          key={index}
          className="faq-item"
          open={openIndex === index}
        >
          <summary 
            className="faq-summary list-none"
            onClick={(e) => {
              e.preventDefault();
              toggleItem(index);
            }}
          >
            <span className="pr-4">{item.question}</span>
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </summary>
          {openIndex === index && (
            <div className="faq-content">
              <p>{item.answer}</p>
            </div>
          )}
        </details>
      ))}
    </div>
  );
};

export default FAQ;
