"use client";

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  VendorFilterTabs, 
  VendorBentoCard, 
  RecentVendorsTable 
} from '@/components/admin/VendorManagementComponents';
import { 
  Plus, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

import { useAdmin, Vendor } from '@/context/AdminContext';

export default function VendorManagementPage() {
  const { filteredVendors } = useAdmin();

  return (
    <AdminLayout>
      <div className="max-w-[1600px] mx-auto">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-black font-manrope tracking-tighter text-luminous-text-primary mb-3">Vendors</h2>
            <p className="text-slate-500 max-w-lg font-medium text-sm leading-relaxed">
              Manage salon partners, independent specialists, and luxury service providers within the marketplace ecosystem.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-luminous-sidebar text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-luminous-sidebar/20 hover:scale-105 hover:bg-luminous-primary-container transition-all flex items-center gap-3"
          >
            <Plus className="w-4 h-4 text-emerald-400" />
            Add New Vendor
          </motion.button>
        </div>

        {/* Filter Bar */}
        <VendorFilterTabs />

        {/* Vendor Bento Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {filteredVendors.map((vendor: Vendor, i: number) => (
            <VendorBentoCard 
              key={vendor.id}
              id={vendor.id}
              name={vendor.name}
              category={vendor.category}
              rating={vendor.rating}
              reviews={vendor.reviews}
              status={vendor.status}
              revenue={vendor.revenue}
              bookings={vendor.bookings}
              image={vendor.image}
              delay={i * 0.1}
            />
          ))}
          {filteredVendors.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No vendors matched your search</p>
            </div>
          )}
        </div>

        {/* Detailed Table Section */}
        <div className="mb-16">
          <RecentVendorsTable />
        </div>

        {/* Pagination & Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pb-12 gap-6">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">Showing 1-12 of 248 vendors</p>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-slate-100 text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-luminous-sidebar text-white font-black text-sm shadow-xl">1</button>
            <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-slate-100 text-luminous-text-primary hover:bg-slate-50 transition-all font-black text-sm">2</button>
            <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-slate-100 text-luminous-text-primary hover:bg-slate-50 transition-all font-black text-sm">3</button>
            <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-slate-100 text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
