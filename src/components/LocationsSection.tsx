import { Navigation, MapPin } from "lucide-react";
import surreyImg from "@/assets/surrey.jpg";
import richmondImg from "@/assets/richmond.jpg";
import abbotsfordImg from "@/assets/abbotsford.jpg";
import mapleRidgeImg from "@/assets/maple-ridge.jpg";
import chilliwackImg from "@/assets/chilliwack.jpg";

const locations = [
  {
    name: "Newton (Surrey)",
    img: surreyImg,
    link: "https://washworld.ca/newtonsurrey/",
    maps: "https://maps.google.com/?q=Washworld+Newton+Surrey+BC",
  },
  {
    name: "Richmond",
    img: richmondImg,
    link: "https://washworld.ca/richmond/",
    maps: "https://maps.google.com/?q=Washworld+Richmond+BC",
  },
  {
    name: "Abbotsford",
    img: abbotsfordImg,
    link: "https://washworld.ca/abbotsford/",
    maps: "https://maps.google.com/?q=Washworld+Abbotsford+BC",
  },
  {
    name: "Maple Ridge",
    img: mapleRidgeImg,
    link: "https://washworld.ca/maple-ridge/",
    maps: "https://maps.google.com/?q=Washworld+Maple+Ridge+BC",
  },
  {
    name: "Chilliwack",
    img: chilliwackImg,
    link: "https://washworld.ca/chilliwack/",
    maps: "https://maps.google.com/?q=Washworld+Chilliwack+BC",
  },
];

const LocationsSection = () => (
  <section className="section-padding bg-wash-navy" id="locations">
    <div className="container-tight">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground">
        Find a Washworld Near You
      </h2>
      <p className="mt-4 text-center text-primary-foreground/70 max-w-lg mx-auto">
        With 5 convenient locations across British Columbia, you're never far
        from a clean car.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="group bg-card rounded-2xl overflow-hidden border border-border/10 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={loc.img}
                alt={`Washworld ${loc.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-primary-foreground drop-shadow-lg">
                {loc.name}
              </h3>
            </div>
            <div className="p-4 flex gap-3">
              <a
                href={loc.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-wash-blue-dark transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                View Location
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;
