import { Check, X } from "lucide-react";

type Package = {
  name: string;
  price: string;
  tag: string;
  popular?: boolean;
  badgeText?: string;
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
    tag: "Great Value",
    features: [true, true, true, true, true, true, true, true, true, false, false],
  },
  {
    name: "Best",
    price: "$23",
    tag: "Premium",
    popular: true,
    badgeText: "MOST POPULAR",
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
    badgeText: "MOST POPULAR",
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

    <div className="md:hidden space-y-6">
      {packages.map((pkg) => (
        <div key={pkg.name} className="relative">
          {pkg.popular && (
            <div className="flex justify-center mb-[-14px] relative z-10">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                {pkg.badgeText || "BEST"}
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
            <div className="flex items-baseline justify-between mb-5 gap-4">
              <div>
                <span className="text-lg font-bold text-foreground">{pkg.name}</span>
                <span className="ml-2 text-sm text-muted-foreground">{pkg.tag}</span>
              </div>
              <span className="text-3xl font-black text-primary shrink-0">{pkg.price}</span>
            </div>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  {pkg.features[index] ? (
                    <Check className="w-4 h-4 text-wash-green shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground/25 shrink-0" />
                  )}
                  <span className={pkg.features[index] ? "text-foreground" : "text-muted-foreground/50"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    <div className="hidden md:block pt-10">
      <div className="overflow-hidden rounded-2xl border border-border bg-background">
        <table className="w-full text-sm border-separate border-spacing-0" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "240px" }} />
            {packages.map((pkg) => (
              <col key={pkg.name} />
            ))}
          </colgroup>
          <thead>
            <tr className="align-top">
              <th className="bg-muted/20 px-5 py-4 text-left text-base font-semibold text-muted-foreground border-b border-border">
                Features
              </th>
              {packages.map((pkg) => (
                <th
                  key={pkg.name}
                  className={`px-4 py-4 text-center align-top border-b border-l border-border ${
                    pkg.popular ? accentColor : "bg-background"
                  }`}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="text-lg font-bold text-foreground leading-tight">{pkg.name}</div>
                    <div className="text-3xl font-black text-primary leading-none">{pkg.price}</div>
                    <div className="min-h-5 text-xs text-muted-foreground leading-5">{pkg.tag}</div>
                    <span
                      className={`mt-1 inline-flex items-center justify-center rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.08em] ${
                        pkg.popular
                          ? "border-primary/25 bg-primary/10 text-primary"
                          : "invisible border-transparent"
                      }`}
                    >
                      {pkg.badgeText || "BEST"}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={feature} className={index % 2 === 0 ? "bg-muted/25" : "bg-background"}>
                <td className="px-5 py-4 font-medium text-foreground text-[15px] border-b border-border/70">
                  {feature}
                </td>
                {packages.map((pkg) => (
                  <td
                    key={pkg.name}
                    className={`px-4 py-4 text-center align-middle border-b border-l border-border ${
                      pkg.popular ? accentColor : ""
                    }`}
                  >
                    <FeatureIcon included={pkg.features[index]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
