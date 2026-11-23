import ContactForm from "./components/ContactForm";
const treatments = [
  {
    number: "01",
    title: "Clínica geral",
    description:
      "Prevenção, avaliação e cuidados essenciais para manter sua saúde bucal em dia.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Ortodontia",
    description:
      "Tratamentos personalizados para alinhar seus dentes e transformar seu sorriso.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Implantodontia",
    description:
      "Soluções para recuperar a função mastigatória e a confiança ao sorrir.",
    icon: "◉",
  },
  {
    number: "04",
    title: "Estética dental",
    description:
      "Cuidados estéticos que valorizam a naturalidade e a harmonia do seu sorriso.",
    icon: "✧",
  },
];

const professionals = [
  {
    name: "Dra. Mariana Costa",
    specialty: "Clínica geral",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=85",
  },
  {
    name: "Dr. Rafael Mendes",
    specialty: "Implantodontia",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&q=85",
  },
  {
    name: "Dra. Camila Oliveira",
    specialty: "Ortodontia",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=85",
  },
];

const testimonials = [
  {
    text: "Fui muito bem recebida desde o primeiro atendimento. A equipe explicou cada etapa do tratamento com muito cuidado.",
    name: "Paciente demonstrativo",
  },
  {
    text: "O ambiente é acolhedor e o atendimento transmite muita confiança. Uma experiência muito positiva.",
    name: "Paciente demonstrativo",
  },
  {
    text: "Gostei da atenção aos detalhes e da clareza nas orientações. Recomendo conhecer a clínica.",
    name: "Paciente demonstrativo",
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a href="#inicio" className="brand" aria-label="Odonto Prime - Início">
          <span className="brand-icon">✳</span>
          <span>
            odonto<span className="brand-highlight">prime</span>
            <small>CLÍNICA ODONTOLÓGICA</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">A clínica</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#equipe">Profissionais</a>
        </nav>

        <a className="nav-cta" href="#contato">
          Agende sua avaliação <span>↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            CUIDADO QUE TRANSFORMA
          </span>

          <h1>
            Seu sorriso merece
            <br />
            um cuidado <em>especial.</em>
          </h1>

          <p className="hero-description">
            Na Odonto Prime, unimos acolhimento, tecnologia e atenção aos
            detalhes para cuidar da sua saúde e valorizar o seu sorriso.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="button-primary">
              Agende sua avaliação <span>↗</span>
            </a>
            <a href="#tratamentos" className="button-text">
              Conheça nossos tratamentos <span>↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-symbol">✳</span>
            <span>Um novo jeito de cuidar do seu sorriso.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image" role="img" aria-label="Dentista atendendo paciente em consultório odontológico" />
          <div className="hero-image-caption">
            <span>ODONTO PRIME</span>
            <span>CUIDADO EM CADA DETALHE</span>
          </div>
          <div className="hero-seal">
            <span>SEU SORRISO</span>
            <strong>♡</strong>
            <span>NOSSA PRIORIDADE</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SAÚDE BUCAL</span>
          <span>ESTÉTICA</span>
          <span>BEM-ESTAR</span>
          <span className="hero-bottom-right">01 — 04</span>
        </div>
      </section>

      <section className="intro section-container" id="sobre">
        <div className="intro-label">
          <span className="section-number">01 /</span>
          <span>QUEM SOMOS</span>
        </div>

        <div className="intro-content">
          <h2>
            Mais do que cuidar de dentes,
            <em> cuidamos de pessoas.</em>
          </h2>
          <div className="intro-bottom">
            <p>
              Acreditamos que um atendimento odontológico de qualidade começa
              com escuta, confiança e respeito à individualidade de cada
              paciente.
            </p>
            <a href="#contato" className="text-link">
              Conheça nossa proposta <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="treatments section-container" id="tratamentos">
        <div className="section-header">
          <div>
            <span className="eyebrow">02 — NOSSOS CUIDADOS</span>
            <h2>
              Cuidado completo,
              <br />
              <em>em cada etapa.</em>
            </h2>
          </div>
          <p>
            Soluções odontológicas pensadas para acompanhar você em todas as
            fases da vida.
          </p>
        </div>

        <div className="treatment-grid">
          {treatments.map((treatment) => (
            <article className="treatment-card" key={treatment.number}>
              <div className="treatment-top">
                <span>{treatment.number}</span>
                <span className="treatment-icon">{treatment.icon}</span>
              </div>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
              <a href="#contato" aria-label={`Consultar sobre ${treatment.title}`}>
                Saiba mais <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-container">
        <div className="about-image">
          <div className="about-image-inner" role="img" aria-label="Interior de clínica odontológica moderna" />
          <span className="image-index">ODONTO PRIME · 2026</span>
        </div>

        <div className="about-content">
          <span className="eyebrow">03 — NOSSA ESSÊNCIA</span>
          <h2>
            Um ambiente pensado para você se sentir <em>bem.</em>
          </h2>
          <p>
            Cada detalhe da nossa clínica foi pensado para proporcionar uma
            experiência tranquila, desde a primeira conversa até o
            acompanhamento do seu tratamento.
          </p>
          <div className="about-values">
            <div>
              <span>01</span>
              <strong>Acolhimento</strong>
              <p>Você é ouvido e respeitado em cada consulta.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Transparência</strong>
              <p>Orientações claras para decisões conscientes.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Dedicação</strong>
              <p>Atenção aos detalhes em cada etapa do cuidado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team section-container" id="equipe">
        <div className="section-header">
          <div>
            <span className="eyebrow">04 — NOSSA EQUIPE</span>
            <h2>
              Pessoas que cuidam
              <br />
              de <em>pessoas.</em>
            </h2>
          </div>
          <p>
            Profissionais preparados para oferecer atenção individualizada e
            cuidado em cada atendimento.
          </p>
        </div>

        <div className="team-grid">
          {professionals.map((professional) => (
            <article className="team-card" key={professional.name}>
              <div className="team-photo">
                <img src={professional.image} alt={professional.name} />
              </div>
              <div className="team-info">
                <div>
                  <h3>{professional.name}</h3>
                  <p>{professional.specialty}</p>
                </div>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials section-container">
        <div className="testimonial-heading">
          <span className="eyebrow">05 — EXPERIÊNCIAS</span>
          <h2>
            Cuidado que deixa
            <br />
            <em>boas lembranças.</em>
          </h2>
          <p>
            Exemplos ilustrativos de depoimentos para a demonstração do
            projeto.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={index}>
              <span className="quote-mark">“</span>
              <p>{testimonial.text}</p>
              <div className="testimonial-author">
                <span>0{index + 1}</span>
                <strong>{testimonial.name}</strong>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-disclaimer">
          Depoimentos fictícios, utilizados exclusivamente para demonstração
          deste projeto.
        </p>
      </section>

      <section className="contact section-container" id="contato">
        <div className="contact-copy">
          <span className="eyebrow">06 — FALE CONOSCO</span>
          <h2>
            Seu próximo sorriso começa com uma <em>conversa.</em>
          </h2>
          <p>
            Entre em contato com nossa equipe e dê o primeiro passo para cuidar
            da sua saúde bucal.
          </p>
          <div className="contact-detail">
            <span>✳</span>
            <div>
              <strong>Odonto Prime</strong>
              <small>Clínica odontológica · Projeto demonstrativo</small>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Seu nome</label>
          <input id="name" name="name" placeholder="Como podemos chamar você?" required />

          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" placeholder="seu@email.com" required />

          <label htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" />

          <label htmlFor="message">Como podemos ajudar?</label>
          <textarea id="message" name="message" rows={4} placeholder="Conte um pouco sobre o que você precisa..." />

          <button type="button" className="button-primary">
            Enviar mensagem <span>↗</span>
          </button>
          <small className="form-note">
            Formulário demonstrativo. O envio será integrado na próxima etapa.
          </small>
        </form>
      </section>


      <footer className="footer">
        <div className="footer-main">
          <a href="#inicio" className="brand footer-brand">
            <span className="brand-icon">✳</span>
            <span>
              odonto<span className="brand-highlight">prime</span>
              <small>CLÍNICA ODONTOLÓGICA</small>
            </span>
          </a>

          <p>
            Cuidado, confiança e atenção
            <br />
            em cada sorriso.
          </p>

          <div className="footer-social">
            <span>ACOMPANHE</span>

            <div className="footer-social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.7" width="21" height="21">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"
                  width="21" height="21">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#inicio" className="back-top">
            Voltar ao início ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ODONTO PRIME · PROJETO DEMONSTRATIVO</span>
          <span>DESENVOLVIDO COM ATENÇÃO A CADA DETALHE.</span>
        </div>
      </footer>


      <a
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entre em contato pelo WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="27"
          height="27"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 .5A15.5 15.5 0 0 0 2.7 24l-2 7.3 7.5-2A15.5 15.5 0 1 0 16 .5Zm0 28.2a12.7 12.7 0 0 1-6.5-1.8l-.5-.3-4.4 1.2 1.2-4.3-.3-.5A12.7 12.7 0 1 1 16 28.7Zm7-9.5c-.4-.2-2.1-1-2.5-1.1-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.2-2-2.5-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.7-.4Z" />
        </svg>
      </a>
    </main>
  );
}
