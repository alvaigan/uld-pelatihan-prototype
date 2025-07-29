import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  FileText, 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Plus,
  Eye
} from "lucide-react";

export default function UPTPPKDDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Selamat Datang, Admin UPT PPKD</h1>
        <p className="text-blue-100 mb-4">Kelola program pelatihan untuk penyandang disabilitas di wilayah kerja Anda</p>
        <div className="flex gap-4">
          <Button className="bg-white text-blue-600 hover:bg-blue-50">
            <Plus className="mr-2" size={18} />
            Buat Program Baru
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Eye className="mr-2" size={18} />
            Lihat Laporan
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Penyandang Disabilitas</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +12% dari bulan lalu
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Program Aktif</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
              <p className="text-sm text-blue-600 flex items-center mt-1">
                <Clock size={14} className="mr-1" />
                8 sedang berjalan
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <BookOpen className="text-green-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Pendaftar</p>
              <p className="text-2xl font-bold text-gray-900">892</p>
              <p className="text-sm text-orange-600 flex items-center mt-1">
                <AlertTriangle size={14} className="mr-1" />
                156 menunggu seleksi
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <FileText className="text-orange-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Sertifikat Diterbitkan</p>
              <p className="text-2xl font-bold text-gray-900">634</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <CheckCircle size={14} className="mr-1" />
                98% tingkat kelulusan
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Award className="text-purple-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Programs */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Program Terbaru</h3>
            <Button variant="ghost" size="sm">Lihat Semua</Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Digital Marketing untuk Disabilitas</p>
                <p className="text-sm text-gray-600">15 pendaftar • Mulai 1 Feb 2024</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Aktif</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Pemrograman Web Aksesibel</p>
                <p className="text-sm text-gray-600">23 pendaftar • Mulai 5 Feb 2024</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Pendaftaran</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Desain Grafis Inklusif</p>
                <p className="text-sm text-gray-600">8 pendaftar • Mulai 10 Feb 2024</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Draft</span>
            </div>
          </div>
        </Card>

        {/* Pending Actions */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Tindakan Pending</h3>
            <Button variant="ghost" size="sm">Lihat Semua</Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div>
                <p className="font-medium text-red-800">Seleksi Program Web Development</p>
                <p className="text-sm text-red-600">45 pendaftar menunggu hasil seleksi</p>
              </div>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Proses
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 border-l-4 border-orange-500 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium text-orange-800">Upload Sertifikat Batch Januari</p>
                <p className="text-sm text-orange-600">32 peserta menunggu sertifikat</p>
              </div>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                Upload
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-blue-800">Review Program UI/UX Design</p>
                <p className="text-sm text-blue-600">Menunggu persetujuan untuk publikasi</p>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Review
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Statistik Cepat</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">85%</p>
            <p className="text-sm text-gray-600">Tingkat Kehadiran</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">92%</p>
            <p className="text-sm text-gray-600">Kepuasan Peserta</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">78%</p>
            <p className="text-sm text-gray-600">Tingkat Penyelesaian</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">65%</p>
            <p className="text-sm text-gray-600">Job Placement Rate</p>
          </div>
        </div>
      </Card>
    </div>
  );
} 