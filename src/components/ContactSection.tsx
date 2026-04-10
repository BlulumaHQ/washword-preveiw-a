import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section className="section-padding bg-card" id="contact">
    <div className="container-tight">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy">
        Contact Us
      </h2>
      <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <a
          href="tel:604-507-0829"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background border border-border hover:shadow-md transition-all text-center"
        >
          <div className="w-14 h-14 rounded-full bg-wash-blue-light flex items-center justify-center">
            <Phone className="w-6 h-6 text-wash-blue" />
          </div>
          <p className="text-xs text-muted-foreground">Phone</p>
          <p className="font-bold text-foreground">604-507-0829</p>
        </a>
        <a
          href="mailto:info@washworld.ca"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background border border-border hover:shadow-md transition-all text-center"
        >
          <div className="w-14 h-14 rounded-full bg-wash-blue-light flex items-center justify-center">
            <Mail className="w-6 h-6 text-wash-blue" />
          </div>
          <p className="text-xs text-muted-foreground">Email</p>
          <p className="font-bold text-foreground">info@washworld.ca</p>
        </a>
        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background border border-border text-center">
          <div className="w-14 h-14 rounded-full bg-wash-blue-light flex items-center justify-center">
            <MapPin className="w-6 h-6 text-wash-blue" />
          </div>
          <p className="text-xs text-muted-foreground">Address</p>
          <p className="font-bold text-foreground">13231 72 Ave, Surrey BC</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <a
          href="tel:604-507-0829"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-wash-blue-dark transition-colors shadow-lg"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
