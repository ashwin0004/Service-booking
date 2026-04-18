"use client";

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  CategoryRibbon, 
  ServiceBentoCard, 
  CategoryListSidebar, 
  AddServiceModal
} from '@/components/admin/ServiceManagementComponents';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdmin, Service } from '@/context/AdminContext';

export default function ServiceManagementPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { filteredServices } = useAdmin();

  return (
    <AdminLayout>
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-black font-manrope tracking-tighter text-luminous-text-primary mb-3">Manage Services</h2>
            <p className="text-slate-500 max-w-lg font-medium text-sm leading-relaxed">
              Catalog governance and architectural category mapping for the service ecosystem.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-luminous-sidebar text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-luminous-sidebar/20 hover:scale-105 hover:bg-luminous-primary-container transition-all flex items-center gap-3"
          >
            <Plus className="w-4 h-4 text-emerald-400" />
            Add New Service
          </motion.button>
        </div>

        {/* Categories Ribbon */}
        <CategoryRibbon />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-20">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service: Service, i: number) => (
              <ServiceBentoCard 
                key={service.id}
                id={service.id}
                title={service.title}
                category={service.category}
                description={service.description}
                image={service.image}
                status={service.status}
                providerCount={service.providerCount}
                delay={i * 0.1}
              />
            ))}
            {filteredServices.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No services matched your search</p>
              </div>
            )}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <CategoryListSidebar />
          </motion.div>
        </div>



        {/* Registration Modal */}
        <AddServiceModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </AdminLayout>
  );
}
