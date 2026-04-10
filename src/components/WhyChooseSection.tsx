import { Clock, MapPin, Car, Sparkles } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Open 24/7",
    desc: "Wash your car anytime — day or night.",
  },
  {
    icon: MapPin,
    title: "5 Convenient Locations",
    desc: "Quick access across BC.",
  },
  {
    icon: Car,
    title: "Soft Cloth & Touchless Options",
    desc: "Choose what fits your needs.",
  },
  {
    icon: Sparkles,
    title: "Complete Car Care",
    desc: "Vacuum, shampoo, fragrance, detailing products.",
  },
];

const WhyChooseSection = () => (
  <section className="section-padding bg-card">
    <div className="container-tight">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy">
        Why Choose Washworld
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-wash-blue-light flex items-center justify-center mb-4">
              <f.icon className="w-7 h-7 text-wash-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
