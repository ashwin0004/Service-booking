"use client";

import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  Mail
} from 'lucide-react';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { searchQuery, setSearchQuery } = useAdmin();

  return (
    <div className="min-h-screen bg-luminous-surface font-inter text-luminous-text-primary selection:bg-luminous-accent-emerald/10 selection:text-luminous-accent-emerald">
      {/* Sidebar - Remains Dark Navy for Contrast */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-luminous-sidebar flex flex-col z-60">
        <div className="p-8">
          <div className="text-2xl font-black tracking-tight font-manrope text-white">Luminous Admin</div>
          <div className="text-[10px] uppercase font-bold text-white/40 tracking-[0.3em] mt-1">Service Suite</div>
        </div>

        <nav className="flex-1 px-4 mt-8 space-y-2">
          <Link href="/admin" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-luminous-accent-emerald/10 border-l-2 border-luminous-accent-emerald text-white transition-all group">
            <LayoutDashboard className="w-5 h-5 text-luminous-accent-emerald" />
            <span className="font-manrope font-bold text-sm">Dashboard</span>
          </Link>
          
          <Link href="/admin/users" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-all group">
            <Users className="w-5 h-5 group-hover:text-luminous-accent-emerald transition-colors" />
            <span className="font-manrope font-bold text-sm text-inherit">Users</span>
          </Link>

          <Link href="/admin/vendors" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-all group">
            <Store className="w-5 h-5 group-hover:text-luminous-accent-emerald transition-colors" />
            <span className="font-manrope font-bold text-sm text-inherit">Vendors</span>
          </Link>

          <Link href="/admin/services" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-all group">
            <Settings className="w-5 h-5 group-hover:text-luminous-accent-emerald transition-colors" />
            <span className="font-manrope font-bold text-sm text-inherit">Services</span>
          </Link>
        </nav>

        <div className="p-6 mt-auto border-t border-white/5 space-y-1">
          <Link href="#" className="flex items-center gap-4 px-6 py-3 rounded-xl text-white/30 hover:text-white transition-all">
            <Settings className="w-4 h-4" />
            <span className="font-manrope font-bold text-xs">Settings</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 px-6 py-3 rounded-xl text-white/30 hover:text-white transition-all">
            <HelpCircle className="w-4 h-4" />
            <span className="font-manrope font-bold text-xs">Support</span>
          </Link>
          
          <div className="mt-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">System</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-luminous-accent-emerald rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-luminous-accent-emerald">Stable</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-72 flex flex-col min-h-screen">
        {/* Header - Transparent White Glass */}
        <header className="sticky top-0 h-20 px-10 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between z-50">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Global system search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100/50 border border-transparent rounded-xl py-2.5 pl-12 pr-6 text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200 transition-all placeholder:text-slate-400 text-luminous-text-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-luminous-accent-emerald rounded-full border-2 border-white"></span>
              </button>
              <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-8 w-px bg-slate-100"></div>
            
            <button className="flex items-center gap-3 p-1 pl-3 rounded-full hover:bg-slate-50 transition-all">
              <div className="text-right">
                <div className="text-xs font-black text-luminous-text-primary">Alex Rivera</div>
                <div className="text-[10px] text-luminous-accent-emerald font-black uppercase tracking-wider">Super Admin</div>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-100 p-0.5 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                  alt="Avatar" 
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
            </button>
          </div>
        </header>

        <main className="p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
