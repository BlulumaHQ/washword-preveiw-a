import { Shield, Users, Building2, Zap } from "lucide-react";

const trust = [
  { icon: Shield, title: "Since 2001", text: "Serving BC drivers for over two decades" },
  { icon: Users, title: "Thousands Weekly", text: "Cars washed every single week" },
  { icon: Building2, title: "Well-Maintained", text: "Clean and modern facilities at every location" },
  { icon: Zap, title: "Fast & Convenient", text: "Designed for speed without compromising quality" },
];

const TrustSection = () => (
  <section className="section-padding bg-wash-navy">
    <div className="container-tight text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
        Trusted by Drivers Across BC
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trust.map((t) => (
          <div key={t.title} className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
              <t.icon className="w-7 h-7 text-wash-blue" />
            </div>
            <h3 className="text-lg font-bold text-primary-foreground">{t.title}</h3>
            <p className="text-sm text-primary-foreground/70">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
