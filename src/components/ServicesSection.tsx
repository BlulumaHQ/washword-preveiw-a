import touchlessIcon from "@/assets/touchless_icon.jpg";
import softClothIcon from "@/assets/soft_cloth_icon.jpg";
import selfServeIcon from "@/assets/self_serve_bay.jpg";
import vacuumIcon from "@/assets/vacuum.jpg";
import fragranceIcon from "@/assets/fragrance.jpg";
import detailingIcon from "@/assets/detailing.png";

const services = [
  { title: "Touchless Automatic Wash", img: touchlessIcon },
  { title: "Soft Cloth Automatic Wash", img: softClothIcon },
  { title: "Self-Serve Bays", img: selfServeIcon },
  { title: "Vacuum & Shampoo Stations", img: vacuumIcon },
  { title: "Fragrance Spray", img: fragranceIcon },
  { title: "Detailing Products", img: detailingIcon },
];

const ServicesSection = () => (
  <section className="section-padding bg-background" id="services">
    <div className="container-tight">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy">
        Our Services
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-lg mx-auto">
        A real treatment for your car — not just a wash.
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:shadow-md transition-all"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-16 h-16 object-contain mb-5"
            />
            <h3 className="text-sm md:text-base font-semibold text-foreground">
              {s.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
