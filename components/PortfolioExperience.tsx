'use client';

import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Github,
  GraduationCap,
  Languages as LanguagesIcon,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MousePointer2,
  Phone,
  Send,
  Sparkles,
  Workflow,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';
import {
  siDocker,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTypescript,
} from 'simple-icons';
import { useEffect, useRef, useState } from 'react';

const cvUrl = '/cv-zan-armel-kessel-za-bi.pdf';
const profilePhotoUrl = '/photo-armel.jpg';
const githubUrl = 'https://github.com/armel-dev-code';
const linkedinUrl = 'https://www.linkedin.com/in/armel-za-bi/';

const skills = [
  {
    title: 'Architecture frontend',
    text: 'Je structure des composants réutilisables, des design systems et des flux de données propres pour garder une base saine.',
    icon: Layers3,
  },
  {
    title: 'UX/UI produit',
    text: 'Je conçois des interfaces lisibles, accessibles et orientées usage pour que le produit reste clair à chaque étape.',
    icon: MousePointer2,
  },
  {
    title: 'Performance frontend',
    text: 'Je travaille le rendu, les re-renders, le bundle et les chargements pour garder des interfaces rapides et stables.',
    icon: Sparkles,
  },
  {
    title: 'Delivery fullstack',
    text: 'Je peux aussi livrer côté backend et infra avec Node.js, PostgreSQL, Docker, tests et intégration continue.',
    icon: Workflow,
  },
];

