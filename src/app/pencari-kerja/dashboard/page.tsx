import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Bookmark,
  Eye,
  Calendar,
  Briefcase,
  MapPin,
  Video,
} from "lucide-react";

export default function DashboardPencariKerja() {
  return (
    <div className="flex flex-col gap-6">
      {/* Greeting Card */}
      <div className="bg-green-600 rounded-xl p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-2xl font-bold mb-1">Selamat Datang, John Doe!</div>
          <div className="text-lg">Ayo lanjutkan perjalanan karirmu. Ada 15 lowongan baru yang cocok dengan profilmu.</div>
        </div>
        <form className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
          <input type="text" placeholder="Cari Lowongan" className="w-full md:w-72 px-4 py-2 rounded-lg border border-green-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-200" />
          <Button className="bg-white text-green-700 hover:bg-green-100 font-semibold px-6">Cari Lowongan</Button>
        </form>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-5 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <FileText size={20} className="text-blue-500" />
            Aplikasi Aktif
          </div>
          <div className="text-3xl font-bold">12</div>
          <div className="text-xs text-gray-400">Sedang dalam proses</div>
        </Card>
        <Card className="p-5 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <Bookmark size={20} className="text-green-500" />
            Lowongan Tersimpan
          </div>
          <div className="text-3xl font-bold">8</div>
          <div className="text-xs text-gray-400">Disimpan untuk nanti</div>
        </Card>
        <Card className="p-5 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <Eye size={20} className="text-purple-500" />
            Profil Dilihat
          </div>
          <div className="text-3xl font-bold">45</div>
          <div className="text-xs text-gray-400">Dalam 30 hari terakhir</div>
        </Card>
        <Card className="p-5 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <Calendar size={20} className="text-orange-500" />
            Interview Mendatang
          </div>
          <div className="text-3xl font-bold">2</div>
          <div className="text-xs text-gray-400">Minggu ini</div>
        </Card>
      </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        {/* Kolom 1: Aplikasi Terbaru & Lowongan Rekomendasi */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Aplikasi Terbaru */}
          <Card className="p-6">
            <div className="font-bold text-lg mb-2 flex items-center gap-2">
              <Briefcase size={20} className="text-green-600" />
              Aplikasi Terbaru
            </div>
            <div className="text-sm text-gray-500 mb-4">Status aplikasi pekerjaan terbaru</div>
            <div className="flex flex-col gap-3">
              <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-semibold">Frontend Developer</div>
                  <div className="text-xs text-gray-500">PT Tech Innovate</div>
                  <div className="text-xs text-gray-400">Dilamar: 2024-01-15</div>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Interview</span>
              </div>
              <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-semibold">UI/UX Designer</div>
                  <div className="text-xs text-gray-500">CV Digital Solutions</div>
                  <div className="text-xs text-gray-400">Dilamar: 2024-01-12</div>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">Review</span>
              </div>
              <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-semibold">Data Analyst</div>
                  <div className="text-xs text-gray-500">PT Inclusive Work</div>
                  <div className="text-xs text-gray-400">Dilamar: 2024-01-10</div>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Shortlisted</span>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">Lihat Semua Aplikasi</Button>
          </Card>
          {/* Lowongan Rekomendasi */}
          <Card className="p-6">
            <div className="font-bold text-lg mb-2 flex items-center gap-2">
              <MapPin size={20} className="text-green-600" />
              Lowongan Rekomendasi
            </div>
            <div className="text-sm text-gray-500 mb-4">Lowongan yang cocok dengan profil dan preferensimu</div>
            <div className="text-gray-400 text-center py-8">(Contoh data rekomendasi lowongan di sini)</div>
          </Card>
        </div>
        {/* Kolom 2: Interview Mendatang */}
        <div className="flex flex-col gap-6">
          <Card className="p-6">
            <div className="font-bold text-lg mb-2 flex items-center gap-2">
              <Calendar size={20} className="text-orange-500" />
              Interview Mendatang
            </div>
            <div className="text-sm text-gray-500 mb-4">Jadwal wawancara yang akan datang</div>
            <div className="flex flex-col gap-3">
              <div className="border rounded-lg p-4 flex flex-col gap-1">
                <div className="font-semibold">Frontend Developer</div>
                <div className="text-xs text-gray-500">PT Tech Innovate</div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                  <span>2024-01-20</span>
                  <span>10:00</span>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold flex items-center gap-1"><Video size={14} /> Video Call</span>
                </div>
              </div>
              <div className="border rounded-lg p-4 flex flex-col gap-1">
                <div className="font-semibold">UI/UX Designer</div>
                <div className="text-xs text-gray-500">CV Digital Solutions</div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                  <span>2024-01-22</span>
                  <span>14:00</span>
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 font-semibold flex items-center gap-1"><MapPin size={14} /> On-site</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">Kelola Jadwal</Button>
          </Card>
        </div>
      </div>
    </div>
  );
} 