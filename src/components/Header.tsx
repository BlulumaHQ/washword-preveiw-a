import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const mobileMenuLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Locations", href: "/#locations" },
  { label: "FAQ", href: "/#faq" },
  { label: "Bundle & Promo", href: "/bundle-promotions" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-wash-navy shadow-lg">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://washworld.ca/wp-content/uploads/2024/06/washworldlogo-1.png"
            alt="Washworld Logo"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:604-507-0829"
            className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/90"
          >
            <Phone className="w-4 h-4" />
            604-507-0829
          </a>
          <a
            href="#locations"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-wash-blue-dark transition-colors"
          >
            Find a Location
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-wash-navy border-t border-primary-foreground/10 px-4 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {mobileMenuLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-primary-foreground/80 hover:text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:604-507-0829"
              className="flex items-center gap-2 text-base font-semibold text-primary-foreground"
            >
              <Phone className="w-4 h-4" />
              604-507-0829
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
