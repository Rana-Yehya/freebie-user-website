import HomeMainImage from "@/components/home/home-main-image";
import HomeStory from "@/components/home-story";
import ProductCard from "@/components/product-card";

export default async function Home() {
  return (
    <>
      {/* <header
        id="_header_search_integrated_h17_001"
        className="relative bg-white dark:bg-neutral-950 border-b border-slate-100 dark:border-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <a
              data-motion="logo"
              href="#"
              className="flex items-center shrink-0"
              style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
            >
              <img
                src="https://cdn.ln-cdn.com/image/placeholder-logo-full.png"
                ln-logo=""
                className="h-8"
                alt="Logo"
              />
            </a>

            <nav
              data-motion="nav"
              className="hidden lg:flex items-center gap-8 flex-1 justify-center"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <a
                href="#"
                className="text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div
              data-motion="actions"
              className="flex items-center gap-2 shrink-0"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <button
                data-motion="button"
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-neutral-400 hidden dark:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-darkreader-inline-stroke=""
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-neutral-400 block dark:hidden"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-darkreader-inline-stroke=""
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </button>

              <a
                href="#"
                className="hidden sm:flex h-10 px-4 text-sm font-medium text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors items-center"
              >
                Sign In
              </a>

              <a
                data-motion="button"
                href="#"
                className="h-10 px-5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-xl transition-colors flex items-center"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>
      <section
        id="_hero_luxury_perfume_v6_001"
        className="relative min-h-screen bg-white dark:bg-neutral-950 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-indigo-100/50 via-white to-white dark:from-indigo-950/50 dark:via-neutral-950 dark:to-neutral-950"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-20">
            <div>
              <span
                data-motion="badge"
                className="inline-block text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-6"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                Maison de Parfum
              </span>
              <h1>
                <span
                  data-animate="heading"
                  className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-none tracking-tight"
                  style={{ opacity: 1 }}
                >
                  <span
                    className="motion-word"
                    style={{
                      display: "inline-block",
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    THE
                  </span>{" "}
                  <span
                    className="motion-word"
                    style={{
                      display: "inline-block",
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    ART
                  </span>{" "}
                  <span
                    className="motion-word"
                    style={{
                      display: "inline-block",
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    OF
                  </span>
                </span>
                <span
                  data-animate="heading"
                  className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-indigo-600 dark:text-indigo-400 leading-none tracking-tight mt-3"
                  style={{ opacity: 1 }}
                >
                  <span
                    className="motion-word"
                    style={{
                      display: "inline-block",
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    SCENT
                  </span>
                </span>
              </h1>
              <p
                data-animate="text"
                className="mt-8 text-xl text-slate-600 dark:text-neutral-400 max-w-lg leading-relaxed"
                style={{ opacity: 1 }}
              >
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Crafted
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  by
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  master
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  perfumers
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  using
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  the
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  world's
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  rarest
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  ingredients.
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Each
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  fragrance
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  tells
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  a
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  story
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  of
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  elegance,
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  mystery,
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  and
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  timeless
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  sophistication.
                </span>
              </p>

              <div
                data-motion="button"
                className="flex flex-wrap gap-4 mt-10"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <a
                  data-motion="button"
                  href="#"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-colors"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Discover Collection
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-slate-100 dark:bg-white/10 backdrop-blur-xs text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                >
                  Book Consultation
                </a>
              </div>

              <div
                data-motion="features"
                className="flex gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-neutral-800"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <div>
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    150+
                  </span>
                  <p className="text-slate-500 text-sm mt-1">
                    Rare Ingredients
                  </p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    40
                  </span>
                  <p className="text-slate-500 text-sm mt-1">Years Heritage</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    12
                  </span>
                  <p className="text-slate-500 text-sm mt-1">
                    Signature Scents
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                data-motion="image"
                className="relative z-10"
                style={{
                  opacity: 1,
                  transform: "scale(1)",
                  filter: "blur(0px)",
                }}
              >
                <img
                  data-motion="image"
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&amp;auto=format&amp;fit=crop&amp;q=80"
                  alt="Luxury perfume bottle"
                  className="w-full max-w-md mx-auto rounded-3xl"
                  style={{
                    opacity: 1,
                    transform: "scale(1)",
                    filter: "blur(0px)",
                  }}
                />
              </div>

              <div
                data-motion="card"
                className="absolute bottom-4 left-0 p-5 bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/20 max-w-[220px] z-20"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      data-motion="image"
                      src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&amp;auto=format&amp;fit=crop&amp;q=80"
                      alt="Perfumer"
                      className="w-full h-full object-cover"
                      style={{
                        opacity: 1,
                        transform: "scale(1)",
                        filter: "blur(0px)",
                      }}
                    />
                  </div>
                  <div>
                    <span className="text-slate-900 dark:text-white font-semibold block">
                      Marie Laurent
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                      Master Perfumer
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-neutral-400 text-sm mt-4 italic">
                  "Each fragrance is a journey through memory and emotion."
                </p>
              </div>

              <div
                data-motion="card"
                className="absolute top-4 right-4 p-4 bg-indigo-600 backdrop-blur-xs rounded-2xl z-20"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <span className="text-white font-semibold text-sm">
                  New Release
                </span>
                <span className="text-white/80 text-xs block mt-1">
                  Noir Éternel
                </span>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      <style>
        .carousel-track "display: flex; transition: transform 0.5s ease-out;"
      </style>
      <style className="darkreader darkreader--sync" media="screen"></style>
      <section
        id="_testimonial_sky_centered_image_carousel_t48_001"
        className="py-20 sm:py-24 bg-white dark:bg-neutral-950 overflow-hidden"
      >
        <style>
          .carousel-track "display: flex; transition: transform 0.5s ease-out;"
        </style>
        <style className="darkreader darkreader--sync" media="screen"></style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-motion="header"
            className="text-center mb-16"
            style={{ opacity: 1 }}
          >
            <span
              data-motion="badge"
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              <span data-animate="heading" style={{ opacity: 1 }}>
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Real
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  results
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  from
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  real
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  customers
                </span>
              </span>
            </h2>
            <p
              data-animate="text"
              className="text-slate-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto"
              style={{ opacity: 1 }}
            >
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                See
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                how
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                teams
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                around
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                the
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                world
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                are
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                achieving
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                their
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                goals
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                with
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                our
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                platform.
              </span>
            </p>
          </div>
        </div>

        <div
          data-motion="carousel"
          className="overflow-hidden px-4 sm:px-6 lg:px-8"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            filter: "blur(0px)",
          }}
        >
          <div
            data-carousel="track"
            className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
          >
            <div
              data-motion="card"
              className="shrink-0 w-[360px] snap-start"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <div className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg dark:shadow-neutral-900/50">
                <img
                  data-motion="image"
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&amp;auto=format&amp;fit=crop&amp;q=80"
                  alt="Team collaboration"
                  style={{
                    opacity: 1,
                    transform: "scale(1)",
                    filter: "blur(0px)",
                  }}
                />
                <div className="p-6">
                  <p className="text-slate-700 dark:text-neutral-300 leading-relaxed mb-6">
                    "The platform transformed how our team collaborates. We've
                    seen a 40% increase in productivity."
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-neutral-800">
                    <div className="flex items-center gap-3">
                      <img
                        data-motion="avatar"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;auto=format&amp;fit=crop&amp;q=80"
                        alt="Jennifer Walsh"
                        className="w-10 h-10 rounded-full object-cover"
                        style={{
                          opacity: 1,
                          transform: "scale(1)",
                          filter: "blur(0px)",
                        }}
                      />
                      <div>
                        <h6 className="text-slate-900 dark:text-white text-sm font-semibold">
                          Jennifer Walsh
                        </h6>
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs">
                          Product Manager
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-motion="card"
              className="shrink-0 w-[360px] snap-start"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <div className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg dark:shadow-neutral-900/50">
                <img
                  data-motion="image"
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&amp;auto=format&amp;fit=crop&amp;q=80"
                  alt="Office meeting"
                  style={{
                    opacity: 1,
                    transform: "scale(1)",
                    filter: "blur(0px)",
                  }}
                />
                <div className="p-6">
                  <p className="text-slate-700 dark:text-neutral-300 leading-relaxed mb-6">
                    "Integration was seamless. Our development team was up and
                    running within hours."
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-neutral-800">
                    <div className="flex items-center gap-3">
                      <img
                        data-motion="avatar"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop&amp;q=80"
                        alt="Marcus Chen"
                        className="w-10 h-10 rounded-full object-cover"
                        style={{
                          opacity: 1,
                          transform: "scale(1)",
                          filter: "blur(0px)",
                        }}
                      />
                      <div>
                        <h6 className="text-slate-900 dark:text-white text-sm font-semibold">
                          Marcus Chen
                        </h6>
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs">
                          Tech Lead
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-motion="card"
              className="shrink-0 w-[360px] snap-start"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <div className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg dark:shadow-neutral-900/50">
                <img
                  data-motion="image"
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&amp;auto=format&amp;fit=crop&amp;q=80"
                  alt="Creative workspace"
                  style={{
                    opacity: 1,
                    transform: "scale(1)",
                    filter: "blur(0px)",
                  }}
                />
                <div className="p-6">
                  <p className="text-slate-700 dark:text-neutral-300 leading-relaxed mb-6">
                    "The analytics features give us insights we never had
                    before. Game changer for our strategy."
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-neutral-800">
                    <div className="flex items-center gap-3">
                      <img
                        data-motion="avatar"
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&amp;auto=format&amp;fit=crop&amp;q=80"
                        alt="Emily Rodriguez"
                        className="w-10 h-10 rounded-full object-cover"
                        style={{
                          opacity: 1,
                          transform: "scale(1)",
                          filter: "blur(0px)",
                        }}
                      />
                      <div>
                        <h6 className="text-slate-900 dark:text-white text-sm font-semibold">
                          Emily Rodriguez
                        </h6>
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-motion="card"
              className="shrink-0 w-[360px] snap-start"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <div className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg dark:shadow-neutral-900/50">
                <img
                  data-motion="image"
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&amp;auto=format&amp;fit=crop&amp;q=80"
                  alt="Team brainstorming"
                  style={{
                    opacity: 1,
                    transform: "scale(1)",
                    filter: "blur(0px)",
                  }}
                />
                <div className="p-6">
                  <p className="text-slate-700 dark:text-neutral-300 leading-relaxed mb-6">
                    "Customer support is exceptional. They helped us solve
                    complex issues within hours."
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-neutral-800">
                    <div className="flex items-center gap-3">
                      <img
                        data-motion="avatar"
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;auto=format&amp;fit=crop&amp;q=80"
                        alt="David Park"
                        className="w-10 h-10 rounded-full object-cover"
                        style={{
                          opacity: 1,
                          transform: "scale(1)",
                          filter: "blur(0px)",
                        }}
                      />
                      <div>
                        <h6 className="text-slate-900 dark:text-white text-sm font-semibold">
                          David Park
                        </h6>
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs">
                          CTO
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="_cta_rating_subscribe_v6_001"
        className="py-20 sm:py-24 bg-white dark:bg-neutral-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div
              data-motion="badge"
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-full mb-8"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <div className="flex items-center gap-1 text-indigo-500">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <span className="text-sm text-slate-600 dark:text-neutral-400">
                4.9 rating • 2,500+ reviews
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight"
              data-motion="hero"
              style={{ opacity: 1 }}
            >
              <span data-animate="heading" style={{ opacity: 1 }}>
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Get
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  product
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  updates
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  and
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  exclusive
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  tips
                </span>
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 dark:text-neutral-400 max-w-xl mx-auto">
              <span data-animate="text" style={{ opacity: 1 }}>
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Join
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  thousands
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  of
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  professionals
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  who
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  receive
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  our
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  weekly
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  newsletter
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  with
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  actionable
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  insights.
                </span>
              </span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                data-motion="input"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              />
              <button
                data-motion="button"
                type="button"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                Subscribe
              </button>
            </div>

            <p
              data-motion="social-proof"
              className="mt-6 text-sm text-slate-500 dark:text-neutral-400"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              Trusted by teams at{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                Google
              </span>
              ,{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                Stripe
              </span>
              , and{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                Notion
              </span>
            </p>
          </div>
        </div>
      </section>
      <footer id="_footer_dark_subscribe_v6_001" className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-motion="newsletter"
            className="py-12 border-b border-slate-800"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              filter: "blur(0px)",
            }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                  Join our community
                </h3>
                <p className="text-slate-400">
                  Get early access to new features and exclusive content.
                </p>
              </div>
              <form className="flex w-full max-w-md">
                <input
                  data-motion="input"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-white dark:bg-neutral-900 border border-slate-800 rounded-l-xl text-white placeholder-slate-500 focus:outline-hidden focus:border-indigo-500 transition-colors"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                />
                <button
                  data-motion="button"
                  type="submit"
                  className="px-6 py-3.5 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-r-xl text-white font-semibold whitespace-nowrap"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div
              data-motion="brand"
              className="lg:col-span-1"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <a href="#" className="flex items-center mb-6">
                <img
                  src="https://cdn.ln-cdn.com/image/placeholder-logo-full.png"
                  ln-logo=""
                  className="h-10"
                  alt="Logo"
                />
              </a>
              <p className="text-slate-400 text-sm">
                Secure cloud storage for modern teams.
              </p>
            </div>

            <div
              data-motion="column"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <h4 className="text-white font-semibold mb-5">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-motion="column"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <h4 className="text-white font-semibold mb-5">Products</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Cloud Storage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Team Sync
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    File Sharing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    API Access
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-motion="column"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <h4 className="text-white font-semibold mb-5">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-motion="column"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <h4 className="text-white font-semibold mb-5">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            data-motion="bottom"
            className="py-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              filter: "blur(0px)",
            }}
          >
            <p className="text-slate-500 text-sm">
              © 2026 CloudSync. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-indigo-600 dark:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer> */}

      <HomeMainImage />
      <HomeStory />
      <ProductCard />
    </>
  );
}

{
  /* <img
        className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
        src="https://tailkits.com/ui/iframe/assets/img/bg-12.png"
        alt="Background image"
      /> */
}
