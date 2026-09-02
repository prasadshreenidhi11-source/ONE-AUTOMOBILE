import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Inventory", href: "#inventory" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Curated Inventorys",
    copy: "Every car and bike is hand-selected and inspected before it earns a place in our collection.",
  },
  {
    title: "Powerful Performance",
    copy: "From track-bred engines to everyday cruisers, every vehicle here is chosen for how it drives, not just how it looks.",
  },
  {
    title: "Guided Discovery",
    copy: "We help you narrow down exactly what fits your life, your style, and your budget.",
  },
  {
    title: "Trusted Ownership",
    copy: "Full history, honest condition reports, and transparent pricing on every listing.",
  },
  {
    title: "Experienced Staff",
    copy: "Our team has spent years around performance vehicles and knows how to match rider to ride.",
  },
  {
    title: "Every Skill Level",
    copy: "Whether it's your first bike or your fifth supercar, we tailor the experience to you.",
  },
];

const INVENTORY = [
  {
    name: "Lamborghini Huracan",
    type: "Car",
    description:
      "A stunning Italian supercar known for its sharp design, powerful V10 engine, and thrilling performance.",
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ford Mustang",
    type: "Car",
    description:
      "An iconic American muscle car combining aggressive styling, strong performance, and an unforgettable driving experience.",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Mercedes AMG GT",
    type: "Car",
    description:
      "A luxury performance coupe offering premium comfort, bold styling, and powerful AMG performance.",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Kawasaki Ninja",
    type: "Bike",
    description:
      "A high-performance sport bike built for riders who want sharp handling, aggressive styling, and exciting speed.",
    img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Yamaha R1",
    type: "Bike",
    description:
      "A legendary Yamaha superbike delivering race-inspired performance, advanced technology, and exceptional handling.",
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Porsche 911",
    type: "Car",
    description:
      "A timeless sports car combining iconic design, precision engineering, everyday usability, and exhilarating performance.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
  },
];
  

const TESTIMONIALS = [
  {
    name: "Amara Whitfield",
    quote:
      "They listened to what I actually wanted instead of pushing whatever was on the lot. I drove away in a car that fits me perfectly.",
  },
  {
    name: "Devon Marsh",
    quote:
      "The most transparent buying process I've been through - full history, honest answers, no pressure.",
  },
  {
    name: "Priya Nadar",
    quote:
      "From the first call to picking up the keys, everything felt considered. This is how buying a bike should feel.",
  },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/95 backdrop-blur-sm text-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="font-display text-xl tracking-wide">
          One Vision <span className="text-bronze-light">One</span> Automobile
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide uppercase">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-stone hover:text-paper transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-bronze px-6 py-2.5 text-sm uppercase tracking-wide text-ink font-medium hover:bg-bronze-light transition-colors duration-200"
        >
          Call Us
        </a>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-paper mb-1.5" />
          <span className="block w-6 h-px bg-paper mb-1.5" />
          <span className="block w-6 h-px bg-paper" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-ink border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-stone"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="text-bronze-light"
            onClick={() => setOpen(false)}
          >
            Call Us
          </a>
        </nav>
      )}
    </header>
  );
}

const HERO_STATS = [
  { value: "12+", label: "Years Curating" },
  { value: "180+", label: "Vehicles Placed" },
  { value: "4.9", label: "Average Rating" },
];

