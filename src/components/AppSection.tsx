const AppSection = () => (
  <section className="section-padding bg-wash-blue-light">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-wash-navy">
            Get Deals with the Washworld App
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Download the Washworld app to access exclusive promotions, special
            deals, and a faster way to enjoy your next wash.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com/ca/app/washworld-car-wash/id1522797189?platform=iphone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://washworld.ca/wp-content/uploads/2024/08/Screenshot-2024-08-08-at-4.11.35%E2%80%AFPM-300x97.png"
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.washworld.carwash&gl=ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://washworld.ca/wp-content/uploads/2024/08/Screenshot-2024-08-08-at-4.10.32%E2%80%AFPM-300x97.png"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary to-wash-blue-dark flex items-center justify-center">
            <img
              src="https://washworld.ca/wp-content/uploads/2024/06/washworldlogo-1.png"
              alt="Washworld App"
              className="w-32 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppSection;
