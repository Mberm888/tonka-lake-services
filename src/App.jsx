import React, { useEffect, useMemo, useState } from "react";
import {
  Anchor,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Droplets,
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
  X,
} from "lucide-react";

const COMPANY = {
  name: "Tonka Lake Services",
  tagline: "Dock, Boat & Jet Ski Cleaning on Lake Minnetonka",
  phone: "(952) 262-9839",
  phoneDigits: "9522629839",
  email: "tonkalakeservices@gmail.com",
  area: "Lake Minnetonka, Wayzata, Minnetonka, Excelsior, Orono, Shorewood & surrounding lake homes",
};

const navItems = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "Pricing", href: "pricing" },
  { label: "About", href: "about" },
  { label: "Gallery", href: "gallery" },
  { label: "Contact", href: "contact" },
];

const services = [
  {
    title: "Dock Pressure Washing",
    description:
      "Refresh slippery, dirty, pollen-covered, or weathered dock surfaces before lake season starts.",
    price: "Starting at $175",
    icon: Droplets,
    bullets: [
      "Wood, composite & aluminum dock surfaces",
      "Light algae and dirt removal",
      "Before-and-after photo proof",
    ],
  },
  {
    title: "Jet Ski Wash & Detail",
    description:
      "Clean Sea-Doo, Yamaha, Kawasaki, and other personal watercraft so they look fresh at the dock.",
    price: "Starting at $95",
    icon: Waves,
    bullets: ["Exterior wash", "Seat and footwell wipe-down", "Water spot cleanup"],
  },
  {
    title: "Boat Exterior Wash",
    description:
      "Mobile boat washing for pontoons, wake boats, bowriders, fishing boats, and cruisers.",
    price: "Starting at $8/ft",
    icon: Anchor,
    bullets: ["Hull-side wash", "Deck and platform rinse", "Windows and trim wipe-down"],
  },
  {
    title: "Lift & Canopy Cleaning",
    description:
      "Get the lift area cleaned up for the season with light wash-downs and grime removal.",
    price: "Starting at $125",
    icon: ShieldCheck,
    bullets: ["Lift frame rinse", "Canopy edge cleanup", "Dock-side access work"],
  },
  {
    title: "Lakefront Spring Cleanup",
    description:
      "Season-opening cleanup for lake homes, docks, patios, and shoreline areas.",
    price: "Starting at $150",
    icon: Sparkles,
    bullets: ["Leaves, sticks and debris", "Patio/dock furniture rinse", "Lake-ready final sweep"],
  },
  {
    title: "Outdoor Labor & Hauling",
    description:
      "Simple outdoor work for lake homes that need an extra set of hands before guests arrive.",
    price: "Starting at $60/hr",
    icon: Clock,
    bullets: ["Branch/stick removal", "Small hauling jobs", "Garage-to-dock setup help"],
  },
];

const packages = [
  {
    name: "Jet Ski Refresh",
    price: "$95–$175",
    bestFor: "Best for Sea-Doos and personal watercraft",
    includes: [
      "Exterior wash",
      "Seat and footwell wipe-down",
      "Water spot cleanup",
      "Photo proof when finished",
    ],
  },
  {
    name: "Lake Ready Package",
    price: "$299–$499",
    bestFor: "Best for most lake homes before summer",
    featured: true,
    includes: [
      "Small/medium dock wash",
      "One jet ski or small boat rinse",
      "Light debris cleanup",
      "Fast photo-based estimate",
    ],
  },
  {
    name: "Full Dock + Boat Day",
    price: "$650+",
    bestFor: "Best for bigger lakefront properties",
    includes: [
      "Large dock cleaning",
      "Boat exterior wash",
      "Lift/canopy rinse",
      "Outdoor cleanup add-ons",
    ],
  },
];

const pricingRows = [
  ["Jet ski basic wash", "$95–$125", "Great for regular cleanups"],
  ["Jet ski deep clean", "$150–$225", "More grime, seats, footwells and detail work"],
  ["Boat exterior wash", "$8–$12/ft", "Depends on size and condition"],
  ["Pontoon wash", "$225–$425", "Bigger decks and railings take longer"],
  ["Small dock wash", "$175–$275", "Simple dock or swim platform"],
  ["Large dock wash", "$300–$650+", "Multiple sections, slips, lifts, or heavy grime"],
  ["Lift/canopy cleanup", "$125–$300", "Quote depends on access and size"],
  ["Lakefront spring cleanup", "$150–$450+", "Debris, patio, furniture, dock area"],
  ["Outdoor labor", "$60/hr", "2-hour minimum recommended"],
];

