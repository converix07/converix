"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  CalendarCheck,
  Users,
  Shield,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle2,
  Send,
  Menu,
  X,
  ChevronDown,
  Quote,
  Briefcase,
  Handshake,
  Target,
  Lock,
  FileText,
  Eye,
  Scale,
  ShieldCheck,
  MapPin,
  Phone,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

/* ──────────────────────────────────────────
   Animation helpers
   ────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const dirs = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   NAVIGATION
   ────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Leistung", href: "#services" },
    { label: "Story", href: "#story" },
    { label: "Für wen", href: "#target" },
    { label: "Prozess", href: "#results" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500/30 transition-colors">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            converix
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full px-6"
          >
            <a href="#contact">Gespräch buchen</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-4 pb-6 pt-2"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-neutral-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full"
          >
            <a href="#contact" onClick={() => setOpen(false)}>
              Gespräch buchen
            </a>
          </Button>
        </motion.div>
      )}
    </header>
  );
}

/* ──────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left — Text content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn delay={0}>
              <Badge
                variant="outline"
                className="mb-5 sm:mb-6 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1 text-[11px] sm:px-4 sm:py-1.5 sm:text-sm font-medium"
              >
                <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2 shrink-0" />
                <span className="hidden sm:inline">Remote Chatting · Appointment Setting · Kundenbeziehungen</span>
                <span className="sm:hidden">Chat Setting · Appointment Setting</span>
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-[1.65rem] leading-[1.2] sm:text-5xl sm:leading-[1.08] md:text-6xl lg:text-7xl lg:leading-[1.08] font-bold text-white tracking-tight">
                Menschen kaufen nicht
                <br />
                wegen Produkten.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Menschen entscheiden sich
                  <br className="sm:hidden" />
                  {" "}für Vertrauen.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-5 sm:mt-8 text-[15px] sm:text-xl text-neutral-400 max-w-2xl lg:mx-0 mx-auto leading-relaxed px-1 lg:px-0">
                Converix verwandelt Interessenten in qualifizierte Termine —
                durch authentischen Dialog, interkulturelle Kompetenz und über
                30 Jahre Erfahrung im direkten Kundenkontakt.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-1 lg:px-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full px-6 sm:px-8 text-sm sm:text-base h-11 sm:h-12 w-full sm:w-auto"
                >
                  <a href="#contact">
                    Jetzt Gespräch anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white bg-black hover:bg-white/10 rounded-full px-6 sm:px-8 text-sm sm:text-base h-11 sm:h-12 w-full sm:w-auto"
                >
                  <a href="#story">Meine Geschichte</a>
                </Button>
              </div>
            </FadeIn>

            {/* Trust badges */}
            <FadeIn delay={0.55}>
              <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-10 text-neutral-500 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                  <span>30+ Jahre Erfahrung</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                  <span>Interkulturelle Kompetenz</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                  <span>Remote verfügbar</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Profile photo (desktop only) */}
          <FadeIn delay={0.3} direction="left" className="hidden lg:block shrink-0">
            <div className="relative">
              <div className="w-72 h-96 rounded-3xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
                <img
                  src="/ertan-celik.webp"
                  alt="Ertan Çelik"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Name badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-neutral-900/90 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3 text-center">
                <p className="text-white font-semibold text-sm">Ertan Çelik</p>
                <p className="text-emerald-400 text-xs">Gründer von Converix</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-6 h-6 text-neutral-600" />
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   PAIN POINTS SECTION
   ────────────────────────────────────────── */
