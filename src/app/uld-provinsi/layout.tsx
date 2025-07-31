'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileCheck, BookOpen, Users, BarChart3, Search, Bell, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function ULDProvinsiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#f5f7fd]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#15803d] text-white flex flex-col h-screen fixed">
        {/* Header */}
        <div className="p-6 border-b border-green-600">
          <h1 className="text-xl font-bold">ULD Pelatihan</h1>
          <p className="text-green-200 text-sm mt-1">ULD Provinsi</p>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link href="/uld-provinsi/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition-colors">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/uld-provinsi/pengajuan" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition-colors">
                <FileCheck size={20} />
                <span>Pengajuan Program</span>
              </Link>
            </li>
            <li>
              <Link href="/uld-provinsi/program" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition-colors">
                <BookOpen size={20} />
                <span>Program Pelatihan</span>
              </Link>
            </li>
            <li>
              <Link href="/uld-provinsi/pendaftar" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition-colors">
                <Users size={20} />
                <span>Data Pendaftar</span>
              </Link>
            </li>
            <li>
              <Link href="/uld-provinsi/statistik" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition-colors">
                <BarChart3 size={20} />
                <span>Statistik Provinsi</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* User Profile - Fixed at bottom */}
        <div className="p-4 border-t border-green-600 mt-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">ULD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Admin ULD</p>
              <p className="text-xs text-green-200">DKI Jakarta</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1 text-green-200 hover:text-white hover:bg-green-600">
              <Settings size={16} className="mr-1" />
              Settings
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-green-200 hover:text-white hover:bg-green-600"
              onClick={() => window.location.href = '/login'}
              title="Logout"
            >
              <LogOut size={16} />
            </Button>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari program, UPT, atau wilayah..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
            </Button>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 