const faqs = [
  {
    q: "Do you bring your own equipment?",
    a: "Yes. The quote can be based on the job, water access, power access, and the exact surfaces being cleaned.",
  },
  {
    q: "Do I need to be home?",
    a: "Not always. For many dock, boat, and jet ski jobs, you can send photos and access instructions. You receive photos when the work is finished.",
  },
  {
    q: "Do you use soap or chemicals?",
    a: "The default is lake-conscious cleaning with careful runoff control. Any cleaner should be approved before use, especially near the water.",
  },
  {
    q: "How do I get a quote?",
    a: "Send photos of the dock, boat, jet ski, or lakefront area with your location and what you want cleaned. You will get a simple quote back.",
  },
  {
    q: "What areas do you serve?",
    a: "Lake Minnetonka and nearby areas including Wayzata, Minnetonka, Excelsior, Orono, Shorewood, Deephaven, Woodland, and Tonka Bay.",
  },
];

const reviews = [
  {
    name: "Lake Home Owner",
    text: "The dock looked ready for the season and the whole process was simple.",
  },
  {
    name: "Boat Owner",
    text: "Great for a fast clean before a weekend on the lake.",
  },
  {
    name: "Minnetonka Family",
    text: "Easy estimate, good communication, and clean finish photos.",
  },
];

function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-blue-800 shadow-lg shadow-blue-900/20">
        <div className="absolute inset-x-2 bottom-2 h-2 rounded-full bg-white/90" />
        <div className="absolute left-2 right-2 top-3 h-2 rounded-full border-2 border-white/90" />
        <Waves className="absolute bottom-1 left-2 h-8 w-8 text-white" strokeWidth={2.4} />
      </div>
      <div className="leading-tight">
        <div className={`text-xl font-black tracking-tight ${dark ? "text-white" : "text-slate-950"}`}>
          Tonka
        </div>
        <div className={`text-sm font-bold uppercase tracking-[0.22em] ${dark ? "text-sky-100" : "text-blue-700"}`}>
          Lake Services
        </div>
      </div>
    </div>
  );
}

function PageShell({ page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (href) => {
    window.location.hash = href;
    setPage(href);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => go("home")} className="text-left" aria-label="Go to home page">
            <Logo />
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  page === item.href
                    ? "bg-blue-700 text-white shadow-md shadow-blue-900/15"
                    : "text-slate-700 hover:bg-sky-50 hover:text-blue-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${COMPANY.phoneDigits}`}
              className="rounded-full border border-sky-200 px-4 py-2 text-sm font-bold text-blue-800 hover:bg-sky-50"
            >
              {COMPANY.phone}
            </a>
            <button
              onClick={() => go("contact")}
              className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 hover:bg-blue-800"
            >
              Free Estimate
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-xl border border-sky-100 p-2 md:hidden"
            aria-label="Open menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-sky-100 bg-white px-5 py-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="rounded-xl px-4 py-3 text-left font-bold text-slate-800 hover:bg-sky-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <main>{renderPage(page, go)}</main>
      <Footer go={go} />
    </>
  );
}

