'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock, 
  MapPin,
  Building2,
  Search,
  Filter,
  Eye,
  BarChart3,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  PlayCircle,
  PauseCircle,
  Download,
  Target
} from "lucide-react";
import { useState } from "react";

export default function ProgramPelatihan() {
  const [activeTab, setActiveTab] = useState("aktif");

  const programList = [
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Sedang Berjalan":
        return "bg-blue-100 text-blue-800";
      case "Hampir Selesai":
        return "bg-orange-100 text-orange-800";
      case "Selesai":
        return "bg-green-100 text-green-800";
      case "Pendaftaran":
        return "bg-purple-100 text-purple-800";
      case "Ditunda":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Sedang Berjalan":
        return <PlayCircle size={16} className="text-blue-600" />;
      case "Hampir Selesai":
        return <Clock size={16} className="text-orange-600" />;
      case "Selesai":
        return <CheckCircle size={16} className="text-green-600" />;
      case "Pendaftaran":
        return <Users size={16} className="text-purple-600" />;
      case "Ditunda":
        return <PauseCircle size={16} className="text-gray-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return "bg-green-500";
    if (progress >= 70) return "bg-orange-500";
    if (progress >= 40) return "bg-blue-500";
    return "bg-gray-500";
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

        <TabsContent value={activeTab} className="space-y-6">
          {/* Search and Filter */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input placeholder="Cari nama program, UPT, atau instruktur..." className="pl-10" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2" size={18} />
                  UPT PPKD
                </Button>
                <Button variant="outline">
                  <MapPin className="mr-2" size={18} />
                  Wilayah
                </Button>
                <Button variant="outline">
                  <BookOpen className="mr-2" size={18} />
                  Kategori
                </Button>
              </div>
            </div>
          </Card>

          {/* Program Cards */}
          <div className="space-y-4">
            {filteredProgram.map((program) => (
              <Card key={program.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{program.namaProgram}</h3>
                      <Badge className={getStatusColor(program.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(program.status)}
                          {program.status}
                        </div>
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      {program.status === "Sedang Berjalan" || program.status === "Hampir Selesai" ? 
                        `Minggu ke-${program.mingguKe} dari ${program.durasi}` : 
                        program.durasi
                      }
                    </div>
                  </div>

                  {/* Progress Bar (for active programs) */}
                  {(program.status === "Sedang Berjalan" || program.status === "Hampir Selesai") && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress Program</span>
                        <span className="font-medium">{program.progress}%</span>
                      </div>
                      <Progress value={program.progress} className="h-2" />
                    </div>
                  )}

                  {/* Main Content */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Basic Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{program.upt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{program.wilayah}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{program.kategori}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{program.tanggalMulai} - {program.tanggalSelesai}</span>
                      </div>
                    </div>

                    {/* Middle Column - Participation Stats */}
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-lg font-bold text-blue-600">{program.terdaftar}</p>
                            <p className="text-xs text-gray-600">Terdaftar</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-green-600">{program.aktif}</p>
                            <p className="text-xs text-gray-600">Aktif</p>
                          </div>
                        </div>
                      </div>
                      {program.status === "Selesai" && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-lg font-bold text-green-600">{program.lulus}</p>
                              <p className="text-xs text-gray-600">Lulus</p>
                            </div>
                            <div>
                              <p className="text-lg font-bold text-red-600">{program.dropout}</p>
                              <p className="text-xs text-gray-600">Dropout</p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Instruktur:</span> {program.instruktur}
                      </div>
                    </div>

                    {/* Right Column - Performance Metrics */}
                    <div className="space-y-3">
                      {(program.status === "Sedang Berjalan" || program.status === "Hampir Selesai" || program.status === "Selesai") && (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Tingkat Kehadiran</span>
                            <span className="font-medium text-blue-600">{program.tingkatKehadiran}%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Kepuasan Peserta</span>
                            <span className="font-medium text-orange-600">{program.tingkatKepuasan}/5.0</span>
                          </div>
                        </>
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Fitur Aksesibilitas:</p>
                        <div className="flex flex-wrap gap-1">
                          {program.aksesibilitas.slice(0, 2).map((akses, i) => (
                            <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                              {akses}
                            </span>
                          ))}
                          {program.aksesibilitas.length > 2 && (
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                              +{program.aksesibilitas.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Kapasitas: {program.terdaftar}/{program.kapasitas}</span>
                      {program.biaya > 0 && (
                        <span>Biaya: Rp {program.biaya.toLocaleString()}</span>
                      )}
                      {program.biaya === 0 && (
                        <span className="text-green-600 font-medium">Gratis</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-1" size={16} />
                        Detail
                      </Button>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="mr-1" size={16} />
                        Monitoring
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProgram.length === 0 && (
            <Card className="p-12 text-center">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada program {activeTab === "aktif" ? "yang sedang berjalan" : 
                activeTab === "pendaftaran" ? "dalam tahap pendaftaran" :
                activeTab === "selesai" ? "yang sudah selesai" : "ditemukan"}
              </h3>
              <p className="text-gray-600">
                Program akan muncul di sini setelah disetujui dan dimulai oleh UPT PPKD
              </p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
} 