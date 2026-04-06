"use client";

import React from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  Scissors, 
  Flower2, 
  User, 
  Paintbrush, 
  Sparkles, 
  ArrowRight,
  X,
  PlusCircle
} from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { useAdmin } from '@/context/AdminContext';

// --- Category Ribbon ---
export function CategoryRibbon() {
  const { serviceCategoryFilter, setServiceCategoryFilter } = useAdmin();
  const categories = ['All Services', 'Hair & Styling', 'Nail Artistry', 'Wellness & Spa', 'Skin Therapy', 'Barbering'];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Active Categories</h3>
        <button className="text-luminous-text-primary text-[10px] font-black uppercase tracking-widest hover:underline">Manage All</button>
      </div>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setServiceCategoryFilter(cat)}
            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${
              serviceCategoryFilter === cat 
                ? 'bg-luminous-sidebar text-white border-luminous-sidebar shadow-xl shadow-luminous-sidebar/20' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200 hover:text-luminous-text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

// --- Service Bento Card ---
interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: boolean;
  providers?: string[];
  providerCount?: number;
  delay?: number;
}

export function ServiceBentoCard({ id, title, category, description, image, status, providers, providerCount, delay = 0 }: ServiceCardProps) {
  const { toggleService } = useAdmin();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white border border-slate-100 rounded-[2.5rem] p-8 flex flex-col hover:border-luminous-accent-emerald/30 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="h-20 w-20 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative group-hover:scale-105 transition-transform duration-500">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={status} 
            onChange={() => toggleService(id)} 
            className="sr-only peer" 
          />
          <div className="w-14 h-7 bg-slate-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-slate-200 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all peer-checked:bg-luminous-accent-emerald"></div>
        </label>
      </div>

      <div className="relative z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-luminous-accent-emerald mb-2 block">{category}</span>
        <h4 className="text-2xl font-black font-manrope text-luminous-text-primary mb-3 tracking-tight group-hover:text-luminous-accent-emerald transition-colors">{title}</h4>
        <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8 line-clamp-2">{description}</p>
      </div>

      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between relative z-10">
        {providers ? (
          <div className="flex -space-x-3">
            {providers.map((p, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative shadow-sm">
                <Image src={p} alt="stylist" fill className="object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            {providerCount} Providers Active
          </span>
        )}

        {status ? (
          <button className="text-luminous-text-primary text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-1 hover:gap-3 transition-all">
            Edit Service <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="px-3 py-1 bg-rose-50 text-rose-500 text-[10px] font-black uppercase tracking-widest rounded-lg border border-rose-100">
            Disabled
          </span>
        )}
      </div>
      
      {/* Subtle glass effect on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
}

// --- Category List Sidebar ---
export function CategoryListSidebar() {
  const { services } = useAdmin();
  
  const cats = [
    { name: 'Hair Styling', count: 12, icon: <Scissors className="w-4 h-4" /> },
    { name: 'Wellness', count: 8, icon: <Flower2 className="w-4 h-4" /> },
    { name: 'Skin Care', count: 15, icon: <User className="w-4 h-4" /> },
    { name: 'Nail Art', count: 24, icon: <Paintbrush className="w-4 h-4" /> },
  ];

  const totalServices = services.length;
  const liveServices = services.filter(s => s.status).length;

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 flex flex-col h-full relative overflow-hidden">
      <h3 className="text-2xl font-black font-manrope text-luminous-text-primary mb-10 flex items-center gap-3 relative z-10">
        <Sparkles className="w-6 h-6 text-luminous-accent-emerald" />
        Categories
      </h3>

      <div className="space-y-4 relative z-10">
        {cats.map((c, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl flex items-center justify-between border border-slate-100 shadow-sm hover:shadow-md hover:translate-x-1 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-luminous-accent-emerald group-hover:bg-luminous-accent-emerald group-hover:text-white transition-colors">
                {c.icon}
              </div>
              <span className="font-black text-luminous-text-primary text-sm tracking-tight">{c.name}</span>
            </div>
            <span className="bg-slate-50 text-[10px] px-3 py-1.5 rounded-lg text-slate-400 font-black uppercase tracking-widest group-hover:bg-slate-100 transition-colors">{c.count} Services</span>
          </div>
        ))}
      </div>

      {/* --- Stat Cards Section --- */}
      <div className="mt-10 grid grid-cols-1 gap-4 relative z-10">
        <div className="bg-white border border-slate-100 p-5 rounded-3xl flex items-center gap-4 shadow-sm hover:translate-y-[-2px] transition-transform duration-300 group">
          <div className="bg-slate-50 p-4 rounded-2xl text-luminous-sidebar group-hover:bg-luminous-sidebar/5 transition-colors">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-0.5">Total Services</p>
            <p className="text-2xl font-black font-manrope text-luminous-sidebar">{totalServices}</p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 p-5 rounded-3xl flex items-center gap-4 shadow-sm hover:translate-y-[-2px] transition-transform duration-300 group">
          <div className="bg-emerald-50/50 p-4 rounded-2xl text-luminous-accent-emerald group-hover:bg-emerald-50 transition-colors">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-0.5">Live Now</p>
            <p className="text-2xl font-black font-manrope text-luminous-accent-emerald">{liveServices}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4 relative z-10">
        <button className="w-full bg-white p-5 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 hover:border-luminous-accent-emerald/50 hover:bg-emerald-50/10 transition-all group">
          <PlusCircle className="w-6 h-6 text-luminous-accent-emerald transition-transform group-hover:scale-110" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-luminous-accent-emerald">New Category</span>
        </button>
        
        <div className="p-6 bg-luminous-accent-emerald/5 border border-luminous-accent-emerald/10 rounded-2xl">
          <p className="text-[10px] font-black text-luminous-accent-emerald uppercase tracking-[0.3em] mb-2">Category Logic</p>
          <p className="text-xs text-slate-400 leading-relaxed font-bold">
            Auto-sorting is currently <span className="text-luminous-accent-emerald">Enabled</span> based on architectural vendor tags.
          </p>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
    </div>
  );
}



// --- Add Service Modal ---
export function AddServiceModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { addService } = useAdmin();
  const [formData, setFormData] = React.useState({
    title: '',
    category: 'Hair & Styling',
    price: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addService({
      title: formData.title,
      category: formData.category,
      description: formData.description,
      status: true,
      providerCount: 0,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400"
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-luminous-sidebar/40 backdrop-blur-md"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white border border-slate-100 w-full max-w-2xl rounded-[2.5rem] shadow-2xl p-10 overflow-hidden"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-4xl font-black font-manrope text-luminous-text-primary tracking-tighter mb-2">Add New Service</h3>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Catalog parameters & category mapping.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-3">Service Identity</label>
                  <input 
                    required
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-luminous-text-primary focus:outline-none focus:ring-2 focus:ring-luminous-accent-emerald/20 focus:bg-white transition-all" 
                    placeholder="e.g. Brazilian Blowout" 
                    type="text"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-3">Category Assignment</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-luminous-text-primary focus:outline-none focus:ring-2 focus:ring-luminous-accent-emerald/20 focus:bg-white appearance-none"
                  >
                    <option>Hair & Styling</option>
                    <option>Wellness</option>
                    <option>Nail Artistry</option>
                    <option>Skin Therapy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-3">Base Price</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-black text-sm">$</span>
                    <input 
                      required
                      value={formData.price}
                      onChange={e => setFormData({...formData, price: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-sm font-bold text-luminous-text-primary focus:outline-none focus:ring-2 focus:ring-luminous-accent-emerald/20 focus:bg-white transition-all" 
                      placeholder="0.00" 
                      type="number"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-3">Outcome Summary</label>
                  <textarea 
                    required
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-luminous-text-primary focus:outline-none focus:ring-2 focus:ring-luminous-accent-emerald/20 focus:bg-white transition-all" 
                    placeholder="Describe the luxury service outcome..." 
                    rows={4}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="flex-1 bg-slate-50 hover:bg-slate-100 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] text-slate-400 transition-all"
                >
                  Cancel Registration
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-luminous-sidebar text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-luminous-sidebar/20 hover:scale-[1.02] transition-all"
                >
                  Create Service Entry
                </button>
              </div>
            </form>
            
            {/* Visual accent */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
