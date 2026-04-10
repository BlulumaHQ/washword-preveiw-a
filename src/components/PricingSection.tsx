import { Check, X } from "lucide-react";

type Feature = {
  name: string;
  softBasic: boolean;
  softBetter: boolean;
  softBest: boolean;
  touchBasic: boolean;
  touchBetter: boolean;
  touchBest: boolean;
};

const features: Feature[] = [
  { name: "Undercarriage Blast", softBasic: true, softBetter: true, softBest: true, touchBasic: true, touchBetter: true, touchBest: true },
  { name: "Presoak", softBasic: true, softBetter: true, softBest: true, touchBasic: true, touchBetter: true, touchBest: true },
  { name: "Tri Foam Conditioner", softBasic: false, softBetter: true, softBest: true, touchBasic: false, touchBetter: true, touchBest: true },
  { name: "Wheel Scrub", softBasic: true, softBetter: true, softBest: true, touchBasic: false, touchBetter: false, touchBest: false },
  { name: "Soft Cloth Scrub + Shampoo", softBasic: true, softBetter: true, softBest: true, touchBasic: false, touchBetter: false, touchBest: false },
  { name: "High Pressure Rinse", softBasic: true, softBetter: true, softBest: true, touchBasic: true, touchBetter: true, touchBest: true },
  { name: "Body Shield Wax", softBasic: false, softBetter: true, softBest: true, touchBasic: false, touchBetter: true, touchBest: true },
  { name: "Extreme Shine Foam Arch", softBasic: false, softBetter: false, softBest: true, touchBasic: false, touchBetter: false, touchBest: true },
  { name: "Polish with Foam Cloth", softBasic: false, softBetter: false, softBest: true, touchBasic: false, touchBetter: false, touchBest: false },
  { name: "Spot Free Rinse", softBasic: true, softBetter: true, softBest: true, touchBasic: true, touchBetter: true, touchBest: true },
  { name: "Dryer", softBasic: true, softBetter: true, softBest: true, touchBasic: true, touchBetter: true, touchBest: true },
];

const FeatureIcon = ({ included }: { included: boolean }) =>
  included ? (
    <Check className="w-4 h-4 text-wash-green mx-auto" />
  ) : (
    <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
  );

const PricingSection = () => (
  <section className="section-padding bg-card" id="pricing">
    <div className="container-tight">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy">
        Car Wash Packages
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Compare features across all wash types and packages to find the perfect option for your car.
      </p>

      {/* Mobile cards */}
      <div className="mt-10 md:hidden space-y-6">
        <PricingCards title="Soft Cloth" packages={softClothPkgs} />
        <PricingCards title="Touchless" packages={touchlessPkgs} />
      </div>

      {/* Desktop table */}
      <div className="mt-10 hidden md:block overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left p-3 font-semibold text-muted-foreground w-[200px]">Features</th>
              <th colSpan={3} className="text-center p-2 font-bold text-wash-navy border-b-2 border-primary/30">
                Soft Cloth
              </th>
              <th colSpan={3} className="text-center p-2 font-bold text-wash-navy border-b-2 border-muted-foreground/20">
                Touchless
              </th>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3"></td>
              <td className="p-3 text-center">
                <div className="font-semibold text-foreground">Basic</div>
                <div className="text-xl font-bold text-primary">$16</div>
                <div className="text-xs text-muted-foreground">Quick Clean</div>
              </td>
              <td className="p-3 text-center bg-primary/5 rounded-t-lg relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  MOST POPULAR
                </span>
                <div className="font-semibold text-foreground">Better</div>
                <div className="text-xl font-bold text-primary">$19</div>
                <div className="text-xs text-muted-foreground">⭐ Most Popular</div>
              </td>
              <td className="p-3 text-center">
                <div className="font-semibold text-foreground">Best + Polish</div>
                <div className="text-xl font-bold text-primary">$26</div>
                <div className="text-xs text-muted-foreground">Premium Finish</div>
              </td>
              <td className="p-3 text-center">
                <div className="font-semibold text-foreground">Basic</div>
                <div className="text-xl font-bold text-primary">$16</div>
                <div className="text-xs text-muted-foreground">Quick Clean</div>
              </td>
              <td className="p-3 text-center bg-wash-blue-light/50 rounded-t-lg relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wash-orange text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  BEST VALUE
                </span>
                <div className="font-semibold text-foreground">Better</div>
                <div className="text-xl font-bold text-primary">$19</div>
                <div className="text-xs text-muted-foreground">Best Value</div>
              </td>
              <td className="p-3 text-center">
                <div className="font-semibold text-foreground">Best</div>
                <div className="text-xl font-bold text-primary">$23</div>
                <div className="text-xs text-muted-foreground">Premium Touchless</div>
              </td>
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={f.name} className={i % 2 === 0 ? "bg-background" : ""}>
                <td className="p-3 font-medium text-foreground">{f.name}</td>
                <td className="p-3"><FeatureIcon included={f.softBasic} /></td>
                <td className="p-3 bg-primary/5"><FeatureIcon included={f.softBetter} /></td>
                <td className="p-3"><FeatureIcon included={f.softBest} /></td>
                <td className="p-3"><FeatureIcon included={f.touchBasic} /></td>
                <td className="p-3 bg-wash-blue-light/50"><FeatureIcon included={f.touchBetter} /></td>
                <td className="p-3"><FeatureIcon included={f.touchBest} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Services vary across locations.{" "}
        <a href="#locations" className="text-primary font-medium hover:underline">
          Find a wash near you
        </a>{" "}
        for specific availability.
      </p>
    </div>
  </section>
);

const softClothPkgs = [
  { name: "Basic", price: "$16", tag: "Quick Clean", highlight: false },
  { name: "Better", price: "$19", tag: "⭐ Most Popular", highlight: true },
  { name: "Best + Polish", price: "$26", tag: "Premium Finish", highlight: false },
];

const touchlessPkgs = [
  { name: "Basic", price: "$16", tag: "Quick Clean", highlight: false },
  { name: "Better", price: "$19", tag: "Best Value", highlight: true },
  { name: "Best", price: "$23", tag: "Premium Touchless", highlight: false },
];

const PricingCards = ({
  title,
  packages,
}: {
  title: string;
  packages: { name: string; price: string; tag: string; highlight: boolean }[];
}) => (
  <div>
    <h3 className="text-lg font-bold text-wash-navy mb-3">{title}</h3>
    <div className="space-y-3">
      {packages.map((pkg) => (
        <div
          key={pkg.name}
          className={`flex items-center justify-between p-4 rounded-xl border ${
            pkg.highlight
              ? "border-primary bg-primary/5 shadow-md"
              : "border-border bg-card"
          }`}
        >
          <div>
            <span className="font-semibold text-foreground">{pkg.name}</span>
            <span className="ml-2 text-xs text-muted-foreground">{pkg.tag}</span>
          </div>
          <span className="text-xl font-bold text-primary">{pkg.price}</span>
        </div>
      ))}
    </div>
  </div>
);

export default PricingSection;
