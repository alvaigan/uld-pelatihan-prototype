'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Users, 
  Calendar, 
  Clock, 
  MapPin,
  BookOpen,
  Send,
  CheckCircle,
  XCircle,
  Grid3X3,
  List
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ProgramPelatihan() {
  const [viewMode, setViewMode] = useState<"card" | "table">("card");

  const programList = [
    {
      id: 1,
      title: "Digital Marketing untuk Penyandang Disabilitas",
      deskripsi: "Program pelatihan digital marketing yang dirancang khusus untuk penyandang disabilitas",
      kategori: "Digital Marketing",
      durasi: "4 minggu",
      kapasitas: 30,
      pendaftar: 15,
      tanggalMulai: "1 Maret 2024",
      tanggalSelesai: "28 Maret 2024",
      status: "Aktif",
      instruktur: "Ahmad Fadli",
      lokasi: "Online",
      biaya: 0,
      aksesibilitas: ["Screen Reader", "Subtitle", "Sign Language"],
      tanggalBuat: "15 Jan 2024"
    },
    {
      id: 2,
      title: "Pemrograman Web Responsif",
      deskripsi: "Belajar membuat website yang aksesibel dan responsif",
      kategori: "Programming",
      durasi: "6 minggu",
      kapasitas: 25,
      pendaftar: 23,
      tanggalMulai: "5 Maret 2024",
      tanggalSelesai: "15 April 2024",
      status: "Pendaftaran",
      instruktur: "Siti Nurhaliza",
      lokasi: "Hybrid",
      biaya: 500000,
      aksesibilitas: ["Keyboard Navigation", "High Contrast", "Large Text"],
      tanggalBuat: "20 Jan 2024"
    },
    {
      id: 3,
      title: "Desain Grafis Inklusif",
      deskripsi: "Mendesain dengan prinsip accessibility dan inklusivitas",
      kategori: "Design",
      durasi: "8 minggu",
      kapasitas: 20,
      pendaftar: 8,
      tanggalMulai: "10 Maret 2024",
      tanggalSelesai: "5 Mei 2024",
      status: "Draft",
      instruktur: "Budi Santoso",
      lokasi: "Offline",
      biaya: 750000,
      aksesibilitas: ["Voice Commands", "Tactile Feedback"],
      tanggalBuat: "25 Jan 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Pendaftaran":
        return "bg-blue-100 text-blue-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      case "Selesai":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const renderCardView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programList.map((program) => (
        <Card key={program.id} className="p-6 hover:shadow-lg transition-shadow">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{program.deskripsi}</p>
              </div>
              <Badge className={getStatusColor(program.status)}>
                {program.status}
              </Badge>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{program.tanggalMulai} - {program.tanggalSelesai}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{program.durasi}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{program.pendaftar}/{program.kapasitas} peserta</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{program.lokasi}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {program.aksesibilitas.slice(0, 2).map((akses, i) => (
                <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                  {akses}
                </span>
              ))}
              {program.aksesibilitas.length > 2 && (
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  +{program.aksesibilitas.length - 2}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href={`/upt-ppkd/program-pelatihan/${program.id}`}>
                  <Eye className="mr-1" size={16} />
                  Detail
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="mr-1" size={16} />
                Edit
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderTableView = () => (
    <Card className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 font-semibold text-gray-700">Program</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700">Peserta</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700">Tanggal</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700">Lokasi</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {programList.map((program) => (
              <tr key={program.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-2">
                  <div>
                    <p className="font-medium text-gray-900">{program.title}</p>
                    <p className="text-sm text-gray-500">{program.kategori}</p>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <Badge className={getStatusColor(program.status)}>
                    {program.status}
                  </Badge>
                </td>
                <td className="py-4 px-2 text-sm text-gray-700">
                  {program.pendaftar}/{program.kapasitas}
                </td>
                <td className="py-4 px-2 text-sm text-gray-700">
                  {program.tanggalMulai}
                </td>
                <td className="py-4 px-2 text-sm text-gray-700">
                  {program.lokasi}
                </td>
                <td className="py-4 px-2">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit size={16} />
                    </Button>
                    {program.status === "Draft" && (
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Program Pelatihan</h1>
          <p className="text-gray-600 mt-1">Kelola program pelatihan untuk penyandang disabilitas</p>
        </div>
        <Link href="/upt-ppkd/program-pelatihan/buat-program">
          <Button>
            <Plus className="mr-2" size={18} />
            Buat Program Baru
          </Button>
        </Link>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Program</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Program Aktif</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Peserta</p>
              <p className="text-2xl font-bold text-gray-900">298</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Program Draft</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <Edit className="text-gray-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Search, Filter, and View Toggle */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input placeholder="Cari program pelatihan..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2" size={18} />
              Kategori
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2" size={18} />
              Tanggal
            </Button>
            <Button variant="outline">
              <MapPin className="mr-2" size={18} />
              Lokasi
            </Button>
            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === "card" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("card")}
                className="px-3"
              >
                <Grid3X3 size={16} />
              </Button>
              <Button
                variant={viewMode === "table" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("table")}
                className="px-3"
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Program List - Card or Table View */}
      {viewMode === "card" ? renderCardView() : renderTableView()}
    </div>
  );
} 