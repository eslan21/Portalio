import tickethubImg from '../assets/tickethub.png';
import gymappImg from '../assets/gymapp.jpg';

export const projectsData = [
  {
    id: "tickethub",
    title: "TicketHub — Sistema de Gestión de Tickets & Soporte IT",
    description: "Aplicación web full-stack para el seguimiento y resolución de incidencias empresariales. Cuenta con flujo de trabajo por estados, chat colaborativo con subida de evidencias, derivación entre áreas técnicas y panel de analíticas en tiempo real (MTTR y métricas de rendimiento). Desarrollada con arquitectura de roles (RBAC) y diseño responsivo en modo claro/oscuro.",
    image: tickethubImg,
    tags: [
      { name: "Next.js 15", bg: "bg-slate-900", text: "text-white" },
      { name: "React 19", bg: "bg-sky-100", text: "text-sky-700" },
      { name: "TypeScript", bg: "bg-blue-100", text: "text-blue-700" },
      { name: "PostgreSQL", bg: "bg-indigo-100", text: "text-indigo-700" },
      { name: "Prisma", bg: "bg-emerald-100", text: "text-emerald-700" },
      { name: "Tailwind CSS", bg: "bg-cyan-100", text: "text-cyan-700" },
      { name: "NextAuth v5", bg: "bg-purple-100", text: "text-purple-700" },
      { name: "Recharts", bg: "bg-amber-100", text: "text-amber-700" }
    ],
    link: "https://github.com/eslan21/GestorTickets"
  },
  {
    id: "gymapp",
    title: "GymApp – Plataforma SaaS de Gestión de Gimnasios y Control de Acceso por QR",
    description: "Sistema web full-stack diseñado para modernizar y automatizar la administración de gimnasios y centros de entrenamiento. Integra control de membresías, generación de credenciales digitales con códigos QR para acceso en recepción, monitoreo de aforo en tiempo real y dashboards diferenciados por roles.",
    image: gymappImg,
    tags: [
      { name: "Next.js 15", bg: "bg-slate-900", text: "text-white" },
      { name: "React 19", bg: "bg-sky-100", text: "text-sky-700" },
      { name: "GraphQL", bg: "bg-pink-100", text: "text-pink-700" },
      { name: "Apollo", bg: "bg-indigo-100", text: "text-indigo-700" },
      { name: "Node.js", bg: "bg-emerald-100", text: "text-emerald-700" },
      { name: "MongoDB", bg: "bg-green-100", text: "text-green-700" },
      { name: "Tailwind v4", bg: "bg-cyan-100", text: "text-cyan-700" },
      { name: "JWT", bg: "bg-amber-100", text: "text-amber-700" }
    ],
    link: "https://github.com/eslan21/GymManager"
  },
  {
    id: "omnicommerce",
    title: "OmniCommerce Dashboard",
    description: "A unified multi-store management platform handling $1M+ in monthly transactions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA98Ow41wJiiZZu8UCmKk1Tm6SUBHf9QMfftrMLWQA9Xd5ZvolIBSHliyarnok5F89OXAj9XYOkAJstt-uS2syRa3WNU8OfnY9Su-yp_o05TXEuQ1bmvvTfX1pwYNwwnQ_gKpBou7b22abGNEuUYKz7so1fMI_Ixg7HNpasucNeRlITkK360NOucXvTeKIq3N2OocYDfvIftzMLRzsi9HkCjQ4qnz1VteUziYXuhqrVM3-bD-flNLRLrujmH88Xldmn4JEAuEBf113v",
    tags: [
      { name: "React", bg: "bg-blue-100", text: "text-blue-700" },
      { name: "Stripe", bg: "bg-slate-100", text: "text-slate-700" }
    ],
    link: "#"
  },
  {
    id: "velvet-ai",
    title: "Velvet AI Landing Page",
    description: "High-conversion landing page for an AI copywriting tool with smooth scrolling animations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNBnbFhksl56O60E4pnCtO8qBK7LW4DuuFn0ADZAkFh-58J0e4sV1Wref-P2d1zYY_d8RpBS9j5eTUZNMAUKiNYJmMCrXg9tip2Iykhy7DhjR0KKBTICtA4GecrAdvWfHtCiBQcUyen_K7icDeizhLF1QuchXHCpAhz_BNc-RISXpAXTZhIIqEaTcYUykA8c1hAP7R5K-CcIDSXbwmbFQoXbCzDUCxhP640ktkvnZVckpBZJtGpDqAl3nGUxv_ZsGCM_70wO2dnW1V",
    tags: [
      { name: "Next.js", bg: "bg-purple-100", text: "text-purple-700" },
      { name: "Framer Motion", bg: "bg-pink-100", text: "text-pink-700" }
    ],
    link: "#"
  },
  {
    id: "zenflow",
    title: "ZenFlow Fitness",
    description: "Mobile application for yoga tracking and personalized wellness routines.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqEiQqqn02iZy2oJRusqlasCtnWP3Jd89QjJTQLu0bUDlIpJERg5d6wkTZoo4tiNXIN-GLSmnxU-A57-7i3g9WVhgb6IcHR1VxoPeXQw4R9pxkuFBlzpYKr2H7Yr_vSXPp6qy_Z_tB5j6krzWGcZay0lZof984mb7a24OMpbwUczoIXXouElYoWyjrvysdxzf4dCuo5R0rwOx4hABJJ5G_3CSIb01VVFE6mQNtP0EekKegCDB3DekdN_1zdiUIszv5r2fDlfs9hB8j",
    tags: [
      { name: "Flutter", bg: "bg-green-100", text: "text-green-700" },
      { name: "Firebase", bg: "bg-orange-100", text: "text-orange-700" }
    ],
    link: "#"
  }
];
