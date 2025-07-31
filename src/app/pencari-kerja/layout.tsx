'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Briefcase,
  User,
  Star,
  BookOpen,
  MessageCircle,
  Info,
  Settings,
  Bell,
  Search,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export default function PencariKerjaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#f5f7fd]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-[#16a34a] text-white h-screen fixed">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">PK</div>
            <div className="flex-1">
              <div className="font-bold text-xl leading-tight">PENCARI KERJA</div>
              <div className="text-sm opacity-90 mt-0.5">Platform Ketenagakerjaan Inklusif</div>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-6 overflow-y-auto">
          <div className="flex flex-col gap-2 text-base">
            <div className="font-semibold mb-2 mt-4 text-xs text-white/70 uppercase">Utama</div>
            <a href="/pencari-kerja/dashboard" className="py-2 px-3 rounded-lg bg-white/10 font-semibold flex items-center gap-3">
              <LayoutDashboard size={18} /> Dashboard
            </a>
            <div className="font-semibold mb-2 mt-6 text-xs text-white/70 uppercase">Karir</div>
            <a href="#" className="py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3">
              <Search size={18} /> Cari Lowongan
            </a>
            <a href="#" className="py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3">
              <Briefcase size={18} /> Aplikasi Saya
            </a>
            <div className="font-semibold mb-2 mt-6 text-xs text-white/70 uppercase">Profil</div>
            <a href="/pencari-kerja/profil" className="py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3">
              <User size={18} /> Profil & CV
            </a>
            <a href="#" className="py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3">
              <Star size={18} /> Keterampilan
            </a>
            <div className="font-semibold mb-2 mt-6 text-xs text-white/70 uppercase">Pengembangan</div>
            <Link href="/pencari-kerja/pelatihan" className="py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3">
              <BookOpen size={18} /> Pelatihan
            </Link>
            <div className="font-semibold mb-2 mt-6 text-xs text-white/70 uppercase">Layanan</div>
            <a href="#" className="py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3">
              <MessageCircle size={18} /> Aduan & Konsultasi
            </a>
            <a href="#" className="py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3">
              <Info size={18} /> Tentang Dinas
            </a>
          </div>
        </nav>
        
        {/* User Profile - Fixed at bottom */}
        <div className="p-4 border-t border-green-500 mt-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">JD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-green-200">Pencari Kerja</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1 text-green-200 hover:text-white hover:bg-green-700">
              <Settings size={16} className="mr-1" />
              Settings
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-green-200 hover:text-white hover:bg-green-700"
              onClick={() => window.location.href = '/login'}
              title="Logout"
            >
              <LogOut size={16} />
            </Button>
          </div>
        </div>
      </aside>
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-h-screen ml-72">
        {/* Topbar */}
        <header className="bg-white flex items-center justify-between px-8 py-4 shadow-sm">
          <div className="flex items-center gap-4 w-full">
            <div className="relative w-96">
              <input type="text" placeholder="Cari lowongan..." className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200 pl-10" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={22} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
              </Button>
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  );
} 