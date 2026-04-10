import { Droplets, Wind } from "lucide-react";

const WashTypeSection = () => (
  <section className="section-padding bg-wash-blue-light" id="wash-types">
    <div className="container-tight">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy">
        Choose the Right Wash for Your Car
      </h2>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Soft Cloth */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Droplets className="w-6 h-6 text-wash-blue" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Soft Cloth Wash</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A more thorough, hands-on clean using soft cloth technology — ideal
            for removing heavier dirt and achieving a polished finish.
          </p>
          <div className="mt-4 px-4 py-3 rounded-lg bg-wash-blue-light border border-primary/20">
            <p className="text-sm font-medium text-wash-navy">
              👉 Best for heavier dirt, mud, or buildup
            </p>
          </div>
        </div>

        {/* Touchless */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Wind className="w-6 h-6 text-wash-blue" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Touchless Wash</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A fast, no-contact clean using high-pressure water — best for light
            dirt, quick washes, and maintaining your vehicle between deeper
            cleans.
          </p>
          <div className="mt-4 px-4 py-3 rounded-lg bg-wash-blue-light border border-primary/20">
            <p className="text-sm font-medium text-wash-navy">
              👉 Best for quick, convenient maintenance washes
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WashTypeSection;
