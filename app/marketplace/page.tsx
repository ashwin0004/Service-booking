"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDown,
  Search,
  MapPin,
  Calendar,
  QrCode,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  Zap,
  Heart,
  Apple,
  Play,
  Sparkles,
  Globe,
  Share2,
  Mail,
  Send,
} from 'lucide-react';

// --- Header Component ---
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 px-6 lg:px-20 py-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tighter text-black lowercase">slot</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center px-6 py-2.5 border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition-all">
          List your business
        </button>
        <div className="flex items-center gap-1 p-1 pr-3 border border-slate-200 rounded-full hover:shadow-md cursor-pointer transition-shadow">
          <Image
            alt="User Profile"
            className="w-8 h-8 rounded-full object-cover"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            width={32}
            height={32}
          />
          <ChevronDown className="w-4 h-4 text-slate-600" />
        </div>
      </div>
    </header>
  );
}

// --- Antigravity Hero Component ---
function AntigravityHero() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const totalFrames = 300;

  useEffect(() => {
    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];

    // Preload all frames
    if (framesRef.current.length === 0) {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new window.Image();
        const index = String(i).padStart(3, '0');
        // Fetch path to frames
        img.src = `/frames/ezgif-frame-${index}.jpg`;
        img.onload = () => {
          loadedCount++;
          setLoadingPercentage(Math.round((loadedCount / totalFrames) * 100));
          if (loadedCount === totalFrames && canvasRef.current) {
            drawFrame(0);
          }
        };
        frames.push(img);
      }
      framesRef.current = frames;
    }
  }, []);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = framesRef.current[frameIndex];

    if (!canvas || !ctx || !img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;

    let renderWidth, renderHeight, x, y;

    if (canvasRatio > imgRatio) {
      renderWidth = rect.width;
      renderHeight = rect.width / imgRatio;
      x = 0;
      y = (rect.height - renderHeight) / 2;
    } else {
      renderWidth = rect.height * imgRatio;
      renderHeight = rect.height;
      x = (rect.width - renderWidth) / 2;
      y = 0;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.filter = 'brightness(0.85)';
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
    ctx.filter = 'none';
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (loadingPercentage < 100) return;

      const percentage = e.clientX / window.innerWidth;
      let frameIndex = Math.floor(percentage * totalFrames);
      if (frameIndex >= totalFrames) frameIndex = totalFrames - 1;
      if (frameIndex < 0) frameIndex = 0;

      setCurrentFrame(frameIndex);
      drawFrame(frameIndex);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [loadingPercentage]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Use smooth translate
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {loadingPercentage < 100 && (
        <div className="fixed inset-0 bg-[#080808] z-1000 flex flex-col items-center justify-center gap-8 transition-opacity duration-700">
          <div className="font-sans font-bold text-5xl text-[#E8FF3A] tracking-[0.2em] mb-4">ANTIGRAVITY</div>
          <div className="w-[180px] h-px bg-white/10 relative">
            <div className="absolute top-0 left-0 h-full bg-[#E8FF3A] transition-[width] duration-75" style={{ width: `${Math.min(loadingPercentage, 100)}%` }}></div>
          </div>
          <div className="font-sans font-bold text-base text-[#555] tracking-[0.2em] mt-2">{loadingPercentage}%</div>
        </div>
      )}

      <section id="hero" className="relative h-screen max-h-[800px] min-h-[600px] flex flex-col justify-end overflow-hidden rounded-[2.5rem] group cursor-none mb-16">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover"></canvas>

        <div className="absolute inset-0 bg-linear-to-br from-[#080808]/75 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#080808]/85 to-transparent pointer-events-none"></div>

        <div className="relative z-10 px-6 lg:px-20 pb-20 max-w-3xl">

          <h1 className="font-sans font-black text-[clamp(1.5rem,5vw,4rem)] leading-[0.88] tracking-[-0.01em] mb-6 text-white uppercase">
            Slot<br /><em className="text-[#E8FF3A] not-italic">Booking</em>
          </h1>
          <p className="text-[#555] max-w-[340px] leading-[1.75] mb-10 font-light text-[0.92rem]">
            Move your mouse left and right to scrub through the sequence. Every frame, yours to control.
          </p>
          <a href="#explore" className="inline-flex items-center gap-2 bg-[#E8FF3A] text-black text-[0.6rem] font-bold tracking-[0.18em] uppercase px-5 py-2.5 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,255,58,0.28)] transition-all duration-200">
            Explore Work &nbsp;→
          </a>
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-4">
          <div className="text-[0.6rem] tracking-[0.28em] uppercase text-[#555] [writing-mode:vertical-lr] rotate-180">Scrub</div>
          <div className="w-px h-[110px] bg-white/10 relative overflow-hidden">
            <div className="absolute bottom-0 w-full bg-[#E8FF3A]" style={{ height: `${(currentFrame / (totalFrames > 0 ? totalFrames : 1)) * 100}%` }}></div>
          </div>
          <div className="font-sans font-bold text-[0.85rem] text-[#555] tracking-widest">
            {String(currentFrame + 1).padStart(3, '0')}
          </div>
        </div>

        <div className="absolute bottom-10 right-12 z-20 hidden md:flex items-center gap-3 text-[0.65rem] tracking-[0.22em] uppercase text-[#555] animate-fade-hint">
          <div className="w-[18px] h-[28px] border border-[#555] rounded-[9px] flex justify-center pt-1">
            <div className="w-[2px] h-[5px] bg-[#E8FF3A] rounded-sm animate-mscroll"></div>
          </div>
          Move to scrub
        </div>

        <div ref={cursorRef} id="ag-cursor" className="fixed top-0 left-0 w-[10px] h-[10px] bg-[#E8FF3A] rounded-full pointer-events-none z-9999 mix-blend-difference opacity-0 group-hover:opacity-100 transition-[opacity,width,height] duration-150 will-change-transform"></div>
        <div ref={cursorRingRef} id="ag-cursor-ring" className="fixed top-0 left-0 w-[36px] h-[36px] border border-[#e8ff3a59] rounded-full pointer-events-none z-9998 opacity-0 group-hover:opacity-100 transition-transform duration-80 ease-out will-change-transform"></div>
      </section>
    </>
  );
}

