import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  BookOpen, 
  FileCheck, 
  TrendingUp, 
  MapPin, 
  CheckCircle, 
  Clock, 
  Eye,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function ULDProvinsiDashboard() {
  const uptData = [
    {
      id: 1,
      nama: "UPT PPKD Jakarta Selatan",
      wilayah: "Jakarta Selatan",
      programAktif: 8,
      peserta: 234,
      pengajuanPending: 3,
      tingkatKelulusan: 89,
      status: "Aktif"
    },
    {
      id: 2,
      nama: "UPT PPKD Jakarta Timur",
      wilayah: "Jakarta Timur",
      programAktif: 12,
      peserta: 298,
      pengajuanPending: 1,
      tingkatKelulusan: 92,
      status: "Aktif"
    },
    {
      id: 3,
      nama: "UPT PPKD Jakarta Pusat",
      wilayah: "Jakarta Pusat",
      programAktif: 6,
      peserta: 178,
      pengajuanPending: 0,
      tingkatKelulusan: 85,
      status: "Aktif"
    },
    {
      id: 4,
      nama: "UPT PPKD Jakarta Barat",
      wilayah: "Jakarta Barat",
      programAktif: 10,
      peserta: 267,
      pengajuanPending: 2,
      tingkatKelulusan: 87,
      status: "Aktif"
    },
    {
      id: 5,
      nama: "UPT PPKD Jakarta Utara",
      wilayah: "Jakarta Utara",
      programAktif: 7,
      peserta: 189,
      pengajuanPending: 1,
      tingkatKelulusan: 91,
      status: "Aktif"
    }
  ];

  const pengajuanTerbaru = [
    {
      id: 1,
      namaProgram: "Digital Marketing Advanced",
      upt: "UPT PPKD Jakarta Selatan",
      kategori: "Digital Marketing",
      kapasitas: 30,
      tanggalPengajuan: "1 Mar 2024",
      status: "Menunggu Review",
      prioritas: "High"
    },
    {
      id: 2,
      namaProgram: "Data Science Fundamentals",
      upt: "UPT PPKD Jakarta Timur",
      kategori: "Data Analysis",
      kapasitas: 25,
      tanggalPengajuan: "28 Feb 2024",
      status: "Menunggu Review",
      prioritas: "Medium"
    },
    {
      id: 3,
      namaProgram: "UI/UX Design Accessibility",
      upt: "UPT PPKD Jakarta Barat",
      kategori: "Design",
      kapasitas: 20,
      tanggalPengajuan: "25 Feb 2024",
      status: "Butuh Revisi",
      prioritas: "Low"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Menunggu Review":
        return "bg-yellow-100 text-yellow-800";
      case "Butuh Revisi":
        return "bg-red-100 text-red-800";
      case "Disetujui":
        return "bg-green-100 text-green-800";
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

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Selamat Datang, Admin ULD Provinsi</h1>
        <p className="text-green-100 mb-4">Monitor dan kelola program pelatihan di seluruh wilayah DKI Jakarta</p>
        <div className="flex gap-4">
          <Link href="/uld-provinsi/pengajuan">
            <Button className="bg-white text-green-600 hover:bg-green-50">
              <FileCheck className="mr-2" size={18} />
              Review Pengajuan
            </Button>
          </Link>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total UPT PPKD</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <CheckCircle size={14} className="mr-1" />
                Semua aktif
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Building2 className="text-green-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Program Aktif</p>
              <p className="text-2xl font-bold text-gray-900">43</p>
              <p className="text-sm text-blue-600 flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +8 bulan ini
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Peserta</p>
              <p className="text-2xl font-bold text-gray-900">1,166</p>
              <p className="text-sm text-purple-600 flex items-center mt-1">
                <Users size={14} className="mr-1" />
                Aktif belajar
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pengajuan Pending</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
              <p className="text-sm text-orange-600 flex items-center mt-1">
                <Clock size={14} className="mr-1" />
                Butuh review
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <FileCheck className="text-orange-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* UPT PPKD Overview & Pending Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* UPT PPKD Overview */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Overview UPT PPKD</h3>
            <Button variant="ghost" size="sm">Lihat Semua</Button>
          </div>
          <div className="space-y-4">
            {uptData.slice(0, 3).map((upt) => (
              <div key={upt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900">{upt.nama}</p>
                    <Badge className={getStatusColor(upt.status)}>
                      {upt.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{upt.programAktif} program</span>
                    <span>{upt.peserta} peserta</span>
                    <span>{upt.tingkatKelulusan}% kelulusan</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {upt.pengajuanPending > 0 && (
                    <Badge className="bg-orange-100 text-orange-800">
                      {upt.pengajuanPending} pengajuan
                    </Badge>
                  )}
                  <Button variant="ghost" size="sm">
                    <Eye size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Pending Approvals */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Pengajuan Menunggu Approval</h3>
            <Button variant="ghost" size="sm">Lihat Semua</Button>
          </div>
          <div className="space-y-4">
            {pengajuanTerbaru.map((pengajuan) => (
              <div key={pengajuan.id} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900">{pengajuan.namaProgram}</h4>
                    <Badge className={getPriorityColor(pengajuan.prioritas)}>
                      {pengajuan.prioritas}
                    </Badge>
                  </div>
                  <Badge className={getStatusColor(pengajuan.status)}>
                    {pengajuan.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{pengajuan.upt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{pengajuan.tanggalPengajuan}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="mr-1" size={14} />
                      Review
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Performance Matrix */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Matrix UPT PPKD</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-700">UPT PPKD</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Wilayah</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Program Aktif</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Peserta</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Kelulusan</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Pengajuan</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {uptData.map((upt) => (
                <tr key={upt.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-2">
                    <p className="font-medium text-gray-900">{upt.nama}</p>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-700">{upt.wilayah}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className="font-medium">{upt.programAktif}</span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className="font-medium">{upt.peserta}</span>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{upt.tingkatKelulusan}%</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-16">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${upt.tingkatKelulusan}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    {upt.pengajuanPending > 0 ? (
                      <Badge className="bg-orange-100 text-orange-800">
                        {upt.pengajuanPending}
                      </Badge>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" title="Lihat Detail">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" title="Monitor">
                        <BarChart3 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <FileCheck className="text-blue-600" size={32} />
          </div>
          <h3 className="font-semibold mb-2">Review Pengajuan</h3>
          <p className="text-sm text-gray-600 mb-4">Setujui atau tolak pengajuan program dari UPT PPKD</p>
          <Button className="w-full">Mulai Review</Button>
        </Card>

        <Card className="p-6 text-center">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <BarChart3 className="text-green-600" size={32} />
          </div>
          <h3 className="font-semibold mb-2">Analisis Kinerja</h3>
          <p className="text-sm text-gray-600 mb-4">Lihat statistik dan performa seluruh wilayah</p>
          <Button variant="outline" className="w-full">Lihat Statistik</Button>
        </Card>

        <Card className="p-6 text-center">
          <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <MapPin className="text-purple-600" size={32} />
          </div>
          <h3 className="font-semibold mb-2">Monitoring Wilayah</h3>
          <p className="text-sm text-gray-600 mb-4">Monitor aktivitas pelatihan per wilayah</p>
          <Button variant="outline" className="w-full">Monitor Wilayah</Button>
        </Card>
      </div>
    </div>
  );
} 