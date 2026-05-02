import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Clock,
  Wrench,
  Battery,
  Smartphone,
  Unlock,
  Headphones,
  MapPin,
  Mail,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Award,
} from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";

const PHONE = "+382 67 285 299";
const PHONE_RAW = "+38267285299";
const WHATSAPP = `https://wa.me/38267285299?text=${encodeURIComponent("Zdravo, treba mi servis telefona.")}`;
const VIBER = `viber://chat?number=%2B38267285299`;
const ADDRESS = "Vučedolska 1, Podgorica, Crna Gora";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Vu%C4%8Dedolska+1,+Podgorica,+Montenegro&output=embed";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "3G Mobile",
  image: "https://3gmobile.me/og-image.jpg",
  "@id": "https://3gmobile.me",
  url: "https://3gmobile.me",
  telephone: PHONE_RAW,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vučedolska 1",
    addressLocality: "Podgorica",
    addressCountry: "ME",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.4411,
    longitude: 19.2636,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  areaServed: "Podgorica",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Servis mobilnih telefona Podgorica | 3G Mobile" },
      {
        name: "description",
        content:
          "Brza i pouzdana popravka telefona u Podgorici. Zamjena ekrana, baterija i servis svih modela. Pozovite +382 67 285 299.",
      },
      {
        name: "keywords",
        content:
          "servis telefona Podgorica, popravka telefona Podgorica, zamjena ekrana Podgorica, zamjena baterije, otključavanje telefona, 3G Mobile",
      },
      { property: "og:title", content: "Servis mobilnih telefona Podgorica | 3G Mobile" },
      {
        property: "og:description",
        content:
          "Brza i pouzdana popravka telefona u Podgorici. Zamjena ekrana, baterija i servis svih modela.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sr_ME" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyUs />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]">
            <Smartphone className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">3G Mobile</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <a href="#usluge" className="text-muted-foreground transition-colors hover:text-foreground">Usluge</a>
          <a href="#o-nama" className="text-muted-foreground transition-colors hover:text-foreground">O nama</a>
          <a href="#zasto-mi" className="text-muted-foreground transition-colors hover:text-foreground">Zašto mi</a>
          <a href="#kontakt" className="text-muted-foreground transition-colors hover:text-foreground">Kontakt</a>
        </nav>
        <a
          href={`tel:${PHONE_RAW}`}
          className="hidden items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105 sm:inline-flex"
        >
          <Phone className="h-4 w-4" /> Pozovi odmah
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-[0.06]" aria-hidden />
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            <Zap className="h-3.5 w-3.5" /> Popravke u roku od 24h
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Brz i pouzdan{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              servis mobilnih telefona
            </span>{" "}
            u Podgorici
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Zamjena ekrana, baterija, popravka hardvera i softvera, otključavanje uređaja —
            sve na jednom mjestu, po pristupačnim cijenama.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" /> Pozovi odmah
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/10 bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-5 w-5" /> Pošalji poruku
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Garancija na servis</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Originalni dijelovi</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Centar Podgorice</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" aria-hidden />
          <img
            src={heroImage}
            alt="Servis mobilnih telefona u Podgorici - zamjena ekrana"
            className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Clock, label: "Servis isti dan" },
    { icon: ShieldCheck, label: "Garancija na popravku" },
    { icon: Award, label: "Iskusni majstori" },
    { icon: MapPin, label: "Centar Podgorice" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card text-primary shadow-[var(--shadow-card)]">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-nama" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">O nama</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Vaš pouzdan servis telefona u srcu Podgorice
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            <strong className="text-foreground">3G Mobile</strong> je specijalizovan servis za
            mobilne telefone u Podgorici. Bavimo se zamjenom ekrana, baterija, popravkom
            hardverskih i softverskih kvarova, otključavanjem uređaja i prodajom dodatne opreme.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Naš fokus je na <strong className="text-foreground">brzini, kvalitetu i pristupačnim cijenama</strong>. 
            Većina popravki završava se u roku od 24 sata — često istog dana.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { n: "5+", l: "godina iskustva" },
            { n: "10k+", l: "popravljenih uređaja" },
            { n: "24h", l: "prosječno čekanje" },
            { n: "100%", l: "garancija servisa" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div className="bg-[image:var(--gradient-primary)] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {s.n}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Smartphone,
    title: "Zamjena ekrana telefona",
    desc: "Zamjena polomljenih i napuklih ekrana za sve modele iPhone, Samsung, Xiaomi, Huawei i druge — uz originalne dijelove.",
  },
  {
    icon: Battery,
    title: "Zamjena baterije telefona",
    desc: "Profesionalna zamjena baterije sa garancijom. Vratite izdržljivost svom telefonu u roku od sat vremena.",
  },
  {
    icon: Wrench,
    title: "Popravka mobilnih telefona",
    desc: "Popravka hardverskih i softverskih kvarova: matična ploča, konektor za punjenje, kamera, zvučnik, mikrofon.",
  },
  {
    icon: Unlock,
    title: "Otključavanje telefona",
    desc: "Sigurno otključavanje telefona od mreže i softverskih ograničenja — brzo i pouzdano.",
  },
  {
    icon: Headphones,
    title: "Oprema za telefone",
    desc: "Maske, zaštitna stakla, punjači, kablovi i slušalice — kvalitetna oprema po povoljnim cijenama.",
  },
  {
    icon: Zap,
    title: "Dijagnostika i savjet",
    desc: "Besplatna dijagnostika kvara i iskren savjet — plaćate samo ako odlučite servisirati uređaj.",
  },
];

