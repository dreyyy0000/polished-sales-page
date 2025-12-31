import AudioPlayer from '../components/AudioPlayer';
import CTAButton from '../components/CTAButton';
import FAQ from '../components/FAQ';

const Index = () => {
  // Audio player data - preserved exactly from original
  const audioTracks = [
    {
      audioSrc: "/audio/sermao-do-monte.mp3",
      title: "Música 29 - O Sermão do Monte – parte 1 (Bem-aventuranças) - Músicas dos Evangelhos",
      coverSrc: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=400&fit=crop"
    },
    {
      audioSrc: "/audio/romanos-7.mp3",
      title: "Capítulo 7 – A Luta entre a Carne e o Espírito – Carta de Paulo aos Romanos",
      coverSrc: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=400&fit=crop"
    },
    {
      audioSrc: "/audio/proverbios-1.mp3",
      title: "Provérbios 1 - A Voz da Sabedoria",
      coverSrc: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop"
    },
    {
      audioSrc: "/audio/salmos-23.mp3",
      title: "Ouça como ficou o Salmos 23",
      coverSrc: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop"
    }
  ];

  const features = [
    "4 coleções completas: Salmos, Provérbios, Cartas e Evangelhos.",
    "351 músicas devocionais em alta qualidade (MP3).",
    "Letras poéticas e fiéis às Escrituras.",
    "PDFs com acompanhamento de cada música.",
    "Acesso digital vitalício (celular, tablet ou computador).",
    "Download offline para ouvir quando quiser."
  ];

  const bonuses = [
    {
      title: "Guia Emocional dos Salmos, Provérbios, Cartas de Paulo e Evangelhos",
      description: "Um guia criado para te mostrar qual música ouvir de acordo com sua necessidade espiritual.",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=300&h=400&fit=crop"
    },
    {
      title: "Devocional 30 Dias",
      description: "Um plano devocional prático para aplicar a Palavra em 30 dias, com reflexões e orações guiadas.",
      image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=300&h=400&fit=crop"
    },
    {
      title: "Versões Instrumentais para Oração e Relaxamento",
      description: "Músicas suaves, ideais para orações, momentos de paz e ambiente devocional.",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=400&fit=crop"
    },
    {
      title: "Guia Visual Interativo dos Personagens Bíblicos",
      description: "Um material que apresenta os principais personagens citados nas canções, ajudando na compreensão histórica e espiritual.",
      image: "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?w=300&h=400&fit=crop"
    },
    {
      title: "Desafio 7 Dias – Memorize a Palavra",
      description: "Uma jornada de 7 dias com exercícios e músicas específicas para te ajudar a elevar ainda mais a sua fé.",
      image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=300&h=400&fit=crop"
    }
  ];

  const benefits = [
    "Memorizar a Palavra de Deus de forma natural e prazerosa.",
    "Meditar e se conectar com Deus diariamente.",
    "Fortalecer a fé e tomar decisões com sabedoria.",
    "Criar um ambiente de adoração em casa, no trabalho ou nos momentos de oração."
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="section-dark py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://bibliavivaoficial.com/wp-content/uploads/2025/11/Group-1.svg" 
              alt="Bíblia Viva" 
              className="h-10 md:h-12 mx-auto"
            />
          </div>

          {/* Headline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            OS LIVROS DA BÍBLIA FORAM TRANSFORMADOS EM <span className="text-gold">350 MÚSICAS</span> PARA QUE ADORE E CANTE CADA VERSÍCULO.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            Todos os 150 Salmos, as cartas de Paulo, Provérbios e a trajetória de Jesus, foram transformados em músicas devocionais.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            <span className="text-gold">Após baixar todas as músicas, você poderá ouvir onde e como quiser,</span> sem precisar de internet.
          </p>

          {/* Audio Players - First Row */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <AudioPlayer {...audioTracks[0]} />
            <AudioPlayer {...audioTracks[1]} />
          </div>

          {/* Audio Players - Second Row */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <AudioPlayer {...audioTracks[2]} />
            <AudioPlayer {...audioTracks[3]} />
          </div>

          {/* CTA Button */}
          <CTAButton text="CLIQUE PARA OUVIR E BAIXAR TODAS AS MÚSICAS AGORA MESMO" />
        </div>
      </section>

      {/* SEGUNDA SECTION - Value Proposition */}
      <section id="segunda" className="section-light py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl mb-4">
            <span className="text-gold-dark font-bold">Músicas que transformam</span> a leitura da Bíblia em louvor, meditação e crescimento espiritual.
          </p>

          <p className="text-lg md:text-xl text-brown-dark/80 mb-4">
            Durante séculos, a Palavra de Deus foi lida, estudada e recitada.
          </p>

          <p className="text-lg md:text-xl font-semibold text-brown-dark mb-6">
            Agora, ela pode ser sentida, cantada e vivida.
          </p>

          <div className="divider" />

          <p className="text-lg md:text-xl text-brown-dark/80 mb-8 max-w-3xl mx-auto">
            A Bíblia em Música reúne os Salmos, Provérbios, Cartas de Paulo e Evangelhos em uma única jornada musical, feita para transformar sua vida espiritual por meio da música.
          </p>

          {/* Product Image */}
          <div className="mb-10">
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop" 
              alt="Coleção Bíblia em Música"
              className="mx-auto max-w-xs md:max-w-sm drop-shadow-2xl rounded-xl"
            />
          </div>

          <CTAButton text="Quero acessar a Bíblia em Música agora" />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section-dark py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-8">
            <span className="text-gold-dark">O que estão falando sobre</span> a Bíblia em Música
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Depoimento 1 */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold/20">
              <img 
                src="/images/testimonial-1.jpg"
                alt="salao.canil.happy.dog"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gold"
              />
              <p className="text-foreground/90 italic mb-4">"Eu comprei e estou amando"</p>
              <p className="text-gold font-semibold">— @salao.canil.happy.dog</p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold/20">
              <img 
                src="/images/testimonial-2.jpg"
                alt="Ivana Jaber"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gold"
              />
              <p className="text-foreground/90 italic mb-4">"Paguei, recebi e estou amando. Muito bom mesmo. É demais!!!! Muito bom mesmo. Que Deus abençoe sempre o administrador dessa ideia."</p>
              <p className="text-gold font-semibold">— Ivana Jaber</p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold/20">
              <img 
                src="/images/testimonial-3.jpg"
                alt="Rogério Panassio"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gold"
              />
              <p className="text-foreground/90 italic mb-4">"Ficou lindo demais parabéns 😍😍😍 É um jeito de decorar fácil"</p>
              <p className="text-gold font-semibold">— Rogério Panassio</p>
            </div>

            {/* Depoimento 4 */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold/20">
              <img 
                src="/images/testimonial-4.jpg"
                alt="mariangela_pinheiro24"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gold"
              />
              <p className="text-foreground/90 italic mb-4">"Maravilhoso... Perfeito, amei"</p>
              <p className="text-gold font-semibold">— @mariangela_pinheiro24</p>
            </div>

            {/* Depoimento 5 */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold/20">
              <img 
                src="/images/testimonial-5.jpg"
                alt="kitalbolosepaes"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gold"
              />
              <p className="text-foreground/90 italic mb-4">"Depois que ouvi o primeiro salmo cantado, virou meu vício ouço todos os dias várias listas de palavra cantada é uma delícia de ouvir. ❤️❤️❤️"</p>
              <p className="text-gold font-semibold">— @kitalbolosepaes</p>
            </div>

            {/* Depoimento 6 */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold/20">
              <img 
                src="/images/testimonial-6.jpg"
                alt="shirleipessoa"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gold"
              />
              <p className="text-foreground/90 italic mb-4">"Eu amei todas as faixas 😍😍"</p>
              <p className="text-gold font-semibold">— @shirleipessoa</p>
            </div>

            {/* Depoimento 7 */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold/20 sm:col-span-2 lg:col-span-3">
              <img 
                src="/images/testimonial-7.jpg"
                alt="Depoimento"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gold"
              />
              <p className="text-foreground/90 italic mb-4">"Eu estou encantada! O Salmo 27 ficou perfeito demais"</p>
              <p className="text-gold font-semibold">— Seguidora</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section-light py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-8 text-brown-dark">
            <span className="text-gold-dark">A Bíblia em Música vai te ajudar</span> a:
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 border border-gold-dark/20 rounded-xl p-5 text-left shadow-sm hover:shadow-md transition-shadow">
                <p className="text-brown-dark">{benefit}</p>
              </div>
            ))}
          </div>

          <CTAButton text="Quero acessar a Bíblia em Música agora" />
        </div>
      </section>

      {/* WHAT YOU RECEIVE SECTION */}
      <section id="receber" className="section-dark py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-10">
            O que você <span className="text-gold">vai receber?</span>
          </h2>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES SECTION */}
      <section className="section-dark py-16 md:py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-lg font-semibold mb-2">Tem mais!</p>
          <h2 className="text-xl md:text-2xl mb-10">
            Você vai receber<br />
            <span className="text-gold font-bold">20 Bônus Exclusivos</span> que custam mais de<br />
            <strong>R$ 200,00</strong>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bonus-card">
                <img 
                  src={bonus.image} 
                  alt={bonus.title}
                  className="w-full max-w-[200px] mx-auto mb-4 rounded-lg"
                  loading="lazy"
                />
                <h3 className="text-lg font-bold mb-2 text-gold">{bonus.title}</h3>
                <p className="text-foreground/80 text-sm">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="section-dark py-16 md:py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-md text-center">
          <div className="w-40 md:w-48 h-40 md:h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-2xl border-4 border-gold/30">
            <div className="text-center">
              <p className="text-3xl font-bold text-background">7</p>
              <p className="text-xs font-semibold text-background/90 uppercase">dias de<br/>garantia</p>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Garantia <span className="text-gold">Incondicional</span>
          </h3>
          <p className="text-foreground/80">
            Você tem 7 dias para testar. Se não sentir sua fé fortalecida, devolvemos 100% do seu investimento!
          </p>
        </div>
      </section>

      {/* CHECKOUT SECTION */}
      <section id="checkout" className="section-checkout py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-lg text-center">
          <p className="text-lg md:text-xl mb-6 text-foreground/90">
            Você está recebendo quatro coleções completas da Bíblia em forma de música por menos do valor de um único projeto.
          </p>

          <div className="divider" />

          {/* Product Image */}
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=500&fit=crop"
            alt="Coleção Completa"
            className="w-64 md:w-80 mx-auto my-8 rounded-lg shadow-2xl"
          />

          {/* Pricing */}
          <div className="mb-6">
            <p className="text-lg mb-2">
              Valor promocional<br />dos 4 projetos<br />
              <span className="text-gold">+ bônus separadamente:</span>
            </p>
            <p className="text-2xl line-through text-foreground/50 mb-4">R$ 199,00</p>
            
            <p className="text-sm text-foreground/70 mb-2">Somente ATÉ hoje</p>
            <p className="text-gold font-bold text-xl mb-4">29/12/2025</p>

            <p className="text-lg mb-2">por apenas:</p>
            <p className="text-5xl md:text-6xl font-bold text-gold mb-6">R$ 19,90</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="price-badge">
              <span className="text-sm font-semibold">Pagamento único</span>
            </div>
            <div className="price-badge">
              <span className="text-sm font-semibold">7 dias de Garantia</span>
            </div>
            <div className="price-badge">
              <span className="text-sm font-semibold">Acesso vitalício</span>
            </div>
          </div>

          {/* Main CTA */}
          <a 
            href="https://pay.kiwify.com.br/eH8zUm0"
            className="cta-button w-full text-xl animate-pulse-glow"
          >
            Eu quero agora
          </a>

          <p className="text-sm text-foreground/70 mt-6 max-w-md mx-auto">
            O que você pagaria em um único livro ou curso devocional, agora te dá acesso a toda a Bíblia cantada, de forma organizada, fiel e inspiradora!
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="section-light py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-brown-dark">
            Uma experiência que une fé, emoção e conhecimento bíblico
          </h2>
          <p className="text-brown-dark/80 leading-relaxed">
            A Bíblia em Música foi criada para quem busca se aproximar de Deus com leveza e profundidade. As melodias, letras e estudos visuais foram pensados para que você entenda, memorize e viva os ensinamentos da Bíblia de forma prática.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-dark py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-wider text-foreground/60 mb-2">FAQ</p>
            <h2 className="text-xl md:text-2xl font-semibold">
              Perguntas <strong>Frequentes</strong>
            </h2>
            <div className="divider" />
          </div>

          <FAQ />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <img 
            src="https://bibliavivaoficial.com/wp-content/uploads/2025/11/Group-1.svg" 
            alt="Bíblia Viva" 
            className="h-8 mx-auto mb-4 opacity-60"
          />
          <p className="text-sm text-foreground/50">
            © 2025 Bíblia Viva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
