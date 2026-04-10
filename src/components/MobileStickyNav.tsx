import { MapPin, Car, Phone } from "lucide-react";

const MobileStickyNav = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
    <div className="grid grid-cols-3 divide-x divide-border">
      <a
        href="#locations"
        className="flex flex-col items-center gap-1 py-3 text-primary font-semibold text-xs"
      >
        <MapPin className="w-5 h-5" />
        Find Location
      </a>
      <a
        href="#pricing"
        className="flex flex-col items-center gap-1 py-3 text-foreground font-semibold text-xs"
      >
        <Car className="w-5 h-5" />
        Wash Packages
      </a>
      <a
        href="tel:604-507-0829"
        className="flex flex-col items-center gap-1 py-3 text-foreground font-semibold text-xs"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
    </div>
  </div>
);

export default MobileStickyNav;
