import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section className="section-padding bg-card" id="contact">
    <div className="container-tight max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy">
        Get in Touch
      </h2>
      <p className="mt-4 text-center text-muted-foreground">
        Have a question? We're here to help.
      </p>

      <div className="mt-12 grid sm:grid-cols-3 gap-8">
        <a
          href="tel:604-507-0829"
          className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-background border border-border hover:shadow-md transition-all text-center"
        >
          <div className="w-14 h-14 rounded-full bg-wash-blue-light flex items-center justify-center">
            <Phone className="w-6 h-6 text-wash-blue" />
          </div>
          <p className="text-xs text-muted-foreground">Phone</p>
          <p className="font-bold text-foreground">604-507-0829</p>
        </a>
        <a
          href="mailto:info@washworld.ca"
          className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-background border border-border hover:shadow-md transition-all text-center"
        >
          <div className="w-14 h-14 rounded-full bg-wash-blue-light flex items-center justify-center">
            <Mail className="w-6 h-6 text-wash-blue" />
          </div>
          <p className="text-xs text-muted-foreground">Email</p>
          <p className="font-bold text-foreground">info@washworld.ca</p>
        </a>
        <div className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-background border border-border text-center">
          <div className="w-14 h-14 rounded-full bg-wash-blue-light flex items-center justify-center">
            <MapPin className="w-6 h-6 text-wash-blue" />
          </div>
          <p className="text-xs text-muted-foreground">Address</p>
          <p className="font-bold text-foreground">13231 72 Ave, Surrey BC</p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <a
          href="tel:604-507-0829"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-bold hover:bg-wash-blue-dark transition-colors shadow-lg shadow-primary/30"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
