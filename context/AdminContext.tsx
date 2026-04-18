"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';

// --- Types ---
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Customer' | 'Provider' | 'Admin';
  status: 'Active' | 'Inactive';
  joinedDate: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  status: 'Active' | 'Suspended' | 'Inactive';
  revenue: string;
  bookings: number;
  image: string;
  pricing: number;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: boolean;
  providerCount: number;
}

interface AdminContextType {
  users: User[];
  vendors: Vendor[];
  services: Service[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  userStatusFilter: string;
  setUserStatusFilter: (status: string) => void;
  vendorStatusFilter: string;
  setVendorStatusFilter: (status: string) => void;
  serviceCategoryFilter: string;
  setServiceCategoryFilter: (category: string) => void;
  
  // Actions
  toggleService: (id: string) => void;
  addService: (service: Omit<Service, 'id'>) => void;
  toggleVendor: (id: string) => void;
  // Derived
  filteredServices: Service[];
  filteredVendors: Vendor[];
  filteredUsers: User[];
  stats: {
    totalRevenue: string;
    activeUsers: number;
    totalBookings: number;
    platformHealth: number;
    monthlyVolume: string;
  };
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// --- Mock Initial Data ---
const INITIAL_USERS: User[] = [
  { id: '1', name: 'Alex Rivera', email: 'alex@example.com', role: 'Customer', status: 'Active', joinedDate: '2024-03-12' },
  { id: '2', name: 'Jordan Smith', email: 'jordan@example.com', role: 'Provider', status: 'Active', joinedDate: '2024-03-10' },
  { id: '3', name: 'Taylor Reed', email: 'taylor@example.com', role: 'Customer', status: 'Inactive', joinedDate: '2024-03-01' },
];

const INITIAL_VENDORS: Vendor[] = [
  { id: 'v1', name: "Velvet & Vine", category: "Luxury Aesthetics", rating: 4.9, reviews: 124, status: 'Active', revenue: "$12,450.00", bookings: 312, pricing: 3, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=300" },
  { id: 'v2', name: "The Iron Cut", category: "Modern Grooming", rating: 4.7, reviews: 89, status: 'Suspended', revenue: "$0.00", bookings: 0, pricing: 2, image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=300" },
  { id: 'v3', name: "Glow Protocol", category: "Skin Therapy", rating: 5.0, reviews: 42, status: 'Inactive', revenue: "$5,200.00", bookings: 84, pricing: 2, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=300" },
];

const INITIAL_SERVICES: Service[] = [
  { id: 's1', title: "Signature Balayage", category: "Hair & Styling", description: "Hand-painted highlighting technique for a natural look with soft transition.", status: true, providerCount: 2, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400" },
  { id: 's2', title: "Gel Extension X", category: "Nail Artistry", description: "Ultra-durable luxury nail extensions with custom artistic finishes.", status: true, providerCount: 4, image: "https://images.unsplash.com/photo-1604654894610-df490668b61c?auto=format&fit=crop&q=80&w=400" },
  { id: 's3', title: "Deep Tissue Reset", category: "Wellness & Spa", description: "Intense therapeutic massage focusing on realigning deep muscle layers.", status: false, providerCount: 12, image: "https://images.unsplash.com/photo-1544161515-4ae6ce6ca67d?auto=format&fit=crop&q=80&w=400" },
  { id: 's4', title: "Hydra-Infusion Glow", category: "Skin Therapy", description: "Advanced skin resurfacing treatment combining cleansing and hydration.", status: true, providerCount: 18, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400" },
];

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [users] = useState<User[]>(INITIAL_USERS);
  const [vendors, setVendors] = useState<Vendor[]>(INITIAL_VENDORS);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [searchQuery, setSearchQuery] = useState('');
  const [userStatusFilter, setUserStatusFilter] = useState('All Members');
  const [vendorStatusFilter, setVendorStatusFilter] = useState('All Vendors');
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState('All Services');

  // --- Actions ---
  const toggleService = (id: string) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, status: !s.status } : s));
  };

  const addService = (newService: Omit<Service, 'id'>) => {
    const id = `s${Date.now()}`;
    setServices(prev => [{ ...newService, id }, ...prev]);
  };

  const toggleVendor = (id: string) => {
    setVendors(prev => prev.map(v => {
      if (v.id === id) {
        const nextStatus = v.status === 'Active' ? 'Suspended' : 
                          v.status === 'Suspended' ? 'Active' : 'Active';
        return { ...v, status: nextStatus };
      }
      return v;
    }));
  };

  // --- Filtering ---
  const filteredServices = useMemo(() => {
    return services.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           s.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = serviceCategoryFilter === 'All Services' || s.category === serviceCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [services, searchQuery, serviceCategoryFilter]);

  const filteredVendors = useMemo(() => {
    return vendors.filter(v => {
      const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           v.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = vendorStatusFilter === 'All Vendors' || v.status === vendorStatusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [vendors, searchQuery, vendorStatusFilter]);

  const filteredUsers = useMemo(() => {
    return users.filter(u => {
      const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           u.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = userStatusFilter === 'All Members' || u.status === userStatusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [users, searchQuery, userStatusFilter]);

  // --- Derived Stats ---
  const stats = useMemo(() => {
    const revenueValue = vendors.reduce((sum, v) => sum + parseFloat(v.revenue.replace('$', '').replace(',', '')), 0);
    const bookings = vendors.reduce((sum, v) => sum + v.bookings, 0);
    return {
      totalRevenue: `$${revenueValue.toLocaleString()}`,
      activeUsers: users.filter(u => u.status === 'Active').length,
      totalBookings: bookings,
      platformHealth: 98.4,
      monthlyVolume: "32,105" // Mocking for now, could be derived from bookings history
    };
  }, [users, vendors]);

  return (
    <AdminContext.Provider value={{
      users, vendors, services, searchQuery, setSearchQuery,
      userStatusFilter, setUserStatusFilter,
      vendorStatusFilter, setVendorStatusFilter,
      serviceCategoryFilter, setServiceCategoryFilter,
      toggleService, addService, toggleVendor,
      filteredServices, filteredVendors, filteredUsers, stats
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
