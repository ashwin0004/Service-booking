"use client";

import React from 'react';
import Link from 'next/link';
export default function SereneWellnessSpa() {
  // In a real app, we would fetch data based on the dynamic ID from the URL
  
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/marketplace" className="flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-primary dark:text-white text-3xl">
                spa
              </span>
              <h1 className="text-xl font-bold tracking-tight text-primary dark:text-white">
                SERENE
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium hover:text-primary/70 transition-colors" href="#">
                Treatments
              </a>
              <a className="text-sm font-medium hover:text-primary/70 transition-colors" href="#">
                Venues
              </a>
              <a className="text-sm font-medium hover:text-primary/70 transition-colors" href="#">
                Gifts
              </a>
              <a className="text-sm font-medium hover:text-primary/70 transition-colors" href="#">
                Deals
              </a>
            </nav>
          </div>
          <div className="flex-1 max-w-md hidden sm:block">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm"
                placeholder="Search treatments or venues"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden lg:block text-sm font-semibold px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              Partner with us
            </button>
            <button className="bg-primary text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-primary/90 transition-all">
              Log In
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2 rounded-xl overflow-hidden mb-8 h-[300px] md:h-[450px]">
          <div className="md:col-span-3 lg:col-span-3 relative group overflow-hidden">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_NyCY2Q2O4PxkKh6hrX2iGMlJsVMj842Z70v0bAd45G3V4AaF_loBZOIJUeyqVlZJ2kz4lnXycJtUzkQcFIuXhv1QvjKvmnyx9qhIcPkR-q2Y6KU2ZDzf4gVFB3axfWhC5v4uh6QbUnmHKNqDH1wJ2u7mCESCoYSkpfsA70BCUUG_jIPE7HOzm26YVL04VSlCvA8mfNnv9iAWggHMiCw5x2L2nwcqMXf0zv1JWlvaVrgc-9Zvko-zmZsZ77qrbQdsViYLW3UbU5s')" }}
            ></div>
          </div>
          <div className="hidden md:grid md:col-span-1 lg:col-span-2 grid-rows-2 gap-2">
            <div className="relative group overflow-hidden">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUncTXBJlcjhUbdV35jBJw9y-4DLceBK8S-MsALQ4P2oS-5lcHCDVDGRDP91qY7OB9t94DE_mHzvcPVEHKP4m_omLX1o-AnrK4Bo8ItmF20wH7y7iA4BlG1QYtDcoktBPoQCPzFHq2bIjBm8r80VgJRMUGC5dcWwdLZIFckL78Kl9j9fttCBbng9ebHiImWaa6Fmi9oicbXo7L9A64WJhrD6Lalhr9N1X5vkwLrcZO91Ea19llmv5VsFz588jIi7zK3ZyLmG5-pn0')" }}
              ></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative group overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBT-56mddZo5XJpoy1ZXjTVuqEQnv0krkZmiO-nEz_shO1TCkPT07WVQAaqYRF59EysymjzwjKIsbuZrQTKxDkWwLUGkvWIxvSrRuuSlAAzWpPKUe395UgtoLv3qYYHgOMXO_KYSF3uC606TZjwV-4XNU5uerGY_xzZSyeUOwYfWQK0jSIWto-O-ARM-Z4WAzninLyh_FU5W0Q6Aw4HIwclUDsrEQE2dVlOZpVtUfm1lYcUTUFuZmDt0yALlMspt6r1Uu8CBx8jp4')" }}
                ></div>
              </div>
              <div className="relative group overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8w58clNwWPt9BY1cg0NhkP_3N7kEclLyRp9iBAZIAM9aeXNFj5N6vhazxMy9MQm--Q5uof4SRKBEtDoWvuCuwi3fn2-AFfBlloJj7K-kGyVxF-G7nwExcBXutZV9F6Xw_gsvSlogbuwlAkZvfiNxPi55F1XqhMGFf1Vp3LsyP_t2T5ss_sO0oi0ttYVXnhjUeC9M1ArcWLchzyYmBsbkBM4C6rAAtrN6WuojHuEex5XefNHV0qIJcaqOxwnL3d70epe8gDTJyFrQ')" }}
                ></div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="text-white font-bold text-sm">See all 24 photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <section>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                      Wellness Center
                    </span>
                    <div className="flex items-center text-amber-500">
                      <span className="material-symbols-outlined text-sm fill-amber-500">
                        star
                      </span>
                      <span className="text-sm font-bold ml-1 text-slate-900 dark:text-slate-100">
                        4.9
                      </span>
                      <span className="text-sm font-medium text-slate-400 ml-1">
                        (1,240 reviews)
                      </span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white">
                    Serene Wellness & Vitality Spa
                  </h2>
                  <p className="flex items-center gap-1 text-slate-500 text-sm">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    12 Hans Road, Knightsbridge, London • Open until 9:00 PM
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </section>

            <nav className="flex gap-8 border-b border-slate-200 dark:border-slate-800 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <a className="pb-4 border-b-2 border-primary font-bold text-sm text-primary" href="#services">
                Services
              </a>
              <a className="pb-4 border-b-2 border-transparent font-bold text-sm text-slate-400 hover:text-slate-600" href="#reviews">
                Reviews
              </a>
              <a className="pb-4 border-b-2 border-transparent font-bold text-sm text-slate-400 hover:text-slate-600" href="#about">
                About
              </a>
              <a className="pb-4 border-b-2 border-transparent font-bold text-sm text-slate-400 hover:text-slate-600" href="#location">
                Location
              </a>
            </nav>

            <section className="space-y-10" id="services">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Featured</h3>
                <div className="space-y-4">
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
                    <div className="space-y-1">
                      <h4 className="font-bold group-hover:text-primary transition-colors">
                        Full Body Deep Tissue Massage
                      </h4>
                      <p className="text-xs text-slate-500">
                        60 mins • Intensive therapy for chronic muscle tension
                      </p>
                      <p className="text-sm font-bold text-primary">£85.00</p>
                    </div>
                    <button className="bg-primary/5 hover:bg-primary text-primary hover:text-white px-6 py-2 rounded-lg font-bold text-sm transition-all">
                      Book
                    </button>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
                    <div className="space-y-1">
                      <h4 className="font-bold group-hover:text-primary transition-colors">
                        Radiance Boosting Facial
                      </h4>
                      <p className="text-xs text-slate-500">
                        45 mins • Instant glow and deep hydration
                      </p>
                      <p className="text-sm font-bold text-primary">£65.00</p>
                    </div>
                    <button className="bg-primary/5 hover:bg-primary text-primary hover:text-white px-6 py-2 rounded-lg font-bold text-sm transition-all">
                      Book
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Body Massage</h3>
                <div className="space-y-4">
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
                    <div className="space-y-1">
                      <h4 className="font-bold group-hover:text-primary transition-colors">
                        Hot Stone Therapy
                      </h4>
                      <p className="text-xs text-slate-500">
                        90 mins • Relaxing warmth for soul and body
                      </p>
                      <p className="text-sm font-bold text-primary">£110.00</p>
                    </div>
                    <button className="bg-primary/5 hover:bg-primary text-primary hover:text-white px-6 py-2 rounded-lg font-bold text-sm transition-all">
                      Book
                    </button>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
                    <div className="space-y-1">
                      <h4 className="font-bold group-hover:text-primary transition-colors">
                        Swedish Relaxation
                      </h4>
                      <p className="text-xs text-slate-500">
                        60 mins • Classic gentle therapeutic touch
                      </p>
                      <p className="text-sm font-bold text-primary">£75.00</p>
                    </div>
                    <button className="bg-primary/5 hover:bg-primary text-primary hover:text-white px-6 py-2 rounded-lg font-bold text-sm transition-all">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-8 space-y-6" id="about">
              <h3 className="text-2xl font-bold">About</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Welcome to Serene Wellness & Vitality Spa, your urban sanctuary in the heart of
                Knightsbridge. We specialize in holistic well-being, offering a curated selection of
                advanced skincare, therapeutic massages, and restorative body treatments. Our mission
                is to provide an escape from the city hustle, focusing on personalized care and
                lasting results in a tranquil, luxury environment.
              </p>
            </section>

            <section className="space-y-6" id="location">
              <h3 className="text-2xl font-bold">Venue Location</h3>
              <div className="rounded-xl overflow-hidden h-[300px] bg-slate-200 relative">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqCk5D8pQkPTJo8YUHIxyhHfoi2tEbrK4S-Jz2RfiXaMNFo2PXrfiuLjVVa9hEaUMVcantNtDcH41Psn3-Romfdq_BTHoncz-oupe8WuAZiIzBjHys3SpVAVQppz_djQiSR57fmZBiPJYP0LlWQYFJtRWnAXn7fqUm1Df9_SvKj4yUzZJC2ii_FTP1PJwHwxCZ0KdV-85J5nfI9vYqa_CERgDDBFmIMc5AUdUIGOUWn3zUrsYD7yWw0gazK5HzchQJssjUiRUBG5c')" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-xl">
                    <span className="material-symbols-outlined text-primary text-3xl fill-primary">
                      location_on
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 text-center">
                12 Hans Road, Knightsbridge, London SW3 1RT
              </p>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-bold mb-6">Your Booking</h4>
                <div className="space-y-6">
                  <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-300 text-3xl">
                        shopping_bag
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">
                      No services selected yet.<br />
                      Choose a service to start booking.
                    </p>
                  </div>
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Services (0)</span>
                      <span className="font-bold">£0.00</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">lock</span>
                      Secure booking
                    </div>
                    <button
                      className="w-full bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed py-3 rounded-lg font-bold transition-all"
                      disabled
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                <h4 className="text-sm font-bold mb-4">Opening Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Monday</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-primary">
                    <span>Tuesday</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Wednesday</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Thursday</span>
                    <span>10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Friday</span>
                    <span>9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Saturday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Sunday</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-12">
          <h3 className="text-2xl font-bold mb-8">Venues nearby</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlOD4V1IOg4VYf0wK_CWj52vuno3jTUQacsK2kYMjazDxwqNFUKmyg5x6S_ujBQOuVkQ0Yc6ePmGaRBEJPiXg6BnNGGH9JCmUF0ppn9JxrfvRpFKTEwSO5ShOs1qB1M74OERnhoB8Z88YokljZ9_4tVm0_MrsoUmOPz8bEflR8joxLw9L_gvCLLLnCVukOALonD4IIuMx90pNuPEvGZ5CEQUW2Fg6E7BYsX7Qjmz_ch6qr2FWsg0jApVFHQG2-I4Xd4jjck4ls3uQ')" }}
                ></div>
              </div>
              <div>
                <h5 className="font-bold">Azure Day Spa</h5>
                <p className="text-xs text-slate-500">South Kensington • 0.4 miles away</p>
                <div className="flex items-center text-amber-500 mt-1">
                  <span className="material-symbols-outlined text-xs fill-amber-500">star</span>
                  <span className="text-xs font-bold ml-1 text-slate-900 dark:text-slate-100">4.8</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8Jh8hP55zD474rMFxsGMN6RNR_-aThLKCZU0aiCFWErGwC4sBQWL3CyA75_nLRv1mleOyNzw7h4OQyLck37KvMCHuQUbaa0308skkYM0ywL-ASTncHyaSWoYG9FkpxKVeOf9t4rvNzxl0aPnbw19Zgrz4jyu41D6-o_HAwvEfUnmzdFS547E8KU7IUI4XTWY4sfygvaFrF0cATUC3qpqxWhko-mVqHt_RnTBhld716ItwGtK0RyTUpQepKt7ZK50Y4TBcMnrEghA')" }}
                ></div>
              </div>
              <div>
                <h5 className="font-bold">The Retreat Chelsea</h5>
                <p className="text-xs text-slate-500">Chelsea • 0.8 miles away</p>
                <div className="flex items-center text-amber-500 mt-1">
                  <span className="material-symbols-outlined text-xs fill-amber-500">star</span>
                  <span className="text-xs font-bold ml-1 text-slate-900 dark:text-slate-100">5.0</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApC-rVYwVLPNQAY2W7wULH1ZNUxgfEn4EYTDCOGRNj-UczD2V0jb38VYCnum_WTMCFf9pYJvssQDWeKQ1ZSi-Hf802J2rInXQtBwX9LczGoVrfy69OLbp7GjPE-4j9g96kfBPMeqg-GWXJS_rmnd5NF-IVUId_5fy4LO4BVYCc8gGcS_-DdXG3T3rw7xbTjwAe67hyO0bmxzpVze4kXBKvfB_fU4QxwZA7iVRwicyy02EFp-D22zbewnPNNyqCDYjWFSdlDpKpmUw')" }}
                ></div>
              </div>
              <div>
                <h5 className="font-bold">Luxe Vitality Hub</h5>
                <p className="text-xs text-slate-500">Mayfair • 1.2 miles away</p>
                <div className="flex items-center text-amber-500 mt-1">
                  <span className="material-symbols-outlined text-xs fill-amber-500">star</span>
                  <span className="text-xs font-bold ml-1 text-slate-900 dark:text-slate-100">4.7</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACb0bYYsuTz2VFKkuMIqupfCbanc9CXmMUVaNsYG2dKt1F2GNKceOvtdwkN3ReM-OG9NyExgIz0ADFAcX_7XuVENIewTTNShajfCuJ2HLL19r1uUXMhOzS9q_hvsv2ajvr6yOXsSwzoUMoNzeiQa561S3XIzghb4Ci6ruiL5sZfz8ZRowP992kGCSYZvMBHKwEBhMjCFWRCZ8VAgTZp4PdO-WR7p3qAMqJ1QiBgLiUMVX8s7beM4onXiU7epArciBB6F4wZiqLCi8')" }}
                ></div>
              </div>
              <div>
                <h5 className="font-bold">Zenith Skincare</h5>
                <p className="text-xs text-slate-500">Belgravia • 0.3 miles away</p>
                <div className="flex items-center text-amber-500 mt-1">
                  <span className="material-symbols-outlined text-xs fill-amber-500">star</span>
                  <span className="text-xs font-bold ml-1 text-slate-900 dark:text-slate-100">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1 space-y-6">
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined text-primary text-3xl">spa</span>
                <h1 className="text-xl font-bold tracking-tight text-primary">SERENE</h1>
              </div>
              <div className="flex gap-4">
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">social_leaderboard</span>
                </a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">chat</span>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-sm">Product</h6>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary" href="#">For Partners</a></li>
                <li><a className="hover:text-primary" href="#">Download App</a></li>
                <li><a className="hover:text-primary" href="#">Gift Cards</a></li>
                <li><a className="hover:text-primary" href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-sm">Company</h6>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary" href="#">About Us</a></li>
                <li><a className="hover:text-primary" href="#">Careers</a></li>
                <li><a className="hover:text-primary" href="#">Press</a></li>
                <li><a className="hover:text-primary" href="#">Blog</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-sm">Legal</h6>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary" href="#">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-sm">Support</h6>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary" href="#">Help Center</a></li>
                <li><a className="hover:text-primary" href="#">Contact Us</a></li>
                <li><a className="hover:text-primary" href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 dark:border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2024 Serene Wellness Spa. All rights reserved.</p>
            <div className="flex gap-6">
              <span>English (UK)</span>
              <span>United Kingdom</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
