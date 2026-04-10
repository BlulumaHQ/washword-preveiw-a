import { ArrowRight, Sparkles, Clock, BadgeDollarSign, MapPin, ShieldCheck, Repeat, Car, Droplets, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ───── data ───── */

type Bundle = {
  title: string;
  price: string;
  description: string;
  features: string[];
  badge: string;
  badgeStyle: string;
  featured?: boolean;
  availability?: string;
};

const premiumBundles: Bundle[] = [
  {
    title: "4 Best + Polish",
    price: "$96",
    description: "Our most complete soft cloth bundle with added polish and premium finishing care.",
    features: [
      "Undercarriage blast on entry",
      "Presoak plus tri-foam conditioner",
      "Wheel scrub",
      "Soft cloth scrub plus shampoo",
      "Polish with foam cloth",
      "Extreme shine foam arch",
      "High pressure rinse",
      "Body shield wax",
      "Spot free rinse",
    ],
    badge: "Best Value",
    badgeStyle: "bg-primary text-primary-foreground",
    featured: true,
  },
  {
    title: "4 No Touch — BEST",
    price: "$88",
    description: "A premium touch-free bundle for drivers who prefer a contactless wash experience.",
    availability: "Available at: Surrey, Maple Ridge, Richmond, Abbotsford",
    features: [
      "Undercarriage blast on entry",
      "2-step presoak",
      "Tri-foam conditioner",
      "High pressure rinse",
      "Extreme shine foam arch",
      "Spot free rinse",
    ],
    badge: "Touch-Free Premium",
    badgeStyle: "bg-accent text-accent-foreground",
  },
  {
    title: "4 Soft Cloth — BEST",
    price: "$84",
    description: "A premium soft cloth wash bundle with extra shine, wax, and dryer finish.",
    features: [
      "Undercarriage blast on entry",
      "Presoak plus tri-foam conditioner",
      "Wheel scrub",
      "Soft cloth scrub plus shampoo",
      "High pressure rinse",
      "Body shield wax",
      "Spot free rinse",
      "Dryer on exit",
    ],
    badge: "Popular",
    badgeStyle: "bg-primary text-primary-foreground",
  },
];

const valueBundles: Bundle[] = [
  {
    title: "4 No Touch — BETTER",
    price: "$72",
    description: "A strong value touch-free bundle with essential protection and finishing steps.",
    availability: "Available at: Surrey, Maple Ridge, Richmond, Abbotsford",
    features: [
      "Undercarriage blast on entry",
      "2-step presoak",
      "Tri-foam conditioner",
      "High pressure rinse",
      "Body shield wax",
      "Spot free rinse",
    ],
    badge: "Great Value",
    badgeStyle: "bg-secondary text-secondary-foreground",
  },
  {
    title: "4 Soft Cloth — BETTER",
    price: "$68",
    description: "A value-focused soft cloth bundle with wheel wash, foam conditioner, wax, and rinse protection.",
    features: [
      "Undercarriage on entry",
      "Pre soak",
      "Wheel wash",
      "High pressure rinse",
      "Triple foam conditioner",
      "Soft cloth double pass with soap",
      "Velocity clearcoat wax",
      "Spot free rinse",
    ],
    badge: "Everyday Choice",
    badgeStyle: "bg-secondary text-secondary-foreground",
  },
];

const faqs = [
  { q: "Are all bundles available at every location?", a: "Some bundle types are only available at participating Washworld locations." },
  { q: "What is the difference between No Touch and Soft Cloth?", a: "No Touch uses a contact-free wash process, while Soft Cloth includes a more traditional automated wash method." },
  { q: "Do I need the app to purchase a bundle?", a: "Bundles can be promoted online and redeemed according to Washworld's purchase and redemption process." },
  { q: "Can I buy multiple bundles?", a: "Yes, customers can purchase the bundle option that best fits their wash preferences and usage needs." },
];

/* ───── components ───── */

const BundleCard = ({ bundle }: { bundle: Bundle }) => (
  <div className={`relative flex flex-col rounded-2xl border bg-card p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow ${bundle.featured ? "ring-2 ring-primary border-primary" : "border-border"}`}>
    <span className={`absolute -top-3 left-6 text-[11px] font-bold px-4 py-1 rounded-full ${bundle.badgeStyle} shadow-sm`}>
      {bundle.badge}
    </span>
    <div className="mt-2">
      <h3 className="text-lg font-bold text-foreground">{bundle.title}</h3>
      <div className="mt-2">
        <span className="text-4xl font-black text-primary">{bundle.price}</span>
        <span className="ml-1 text-sm text-muted-foreground">/ 4 washes</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{bundle.description}</p>
    </div>

    <ul className="mt-5 space-y-2.5 flex-1">
      {bundle.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-foreground">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          {f}
        </li>
      ))}
    </ul>

    {bundle.availability && (
      <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
        <MapPin className="w-3 h-3" />
        {bundle.availability}
      </p>
    )}

    <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity shadow-md">
      Get This Bundle
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-semibold text-foreground text-[15px]">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
};

