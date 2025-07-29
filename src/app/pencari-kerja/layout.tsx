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
  User2,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export default function PencariKerjaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#f5f7fd]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-[#16a34a] text-white p-6 justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-2xl">PK</span>
            <div>
              <div className="font-bold text-lg leading-tight">PENCARI KERJA</div>
              <div className="text-xs opacity-80 -mt-1">Platform Ketenagakerjaan Inklusif</div>
            </div>
          </div>
          <nav className="flex flex-col gap-2 text-base">
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
            <div className="font-semibold mb-2 mt-6 text-xs text-white/70 uppercase">Pengaturan</div>
            <a href="#" className="py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3">
              <Settings size={18} /> Pengaturan
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <span className="inline-block w-9 h-9 rounded-full bg-white/30 flex items-center justify-center font-bold">
            <User2 size={20} />
          </span>
          <div>
            <div className="font-semibold leading-tight">John Doe</div>
            <div className="text-xs opacity-80">Pencari Kerja</div>
          </div>
        </div>
      </aside>
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-h-screen">
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
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => window.location.href = '/login'}
                title="Logout"
              >
                <LogOut size={20} />
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