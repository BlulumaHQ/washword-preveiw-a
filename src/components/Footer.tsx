const Footer = () => (
  <footer className="bg-wash-navy text-primary-foreground/70 py-12 md:py-16 px-4">
    <div className="container-tight">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo + description */}
        <div>
          <img
            src="https://washworld.ca/wp-content/uploads/2024/06/washworldlogo-1.png"
            alt="Washworld"
            className="h-8 w-auto object-contain mb-4"
          />
          <p className="text-sm leading-relaxed">
            Washworld is your 24/7 destination for premium car care — offering spotless, satisfying car wash experiences across BC.
          </p>
        </div>

        {/* Column 2: Intentional spacer (desktop only) */}
        <div className="hidden md:block" />

        {/* Mobile: 2-column layout for Menu + Locations */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          <div>
            <h4 className="font-semibold text-primary-foreground mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="/#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="/bundle-promotions" className="hover:text-primary-foreground transition-colors">Wash Packages</a></li>
              <li><a href="/#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground mb-3">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://washworld.ca/newtonsurrey/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Surrey (Newton)</a></li>
              <li><a href="https://washworld.ca/richmond/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Richmond</a></li>
              <li><a href="https://washworld.ca/abbotsford/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Abbotsford</a></li>
              <li><a href="https://washworld.ca/maple-ridge/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Maple Ridge</a></li>
              <li><a href="https://washworld.ca/chilliwack/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Chilliwack</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu column */}
        <div className="hidden md:block">
          <h4 className="font-semibold text-primary-foreground mb-4">Menu</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
            <li><a href="/#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
            <li><a href="/#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
            <li><a href="/bundle-promotions" className="hover:text-primary-foreground transition-colors">Wash Packages</a></li>
            <li><a href="/#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            <li><a href="/#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Desktop Locations column */}
        <div className="hidden md:block">
          <h4 className="font-semibold text-primary-foreground mb-4">Locations</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="https://washworld.ca/newtonsurrey/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Surrey (Newton)</a></li>
            <li><a href="https://washworld.ca/richmond/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Richmond</a></li>
            <li><a href="https://washworld.ca/abbotsford/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Abbotsford</a></li>
            <li><a href="https://washworld.ca/maple-ridge/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Maple Ridge</a></li>
            <li><a href="https://washworld.ca/chilliwack/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Chilliwack</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3 md:mb-4">Contact</h4>
          <ul className="space-y-2 md:space-y-2.5 text-sm">
            <li><a href="mailto:info@washworld.ca" className="hover:text-primary-foreground transition-colors">info@washworld.ca</a></li>
            <li><a href="tel:604-507-0829" className="hover:text-primary-foreground transition-colors">604-507-0829</a></li>
            <li>13231 72 Ave, Surrey BC</li>
          </ul>
          <div className="mt-4 md:mt-5 flex gap-4">
            <a href="https://www.facebook.com/canadawashworld" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors text-sm">Facebook</a>
            <a href="https://www.instagram.com/washworld.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors text-sm">Instagram</a>
            <a href="https://www.linkedin.com/company/washworld5/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs">
        Copyright © 2024 Washworld. All Rights Reserved. | Web Design by{" "}<a href="https://sonykundesign.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80">Sonykun Design</a>
      </div>
    </div>
  </footer>
);

export default Footer;
