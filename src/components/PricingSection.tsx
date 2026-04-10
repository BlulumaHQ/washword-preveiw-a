import { Check, X } from "lucide-react";

type Package = {
  name: string;
  price: string;
  tag: string;
  popular?: boolean;
  features: boolean[];
};

const softClothFeatures = [
  "Undercarriage Blast",
  "Presoak",
  "Wheel Scrub",
  "Soft Cloth Scrub + Shampoo",
  "High Pressure Rinse",
  "Spot Free Rinse",
  "Dryer",
  "Tri Foam Conditioner",
  "Body Shield Wax",
  "Extreme Shine Foam Arch",
  "Polish with Foam Cloth",
];

const softClothPackages: Package[] = [
  {
    name: "Basic",
    price: "$16",
    tag: "Quick Clean",
    features: [true, true, true, true, true, true, true, false, false, false, false],
  },
  {
    name: "Better",
    price: "$19",
    tag: "Most Popular",
    popular: true,
    features: [true, true, true, true, true, true, true, true, true, false, false],
  },
  {
    name: "Best",
    price: "$23",
    tag: "Premium",
    features: [true, true, true, true, true, true, true, true, true, true, false],
  },
  {
    name: "Best + Polish",
    price: "$26",
    tag: "Ultimate Finish",
    features: [true, true, true, true, true, true, true, true, true, true, true],
  },
];

const touchlessFeatures = [
  "Undercarriage Blast",
  "Presoak",
  "High Pressure Rinse",
  "Spot Free Rinse",
  "Dryer",
  "Tri Foam Conditioner",
  "Body Shield Wax",
  "Extreme Shine Foam Arch",
];

const touchlessPackages: Package[] = [
  {
    name: "Basic",
    price: "$16",
    tag: "Quick Clean",
    features: [true, true, true, true, true, false, false, false],
  },
  {
    name: "Better",
    price: "$19",
    tag: "Best Value",
    popular: true,
    features: [true, true, true, true, true, true, true, false],
  },
  {
    name: "Best",
    price: "$23",
    tag: "Premium Touchless",
    features: [true, true, true, true, true, true, true, true],
  },
];

const FeatureIcon = ({ included }: { included: boolean }) =>
  included ? (
    <Check className="w-5 h-5 text-wash-green mx-auto" />
  ) : (
    <X className="w-5 h-5 text-muted-foreground/25 mx-auto" />
  );

const PricingTable = ({
  title,
  packages,
  features,
  accentColor,
}: {
  title: string;
  packages: Package[];
  features: string[];
  accentColor: string;
}) => (
  <div>
    <h3 className="text-2xl font-bold text-wash-navy mb-10 text-center">{title}</h3>

    {/* Mobile cards */}
    <div className="md:hidden space-y-6">
      {packages.map((pkg) => (
        <div key={pkg.name} className="relative">
          {pkg.popular && (
            <div className="flex justify-center mb-[-14px] relative z-10">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                MOST POPULAR
              </span>
            </div>
          )}
          <div
            className={`rounded-2xl border p-6 ${pkg.popular ? "pt-8" : ""} ${
              pkg.popular
                ? "border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20"
                : "border-border bg-card"
            }`}
          >
            <div className="flex items-baseline justify-between mb-5">
              <div>
                <span className="text-lg font-bold text-foreground">{pkg.name}</span>
                <span className="ml-2 text-sm text-muted-foreground">{pkg.tag}</span>
              </div>
              <span className="text-3xl font-black text-primary">{pkg.price}</span>
            </div>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  {pkg.features[i] ? (
                    <Check className="w-4 h-4 text-wash-green shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground/25 shrink-0" />
                  )}
                  <span className={pkg.features[i] ? "text-foreground" : "text-muted-foreground/50"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* Desktop table */}
    <div className="hidden md:block overflow-visible pt-10">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left px-5 py-6 font-semibold text-muted-foreground w-[240px] text-base">Features</th>
            {packages.map((pkg) => (
              <th key={pkg.name} className="px-5 text-center align-bottom">
                <div className={`relative pb-6 pt-2 ${pkg.popular ? `${accentColor} rounded-t-2xl` : ""}`}>
                  {pkg.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-primary text-primary-foreground text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  {!pkg.popular && <div className="h-8" />}
                  <div className="font-bold text-foreground text-lg">{pkg.name}</div>
                  <div className="text-3xl font-black text-primary mt-1">{pkg.price}</div>
                  <div className="text-xs text-muted-foreground mt-1">{pkg.tag}</div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((f, i) => (
            <tr key={f} className={`${i % 2 === 0 ? "bg-muted/40" : "bg-background"} border-b border-border/50`}>
              <td className="px-5 py-5 font-medium text-foreground text-[15px]">{f}</td>
              {packages.map((pkg) => (
                <td key={pkg.name} className={`px-5 py-5 ${pkg.popular ? accentColor : ""}`}>
                  <FeatureIcon included={pkg.features[i]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
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

      <div className="mt-20 space-y-24">
        <PricingTable
          title="Soft Cloth Wash"
          packages={softClothPackages}
          features={softClothFeatures}
          accentColor="bg-primary/5"
        />
        <PricingTable
          title="Touchless Wash"
          packages={touchlessPackages}
          features={touchlessFeatures}
          accentColor="bg-wash-blue-light"
        />
      </div>

      <p className="mt-12 text-center text-sm text-muted-foreground">
        Services vary across locations.{" "}
        <a href="#locations" className="text-primary font-medium hover:underline">
          Find a wash near you
        </a>{" "}
        for specific availability.
      </p>
    </div>
  </section>
);

export default PricingSection;