function Hero({ go }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-900 shadow-sm">
            <Waves className="h-4 w-4" /> Lake Minnetonka Cleaning Service
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Make your dock, boat, and jet ski look <span className="text-blue-700">lake-ready.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Premium mobile cleaning for docks, boats, jet skis, lifts, patios, and lakefront properties around Lake Minnetonka.
            Call or text {COMPANY.phone} for a fast photo estimate.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-4 font-black text-white shadow-xl shadow-blue-900/20 hover:bg-blue-800"
            >
              Get a Free Estimate <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => go("pricing")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white px-7 py-4 font-black text-blue-800 shadow-sm hover:bg-sky-50"
            >
              See Pricing
            </button>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Fast photo quotes", "Blue & white clean finish", "Lake-conscious process"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/80 p-3 text-sm font-bold text-slate-700 shadow-sm">
                <BadgeCheck className="h-5 w-5 text-blue-700" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-blue-950/20">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-sky-500 to-cyan-300 p-6 text-white">
              <div className="flex items-center justify-between">
                <Logo dark />
                <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-widest">
                  Lake Ready
                </div>
              </div>

              <div className="mt-16 rounded-3xl bg-white/15 p-5 backdrop-blur-md">
                <div className="text-sm font-bold uppercase tracking-widest text-sky-50">Popular Package</div>
                <div className="mt-2 text-4xl font-black">$299+</div>
                <p className="mt-2 text-sky-50">Dock wash + light cleanup + jet ski or small boat rinse.</p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4 text-slate-900">
                  <div className="text-2xl font-black">24 hr</div>
                  <div className="text-sm font-semibold text-slate-600">estimate goal</div>
                </div>
                <div className="rounded-2xl bg-white p-4 text-slate-900">
                  <div className="text-2xl font-black">6+</div>
                  <div className="text-sm font-semibold text-slate-600">service options</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-sky-200/60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">{eyebrow}</div>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function TrustStrip() {
  const items = [
    [Phone, "Call or text", COMPANY.phone],
    [Mail, "Fast estimates", COMPANY.email],
    [ShieldCheck, "Careful process", "Clear quote before work"],
    [BadgeCheck, "Local focus", "Lake Minnetonka area"],
  ];

  return (
    <section className="bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {items.map(([Icon, label, detail]) => (
          <div key={label} className="flex items-center gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-blue-800">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-wider text-blue-700">{label}</div>
              <div className="mt-1 text-sm font-bold text-slate-700">{detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    ["Premium lake-home look", "White-and-blue branding, clean communication, and before-and-after photos make the service feel professional."],
    ["Simple photo quotes", "Customers can text photos first so the job is easier to price and schedule."],
    ["Respectful around the water", "Work should be done carefully near docks, lifts, boats, and the shoreline."],
    ["Built for busy weekends", "Perfect for families who want the dock, boat, and jet skis ready before guests arrive."],
  ];

  return (
    <section className="bg-sky-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A cleaner, more professional lake service."
          text="The goal is simple: make the property look ready for summer without the customer wasting a weekend cleaning it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([title, text]) => (
            <div key={title} className="rounded-[2rem] bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetyStandardsSection() {
  const standards = [
    "No surprise pricing after the job starts",
    "Photos before and after whenever possible",
    "Pressure adjusted for the surface being cleaned",
    "No harsh runoff into the lake without approval",
    "Respect for docks, lifts, boats, covers, seats, and property",
    "Customer approves the exact work before cleaning begins",
  ];

  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">Standards</div>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">How we keep it legit.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A professional service should be clear, careful, and easy to trust. These standards make the company feel serious from day one.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {standards.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-sky-100 bg-sky-50 p-5 font-bold text-slate-700">
              <ShieldCheck className="h-6 w-6 shrink-0 text-blue-700" /> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  const areas = [
    "Wayzata",
    "Orono",
    "Minnetonka",
    "Excelsior",
    "Deephaven",
    "Shorewood",
    "Woodland",
    "Tonka Bay",
    "Spring Park",
    "Mound",
    "Minnetrista",
    "Long Lake",
  ];

  return (
    <section className="bg-slate-950 px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">Service Area</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Lake Minnetonka and nearby lake homes.</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-sky-50">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview({ go }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Everything your lake setup needs."
          text="Start with the simple jobs people actually need before and during summer."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-blue-800 group-hover:bg-blue-700 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="text-xl font-black text-slate-950">{service.title}</div>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                <div className="mt-5 font-black text-blue-700">{service.price}</div>

                <button onClick={() => go("services")} className="mt-5 inline-flex items-center gap-2 font-black text-slate-900 hover:text-blue-700">
                  Learn more <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PackagesSection({ go }) {
  return (
    <section className="bg-slate-950 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Packages"
          title="Simple packages customers understand."
          text="Use packages to make quoting easier and make the business feel more premium."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-[2rem] border p-7 ${
                pkg.featured ? "border-sky-300 bg-blue-700 shadow-2xl shadow-blue-500/20" : "border-white/10 bg-white/5"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-7 rounded-full bg-white px-4 py-1 text-sm font-black text-blue-700">
                  Most Popular
                </div>
              )}

              <div className="text-2xl font-black">{pkg.name}</div>
              <div className="mt-2 text-sm font-semibold text-sky-100">{pkg.bestFor}</div>
              <div className="mt-6 text-4xl font-black">{pkg.price}</div>

              <div className="mt-6 space-y-3">
                {pkg.includes.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold text-sky-50">
                    <Check className="h-5 w-5 shrink-0" /> {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => go("contact")}
                className={`mt-8 w-full rounded-2xl px-5 py-4 font-black ${
                  pkg.featured ? "bg-white text-blue-800" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Request this package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage({ go }) {
  return (
    <>
      <Hero go={go} />
      <TrustStrip />
      <ServicesPreview go={go} />
      <WhyChooseSection />
      <PackagesSection go={go} />
      <ProcessSection />
      <SafetyStandardsSection />
      <ServiceAreaSection />
      <ReviewsSection />
      <CTA go={go} />
    </>
  );
}

function ServicesPage({ go }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What We Do"
          title="Detailed services for lake homes."
          text="Each job gets quoted based on size, condition, access, and whether it needs a basic rinse or deeper clean."
        />

        <div className="mt-14 grid gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="grid overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-sm lg:grid-cols-[.8fr_1.2fr]">
                <div className={`p-8 text-white ${i % 2 === 0 ? "bg-blue-700" : "bg-slate-950"}`}>
                  <Icon className="h-12 w-12" />
                  <h2 className="mt-6 text-3xl font-black">{service.title}</h2>
                  <p className="mt-3 text-sky-50">{service.description}</p>
                  <div className="mt-6 inline-flex rounded-full bg-white px-4 py-2 font-black text-blue-800">{service.price}</div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-950">What’s included</h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3 rounded-2xl bg-sky-50 p-4 font-bold text-slate-700">
                        <Check className="h-5 w-5 text-blue-700" /> {bullet}
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 leading-7 text-slate-600">
                    Best for customers who want their lake setup cleaned without wasting a full weekend doing it themselves.
                    For delicate surfaces, the pressure level should be adjusted and tested first.
                  </p>

                  <button onClick={() => go("contact")} className="mt-6 rounded-2xl bg-blue-700 px-6 py-3 font-black text-white hover:bg-blue-800">
                    Get quote for this service
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingPage({ go }) {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Clear starter prices."
          text="Keep prices simple, then final quote by photos, size, grime level, access, and travel time."
        />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-xl shadow-blue-950/5">
          <div className="grid grid-cols-3 bg-blue-700 px-5 py-4 text-sm font-black uppercase tracking-wider text-white">
            <div>Service</div>
            <div>Price</div>
            <div>Notes</div>
          </div>

          {pricingRows.map((row, index) => (
            <div key={row[0]} className={`grid grid-cols-3 gap-4 px-5 py-5 text-sm ${index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}`}>
              <div className="font-black text-slate-950">{row[0]}</div>
              <div className="font-black text-blue-700">{row[1]}</div>
              <div className="text-slate-600">{row[2]}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-[2rem] border p-7 ${
                pkg.featured ? "border-blue-700 bg-blue-700 text-white shadow-xl shadow-blue-900/20" : "border-sky-100 bg-white"
              }`}
            >
              <div className="text-2xl font-black">{pkg.name}</div>
              <div className={`mt-2 text-sm font-bold ${pkg.featured ? "text-sky-100" : "text-slate-500"}`}>{pkg.bestFor}</div>
              <div className="mt-6 text-4xl font-black">{pkg.price}</div>

              <div className="mt-6 space-y-3">
                {pkg.includes.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-bold">
                    <Check className="h-5 w-5 shrink-0" /> {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => go("contact")}
                className={`mt-8 w-full rounded-2xl px-5 py-4 font-black ${pkg.featured ? "bg-white text-blue-800" : "bg-blue-700 text-white"}`}
              >
                Get quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage({ go }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="sticky top-28 rounded-[2rem] bg-gradient-to-br from-blue-700 to-sky-400 p-8 text-white shadow-2xl shadow-blue-950/20">
            <Logo dark />
            <h1 className="mt-10 text-5xl font-black tracking-tight">Local. Clean. Lake-ready.</h1>
            <p className="mt-5 leading-8 text-sky-50">
              Tonka Lake Services helps lake homeowners save time and start summer with a clean dock, boat, jet ski, and shoreline setup.
            </p>
            <button onClick={() => go("contact")} className="mt-8 rounded-2xl bg-white px-6 py-4 font-black text-blue-800">
              Request an estimate
            </button>
          </div>
        </div>

        <div>
          <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">About Us</div>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Built for Lake Minnetonka homes.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This company is designed around what lake homeowners actually need: docks cleaned before guests arrive, jet skis looking sharp,
            boats washed after sitting outside, and lakefront spaces cleaned up after spring weather.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Photo-based quotes", "Fast scheduling", "Clean white-and-blue branding", "Respectful property cleanup"].map((item) => (
              <div key={item} className="rounded-2xl border border-sky-100 bg-sky-50 p-5 font-black text-slate-800">
                <BadgeCheck className="mb-3 h-6 w-6 text-blue-700" /> {item}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-950">Professional promise</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Every job should be quoted clearly before work starts. Customers should know what is included, what costs extra,
              and what the final goal is. Use before-and-after photos so the customer can see the value right away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryPage({ go }) {
  const cards = [
    ["Dock Wash", "Before-and-after dock surface cleaning"],
    ["Jet Ski Detail", "Exterior shine, seat wipe-down, and water spot cleanup"],
    ["Boat Wash", "Hull-side and platform cleaning for weekend-ready boats"],
    ["Spring Cleanup", "Leaves, sticks, pollen, patio, and lakefront debris"],
    ["Lift Area", "Lift, canopy edge, and dock-side cleanup"],
    ["Premium Finish", "Clean photos delivered when the job is done"],
  ];

  return (
    <section className="bg-sky-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="Show the clean result."
          text="Replace these placeholders with real before-and-after photos as soon as you do your first jobs."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(([title, caption], i) => (
            <div key={title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <div
                className={`h-64 bg-gradient-to-br ${
                  i % 3 === 0
                    ? "from-blue-800 via-sky-500 to-cyan-200"
                    : i % 3 === 1
                    ? "from-slate-950 via-blue-700 to-sky-300"
                    : "from-sky-300 via-white to-blue-600"
                }`}
              >
                <div className="flex h-full items-center justify-center p-8 text-center text-3xl font-black text-white drop-shadow-lg">
                  {title}
                </div>
              </div>

              <div className="p-6">
                <div className="text-xl font-black text-slate-950">{title}</div>
                <p className="mt-2 leading-7 text-slate-600">{caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 text-center shadow-sm">
          <h3 className="text-2xl font-black text-slate-950">Photo tip</h3>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-slate-600">
            Take every photo from the same angle before and after. That makes your website and Instagram look way more professional.
          </p>
          <button onClick={() => go("contact")} className="mt-6 rounded-2xl bg-blue-700 px-6 py-4 font-black text-white">
            Book a first cleanup
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Dock pressure washing",
    message: "",
  });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Free estimate request - ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\nJob details:\n${form.message}\n\nPhotos: Please attach photos of the dock, boat, jet ski, or lakefront area.`
    );
    return `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <section className="bg-gradient-to-b from-white to-sky-50 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">Contact</div>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">Get a free estimate.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Send photos of what you want cleaned. The fastest quotes include the address/area, service needed, size, and a few clear pictures.
          </p>

          <div className="mt-8 grid gap-4">
            <a href={`tel:${COMPANY.phoneDigits}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 font-black text-slate-900 shadow-sm hover:bg-sky-50">
              <Phone className="h-6 w-6 text-blue-700" /> {COMPANY.phone}
            </a>

            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 font-black text-slate-900 shadow-sm hover:bg-sky-50">
              <Mail className="h-6 w-6 text-blue-700" /> {COMPANY.email}
            </a>

            <a href={`sms:${COMPANY.phoneDigits}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 font-black text-slate-900 shadow-sm hover:bg-sky-50">
              <Phone className="h-6 w-6 text-blue-700" /> Text photos for a quote
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 font-bold text-slate-700 shadow-sm">
              <CalendarDays className="h-6 w-6 shrink-0 text-blue-700" /> {COMPANY.area}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-xl shadow-blue-950/5">
          <h2 className="text-2xl font-black text-slate-950">Estimate Form</h2>
          <p className="mt-2 text-slate-600">This opens an email with the job details already filled in.</p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 font-bold text-slate-800">
              Your name
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-2xl border border-sky-100 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Michael"
              />
            </label>

            <label className="grid gap-2 font-bold text-slate-800">
              Phone number
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-2xl border border-sky-100 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="(952) 000-0000"
              />
            </label>

            <label className="grid gap-2 font-bold text-slate-800">
              Service
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="rounded-2xl border border-sky-100 px-4 py-3 outline-none focus:border-blue-500"
              >
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Lake Ready Package</option>
                <option>Outdoor Labor & Hauling</option>
              </select>
            </label>

            <label className="grid gap-2 font-bold text-slate-800">
              Job details
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="rounded-2xl border border-sky-100 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Example: 2 jet skis at a dock in Wayzata, need exterior wash and seats cleaned. Also want the dock rinsed before Memorial Day weekend."
              />
            </label>

            <a href={mailto} className="rounded-2xl bg-blue-700 px-6 py-4 text-center font-black text-white shadow-lg shadow-blue-900/20 hover:bg-blue-800">
              Send Estimate Email
            </a>

            <p className="text-sm leading-6 text-slate-500">
              After clicking, attach photos before sending the email. Your quote will be based on size, access, and condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    ["1", "Send photos", "Send photos of your dock, boat, jet ski, lift, or lakefront area."],
    ["2", "Get a quote", "You receive a simple price based on size, grime level, and access."],
    ["3", "We clean", "The work is completed carefully with lake-conscious cleanup."],
    ["4", "Photo proof", "You get finished photos so you can see exactly what was done."],
  ];

  return (
    <section className="bg-sky-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Process" title="How it works." text="Simple enough for customers to understand in 10 seconds." />

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map(([num, title, text]) => (
            <div key={num} className="rounded-[2rem] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-xl font-black text-white">
                {num}
              </div>
              <div className="mt-5 text-xl font-black text-slate-950">{title}</div>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Trust" title="Built to feel premium." text="Once you get real customers, replace these with real reviews." />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-sm">
              <div className="flex gap-1 text-blue-700">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-lg font-semibold leading-8 text-slate-700">“{review.text}”</p>
              <div className="mt-5 font-black text-slate-950">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Questions customers will ask." />

        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <h3 className="text-lg font-black text-slate-950">{faq.q}</h3>
              <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ go }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-800 via-blue-700 to-sky-400 p-8 text-white shadow-2xl shadow-blue-950/20 lg:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.25em] text-sky-100">Ready for summer</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Get your lake setup cleaned before the weekend.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-sky-50">
              Send photos, pick a service, and get a simple quote for your dock, boat, jet ski, or lakefront cleanup.
            </p>
          </div>

          <button onClick={() => go("contact")} className="rounded-2xl bg-white px-8 py-4 font-black text-blue-800 shadow-lg">
            Get Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer({ go }) {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            Dock, boat, jet ski, lift, and lakefront cleaning around Lake Minnetonka. White-and-blue premium service built for summer.
          </p>

          <div className="mt-5 flex gap-3">
            <a className="rounded-full bg-white/10 p-3 hover:bg-white/20" href="#">
              <Instagram className="h-5 w-5" />
            </a>
            <a className="rounded-full bg-white/10 p-3 hover:bg-white/20" href="#">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <div className="font-black">Pages</div>
          <div className="mt-4 grid gap-3 text-slate-300">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => go(item.href)} className="text-left hover:text-white">
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-black">Contact</div>
          <div className="mt-4 grid gap-3 text-slate-300">
            <a href={`tel:${COMPANY.phoneDigits}`} className="hover:text-white">
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
              {COMPANY.email}
            </a>
            <span>{COMPANY.area}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        © {new Date().getFullYear()} Tonka Lake Services. All rights reserved. Prices are starting estimates and may change based on size, access, and condition.
      </div>
    </footer>
  );
}

function renderPage(page, go) {
  switch (page) {
    case "services":
      return (
        <>
          <ServicesPage go={go} />
          <FAQSection />
          <CTA go={go} />
        </>
      );
    case "pricing":
      return (
        <>
          <PricingPage go={go} />
          <FAQSection />
          <CTA go={go} />
        </>
      );
    case "about":
      return (
        <>
          <AboutPage go={go} />
          <ProcessSection />
          <CTA go={go} />
        </>
      );
    case "gallery":
      return (
        <>
          <GalleryPage go={go} />
          <CTA go={go} />
        </>
      );
    case "contact":
      return <ContactPage />;
    case "home":
    default:
      return <HomePage go={go} />;
  }
}

export default function App() {
  const [page, setPage] = useState(() => (window.location.hash || "#home").replace("#", ""));

  useEffect(() => {
    document.title = "Tonka Lake Services | Dock, Boat & Jet Ski Cleaning";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Tonka Lake Services offers dock pressure washing, boat washing, jet ski cleaning, lift cleaning, and lakefront cleanup around Lake Minnetonka."
    );

    const onHash = () => setPage((window.location.hash || "#home").replace("#", ""));
    window.addEventListener("hashchange", onHash);

    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return <PageShell page={page} setPage={setPage} />;
}
