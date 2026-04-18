"use client";

import React from 'react';
import { 
  MoreHorizontal,
  Star,
  Activity
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Vendor } from '@/context/AdminContext';

// --- KPI Card ---
interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ReactNode;
  subtitle: string;
  delay?: number;
}

export function StatCard({ title, value, trend, trendUp, icon, subtitle, delay = 0 }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-luminous-text-primary group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase border-2 ${trendUp ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-rose-50 border-rose-100 text-rose-600'}`}>
          {trend}
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] mb-2">{title}</div>
        <div className="text-4xl font-black font-manrope tracking-tighter text-luminous-text-primary mb-4">{value}</div>
        
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-50">
          <Activity className="w-3 h-3 text-luminous-accent-emerald" />
          {subtitle}
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute right-0 top-0 w-24 h-24 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 transition-all group-hover:bg-luminous-accent-emerald/5"></div>
    </motion.div>
  );
}

// --- Booking Distribution (Donut Chart) ---
export function DistributionChart() {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm h-full">
      <h3 className="text-xl font-bold font-manrope mb-10 text-luminous-text-primary tracking-tight">Booking Distribution</h3>
      
      <div className="flex flex-col items-center">
        <div className="relative w-56 h-56 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-slate-50" cx="112" cy="112" fill="transparent" r="96" stroke="currentColor" strokeWidth="18"></circle>
            <circle className="text-luminous-sidebar" cx="112" cy="112" fill="transparent" r="96" stroke="currentColor" strokeWidth="18" strokeDasharray="603" strokeDashoffset="180" strokeLinecap="round"></circle>
            <circle className="text-luminous-accent-emerald" cx="112" cy="112" fill="transparent" r="96" stroke="currentColor" strokeWidth="18" strokeDasharray="603" strokeDashoffset="450" strokeLinecap="round"></circle>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-4xl font-black font-manrope text-luminous-text-primary">72%</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.3em] mt-1">Efficiency</span>
          </div>
        </div>
        
        <div className="mt-12 w-full space-y-3">
          <div className="flex justify-between items-center p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-luminous-sidebar"></div>
              <span className="text-sm font-bold text-slate-600">Completed</span>
            </div>
            <span className="text-sm font-black text-luminous-text-primary">23.1k</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-luminous-accent-emerald"></div>
              <span className="text-sm font-bold text-slate-600">Pending</span>
            </div>
            <span className="text-sm font-black text-luminous-text-primary">8.9k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Recent Vendors Table ---
export function VendorTable({ vendors }: { vendors: Vendor[] }) {
  const displayVendors = vendors.slice(0, 3);

  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-xl font-bold font-manrope text-luminous-text-primary tracking-tight">Recent Active Vendors</h3>
          <p className="text-xs text-slate-400 font-medium mt-1">Latest status from authorized marketplace partners</p>
        </div>
        <button className="text-emerald-600 text-xs font-black uppercase tracking-widest hover:underline transition-all">
          View All Vendors
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead>
            <tr className="text-slate-400">
              <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-[0.3em]">Vendor Entity</th>
              <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-[0.3em]">Specialty</th>
              <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-[0.3em]">Performance</th>
              <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-[0.3em]">Status</th>
              <th className="pb-4 px-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y-0">
            {displayVendors.map((vendor) => (
              <tr key={vendor.id} className="group transition-all duration-300">
                <td className="py-4 px-4 bg-white border-y border-l border-slate-50 group-hover:bg-slate-50 first:rounded-l-3xl transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-sm">
                      <Image 
                        src={vendor.image} 
                        alt={vendor.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-luminous-text-primary">{vendor.name}</div>
                      <div className="text-[10px] text-slate-400 font-black tracking-widest">{vendor.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 bg-white border-y border-slate-50 group-hover:bg-slate-50 text-sm font-bold text-slate-600 transition-all">
                  {vendor.category}
                </td>
                <td className="py-4 px-4 bg-white border-y border-slate-50 group-hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-black text-luminous-text-primary">{vendor.rating}</span>
                    <span className="text-[10px] font-bold text-slate-400">({vendor.reviews})</span>
                  </div>
                </td>
                <td className="py-4 px-4 bg-white border-y border-slate-50 group-hover:bg-slate-50 transition-all">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border-2 ${
                    vendor.status === 'Active' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 
                    vendor.status === 'Suspended' ? 'bg-rose-50 border-rose-100 text-rose-600' : 
                    'bg-slate-50 border-slate-100 text-slate-400'
                  }`}>
                    {vendor.status}
                  </div>
                </td>
                <td className="py-4 px-4 bg-white border-y border-r border-slate-50 group-hover:bg-slate-50 last:rounded-r-3xl text-right transition-all">
                  <button className="p-2 hover:bg-slate-200 rounded-xl transition-all text-slate-400">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Growth Bar Chart ---
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const values = [40, 55, 45, 80, 85, 65, 100];

export function GrowthChart() {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-xl font-bold font-manrope text-luminous-text-primary tracking-tight">Platform Growth (6mo)</h3>
        </div>
        <div className="flex h-10 p-1 bg-slate-100 rounded-2xl border border-slate-200">
          <button className="px-5 text-[10px] font-black uppercase tracking-[0.2em] bg-luminous-sidebar text-white rounded-xl shadow-lg transition-all">Orders</button>
          <button className="px-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-luminous-text-primary transition-all">Revenue</button>
        </div>
      </div>

      <div className="h-64 flex items-end justify-between gap-4 mt-8 px-4">
        {values.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
            <div className="w-full relative flex flex-col justify-end h-full">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "circOut" }}
                className={`w-full rounded-2xl transition-all duration-500 relative ${
                  i === 6 ? 'bg-linear-to-t from-slate-400 to-slate-600 shadow-lg' : 
                  i % 2 === 0 ? 'bg-slate-100 group-hover:bg-slate-200' : 
                  'bg-slate-200/60 group-hover:bg-slate-200'
                }`}
              >
              </motion.div>
            </div>
            {months[i] && (
              <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{months[i]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Server Health Card ---
export function ServerHealthCard() {
  return (
    <div className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm h-full flex flex-col justify-between group">
      <div>
        <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-4">Server Health</div>
        <div className="flex items-baseline gap-2 mb-8">
          <div className="text-6xl font-black font-manrope tracking-tighter text-luminous-text-primary">99.98</div>
          <div className="text-xl font-bold font-manrope text-emerald-600">%</div>
        </div>
        
        <div className="space-y-6">
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '99.98%' }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="bg-luminous-accent-emerald h-full rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)]"
            ></motion.div>
          </div>
          
          <div className="pt-6 space-y-4">
            <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>API Response</span>
              <span className="text-luminous-text-primary">124ms</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>DB Queries</span>
              <span className="text-luminous-text-primary">Stable</span>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-10 w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl border border-slate-100 transition-all duration-300">
        Full Diagnostics
      </button>
    </div>
  );
}
