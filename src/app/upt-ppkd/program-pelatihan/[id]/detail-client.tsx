'use client';

import React, { useState } from 'react';

// Interface definitions
interface Pendaftar {
  id: number;
  nama: string;
  email: string;
  telepon: string;
  nik: string;
  jenisDisabilitas: string;
  alamat: string;
  umur: number;
  pendidikan: string;
  status: string;
  nilaiSeleksi: number | null;
  tanggalDaftar: string;
  dokumen: string[];
  catatan: string;
}

interface Sertifikat {
  id: number;
  peserta: string;
  jenisSertifikat: string;
  nomorSertifikat: string;
  tanggalTerbit: string;
  status: string;
}
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users,
  Eye,
  Download,
  Phone,
  Mail
} from "lucide-react";
import Link from "next/link";

export default function DetailProgramPelatihanClient({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("informasi");
  const [selectedPendaftar, setSelectedPendaftar] = useState<Pendaftar | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedSertifikat, setSelectedSertifikat] = useState<Sertifikat | null>(null);
  const [showSertifikatModal, setShowSertifikatModal] = useState(false);

  // Handler functions for actions
  const handleViewPendaftarDetail = (pendaftar: Pendaftar) => {
    setSelectedPendaftar(pendaftar);
    setShowDetailModal(true);
  };

  const handleContactPendaftar = (pendaftar: Pendaftar, method: 'phone' | 'email') => {
    if (method === 'phone') {
      // In a real app, this could open phone dialer
      window.open(`tel:${pendaftar.telepon}`);
    } else if (method === 'email') {
      // In a real app, this could open email client
      window.open(`mailto:${pendaftar.email}?subject=Terkait Program Pelatihan Digital Marketing`);
    }
  };

  const handleViewSeleksiDetail = (pendaftar: Pendaftar) => {
    setSelectedPendaftar(pendaftar);
    setShowDetailModal(true);
  };

  const handleViewSertifikat = (sertifikat: Sertifikat) => {
    setSelectedSertifikat(sertifikat);
    setShowSertifikatModal(true);
  };

  const handleDownloadSertifikat = (sertifikat: Sertifikat) => {
    // In a real app, this would trigger actual download
    const fileName = `${sertifikat.nomorSertifikat}_${sertifikat.peserta.replace(/\s+/g, '_')}.pdf`;
    alert(`Mengunduh sertifikat: ${fileName}`);
    
    // Simulate download
    const link = document.createElement('a');
    link.href = '#'; // In real app, this would be the actual file URL
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Modal close handlers
  const closeModals = () => {
    setShowDetailModal(false);
    setShowSertifikatModal(false);
    setSelectedPendaftar(null);
    setSelectedSertifikat(null);
  };

  // Mock data - in real app, this would be fetched based on id
  const programData = {
    id: id,
    nama: "Digital Marketing untuk Penyandang Disabilitas",
    kategori: "Digital Marketing",
    status: "Aktif",
    durasi: "4 minggu",
    tanggalMulai: "2024-02-15",
    tanggalSelesai: "2024-03-15",
    lokasi: "Gedung UPT PPKD Jakarta Selatan, Jl. TB Simatupang No. 123",
    modaPelatihan: "Hybrid",
    kapasitas: 30,
    biaya: 0,
    sumberDana: "APBN",
    instruktur: "Dr. Ahmad Susanto, M.Kom",
    deskripsi: "Program pelatihan digital marketing yang dirancang khusus untuk penyandang disabilitas dengan fokus pada accessibility dan inclusive design.",
    ragamDisabilitas: ["Penyandang Disabilitas Fisik", "Penyandang Disabilitas Sensorik"],
    totalPendaftar: 45,
    diterima: 28,
    ditolak: 12,
    pending: 5
  };

  const pendaftarData = [
    {
      id: 1,
      nama: "Ahmad Subandi",
      email: "ahmad.subandi@email.com",
      telepon: "081234567890",
      nik: "3201234567890123",
      jenisDisabilitas: "Tunanetra",
      alamat: "Jl. Merdeka No. 123, Jakarta Selatan",
      umur: 28,
      pendidikan: "S1 Sistem Informasi",
      status: "Diterima",
      nilaiSeleksi: 85,
      tanggalDaftar: "2024-01-15",
      dokumen: ["KTP", "Kartu Disabilitas", "CV", "Ijazah"],
      catatan: "Memiliki pengalaman basic komputer dan internet"
    },
    {
      id: 2,
      nama: "Siti Maryam",
      email: "siti.maryam@email.com", 
      telepon: "081234567891",
      nik: "3201234567890124",
      jenisDisabilitas: "Tunarungu",
      alamat: "Jl. Sudirman No. 456, Jakarta Pusat",
      umur: 25,
      pendidikan: "SMK Multimedia",
      status: "Diterima",
      nilaiSeleksi: 78,
      tanggalDaftar: "2024-01-16",
      dokumen: ["KTP", "Kartu Disabilitas", "CV", "Sertifikat Bahasa Isyarat"],
      catatan: "Mahir bahasa isyarat, memiliki basic design"
    },
    {
      id: 3,
      nama: "Budi Santoso",
      email: "budi.santoso@email.com",
      telepon: "081234567892", 
      nik: "3201234567890125",
      jenisDisabilitas: "Disabilitas Fisik",
      alamat: "Jl. Gatot Subroto No. 789, Jakarta Barat",
      umur: 32,
      pendidikan: "D3 Teknik Informatika",
      status: "Pending",
      nilaiSeleksi: null,
      tanggalDaftar: "2024-01-20",
      dokumen: ["KTP", "Kartu Disabilitas", "CV"],
      catatan: "Sedang dalam proses verifikasi dokumen"
    },
    {
      id: 4,
      nama: "Rina Kusuma",
      email: "rina.kusuma@email.com",
      telepon: "081234567893",
      nik: "3201234567890126",
      jenisDisabilitas: "Disabilitas Mental",
      alamat: "Jl. Thamrin No. 321, Jakarta Pusat",
      umur: 24,
      pendidikan: "SMA IPA",
      status: "Ditolak",
      nilaiSeleksi: 65,
      tanggalDaftar: "2024-01-18",
      dokumen: ["KTP", "Kartu Disabilitas", "CV"],
      catatan: "Tidak memenuhi kriteria minimum pengalaman"
    }
  ];

  const sertifikatData = [
    {
      id: 1,
      peserta: "Ahmad Subandi",
      jenisSertifikat: "Sertifikat Pelatihan",
      nomorSertifikat: "SP-2024-001",
      tanggalTerbit: "2024-03-20",
      status: "Terbit"
    },
    {
      id: 2,
      peserta: "Ahmad Subandi", 
      jenisSertifikat: "Sertifikat Kompetensi",
      nomorSertifikat: "SK-2024-001",
      tanggalTerbit: "2024-03-25",
      status: "Terbit"
    },
    {
      id: 3,
      peserta: "Siti Maryam",
      jenisSertifikat: "Sertifikat Pelatihan", 
      nomorSertifikat: "SP-2024-002",
      tanggalTerbit: "2024-03-20",
      status: "Terbit"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Diterima":
        return <Badge className="bg-green-100 text-green-800">Diterima</Badge>;
      case "Ditolak":
        return <Badge className="bg-red-100 text-red-800">Ditolak</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/upt-ppkd/program-pelatihan">
          <Button variant="outline" size="sm">
            <ArrowLeft size={16} className="mr-2" />
            Kembali
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">{programData.nama}</h1>
          <p className="text-gray-600">Detail Program Pelatihan</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="informasi">Informasi Pelatihan</TabsTrigger>
          <TabsTrigger value="pendaftar">Pendaftar ({programData.totalPendaftar})</TabsTrigger>
          <TabsTrigger value="seleksi">Hasil Seleksi</TabsTrigger>
          <TabsTrigger value="sertifikat">Sertifikat</TabsTrigger>
        </TabsList>

        {/* Tab Content: Informasi Pelatihan */}
        <TabsContent value="informasi" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informasi Dasar */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Informasi Dasar</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Kategori:</span>
                  <span className="font-medium">{programData.kategori}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <Badge className="bg-green-100 text-green-800">{programData.status}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Durasi:</span>
                  <span className="font-medium">{programData.durasi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kapasitas:</span>
                  <span className="font-medium">{programData.kapasitas} peserta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Moda Pelatihan:</span>
                  <span className="font-medium">{programData.modaPelatihan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Biaya:</span>
                  <span className="font-medium">{programData.biaya === 0 ? "Gratis" : `Rp ${programData.biaya.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sumber Dana:</span>
                  <span className="font-medium">{programData.sumberDana}</span>
                </div>
              </div>
            </Card>

            {/* Jadwal & Lokasi */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Jadwal & Lokasi</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Tanggal Pelaksanaan</p>
                    <p className="text-gray-600">{programData.tanggalMulai} - {programData.tanggalSelesai}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Lokasi</p>
                    <p className="text-gray-600">{programData.lokasi}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={20} className="text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Instruktur</p>
                    <p className="text-gray-600">{programData.instruktur}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Deskripsi */}
            <Card className="p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Deskripsi Program</h3>
              <p className="text-gray-700 leading-relaxed">{programData.deskripsi}</p>
            </Card>

            {/* Ragam Disabilitas */}
            <Card className="p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Ragam Disabilitas Target</h3>
              <div className="flex flex-wrap gap-2">
                {programData.ragamDisabilitas.map((ragam, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {ragam}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Content: Pendaftar */}
        <TabsContent value="pendaftar" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{programData.totalPendaftar}</p>
              <p className="text-sm text-gray-600">Total Pendaftar</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{programData.diterima}</p>
              <p className="text-sm text-gray-600">Diterima</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-red-600">{programData.ditolak}</p>
              <p className="text-sm text-gray-600">Ditolak</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-yellow-600">{programData.pending}</p>
              <p className="text-sm text-gray-600">Pending</p>
            </Card>
          </div>

          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Nama</th>
                    <th className="text-left py-3 px-4">Kontak</th>
                    <th className="text-left py-3 px-4">Jenis Disabilitas</th>
                    <th className="text-left py-3 px-4">Tanggal Daftar</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {pendaftarData.map((pendaftar) => (
                    <tr key={pendaftar.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{pendaftar.nama}</td>
                      <td className="py-3 px-4">
                        <div className="text-sm">
                          <p>{pendaftar.email}</p>
                          <p className="text-gray-600">{pendaftar.telepon}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">{pendaftar.jenisDisabilitas}</td>
                      <td className="py-3 px-4">{pendaftar.tanggalDaftar}</td>
                      <td className="py-3 px-4">{getStatusBadge(pendaftar.status)}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewPendaftarDetail(pendaftar)}
                            title="Lihat Detail"
                          >
                            <Eye size={16} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleContactPendaftar(pendaftar, 'phone')}
                            title="Hubungi via Telepon"
                          >
                            <Phone size={16} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleContactPendaftar(pendaftar, 'email')}
                            title="Hubungi via Email"
                          >
                            <Mail size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        {/* Tab Content: Hasil Seleksi */}
        <TabsContent value="seleksi" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Hasil Seleksi</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Nama</th>
                    <th className="text-left py-3 px-4">Jenis Disabilitas</th>
                    <th className="text-left py-3 px-4">Nilai Seleksi</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {pendaftarData.map((pendaftar) => (
                    <tr key={pendaftar.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{pendaftar.nama}</td>
                      <td className="py-3 px-4">{pendaftar.jenisDisabilitas}</td>
                      <td className="py-3 px-4">
                        {pendaftar.nilaiSeleksi ? (
                          <span className="font-medium">{pendaftar.nilaiSeleksi}</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4">{getStatusBadge(pendaftar.status)}</td>
                      <td className="py-3 px-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewSeleksiDetail(pendaftar)}
                          title="Lihat Detail Seleksi"
                        >
                          <Eye size={16} className="mr-1" />
                          Detail
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        {/* Tab Content: Sertifikat */}
        <TabsContent value="sertifikat" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{sertifikatData.filter(s => s.jenisSertifikat === "Sertifikat Pelatihan").length}</p>
              <p className="text-sm text-gray-600">Sertifikat Pelatihan</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{sertifikatData.filter(s => s.jenisSertifikat === "Sertifikat Kompetensi").length}</p>
              <p className="text-sm text-gray-600">Sertifikat Kompetensi</p>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Daftar Sertifikat</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Peserta</th>
                    <th className="text-left py-3 px-4">Jenis Sertifikat</th>
                    <th className="text-left py-3 px-4">Nomor Sertifikat</th>
                    <th className="text-left py-3 px-4">Tanggal Terbit</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {sertifikatData.map((sertifikat) => (
                    <tr key={sertifikat.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{sertifikat.peserta}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className={
                          sertifikat.jenisSertifikat === "Sertifikat Pelatihan" 
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }>
                          {sertifikat.jenisSertifikat}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 font-mono text-sm">{sertifikat.nomorSertifikat}</td>
                      <td className="py-3 px-4">{sertifikat.tanggalTerbit}</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-green-100 text-green-800">{sertifikat.status}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewSertifikat(sertifikat)}
                            title="Preview Sertifikat"
                          >
                            <Eye size={16} className="mr-1" />
                            Lihat
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownloadSertifikat(sertifikat)}
                            title="Download Sertifikat PDF"
                          >
                            <Download size={16} className="mr-1" />
                            Unduh
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal Detail Pendaftar */}
      {showDetailModal && selectedPendaftar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Detail Pendaftar</h3>
                <Button variant="ghost" size="sm" onClick={closeModals}>
                  ×
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <p className="text-gray-900">{selectedPendaftar.nama}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NIK</label>
                  <p className="text-gray-900 font-mono">{selectedPendaftar.nik}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-gray-900">{selectedPendaftar.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telepon</label>
                  <p className="text-gray-900">{selectedPendaftar.telepon}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Umur</label>
                  <p className="text-gray-900">{selectedPendaftar.umur} tahun</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pendidikan</label>
                  <p className="text-gray-900">{selectedPendaftar.pendidikan}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Disabilitas</label>
                  <p className="text-gray-900">{selectedPendaftar.jenisDisabilitas}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <div className="mt-1">{getStatusBadge(selectedPendaftar.status)}</div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
                  <p className="text-gray-900">{selectedPendaftar.alamat}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dokumen yang Diupload</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedPendaftar.dokumen.map((doc: string, index: number) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {doc}
                      </Badge>
                    ))}
                  </div>
                </div>
                {selectedPendaftar.nilaiSeleksi && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nilai Seleksi</label>
                    <p className="text-gray-900 font-semibold text-lg">{selectedPendaftar.nilaiSeleksi}</p>
                  </div>
                )}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Catatan</label>
                  <p className="text-gray-900">{selectedPendaftar.catatan}</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" onClick={closeModals}>
                  Tutup
                </Button>
                <Button onClick={() => handleContactPendaftar(selectedPendaftar, 'email')}>
                  <Mail size={16} className="mr-2" />
                  Kirim Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Sertifikat */}
      {showSertifikatModal && selectedSertifikat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Preview Sertifikat</h3>
                <Button variant="ghost" size="sm" onClick={closeModals}>
                  ×
                </Button>
              </div>
              
              {/* Sertifikat Preview */}
              <div className="border-2 border-gray-200 rounded-lg p-8 bg-gradient-to-br from-blue-50 to-white text-center min-h-[400px] flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">SERTIFIKAT</h2>
                  <h3 className="text-lg font-semibold text-gray-700">{selectedSertifikat.jenisSertifikat}</h3>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">Diberikan kepada:</p>
                  <h4 className="text-xl font-bold text-gray-800">{selectedSertifikat.peserta}</h4>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">Telah menyelesaikan program:</p>
                  <h5 className="text-lg font-semibold text-gray-700">Digital Marketing untuk Penyandang Disabilitas</h5>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div>
                    <p><strong>Nomor Sertifikat:</strong></p>
                    <p className="font-mono">{selectedSertifikat.nomorSertifikat}</p>
                  </div>
                  <div>
                    <p><strong>Tanggal Terbit:</strong></p>
                    <p>{selectedSertifikat.tanggalTerbit}</p>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  <p>UPT Pusat Pelatihan Kerja Daerah</p>
                  <p>Dinas Tenaga Kerja dan Transmigrasi</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" onClick={closeModals}>
                  Tutup
                </Button>
                <Button onClick={() => handleDownloadSertifikat(selectedSertifikat)}>
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}