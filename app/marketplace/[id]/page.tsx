"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const timeSlots = [
  { time: '9:00 AM', status: 'AVAILABLE' },
  { time: '10:00 AM', status: 'AVAILABLE' },
  { time: '11:30 AM', status: 'AVAILABLE' },
  { time: '1:00 PM', status: 'AVAILABLE' },
  { time: '2:30 PM', status: 'AVAILABLE' },
  { time: '4:00 PM', status: 'AVAILABLE' },
];

const allServices = [
  { id: 1, name: 'Full Body Deep Tissue Massage', duration: '60 mins', price: 85, category: 'Featured', description: 'Intensive therapy for chronic muscle tension' },
  { id: 2, name: 'Radiance Boosting Facial', duration: '45 mins', price: 65, category: 'Featured', description: 'Instant glow and deep hydration' },
  { id: 3, name: 'Hot Stone Therapy', duration: '90 mins', price: 110, category: 'Body Massage', description: 'Relaxing warmth for soul and body' },
  { id: 4, name: 'Swedish Relaxation', duration: '60 mins', price: 75, category: 'Body Massage', description: 'Classic gentle therapeutic touch' },
];

export default function SereneWellnessSpa() {
  const [selectedTime, setSelectedTime] = React.useState('9:00 AM');
  const [selectedServiceIds, setSelectedServiceIds] = React.useState<number[]>([]);

  const toggleService = (id: number) => {
    setSelectedServiceIds(prev =>
      prev.includes(id) ? prev.filter(serviceId => serviceId !== id) : [...prev, id]
    );
  };

  const selectedServices = allServices.filter(s => selectedServiceIds.includes(s.id));
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="bg-white font-display text-black min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/marketplace" className="flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-black text-3xl">
                spa
              </span>
              <h1 className="text-xl font-bold tracking-tight text-black">
                SERENE
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium hover:text-black/70 transition-colors" href="#">
                Treatments
              </a>
              <a className="text-sm font-medium hover:text-black/70 transition-colors" href="#">
                Venues
              </a>
              <a className="text-sm font-medium hover:text-black/70 transition-colors" href="#">
                Gifts
              </a>
              <a className="text-sm font-medium hover:text-black/70 transition-colors" href="#">
                Deals
              </a>
            </nav>
          </div>
          <div className="flex-1 max-w-md hidden sm:block">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-black/40 group-focus-within:text-black">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-black/5 border-none rounded-lg focus:ring-2 focus:ring-black/20 text-sm"
                placeholder="Search treatments or venues"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden lg:block text-sm font-semibold px-4 py-2 hover:bg-black/5 rounded-lg transition-colors">
              Partner with us
            </button>
            <button className="bg-black text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-black/90 transition-all">
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
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                      Wellness Center
                    </span>
                    <div className="flex items-center text-black">
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                      <span className="text-sm font-bold ml-1">
                        4.9
                      </span>
                      <span className="text-sm font-medium text-black/40 ml-1">
                        (1,240 reviews)
                      </span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-black">
                    Serene Wellness & Vitality Spa
                  </h2>
                  <p className="flex items-center gap-1 text-black/60 text-sm">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    12 Hans Road, Knightsbridge, London • Open until 9:00 PM
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </motion.section>

            <nav className="flex gap-8 border-b border-black/10 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <a className="pb-4 border-b-2 border-black font-bold text-sm text-black" href="#services">
                Services
              </a>
              <a className="pb-4 border-b-2 border-transparent font-bold text-sm text-black/40 hover:text-black/60" href="#reviews">
                Reviews
              </a>
              <a className="pb-4 border-b-2 border-transparent font-bold text-sm text-black/40 hover:text-black/60" href="#about">
                About
              </a>
              <a className="pb-4 border-b-2 border-transparent font-bold text-sm text-black/40 hover:text-black/60" href="#location">
                Location
              </a>
            </nav>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-black">Select Appointment Time</h3>
                <div className="flex items-center gap-2 text-black/40 text-sm">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  <span>Tuesday, 24 Oct</span>
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {timeSlots.map((slot) => (
                  <motion.button
                    key={slot.time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`flex-none w-32 p-4 rounded-xl border-2 transition-all text-center space-y-1 ${
                      selectedTime === slot.time
                        ? 'border-black bg-black'
                        : 'border-black/5 bg-white hover:border-black/20'
                    }`}
                  >
                    <div className={`font-bold text-sm ${selectedTime === slot.time ? 'text-white' : 'text-black'}`}>{slot.time}</div>
                    <div className={`text-[10px] font-bold tracking-wider ${selectedTime === slot.time ? 'text-white/60' : 'text-green-600'}`}>
                      {slot.status}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10" 
              id="services"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Featured</h3>
                <div className="space-y-4">
                  {allServices.filter(s => s.category === 'Featured').map(service => (
                    <motion.div
                      key={service.id}
                      whileHover={{ x: 5 }}
                      className={`group flex items-center justify-between p-4 rounded-xl border transition-all ${
                        selectedServiceIds.includes(service.id)
                          ? 'border-black bg-black/5'
                          : 'border-black/10 hover:border-black/30'
                      }`}
                    >
                      <div className="space-y-1">
                        <h4 className="font-bold">{service.name}</h4>
                        <p className="text-xs text-black/40">{service.duration} • {service.description}</p>
                        <p className="text-sm font-bold text-black">£{service.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => toggleService(service.id)}
                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                          selectedServiceIds.includes(service.id)
                            ? 'bg-black text-white'
                            : 'bg-black/5 hover:bg-black hover:text-white text-black'
                        }`}
                      >
                        {selectedServiceIds.includes(service.id) ? 'Added' : 'Book'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Body Massage</h3>
                <div className="space-y-4">
                  {allServices.filter(s => s.category === 'Body Massage').map(service => (
                    <motion.div
                      key={service.id}
                      whileHover={{ x: 5 }}
                      className={`group flex items-center justify-between p-4 rounded-xl border transition-all ${
                        selectedServiceIds.includes(service.id)
                          ? 'border-black bg-black/5'
                          : 'border-black/10 hover:border-black/30'
                      }`}
                    >
                      <div className="space-y-1">
                        <h4 className="font-bold">{service.name}</h4>
                        <p className="text-xs text-black/40">{service.duration} • {service.description}</p>
                        <p className="text-sm font-bold text-black">£{service.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => toggleService(service.id)}
                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                          selectedServiceIds.includes(service.id)
                            ? 'bg-black text-white'
                            : 'bg-black/5 hover:bg-black hover:text-white text-black'
                        }`}
                      >
                        {selectedServiceIds.includes(service.id) ? 'Added' : 'Book'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            <section className="pt-8 space-y-6" id="about">
              <h3 className="text-2xl font-bold">About</h3>
              <p className="text-black/70 leading-relaxed">
                Welcome to Serene Wellness & Vitality Spa, your urban sanctuary in the heart of
                Knightsbridge. We specialize in holistic well-being, offering a curated selection of
                advanced skincare, therapeutic massages, and restorative body treatments. Our mission
                is to provide an escape from the city hustle, focusing on personalized care and
                lasting results in a tranquil, luxury environment.
              </p>
            </section>

            <section className="space-y-6" id="location">
              <h3 className="text-2xl font-bold">Venue Location</h3>
              <div className="rounded-xl overflow-hidden h-[300px] bg-black/5 relative">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqCk5D8pQkPTJo8YUHIxyhHfoi2tEbrK4S-Jz2RfiXaMNFo2PXrfiuLjVVa9hEaUMVcantNtDcH41Psn3-Romfdq_BTHoncz-oupe8WuAZiIzBjHys3SpVAVQppz_djQiSR57fmZBiPJYP0LlWQYFJtRWnAXn7fqUm1Df9_SvKj4yUzZJC2ii_FTP1PJwHwxCZ0KdV-85J5nfI9vYqa_CERgDDBFmIMc5AUdUIGOUWn3zUrsYD7yWw0gazK5HzchQJssjUiRUBG5c')" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-xl">
                    <span className="material-symbols-outlined text-black text-3xl">
                      location_on
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-black/40 text-center">
                12 Hans Road, Knightsbridge, London SW3 1RT
              </p>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="sticky top-24 space-y-6">
              <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-black">Your Booking</h4>
                  <AnimatePresence>
                    {selectedServices.length > 0 && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setSelectedServiceIds([])}
                        className="text-[10px] font-bold text-black/40 hover:text-black tracking-widest uppercase"
                      >
                        Clear All
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-6">
                  <div className="min-h-[120px] flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                      {selectedServices.length === 0 ? (
                        <motion.div
                          key="empty"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center py-6 text-center space-y-4"
                        >
                          <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-black/20 text-3xl">
                              shopping_bag
                            </span>
                          </div>
                          <p className="text-sm text-black/40">
                            No services selected yet.<br />
                            Choose a service to start booking.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="items"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full space-y-4"
                        >
                          {selectedServices.map(service => (
                            <motion.div
                              layout
                              key={service.id}
                              className="flex justify-between items-start text-sm group"
                            >
                              <div className="space-y-0.5">
                                <p className="font-bold text-black">{service.name}</p>
                                <p className="text-[10px] text-black/40 uppercase tracking-wider">{selectedTime} • {service.duration}</p>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <p className="font-bold">£{service.price.toFixed(2)}</p>
                                <button
                                  onClick={() => toggleService(service.id)}
                                  className="opacity-0 group-hover:opacity-100 text-[10px] font-bold text-red-500 hover:text-red-600 transition-opacity"
                                >
                                  Remove
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="border-t border-black/5 pt-6 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-black/60 font-medium">Subtotal ({selectedServices.length})</span>
                      <motion.span
                        key={totalPrice}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="font-bold text-lg"
                      >
                        £{totalPrice.toFixed(2)}
                      </motion.span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-black/40 font-bold uppercase tracking-widest bg-black/5 p-2 rounded justify-center">
                      <span className="material-symbols-outlined text-sm">lock</span>
                      Secure booking
                    </div>
                    <motion.button
                      whileHover={selectedServices.length > 0 ? { scale: 1.02 } : {}}
                      whileTap={selectedServices.length > 0 ? { scale: 0.98 } : {}}
                      className={`w-full py-3 rounded-lg font-bold transition-all ${
                        selectedServices.length > 0
                          ? 'bg-black text-white hover:bg-black/90 shadow-lg shadow-black/10'
                          : 'bg-black/5 text-black/40 cursor-not-allowed'
                      }`}
                      disabled={selectedServices.length === 0}
                    >
                      Checkout
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
                <h4 className="text-sm font-bold mb-4">Opening Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Monday</span>
                    <span className="text-black">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-black border-y border-black/5 py-1">
                    <span>Tuesday</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Wednesday</span>
                    <span className="text-black">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Thursday</span>
                    <span className="text-black">10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Friday</span>
                    <span className="text-black">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Saturday</span>
                    <span className="text-black">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Sunday</span>
                    <span className="text-black">11:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 border-t border-black/10 pt-12"
        >
          <h3 className="text-2xl font-bold mb-8">Venues nearby</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -10 }} className="group cursor-pointer space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlOD4V1IOg4VYf0wK_CWj52vuno3jTUQacsK2kYMjazDxwqNFUKmyg5x6S_ujBQOuVkQ0Yc6ePmGaRBEJPiXg6BnNGGH9JCmUF0ppn9JxrfvRpFKTEwSO5ShOs1qB1M74OERnhoB8Z88YokljZ9_4tVm0_MrsoUmOPz8bEflR8joxLw9L_gvCLLLnCVukOALonD4IIuMx90pNuPEvGZ5CEQUW2Fg6E7BYsX7Qjmz_ch6qr2FWsg0jApVFHQG2-I4Xd4jjck4ls3uQ')" }}
                ></div>
              </div>
              <div>
                <h5 className="font-bold">Azure Day Spa</h5>
                <p className="text-xs text-slate-500">South Kensington • 0.4 miles away</p>
                <div className="flex items-center text-black mt-1">
                  <span className="material-symbols-outlined text-xs">star</span>
                  <span className="text-xs font-bold ml-1 text-black">4.8</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="group cursor-pointer space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8Jh8hP55zD474rMFxsGMN6RNR_-aThLKCZU0aiCFWErGwC4sBQWL3CyA75_nLRv1mleOyNzw7h4OQyLck37KvMCHuQUbaa0308skkYM0ywL-ASTncHyaSWoYG9FkpxKVeOf9t4rvNzxl0aPnbw19Zgrz4jyu41D6-o_HAwvEfUnmzdFS547E8KU7IUI4XTWY4sfygvaFrF0cATUC3qpqxWhko-mVqHt_RnTBhld716ItwGtK0RyTUpQepKt7ZK50Y4TBcMnrEghA')" }}
                ></div>
              </div>
              <div>
                <h5 className="font-bold">The Retreat Chelsea</h5>
                <p className="text-xs text-slate-500">Chelsea • 0.8 miles away</p>
                <div className="flex items-center text-black mt-1">
                  <span className="material-symbols-outlined text-xs">star</span>
                  <span className="text-xs font-bold ml-1 text-black">5.0</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="group cursor-pointer space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApC-rVYwVLPNQAY2W7wULH1ZNUxgfEn4EYTDCOGRNj-UczD2V0jb38VYCnum_WTMCFf9pYJvssQDWeKQ1ZSi-Hf802J2rInXQtBwX9LczGoVrfy69OLbp7GjPE-4j9g96kfBPMeqg-GWXJS_rmnd5NF-IVUId_5fy4LO4BVYCc8gGcS_-DdXG3T3rw7xbTjwAe67hyO0bmxzpVze4kXBKvfB_fU4QxwZA7iVRwicyy02EFp-D22zbewnPNNyqCDYjWFSdlDpKpmUw')" }}
                ></div>
              </div>
              <div>
                <h5 className="font-bold">Luxe Vitality Hub</h5>
                <p className="text-xs text-slate-500">Mayfair • 1.2 miles away</p>
                <div className="flex items-center text-black mt-1">
                  <span className="material-symbols-outlined text-xs">star</span>
                  <span className="text-xs font-bold ml-1 text-black">4.7</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="group cursor-pointer space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACb0bYYsuTz2VFKkuMIqupfCbanc9CXmMUVaNsYG2dKt1F2GNKceOvtdwkN3ReM-OG9NyExgIz0ADFAcX_7XuVENIewTTNShajfCuJ2HLL19r1uUXMhOzS9q_hvsv2ajvr6yOXsSwzoUMoNzeiQa561S3XIzghb4Ci6ruiL5sZfz8ZRowP992kGCSYZvMBHKwEBhMjCFWRCZ8VAgTZp4PdO-WR7p3qAMqJ1QiBgLiUMVX8s7beM4onXiU7epArciBB6F4wZiqLCi8')" }}
                ></div>
              </div>
              <div>
                <h5 className="font-bold">Zenith Skincare</h5>
                <p className="text-xs text-slate-500">Belgravia • 0.3 miles away</p>
                <div className="flex items-center text-black mt-1">
                  <span className="material-symbols-outlined text-xs">star</span>
                  <span className="text-xs font-bold ml-1 text-black">4.9</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-white border-t border-black/10 mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1 space-y-6">
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined text-black text-3xl">spa</span>
                <h1 className="text-xl font-bold tracking-tight text-black">SERENE</h1>
              </div>
              <div className="flex gap-4">
                <a className="text-black/40 hover:text-black transition-colors" href="#">
                  <span className="material-symbols-outlined">social_leaderboard</span>
                </a>
                <a className="text-black/40 hover:text-black transition-colors" href="#">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a className="text-black/40 hover:text-black transition-colors" href="#">
                  <span className="material-symbols-outlined">chat</span>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-sm text-black">Product</h6>
              <ul className="space-y-2 text-sm text-black/60">
                <li><a className="hover:text-black" href="#">For Partners</a></li>
                <li><a className="hover:text-black" href="#">Download App</a></li>
                <li><a className="hover:text-black" href="#">Gift Cards</a></li>
                <li><a className="hover:text-black" href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-sm text-black">Company</h6>
              <ul className="space-y-2 text-sm text-black/60">
                <li><a className="hover:text-black" href="#">About Us</a></li>
                <li><a className="hover:text-black" href="#">Careers</a></li>
                <li><a className="hover:text-black" href="#">Press</a></li>
                <li><a className="hover:text-black" href="#">Blog</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-sm text-black">Legal</h6>
              <ul className="space-y-2 text-sm text-black/60">
                <li><a className="hover:text-black" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-black" href="#">Terms of Service</a></li>
                <li><a className="hover:text-black" href="#">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-sm text-black">Support</h6>
              <ul className="space-y-2 text-sm text-black/60">
                <li><a className="hover:text-black" href="#">Help Center</a></li>
                <li><a className="hover:text-black" href="#">Contact Us</a></li>
                <li><a className="hover:text-black" href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-black/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-black/40">
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
