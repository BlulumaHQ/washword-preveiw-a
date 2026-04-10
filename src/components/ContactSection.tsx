import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section className="section-padding bg-card" id="contact">
    <div className="container-tight">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy">
        Contact Us
      </h2>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
        <a
          href="tel:604-507-0829"
          className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-wash-blue-light flex items-center justify-center">
            <Phone className="w-5 h-5 text-wash-blue" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="font-semibold">604-507-0829</p>
          </div>
        </a>
        <a
          href="mailto:info@washworld.ca"
          className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-wash-blue-light flex items-center justify-center">
            <Mail className="w-5 h-5 text-wash-blue" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="font-semibold">info@washworld.ca</p>
          </div>
        </a>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-wash-blue-light flex items-center justify-center">
            <MapPin className="w-5 h-5 text-wash-blue" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Address</p>
            <p className="font-semibold">13231 72 Ave, Surrey BC</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
