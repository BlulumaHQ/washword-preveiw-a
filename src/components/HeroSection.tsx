import { MapPin, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-wash-navy overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Washworld professional car wash"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wash-navy/95 via-wash-navy/75 to-wash-navy/20" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight tracking-tight">
            Clean Car. Fast Stop.{" "}
            <span className="text-wash-blue">Open 24/7.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
            Find your nearest Washworld location, choose the right wash in
            seconds, and get back on the road with a cleaner, shinier car.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {[
              "5 Locations Across BC",
              "Open 24/7",
              "Soft Cloth & Touchless Options",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-wash-blue" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#locations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-base font-bold hover:bg-wash-blue-dark transition-all shadow-lg shadow-primary/30"
            >
              <MapPin className="w-5 h-5" />
              Find a Location
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground text-base font-bold hover:bg-primary-foreground/20 transition-all"
            >
              Compare Wash Packages
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
