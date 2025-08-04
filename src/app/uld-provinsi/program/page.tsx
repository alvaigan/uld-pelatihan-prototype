'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DataTable, Program } from "@/components/ui/data-table";
import { 
  BookOpen, 
  Users, 
  PlayCircle,
  Download,
  Target,
  BarChart3
} from "lucide-react";
import { useState } from "react";

export default function ProgramPelatihan() {
  const [activeTab, setActiveTab] = useState("aktif");

  const programList: Program[] = [
    {
      id: 1,
      namaProgram: "Digital Marketing untuk Penyandang Disabilitas",
      upt: "UPT PPKD Jakarta Selatan",
      wilayah: "Jakarta Selatan",
      kategori: "Digital Marketing",
      instruktur: "Ahmad Fadli, S.Kom",
      kapasitas: 30,
      terdaftar: 28,
      aktif: 26,
      lulus: 0,
      dropout: 2,
      tanggalMulai: "1 Mar 2024",
      tanggalSelesai: "26 Apr 2024",
      durasi: "8 minggu",
      progress: 45,
      status: "Sedang Berjalan",
      tingkatKehadiran: 89,
      tingkatKepuasan: 4.6,
      biaya: 0,
      aksesibilitas: ["Screen Reader", "Subtitle", "Sign Language"],
      mingguKe: 4
    },
    {
      id: 2,
      namaProgram: "Pemrograman Web Responsif",
      upt: "UPT PPKD Jakarta Timur",
      wilayah: "Jakarta Timur",
      kategori: "Programming",
      instruktur: "Dr. Siti Maryam",
      kapasitas: 25,
      terdaftar: 25,
      aktif: 23,
      lulus: 0,
      dropout: 2,
      tanggalMulai: "5 Mar 2024",
      tanggalSelesai: "14 Mai 2024",
      durasi: "10 minggu",
      progress: 30,
      status: "Sedang Berjalan",
      tingkatKehadiran: 92,
      tingkatKepuasan: 4.8,
      biaya: 500000,
      aksesibilitas: ["Keyboard Navigation", "High Contrast", "Large Text"],
      mingguKe: 3
    },
    {
      id: 3,
      namaProgram: "Desain Grafis Inklusif",
      upt: "UPT PPKD Jakarta Barat",
      wilayah: "Jakarta Barat",
      kategori: "Design",
      instruktur: "Budi Santoso, S.Ds",
      kapasitas: 20,
      terdaftar: 18,
      aktif: 17,
      lulus: 0,
      dropout: 1,
      tanggalMulai: "10 Mar 2024",
      tanggalSelesai: "5 Mai 2024",
      durasi: "8 minggu",
      progress: 25,
      status: "Sedang Berjalan",
      tingkatKehadiran: 85,
      tingkatKepuasan: 4.4,
      biaya: 750000,
      aksesibilitas: ["Voice Commands", "Tactile Feedback"],
      mingguKe: 2
    },
    {
      id: 4,
      namaProgram: "Data Analysis Fundamentals",
      upt: "UPT PPKD Jakarta Pusat",
      wilayah: "Jakarta Pusat",
      kategori: "Data Analysis",
      instruktur: "Rina Kusuma, M.T",
      kapasitas: 20,
      terdaftar: 20,
      aktif: 19,
      lulus: 18,
      dropout: 1,
      tanggalMulai: "1 Feb 2024",
      tanggalSelesai: "25 Apr 2024",
      durasi: "12 minggu",
      progress: 95,
      status: "Hampir Selesai",
      tingkatKehadiran: 94,
      tingkatKepuasan: 4.9,
      biaya: 0,
      aksesibilitas: ["Screen Reader", "Large Text", "Voice Navigation"],
      mingguKe: 11
    },
    {
      id: 5,
      namaProgram: "Mobile App Development",
      upt: "UPT PPKD Jakarta Utara",
      wilayah: "Jakarta Utara",
      kategori: "Programming",
      instruktur: "Eko Prasetyo, M.T",
      kapasitas: 22,
      terdaftar: 22,
      aktif: 0,
      lulus: 20,
      dropout: 2,
      tanggalMulai: "15 Jan 2024",
      tanggalSelesai: "7 Apr 2024",
      durasi: "12 minggu",
      progress: 100,
      status: "Selesai",
      tingkatKehadiran: 91,
      tingkatKepuasan: 4.7,
      biaya: 0,
      aksesibilitas: ["Screen Reader", "Keyboard Navigation"],
      mingguKe: 12
    },
    {
      id: 6,
      namaProgram: "Digital Marketing Pemula",
      upt: "UPT PPKD Jakarta Selatan",
      wilayah: "Jakarta Selatan",
      kategori: "Digital Marketing",
      instruktur: "Maya Sari, S.Kom",
      kapasitas: 25,
      terdaftar: 0,
      aktif: 0,
      lulus: 0,
      dropout: 0,
      tanggalMulai: "1 Apr 2024",
      tanggalSelesai: "24 Mai 2024",
      durasi: "8 minggu",
      progress: 0,
      status: "Pendaftaran",
      tingkatKehadiran: 0,
      tingkatKepuasan: 0,
      biaya: 0,
      aksesibilitas: ["Screen Reader", "Subtitle"],
      mingguKe: 0
    }
  ];

  // Handle detail and monitoring actions
  const handleViewDetail = (program: Program) => {
    console.log('View detail for:', program.namaProgram);
    // Add navigation logic here
  };

  const handleViewMonitoring = (program: Program) => {
    console.log('View monitoring for:', program.namaProgram);
    // Add navigation logic here
  };

  const filteredProgram = programList.filter(program => {
    switch (activeTab) {
      case "aktif":
        return program.status === "Sedang Berjalan" || program.status === "Hampir Selesai";
      case "pendaftaran":
        return program.status === "Pendaftaran";
      case "selesai":
        return program.status === "Selesai";
      case "semua":
        return true;
      default:
        return true;
    }
  });

  // Statistics calculation
  const totalProgram = programList.length;
  const programAktif = programList.filter(p => p.status === "Sedang Berjalan" || p.status === "Hampir Selesai").length;
  const totalPeserta = programList.reduce((sum, p) => sum + p.aktif, 0);
  const rataKelulusan = Math.round(
    programList.filter(p => p.status === "Selesai").reduce((sum, p) => sum + ((p.lulus / p.terdaftar) * 100), 0) / 
    programList.filter(p => p.status === "Selesai").length || 0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Program Pelatihan</h1>
          <p className="text-gray-600 mt-1">Monitor program pelatihan di seluruh wilayah DKI Jakarta</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2" size={18} />
            Export Data
          </Button>
          <Button variant="outline">
            <BarChart3 className="mr-2" size={18} />
            Analisis
          </Button>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Program</p>
              <p className="text-2xl font-bold text-gray-900">{totalProgram}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Sedang Berjalan</p>
              <p className="text-2xl font-bold text-gray-900">{programAktif}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <PlayCircle className="text-green-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Peserta Aktif</p>
              <p className="text-2xl font-bold text-gray-900">{totalPeserta}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Rata-rata Kelulusan</p>
              <p className="text-2xl font-bold text-gray-900">{rataKelulusan}%</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Target className="text-orange-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="aktif">Sedang Berjalan ({programAktif})</TabsTrigger>
          <TabsTrigger value="pendaftaran">Pendaftaran ({programList.filter(p => p.status === "Pendaftaran").length})</TabsTrigger>
          <TabsTrigger value="selesai">Selesai ({programList.filter(p => p.status === "Selesai").length})</TabsTrigger>
          <TabsTrigger value="semua">Semua Program ({totalProgram})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <DataTable 
            data={filteredProgram}
            onViewDetail={handleViewDetail}
            onViewMonitoring={handleViewMonitoring}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
} 