import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Headphones,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

import logoNexcode from "./assets/logo-nexcode.png";
import heroImage from "./assets/hero-device.png";
import aboutOffice from "./assets/about-office.png";

import projectVissenza from "./assets/project-vissenza.png";
import projectAutoparts from "./assets/project-autoparts.png";
import projectTerraNobre from "./assets/project-terra-nobre.png";
import projectGlass from "./assets/project-glass.png";

import "./App.css";

function App() {
  const whatsapp =
    "https://wa.me/5514999999999?text=Olá! Quero criar um site com a Nexcode Studio.";

  const services = [
    {
      icon: <MonitorSmartphone />,
      title: "Sites Institucionais",
      text: "Sites profissionais que transmitem credibilidade e fortalecem sua marca.",
    },
    {
      icon: <Rocket />,
      title: "Landing Pages",
      text: "Páginas estratégicas focadas em conversão e geração de leads.",
    },
    {
      icon: <Layers3 />,
      title: "Catálogos Digitais",
      text: "Apresente seus produtos de forma moderna, interativa e profissional.",
    },
    {
      icon: <ShoppingBag />,
      title: "Vitrines Online",
      text: "Mostre seu negócio na internet e atraia mais clientes.",
    },
    {
      icon: <Code2 />,
      title: "Projetos Sob Medida",
      text: "Soluções personalizadas para necessidades específicas.",
    },
    {
      icon: <Palette />,
      title: "Identidade Visual Digital",
      text: "Design que comunica a essência da sua marca.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Diagnóstico",
      text: "Entendemos seu negócio, seus objetivos e seu público.",
    },
    {
      number: "02",
      title: "Estratégia & Design",
      text: "Criamos uma experiência visual focada em autoridade e conversão.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      text: "Transformamos o projeto em um site rápido, moderno e responsivo.",
    },
    {
      number: "04",
      title: "Publicação & Suporte",
      text: "Publicamos seu site e oferecemos suporte para você crescer.",
    },
  ];

  const projects = [
    {
      name: "Vissenza",
      type: "Site Institucional",
      image: projectVissenza,
    },
    {
      name: "Autoparts",
      type: "Loja / Catálogo Digital",
      image: projectAutoparts,
    },
    {
      name: "Terra Nobre",
      type: "Site Institucional",
      image: projectTerraNobre,
    },
    {
      name: "Glass",
      type: "Site Institucional",
      image: projectGlass,
    },
  ];

  return (
    <main className="site">
      <header className="header">
        <a href="#inicio" className="logo">
          <img src={logoNexcode} alt="Nexcode Studio" />
        </a>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#projetos">Projetos</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="header-btn"
        >
          <MessageCircle size={16} />
          Falar no WhatsApp
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-showcase">
          <img
            src={heroImage}
            alt="Projeto Premium"
            className="hero-device"
          />
        </div>

        <div className="hero-content">
          <span className="eyebrow">NEXCODE STUDIO</span>

          <h1>
            Criamos experiências{" "}
            <strong>digitais que elevam</strong> marcas.
          </h1>

          <p>
            Sites profissionais, modernos e estratégicos para empresas que
            querem mais que presença: querem autoridade e resultados.
          </p>

          <div className="hero-actions">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Quero meu site profissional
              <ArrowRight size={16} />
            </a>

            <a href="#projetos" className="btn-secondary">
              Ver projetos
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-benefits">
          <div>
            <ShieldCheck />
            <strong>Design Premium</strong>
            <span>Interfaces únicas que fortalecem sua marca</span>
          </div>

          <div>
            <Rocket />
            <strong>Tecnologia Moderna</strong>
            <span>Sites rápidos, seguros e otimizados</span>
          </div>

          <div>
            <Users />
            <strong>Foco em Resultados</strong>
            <span>Estratégia para gerar autoridade e vendas</span>
          </div>

          <div>
            <Headphones />
            <strong>Suporte Humanizado</strong>
            <span>Acompanhamento próximo em cada etapa</span>
          </div>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-text">
          <span className="eyebrow">SOBRE A NEXCODE STUDIO</span>

          <h2>
            Mais que sites.
            <br />
            Criamos presença digital com propósito.
          </h2>

          <p>
            Somos um estúdio especializado na criação de sites profissionais e
            soluções digitais sob medida. Unimos design, estratégia e tecnologia
            para entregar projetos que comunicam valor, fortalecem marcas e
            geram resultados reais.
          </p>

          <div className="stats">
            <div>
              <strong>+50</strong>
              <span>Projetos Entregues</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Foco em Resultado e Qualidade</span>
            </div>

            <div>
              <strong>Soluções</strong>
              <span>Personalizadas para cada marca</span>
            </div>

            <div>
              <strong>Suporte</strong>
              <span>Próximo e Humanizado</span>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={aboutOffice} alt="Escritório Nexcode Studio" />
        </div>
      </section>

      <section className="services" id="servicos">
        <span className="eyebrow">SERVIÇOS</span>

        <h2>Soluções completas para impulsionar sua marca online.</h2>

        <div className="services-grid">
          {services.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="service-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="processo">
        <div>
          <span className="eyebrow">NOSSO PROCESSO</span>

          <h2>
            Do planejamento
            <br />
            à publicação,
            <br />
            cuidamos de cada detalhe.
          </h2>
        </div>

        <div className="process-steps">
          {process.map((item) => (
            <article key={item.number}>
              <div className="step-icon">
                <BadgeCheck size={24} />
              </div>

              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projetos">
        <div className="section-head">
          <div>
            <span className="eyebrow">PROJETOS</span>

            <h2>Alguns projetos que geram resultados.</h2>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Ver todos os projetos
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <img src={project.image} alt={project.name} />

              <div className="project-info">
                <h3>{project.name}</h3>

                <p>{project.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials" id="depoimentos">
        <span className="eyebrow">DEPOIMENTOS</span>

        <h2>O que nossos clientes dizem.</h2>

        <div className="testimonials-grid">
          <article>
            <Sparkles />

            <p>
              A Nexcode Studio entendeu exatamente o que precisávamos. Nosso
              site ficou incrível e trouxe mais credibilidade para nossa marca.
            </p>

            <strong>Rafael Oliveira</strong>

            <span>Essenza Marmoraria</span>
          </article>

          <article>
            <Sparkles />

            <p>
              Profissionais comprometidos, atenciosos e com muito bom gosto. O
              resultado superou todas as nossas expectativas.
            </p>

            <strong>Juliana Costa</strong>

            <span>Autoparts</span>
          </article>

          <article>
            <Sparkles />

            <p>
              Nosso site ficou moderno, rápido e fácil de apresentar aos
              clientes. Recomendo demais o trabalho da Nexcode Studio.
            </p>

            <strong>Marcos Vinícius</strong>

            <span>Vissenza</span>
          </article>
        </div>
      </section>

      <section className="cta" id="contato">
        <div className="cta-logo">
          <img src={logoNexcode} alt="Nexcode Studio" />
        </div>

        <div>
          <h2>Pronto para transformar sua presença digital?</h2>

          <p>
            Fale com a gente e descubra como podemos criar um site que vai
            posicionar sua marca e gerar resultados.
          </p>
        </div>

        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          <MessageCircle size={18} />
          Falar no WhatsApp
        </a>
      </section>

      <footer className="footer">
        <div>
          <img
            src={logoNexcode}
            alt="Nexcode Studio"
            className="footer-logo"
          />

          <p>
            Soluções digitais para marcas que querem presença, autoridade e
            vendas.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>

          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
        </div>

        <div>
          <h4>Serviços</h4>

          <a href="#servicos">Sites Institucionais</a>
          <a href="#servicos">Landing Pages</a>
          <a href="#servicos">Catálogos Digitais</a>
          <a href="#servicos">Vitrines Online</a>
        </div>

        <div>
          <h4>Contato</h4>

          <p>(14) 99732-9487</p>
          <p>contato@nexcodestudio.com.br</p>
          <p>Marília - SP</p>
        </div>
      </footer>
    </main>
  );
}

export default App;