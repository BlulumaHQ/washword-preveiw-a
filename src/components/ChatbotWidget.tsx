import { useState } from "react";
import { MessageCircle, X, MapPin, Car, DollarSign } from "lucide-react";

const quickReplies = [
  { label: "Compare Wash Types", icon: Car, href: "#wash-types" },
  { label: "Find a Location", icon: MapPin, href: "#locations" },
  { label: "Pricing Help", icon: DollarSign, href: "#pricing" },
];

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 lg:bottom-8 right-5 z-40">
      {open && (
        <div className="mb-3 w-80 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-wash-navy p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-foreground">Washworld</p>
                <p className="text-xs text-primary-foreground/60">We typically reply instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/60 hover:text-primary-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <div className="bg-wash-blue-light rounded-xl p-4 mb-4">
              <p className="text-sm text-foreground">
                Hi 👋<br />
                Need help choosing the right wash?
              </p>
            </div>
            <div className="space-y-2">
              {quickReplies.map((qr) => (
                <a
                  key={qr.label}
                  href={qr.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-wash-blue-light hover:border-primary/30 transition-all text-sm font-medium text-foreground"
                >
                  <qr.icon className="w-4 h-4 text-wash-blue" />
                  {qr.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-wash-blue-dark transition-colors flex items-center justify-center"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatbotWidget;