function PainPoints() {
  const pains = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Anfragen bleiben unbeantwortet",
      description:
        "Trotz teurer Werbekampagnen antworten nur wenige Interessenten. Die Conversion-Rate sinkt und dein Budget verschwindet im Nichts — weil der erste Eindruck im Chat nicht überzeugt.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Termine absagen oder nicht erscheinen",
      description:
        "Selbst wenn ein Termin gebucht wird, erscheinen viele nicht. Der Grund: Der Vertrauensaufbau fand vorher nicht statt. Ohne echte Verbindung ist jeder Termin wackelig.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Keine Zeit für echten Dialog",
      description:
        "Als Coach oder Agenturinhaber bist du im Tagesgeschäft gefangen. Qualifizierte Gespräche zu führen erfordert Zeit, Geduld und Erfahrung — Ressourcen, die dir fehlen.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Skripte wirken künstlich",
      description:
        "Standardisierte Chat-Skripte spürt jeder Prospect. Was fehlt, ist Empathie, aktives Zuhören und die Fähigkeit, auf jede Situation individuell einzugehen.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-red-500/30 bg-red-500/10 text-red-400 px-3 py-1 text-xs font-medium"
            >
              Das Problem
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Kennst du diese Situation?
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Diese Herausforderungen kosten dich täglich Umsatz und Zeit.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="bg-white/[0.03] border-white/10 hover:border-red-500/30 transition-colors group h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-5 group-hover:bg-red-500/20 transition-colors">
                    {pain.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {pain.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   SERVICES SECTION
   ────────────────────────────────────────── */
function Services() {
  const services = [
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Chat Setting",
      description:
        "Authentische Dialoge im DM oder Chat, die innerhalb kürzester Zeit eine echte Verbindung aufbauen — unabhängig von Alter, Herkunft oder Hintergrund. Kein Skript, keine Masche, nur individueller Mensch-zu-Mensch-Kontakt. So verwandeln sich neugierige Anfragen in motivierte Interessenten, die bereit sind, den nächsten Schritt zu gehen.",
      features: [
        "DM-Kommunikation auf Instagram, Facebook & LinkedIn",
        "Individuelle Ansprache statt Copy-Paste-Skripte",
        "Kulturell sensible Kommunikation",
        "Nahtlose Übergabe an den Vertrieb",
      ],
    },
    {
      icon: <CalendarCheck className="w-7 h-7" />,
      title: "Appointment Setting",
      description:
        "Termine, die wirklich stattfinden. Durch vorausgehenden Vertrauensaufbau im Chat sind deine Termine qualifiziert und vorbereitet. Kein No-Show, keine Enttäuschungen — nur Gespräche mit Menschen, die deine Lösung wirklich hören wollen.",
      features: [
        "Qualifizierte Terminvereinbarung",
        "Vorab-Qualifizierung jedes Leads",
        "Kalenderintegration & Reminder-Systeme",
        "Nachfass-Management für offene Termine",
      ],
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Leadqualifizierung & Kundenbindung",
      description:
        "Jeder Mensch ist eine Persönlichkeit, kein Lead in einer Datenbank. Ich identifiziere die echten Bedürfnisse hinter der Anfrage — besonders dann, wenn ein Kunde noch gar nicht weiß, was er wirklich braucht. So wird dein Vertriebsteam nur noch relevante Gespräche führen.",
      features: [
        "Empathische Bedarfsanalyse",
        "Strukturierte Qualifizierungs-Pipeline",
        "Langfristige Kundenbeziehungen statt Einmalgeschäfte",
        "CRM-Kompatible Dokumentation",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-medium"
            >
              Meine Leistung
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Was Converix für dich leistet
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Gerade im Remote Chatting entscheidet nicht das perfekte Skript über den Erfolg, sondern die Fähigkeit, Menschen wirklich zu verstehen.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <Card className="bg-white/[0.03] border-white/10 hover:border-emerald-500/30 transition-all group h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   STORY SECTION
   ────────────────────────────────────────── */
function Story() {
  const milestones = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      role: "Friseurausbildung, Ulm",
      year: "",
      text: "Die Schule der Geduld und des Zuhörens — hier habe ich gelernt, dass jeder Mensch eine Geschichte hat, die es wert ist, gehört zu werden.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      role: "Familienbetrieb Antalya Kebap Salon",
      year: "",
      text: "Erste unternehmerische Praxis. Gelernt, dass ein Geschäft nur dann funktioniert, wenn Gäste sich willkommen und wertgeschätzt fühlen.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      role: "Reiseleiter, GTI German Travel International",
      year: "",
      text: "Innerhalb weniger Minuten Vertrauen zu internationalen Gruppen aufbauen, die ich zuvor nie gesehen hatte — eine Fähigkeit, die heute in jedem Kundengespräch wertvoll ist.",
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      role: "Gastronom & Unternehmer",
      year: "",
      text: "Side Bistro Senden, Arocaria Hotel Side, Illertal Stuben Fellheim — langfristiger Erfolg entsteht nicht durch einmalige Abschlüsse, sondern durch Beziehungen, die Menschen wirklich binden.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      role: "Photovoltaik & Touristik-Unternehmer",
      year: "",
      text: "Verkauf erneuerbarer Energien und Gründung der Ausflugsagentur Efe's & Charly's Ausflüge — strategisches Denken und unternehmerische Eigenverantwortung.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      role: "Hotel Guide",
      year: "",
      text: "Betreuung internationaler Gäste mit Empathie und aktivem Zuhören — besonders dann, wenn ein Gast noch gar nicht weiß, was er wirklich braucht.",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      role: "Chat Setter mit KI-Unterstützung",
      year: "Heute",
      text: "Professionelles Chat Setting und Appointment Setting für Coaches, Agenturen und Online Marketer. Ich nutze KI im Hintergrund für Datenanalyse und Vorbereitung — den eigentlichen Dialog führe ich persönlich. 30+ Jahre Kundenkontakt fließen in jeden Einzelgespräch ein.",
    },
  ];

  return (
    <section id="story" className="py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Intro + Profile */}
          <div>
            <FadeIn>
              <Badge
                variant="outline"
                className="mb-4 border-amber-500/30 bg-amber-500/10 text-amber-400 px-3 py-1 text-xs font-medium"
              >
                Meine Geschichte
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Mein Leben war alles andere als geradlinig — und genau das ist meine größte Stärke.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
                Mein Name ist Ertan Çelik. Gebürtiger Ulmer, Sohn einer Gastarbeiterfamilie, 50 Jahre jung, Vater von drei Töchtern. Heute lebe ich in Antalya — eine bewusste Entscheidung für Lebensqualität und ortsunabhängige Arbeit. Vom Familienbetrieb über Gastronomie, Tourismus, Vertrieb und Unternehmertum bis zur internationalen Kundenbetreuung habe ich in über 30 Jahren immer wieder dasselbe erlebt:{" "}
                <span className="text-emerald-400 font-semibold">
                  Menschen kaufen nicht wegen Produkten. Menschen entscheiden sich für Vertrauen.
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                Ich habe in verschiedensten Branchen gearbeitet — Coaching, Finanzen, Investment, Gastronomie. Dabei ist mir klar geworden: Erfolg entsteht nicht durch Fachwissen allein. Menschen, die zuhören können, Verantwortung übernehmen und Vertrauen aufbauen, machen den Unterschied. Ich verstehe Zusammenhänge, erkenne Potenziale und trage zum Erfolg jedes Unternehmens bei, mit dem ich arbeite.
              </p>
            </FadeIn>

            {/* Profile photo */}
            <FadeIn delay={0.35}>
              <div className="mt-8 flex items-center gap-4 p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                <img
                  src="/ertan-celik.webp"
                  alt="Ertan Çelik"
                  className="w-16 h-16 rounded-full object-cover object-top border-2 border-emerald-500/30 shrink-0"
                />
                <div>
                  <p className="text-white font-semibold">Ertan Çelik</p>
                  <p className="text-neutral-400 text-sm">Gründer von Converix</p>
                  <p className="text-neutral-500 text-xs mt-1">Antalya, Türkei · Remote verfügbar</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Career Timeline */}
          <div className="space-y-4">
            <FadeIn delay={0.1} direction="right">
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">Beruflicher Werdegang</p>
            </FadeIn>
            {milestones.map((m, i) => (
              <FadeIn key={i} delay={0.08 * (i + 1)} direction="right">
                <div className="flex gap-4 p-4 sm:p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-500/20 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    {m.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-white font-semibold text-sm sm:text-base">{m.role}</h3>
                      {m.year && (
                        <span className="text-neutral-600 text-xs font-mono">{m.year}</span>
                      )}
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mt-1">
                      {m.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.6} direction="right">
              <div className="flex gap-4 p-4 sm:p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    Soziales Engagement — DEKAFOK
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mt-1">
                    Als Mitgründer von DEKAFOK engagiere ich mich aktiv für den
                    Schutz von Meeresschildkröten, Mittelmeerrobben und den
                    natürlich an den Stränden wachsenden Sandlilien. Wer bereit
                    ist, sich konsequent für etwas einzusetzen, das keine Stimme
                    hat, bringt dieselbe Haltung in seine Arbeit.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   VALUES SECTION
   ────────────────────────────────────────── */
function Values() {
  const values = [
    {
      title: "Ehrlichkeit",
      description: "Klare Kommunikation ohne Umwege. Keine leeren Versprechen, keine versteckten Agenden — was ich sage, das halte ich. Transparenz ist die Grundlage jeder Zusammenarbeit, die Bestand hat.",
      icon: <Eye className="w-5 h-5" />,
    },
    {
      title: "Respekt",
      description: "Ich begegne Menschen auf Augenhöhe — im Chat wie im Leben. Diese Haltung habe ich als Sohn einer Gastarbeiterfamilie in Ulm von klein auf gelebt.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      title: "Zuverlässigkeit",
      description: "Versprechen halte ich ein, auch wenn es unbequem wird. Verbindlichkeit ist für mich keine Soft-Skill-Theorie — sie ist Geschäftsgrundlage.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Augenhöhe",
      description: "Ich verstehe mich nicht als Dienstleister, der Befehle ausführt. Ich bin ein Partner, der mitdenkt und gemeinsam Ziele erreicht.",
      icon: <Scale className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-amber-500/30 bg-amber-500/10 text-amber-400 px-3 py-1 text-xs font-medium"
            >
              Meine Werte
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Nicht nur Worte. Gelebte Haltung.
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Als Vater von drei Töchtern weiß ich aus tiefer Überzeugung: Geduld, Verbindlichkeit und echtes Interesse an Menschen sind keine weichen Faktoren — sie sind der Kern jedes nachhaltigen Erfolgs.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="bg-white/[0.03] border-white/10 hover:border-amber-500/30 transition-all group h-full">
                <CardContent className="p-6 sm:p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500/20 transition-colors">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {v.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   STRENGTHS / USP SECTION
   ────────────────────────────────────────── */
function Strengths() {
  const strengths = [
    {
      title: "Authentische Kommunikation",
      description: "Ich spreche mit Menschen, nicht zu ihnen. Keine Skripte, keine Maschen. KI erledigt für mich die Datenaufbereitung — aber den Gesprächsaufbau, das Zuhören und den Abschluss mache ich selbst. Das unterscheidet mich von reinen KI-Chatbots.",
    },
    {
      title: "Vertrauensaufbau",
      description: "Ehrlich und auf Augenhöhe. Als Reiseleiter habe ich gelernt, innerhalb weniger Minuten eine Verbindung zu fremden Menschen aufzubauen, die andere erst nach Wochen schaffen. Vertrauen ist bei mir keine Theorie — es ist Erfahrung.",
    },
    {
      title: "Kulturelle Sensibilität",
      description: "Als Sohn einer Gastarbeiterfamilie war Brückenbauen keine Option, sondern tägliche Notwendigkeit. Ich kommuniziere brückenbauend — über Grenzen, Kulturen und Sprachen hinweg.",
    },
    {
      title: "Strategisches Denken",
      description: "Herausforderungen erkennen, Chancen bewerten und daraus Lösungen entwickeln. Ich erfülle nicht nur Aufgaben, sondern verstehe das Geschäft meines Partners und trage aktiv zum Erfolg bei.",
    },
    {
      title: "Empathie & Zuhören",
      description: "Besonders dann, wenn ein Kunde noch gar nicht weiß, was er wirklich braucht. Ich höre zu, stelle die richtigen Fragen und finde heraus, was hinter der Anfrage steckt. Das ist etwas, das keine Maschine kann.",
    },
    {
      title: "Remote-Kompetenz",
      description: "Seit Jahren erfolgreich standortunabhängig tätig. Strukturiert, eigenverantwortlich und zielorientiert. Auch über Distanz baue ich starke, vertrauensvolle Beziehungen auf.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-medium"
            >
              Meine Stärken
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Fähigkeiten, die kein Seminar vermitteln kann.
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Durch jahrzehntelange Erfahrung im direkten Umgang mit Menschen aus verschiedensten Kulturen und Lebenswelten.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Card className="bg-white/[0.03] border-white/10 hover:border-emerald-500/30 transition-all group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   TARGET AUDIENCE SECTION
   ────────────────────────────────────────── */
function TargetAudience() {
  const audiences = [
    {
      title: "Coaches & Berater",
      description:
        "Deine Zeit gehört deinen Klienten, nicht dem Terminmanagement. Ich übernehme den Vorab-Prozess — vom ersten Chat bis zum gebuchten Gespräch.",
     challenge: "Fehlende Zeit für Akquise",
    },
    {
      title: "Marketing-Agenturen",
      description:
        "Deine Kunden wollen Ergebnisse. Mit strukturiertem Chat-Setting sorgst du für Conversion-Raten, die sich sehen lassen können.",
      challenge: "Sinkende Conversion-Raten",
    },
    {
      title: "Online Marketer",
      description:
        "Deine Ads bringen Klicks — aber was passiert danach? Ich schließe die Lücke zwischen Klick und Kauf durch echte Gespräche im Chat.",
      challenge: "Leads konvertieren nicht",
    },
    {
      title: "Chat Setter & Appointment Setter Teams",
      description:
        "Du suchst jemanden, der nicht nur Skripte abarbeitet, sondern Beziehungen aufbaut. Ich bringe 30+ Jahre Kundenkontakt in dein Team ein.",
      challenge: "Eintönige Skript-Abarbeit",
    },
  ];

  return (
    <section id="target" className="py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-medium"
            >
              Für wen
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Für wen arbeite ich?
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Converix ist genau richtig, wenn du in einer dieser Positionen
              steckst.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="bg-white/[0.03] border-white/10 hover:border-emerald-500/30 transition-all group h-full">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <Badge
                    variant="outline"
                    className="self-start mb-4 border-red-500/30 bg-red-500/10 text-red-400 text-xs px-2.5 py-0.5"
                  >
                    {a.challenge}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {a.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {a.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   PROCESS / HOW I WORK SECTION
   ────────────────────────────────────────── */
function Process() {
  const steps = [
    {
      step: "01",
      title: "Kennenlernen & Analyse",
      description: "Wir sprechen über deine Zielgruppe, deine Angebote und deine aktuellen Herausforderungen. Ich verstehe dein Business, bevor ich den ersten Chat schreibe.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Authentischer Dialog",
      description: "Ich übernehme deine Chat-Kommunikation — individuell, empathisch und ohne Skript. KI unterstützt mich bei der Vorbereitung, aber den Dialog führe ich selbst. Jeder Interessent wird als Mensch behandelt, nicht als Nummer.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Qualifizierte Termine",
      description: "Die Ergebnisse: Termine mit Menschen, die deine Lösung wirklich hören wollen. Kein No-Show, keine Enttäuschungen — nur Gespräche auf Augenhöhe.",
      icon: <CalendarCheck className="w-6 h-6" />,
    },
  ];

  return (
    <section id="results" className="py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-medium"
            >
              So arbeite ich
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              In drei Schritten zum Ergebnis
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Kein Schnellschuss, keine Templates. Jede Zusammenarbeit beginnt mit Verständnis.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { value: "30+", label: "Jahre Kundenkontakt" },
            { value: "5+", label: "Branchen erfahren" },
            { value: "3", label: "Kernleistungen" },
            { value: "DE · TR · EN", label: "Sprachen" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.08} className="min-w-0">
              <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-2xl min-h-full">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400 leading-tight">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-neutral-400">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative p-6 sm:p-8 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-colors h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-bold text-white/5">{s.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {s.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 lg:-right-4 top-1/2 -translate-y-1/2 text-emerald-500/30 z-10">
                    <ArrowRight className="w-6 h-6 rotate-[-90deg] md:rotate-0" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   PERSPECTIVE / CTA SECTION
   ────────────────────────────────────────── */
function Perspective() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative p-8 sm:p-12 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-3xl">
            <Quote className="w-10 h-10 text-emerald-500/30 absolute top-6 left-6 sm:top-8 sm:left-8" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Mit 50 Jahren verbinde ich Erfahrung, Gelassenheit und Verantwortungsbewusstsein mit der Bereitschaft, mich kontinuierlich weiterzuentwickeln.
              </h2>
              <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
                Ich suche keine kurzfristige Beschäftigung, sondern eine langfristige Zusammenarbeit, in der Vertrauen, Verlässlichkeit und gemeinsame Ergebnisse im Mittelpunkt stehen. Unternehmen erhalten mit mir nicht nur einen zuverlässigen Partner, sondern jemanden, der Chancen erkennt, strategisch denkt und aktiv dazu beiträgt, gemeinsame Ziele zu erreichen.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src="/ertan-celik.webp"
                  alt="Ertan Çelik"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-emerald-500/30"
                />
                <div>
                  <p className="text-white font-semibold">Ertan Çelik</p>
                  <p className="text-neutral-400 text-sm">Gründer von Converix · Antalya, Türkei</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   CONTACT / CTA SECTION
   ────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-medium"
            >
              Kontakt
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Lass uns sprechen.
            </h2>
            <p className="mt-4 text-neutral-400 text-lg max-w-xl mx-auto">
              Wenn du jemanden suchst, der Menschen nicht als Leads, sondern als Persönlichkeiten betrachtet — der Verantwortung übernimmt, Chancen erkennt und dein Unternehmen professionell repräsentiert — freue ich mich auf ein persönliches Gespräch. Lass uns gemeinsam herausfinden, wie ich dein Team unterstützen kann.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card className="bg-white/[0.04] border-white/10 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const vorname = (fd.get("vorname") as string || "").trim();
                  const nachname = (fd.get("nachname") as string || "").trim();
                  const email = (fd.get("email") as string || "").trim();
                  const nachricht = (fd.get("nachricht") as string || "").trim();
                  if (!vorname || !email || !nachricht) return;
                  const subject = encodeURIComponent(`Kontaktanfrage von ${vorname} ${nachname}`);
                  const body = encodeURIComponent(`Name: ${vorname} ${nachname}\nE-Mail: ${email}\n\nNachricht:\n${nachricht}`);
                  window.location.href = `mailto:kontakt@converix.info?subject=${subject}&body=${body}`;
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="vorname" className="text-sm text-neutral-300 font-medium">
                      Vorname
                    </label>
                    <Input
                      id="vorname"
                      name="vorname"
                      placeholder="Max"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-emerald-500/50 h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="nachname" className="text-sm text-neutral-300 font-medium">
                      Nachname
                    </label>
                    <Input
                      id="nachname"
                      name="nachname"
                      placeholder="Mustermann"
                      className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-emerald-500/50 h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-neutral-300 font-medium">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-emerald-500/50 h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="nachricht" className="text-sm text-neutral-300 font-medium">
                    Was beschäftigt dich am meisten?
                  </label>
                  <Textarea
                    id="nachricht"
                    name="nachricht"
                    placeholder="Erzähl mir kurz von deiner Situation und deinen Zielen..."
                    rows={4}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-emerald-500/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full h-12 text-base"
                >
                  <Send className="w-4 h-4 mr-2" />
                  E-Mail öffnen
                </Button>

                <p className="text-center text-neutral-500 text-xs">
                  Nach dem Klick wird dein E-Mail-Programm geöffnet. Deine Daten werden vertraulich behandelt und niemals an Dritte weitergegeben.
                </p>
              </form>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Contact details below form */}
        <FadeIn delay={0.3}>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3 text-neutral-400">
              <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">Adresse</p>
                <p className="text-neutral-500">Zur Ostsee 12, 18236 Wichmannsdorf</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-neutral-400">
              <Phone className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">Telefon</p>
                <a href="tel:+4915679611096" className="text-neutral-500 hover:text-emerald-400 transition-colors">015679 611096</a>
              </div>
            </div>
            <div className="flex items-start gap-3 text-neutral-400">
              <Mail className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">E-Mail</p>
                <a href="mailto:kontakt@converix.info" className="text-neutral-500 hover:text-emerald-400 transition-colors">kontakt@converix.info</a>
              </div>
            </div>
            <div className="flex items-start gap-3 text-neutral-400">
              <Linkedin className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ertancelik-converix" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-emerald-400 transition-colors">Ertan Çelik</a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   FOOTER
   ────────────────────────────────────────── */
function DatenschutzDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5" />
          Datenschutz
        </button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-950 border-white/10 text-neutral-200 max-w-2xl sm:max-w-3xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Datenschutzerklärung</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[65vh] pr-3">
          <div className="space-y-6 text-sm text-neutral-400 leading-relaxed">
            <div>
              <h3 className="text-white font-semibold mb-2">1. Verantwortlicher</h3>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist Converix, vertreten durch Ertan Çelik. Bei Fragen zum Datenschutz kontaktieren Sie uns über das Kontaktformular auf dieser Seite.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">2. Erhebung und Speicherung personenbezogener Daten</h3>
              <p>Beim Aufrufen dieser Website werden durch den Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert: IP-Adresse des anfragenden Rechners, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">3. Kontaktformular</h3>
              <p>Das Kontaktformular auf dieser Seite funktioniert über einen mailto-Link. Wenn Sie auf &quot;E-Mail öffnen&quot; klicken, wird Ihr lokales E-Mail-Programm geöffnet und die eingegebenen Daten werden in die E-Mail übertragen. Die Daten werden dabei nicht auf unserem Server gespeichert. Die Übermittlung erfolgt direkt von Ihrem Gerät an kontakt@converix.info. Eine Verarbeitung der Daten durch uns findet erst statt, wenn die E-Mail bei uns eingeht und wir zur Bearbeitung der Anfrage tätig werden (Art. 6 Abs. 1 lit. b DSGVO).</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">4. Cookies</h3>
              <p>Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind. Eine Einwilligung ist hierfür nicht erforderlich.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">5. Weitergabe von Daten</h3>
              <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn: Sie Ihre ausdrückliche Einwilligung dazu erteilt haben, die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist, eine gesetzliche Verpflichtung zur Weitergabe besteht.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">6. Ihre Rechte</h3>
              <p>Sie haben das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">7. SSL-Verschlüsselung</h3>
              <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
            </div>
            <p className="text-neutral-600 text-xs pt-4">Stand: Juni 2025</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function ImpressumDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" />
          Impressum
        </button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-950 border-white/10 text-neutral-200 max-w-2xl sm:max-w-3xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Impressum</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[65vh] pr-3">
          <div className="space-y-6 text-sm text-neutral-400 leading-relaxed">
            <div>
              <h3 className="text-white font-semibold mb-2">Angaben gemäß § 5 TMG</h3>
              <p>Converix<br />vertreten durch Ertan Çelik<br />Zur Ostsee 12<br />18236 Wichmannsdorf</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Kontakt</h3>
              <p>Telefon: 015679 611096<br />E-Mail: kontakt@converix.info<br />Website: www.converix.eu<br />LinkedIn: <span className="text-emerald-400">linkedin.com/in/ertancelik-converix</span></p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Umsatzsteuer-ID</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [wird nachgereicht]</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p>Ertan Çelik<br />Converix<br />Zur Ostsee 12<br />18236 Wichmannsdorf</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Haftungsausschluss</h3>
              <p><strong className="text-neutral-300">Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
              <p className="mt-3"><strong className="text-neutral-300">Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Urheberrecht</h3>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Streitschlichtung</h3>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <span className="text-emerald-400">https://ec.europa.eu/consumers/odr/</span>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
            <p className="text-neutral-600 text-xs pt-4">Stand: Juni 2025</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-lg font-bold text-white">converix</span>
          </div>

          {/* Tagline */}
          <p className="text-neutral-500 text-sm text-center">
            Remote Chatting · Appointment Setting · Kundenbeziehungen
          </p>

          {/* Copyright */}
          <p className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} Converix. Alle Rechte vorbehalten.
          </p>
        </div>

        {/* Social engagement note */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Heart className="w-4 h-4 text-amber-500" />
            <span className="text-neutral-500 text-sm">
              Mitgründer von{" "}
              <a href="https://dekafok.org.tr/" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-medium hover:underline">DEKAFOK</a> —
              Engagement für Meeresschildkröten & Mittelmeerrobben
            </span>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <DatenschutzDialog />
          <ImpressumDialog />
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────
   PAGE
   ────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Services />
        <Story />
        <Values />
        <Strengths />
        <TargetAudience />
        <Process />
        <Perspective />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}