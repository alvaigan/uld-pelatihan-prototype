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
  Users, 
  FileText,
  Eye,
  Edit,
  Send,
  Filter,
  Search,
  Calendar,
  Star,
  Award
} from "lucide-react";
import { useState } from "react";

export default function HasilSeleksi() {
  const [activeTab, setActiveTab] = useState("seleksi");

  const pendaftarSeleksi = [
    {
      id: 1,
      nama: "Ahmad Subandi",
      email: "ahmad.subandi@email.com",
      program: "Digital Marketing untuk Penyandang Disabilitas",
      jenisDisabilitas: "Tunanetra",
      tanggalDaftar: "15 Jan 2024",
      statusSeleksi: "Menunggu",
      nilaiTulis: null,
      nilaiWawancara: null,
      nilaiAkhir: null,
      catatan: "",
      dokumenLengkap: true
    },
    {
      id: 2,
      nama: "Siti Maryam",
      email: "siti.maryam@email.com",
      program: "Pemrograman Web Responsif",
      jenisDisabilitas: "Tunarungu",
      tanggalDaftar: "20 Jan 2024",
      statusSeleksi: "Menunggu",
      nilaiTulis: null,
      nilaiWawancara: null,
      nilaiAkhir: null,
      catatan: "",
      dokumenLengkap: true
    },
    {
      id: 3,
      nama: "Budi Santoso",
      email: "budi.santoso@email.com",
      program: "Digital Marketing untuk Penyandang Disabilitas",
      jenisDisabilitas: "Tunadaksa",
      tanggalDaftar: "10 Jan 2024",
      statusSeleksi: "Lulus",
      nilaiTulis: 80,
      nilaiWawancara: 75,
      nilaiAkhir: 78,
      catatan: "Motivasi tinggi, pengalaman relevant",
      dokumenLengkap: true
    }
  ];

  const hasilSeleksi = [
    {
      id: 1,
      program: "Digital Marketing untuk Penyandang Disabilitas",
      totalPendaftar: 45,
      kapasitas: 30,
      lulus: 30,
      tidakLulus: 15,
      statusPengumuman: "Sudah Diumumkan",
      tanggalPengumuman: "20 Feb 2024",
      tanggalSeleksi: "15 Feb 2024"
    },
    {
      id: 2,
      program: "Pemrograman Web Responsif",
      totalPendaftar: 38,
      kapasitas: 25,
      lulus: 0,
      tidakLulus: 0,
      statusPengumuman: "Belum Diumumkan",
      tanggalPengumuman: null,
      tanggalSeleksi: "25 Feb 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Lulus":
        return "bg-green-100 text-green-800";
      case "Tidak Lulus":
        return "bg-red-100 text-red-800";
      case "Menunggu":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Lulus":
        return <CheckCircle size={16} className="text-green-600" />;
      case "Tidak Lulus":
        return <XCircle size={16} className="text-red-600" />;
      case "Menunggu":
        return <Clock size={16} className="text-yellow-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hasil Seleksi</h1>
          <p className="text-gray-600 mt-1">Kelola proses seleksi dan pengumuman hasil</p>
        </div>
        <Button>
          <Send className="mr-2" size={18} />
          Umumkan Hasil
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="seleksi">Proses Seleksi</TabsTrigger>
          <TabsTrigger value="pengumuman">Hasil & Pengumuman</TabsTrigger>
        </TabsList>

        {/* Tab: Proses Seleksi */}
        <TabsContent value="seleksi" className="space-y-6">
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Menunggu Seleksi</p>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Clock className="text-yellow-600" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Sudah Dinilai</p>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Star className="text-blue-600" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Lulus Seleksi</p>
                  <p className="text-2xl font-bold text-gray-900">67</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Tidak Lulus</p>
                  <p className="text-2xl font-bold text-gray-900">22</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <XCircle className="text-red-600" size={24} />
                </div>
              </div>
            </Card>
          </div>

          {/* Search and Filter */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input placeholder="Cari nama pendaftar..." className="pl-10" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2" size={18} />
                  Program
                </Button>
                <Button variant="outline">
                  <Clock className="mr-2" size={18} />
                  Status
                </Button>
              </div>
            </div>
          </Card>

          {/* Selection Table */}
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Pendaftar</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Program</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Nilai Tulis</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Nilai Wawancara</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Nilai Akhir</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {pendaftarSeleksi.map((pendaftar) => (
                    <tr key={pendaftar.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-2">
                        <div>
                          <p className="font-medium text-gray-900">{pendaftar.nama}</p>
                          <p className="text-sm text-gray-500">{pendaftar.jenisDisabilitas}</p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <p className="text-sm text-gray-900">{pendaftar.program}</p>
                      </td>
                      <td className="py-4 px-2">
                        {pendaftar.nilaiTulis ? (
                          <span className="font-medium">{pendaftar.nilaiTulis}</span>
                        ) : (
                          <Input 
                            type="number" 
                            placeholder="0-100" 
                            className="w-20 h-8 text-sm"
                            max="100"
                          />
                        )}
                      </td>
                      <td className="py-4 px-2">
                        {pendaftar.nilaiWawancara ? (
                          <span className="font-medium">{pendaftar.nilaiWawancara}</span>
                        ) : (
                          <Input 
                            type="number" 
                            placeholder="0-100" 
                            className="w-20 h-8 text-sm"
                            max="100"
                          />
                        )}
                      </td>
                      <td className="py-4 px-2">
                        {pendaftar.nilaiAkhir ? (
                          <span className="font-bold text-lg">{pendaftar.nilaiAkhir}</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(pendaftar.statusSeleksi)}
                          <Badge className={getStatusColor(pendaftar.statusSeleksi)}>
                            {pendaftar.statusSeleksi}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" title="Lihat Detail">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" title="Edit Nilai">
                            <Edit size={16} />
                          </Button>
                          {pendaftar.statusSeleksi === "Menunggu" && (
                            <>
                              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700" title="Luluskan">
                                <CheckCircle size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" title="Tidak Lulus">
                                <XCircle size={16} />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Hasil & Pengumuman */}
        <TabsContent value="pengumuman" className="space-y-6">
          {/* Program Results */}
          <div className="grid gap-6">
            {hasilSeleksi.map((hasil) => (
              <Card key={hasil.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{hasil.program}</h3>
                    <p className="text-sm text-gray-600">Seleksi: {hasil.tanggalSeleksi}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {hasil.statusPengumuman === "Sudah Diumumkan" ? (
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="mr-1" size={14} />
                        Sudah Diumumkan
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Clock className="mr-1" size={14} />
                        Belum Diumumkan
                      </Badge>
                    )}
                    <Button size="sm">
                      <Send className="mr-1" size={16} />
                      {hasil.statusPengumuman === "Sudah Diumumkan" ? "Kirim Ulang" : "Umumkan"}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{hasil.totalPendaftar}</p>
                    <p className="text-sm text-blue-700">Total Pendaftar</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">{hasil.kapasitas}</p>
                    <p className="text-sm text-purple-700">Kapasitas</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{hasil.lulus}</p>
                    <p className="text-sm text-green-700">Lulus</p>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-600">{hasil.tidakLulus}</p>
                    <p className="text-sm text-red-700">Tidak Lulus</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-600">
                      {Math.round((hasil.lulus / hasil.totalPendaftar) * 100)}%
                    </p>
                    <p className="text-sm text-gray-700">Tingkat Kelulusan</p>
                  </div>
                </div>

                {hasil.tanggalPengumuman && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      <Award className="inline mr-1" size={16} />
                      Hasil diumumkan pada: {hasil.tanggalPengumuman}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Announcement Template */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Template Pengumuman</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Judul Pengumuman</label>
                <Input placeholder="Pengumuman Hasil Seleksi Program..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Isi Pengumuman</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={6}
                  placeholder="Kepada seluruh peserta yang telah mendaftar..."
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  Preview
                </Button>
                <Button className="flex-1">
                  <Send className="mr-2" size={18} />
                  Kirim Pengumuman
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 