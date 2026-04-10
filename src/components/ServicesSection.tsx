const services = [
  {
    title: "Touchless Automatic Wash",
    img: "https://washworld.ca/wp-content/uploads/2024/06/car-wash-1.png",
  },
  {
    title: "Soft Cloth Automatic Wash",
    img: "https://washworld.ca/wp-content/uploads/2024/06/car-wash-1.png",
  },
  {
    title: "Self-Serve Bays",
    img: "https://washworld.ca/wp-content/uploads/2024/06/car-service-1.png",
  },
  {
    title: "Vacuum & Shampoo Stations",
    img: "https://washworld.ca/wp-content/uploads/2024/06/car-wash2-1.png",
  },
  {
    title: "Fragrance Spray",
    img: "https://washworld.ca/wp-content/uploads/2024/06/Rectangle-99.png",
  },
  {
    title: "Detailing Products",
    img: "https://washworld.ca/wp-content/uploads/2024/06/cleanup-1.png",
  },
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
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-all"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-16 h-16 object-contain mb-4"
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