// --- Booking Search Component ---
function BookingSearch() {
  return (
    <section className="mb-16 max-w-5xl mx-auto w-full px-6">
      <div className="flex flex-col md:flex-row items-center bg-white border border-slate-200 md:rounded-full rounded-2xl p-2 shadow-xl max-w-4xl mx-auto mt-8 gap-2 md:gap-0">
        <div className="flex-[1.5] flex items-center gap-3 px-6 py-3 md:border-r border-slate-100 w-full">
          <Search className="w-5 h-5 text-slate-900" />
          <input
            className="bg-transparent border-none focus:outline-none w-full text-slate-800 placeholder:text-slate-500 font-medium text-sm md:text-base"
            placeholder="All treatments and venues"
            type="text"
          />
        </div>
        <div className="flex-1 flex items-center gap-3 px-6 py-3 md:border-r border-slate-100 w-full">
          <MapPin className="w-5 h-5 text-slate-900" />
          <input
            className="bg-transparent border-none focus:outline-none w-full text-slate-800 font-medium text-sm md:text-base"
            placeholder="Current location"
            type="text"
            defaultValue="Current location"
          />
        </div>
        <div className="flex-1 flex items-center gap-3 px-6 py-3 w-full">
          <Calendar className="w-5 h-5 text-slate-900" />
          <input
            className="bg-transparent border-none focus:outline-none w-full text-slate-800 placeholder:text-slate-500 font-medium text-sm md:text-base"
            placeholder="Any time"
            type="text"
          />
        </div>
        <button className="bg-[#0f0f0f] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-black transition-all md:ml-2 shadow-sm w-full md:w-auto">
          Search
        </button>
      </div>

      <div className="text-center mt-12 mb-10">
        <p className="text-slate-800 text-lg font-medium">
          <span className="font-bold">4,30,929</span> appointments booked today
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <button className="flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-full font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm">
          Get the app
          <QrCode className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

// --- Categories Component ---
const categoriesData = [
  {
    title: 'Hair',
    venues: '1,240 Venues',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8FIJkrf5urZVoFtIsMuKFD-Lr4Szx4qECNdpMY_N-UfRb0wNfLcYlGD6K5EInWg6b50mDR7JeaIyrGxMoKkvCPG5Lj8id4CHxh3a2fObnVpCAjnR67gXuKD8dCXEINHmnoxYqBkBgUbbkgH0v1ECZhKQ6jxHbG_IugUP6PaysZa03EMn7xFpf5o0bETjok-pUtcVwDEodXK4ECRTjaDPOw5EkBAnemVT6IRPsytIhOaSSwM4Itd8ZVCVBuI9wrZpItKxSTCi1gqk',
    className: 'col-span-2 row-span-2 min-h-[300px]',
    titleClass: 'text-2xl',
  },
  {
    title: 'Nails',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKoujBTXdeOYpV3McxBclR2LhMrIvua7Jp3UtHAQtJ52efyEuYteKNk_eqpFEtr4Oo1_d_QntqHF-YfppDUcgu_QOLRfxLubplUDrd9nzpeMJDrVXzHOWDmxsTEGIqjjiax1PBSO2eo5Iw5o7FeJbJm_e1Ss8mR4odjUzY4-FbSh_8kzOX-FzQh8au-hDFWIjmXSo7iaGnq9ogQ0DIkPphril_cIMCBZcRGVl3FkDV60CjLp7Yl_NdZw6CwV9XQLJ81lh6ayqtyLQ',
    className: 'aspect-square lg:aspect-auto min-h-[150px]',
  },
  {
    title: 'Massage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk6JMaS4OkX9VCQOdQp-5K-P4i-0Y_Qwcb9uI6qpvYKgmfkqtAMzvkpQz0u9CkpqkGmH44azojQinjO6NwyGWNf0x7qJQqBByerwDvR13Z_wHWNbB8WAywbud9y_5LNpAHPd21P6T3w_JvfXlGuLSpxx8H3kzNitiDDCG-ZEZUitG84BXWQ6fbc6npMUOwteDdB5nSF5tjD0RekdiFJYGy16BlvwWUsR_2Pg6Ge67-dufKMNX7o7Dd73WenKDDhIuX_rBQmSxogFs',
    className: 'aspect-square lg:aspect-auto min-h-[150px]',
  },
  {
    title: 'Skincare',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuiaS3UKmsg5hm4j06xRTgUzUfTciwJZyKgbZRCbcf5wnG5chz8amIX6Z7mFhCNPQOxLd0RNTpsE6lVHFVGA20fV9Ov8cUNWzWapgUf46X1FiKV2T3QpaeRdMrWmYksySU5B7gcqiK5SQzkf_UxwwiK2DLmvqZc1_-DGn98H0UJfxFsLNxCVVpTi3ANGYwAegDHX8-v1LF5nu6oH-XYimPMnrZGorwpz6y2PMnEc9wsfuO2Ykl7LO7bxS6Gu15PKsexbhgAo1gMi0',
    className: 'col-span-2 h-48 lg:h-auto min-h-[150px]',
  },
  {
    title: 'Fitness',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDHuWqlc6cKN1Y0x8QKEEqPue2OqdvblkG_Xvrz93si5XD_y3KSZLXgZfws24373UmnzoXAx3eumN13P4zjJ6WZ-GvQEd5nnY5RNo0SqQ-sKcXslVT1npQWFjOTaYgjaHtBpnlXwGpbp1vBRjLdaZEJFVzo86yqx_qcbQ-gjJ6sOBngFFPSmptCy6HsxsAHvMrFhkoBuvWyT3EECHD0GbjknrAee-5uGPv0epcaEBLWP9q-4-8fe2laZEiO78TIbR-KCCYuzDEgl4',
    className: 'aspect-square lg:aspect-auto min-h-[150px]',
  },
  {
    title: 'Barber',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuoWqIFrc4afZO2P71DKxl09svdyrYEW3_jNqqSu_qhlqud_kJ2RMRtOZB5R4SMmcET-Jshq09Rr0zfBoA5KlW12s7WY36Nfw2caFFl6kn_iFdgCVRTPpX8D_015vPchR7_TZn3lDKmgfkjEnV6aQQHKMaJ5KwRCMuLefRvsAB7Gkp2FaAfuc65Ww_XctzSVUw1pZaCGF6oEkDQbELe_vXAtTaThyOxO2WOqWPIqnEoOpISMMi2qgLln-8QLV0FD4LxbLWfDlovOc',
    className: 'aspect-square lg:aspect-auto min-h-[150px]',
  },
];

function Categories() {
  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Explore Categories</h3>
        <Link className="text-sm font-bold text-slate-900 flex items-center gap-1 hover:underline" href="#">
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categoriesData.map((cat, i) => (
          <div key={i} className={`group relative overflow-hidden rounded-3xl cursor-pointer ${cat.className}`}>
            <div className={`absolute inset-0 bg-linear-to-t ${cat.venues ? 'from-black/80 via-black/20' : 'from-black/60'} to-transparent z-10`}></div>
            <Image
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt={cat.title}
              src={cat.image}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <p className={`text-white font-bold ${cat.titleClass || ''}`}>{cat.title}</p>
              {cat.venues && <p className="text-white/70 text-sm mt-1">{cat.venues}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Trending Component ---
const trendingData = [
  {
    name: 'The Loft Hair Studio',
    rating: '4.9',
    reviews: '1.2k',
    price: '$$',
    location: 'Flatiron District • 0.4 miles away',
    tags: ["Women's Haircut", 'Balayage'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2zJZ0rvIes3sw1UkRz9IbPHiB65LPegtbzm4gNr-EWe8yfQsSGlyK2y8sodoL-98GflY3H1xDMcqNoJdT-Q1HBE49VoudA6ZLq6GdA0zqq9D9bCpe7y_MrJaRXQ7jP_rDEgoBO6JoVUlmrMzFjRPNfZs24SbiBnZjCy0rKeX8Tu0Vsj0VFVmT6MhCMMvjfapaulhGv3p6UtsY8UX6KOw5cdg67qmxgCoJRlTYyGAWHXNWjlZC77uAilwQoVNDxLZVajE4ds0emvs',
    badge: { type: 'top-rated', text: 'Top Rated', icon: CheckCircle, color: 'text-green-600' },
  },
  {
    name: 'Serenity Wellness Spa',
    rating: '4.8',
    reviews: '850',
    price: '$$$',
    location: 'Chelsea • 1.2 miles away',
    tags: ['Deep Tissue', 'Sauna'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHZenjqZzb5KHniyextKzfM4FtEJosJwUmDsZiYzDpUvmLgJyatkupYsOWl5IkfNmpxGqpx07Xnpwf10Qegf2dS3CwHF8fmlc5p9MBPgqO7Ppu2FuV8GtwAtjH5yATHOUayEtyfhdHG_ZIQTO2SBCmRyv7WEAyMXXkAxJr0cEmsNaa-Ab7V7qpKZJyrAz4qNyioy2XUA3rHDO8Y9jn03_PvVWmXmGtM6rqS_EeWro4Odoe6dKcboqqjHAk7tjFeOR-h3P091DMIG4',
    badge: { type: 'instant', text: 'Instant Booking', icon: Zap, color: 'text-blue-600' },
    exclusive: true,
  },
  {
    name: 'Glossy Nails Boutique',
    rating: '5.0',
    reviews: '540',
    price: '$',
    location: 'SoHo • 0.8 miles away',
    tags: ['Gel Manicure', 'Nail Art'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuZapIhOZ-R8TQA_6JN-cZnIxTF7FGnXdQm57o7iJAY3w6qLE38vhlVyyUrvUQ4Qe2JiRp43g7uDspFP4c7YRX2807bsLs9sjJyq2fmnbCAhKAG8jWVCO53htH7XsyGN3ddu3YsNSeKXUfAP9oaYCPpr3opaMTZg6U-gS_kPdcFFTVoFoAnviIGooUnxwhnoixRnavBcJsJuaRoxpv2UMFbCvk98yzzS5H3ZgUnbrlTbcf13eLg6X5jswBlq3KWoJh5NY4l5JN1y4',
    badge: { type: 'favorite', text: 'Crowd Favorite', icon: Heart, color: 'text-pink-600' },
  },
];

function Trending() {
  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold">Trending near you</h3>
          <p className="text-slate-500 text-sm mt-1">Based on recent bookings in New York</p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingData.map((item, i) => (
          <Link
            key={i}
            href={`/marketplace/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
          >
            <div className="relative h-60 overflow-hidden shrink-0">
              <Image
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={item.name}
                src={item.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                {item.rating} ({item.reviews})
              </div>
              {item.exclusive && (
                <div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                  Member Exclusive
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-slate-900">{item.name}</h4>
                <span className="text-slate-900 font-bold">{item.price}</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">{item.location}</p>
              <div className="flex flex-wrap gap-2 mb-6 flex-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                <div className="flex items-center gap-2">
                  <item.badge.icon className={`w-4 h-4 ${item.badge.color} ${item.badge.type === 'favorite' ? 'fill-current' : ''}`} />
                  <span className="text-xs font-bold text-slate-700">{item.badge.text}</span>
                </div>
                <button className="text-sm font-bold text-slate-900 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// --- AppCTA Component ---
function AppCTA() {
  return (
    <section className="bg-primary rounded-[2.5rem] p-10 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative mb-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>

      <div className="relative z-10 max-w-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Get the app. <br />Book beauty on the go.
        </h3>
        <p className="text-white/70 mb-8 text-lg">
          Manage your appointments, get reminders, and discover new services in your area with our mobile app.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/90 transition-colors">
            <Apple className="w-5 h-5 fill-current" />
            App Store
          </button>
          <button className="bg-white/10 backdrop-blur text-white border border-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/20 transition-colors">
            <Play className="w-5 h-5 fill-current" />
            Google Play
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-xs lg:max-w-md">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-3xl rotate-6 shadow-2xl">
          <div className="bg-slate-50 rounded-2xl p-6 h-96 flex flex-col gap-4 overflow-hidden border border-slate-200">
            <div className="w-full h-8 bg-slate-200 rounded-lg animate-pulse"></div>
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-slate-200 rounded-full animate-pulse shrink-0"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="w-2/3 h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="w-1/2 h-3 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="flex-1 bg-slate-200/50 rounded-xl animate-pulse"></div>
            <div className="w-full h-10 bg-slate-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-slate-900 text-white p-1 rounded flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">SLOT</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            World&apos;s #1 booking platform for beauty and wellness. Find and book services with ease.
          </p>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
            <Share2 className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
            <Mail className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-slate-900">Product</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a className="hover:text-slate-900 transition-colors" href="#">Explore</a></li>
            <li><a className="hover:text-slate-900 transition-colors" href="#">Luxe for Business</a></li>
            <li><a className="hover:text-slate-900 transition-colors" href="#">Partner Portal</a></li>
            <li><a className="hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-slate-900">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a className="hover:text-slate-900 transition-colors" href="#">About us</a></li>
            <li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
            <li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
            <li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-slate-900">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-slate-900 transition-colors" href="#">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="font-bold mb-6 text-slate-900">Subscribe</h4>
          <p className="text-sm text-slate-500 mb-4">Get the latest trends and special offers.</p>
          <div className="flex gap-2">
            <input
              className="flex-1 bg-slate-50 border border-slate-200 rounded-lg text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              placeholder="Email"
              type="email"
            />
            <button className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <p>© 2024 Luxe Marketplace. All rights reserved.</p>
        <div className="flex gap-8">
          <span>English (US)</span>
          <span>USD ($)</span>
        </div>
      </div>
    </footer>
  );
}

// --- Main Page Component ---
export default function LuxeMarketplace() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <AntigravityHero />
        <BookingSearch />
        <Categories />
        <Trending />
        <AppCTA />
      </main>
      <Footer />
    </div>
  );
}