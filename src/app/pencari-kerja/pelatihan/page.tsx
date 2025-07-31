'use client';

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CheckCircle, Star, Bookmark, Search, Users, Calendar, Clock, Globe, Eye, Download } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import React from "react";
import Link from "next/link";

const pelatihanList = [
  {
    id: 1,
    title: "Digital Marketing untuk Pemula",
    provider: "Lembaga Pelatihan Digital",
    desc: "Pelajari dasar-dasar digital marketing termasuk SEO, social media marketing, dan content marketing.",
    tags: ["SEO", "Social Media", "Content Marketing", "+1"],
    rating: 4.8,
    peserta: 1250,
    durasi: "4 minggu",
    mulai: "1/2/2024",
    mode: "Online",
    akses: ["Screen Reader Compatible", "Subtitle Available", "Sign Language"],
    price: 0,
    badge: "Gratis",
  },
  {
    id: 2,
    title: "Pemrograman Web dengan HTML & CSS",
    provider: "Coding Academy Indonesia",
    desc: "Belajar membuat website dari nol menggunakan HTML dan CSS dengan pendekatan yang mudah dipahami.",
    tags: ["HTML", "CSS", "Responsive Design", "+1"],
    rating: 4.9,
    peserta: 890,
    durasi: "6 minggu",
    mulai: "5/2/2024",
    mode: "Hybrid",
    akses: ["Screen Reader Compatible", "Large Text Support", "Keyboard Navigation"],
    price: 500000,
    badge: "Rp 500.000",
  },
  {
    id: 3,
    title: "Desain Grafis dengan Adobe Photoshop",
    provider: "Creative Design Institute",
    desc: "Kuasi teknik desain grafis profesional menggunakan Adobe Photoshop untuk berbagai kebutuhan.",
    tags: ["Adobe Photoshop", "Graphic Design", "Photo Editing", "+1"],
    rating: 4.7,
    peserta: 650,
    durasi: "8 minggu",
    mulai: "10/2/2024",
    mode: "Offline",
    akses: ["High Contrast Mode", "Voice Commands", "Tactile Feedback"],
    price: 750000,
    badge: "Rp 750.000",
  },
];

const pelatihanSaya = [
  {
    id: 1,
    title: "Digital Marketing untuk Pemula",
    provider: "Lembaga Pelatihan Digital",
    status: "Sedang Berlangsung",
    progress: 75,
    modul: "6 dari 8 modul selesai",
    mulai: "15/1/2024",
    selesai: "15/2/2024",
    sesi: "30/1/2024, 19.00.00",
    aksi: "Lanjutkan",
    detail: true,
  },
  {
    id: 2,
    title: "Keterampilan Komunikasi Bisnis",
    provider: "Professional Skills Center",
    status: "Selesai",
    progress: 100,
    modul: "5 dari 5 modul selesai",
    mulai: "1/1/2024",
    selesai: "22/1/2024",
    aksi: "Unduh Sertifikat",
    detail: true,
  },
];