function Services() {
  return (
    <section id="usluge" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Usluge</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Sve usluge servisa telefona u Podgorici
          </h2>
          <p className="mt-4 text-muted-foreground">
            Od zamjene ekrana do otključavanja — pokrivamo sve potrebe vašeg uređaja.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    { icon: Zap, title: "Brza usluga", desc: "Najveći broj popravki završimo isti dan ili u roku od 24h." },
    { icon: Award, title: "Povoljne cijene", desc: "Transparentne cijene bez skrivenih troškova i besplatna procjena." },
    { icon: ShieldCheck, title: "Iskustvo i pouzdanost", desc: "Godine iskustva i hiljade zadovoljnih klijenata u Podgorici." },
    { icon: MapPin, title: "Centar Podgorice", desc: "Lako dostupna lokacija na Vučedolskoj 1 — uvijek tu kad nam zatrebate." },
  ];
  return (
    <section id="zasto-mi" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Zašto baš mi</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Razlozi zašto nas klijenti biraju
        </h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Lokacija</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Posjetite nas u centru Podgorice
            </h2>
            <p className="mt-4 text-muted-foreground">
              Naša radnja se nalazi na pristupačnoj lokaciji u centru grada — lako dostupna pješice i autom.
            </p>
            <div className="mt-6 space-y-3 text-base">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{ADDRESS}</span>
              </div>
              <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-3 font-semibold transition-colors hover:text-primary">
                <Phone className="h-5 w-5 text-primary" />
                {PHONE}
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Pon–Sub: 09:00 – 20:00</span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Lokacija 3G Mobile, Vučedolska 1, Podgorica"
              src={MAPS_EMBED}
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-primary-foreground sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Treba vam servis telefona?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
          Pozovite nas ili pošaljite poruku — odgovaramo brzo i procjena je besplatna.
        </p>
        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 text-base font-bold text-primary shadow-xl transition-transform hover:scale-105 sm:w-auto"
          >
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <a
            href={VIBER}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" /> Viber
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-primary-foreground/80">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {ADDRESS}</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Pon–Sub: 09–20h</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card pb-24 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
              <Smartphone className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold">3G Mobile</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Servis mobilnih telefona u Podgorici. Brzo, pouzdano, povoljno.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Kontakt</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><a href={`tel:${PHONE_RAW}`} className="hover:text-foreground">{PHONE}</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{ADDRESS}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />info@3gmobile.me</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Radno vrijeme</h3>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>Ponedjeljak – Petak: 09:00 – 20:00</li>
            <li>Subota: 09:00 – 17:00</li>
            <li>Nedjelja: zatvoreno</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} 3G Mobile. Sva prava zadržana.
      </div>
    </footer>
  );
}

function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-2xl backdrop-blur-lg md:hidden">
      <div className="flex gap-2">
        <a
          href={`tel:${PHONE_RAW}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-elegant)]"
        >
          <Phone className="h-4 w-4" /> Pozovi
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-border bg-card px-4 py-3 text-sm font-bold"
        >
          <MessageCircle className="h-4 w-4" /> Poruka
        </a>
      </div>
    </div>
  );
}