function Hero() {
  const [showPreview, setShowPreview] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio =
      (e.clientX - rect.left) / Math.max(1, rect.width);

    const limitedRatio = Math.max(0, Math.min(1, ratio));

    setMouseX((limitedRatio - 0.5) * 100);
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[680px] flex flex-col justify-end"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero-lamborghini.mp4"
        poster="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1800&auto=format&fit=crop"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 pb-16 md:pb-20 text-paper">
        <p className="uppercase tracking-[0.3em] text-bronze-light text-xs md:text-sm mb-6">
          Time to see your vision
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl">
          One Vision,{" "}
          <span className="text-bronze-light italic">One</span> Automobile
        </h1>

        <p className="mt-6 max-w-xl text-stone text-base md:text-lg">
          A curated collection of cars and bikes for people who know exactly
          what they want - and for those still discovering it.
        </p>

        <div className="mt-10">
          <div
            className="relative inline-block"
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
            onMouseMove={handleMouseMove}
          >
            <a
              href="#inventory"
              className="inline-flex items-center rounded-full bg-bronze px-8 py-4 text-sm uppercase tracking-wide text-ink font-medium hover:bg-bronze-light transition-colors duration-200"
            >
              Explore Our Collection
            </a>

            {/* FIXED HERO IMAGE PREVIEW */}
            <div
              className="absolute left-1/2 bottom-full mb-4 w-[344px] h-[172px] overflow-hidden rounded-[14px] bg-white border border-black/10 pointer-events-none z-50"
              style={{
                marginLeft: "-172px",
                opacity: showPreview ? 1 : 0,
                transform: `translateX(${mouseX}px) scale(${
                  showPreview ? 1 : 0.9
                })`,
                transition: "all 300ms ease-out",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
                alt="Automobile collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-3 max-w-lg gap-6">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl md:text-3xl text-bronze-light">
                {stat.value}
              </p>

              <p className="text-[0.7rem] md:text-xs uppercase tracking-widest text-stone mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 right-6 md:right-10 hidden sm:flex items-center gap-3 text-paper/70 hover:text-paper transition-colors"
      >
        <span className="text-[0.65rem] uppercase tracking-widest [writing-mode:vertical-rl]">
          Scroll
        </span>

        <span className="w-px h-10 bg-current" />
      </a>
    </section>
  );
}

function Marquee() {
  const items = [
    "Lamborghini Huracan",
    "Kawasaki Ninja",
    "Yamaha R1",
    "Mercedes AMG GT",
    "Porsche 911",
    "Ford Mustang",
  ];

  const loop = [...items, ...items];

  return (
    <div className="bg-ink text-paper overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap py-4 animate-[marquee_28s_linear_infinite]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-8 uppercase tracking-widest text-sm text-stone flex items-center gap-8"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-bronze inline-block" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">

        {/* Text - Fade Down */}
        <div className="animate-[fadeDown_1s_ease-out]">
          <p className="uppercase tracking-[0.3em] text-bronze text-xs mb-4">
            About Our Company
          </p>

          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            We Are One Vision, One Automobile
          </h2>

          <p className="text-slate leading-relaxed mb-4">
            We're a fast-growing dealership built around a simple idea: buying
            a car or bike should feel exciting, not exhausting. Every vehicle
            we carry is chosen with care.
          </p>

          <p className="text-slate leading-relaxed mb-8">
            We're passionate about automobiles and committed to bringing you
            quality cars and bikes that match your style, your needs, and your
            budget.
          </p>

          <a
            href="#inventory"
            className="inline-flex items-center rounded-full border border-ink px-8 py-3.5 text-sm uppercase tracking-wide hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            Explore More
          </a>
        </div>

        {/* Image - Fade Down */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl animate-[fadeDown_1s_ease-out_0.2s_both]">
          <img
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop"
            alt="Green supercar on a race track"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Fade Down Animation */}
      <style>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
  

function VisionStory() {
  return (
    <section className="relative py-28 md:py-36 bg-ink text-paper text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1800&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative mx-auto max-w-3xl px-6">
        <p className="uppercase tracking-[0.3em] text-bronze-light text-xs mb-4">
          Time to see your story
        </p>

        <h2 className="font-display text-4xl md:text-5xl mb-6">
          The <span className="text-bronze-light italic">Vision</span> Story
        </h2>

        <p className="text-stone text-lg leading-relaxed">
          We're the ones who make the vision real. Every rider and driver has
          their own story - we're here to help you write the next chapter of
          yours.
        </p>
      </div>
    </section>
  );
}

function Services() {
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase tracking-[0.3em] text-bronze text-xs mb-4">
            What We Focus On
          </p>

          <h2 className="font-display text-4xl md:text-5xl mb-5">
            We Focus On!
          </h2>

          <p className="text-slate">
            We help people understand what they're looking for, and we help
            them find it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {SERVICES.map((s, index) => {
            const isFlipped = flippedCard === index;

            return (
              <div
                key={s.title}
                className="h-52 [perspective:1000px]"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                {/* 3D CARD */}
                <div
                  className="relative w-full h-full transition-transform duration-1000 ease-in-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >

                  {/* FRONT */}
                  <div
                    className="
                      absolute inset-0
                      flex items-center justify-center
                      rounded-2xl
                      bg-paper
                      border border-ink/5
                      shadow-sm
                    "
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <h3 className="font-display text-xl md:text-2xl text-center px-6">
                      {s.title}
                    </h3>
                  </div>

                  {/* BACK */}
                  <div
                    className="
                      absolute inset-0
                      flex flex-col items-center justify-center
                      rounded-2xl
                      bg-ink
                      text-paper
                      border border-bronze/30
                      px-8
                      text-center
                    "
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-bronze-light text-xs uppercase tracking-[0.2em] mb-4">
                      {s.title}
                    </p>

                    <p className="text-stone text-sm leading-relaxed">
                      {s.copy}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
  

function Mission() {
  return (
    <section className="py-24 md:py-28 bg-paper text-center">
      <div className="mx-auto max-w-2xl px-6">
        <p className="uppercase tracking-[0.3em] text-bronze text-xs mb-4">
          Join Us
        </p>

        <h2 className="font-display text-4xl md:text-5xl mb-5">
          Our Mission Is Your Vision
        </h2>

        <p className="text-slate">
          Our mission is simple: help you find the car or bike that fits your
          life, your style, and your budget.
        </p>
      </div>
    </section>
  );
}
const COVERFLOW_CARS = [
  {
    name: "Lamborghini Huracan",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ferrari",
    image:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "McLaren",
    image:
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Porsche 911",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ford Mustang",
    image:
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=1200&auto=format&fit=crop",
  },
];

function CoverFlowGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousCar = () => {
    setActiveIndex(
      (activeIndex - 1 + COVERFLOW_CARS.length) %
        COVERFLOW_CARS.length
    );
  };

  const nextCar = () => {
    setActiveIndex(
      (activeIndex + 1) % COVERFLOW_CARS.length
    );
  };

  return (
    <section
      id="coverflow"
      className="bg-ink text-paper py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-bronze-light text-xs mb-4">
            Our Collection
          </p>

          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Discover Your <span className="text-bronze-light italic">Vision</span>
          </h2>

          <p className="text-stone max-w-xl mx-auto">
            Explore our collection of performance cars, selected for people
            who appreciate power, design and driving.
          </p>
        </div>

        {/* Cover Flow */}
        <div className="relative h-[430px] md:h-[500px] flex items-center justify-center">

          {COVERFLOW_CARS.map((car, index) => {
            let position =
              index - activeIndex;

            /*
              Make the gallery circular.
              This keeps the closest cards on either side.
            */
            if (position > 2) {
              position -= COVERFLOW_CARS.length;
            }

            if (position < -2) {
              position += COVERFLOW_CARS.length;
            }

            const isActive = position === 0;

            return (
              <div
                key={car.name}
                onClick={() => setActiveIndex(index)}
                className="absolute cursor-pointer transition-all duration-500 ease-out"
                style={{
                  transform: `
                    translateX(${position * 250}px)
                    scale(${isActive ? 1 : 0.72})
                    perspective(1000px)
                    rotateY(${position * -35}deg)
                  `,
                  zIndex: isActive ? 20 : 10 - Math.abs(position),
                  opacity: Math.abs(position) > 2 ? 0 : 1,
                }}
              >
                <div
                  className={`
                    relative
                    w-[280px]
                    h-[360px]
                    md:w-[380px]
                    md:h-[430px]
                    overflow-hidden
                    rounded-3xl
                    border
                    ${
                      isActive
                        ? "border-bronze/70 shadow-2xl"
                        : "border-white/10"
                    }
                  `}
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Car name */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="uppercase tracking-[0.25em] text-xs text-bronze-light mb-2">
                      Sports Car
                    </p>

                    <h3 className="font-display text-2xl md:text-3xl">
                      {car.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Previous button */}
          <button
            onClick={previousCar}
            className="absolute left-0 md:left-8 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/50 text-white hover:bg-bronze hover:text-ink transition-all"
            aria-label="Previous car"
          >
            ←
          </button>

          {/* Next button */}
          <button
            onClick={nextCar}
            className="absolute right-0 md:right-8 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/50 text-white hover:bg-bronze hover:text-ink transition-all"
            aria-label="Next car"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {COVERFLOW_CARS.map((car, index) => (
            <button
              key={car.name}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${car.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-bronze"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
function Inventory() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleBookNow = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="inventory" className="bg-ink py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
        {INVENTORY.map((item) => {
          const isSelected = selectedCar?.name === item.name;

          return (
            <div
              key={item.name}
              className="relative aspect-4/5 md:aspect-square overflow-hidden group cursor-pointer"
              onClick={() =>
                setSelectedCar(isSelected ? null : item)
              }
            >
              {/* Car Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isSelected
                    ? "bg-black/80"
                    : "bg-gradient-to-t from-ink via-ink/10 to-transparent"
                }`}
              />

              {/* Normal car name */}
              {!isSelected && (
                <div className="absolute bottom-5 left-5 text-paper">
                  <p className="uppercase tracking-widest text-[0.65rem] text-bronze-light mb-1">
                    {item.type}
                  </p>

                  <p className="font-display text-lg">
                    {item.name}
                  </p>
                </div>
              )}

              {/* Description panel */}
              {isSelected && (
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 text-paper">
                  <p className="uppercase tracking-[0.25em] text-xs text-bronze-light mb-3">
                    {item.type}
                  </p>

                  <h3 className="font-display text-2xl md:text-3xl mb-4">
                    {item.name}
                  </h3>

                  <p className="text-stone text-sm md:text-base leading-relaxed mb-7">
                    {item.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookNow();
                    }}
                    className="w-fit rounded-full bg-bronze px-6 py-3 text-xs md:text-sm uppercase tracking-wide text-ink font-medium hover:bg-bronze-light transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = TESTIMONIALS.slice(0, 2);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentReview(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 md:px-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.3em] text-bronze text-xs mb-4">
            Reviews
          </p>

          <h2 className="font-display text-4xl md:text-5xl">
            What Riders and Drivers Say
          </h2>
        </div>

        {/* Review Carousel */}
        <div className="relative">

          {/* Review Window */}
          <div className="overflow-hidden rounded-3xl">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentReview * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="min-w-full px-2"
                >
                  <div className="bg-paper rounded-3xl p-10 md:p-16 border border-ink/5 shadow-lg text-center">

                    {/* Quote */}
                    <div className="text-bronze text-5xl font-serif mb-5">
                      “
                    </div>

                    <p className="text-slate text-lg md:text-xl leading-relaxed italic max-w-3xl mx-auto mb-8">
                      {review.quote}
                    </p>

                    {/* Name */}
                    <p className="font-display text-xl">
                      {review.name}
                    </p>

                    <p className="uppercase tracking-[0.2em] text-xs text-bronze mt-2">
                      Verified Customer
                    </p>

                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Previous Button */}
          <button
            onClick={previousReview}
            aria-label="Previous review"
            className="
              absolute
              left-0
              md:-left-6
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              bg-ink
              text-paper
              flex
              items-center
              justify-center
              hover:bg-bronze
              hover:text-ink
              transition-colors
              duration-300
              z-10
            "
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={nextReview}
            aria-label="Next review"
            className="
              absolute
              right-0
              md:-right-6
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              bg-ink
              text-paper
              flex
              items-center
              justify-center
              hover:bg-bronze
              hover:text-ink
              transition-colors
              duration-300
              z-10
            "
          >
            →
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              onClick={() => setCurrentReview(index)}
              aria-label={`Show review from ${review.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? "w-8 bg-bronze"
                  : "w-2 bg-ink/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
 

function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-28 bg-ink text-paper text-center"
    >
      <div className="mx-auto max-w-2xl px-6">
        <p className="uppercase tracking-[0.3em] text-bronze-light text-xs mb-4">
          Get In Touch
        </p>

        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Ready to Find Your Vision?
        </h2>

        <p className="text-stone mb-10">
          Reach out and tell us what you're looking for - we'll help you find
          the car or bike that fits your life.
        </p>

        <a
          href="tel:+10000000000"
          className="inline-flex items-center rounded-full bg-bronze px-8 py-4 text-sm uppercase tracking-wide text-ink font-medium hover:bg-bronze-light transition-colors duration-200"
        >
          Call Us Today
        </a>
      </div>
    </section>
  );
}


/* =========================================================
   CAR PROFILE CARD
   ========================================================= */

const HERO_IMAGE =
  "https://commons.wikimedia.org/wiki/Special:FilePath/2022_Lamborghini_Sian_3.jpg?width=900";

const THUMBS = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/2022_Lamborghini_Sian.jpg?width=200",
    offset: 0,
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini_Sian_at_IAA_2019_IMG_0324.jpg?width=200",
    offset: -34,
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti_Divo.jpg?width=200",
    offset: 0,
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti_Chiron.jpg?width=200",
    offset: 44,
  },
];

function CarProfileCard({
  title = "Bugatti Sian",
  heroImage = HERO_IMAGE,
  thumbs = THUMBS,
}) {
  return (
    <section className="w-full min-h-[600px] bg-black flex flex-col items-center pt-0 pb-16 px-6">
      <div className="w-full max-w-md">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-80 object-cover rounded-b-3xl"
        />
      </div>

      <h2 className="text-white text-3xl font-medium mt-6 mb-10 tracking-tight">
        {title}
      </h2>

      <div className="flex items-start gap-5">
        {thumbs.map((t, i) => (
          <div
            key={i}
            className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-white/10 shrink-0"
            style={{
              transform: `translateY(${t.offset}px)`,
            }}
          >
            <img
              src={t.src}
              alt={`${title} thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  return (
    <footer className="bg-ink text-paper pt-20 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <p className="font-display text-lg mb-4">
            <span className="font-semibold">
              One Vision One Automobile
            </span>{" "}
            is here to make your vision real.
          </p>

          <p className="text-stone text-sm">
            Join us today and find the car or bike that fits your life.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">
            Company Links
          </h4>

          <div className="grid grid-cols-2 gap-y-3 text-sm text-stone">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-bronze-light transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">
            Stay Updated
          </h4>

          <p className="text-stone text-sm">
            Don't miss out on upcoming offers - reach out to get the latest
            from our team.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-6 border-t border-white/10 text-stone text-sm">
        &copy; 2026 One Vision One Automobile. All Rights Reserved.
      </div>
    </footer>
  );
}


/* =========================================================
   MAIN APP
   ========================================================= */

export default function App() {
  return (
    <div className="bg-paper text-ink">
      <NavBar />
      <Hero />
      <Marquee />
      <About />
      <VisionStory />
      <Services />
      <Mission />
      <CoverFlowGallery />
      <Inventory />
      <Testimonials />
      <ContactCTA />

      

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
