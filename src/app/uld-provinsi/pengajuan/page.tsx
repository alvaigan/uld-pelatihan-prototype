'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Eye, 
  FileText, 
  Search,
  Filter,
  Calendar,
  Building2,
  Users,
  MapPin,
  AlertTriangle,
  MessageSquare,
  Send,
  Download,
  Edit
} from "lucide-react";
import { useState } from "react";

export default function PengajuanProgram() {
  const [activeTab, setActiveTab] = useState("pending");

  const pengajuanList = [
    {
      id: 1,
      nomorPengajuan: "PGJ-2024-001",
      namaProgram: "Digital Marketing Advanced",
      upt: "UPT PPKD Jakarta Selatan",
      kategori: "Digital Marketing",
      deskripsi: "Program lanjutan digital marketing dengan fokus pada SEO advanced dan paid advertising",
      kapasitas: 30,
      durasi: "8 minggu",
      biaya: 0,
      tanggalPengajuan: "1 Mar 2024",
      tanggalMulai: "15 Mar 2024",
      tanggalSelesai: "10 Mai 2024",
      status: "Menunggu Review",
      prioritas: "High",
      reviewer: null,
      catatan: "",
      dokumen: ["Proposal", "Kurikulum", "CV Instruktur", "RAB"],
      instruktur: "Ahmad Fadli, S.Kom",
      aksesibilitas: ["Screen Reader", "Subtitle", "Sign Language"]
    },
    {
      id: 2,
      nomorPengajuan: "PGJ-2024-002",
      namaProgram: "Data Science Fundamentals",
      upt: "UPT PPKD Jakarta Timur",
      kategori: "Data Analysis",
      deskripsi: "Pelatihan dasar data science menggunakan Python dan tools analisis data",
      kapasitas: 25,
      durasi: "10 minggu",
      biaya: 0,
      tanggalPengajuan: "28 Feb 2024",
      tanggalMulai: "20 Mar 2024",
      tanggalSelesai: "25 Mai 2024",
      status: "Menunggu Review",
      prioritas: "Medium",
      reviewer: null,
      catatan: "",
      dokumen: ["Proposal", "Kurikulum", "CV Instruktur"],
      instruktur: "Dr. Siti Maryam",
      aksesibilitas: ["Keyboard Navigation", "High Contrast"]
    },
    {
      id: 3,
      nomorPengajuan: "PGJ-2024-003",
      namaProgram: "UI/UX Design Accessibility",
      upt: "UPT PPKD Jakarta Barat",
      kategori: "Design",
      deskripsi: "Desain UI/UX dengan fokus pada accessibility dan inclusive design",
      kapasitas: 20,
      durasi: "6 minggu",
      biaya: 750000,
      tanggalPengajuan: "25 Feb 2024",
      tanggalMulai: "18 Mar 2024",
      tanggalSelesai: "29 Apr 2024",
      status: "Butuh Revisi",
      prioritas: "Low",
      reviewer: "Admin ULD",
      catatan: "Perlu penyesuaian kurikulum dan penambahan materi accessibility standards",
      dokumen: ["Proposal", "Kurikulum"],
      instruktur: "Budi Santoso, S.Ds",
      aksesibilitas: ["Voice Commands", "Tactile Feedback"]
    },
    {
      id: 4,
      nomorPengajuan: "PGJ-2024-004",
      namaProgram: "Mobile App Development",
      upt: "UPT PPKD Jakarta Pusat",
      kategori: "Programming",
      deskripsi: "Pengembangan aplikasi mobile menggunakan React Native",
      kapasitas: 20,
      durasi: "12 minggu",
      biaya: 0,
      tanggalPengajuan: "20 Feb 2024",
      tanggalMulai: "10 Mar 2024",
      tanggalSelesai: "2 Jun 2024",
      status: "Disetujui",
      prioritas: "High",
      reviewer: "Admin ULD",
      catatan: "Program disetujui dengan catatan monitoring ketat pada progress peserta",
      dokumen: ["Proposal", "Kurikulum", "CV Instruktur", "RAB", "MOU"],
      instruktur: "Eko Prasetyo, M.T",
      aksesibilitas: ["Screen Reader", "Large Text", "Voice Navigation"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Menunggu Review":
        return "bg-yellow-100 text-yellow-800";
      case "Butuh Revisi":
        return "bg-red-100 text-red-800";
      case "Disetujui":
        return "bg-green-100 text-green-800";
      case "Ditolak":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Disetujui":
        return <CheckCircle size={16} className="text-green-600" />;
      case "Ditolak":
        return <XCircle size={16} className="text-red-600" />;
      case "Butuh Revisi":
        return <AlertTriangle size={16} className="text-red-600" />;
      default:
        return <Clock size={16} className="text-yellow-600" />;
    }
  };

  const filteredPengajuan = pengajuanList.filter(pengajuan => {
    switch (activeTab) {
      case "pending":
        return pengajuan.status === "Menunggu Review";
      case "review":
        return pengajuan.status === "Butuh Revisi";
      case "approved":
        return pengajuan.status === "Disetujui";
      case "rejected":
        return pengajuan.status === "Ditolak";
      default:
        return true;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pengajuan Program Pelatihan</h1>
          <p className="text-gray-600 mt-1">Review dan setujui pengajuan program dari UPT PPKD</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2" size={18} />
            Export Laporan
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Menunggu Review</p>
              <p className="text-2xl font-bold text-gray-900">{pengajuanList.filter(p => p.status === "Menunggu Review").length}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="text-yellow-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Butuh Revisi</p>
              <p className="text-2xl font-bold text-gray-900">{pengajuanList.filter(p => p.status === "Butuh Revisi").length}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertTriangle className="text-red-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Disetujui</p>
              <p className="text-2xl font-bold text-gray-900">{pengajuanList.filter(p => p.status === "Disetujui").length}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Pengajuan</p>
              <p className="text-2xl font-bold text-gray-900">{pengajuanList.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pending">Menunggu Review</TabsTrigger>
          <TabsTrigger value="review">Butuh Revisi</TabsTrigger>
          <TabsTrigger value="approved">Disetujui</TabsTrigger>
          <TabsTrigger value="rejected">Ditolak</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-6">
          {/* Search and Filter */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input placeholder="Cari nama program atau UPT..." className="pl-10" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2" size={18} />
                  UPT PPKD
                </Button>
                <Button variant="outline">
                  <Calendar className="mr-2" size={18} />
                  Tanggal
                </Button>
                <Button variant="outline">
                  <AlertTriangle className="mr-2" size={18} />
                  Prioritas
                </Button>
              </div>
            </div>
          </Card>

          {/* Pengajuan Cards */}
          <div className="space-y-4">
            {filteredPengajuan.map((pengajuan) => (
              <Card key={pengajuan.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{pengajuan.namaProgram}</h3>
                      <Badge className={getPriorityColor(pengajuan.prioritas)}>
                        {pengajuan.prioritas}
                      </Badge>
                      <Badge className={getStatusColor(pengajuan.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(pengajuan.status)}
                          {pengajuan.status}
                        </div>
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      {pengajuan.nomorPengajuan}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{pengajuan.upt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{pengajuan.kategori}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{pengajuan.kapasitas} peserta • {pengajuan.durasi}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{pengajuan.tanggalMulai} - {pengajuan.tanggalSelesai}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">{pengajuan.deskripsi}</p>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Instruktur:</p>
                        <p className="text-sm text-gray-600">{pengajuan.instruktur}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Fitur Aksesibilitas:</p>
                        <div className="flex flex-wrap gap-1">
                          {pengajuan.aksesibilitas.map((akses, i) => (
                            <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                              {akses}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Dokumen Pendukung:</p>
                    <div className="flex flex-wrap gap-2">
                      {pengajuan.dokumen.map((doc, i) => (
                        <div key={i} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm">
                          <FileText size={14} className="text-gray-500" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  {pengajuan.catatan && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <MessageSquare size={16} className="text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">Catatan Review:</span>
                      </div>
                      <p className="text-sm text-yellow-700">{pengajuan.catatan}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      Diajukan: {pengajuan.tanggalPengajuan}
                      {pengajuan.reviewer && (
                        <span> • Reviewer: {pengajuan.reviewer}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-1" size={16} />
                        Detail
                      </Button>
                      {pengajuan.status === "Menunggu Review" && (
                        <>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                            <XCircle className="mr-1" size={16} />
                            Tolak
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="mr-1" size={16} />
                            Setujui
                          </Button>
                        </>
                      )}
                      {pengajuan.status === "Butuh Revisi" && (
                        <Button variant="outline" size="sm">
                          <Send className="mr-1" size={16} />
                          Kirim Feedback
                        </Button>
                      )}
                      {pengajuan.status === "Disetujui" && (
                        <Button variant="outline" size="sm">
                          <Edit className="mr-1" size={16} />
                          Edit Status
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPengajuan.length === 0 && (
            <Card className="p-12 text-center">
              <FileText className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada pengajuan {activeTab === "pending" ? "menunggu review" : 
                activeTab === "review" ? "butuh revisi" :
                activeTab === "approved" ? "disetujui" : "ditolak"}
              </h3>
              <p className="text-gray-600">
                Pengajuan akan muncul di sini ketika ada submission dari UPT PPKD
              </p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
} 