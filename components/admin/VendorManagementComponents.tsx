"use client";

import React from 'react';
import { 
  Star, 
  PauseCircle, 
  PlayCircle, 
  CheckCircle2, 
  DollarSign, 
  Edit3
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useAdmin } from '@/context/AdminContext';

// --- Filter Tabs ---
export function VendorFilterTabs() {
  const { vendorStatusFilter, setVendorStatusFilter } = useAdmin();
  const tabs = ['All Vendors', 'Active', 'Suspended', 'Inactive'];

  return (
    <div className="flex flex-wrap gap-4 mb-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setVendorStatusFilter(tab)}
          className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${
            vendorStatusFilter === tab 
              ? 'bg-luminous-sidebar text-white border-luminous-sidebar shadow-lg shadow-luminous-sidebar/20' 
              : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200 hover:text-luminous-text-primary'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

// --- Vendor Bento Card ---
interface VendorCardProps {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  status: 'Active' | 'Suspended' | 'Inactive';
  revenue: string;
  bookings: number;
  image: string;
  delay?: number;
}

export function VendorBentoCard({ id, name, category, rating, reviews, status, revenue, bookings, image, delay = 0 }: VendorCardProps) {
  const { toggleVendor } = useAdmin();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col gap-8 group"
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-5">
          <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-slate-50 relative group-hover:ring-luminous-accent-emerald/10 transition-all duration-500">
            <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div>
            <h3 className="text-xl font-black font-manrope text-luminous-text-primary tracking-tight group-hover:text-luminous-accent-emerald transition-colors">{name}</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">{category}</p>
            <div className="flex items-center gap-1.5 mt-2">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-black text-luminous-text-primary">{rating}</span>
              <span className="text-[10px] text-slate-400 font-bold">({reviews} reviews)</span>
            </div>
          </div>
        </div>
        
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border-2 ${
          status === 'Active' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
          status === 'Suspended' ? 'bg-rose-50 border-rose-100 text-rose-600' :
          'bg-slate-50 border-slate-100 text-slate-400'
        }`}>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Monthly Revenue</p>
          <p className="text-lg font-black text-luminous-text-primary">{revenue}</p>
        </div>
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Bookings</p>
          <p className="text-lg font-black text-luminous-text-primary">{bookings}</p>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <button className="flex-1 bg-white hover:bg-slate-50 text-luminous-text-primary text-[10px] font-black uppercase tracking-widest py-3.5 rounded-xl transition-all border border-slate-100 shadow-sm active:scale-95">
          Edit Details
        </button>
        <button 
          onClick={() => toggleVendor(id)}
          className={`px-4 bg-white hover:bg-slate-50 text-luminous-text-primary py-3.5 rounded-xl transition-all border border-slate-100 shadow-sm active:scale-95 ${status === 'Suspended' ? 'text-emerald-500' : ''}`}
        >
          {status === 'Active' && <PauseCircle className="w-5 h-5" />}
          {status === 'Suspended' && <PlayCircle className="w-5 h-5" />}
          {status === 'Inactive' && <CheckCircle2 className="w-5 h-5" />}
        </button>
      </div>
    </motion.div>
  );
}

// --- Vendor List Table ---
export function RecentVendorsTable() {
  const { vendors } = useAdmin();
  const recentVendors = vendors.slice(0, 3);

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm mt-8">
      <div className="px-10 py-6 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
        <h4 className="font-black font-manrope text-luminous-text-primary tracking-tight">Recently Updated Records</h4>
        <button className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:underline">View All Records</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-black bg-slate-50/30">
              <th className="px-10 py-5">Vendor Name</th>
              <th className="px-10 py-5">Category</th>
              <th className="px-10 py-5">Pricing Tier</th>
              <th className="px-10 py-5">Status</th>
              <th className="px-10 py-5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {recentVendors.map((vendor, i) => (
              <motion.tr 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-10 py-6 font-black text-luminous-text-primary text-sm">{vendor.name}</td>
                <td className="px-10 py-6 text-slate-400 text-xs font-bold uppercase tracking-wider">{vendor.category}</td>
                <td className="px-10 py-6">
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((p) => (
                      <DollarSign key={p} className={`w-3.5 h-3.5 ${p <= vendor.pricing ? 'text-emerald-500' : 'text-slate-200'}`} />
                    ))}
                  </div>
                </td>
                <td className="px-10 py-6">
                  <span className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${
                    vendor.status === 'Active' ? 'text-emerald-500' :
                    vendor.status === 'Suspended' ? 'text-rose-500' :
                    'text-slate-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      vendor.status === 'Active' ? 'bg-emerald-500' :
                      vendor.status === 'Suspended' ? 'bg-rose-500' :
                      'bg-slate-300'
                    }`}></span>
                    {vendor.status}
                  </span>
                </td>
                <td className="px-10 py-6 text-right">
                  <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400 hover:text-luminous-text-primary">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
