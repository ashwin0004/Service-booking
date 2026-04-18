"use client";

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  StatCard, 
  DistributionChart, 
  VendorTable, 
  GrowthChart, 
  ServerHealthCard 
} from '@/components/admin/DashboardComponents';
import { 
  CalendarDays, 
  TrendingUp, 
  BarChart3, 
  Download,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdmin } from '@/context/AdminContext';

export default function AdminDashboard() {
  const { stats, vendors } = useAdmin();

  return (
    <AdminLayout>
      <div className="max-w-[1600px] mx-auto">
        {/* Dashboard Header */}
        <div className="mb-12 flex justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-black font-manrope tracking-tighter text-luminous-text-primary mb-3">Marketplace Overview</h1>
            <p className="text-slate-500 max-w-lg font-medium text-sm leading-relaxed">
              Monitoring real-time service activity, vendor performance, and transactional distribution across the Luminous ecosystem.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-4"
          >
            <button className="px-8 py-3.5 bg-white border border-slate-200 text-slate-700 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all shadow-sm flex items-center gap-3">
              <Download className="w-4 h-4 text-emerald-600" />
              Export Report
            </button>
            <button className="px-8 py-3.5 bg-luminous-sidebar text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-3">
              <Plus className="w-4 h-4" />
              Direct Action
            </button>
          </motion.div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <StatCard 
            title="Today's Bookings"
            value="1,248"
            trend="+12%"
            trendUp={true}
            icon={<CalendarDays className="w-6 h-6 text-slate-700" />}
            subtitle="REAL-TIME ACTIVITY"
            delay={0.1}
          />
          <StatCard 
            title="This Week"
            value="8,492"
            trend="+4.2%"
            trendUp={true}
            icon={<TrendingUp className="w-6 h-6 text-slate-700" />}
            subtitle="PROJECTED: 9.1K"
            delay={0.2}
          />
          <StatCard 
            title="Monthly Volume"
            value={stats.monthlyVolume}
            trend="-1.5%"
            trendUp={false}
            icon={<BarChart3 className="w-6 h-6 text-slate-700" />}
            subtitle="PEAK: OCT 2023"
            delay={0.3}
          />
        </div>

        {/* Middle Section: Distribution & Vendors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <DistributionChart />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <VendorTable vendors={vendors} />
          </motion.div>
        </div>

        {/* Bottom Section: Growth & Health */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-3"
          >
            <GrowthChart />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-1"
          >
            <ServerHealthCard />
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
