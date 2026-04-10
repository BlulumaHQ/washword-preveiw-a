const Footer = () => (
  <footer className="bg-wash-navy text-primary-foreground/70 py-16 px-4">
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

        {/* Column 2: Intentional spacer */}
        <div className="hidden md:block" />

        {/* Column 3: Menu */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Menu</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
            <li><a href="/#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
            <li><a href="/#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
            <li><a href="/bundle-promotions" className="hover:text-primary-foreground transition-colors">Bundle Promotions</a></li>
            <li><a href="/#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            <li><a href="/#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Locations */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Locations</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="https://washworld.ca/newtonsurrey/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Surrey (Newton)</a></li>
            <li><a href="https://washworld.ca/richmond/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Richmond</a></li>
            <li><a href="https://washworld.ca/abbotsford/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Abbotsford</a></li>
            <li><a href="https://washworld.ca/maple-ridge/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Maple Ridge</a></li>
            <li><a href="https://washworld.ca/chilliwack/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Chilliwack</a></li>
          </ul>
        </div>

        {/* Column 5: Contact */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="mailto:info@washworld.ca" className="hover:text-primary-foreground transition-colors">info@washworld.ca</a></li>
            <li><a href="tel:604-507-0829" className="hover:text-primary-foreground transition-colors">604-507-0829</a></li>
            <li>13231 72 Ave, Surrey BC</li>
          </ul>
          <div className="mt-5 flex gap-4">
            <a href="https://www.facebook.com/canadawashworld" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors text-sm">Facebook</a>
            <a href="https://www.instagram.com/washworld.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors text-sm">Instagram</a>
            <a href="https://www.linkedin.com/company/washworld5/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs">
        Copyright © 2024 Washworld. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