/* ───── page ───── */

const BundlePromotions = () => (
  <>
    <Header />
    <main>
      {/* 1 — HERO */}
      <section className="relative bg-wash-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--wash-navy))] via-[hsl(213,60%,22%)] to-[hsl(var(--primary)/0.3)]" />
        <div className="relative container-tight pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Limited-Time Bundle Offers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight tracking-tight">
              Save More with Washworld{" "}
              <span className="text-wash-blue">Bundle Promotions</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
              Prepay for 4 washes and enjoy better value, faster checkout, and premium wash options across participating Washworld locations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#bundles" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-base font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                Shop Bundle Offers
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#wash-types" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground text-base font-bold hover:bg-primary-foreground/20 transition-colors">
                View Wash Types
              </a>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/50">Available at select Washworld locations across BC</p>
          </div>
        </div>
      </section>

      {/* 2 — BENEFITS BAR */}
      <section className="bg-card border-b border-border">
        <div className="container-tight py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: BadgeDollarSign, text: "Better value than single washes" },
              { icon: Repeat, text: "Faster and easier repeat visits" },
              { icon: Sparkles, text: "Premium wash options available" },
              { icon: MapPin, text: "Available at select BC locations" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — BUNDLE GRID */}
      <section className="section-padding bg-background" id="bundles">
        <div className="container-tight">
          {/* Premium */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wash-navy">Premium Bundles</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Our top-tier wash bundles for the best clean and finish.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {premiumBundles.map((b) => <BundleCard key={b.title} bundle={b} />)}
          </div>

          {/* Value */}
          <div className="text-center mt-20 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wash-navy">Value Bundles</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Great everyday options that keep your car clean without breaking the bank.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {valueBundles.map((b) => <BundleCard key={b.title} bundle={b} />)}
          </div>
        </div>
      </section>

      {/* 4 — WASH TYPE EXPLANATION */}
      <section className="section-padding bg-card" id="wash-types">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy mb-12">Understanding Wash Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">No Touch Wash</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for drivers who prefer a contact-free wash process using powerful cleaning technology without physical wash materials touching the vehicle.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Soft Cloth Wash</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for drivers who want a more traditional automatic wash experience with a thorough clean and finishing process.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">Package availability may vary by location.</p>
        </div>
      </section>

      {/* 5 — WHY BUY BUNDLES */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy mb-12">Why Buy a Bundle?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BadgeDollarSign, title: "Save Money", desc: "Save compared to repeat single purchases." },
              { icon: Clock, title: "Convenient", desc: "Convenient for regular drivers who wash often." },
              { icon: Repeat, title: "Easy to Redeem", desc: "Fast and easy to redeem at participating locations." },
              { icon: Sparkles, title: "Consistently Clean", desc: "Great for keeping your vehicle consistently clean." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — FAQ */}
      <section className="section-padding bg-card">
        <div className="container-tight max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy mb-10">Frequently Asked Questions</h2>
          <div className="border-t border-border">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* 7 — FINAL CTA */}
      <section className="bg-wash-navy py-20 md:py-28 px-4">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Choose Your Bundle and Wash Smarter
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-lg mx-auto text-lg">
            Find the wash package that matches your vehicle care preference and get better value on repeat visits.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#bundles" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-base font-bold hover:opacity-90 transition-opacity shadow-lg">
              Get My Bundle
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/#locations" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground text-base font-bold hover:bg-primary-foreground/20 transition-colors">
              See Locations
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default BundlePromotions;