const logos = [
  { name: 'React', icon: siReact, color: '#149eca' },
  { name: 'Next.js', icon: siNextdotjs, color: '#111827' },
  { name: 'TypeScript', icon: siTypescript, color: '#3178c6' },
  { name: 'JavaScript', icon: siJavascript, color: '#d6a600' },
  { name: 'Node.js', icon: siNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', icon: siPostgresql, color: '#4169e1' },
  { name: 'Docker', icon: siDocker, color: '#2496ed' },
  { name: 'AWS', letters: 'AWS', color: '#ff9900' },
  { name: 'REST API', letters: 'API', color: '#0e8fd0' },
  { name: 'CI/CD', letters: 'CI', color: '#18b989' },
  { name: 'UX/UI', letters: 'UX', color: '#0b638f' },
  { name: 'Tests', letters: 'QA', color: '#7c3aed' },
];

const projects = [
  {
    title: 'Fresh and Clean',
    type: 'Marketplace mobile',
    year: '2026',
    text: 'J’ai construit une marketplace iOS / Android avec une base Node.js, du React Native, du temps réel et des paiements Stripe Connect.',
    tags: ['React Native', 'Expo', 'Node.js', 'Realtime', 'Stripe'],
  },
  {
    title: 'Btpflow',
    type: 'SaaS métier',
    year: '2025',
    text: 'J’ai travaillé sur une plateforme SaaS et un back-office complexe avec workflows, permissions, tableaux avancés et déploiement AWS.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    title: 'SAS DJUST Paris',
    type: 'Back-office data',
    year: '2021-2024',
    text: 'J’ai conçu des interfaces métiers orientées data, une librairie de composants et des parcours testés avec Cypress.',
    tags: ['React', 'TypeScript', 'Cypress', 'Design system'],
  },
];

const timeline = [
  {
    role: 'Fondateur & Développeur Full-Stack',
    company: 'Fresh and Clean',
    period: 'Depuis janvier 2026',
    points: ['Marketplace mobile', 'Microservices TypeScript', 'Design system Dark/Light', 'CI/CD et tests'],
  },
  {
    role: 'Lead Développeur Full-Stack',
    company: 'Btpflow',
    period: 'Juin 2025 - juin 2026',
    points: ['SaaS React / Next.js', 'Back-office complexe', 'Permissions et workflows', 'Docker / AWS'],
  },
  {
    role: 'Lead Frontend Developer',
    company: 'Elc-books',
    period: 'Depuis novembre 2025',
    points: ['Frontend React / Next.js', 'UX achat', 'Administration', 'Cypress / ESLint'],
  },
  {
    role: 'Frontend Developer',
    company: 'Avm-Integration',
    period: 'Octobre 2024 - février 2025',
    points: ['Interfaces React complexes', 'Temps réel et recherche filtrée', 'Principes SOLID', '.NET / MySQL'],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'SAS DJUST Paris',
    period: 'Septembre 2021 - septembre 2024',
    points: ['Back-office React', 'Composants réutilisables', 'Performance UX', 'Mentoring'],
  },
];

const education = [
  {
    degree: 'Expert en ingénierie informatique logicielle',
    school: 'Epitech',
    period: 'Octobre 2016 - avril 2021',
    text: 'Programme Grande École en 5 ans formant des ingénieurs informatique hautement qualifiés et polyvalents.',
  },
  {
    degree: 'Baccalauréat Technologique',
    school: 'Lycée Jean-Baptiste Poquelin',
    period: '2014 - 2016',
    text: '',
  },
];

const languages = [
  { name: 'Français', level: 5 },
  { name: 'Anglais', level: 3.5 },
];

const process = [
  {
    step: '01',
    title: 'Analyse',
    text: 'Je pars du besoin métier, j’identifie les risques produit et je cadre les contraintes techniques avant d’écrire la première ligne.',
    focus: 'Discovery',
  },
  {
    step: '02',
    title: 'UX/UI',
    text: 'Je structure des écrans lisibles, des hiérarchies claires et des interactions fluides qui servent la conversion et la compréhension.',
    focus: 'Clarté',
  },
  {
    step: '03',
    title: 'Architecture',
    text: 'Je pose les bases React, les contrats API, les frontières de responsabilité et un design system cohérent.',
    focus: 'Scalabilité',
  },
  {
    step: '04',
    title: 'Développement',
    text: 'Je livre vite avec des composants robustes, une logique maintenable, des performances maîtrisées et des retours immédiats.',
    focus: 'Delivery',
  },
  {
    step: '05',
    title: 'Stabilisation',
    text: 'Je verrouille la qualité avec des tests, de l’observabilité, des corrections ciblées et une mise en production sereine.',
    focus: 'Quality',
  },
];

const heroSlides = [
  {
    title: 'SaaS dashboard',
    label: 'Back-office React / Next.js',
    src: '/hero-dev-frontend.png',
    accent: 'from-sky-400 to-emerald-300',
  },
  {
    title: 'Mobile marketplace',
    label: 'React Native / Expo',
    src: '/hero-dev-mobile.png',
    accent: 'from-emerald-400 to-teal-300',
  },
  {
    title: 'Design system',
    label: 'Components / UX states',
    src: '/hero-dev-design-system.png',
    accent: 'from-blue-500 to-cyan-300',
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 42, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

function MotionSection({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.section>
  );
}

function LogoCard({ item }: { item: (typeof logos)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group rounded-3xl border border-sky-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(14,143,208,0.08)] backdrop-blur-xl"
    >
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[var(--logo-color)] transition-colors group-hover:bg-emerald-50" style={{ '--logo-color': item.color } as React.CSSProperties}>
        {'icon' in item && item.icon ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
            <path d={item.icon.path} />
          </svg>
        ) : (
          <span className="text-sm font-black">{item.letters}</span>
        )}
      </div>
      <h3 className="text-base font-black text-slate-950">{item.name}</h3>
    </motion.article>
  );
}

function TechOrbit() {
  const stackGroups = [
    {
      title: 'Frontend product',
      text: 'Je pilote les interfaces React, l’UX/UI, les design systems et la performance perçue.',
      color: 'sky',
      items: [logos[0], logos[1], logos[2], logos[3], logos[10]],
    },
    {
      title: 'Backend & data',
      text: 'Quand il faut aller plus loin, je structure les APIs, la logique métier et la persistance.',
      color: 'emerald',
      items: [logos[4], logos[5], logos[8]],
    },
    {
      title: 'Delivery',
      text: 'J’industrialise les livraisons avec les environnements, les tests, le cloud et le CI/CD.',
      color: 'blue',
      items: [logos[6], logos[7], logos[9], logos[11]],
    },
  ];

  return (
    <div className="tech-system relative flex min-h-screen w-full items-center overflow-hidden border-y border-sky-100 bg-white/78 px-4 py-20 shadow-[0_30px_90px_rgba(14,143,208,0.12)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(14,143,208,0.14),transparent_30%),radial-gradient(circle_at_78%_20%,rgba(24,185,137,0.12),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(223,244,255,0.42))]" />
      <div className="relative z-10 mx-auto grid w-[min(1280px,100%)] gap-8 lg:grid-cols-[0.9fr_1.25fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Ce que je maîtrise</p>
          <h2 className="max-w-xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Une stack lisible, pensée pour livrer des produits robustes.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Mon cœur de métier reste le frontend, mais je couvre aussi l’architecture fullstack quand le produit l’exige.
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
            {['Frontend expert', 'Fullstack JS', 'Product UX', 'Delivery fiable'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-sky-100 bg-white/74 px-4 py-3 text-sm font-black text-sky-800 shadow-sm backdrop-blur-xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-sky-100 bg-white/74 p-5 shadow-[0_24px_75px_rgba(14,143,208,0.12)] backdrop-blur-xl md:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,143,208,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(14,143,208,0.055)_1px,transparent_1px)] bg-[length:44px_44px]" />
          <div className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-sky-200 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

          <motion.div
            className="absolute left-1/2 top-1/2 z-20 w-[min(210px,58vw)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-sky-100 bg-white/94 p-4 text-center shadow-[0_20px_58px_rgba(14,143,208,0.13)] backdrop-blur-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-emerald-700">Mon rôle</p>
            <h3 className="mt-2 text-xl font-black text-slate-950">React Fullstack</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">Architecture, APIs, data, cloud.</p>
          </motion.div>

          <div className="relative z-10 grid min-h-[560px] gap-5 md:grid-cols-2">
            {stackGroups.map((group, groupIndex) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: groupIndex * 0.08, duration: 0.55 }}
                className={`stack-zone ${groupIndex === 2 ? 'md:col-span-2 md:mx-auto md:w-[58%]' : ''} rounded-[1.75rem] border border-sky-100 bg-white/72 p-5 shadow-lg shadow-sky-900/5 backdrop-blur-xl`}
              >
                <div className="mb-5">
                  <p className={`text-sm font-black ${group.color === 'emerald' ? 'text-emerald-700' : 'text-sky-700'}`}>{group.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{group.text}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -6, scale: 1.04 }}
                      animate={{ y: [0, itemIndex % 2 === 0 ? -5 : 5, 0] }}
                      transition={{ duration: 4 + itemIndex * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex items-center gap-3 rounded-full border border-sky-100 bg-white px-4 py-3 text-slate-950 shadow-[0_16px_38px_rgba(14,143,208,0.11)]"
                      style={{ '--logo-color': item.color } as React.CSSProperties}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-50 text-[var(--logo-color)]">
                        {'icon' in item && item.icon ? (
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                            <path d={item.icon.path} />
                          </svg>
                        ) : (
                          <span className="text-xs font-black">{item.letters}</span>
                        )}
                      </span>
                      <span className="text-sm font-black">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 34 });
  const springY = useSpring(y, { stiffness: 300, damping: 34 });

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(canHover);
    if (!canHover) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };

    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] h-7 w-7 rounded-full border border-sky-300/70 bg-white/20 shadow-[0_0_36px_rgba(14,143,208,0.35)] backdrop-blur-md"
      style={{ x: springX, y: springY }}
    />
  );
}

function GlowCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`glow-card relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white/82 shadow-[0_24px_70px_rgba(14,143,208,0.10)] backdrop-blur-xl ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([latestX, latestY]) =>
              `radial-gradient(420px circle at ${latestX}px ${latestY}px, rgba(24,185,137,0.14), transparent 42%)`
          ),
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function PortfolioExperience() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [profilePhotoVisible, setProfilePhotoVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 24 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 90]);
  const heroOpacity = useTransform(heroScroll, [0, 0.75], [1, 0.58]);
  const slide = heroSlides[activeSlide];

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6fbff] text-slate-950">
      <CustomCursor />
      <motion.div className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-sky-500 via-emerald-400 to-sky-300" style={{ scaleX: progress }} />
      <div className="noise-layer" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(24,185,137,0.12),transparent_28%),radial-gradient(circle_at_8%_18%,rgba(14,143,208,0.13),transparent_30%),linear-gradient(180deg,#eaf8ff_0%,#ffffff_42%,#f8fcff_100%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/50 bg-white/72 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 w-[min(1180px,calc(100%-28px))] items-center justify-between gap-5">
          <a href="#home" className="flex items-center gap-3 text-sm font-black text-slate-950">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-sky-900/10">ZAK</span>
            <span className="hidden sm:inline">Portfolio</span>
          </a>
          <nav className="hidden items-center gap-1 rounded-full border border-sky-100 bg-white/80 p-1 text-sm font-bold text-slate-600 shadow-sm md:flex">
            {[
              { label: 'Profil', target: 'expertise' },
              { label: 'Stack', target: 'langages' },
              { label: 'Réalisations', target: 'projets' },
              { label: 'Parcours', target: 'experience' },
              { label: 'Formations', target: 'formations' },
              { label: 'Contact', target: 'contact' },
            ].map((item) => (
              <a key={item.label} href={`#${item.target}`} className="rounded-full px-4 py-2 transition hover:bg-sky-50 hover:text-sky-700">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white/80 text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 sm:inline-flex"
            >
              <Github size={19} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white/80 text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 sm:inline-flex"
            >
              <Linkedin size={19} />
            </a>
            <a href="mailto:zaarmel@hotmail.fr" className="hidden rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:shadow-emerald-500/30 sm:inline-flex">
              Contact
            </a>
          </div>
        </div>
      </header>

      <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={`hero-bg-${activeSlide}`}
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(18px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.98, filter: 'blur(12px)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            {slide.src ? (
              <motion.img
                src={slide.src}
                alt=""
                className="h-full w-full object-cover"
                initial={{ scale: 1.08, x: 0, y: 0 }}
                animate={{ scale: 1.16, x: activeSlide % 2 === 0 ? -28 : 28, y: activeSlide % 2 === 0 ? -16 : 16 }}
                transition={{ duration: 5.2, ease: 'linear' }}
              />
            ) : (
              <motion.div
                className={`h-full w-full bg-gradient-to-br ${slide.accent}`}
                initial={{ scale: 1.04, backgroundPosition: '0% 50%' }}
                animate={{ scale: 1.12, backgroundPosition: '100% 50%' }}
                transition={{ duration: 5.2, ease: 'linear' }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/82 via-slate-950/42 to-slate-950/18" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f6fbff] via-transparent to-slate-950/18" />
          </motion.div>
        </AnimatePresence>

        <motion.div aria-hidden="true" className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl" style={{ y: heroY, opacity: heroOpacity }} />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-[min(1280px,100%)] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_440px]">
          <motion.div initial={{ opacity: 0, y: 34, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl">
            <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 }} className="mb-5 flex flex-wrap items-center gap-3">
              <p className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-black text-emerald-700 shadow-sm backdrop-blur-xl">
                Lead Frontend React / Fullstack JavaScript
              </p>
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-500/90 px-4 py-2 text-sm font-black text-white shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                Disponible pour CDI & Freelance
              </p>
            </motion.div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-white/72">{slide.label}</p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Je conçois des produits React utiles, élégants et pensés pour durer.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              Je suis <strong className="text-white">Zan Armel Kessel Za Bi</strong>, Lead Frontend Developer avec plus de 6 ans d’expérience. J’accompagne la conception et la livraison de produits SaaS, de back-offices métiers et de marketplaces mobiles avec un focus fort sur l’architecture, la performance et l’UX/UI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Architecture React', 'Design systems', 'Performance', 'UX/UI produit'].map((tag) => (
                <motion.span key={tag} whileHover={{ y: -4, scale: 1.03 }} className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-extrabold text-white shadow-sm backdrop-blur-xl">
                  {tag}
                </motion.span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href="mailto:zaarmel@hotmail.fr" className="inline-flex h-13 items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-2xl shadow-sky-950/15">
                <Mail size={18} /> Me contacter
              </motion.a>
              <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href={cvUrl} target="_blank" rel="noreferrer" className="inline-flex h-13 items-center gap-2 rounded-2xl border border-white/20 bg-white/15 px-6 py-4 text-sm font-black text-white shadow-lg backdrop-blur-xl">
                Voir le CV <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 34, filter: 'blur(16px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.22, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden justify-self-end lg:block"
          >
            <motion.div
              aria-hidden="true"
              className="absolute -inset-7 rounded-[2.5rem] bg-gradient-to-br from-sky-300/26 via-white/8 to-emerald-300/24 blur-2xl"
              animate={{ scale: [1, 1.04, 1], opacity: [0.65, 0.9, 0.65] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative w-[360px] overflow-hidden rounded-[2rem] border border-white/32 bg-white/16 p-3 shadow-[0_34px_95px_rgba(2,18,32,0.26)] backdrop-blur-2xl xl:w-[410px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-gradient-to-br from-sky-100 via-white to-emerald-100">
                {profilePhotoVisible ? (
                  <img
                    src={profilePhotoUrl}
                    alt="Portrait de Zan Armel Kessel Za Bi"
                    onError={() => setProfilePhotoVisible(false)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(14,143,208,0.20),transparent_34%),linear-gradient(135deg,#f7fcff,#e5f7ff_48%,#e8fbf3)]">
                    <div className="text-center">
                      <span className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-sky-200 bg-white text-3xl font-black text-sky-700 shadow-xl shadow-sky-900/10">ZAK</span>
                      <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Photo à ajouter</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-slate-950/54 p-4 text-white shadow-xl backdrop-blur-xl">
                  <p className="text-sm font-black">Zan Armel Kessel Za Bi</p>
                  <p className="mt-1 text-xs font-bold text-white/68">Lead Frontend / Fullstack Developer</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.button
          whileHover={{ scale: 1.08, x: -3 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => changeSlide(-1)}
          className="absolute left-4 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/18 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-2xl transition hover:border-white/70 hover:bg-white/28 sm:left-8 sm:h-14 sm:w-14"
          aria-label="Image précédente"
          type="button"
        >
          <ChevronLeft size={26} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08, x: 3 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => changeSlide(1)}
          className="absolute right-4 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/18 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-2xl transition hover:border-white/70 hover:bg-white/28 sm:right-8 sm:h-14 sm:w-14"
          aria-label="Image suivante"
          type="button"
        >
          <ChevronRight size={26} />
        </motion.button>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/25 bg-white/14 px-4 py-3 shadow-2xl shadow-slate-950/15 backdrop-blur-2xl">
          <div className="flex gap-2">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeSlide ? 'w-10 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'}`}
                aria-label={`Afficher ${item.title}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>

      <MotionSection className="mx-auto grid w-[min(1180px,calc(100%-28px))] grid-cols-1 gap-3 pb-24 md:grid-cols-3">
        {[
          ['6+', 'ans à construire des produits React, SaaS et back-offices métiers'],
          ['Fullstack JS', 'React, Next.js, Node.js, APIs, PostgreSQL, Docker'],
          ['UX/UI', 'Design system, responsive, accessibilité et performance perçue'],
        ].map(([value, label]) => (
          <GlowCard key={value} className="p-6">
            <strong className="text-3xl font-black text-sky-600">{value}</strong>
            <p className="mt-3 leading-7 text-slate-600">{label}</p>
          </GlowCard>
        ))}
      </MotionSection>

      <MotionSection id="expertise" className="mx-auto w-[min(1180px,calc(100%-28px))] py-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Profil</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Un frontend pensé comme un produit, pas comme une simple interface.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <GlowCard key={skill.title} className="p-6">
              <skill.icon className="mb-10 text-emerald-500" size={28} />
              <h3 className="text-lg font-black text-slate-950">{skill.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{skill.text}</p>
            </GlowCard>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="langages">
        <TechOrbit />
      </MotionSection>

      <MotionSection className="relative min-h-screen overflow-hidden px-4 py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(24,185,137,0.10),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(14,143,208,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(243,250,255,0.96))]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-12rem)] w-[min(1280px,100%)] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Méthode</p>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Une méthode de travail lisible, du cadrage à la mise en production.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                J’avance par étapes courtes et claires pour garder le cap sur le métier, la qualité technique et l’expérience utilisateur.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                ['Lead Frontend', 'Vision produit, arbitrages UI, architecture et qualité.'],
                ['Fullstack', 'API, data, infra et coordination backend.'],
                ['Delivery', 'Stabilité, tests, suivi et itérations rapides.'],
              ].map(([title, text]) => (
                <motion.article
                  key={title}
                  whileHover={{ y: -5 }}
                  className="rounded-[1.75rem] border border-sky-100 bg-white/84 p-5 shadow-[0_18px_48px_rgba(14,143,208,0.08)] backdrop-blur-xl"
                >
                  <p className="text-sm font-black text-sky-700">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.25rem] border border-sky-100 bg-white/78 p-4 shadow-[0_28px_80px_rgba(14,143,208,0.10)] backdrop-blur-xl sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(14,143,208,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(14,143,208,0.045)_1px,transparent_1px)] bg-[length:48px_48px]" />
            <div className="relative grid gap-4">
              {process.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_55px_rgba(14,143,208,0.08)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(24,185,137,0.12),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.85),rgba(232,247,255,0.3))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative grid gap-4 md:grid-cols-[120px_1fr] md:items-start">
                    <div>
                      <span className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-sky-700">
                        {item.focus}
                      </span>
                      <p className="mt-4 text-4xl font-black leading-none text-emerald-500">{item.step}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-black text-slate-950 md:text-3xl">{item.title}</h3>
                        <span className="hidden rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-700 md:inline-flex">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="projets" className="mx-auto w-[min(1180px,calc(100%-28px))] py-24">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Réalisations</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Des produits et interfaces que j’ai construits, fait évoluer ou fiabilisés.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Tous', 'SaaS', 'Mobile', 'Back-office'].map((filter) => (
              <motion.span whileHover={{ y: -3 }} key={filter} className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-black text-sky-800 shadow-sm">
                {filter}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -10, rotateX: 1.5, rotateY: index % 2 === 0 ? -1.5 : 1.5 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="group overflow-hidden rounded-[2rem] border border-sky-100 bg-white/86 shadow-[0_24px_70px_rgba(14,143,208,0.10)]"
            >
              <div className="relative min-h-56 overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-50 p-6">
                <motion.div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-emerald-300/20 blur-2xl" animate={{ scale: [1, 1.18, 1], x: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full bg-white/80 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-emerald-700">{project.type}</span>
                  <div className="mt-20 flex items-end justify-between">
                    <Code2 className="text-sky-600" size={32} />
                    <span className="text-sm font-black text-slate-400">{project.year}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{project.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-sky-50 px-3 py-2 text-xs font-black text-sky-800">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="experience" className="mx-auto w-[min(1180px,calc(100%-28px))] py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Parcours</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Mon parcours sur des produits complexes, du frontend à la delivery.</h2>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-sky-200 via-emerald-200 to-transparent md:block" />
          <div className="grid gap-5">
            {timeline.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className="relative rounded-[2rem] border border-sky-100 bg-white/86 p-6 shadow-[0_18px_52px_rgba(14,143,208,0.08)] md:ml-12"
              >
                <span className="absolute -left-[3.25rem] top-8 hidden h-8 w-8 rounded-full border-4 border-white bg-emerald-400 shadow-lg shadow-emerald-400/20 md:block" />
                <div className="grid gap-6 md:grid-cols-[260px_1fr]">
                  <div>
                    <p className="text-sm font-black text-sky-700">{item.period}</p>
                    <p className="mt-2 text-sm font-bold text-slate-500">{item.company}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-950">{item.role}</h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <p key={point} className="flex gap-2 text-sm font-bold text-slate-600">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={17} />
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="formations" className="mx-auto w-[min(1180px,calc(100%-28px))] py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Formations</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Le socle qui a construit ma manière d’ingénieur.</h2>
            <div className="mt-8 grid gap-4">
              {education.map((item) => (
                <GlowCard key={item.degree} className="p-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="mt-1 shrink-0 text-emerald-500" size={24} />
                    <div>
                      <p className="text-sm font-black text-sky-700">{item.period}</p>
                      <h3 className="mt-1 text-lg font-black text-slate-950">{item.degree}</h3>
                      <p className="mt-1 text-sm font-bold text-slate-500">{item.school}</p>
                      {item.text ? <p className="mt-3 leading-7 text-slate-600">{item.text}</p> : null}
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Langues</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Français natif, anglais professionnel.</h2>
            <div className="mt-8 grid gap-4">
              {languages.map((lang) => (
                <GlowCard key={lang.name} className="p-6">
                  <div className="flex items-center gap-4">
                    <LanguagesIcon className="shrink-0 text-emerald-500" size={22} />
                    <div className="flex-1">
                      <p className="text-base font-black text-slate-950">{lang.name}</p>
                      <div className="mt-2 flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`h-2 w-6 rounded-full ${index < Math.round(lang.level) ? 'bg-emerald-500' : 'bg-sky-100'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" className="mx-auto w-[min(1180px,calc(100%-28px))] py-24">
        <div className="grid gap-8 rounded-[2.5rem] border border-sky-100 bg-white/86 p-6 shadow-[0_28px_80px_rgba(14,143,208,0.12)] backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Contact</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Parlons de votre prochain produit React et fullstack.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Je suis disponible dès maintenant, en CDI comme en freelance, pour une mission frontend senior, une plateforme SaaS, un back-office métier, une marketplace mobile ou une refonte React / Next.js.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-bold text-slate-600">
              <span className="flex items-center gap-3"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" /> Disponible pour CDI & Freelance</span>
              <a className="flex items-center gap-3" href="mailto:zaarmel@hotmail.fr"><Mail className="text-emerald-500" size={18} /> zaarmel@hotmail.fr</a>
              <a className="flex items-center gap-3" href="tel:+33787561692"><Phone className="text-emerald-500" size={18} /> 07 87 56 16 92</a>
              <span className="flex items-center gap-3"><MapPin className="text-emerald-500" size={18} /> Noisy-le-Grand, France</span>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700"
              >
                <Github size={19} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>
          <form className="grid gap-4">
            <input className="h-14 rounded-2xl border border-sky-100 bg-sky-50/60 px-4 font-bold text-slate-950 outline-none transition focus:border-emerald-300 focus:bg-white focus:shadow-[0_0_0_4px_rgba(24,185,137,0.12)]" placeholder="Nom" />
            <input className="h-14 rounded-2xl border border-sky-100 bg-sky-50/60 px-4 font-bold text-slate-950 outline-none transition focus:border-emerald-300 focus:bg-white focus:shadow-[0_0_0_4px_rgba(24,185,137,0.12)]" placeholder="Email" type="email" />
            <textarea className="min-h-36 resize-none rounded-2xl border border-sky-100 bg-sky-50/60 p-4 font-bold text-slate-950 outline-none transition focus:border-emerald-300 focus:bg-white focus:shadow-[0_0_0_4px_rgba(24,185,137,0.12)]" placeholder="Votre message" />
            <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 font-black text-white shadow-xl shadow-emerald-500/20" type="button">
              Envoyer <Send size={18} />
            </motion.button>
          </form>
        </div>
      </MotionSection>
    </main>
  );
}