const sertifikatList = [
  {
    id: 1,
    title: "Keterampilan Komunikasi Bisnis",
    provider: "Professional Skills Center",
    tanggal: "22/1/2024",
    nomor: "CERT-2024-001",
    skills: ["Public Speaking", "Business Communication", "Presentation"],
  },
  {
    id: 2,
    title: "Microsoft Office Specialist",
    provider: "Microsoft Learning",
    tanggal: "15/12/2023",
    nomor: "MOS-2023-456",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
];

export default function PelatihanList() {
  const [tab, setTab] = React.useState("jelajahi");
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold mb-1">Program Pelatihan</h1>
        <p className="text-gray-600">Tingkatkan keterampilan Anda dengan program pelatihan yang disesuaikan untuk penyandang disabilitas</p>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-5 flex flex-col gap-1 items-center">
          <BookOpen className="text-blue-500 mb-1" size={28} />
          <div className="text-2xl font-bold">156</div>
          <div className="text-xs text-gray-500">Total Pelatihan</div>
        </Card>
        <Card className="p-5 flex flex-col gap-1 items-center">
          <Users className="text-green-500 mb-1" size={28} />
          <div className="text-2xl font-bold">1</div>
          <div className="text-xs text-gray-500">Sedang Diikuti</div>
        </Card>
        <Card className="p-5 flex flex-col gap-1 items-center">
          <CheckCircle className="text-purple-500 mb-1" size={28} />
          <div className="text-2xl font-bold">1</div>
          <div className="text-xs text-gray-500">Selesai</div>
        </Card>
        <Card className="p-5 flex flex-col gap-1 items-center">
          <Star className="text-orange-500 mb-1" size={28} />
          <div className="text-2xl font-bold">2</div>
          <div className="text-xs text-gray-500">Sertifikat</div>
        </Card>
      </div>
      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="w-full flex bg-gray-100 rounded-lg mb-4">
          <TabsTrigger value="jelajahi" className="flex-1">Jelajahi Pelatihan</TabsTrigger>
          <TabsTrigger value="saya" className="flex-1">Pelatihan Saya</TabsTrigger>
          <TabsTrigger value="sertifikat" className="flex-1">Sertifikat</TabsTrigger>
          <TabsTrigger value="rekomendasi" className="flex-1">Rekomendasi</TabsTrigger>
        </TabsList>
        {/* Tab Content */}
        {tab === "jelajahi" && (
          <div>
            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center mb-2">
              <div className="relative flex-1 w-full">
                <Input placeholder="Cari pelatihan, keterampilan, atau provider..." className="pl-10 bg-white" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <select className="border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white">
                <option>Semua Kategori</option>
              </select>
              <select className="border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white">
                <option>Semua Level</option>
              </select>
              <select className="border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white">
                <option>Semua Mode</option>
              </select>
            </div>
            {/* Grid Pelatihan */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {pelatihanList.map((p) => (
                <Card key={p.id} className="relative p-0 overflow-hidden group flex flex-col h-full">
                  {/* Badge harga/gratis */}
                  <div className={`absolute left-4 top-4 z-10 px-3 py-1 rounded-lg text-xs font-semibold ${p.price === 0 ? "bg-green-500 text-white" : "bg-green-100 text-green-800"}`}>
                    {p.badge}
                  </div>
                  {/* Bookmark */}
                  <button className="absolute right-4 top-4 z-10 p-1 rounded-full bg-white/80 hover:bg-white shadow">
                    <Bookmark size={18} className="text-gray-400" />
                  </button>
                  {/* Gambar placeholder */}
                  <div className="flex items-center justify-center h-40 bg-gray-100 border-b">
                    <ImagePlaceholder />
                  </div>
                  {/* Konten */}
                  <div className="flex-1 flex flex-col gap-2 p-5">
                    <div className="font-semibold text-base leading-tight mb-1">{p.title}</div>
                    <div className="text-xs text-gray-500 mb-1">{p.provider}</div>
                    <div className="text-xs text-gray-600 mb-2 line-clamp-2">{p.desc}</div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {p.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-1">
                      <span className="flex items-center gap-1"><Star size={14} className="text-yellow-400" /> {p.rating}</span>
                      <span className="flex items-center gap-1"><Users size={14} /> {p.peserta}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {p.durasi}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-1">
                      <span><Calendar size={14} className="inline mr-1" /> Mulai: {p.mulai}</span>
                      <span><Globe size={14} className="inline mr-1" /> {p.mode}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {p.akses.map((a, i) => (
                        <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full border border-gray-300">{a}</span>
                      ))}
                    </div>
                    <Button asChild className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2">
                      <Link href={`/pencari-kerja/pelatihan/${p.id}`}>Lihat Detail</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
        {tab === "saya" && (
          <div className="flex flex-col gap-6">
            {pelatihanSaya.map((p) => (
              <Card key={p.id} className="p-8 flex flex-col gap-4 shadow-md border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="text-xl font-bold mb-1">{p.title}</div>
                    <div className="text-sm text-gray-500 mb-2">{p.provider}</div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 min-w-[180px]">
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold w-fit ${p.status === "Selesai" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{p.status}</span>
                    {p.status === "Sedang Berlangsung" && (
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full md:w-auto px-8 py-2">{p.aksi}</Button>
                    )}
                    {p.status === "Selesai" && (
                      <Button className="bg-white border border-gray-300 text-gray-700 font-semibold w-full md:w-auto px-8 py-2 flex items-center gap-2"><Download size={16}/> {p.aksi}</Button>
                    )}
                    <Button variant="outline" className="w-full md:w-auto flex items-center gap-2 mt-1"><Eye size={16}/> Detail</Button>
                  </div>
                </div>
                <div className="text-sm font-medium mb-1 mt-2">Progress</div>
                <div className="flex items-center gap-2 mb-1">
                  <Progress value={p.progress} className="h-2 bg-gray-200 flex-1" style={{backgroundColor:'#e5e7eb'}}/>
                  <span className="text-sm font-semibold w-12 text-right">{p.progress}%</span>
                </div>
                <div className="text-xs text-gray-500 mb-1">{p.modul}</div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-1 text-sm">
                  <div>Tanggal Mulai<br/><span className="font-bold">{p.mulai}</span></div>
                  <div>Tanggal Selesai<br/><span className="font-bold">{p.selesai}</span></div>
                </div>
                {p.sesi && (
                  <div className="bg-blue-50 text-blue-700 text-sm rounded-lg px-4 py-3 mt-2 w-full">
                    <span className="font-semibold">Sesi Berikutnya</span><br/>{p.sesi}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
        {tab === "sertifikat" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sertifikatList.map((s) => (
              <Card key={s.id} className="p-8 flex flex-col gap-4 shadow-md border border-gray-200 relative">
                <div className="absolute right-6 top-6">
                  <Star size={28} className="text-yellow-400" strokeWidth={2.2} fill="#fffbe6" />
                </div>
                <div className="text-xl font-bold mb-1">{s.title}</div>
                <div className="text-sm text-gray-500 mb-2">{s.provider}</div>
                <div className="flex flex-row gap-8 mb-2">
                  <div>
                    <div className="text-sm text-gray-500">Tanggal Terbit</div>
                    <div className="font-semibold text-base">{s.tanggal}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Nomor Sertifikat</div>
                    <div className="font-semibold text-base">{s.nomor}</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Keterampilan yang Dikuasai:</div>
                  <div className="flex flex-wrap gap-2">
                    {s.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex-1 flex items-center justify-center gap-2"><Download size={18}/> Unduh</Button>
                  <Button variant="outline" className="flex-1 flex items-center justify-center gap-2"><Eye size={18}/> Lihat</Button>
                </div>
              </Card>
            ))}
          </div>
        )}
        {/* Tab lain bisa diisi menyusul */}
      </Tabs>
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-300">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M16 12h.01M12 16h.01" />
      </svg>
    </div>
  );
} 