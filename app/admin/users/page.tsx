"use client";

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  UserFilterBar, 
  UserTable, 
  UserGrowthChart, 
  EcosystemHealthCard 
} from '@/components/admin/UserManagementComponents';
import { 
  Download, 
  UserPlus 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function UserManagementPage() {
  return (
    <AdminLayout>
      <div className="max-w-[1600px] mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-emerald-600 font-manrope font-black tracking-[0.3em] text-[10px] uppercase mb-3">
              Management Console
            </p>
            <h1 className="text-5xl md:text-6xl font-black font-manrope tracking-tighter text-luminous-text-primary">
              Users & Customers
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4"
          >
            <button className="px-8 py-4 rounded-2xl border border-slate-200 bg-white text-slate-700 font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-sm flex items-center gap-3">
              <Download className="w-4 h-4 text-emerald-600" />
              Export CSV
            </button>
            <button className="px-8 py-4 rounded-2xl bg-luminous-sidebar text-white font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 hover:bg-luminous-primary-container transition-all flex items-center gap-3">
              <UserPlus className="w-4 h-4 text-emerald-400" />
              Register New User
            </button>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <UserFilterBar />
        </motion.div>

        {/* User Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <UserTable />
        </motion.div>

        {/* Featured Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <UserGrowthChart />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <EcosystemHealthCard />
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
