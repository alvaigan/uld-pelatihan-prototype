'use client';

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PPKDDataTable, PPKD } from "@/components/ui/ppkd-data-table";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import {
  Building2,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  User,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Download,
  Plus,
  Award,
  Target,
  Save,
  Edit
} from "lucide-react";

export default function DaftarPPKD() {
  const [activeTab, setActiveTab] = useState("semua");
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedPPKD, setSelectedPPKD] = useState<PPKD | null>(null);
  const [editData, setEditData] = useState<PPKD | null>(null);

  // Sample PPKD data
  const ppkdData: PPKD[] = [
    {
      id: 1,
      nama: "UPT PPKD Jakarta Selatan",
      kode: "PPKD-JS-001",
      alamat: "Jl. Raya Kebayoran Lama No. 15",
      wilayah: "Jakarta Selatan",
      kecamatan: "Kebayoran Lama",
      kelurahan: "Kebayoran Lama Utara",
      koordinat: { lat: -6.2441, lng: 106.7675 },
      kontak: {
        telepon: "+62 21 7250123",
        email: "ppkd.jaksel@dki.go.id",
        website: "https://ppkd-jaksel.dki.go.id"
      },
      kepala: {
        nama: "Drs. Agus Setiawan, M.Pd",
        nip: "196501151990031004",
        telepon: "+62 812-3456-7890"
      },
      staff: {
        total: 25,
        instruktur: 15,
        admin: 10
      },
      fasilitas: {
        ruangKelas: 8,
        laboratorium: 4,
        perpustakaan: true,
        aksesibilitas: ["Ramp Access", "Lift", "Toilet Disabilitas", "Jalur Pemandu"]
      },
      program: {
        aktif: 6,
        selesai: 24,
        total: 30
      },
      peserta: {
        aktif: 156,
        alumni: 450,
        total: 606
      },
      status: "Aktif",
      akreditasi: "A",
      tanggalBerdiri: "2015-03-15",
      tanggalDaftar: "2015-02-01",
      rating: 4.8,
      catatanAdmin: "PPKD dengan performa excellent, tingkat kelulusan 95%"
    },
    {
      id: 2,
      nama: "UPT PPKD Jakarta Timur",
      kode: "PPKD-JT-002",
      alamat: "Jl. Raya Bogor Km. 25 No. 45",
      wilayah: "Jakarta Timur",
      kecamatan: "Kramat Jati",
      kelurahan: "Kramat Jati",
      koordinat: { lat: -6.2615, lng: 106.8776 },
      kontak: {
        telepon: "+62 21 8090456",
        email: "ppkd.jaktim@dki.go.id",
        website: "https://ppkd-jaktim.dki.go.id"
      },
      kepala: {
        nama: "Dr. Siti Maryam, S.Pd., M.T",
        nip: "197203121998032001",
        telepon: "+62 813-9876-5432"
      },
      staff: {
        total: 22,
        instruktur: 14,
        admin: 8
      },
      fasilitas: {
        ruangKelas: 6,
        laboratorium: 3,
        perpustakaan: true,
        aksesibilitas: ["Ramp Access", "Toilet Disabilitas", "Braille Sign"]
      },
      program: {
        aktif: 5,
        selesai: 18,
        total: 23
      },
      peserta: {
        aktif: 134,
        alumni: 320,
        total: 454
      },
      status: "Aktif",
      akreditasi: "A",
      tanggalBerdiri: "2016-07-20",
      tanggalDaftar: "2016-06-10",
      rating: 4.6,
      catatanAdmin: "Spesialis teknologi informasi, kerjasama baik dengan industri"
    },
    {
      id: 3,
      nama: "UPT PPKD Jakarta Barat",
      kode: "PPKD-JB-003",
      alamat: "Jl. Daan Mogot Raya No. 88",
      wilayah: "Jakarta Barat",
      kecamatan: "Grogol Petamburan",
      kelurahan: "Grogol",
      koordinat: { lat: -6.1585, lng: 106.7856 },
      kontak: {
        telepon: "+62 21 5670789",
        email: "ppkd.jakbar@dki.go.id"
      },
      kepala: {
        nama: "Ir. Budi Santoso, M.M",
        nip: "196812051995031003",
        telepon: "+62 814-5678-9012"
      },
      staff: {
        total: 18,
        instruktur: 12,
        admin: 6
      },
      fasilitas: {
        ruangKelas: 5,
        laboratorium: 2,
        perpustakaan: false,
        aksesibilitas: ["Ramp Access", "Toilet Disabilitas"]
      },
      program: {
        aktif: 4,
        selesai: 15,
        total: 19
      },
      peserta: {
        aktif: 98,
        alumni: 280,
        total: 378
      },
      status: "Aktif",
      akreditasi: "B",
      tanggalBerdiri: "2017-01-10",
      tanggalDaftar: "2016-12-01",
      rating: 4.2,
      catatanAdmin: "Fokus pada creative industry, perlu upgrade fasilitas perpustakaan"
    },
    {
      id: 4,
      nama: "UPT PPKD Jakarta Pusat",
      kode: "PPKD-JP-004",
      alamat: "Jl. Medan Merdeka Selatan No. 12",
      wilayah: "Jakarta Pusat",
      kecamatan: "Gambir",
      kelurahan: "Gambir",
      koordinat: { lat: -6.1751, lng: 106.8227 },
      kontak: {
        telepon: "+62 21 3840123",
        email: "ppkd.jakpus@dki.go.id",
        website: "https://ppkd-jakpus.dki.go.id"
      },
      kepala: {
        nama: "Prof. Dr. Rina Kusuma, M.Sc",
        nip: "197505101996032002",
        telepon: "+62 815-2468-1357"
      },
      staff: {
        total: 20,
        instruktur: 13,
        admin: 7
      },
      fasilitas: {
        ruangKelas: 7,
        laboratorium: 5,
        perpustakaan: true,
        aksesibilitas: ["Ramp Access", "Lift", "Toilet Disabilitas", "Audio Guide", "Braille Sign"]
      },
      program: {
        aktif: 7,
        selesai: 20,
        total: 27
      },
      peserta: {
        aktif: 145,
        alumni: 380,
        total: 525
      },
      status: "Aktif",
      akreditasi: "A",
      tanggalBerdiri: "2014-09-01",
      tanggalDaftar: "2014-08-15",
      rating: 4.9,
      catatanAdmin: "Pioneer dalam data science training, fasilitas terlengkap"
    },
    {
      id: 5,
      nama: "UPT PPKD Jakarta Utara",
      kode: "PPKD-JU-005",
      alamat: "Jl. Yos Sudarso No. 67",
      wilayah: "Jakarta Utara",
      kecamatan: "Kelapa Gading",
      kelurahan: "Kelapa Gading Barat",
      koordinat: { lat: -6.1568, lng: 106.9053 },
      kontak: {
        telepon: "+62 21 4520987",
        email: "ppkd.jakut@dki.go.id"
      },
      kepala: {
        nama: "Dra. Maya Sari, M.Pd",
        nip: "196909101994032001",
        telepon: "+62 816-3579-2468"
      },
      staff: {
        total: 16,
        instruktur: 10,
        admin: 6
      },
      fasilitas: {
        ruangKelas: 4,
        laboratorium: 2,
        perpustakaan: true,
        aksesibilitas: ["Ramp Access", "Toilet Disabilitas"]
      },
      program: {
        aktif: 3,
        selesai: 12,
        total: 15
      },
      peserta: {
        aktif: 78,
        alumni: 210,
        total: 288
      },
      status: "Review",
      akreditasi: "B",
      tanggalBerdiri: "2018-05-15",
      tanggalDaftar: "2018-04-01",
      rating: 3.8,
      catatanAdmin: "Memerlukan evaluasi program dan peningkatan kualitas instruktur"
    },
    {
      id: 6,
      nama: "PPKD Swasta Disability Care Center",
      kode: "PPKD-SW-006",
      alamat: "Jl. Sudirman No. 123, Senayan",
      wilayah: "Jakarta Pusat",
      kecamatan: "Tanah Abang",
      kelurahan: "Senayan",
      koordinat: { lat: -6.2088, lng: 106.8276 },
      kontak: {
        telepon: "+62 21 5720456",
        email: "info@disabilitycare.org",
        website: "https://disabilitycare.org"
      },
      kepala: {
        nama: "Eko Prasetyo, S.Pd., M.T",
        nip: "-",
        telepon: "+62 817-4680-1357"
      },
      staff: {
        total: 12,
        instruktur: 8,
        admin: 4
      },
      fasilitas: {
        ruangKelas: 3,
        laboratorium: 1,
        perpustakaan: false,
        aksesibilitas: ["Ramp Access", "Toilet Disabilitas", "Sign Language Support"]
      },
      program: {
        aktif: 2,
        selesai: 8,
        total: 10
      },
      peserta: {
        aktif: 45,
        alumni: 120,
        total: 165
      },
      status: "Pending",
      akreditasi: "Belum Terakreditasi",
      tanggalBerdiri: "2020-01-20",
      tanggalDaftar: "2024-01-15",
      rating: 0,
      catatanAdmin: "Pendaftaran baru, sedang dalam proses verifikasi dokumen dan survey lapangan"
    }
  ];

  // Filter PPKD based on active tab
  const filteredPPKD = ppkdData.filter(ppkd => {
    switch (activeTab) {
      case "aktif":
        return ppkd.status === "Aktif";
      case "pending":
        return ppkd.status === "Pending";
      case "review":
        return ppkd.status === "Review";
      case "tidak-aktif":
        return ppkd.status === "Tidak Aktif";
      case "semua":
      default:
        return true;
    }
  });

  // Statistics
  const totalPPKD = ppkdData.length;
  const aktifPPKD = ppkdData.filter(p => p.status === "Aktif").length;
  const pendingPPKD = ppkdData.filter(p => p.status === "Pending").length;
  const reviewPPKD = ppkdData.filter(p => p.status === "Review").length;
  const totalPeserta = ppkdData.reduce((sum, p) => sum + p.peserta.aktif, 0);
  const totalProgram = ppkdData.reduce((sum, p) => sum + p.program.aktif, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Review":
        return "bg-blue-100 text-blue-800";
      case "Tidak Aktif":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aktif":
        return <CheckCircle size={14} />;
      case "Pending":
        return <Clock size={14} />;
      case "Review":
        return <AlertTriangle size={14} />;
      case "Tidak Aktif":
        return <XCircle size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  const getAkreditasiColor = (akreditasi: string) => {
    switch (akreditasi) {
      case "A":
        return "bg-green-100 text-green-800";
      case "B":
        return "bg-blue-100 text-blue-800";
      case "C":
        return "bg-yellow-100 text-yellow-800";
      case "Belum Terakreditasi":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Handler functions for modals
  const handleViewDetail = (ppkd: PPKD) => {
    setSelectedPPKD(ppkd);
    setDetailModalOpen(true);
  };

  const handleEdit = (ppkd: PPKD) => {
    setEditData({ ...ppkd });
    setEditModalOpen(true);
  };

  const handleApprove = (ppkd: PPKD) => {
    // Handle approval logic here
    console.log('Approving PPKD:', ppkd.nama);
    // Update status to "Aktif" or similar
  };

  const handleSaveEdit = () => {
    if (editData) {
      // Handle save edit logic here
      console.log('Saving changes for:', editData.nama);
      // Update the data in your state or send to API
      setEditModalOpen(false);
      setEditData(null);
    }
  };

  const handleEditInputChange = (field: keyof PPKD, value: unknown) => {
    if (editData) {
      setEditData({ ...editData, [field]: value });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Daftar PPKD</h1>
          <p className="text-gray-600 mt-1">
            Pengelolaan dan monitoring Pusat Pelatihan Kerja Disabilitas di DKI Jakarta
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2" size={18} />
            Export Data
          </Button>
          <Button>
            <Plus className="mr-2" size={18} />
            Daftarkan PPKD
          </Button>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total PPKD</p>
              <p className="text-2xl font-bold text-gray-900">{totalPPKD}</p>
              <p className="text-xs text-gray-500 mt-1">Terdaftar</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building2 className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">PPKD Aktif</p>
              <p className="text-2xl font-bold text-gray-900">{aktifPPKD}</p>
              <p className="text-xs text-green-600 mt-1">Beroperasional</p>
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
              <p className="text-2xl font-bold text-gray-900">{totalPeserta.toLocaleString()}</p>
              <p className="text-xs text-purple-600 mt-1">Sedang pelatihan</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Program Berjalan</p>
              <p className="text-2xl font-bold text-gray-900">{totalProgram}</p>
              <p className="text-xs text-orange-600 mt-1">Semua PPKD</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Target className="text-orange-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="semua">Semua ({totalPPKD})</TabsTrigger>
          <TabsTrigger value="aktif">Aktif ({aktifPPKD})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingPPKD})</TabsTrigger>
          <TabsTrigger value="review">Review ({reviewPPKD})</TabsTrigger>
          <TabsTrigger value="tidak-aktif">Tidak Aktif ({ppkdData.filter(p => p.status === "Tidak Aktif").length})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <PPKDDataTable 
            data={filteredPPKD}
            onViewDetail={handleViewDetail}
            onEdit={handleEdit}
            onApprove={handleApprove}
          />
        </TabsContent>
      </Tabs>

      {/* Detail Modal */}
      <Dialog open={detailModalOpen} onOpenChange={setDetailModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Building2 size={24} className="text-blue-600" />
              Detail PPKD - {selectedPPKD?.nama}
            </DialogTitle>
            <DialogDescription>
              Informasi lengkap tentang {selectedPPKD?.nama}
            </DialogDescription>
          </DialogHeader>
          
          {selectedPPKD && (
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{selectedPPKD.nama}</h3>
                    <p className="text-gray-600">{selectedPPKD.kode} • {selectedPPKD.wilayah}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge className={getStatusColor(selectedPPKD.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(selectedPPKD.status)}
                          {selectedPPKD.status}
                        </div>
                      </Badge>
                      <Badge className={getAkreditasiColor(selectedPPKD.akreditasi)}>
                        <Award size={12} className="mr-1" />
                        {selectedPPKD.akreditasi}
                      </Badge>
                    </div>
                  </div>
                </div>
                {selectedPPKD.rating > 0 && (
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-500 text-lg">
                      <span>★</span>
                      <span className="text-gray-900 font-semibold">{selectedPPKD.rating}/5.0</span>
                    </div>
                    <p className="text-sm text-gray-500">Rating Performa</p>
                  </div>
                )}
              </div>

              {/* Main Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact & Location */}
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-gray-600" />
                    Lokasi & Kontak
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Alamat Lengkap:</p>
                      <p className="text-gray-600">{selectedPPKD.alamat}</p>
                      <p className="text-gray-600">{selectedPPKD.kelurahan}, {selectedPPKD.kecamatan}</p>
                      <p className="text-gray-600">{selectedPPKD.wilayah}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-400" />
                      <span className="text-gray-700">{selectedPPKD.kontak.telepon}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-gray-400" />
                      <span className="text-gray-700">{selectedPPKD.kontak.email}</span>
                    </div>
                    {selectedPPKD.kontak.website && (
                      <div className="flex items-center gap-2">
                        <Globe size={16} className="text-gray-400" />
                        <a href={selectedPPKD.kontak.website} target="_blank" rel="noopener noreferrer" 
                           className="text-blue-600 hover:underline">
                          {selectedPPKD.kontak.website}
                        </a>
                      </div>
                    )}
                  </div>
                </Card>

                {/* Leadership */}
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <User size={18} className="text-gray-600" />
                    Kepemimpinan
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Kepala PPKD:</p>
                      <p className="font-medium text-gray-900">{selectedPPKD.kepala.nama}</p>
                      <p className="text-gray-600">{selectedPPKD.kepala.nip}</p>
                      <p className="text-gray-600">{selectedPPKD.kepala.telepon}</p>
                    </div>
                  </div>
                </Card>

                {/* Staff Information */}
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users size={18} className="text-gray-600" />
                    Komposisi Staff
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{selectedPPKD.staff.total}</p>
                      <p className="text-sm text-gray-600">Total Staff</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{selectedPPKD.staff.instruktur}</p>
                      <p className="text-sm text-gray-600">Instruktur</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{selectedPPKD.staff.admin}</p>
                      <p className="text-sm text-gray-600">Admin</p>
                    </div>
                  </div>
                </Card>

                {/* Facilities */}
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Building2 size={18} className="text-gray-600" />
                    Fasilitas
                  </h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Ruang Kelas</p>
                        <p className="font-semibold text-gray-900">{selectedPPKD.fasilitas.ruangKelas} Ruang</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Laboratorium</p>
                        <p className="font-semibold text-gray-900">{selectedPPKD.fasilitas.laboratorium} Lab</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Perpustakaan</p>
                      <p className="font-semibold text-gray-900">
                        {selectedPPKD.fasilitas.perpustakaan ? '✓ Tersedia' : '✗ Tidak Tersedia'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Fitur Aksesibilitas:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedPPKD.fasilitas.aksesibilitas.map((akses, i) => (
                          <span key={i} className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
                            {akses}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Program and Participant Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Statistik Program</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">{selectedPPKD.program.aktif}</p>
                      <p className="text-sm text-gray-600">Aktif</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{selectedPPKD.program.selesai}</p>
                      <p className="text-sm text-gray-600">Selesai</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{selectedPPKD.program.total}</p>
                      <p className="text-sm text-gray-600">Total</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Statistik Peserta</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{selectedPPKD.peserta.aktif}</p>
                      <p className="text-sm text-gray-600">Aktif</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{selectedPPKD.peserta.alumni}</p>
                      <p className="text-sm text-gray-600">Alumni</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{selectedPPKD.peserta.total}</p>
                      <p className="text-sm text-gray-600">Total</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Timeline */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Timeline</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Tanggal Berdiri</p>
                    <p className="font-semibold text-gray-900">{selectedPPKD.tanggalBerdiri}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tanggal Pendaftaran</p>
                    <p className="font-semibold text-gray-900">{selectedPPKD.tanggalDaftar}</p>
                  </div>
                </div>
              </Card>

              {/* Admin Notes */}
              {selectedPPKD.catatanAdmin && (
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Catatan Admin</h4>
                  <p className="text-blue-800">{selectedPPKD.catatanAdmin}</p>
                </Card>
              )}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setDetailModalOpen(false)}>
              Tutup
            </Button>
          </DialogFooter>
          <DialogClose onClick={() => setDetailModalOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Edit size={24} className="text-blue-600" />
              Edit PPKD - {editData?.nama}
            </DialogTitle>
            <DialogDescription>
              Ubah informasi PPKD sesuai kebutuhan
            </DialogDescription>
          </DialogHeader>
          
          {editData && (
            <div className="space-y-6">
              {/* Basic Information */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Informasi Dasar</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama PPKD</label>
                    <Input 
                      value={editData.nama}
                      onChange={(e) => handleEditInputChange('nama', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kode PPKD</label>
                    <Input 
                      value={editData.kode}
                      onChange={(e) => handleEditInputChange('kode', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select 
                      value={editData.status}
                      onChange={(e) => handleEditInputChange('status', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Aktif">Aktif</option>
                      <option value="Pending">Pending</option>
                      <option value="Review">Review</option>
                      <option value="Tidak Aktif">Tidak Aktif</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Akreditasi</label>
                    <select 
                      value={editData.akreditasi}
                      onChange={(e) => handleEditInputChange('akreditasi', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="Belum Terakreditasi">Belum Terakreditasi</option>
                    </select>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Kontak & Lokasi</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
                    <Input 
                      value={editData.alamat}
                      onChange={(e) => handleEditInputChange('alamat', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Wilayah</label>
                    <Input 
                      value={editData.wilayah}
                      onChange={(e) => handleEditInputChange('wilayah', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kecamatan</label>
                    <Input 
                      value={editData.kecamatan}
                      onChange={(e) => handleEditInputChange('kecamatan', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telepon</label>
                    <Input 
                      value={editData.kontak.telepon}
                      onChange={(e) => handleEditInputChange('kontak', {...editData.kontak, telepon: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input 
                      value={editData.kontak.email}
                      onChange={(e) => handleEditInputChange('kontak', {...editData.kontak, email: e.target.value})}
                    />
                  </div>
                </div>
              </Card>

              {/* Leadership */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Kepala PPKD</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kepala PPKD</label>
                    <Input 
                      value={editData.kepala.nama}
                      onChange={(e) => handleEditInputChange('kepala', {...editData.kepala, nama: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">NIP</label>
                    <Input 
                      value={editData.kepala.nip}
                      onChange={(e) => handleEditInputChange('kepala', {...editData.kepala, nip: e.target.value})}
                    />
                  </div>
                </div>
              </Card>

              {/* Admin Notes */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Catatan Admin</h4>
                <textarea 
                  value={editData.catatanAdmin}
                  onChange={(e) => handleEditInputChange('catatanAdmin', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan catatan admin..."
                />
              </Card>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditModalOpen(false)}>
              Batal
            </Button>
            <Button onClick={handleSaveEdit} className="flex items-center gap-2">
              <Save size={16} />
              Simpan Perubahan
            </Button>
          </DialogFooter>
          <DialogClose onClick={() => setEditModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}