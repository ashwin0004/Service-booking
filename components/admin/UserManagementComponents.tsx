"use client";

import React from 'react';
import { 
  Star, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAdmin } from '@/context/AdminContext';

// --- Filter Bar ---
export function UserFilterBar() {
  const { filteredUsers, userStatusFilter, setUserStatusFilter } = useAdmin();
  
  return (
    <div className="bg-white p-4 rounded-2xl mb-8 flex flex-wrap items-center gap-4 shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</span>
        <select 
          value={userStatusFilter}
          onChange={(e) => setUserStatusFilter(e.target.value)}
          className="bg-transparent border-none text-xs font-black text-luminous-text-primary focus:ring-0 cursor-pointer p-0 pr-6"
        >
          <option>All Members</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sort</span>
        <select className="bg-transparent border-none text-xs font-black text-luminous-text-primary focus:ring-0 cursor-pointer p-0 pr-6">
          <option>Newest Join</option>
          <option>Oldest Join</option>
        </select>
      </div>

      <div className="ml-auto flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
        Showing {filteredUsers.length} members
      </div>
    </div>
  );
}

// --- User Table ---
export function UserTable() {
  const { filteredUsers } = useAdmin();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-3">
        <thead className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-black">
          <tr>
            <th className="px-8 py-4 text-left">User Identity</th>
            <th className="px-8 py-4 text-left">Customer Rating</th>
            <th className="px-8 py-4 text-left">Join Date</th>
            <th className="px-8 py-4 text-left">Account Status</th>
            <th className="px-8 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {filteredUsers.map((user, i) => (
            <motion.tr 
              key={user.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <td className="px-8 py-5 bg-white border-y border-l border-slate-100 group-hover:bg-slate-50 transition-colors first:rounded-l-3xl">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 overflow-hidden relative shadow-sm border border-slate-200">
                    <Image 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
                      alt={user.name} 
                      fill 
                      className={`object-cover group-hover:scale-110 transition-transform duration-500 ${user.status === 'Inactive' ? 'grayscale' : ''}`} 
                    />
                  </div>
                  <div className={user.status === 'Inactive' ? 'opacity-50' : ''}>
                    <p className="font-black text-luminous-text-primary leading-tight">{user.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-8 py-5 bg-white border-y border-slate-100 group-hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-1 text-amber-400 font-black">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-sm text-luminous-text-primary ml-1">4.9</span>
                </div>
              </td>
              <td className="px-8 py-5 bg-white border-y border-slate-100 group-hover:bg-slate-50 transition-colors">
                <div className="text-luminous-text-primary font-bold">{user.joinedDate}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">14:22 GMT</div>
              </td>
              <td className="px-8 py-5 bg-white border-y border-slate-100 group-hover:bg-slate-50 transition-colors">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border-2 ${
                  user.status === 'Active' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 
                  'bg-rose-50 border-rose-100 text-rose-600'
                }`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                  {user.status}
                </span>
              </td>
              <td className="px-8 py-5 bg-white border-y border-r border-slate-100 group-hover:bg-slate-50 transition-colors last:rounded-r-3xl text-right">
                <div className="flex justify-end gap-2">
                  <button className="p-2.5 rounded-xl bg-slate-100 text-slate-400 hover:bg-slate-200 transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan={5} className="py-20 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No matching members found</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
      {/* Pagination */}
      <div className="mt-12 flex items-center justify-between px-4">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">Displaying 1 - {filteredUsers.length} of {filteredUsers.length} members</p>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-luminous-sidebar text-white font-black text-xs shadow-lg">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Growth Projection ---
export function UserGrowthChart() {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden h-full">
      <div className="relative z-10 mb-10">
        <h3 className="text-2xl font-black font-manrope text-luminous-text-primary tracking-tight mb-2">User Growth Projection</h3>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Quarterly analysis of new customer acquisitions.</p>
      </div>
      
      <div className="h-48 flex items-end gap-3 mt-12 px-4">
        {[40, 65, 55, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-4 group h-full justify-end">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`w-full rounded-2xl transition-all duration-300 ${i === 3 ? 'bg-luminous-sidebar shadow-xl' : 'bg-slate-100 group-hover:bg-slate-200'}`}
            >
            </motion.div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-6 px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>
    </div>
  );
}

// --- Ecosystem Health ---
export function EcosystemHealthCard() {
  return (
    <div className="bg-luminous-sidebar p-10 rounded-[2.5rem] flex flex-col justify-between text-white shadow-2xl relative overflow-hidden h-full group">
      <div>
        <h3 className="text-xl font-bold font-manrope mb-1 tracking-tight">Health Score</h3>
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-10">Overall ecosystem satisfaction</p>
        
        <div className="flex items-center gap-6">
          <div className="text-6xl font-black font-manrope italic text-emerald-400 tracking-tighter shadow-emerald-400/20 drop-shadow-lg">94%</div>
          <div className="flex flex-col">
            <span className="text-emerald-400 text-xs font-black flex items-center gap-1 px-2 py-0.5 bg-emerald-400/10 rounded-lg">
              <TrendingUp className="w-3 h-3" />
              +2.4%
            </span>
            <span className="text-white/20 text-[9px] font-black uppercase tracking-widest mt-2">vs last month</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-3">
            <span>Activity Ratio</span>
            <span className="text-white">88/100</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '88%' }}
              transition={{ duration: 1.5 }}
              className="h-full bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]"
            ></motion.div>
          </div>
        </div>
        
        <p className="text-xs text-white/40 leading-relaxed font-medium">
          Engagement is <span className="text-emerald-400 font-bold">12% higher</span> than the industry baseline for marketplaces.
        </p>
      </div>

      {/* Decorative pulse */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-400/5 rounded-full blur-3xl group-hover:bg-emerald-400/10 transition-all duration-700"></div>
    </div>
  );
}
