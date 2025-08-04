'use client';

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DataTable } from "@/components/ui/data-table";
import {
  GraduationCap,
  Users,
  Briefcase,
  TrendingUp,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Building2,
  DollarSign,
  Clock,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  XCircle,
  Star
} from "lucide-react";

interface Alumni {
  id: number;
  nama: string;
  email: string;
  telepon: string;
  programPelatihan: string;
  tahunLulus: number;
  jenisDisabilitas: string;
  statusKerja: 'Bekerja' | 'Wirausaha' | 'Mencari Kerja' | 'Melanjutkan Pendidikan' | 'Tidak Aktif';
  perusahaan?: string;
  posisi?: string;
  gaji?: number;
  alamat: string;
  tanggalTracking: string;
  catatanTracking: string;
  kepuasanProgram: number;
  relevansiKerja: 'Sangat Relevan' | 'Relevan' | 'Cukup Relevan' | 'Tidak Relevan';
  avatar?: string;
}

export default function AlumniTracer() {
  const [activeTab, setActiveTab] = useState("semua");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample alumni data
  const alumniData: Alumni[] = [
    {
      id: 1,
      nama: "Ahmad Rizki Pratama",
      email: "ahmad.rizki@email.com",
      telepon: "+62 812-3456-7890",
      programPelatihan: "Digital Marketing untuk Penyandang Disabilitas",
      tahunLulus: 2024,
      jenisDisabilitas: "Tunanetra",
      statusKerja: "Bekerja",
      perusahaan: "PT Digital Kreatif Indonesia",
      posisi: "Digital Marketing Specialist",
      gaji: 8500000,
      alamat: "Jakarta Selatan",
      tanggalTracking: "2024-03-15",
      catatanTracking: "Alumni sangat aktif, berhasil mendapat promosi dalam 6 bulan",
      kepuasanProgram: 5,
      relevansiKerja: "Sangat Relevan"
    },
    {
      id: 2,
      nama: "Siti Nurhaliza Dewi",
      email: "siti.nurhaliza@email.com",
      telepon: "+62 813-9876-5432",
      programPelatihan: "Pemrograman Web Responsif",
      tahunLulus: 2024,
      jenisDisabilitas: "Tunarungu",
      statusKerja: "Wirausaha",
      perusahaan: "WebDev Solutions (Milik Sendiri)",
      posisi: "Founder & Web Developer",
      gaji: 12000000,
      alamat: "Jakarta Timur",
      tanggalTracking: "2024-03-10",
      catatanTracking: "Membuka usaha web development, sudah memiliki 5 klien tetap",
      kepuasanProgram: 5,
      relevansiKerja: "Sangat Relevan"
    },
    {
      id: 3,
      nama: "Budi Santoso",
      email: "budi.santoso@email.com",
      telepon: "+62 814-5678-9012",
      programPelatihan: "Desain Grafis Inklusif",
      tahunLulus: 2023,
      jenisDisabilitas: "Daksa",
      statusKerja: "Bekerja",
      perusahaan: "Creative Agency Jakarta",
      posisi: "Graphic Designer",
      gaji: 7200000,
      alamat: "Jakarta Barat",
      tanggalTracking: "2024-02-28",
      catatanTracking: "Berkembang baik, sedang mengambil kursus tambahan motion graphics",
      kepuasanProgram: 4,
      relevansiKerja: "Relevan"
    },
    {
      id: 4,
      nama: "Rina Kusuma Putri",
      email: "rina.kusuma@email.com",
      telepon: "+62 815-2468-1357",
      programPelatihan: "Data Analysis Fundamentals",
      tahunLulus: 2023,
      jenisDisabilitas: "Tunanetra",
      statusKerja: "Melanjutkan Pendidikan",
      alamat: "Jakarta Pusat",
      tanggalTracking: "2024-03-01",
      catatanTracking: "Melanjutkan S2 Statistika di UI, mendapat beasiswa penuh",
      kepuasanProgram: 5,
      relevansiKerja: "Sangat Relevan"
    },
    {
      id: 5,
      nama: "Denny Firmansyah",
      email: "denny.firmansyah@email.com",
      telepon: "+62 816-3579-2468",
      programPelatihan: "Mobile App Development",
      tahunLulus: 2023,
      jenisDisabilitas: "Tunarungu",
      statusKerja: "Mencari Kerja",
      alamat: "Jakarta Utara",
      tanggalTracking: "2024-03-12",
      catatanTracking: "Sedang interview di 2 perusahaan startup, portofolio sangat baik",
      kepuasanProgram: 4,
      relevansiKerja: "Relevan"
    },
    {
      id: 6,
      nama: "Maya Sari Indah",
      email: "maya.sari@email.com",
      telepon: "+62 817-4680-1357",
      programPelatihan: "Digital Marketing Pemula",
      tahunLulus: 2024,
      jenisDisabilitas: "Daksa",
      statusKerja: "Tidak Aktif",
      alamat: "Jakarta Selatan",
      tanggalTracking: "2024-01-15",
      catatanTracking: "Perlu follow-up lebih intensif, masih mencari motivasi",
      kepuasanProgram: 3,
      relevansiKerja: "Cukup Relevan"
    }
  ];

  // Filter alumni based on active tab
  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = 
      alumni.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.programPelatihan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.perusahaan?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.statusKerja.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    switch (activeTab) {
      case "bekerja":
        return alumni.statusKerja === "Bekerja";
      case "wirausaha":
        return alumni.statusKerja === "Wirausaha";
      case "mencari":
        return alumni.statusKerja === "Mencari Kerja";
      case "studi":
        return alumni.statusKerja === "Melanjutkan Pendidikan";
      case "tidak-aktif":
        return alumni.statusKerja === "Tidak Aktif";
      case "semua":
      default:
        return true;
    }
  });

  // Statistics
  const totalAlumni = alumniData.length;
  const bekerja = alumniData.filter(a => a.statusKerja === "Bekerja").length;
  const wirausaha = alumniData.filter(a => a.statusKerja === "Wirausaha").length;
  const mencariKerja = alumniData.filter(a => a.statusKerja === "Mencari Kerja").length;
  const tingkatPenyerapan = Math.round(((bekerja + wirausaha) / totalAlumni) * 100);
  const rataGaji = Math.round(
    alumniData
      .filter(a => a.gaji)
      .reduce((sum, a) => sum + (a.gaji || 0), 0) / 
    alumniData.filter(a => a.gaji).length
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Bekerja":
        return "bg-green-100 text-green-800";
      case "Wirausaha":
        return "bg-blue-100 text-blue-800";
      case "Mencari Kerja":
        return "bg-yellow-100 text-yellow-800";
      case "Melanjutkan Pendidikan":
        return "bg-purple-100 text-purple-800";
      case "Tidak Aktif":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Bekerja":
        return <Briefcase size={14} />;
      case "Wirausaha":
        return <TrendingUp size={14} />;
      case "Mencari Kerja":
        return <Clock size={14} />;
      case "Melanjutkan Pendidikan":
        return <GraduationCap size={14} />;
      case "Tidak Aktif":
        return <XCircle size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  const getRelevansiColor = (relevansi: string) => {
    switch (relevansi) {
      case "Sangat Relevan":
        return "text-green-600";
      case "Relevan":
        return "text-blue-600";
      case "Cukup Relevan":
        return "text-yellow-600";
      case "Tidak Relevan":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Alumni Tracer</h1>
          <p className="text-gray-600 mt-1">
            Pelacakan dan monitoring alumni program pelatihan
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2" size={18} />
            Export Data
          </Button>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Alumni</p>
              <p className="text-2xl font-bold text-gray-900">{totalAlumni}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tingkat Penyerapan</p>
              <p className="text-2xl font-bold text-gray-900">{tingkatPenyerapan}%</p>
              <p className="text-xs text-green-600 mt-1">
                {bekerja + wirausaha} dari {totalAlumni} alumni
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Rata-rata Gaji</p>
              <p className="text-2xl font-bold text-gray-900">
                Rp {rataGaji?.toLocaleString() || 0}
              </p>
              <p className="text-xs text-gray-500 mt-1">Per bulan</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <DollarSign className="text-orange-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Mencari Kerja</p>
              <p className="text-2xl font-bold text-gray-900">{mencariKerja}</p>
              <p className="text-xs text-yellow-600 mt-1">Perlu bantuan</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Users className="text-yellow-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="semua">Semua ({totalAlumni})</TabsTrigger>
          <TabsTrigger value="bekerja">Bekerja ({bekerja})</TabsTrigger>
          <TabsTrigger value="wirausaha">Wirausaha ({wirausaha})</TabsTrigger>
          <TabsTrigger value="mencari">Mencari Kerja ({mencariKerja})</TabsTrigger>
          <TabsTrigger value="studi">Studi ({alumniData.filter(a => a.statusKerja === "Melanjutkan Pendidikan").length})</TabsTrigger>
          <TabsTrigger value="tidak-aktif">Tidak Aktif ({alumniData.filter(a => a.statusKerja === "Tidak Aktif").length})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-6">
          {/* Search and Filters */}
          <Card className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    placeholder="Cari nama alumni, program, perusahaan..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2" size={16} />
                  Program
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2" size={16} />
                  Tahun Lulus
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="mr-2" size={16} />
                  Wilayah
                </Button>
              </div>
            </div>
          </Card>

          {/* Alumni Cards */}
          <div className="space-y-4">
            {filteredAlumni.map((alumni) => (
              <Card key={alumni.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {alumni.nama.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{alumni.nama}</h3>
                        <p className="text-sm text-gray-600">{alumni.programPelatihan} • Lulus {alumni.tahunLulus}</p>
                      </div>
                      <Badge className={getStatusColor(alumni.statusKerja)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(alumni.statusKerja)}
                          {alumni.statusKerja}
                        </div>
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      Tracking: {alumni.tanggalTracking}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Contact & Personal Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{alumni.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{alumni.telepon}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{alumni.alamat}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Jenis Disabilitas:</span>
                        <span className="font-medium text-gray-900 ml-1">{alumni.jenisDisabilitas}</span>
                      </div>
                    </div>

                    {/* Middle Column - Work/Education Info */}
                    <div className="space-y-3">
                      {alumni.perusahaan && (
                        <div className="flex items-center gap-2">
                          <Building2 size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-700">{alumni.perusahaan}</span>
                        </div>
                      )}
                      {alumni.posisi && (
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-700">{alumni.posisi}</span>
                        </div>
                      )}
                      {alumni.gaji && (
                        <div className="flex items-center gap-2">
                          <DollarSign size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Rp {alumni.gaji.toLocaleString()}/bulan</span>
                        </div>
                      )}
                      <div>
                        <span className="text-sm text-gray-600">Relevansi Kerja:</span>
                        <span className={`font-medium ml-1 text-sm ${getRelevansiColor(alumni.relevansiKerja)}`}>
                          {alumni.relevansiKerja}
                        </span>
                      </div>
                    </div>

                    {/* Right Column - Performance & Tracking */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Star size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">Kepuasan Program:</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className={star <= alumni.kepuasanProgram ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({alumni.kepuasanProgram}/5)</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Catatan Tracking:</p>
                        <p className="text-sm text-gray-800 bg-gray-50 p-2 rounded-lg">
                          {alumni.catatanTracking}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {alumni.jenisDisabilitas}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alumni.programPelatihan}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-1" size={14} />
                        Detail
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="mr-1" size={14} />
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredAlumni.length === 0 && (
            <Card className="p-12 text-center">
              <GraduationCap className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada data alumni ditemukan
              </h3>
              <p className="text-gray-600">
                Coba ubah filter atau kata kunci pencarian Anda
              </p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}