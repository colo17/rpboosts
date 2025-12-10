import React, { useState } from "react";

function ServiceCard({ title, description, items }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
      <h3 className="mb-1 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mb-3 text-[13px] text-slate-300">{description}</p>
      <ul className="mt-auto space-y-1.5 text-[12px] text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({ number, title, text, stepLabel }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
      <span className="mb-2 text-xs font-semibold tracking-[0.25em] text-slate-500">
        {stepLabel} {number}
      </span>
      <h3 className="mb-2 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-[13px] text-slate-300">{text}</p>
    </div>
  );
}

function PortfolioCard({ label, title, result, supportText }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
      <span className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <h3 className="mb-2 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mb-3 text-[13px] text-slate-300">{supportText}</p>
      <p className="mt-auto text-[12px] text-emerald-300">{result}</p>
    </div>
  );
}

function PersonCard({ name, role, text }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
      <div className="mb-3">
        <p className="text-sm font-semibold text-slate-50">{name}</p>
        <p className="text-[12px] text-slate-400">{role}</p>
      </div>
      <p className="text-[13px] text-slate-300">{text}</p>
    </div>
  );
}

function PlanCard({ name, badge, price, description, items, highlight, priceLabel }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-5 ${
        highlight
          ? "border-indigo-500/80 bg-slate-900/70 shadow-lg shadow-indigo-500/20"
          : "border-slate-800 bg-slate-900/40"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-50">{name}</h3>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
            highlight
              ? "bg-indigo-500/20 text-indigo-300"
              : "bg-slate-800 text-slate-300"
          }`}
        >
          {badge}
        </span>
      </div>
      <p className="mb-2 text-xs text-slate-400">
        {priceLabel} <span className="font-semibold">{price}</span>
      </p>
      <p className="mb-3 text-[13px] text-slate-300">{description}</p>
      <ul className="mt-auto space-y-1.5 text-[12px] text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const translations = {
  en: {
    translateButton: "Traducir a Español",
    nav: {
      services: "Services",
      process: "How We Work",
      portfolio: "Portfolio",
      plans: "Plans",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      badge: "Agency specialized in FiveM servers",
      title: "We boost your FiveM server with professional content and socials.",
      description:
        "You focus on roleplay and community; we make your server look epic on Instagram, TikTok, YouTube, and Discord.",
      primaryCta: "See plans for servers",
      secondaryCta: "Discuss a specific project →",
      statOne: "+ Content for roleplay servers, cities, and communities.",
      statTwo: "Cinematic editing and short-form.",
      reelAlt: "Instagram reel preview from UruguayRP",
    },
    services: {
      label: "Services",
      heading: "Everything a FiveM server needs to look pro.",
      sub: "Designed for RP, freeroam, drift, zombies, custom cities, and communities with donation stores.",
      cards: [
        {
          title: "Social media management",
          description:
            "Content calendar, copy, hashtags, design, and publishing on Instagram, TikTok, YouTube Shorts, and more.",
          items: ["Weekly Reels/Shorts", "Posts for announcements and events", "Stories to hype openings"],
        },
        {
          title: "Audiovisual content",
          description:
            "Cinematics, trailers, roleplay videos, compilations, and high-impact short content to attract new players.",
          items: [
            "Recording and/or use of server clips",
            "Advanced editing with music, VFX, and captions",
            "Versions adapted for every platform",
          ],
        },
        {
          title: "Branding & graphic design",
          description: "The full visual package for your community and server.",
          items: ["Logos, banners, and headers", "Covers for Discord / Twitch / Kick", "Flyers for events and seasons"],
        },
        {
          title: "Server consulting",
          description: "We help you structure the server to grow and monetize.",
          items: ["Content strategy", "Event and dynamics ideas", "Store / donation optimization"],
        },
        {
          title: "Automation & bots",
          description: "Discord bots for tickets, automatic announcements, and stats.",
          items: [
            "Donation and support tickets",
            "Automatic announcements for new clips",
            "Growth reports inside Discord",
          ],
        },
        {
          title: "Launch packages",
          description: "Perfect for openings, wipes, or major updates.",
          items: ["City trailer", "Event campaign assets", "Reels/Shorts batch for launch week"],
        },
      ],
    },
    process: {
      label: "How we work",
      heading: "Simple, organized, and built to not bother you while you stream or manage the server.",
      stepLabel: "STEP",
      steps: [
        {
          number: "01",
          title: "Discovery call",
          text: "We listen to the type of server you run, your goals (more players, more donations, branding, etc.), and define a plan.",
        },
        {
          number: "02",
          title: "Content plan",
          text: "We build a weekly/monthly calendar, visual style, video formats, and brand guidelines for your server.",
        },
        {
          number: "03",
          title: "Production and reporting",
          text: "We produce, edit, publish (per plan), and send you clear metrics so you can see the growth.",
        },
      ],
    },
    portfolio: {
      label: "Portfolio",
      heading: "Some formats we can create for your server.",
      sub: "Replace these with real examples from UruguayRP, other servers, or clips you already have edited.",
      supportText: "Example of how well-crafted content can impact your server.",
      cards: [
        {
          label: "City trailer",
          title: "New season / wipe launch",
          result: "+2.5K unique players in the first week.",
        },
        {
          label: "Reels / Shorts",
          title: "Daily roleplay and action clips",
          result: "+40% social growth in 30 days.",
        },
        {
          label: "Event campaign",
          title: "Squid-Game style event inside the server",
          result: "Full lobbies, more donations, and viral clips.",
        },
      ],
      contentTypesTitle: "Video and content types",
      contentTypesSubtitle: "Drop your final video or embed inside the vertical (9:16) mockup of each type.",
      formatChip: "Format 9:16",
      contentTypes: [
        {
          title: "Intro video",
          note: "Great to present the city and its story in 30-60s.",
          image: "/images/porfolio1.png",
          href: "https://www.instagram.com/reel/DR22uK9DNTU/",
          views: "99.5K",
          likes: "3.5K",
          comments: "53",
        },
        {
          title: "Cinematic videos",
          note: "Careful shots, music, and VFX for visual hype.",
          image: "/images/porfolio7.png",
          href: "https://www.instagram.com/reel/DKu1wOgyUi6/",
          views: "288K",
          likes: "21.6K",
          comments: "251",
        },
        {
          title: "Viral shorts",
          note: "Fast shorts with captions and strong hooks.",
          image: "/images/video2.png",
          href: "https://www.instagram.com/reel/DKQGn8IheVj/",
          views: "879K",
          likes: "33.8K",
          comments: "572",
        },
        {
          title: "Event videos",
          note: "Recaps of tournaments, seasons, or special missions.",
          image: "/images/porfolio3.png",
          href: "https://www.instagram.com/reel/DQ7h5uLjyPA/",
          views: "10K",
          likes: "150",
          comments: "5",
        },
        {
          title: "Clips",
          note: "Key roleplay, action, or police moments in 15-30s.",
          image: "/images/porfolio4.png",
          href: "https://www.instagram.com/reel/DRDSgNaD8Bk/",
          views: "77.1K",
          likes: "6.1K",
          comments: "74",
        },
        {
          title: "Funny moments",
          note: "Fails and funny situations for retention and shares.",
          image: "/images/porfolio5.png",
          href: "https://www.instagram.com/reel/DRQJs3-CQqD/",
          views: "28.3K",
          likes: "1.5K",
          comments: "13",
        },
      ],
    },
    plans: {
      label: "Plans",
      heading: "Choose the level of support your server needs.",
      sub: "Prices can be adjusted by country / currency. Starter, growth, and full options.",
      priceLabel: "Approx monthly investment range:",
      cards: [
        {
          name: "Single Reel",
          badge: "One-off purchase",
          price: "$",
          description: "One custom Reel/Short to test the service or announce something specific.",
          items: [
            "1 Reel/Short vertical 9:16",
            "Editing with music, captions, and light VFX",
            "Ready to publish on Instagram/TikTok/YouTube Shorts",
            "1 round of feedback included",
          ],
        },
        {
          name: "Starter",
          badge: "Great to begin",
          price: "$$",
          description: "For servers that are starting or want to test the service.",
          items: ["4–6 Reels / Shorts per month", "2 banners / flyers for events", "Basic social guidance", "Support via Discord"],
        },
        {
          name: "Creator",
          badge: "Best seller",
          price: "$$$",
          highlight: true,
          description: "For active servers that want constant presence.",
          items: [
            "12–16 Reels / Shorts per month",
            "Posts and stories design",
            "Flyers for every event of the month",
            "Branding review and improvements",
            "Monthly metrics report",
          ],
        },
        {
          name: "Pro Server",
          badge: "Full support",
          price: "$$$$",
          description: "For large communities that want to delegate most of the content.",
          items: [
            "Up to 30 Reels / Shorts per month",
            "Seasonal trailer / cinematic",
            "Full management of IG / TikTok / YouTube Shorts",
            "Automations and bots on Discord",
            "Ongoing consulting for growth and monetization",
          ],
        },
        {
          name: "Informational Website",
          badge: "One-shot / package",
          price: "$$$",
          description:
            "Design and development of a single-page informative site for your server: schedule, rules, links, and Discord capture.",
          items: [
            "Responsive one-page web design",
            "Sections: welcome, rules, donations, links to Discord and socials",
            "Load your branding, images, and videos",
            "Basic performance optimizations and on-page SEO",
            "Delivered deployed (static hosting) or ready-to-upload files",
          ],
        },
      ],
    },
    about: {
      label: "About Us",
      heading: "Creators who come from the roleplay and server world.",
      people: [
        {
          name: "1ColoMas",
          role: "Founder • Management & strategy",
          text: "Runs UruguayRP, coordinates teams, events, marketing, and monetization for servers. Knows exactly what an owner needs to grow without burning out.",
        },
        {
          name: "Bekko Music",
          role: "Creative director • Editing & sound",
          text: "Specialist in video editing, music, and cinematics that retain viewers. Experience creating viral content for gaming and roleplay communities.",
        },
      ],
    },
    contact: {
      label: "Ready to level up your server?",
      heading: "Tell us what type of server you run and we'll build a proposal for your reality.",
      desc: "We work with limited slots to keep editing and strategy quality high. Reserve your spot for next month.",
      button: "Open Discord ticket",
    },
    ctaFloating: {
      prompt: "Ready to level up your server?",
      toggleOpen: "Open",
      toggleClose: "Close",
      label: "Ready to level up your server?",
      heading: "Tell us what type of server you run and we'll build a proposal for your reality.",
      desc: "We work with limited slots to keep editing and strategy quality high. Reserve your spot for next month.",
      bullets: ["Monthly plans or single pieces based on your need.", "Fast response time via Discord."],
      button: "Open Discord ticket",
      closeAria: "Close",
    },
    footer: {
      rights: "All rights reserved.",
      note: "Built by server creators for server creators.",
    },
  },
  es: {
    translateButton: "Translate to English",
    nav: {
      services: "Servicios",
      process: "Cómo trabajamos",
      portfolio: "Portafolio",
      plans: "Planes",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      badge: "Agencia especializada en servidores FiveM",
      title: "Impulsamos tu servidor FiveM con contenido y redes profesionales.",
      description:
        "Vos enfocarte en el rol y la comunidad; nosotros hacemos que tu server se vea épico en Instagram, TikTok, YouTube y Discord.",
      primaryCta: "Ver planes para servidores",
      secondaryCta: "Hablar de un proyecto puntual →",
      statOne: "+ Contenido para servidores de rol, ciudades y comunidades.",
      statTwo: "Edición cinematográfica y short-form.",
      reelAlt: "Reel de Instagram de UruguayRP",
    },
    services: {
      label: "Servicios",
      heading: "Todo lo que necesita un servidor FiveM para verse pro.",
      sub: "Pensado para RP, freeroam, drift, zombies, ciudades custom y comunidades con tienda de donaciones.",
      cards: [
        {
          title: "Gestión de redes sociales",
          description:
            "Calendario de contenido, copies, hashtags, diseño y publicación en Instagram, TikTok, YouTube Shorts y más.",
          items: ["Reels/Shorts semanales", "Posts para anuncios y eventos", "Historias para hypear aperturas"],
        },
        {
          title: "Contenido audiovisual",
          description:
            "Cinematics, trailers, videos de rol, recopilaciones y contenido corto de alto impacto para atraer nuevos jugadores.",
          items: [
            "Grabación y/o uso de clips del servidor",
            "Edición avanzada con música, VFX y subtítulos",
            "Versiones adaptadas a cada plataforma",
          ],
        },
        {
          title: "Branding & diseño gráfico",
          description: "Todo el paquete visual para tu comunidad y servidor.",
          items: ["Logos, banners y headers", "Portadas para Discord / Twitch / Kick", "Flyers para eventos y temporadas"],
        },
        {
          title: "Consultoría para servidores",
          description: "Te ayudamos a estructurar el servidor para crecer y monetizar.",
          items: ["Estrategia de contenido", "Ideas de eventos y dinámicas", "Optimización de tienda / donaciones"],
        },
        {
          title: "Automatización & bots",
          description: "Bots de Discord para tickets, anuncios automáticos y estadísticas.",
          items: [
            "Tickets de donación y soporte",
            "Anuncios automáticos de nuevos clips",
            "Reportes de crecimiento en Discord",
          ],
        },
        {
          title: "Paquetes de lanzamiento",
          description: "Perfecto para aperturas, wipes o grandes actualizaciones.",
          items: ["Trailer de la ciudad", "Assets para campañas de eventos", "Batch de Reels/Shorts para la semana de lanzamiento"],
        },
      ],
    },
    process: {
      label: "Cómo trabajamos",
      heading: "Simple, organizado y pensado para no molestarte mientras streameás o administrás el server.",
      stepLabel: "PASO",
      steps: [
        {
          number: "01",
          title: "Reunión y diagnóstico",
          text: "Escuchamos qué tipo de servidor tenés, objetivos (más jugadores, más donaciones, branding, etc.) y definimos un plan.",
        },
        {
          number: "02",
          title: "Plan de contenido",
          text: "Armamos calendario semanal/mensual, estilo visual, formatos de video y lineamientos de marca para tu servidor.",
        },
        {
          number: "03",
          title: "Producción y reportes",
          text: "Producimos, editamos, publicamos (según plan) y te enviamos métricas claras para que veas el crecimiento.",
        },
      ],
    },
    portfolio: {
      label: "Portafolio",
      heading: "Algunos formatos que podemos crear para tu servidor.",
      sub: "Acá podés reemplazar con ejemplos reales de UruguayRP, otros servidores o clips que ya tengas editados.",
      supportText: "Ejemplo de cómo un contenido bien trabajado puede impactar en tu servidor.",
      cards: [
        {
          label: "Trailer de ciudad",
          title: "Lanzamiento de nueva temporada / wipe",
          result: "+2.5K jugadores únicos en la primera semana.",
        },
        {
          label: "Reels / Shorts",
          title: "Clips diarios de escenas de rol y acción",
          result: "+40% de crecimiento en redes en 30 días.",
        },
        {
          label: "Campaña de evento",
          title: "Evento estilo 'Juegos del Calamar' en el servidor",
          result: "Sala llena, aumento de donaciones y clips virales.",
        },
      ],
      contentTypesTitle: "Tipos de video y contenido",
      contentTypesSubtitle: "Dejá tu video final o embed dentro del mockup vertical (9:16) de cada tipo.",
      formatChip: "Formato 9:16",
      contentTypes: [
        {
          title: "Video de presentación",
          note: "Ideal para presentar la ciudad y su historia en 30-60s.",
          image: "/images/porfolio1.png",
          href: "https://www.instagram.com/reel/DR22uK9DNTU/",
          views: "99.5K",
          likes: "3.5K",
          comments: "53",
        },
        {
          title: "Videos cinemáticos",
          note: "Planos cuidados, música y VFX para hype visual.",
          image: "/images/porfolio7.png",
          href: "https://www.instagram.com/reel/DKu1wOgyUi6/",
          views: "288K",
          likes: "21.6K",
          comments: "251",
        },
        {
          title: "Videos virales",
          note: "Shorts rápidos con subtítulos y hooks fuertes.",
          image: "/images/video2.png",
          href: "https://www.instagram.com/reel/DKQGn8IheVj/",
          views: "879K",
          likes: "33.8K",
          comments: "572",
        },
        {
          title: "Videos de eventos",
          note: "Recaps de torneos, temporadas o misiones especiales.",
          image: "/images/porfolio3.png",
          href: "https://www.instagram.com/reel/DQ7h5uLjyPA/",
          views: "10K",
          likes: "150",
          comments: "5",
        },
        {
          title: "Clips",
          note: "Momentos clave de rol, acción o policía en 15-30s.",
          image: "/images/porfolio4.png",
          href: "https://www.instagram.com/reel/DRDSgNaD8Bk/",
          views: "77.1K",
          likes: "6.1K",
          comments: "74",
        },
        {
          title: "Funny moments",
          note: "Fails y situaciones graciosas para retención y shares.",
          image: "/images/porfolio5.png",
          href: "https://www.instagram.com/reel/DRQJs3-CQqD/",
          views: "28.3K",
          likes: "1.5K",
          comments: "13",
        },
      ],
    },
    plans: {
      label: "Planes",
      heading: "Elige el nivel de acompañamiento que tu servidor necesita.",
      sub: "Los precios se pueden adaptar por país / moneda. Acá dejamos la estructura pensada: starter, crecimiento y full.",
      priceLabel: "Rango de inversión mensual aproximado:",
      cards: [
        {
          name: "Reel Único",
          badge: "Compra individual",
          price: "$",
          description: "Un solo Reel/Short editado a medida para probar el servicio o anunciar algo puntual.",
          items: [
            "1 Reel/Short en formato vertical 9:16",
            "Edición con música, subtítulos y VFX ligeros",
            "Entrega lista para Instagram/TikTok/YouTube Shorts",
            "1 ronda de feedback incluida",
          ],
        },
        {
          name: "Starter",
          badge: "Ideal para comenzar",
          price: "$$",
          description: "Para servidores que recién arrancan o quieren probar el servicio.",
          items: [
            "4–6 Reels / Shorts al mes",
            "2 banners / flyers para eventos",
            "Asesoría básica de redes",
            "Soporte por Discord",
          ],
        },
        {
          name: "Creator",
          badge: "Más vendido",
          price: "$$$",
          highlight: true,
          description: "Para servidores activos que quieren presencia constante.",
          items: [
            "12–16 Reels / Shorts al mes",
            "Diseño de posts y stories",
            "Flyers para todos los eventos del mes",
            "Revisión y mejora de branding",
            "Reporte mensual de métricas",
          ],
        },
        {
          name: "Pro Server",
          badge: "Full acompañamiento",
          price: "$$$$",
          description: "Para grandes comunidades que quieren delegar casi todo el contenido.",
          items: [
            "Hasta 30 Reels / Shorts al mes",
            "Trailer / cinematic por temporada",
            "Gestión completa de IG / TikTok / YouTube Shorts",
            "Automatizaciones y bots en Discord",
            "Consultoría continua para crecimiento y monetización",
          ],
        },
        {
          name: "Web Informativa",
          badge: "One-shot / paquete",
          price: "$$$",
          description:
            "Diseño y desarrollo de una landing informativa para tu servidor: horarios, reglas, enlaces y captación a Discord.",
          items: [
            "Diseño web responsive en una sola página",
            "Secciones: bienvenida, reglas, donaciones, links a Discord y redes",
            "Carga de tu branding, imágenes y videos",
            "Optimización básica de performance y SEO on-page",
            "Entrega publicada (hosting estático) o archivos listos",
          ],
        },
      ],
    },
    about: {
      label: "Nosotros",
      heading: "Creadores que vienen del mundo del rol y los servidores.",
      people: [
        {
          name: "1ColoMas",
          role: "Fundador • Gestión & estrategia",
          text: "Administra UruguayRP, coordina equipos, eventos, marketing y monetización de servidores. Entiende exactamente qué necesita un owner para que el servidor crezca sin volverse loco.",
        },
        {
          name: "Bekko Music",
          role: "Director creativo • Edición & sonido",
          text: "Especialista en edición de video, música y cinemáticas que generan retención. Experiencia creando contenido viral para comunidades de gaming y roleplay.",
        },
      ],
    },
    contact: {
      label: "¿Listo para darle nivel a tu servidor?",
      heading: "Contanos qué tipo de servidor tenés y te armamos una propuesta en base a tu realidad.",
      desc: "Trabajamos por cupos limitados para poder mantener la calidad de edición y estrategia. Reservá tu lugar para el próximo mes.",
      button: "Abrir ticket en Discord",
    },
    ctaFloating: {
      prompt: "¿Listo para darle nivel a tu servidor?",
      toggleOpen: "Abrir",
      toggleClose: "Cerrar",
      label: "¿Listo para darle nivel a tu servidor?",
      heading: "Contanos qué tipo de servidor tenés y te armamos una propuesta en base a tu realidad.",
      desc: "Trabajamos por cupos limitados para poder mantener la calidad de edición y estrategia. Reservá tu lugar para el próximo mes.",
      bullets: ["Planes mensuales o piezas individuales según tu necesidad.", "Tiempo de respuesta rápido vía Discord."],
      button: "Abrir ticket en Discord",
      closeAria: "Cerrar",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      note: "Hecho por creadores de servidores para servidores.",
    },
  },
};

export default function App() {
  const brandName = "RPBoost Studio";
  const [language, setLanguage] = useState("en");
  const [ctaOpen, setCtaOpen] = useState(false);
  const t = translations[language];
  const isEnglish = language === "en";
  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "es" : "en"));
  const heroClips = [
    {
      code: "DNjR-qjBMUW",
      href: "https://www.instagram.com/reel/DNjR-qjBMUW/",
      image: "/images/video1.png",
      views: "588K",
      likes: "12.4K",
      comments: "270",
    },
    {
      code: "DKQGn8IheVj",
      href: "https://www.instagram.com/reel/DKQGn8IheVj/",
      image: "/images/video2.png",
      views: "879K",
      likes: "33.8K",
      comments: "572",
    },
    {
      code: "DPhcFQdD0tu",
      href: "https://www.instagram.com/p/DPhcFQdD0tu/",
      image: "/images/video3.png",
      views: "110K",
      likes: "3.4K",
      comments: "114",
    },
  ];
  const contentTypes = t.portfolio.contentTypes;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-emerald-400" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                {brandName}
              </span>
              <span className="text-xs text-slate-500">
                Social & Content for FiveM
              </span>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#servicios" className="hover:text-white">
              {t.nav.services}
            </a>
            <a href="#proceso" className="hover:text-white">
              {t.nav.process}
            </a>
            <a href="#portfolio" className="hover:text-white">
              {t.nav.portfolio}
            </a>
            <a href="#planes" className="hover:text-white">
              {t.nav.plans}
            </a>
            <a href="#nosotros" className="hover:text-white">
              {t.nav.about}
            </a>
            <a href="#contacto" className="hover:text-white">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-xl border border-slate-800 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 hover:border-indigo-400 hover:text-white"
            >
              {t.translateButton}
            </button>
            <a
              href="https://discord.gg/DUVtKPpMVx"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-indigo-500 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50 hover:bg-indigo-400 md:text-[11px]"
            >
              Chat on Discord
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24 md:pt-28">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.13),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.13),_transparent_60%)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 md:flex-row md:items-center md:py-20">
            <div className="md:w-3/5">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t.hero.badge}
              </p>
              <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                {t.hero.title.includes("FiveM") ? (
                  <>
                    {t.hero.title.split("FiveM")[0]}
                    <span className="bg-gradient-to-tr from-indigo-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                      FiveM
                    </span>
                    {t.hero.title.split("FiveM")[1]}
                  </>
                ) : (
                  <span>{t.hero.title}</span>
                )}
              </h1>
              <p className="mb-6 max-w-xl text-sm text-slate-300 sm:text-base">
                {t.hero.description}
              </p>

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <a
                  href="#planes"
                  className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm shadow-indigo-500/30 hover:bg-indigo-400"
                >
                  {t.hero.primaryCta}
                </a>
                <a
                  href="https://discord.gg/DUVtKPpMVx"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-300 hover:text-slate-50"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div>
                  {t.hero.statOne}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400" />
                  <span>{t.hero.statTwo}</span>
                </div>
              </div>
            </div>

            {/* Mockup / Visual */}
            <div className="md:w-2/5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">Content preview</span>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                    Reels / Shorts
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {heroClips.map((clip) => (
                    <div
                      key={clip.code}
                      className="flex aspect-[9/16] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-transparent text-[10px]"
                    >
                      <div className="mb-1 flex items-center px-1 pt-1 text-[9px] text-slate-300">
                        <span className="rounded-full bg-slate-900/80 px-1.5 py-0.5 font-semibold tracking-wide" title="Reel Instagram">
                          Reel Instagram
                        </span>
                      </div>
                      <a
                        href={clip.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative block h-full overflow-hidden rounded-xl"
                        title="Open on Instagram"
                      >
                        <img
                          src={clip.image}
                          alt={t.hero.reelAlt}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-slate-100 ring-1 ring-slate-800/80 transition group-hover:scale-105">
                            <svg
                              aria-hidden
                              viewBox="0 0 24 24"
                              className="h-4 w-4 text-slate-100"
                              fill="currentColor"
                            >
                              <path d="M9 7l8 5-8 5V7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-x-2 bottom-2 flex flex-col items-start gap-1 text-[9px] text-slate-50 drop-shadow">
                          <span className="flex items-center gap-1">
                            <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 text-slate-50" fill="currentColor">
                              <path d="M12 5c-4.48 0-8 3.58-8 7s3.52 7 8 7 8-3.58 8-7-3.52-7-8-7zm0 12c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5-1.79 5-4 5z" />
                              <circle cx="12" cy="12" r="2" />
                            </svg>
                            {clip.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 text-slate-50" fill="currentColor">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            {clip.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 text-slate-50" fill="currentColor">
                              <path d="M20 2H4a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
                            </svg>
                            {clip.comments}
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-[11px] text-slate-400">
                  Ejemplos reales de Instagram de UruguayRP integrados en los mockups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicios" className="border-t border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  {t.services.label}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                  {t.services.heading}
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-300">
                {t.services.sub}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.services.cards.map((card) => (
                <ServiceCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  items={card.items}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="proceso" className="border-t border-slate-800 bg-slate-950/60">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  {t.process.label}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {t.process.heading}
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {t.process.steps.map((step) => (
                <StepCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  text={step.text}
                  stepLabel={t.process.stepLabel}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section
          id="portfolio"
          className="border-t border-slate-800 bg-slate-950"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  {t.portfolio.label}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {t.portfolio.heading}
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-300">
                {t.portfolio.sub}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {t.portfolio.cards.map((card) => (
                <PortfolioCard
                  key={card.title}
                  label={card.label}
                  title={card.title}
                  result={card.result}
                  supportText={t.portfolio.supportText}
                />
              ))}
            </div>

            <div className="mt-12">
              <div className="mb-8">
                <p className="text-sm font-semibold text-slate-200">
                  {t.portfolio.contentTypesTitle}
                </p>
                <p className="text-[13px] text-slate-400">
                  {t.portfolio.contentTypesSubtitle}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {contentTypes.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-200">
                      <span className="font-semibold">{item.title}</span>
                      <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                        {t.portfolio.formatChip}
                      </span>
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative block aspect-[9/16] overflow-hidden rounded-xl border border-slate-800"
                      title={`View ${item.title}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-slate-100 ring-1 ring-slate-800/80 transition group-hover:scale-105">
                          <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M9 7l8 5-8 5V7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 inline-flex w-fit max-w-[85%] flex-col gap-1.5 rounded-lg bg-black/70 px-2 py-2 text-base text-slate-50 drop-shadow">
                        <span className="flex items-center gap-1.5">
                          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                            <path d="M12 5c-4.48 0-8 3.58-8 7s3.52 7 8 7 8-3.58 8-7-3.52-7-8-7zm0 12c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5-1.79 5-4 5z" />
                            <circle cx="12" cy="12" r="2" />
                          </svg>
                          {item.views}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          {item.likes}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                            <path d="M20 2H4a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
                          </svg>
                          {item.comments}
                        </span>
                      </div>
                    </a>
                    <p className="text-[12px] text-slate-300">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PLANES */}
        <section
          id="planes"
          className="border-t border-slate-800 bg-slate-950/70"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  {t.plans.label}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {t.plans.heading}
                </h2>
              </div>
              <p className="max-w-md text-xs text-slate-300">
                {t.plans.sub}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {t.plans.cards.map((plan) => (
                <PlanCard
                  key={plan.name}
                  name={plan.name}
                  badge={plan.badge}
                  price={plan.price}
                  description={plan.description}
                  items={plan.items}
                  highlight={plan.highlight}
                  priceLabel={t.plans.priceLabel}
                />
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section
          id="nosotros"
          className="border-t border-slate-800 bg-slate-950"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  {t.about.label}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {t.about.heading}
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {t.about.people.map((person) => (
                <PersonCard key={person.name} name={person.name} role={person.role} text={person.text} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO / CTA FINAL (sección en página) */}
        <section id="contacto" className="border-t border-slate-800 bg-slate-950 pb-36">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 px-6 py-10 md:px-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                    {t.contact.label}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    {t.contact.heading}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm text-slate-300">
                    {t.contact.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://discord.gg/DUVtKPpMVx"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-indigo-500 px-6 py-2.5 text-center text-sm font-semibold text-slate-50 shadow-sm shadow-indigo-500/30 hover:bg-indigo-400"
                  >
                    {t.contact.button}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-4 left-0 right-0 z-50 px-4 pb-0">
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setCtaOpen((prev) => !prev)}
              className={`inline-flex max-w-fit items-center gap-2 rounded-full border border-indigo-400/60 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 px-5 py-2.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/40 backdrop-blur transition duration-200 hover:brightness-110 ${ctaOpen ? "pointer-events-none scale-95 opacity-0 translate-y-1" : "pointer-events-auto scale-100 opacity-100 translate-y-0"}`}
            >
              <span>{t.ctaFloating.prompt}</span>
              <span className="text-[12px] text-slate-100">
                {ctaOpen ? t.ctaFloating.toggleClose : t.ctaFloating.toggleOpen}
              </span>
            </button>

            <div
              className={`absolute bottom-36 left-1/2 w-[min(100%,36rem)] -translate-x-1/2 rounded-3xl border border-indigo-500/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 px-6 py-7 shadow-2xl shadow-indigo-500/30 transition-all duration-250 ${ctaOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}`}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                    {t.ctaFloating.label}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                    {t.ctaFloating.heading}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm text-slate-300">
                    {t.ctaFloating.desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCtaOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 hover:text-white"
                  aria-label={t.ctaFloating.closeAria}
                >
                  ×
                </button>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="text-xs text-slate-400">
                  <div>{t.ctaFloating.bullets[0]}</div>
                  <div>{t.ctaFloating.bullets[1]}</div>
                </div>
                <a
                  href="https://discord.gg/DUVtKPpMVx"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-indigo-500 px-6 py-2.5 text-center text-sm font-semibold text-slate-50 shadow-sm shadow-indigo-500/30 hover:bg-indigo-400"
                >
                  {t.ctaFloating.button}
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="border-t border-slate-800 bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-[11px] text-slate-500 md:flex-row">
            <span>
              © {new Date().getFullYear()} {brandName}. {t.footer.rights}
            </span>
            <span className="text-slate-600">
              {t.footer.note}
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}