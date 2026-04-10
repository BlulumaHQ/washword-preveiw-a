import { Shield, Users, Building2, Zap } from "lucide-react";

const trust = [
  { icon: Shield, text: "Serving BC since 2001" },
  { icon: Users, text: "Thousands of cars washed every week" },
  { icon: Building2, text: "Clean and well-maintained facilities" },
  { icon: Zap, text: "Designed for fast, convenient service" },
];

const TrustSection = () => (
  <section className="section-padding bg-card">
    <div className="container-tight text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-wash-navy">
        Trusted by Drivers Across BC
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trust.map((t) => (
          <div key={t.text} className="flex flex-col items-center gap-3 p-6">
            <div className="w-12 h-12 rounded-full bg-wash-blue-light flex items-center justify-center">
              <t.icon className="w-6 h-6 text-wash-blue" />
            </div>
            <p className="text-sm font-medium text-foreground">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
