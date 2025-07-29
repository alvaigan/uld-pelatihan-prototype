import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Search,
  Filter,
  Download,
  Eye,
  BarChart3,
  MapPin,
  Building2,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  FileText,
  Award,
  GraduationCap
} from "lucide-react";

export default function DataPendaftar() {
  const pendaftarData = [
    {
      id: 1,
      nama: "Ahmad Subandi",
      email: "ahmad.subandi@email.com",
      telepon: "081234567890",
      nik: "3171010101900001",
      jenisDisabilitas: "Tunanetra",
      alamat: "Jakarta Selatan",
      umur: 25,
      pendidikan: "SMA",
      program: "Digital Marketing untuk Penyandang Disabilitas",
      upt: "UPT PPKD Jakarta Selatan",
      wilayah: "Jakarta Selatan",
      tanggalDaftar: "15 Feb 2024",
      statusSeleksi: "Lulus",
      statusProgram: "Sedang Belajar",
      nilaiSeleksi: 85,
      tingkatKehadiran: 89,
      progressBelajar: 45
    },
    {
      id: 2,
      nama: "Siti Maryam",
      email: "siti.maryam@email.com",
      telepon: "081234567891",
      nik: "3171010101900002",
      jenisDisabilitas: "Tunarungu",
      alamat: "Jakarta Timur",
      umur: 28,
      pendidikan: "D3",
      program: "Pemrograman Web Responsif",
      upt: "UPT PPKD Jakarta Timur",
      wilayah: "Jakarta Timur",
      tanggalDaftar: "20 Feb 2024",
      statusSeleksi: "Lulus",
      statusProgram: "Sedang Belajar",
      nilaiSeleksi: 90,
      tingkatKehadiran: 95,
      progressBelajar: 30
    },
    {
      id: 3,
      nama: "Budi Santoso",
      email: "budi.santoso@email.com",
      telepon: "081234567892",
      nik: "3171010101900003",
      jenisDisabilitas: "Tunadaksa",
      alamat: "Jakarta Pusat",
      umur: 32,
      pendidikan: "S1",
      program: "Data Analysis Fundamentals",
      upt: "UPT PPKD Jakarta Pusat",
      wilayah: "Jakarta Pusat",
      tanggalDaftar: "1 Feb 2024",
      statusSeleksi: "Lulus",
      statusProgram: "Lulus",
      nilaiSeleksi: 88,
      tingkatKehadiran: 92,
      progressBelajar: 100
    },
    {
      id: 4,
      nama: "Rina Kusuma",
      email: "rina.kusuma@email.com",
      telepon: "081234567893",
      nik: "3171010101900004",
      jenisDisabilitas: "Tunagrahita",
      alamat: "Jakarta Barat",
      umur: 24,
      pendidikan: "SMA",
      program: "Desain Grafis Inklusif",
      upt: "UPT PPKD Jakarta Barat",
      wilayah: "Jakarta Barat",
      tanggalDaftar: "10 Feb 2024",
      statusSeleksi: "Lulus",
      statusProgram: "Sedang Belajar",
      nilaiSeleksi: 82,
      tingkatKehadiran: 78,
      progressBelajar: 25
    },
    {
      id: 5,
      nama: "Deni Pratama",
      email: "deni.pratama@email.com",
      telepon: "081234567894",
      nik: "3171010101900005",
      jenisDisabilitas: "Tunanetra",
      alamat: "Jakarta Utara",
      umur: 30,
      pendidikan: "D3",
      program: "Mobile App Development",
      upt: "UPT PPKD Jakarta Utara",
      wilayah: "Jakarta Utara",
      tanggalDaftar: "15 Jan 2024",
      statusSeleksi: "Lulus",
      statusProgram: "Lulus",
      nilaiSeleksi: 94,
      tingkatKehadiran: 96,
      progressBelajar: 100
    },
    {
      id: 6,
      nama: "Maya Sari",
      email: "maya.sari@email.com",
      telepon: "081234567895",
      nik: "3171010101900006",
      jenisDisabilitas: "Tunarungu",
      alamat: "Jakarta Selatan",
      umur: 26,
      pendidikan: "SMA",
      program: "Digital Marketing Pemula",
      upt: "UPT PPKD Jakarta Selatan",
      wilayah: "Jakarta Selatan",
      tanggalDaftar: "25 Mar 2024",
      statusSeleksi: "Menunggu",
      statusProgram: "Pendaftaran",
      nilaiSeleksi: null,
      tingkatKehadiran: 0,
      progressBelajar: 0
    },
    {
      id: 7,
      nama: "Eko Wahyudi",
      email: "eko.wahyudi@email.com",
      telepon: "081234567896",
      nik: "3171010101900007",
      jenisDisabilitas: "Tunadaksa",
      alamat: "Jakarta Timur",
      umur: 29,
      pendidikan: "S1",
      program: "Digital Marketing untuk Penyandang Disabilitas",
      upt: "UPT PPKD Jakarta Selatan",
      wilayah: "Jakarta Selatan",
      tanggalDaftar: "12 Feb 2024",
      statusSeleksi: "Tidak Lulus",
      statusProgram: "Tidak Aktif",
      nilaiSeleksi: 65,
      tingkatKehadiran: 0,
      progressBelajar: 0
    }
  ];

  const getStatusSeleksiColor = (status: string) => {
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

  const getStatusProgramColor = (status: string) => {
    switch (status) {
      case "Sedang Belajar":
        return "bg-blue-100 text-blue-800";
      case "Lulus":
        return "bg-green-100 text-green-800";
      case "Dropout":
        return "bg-red-100 text-red-800";
      case "Pendaftaran":
        return "bg-purple-100 text-purple-800";
      case "Tidak Aktif":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Lulus":
        return <CheckCircle size={16} className="text-green-600" />;
      case "Tidak Lulus":
      case "Dropout":
        return <XCircle size={16} className="text-red-600" />;
      case "Menunggu":
        return <Clock size={16} className="text-yellow-600" />;
      case "Sedang Belajar":
        return <GraduationCap size={16} className="text-blue-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  // Statistics calculation
  const totalPendaftar = pendaftarData.length;
  const pendaftarAktif = pendaftarData.filter(p => p.statusProgram === "Sedang Belajar").length;
  const pendaftarLulus = pendaftarData.filter(p => p.statusProgram === "Lulus").length;
  const tingkatKelulusan = Math.round((pendaftarLulus / totalPendaftar) * 100);

  // Breakdown by disability type
  const disabilitasBreakdown = pendaftarData.reduce((acc, curr) => {
    acc[curr.jenisDisabilitas] = (acc[curr.jenisDisabilitas] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Breakdown by region
  const wilayahBreakdown = pendaftarData.reduce((acc, curr) => {
    acc[curr.wilayah] = (acc[curr.wilayah] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Education level breakdown
  const pendidikanBreakdown = pendaftarData.reduce((acc, curr) => {
    acc[curr.pendidikan] = (acc[curr.pendidikan] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Data Pendaftar</h1>
          <p className="text-gray-600 mt-1">Monitoring pendaftar pelatihan di seluruh wilayah DKI Jakarta</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2" size={18} />
            Export Data
          </Button>
          <Button variant="outline">
            <BarChart3 className="mr-2" size={18} />
            Analisis Demografi
          </Button>
        </div>
      </div>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Pendaftar</p>
              <p className="text-2xl font-bold text-gray-900">{totalPendaftar}</p>
              <p className="text-sm text-blue-600 flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +15% bulan ini
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
              <p className="text-sm text-gray-600 mb-1">Sedang Belajar</p>
              <p className="text-2xl font-bold text-gray-900">{pendaftarAktif}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <GraduationCap size={14} className="mr-1" />
                Aktif mengikuti
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <GraduationCap className="text-green-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Sudah Lulus</p>
              <p className="text-2xl font-bold text-gray-900">{pendaftarLulus}</p>
              <p className="text-sm text-purple-600 flex items-center mt-1">
                <Award size={14} className="mr-1" />
                Berhasil lulus
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Award className="text-purple-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tingkat Kelulusan</p>
              <p className="text-2xl font-bold text-gray-900">{tingkatKelulusan}%</p>
              <p className="text-sm text-orange-600 flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                Target: 85%
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <BarChart3 className="text-orange-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Breakdown by Disability Type */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Berdasarkan Jenis Disabilitas</h3>
          <div className="space-y-3">
            {Object.entries(disabilitasBreakdown).map(([jenis, jumlah]) => (
              <div key={jenis} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{jenis}</span>
                <div className="flex items-center gap-3">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(jumlah / totalPendaftar) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-8 text-right">{jumlah}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Breakdown by Region */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Berdasarkan Wilayah</h3>
          <div className="space-y-3">
            {Object.entries(wilayahBreakdown).map(([wilayah, jumlah]) => (
              <div key={wilayah} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{wilayah}</span>
                <div className="flex items-center gap-3">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(jumlah / totalPendaftar) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-8 text-right">{jumlah}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Breakdown by Education */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Berdasarkan Pendidikan</h3>
          <div className="space-y-3">
            {Object.entries(pendidikanBreakdown).map(([pendidikan, jumlah]) => (
              <div key={pendidikan} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{pendidikan}</span>
                <div className="flex items-center gap-3">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${(jumlah / totalPendaftar) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-8 text-right">{jumlah}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input placeholder="Cari nama, NIK, email, atau program..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2" size={18} />
              Jenis Disabilitas
            </Button>
            <Button variant="outline">
              <MapPin className="mr-2" size={18} />
              Wilayah
            </Button>
            <Button variant="outline">
              <Building2 className="mr-2" size={18} />
              UPT PPKD
            </Button>
            <Button variant="outline">
              <CheckCircle className="mr-2" size={18} />
              Status
            </Button>
          </div>
        </div>
      </Card>

      {/* Data Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Pendaftar</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Program & UPT</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Jenis Disabilitas</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Status Seleksi</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Status Program</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Progress</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pendaftarData.map((pendaftar) => (
                <tr key={pendaftar.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-2">
                    <div>
                      <p className="font-medium text-gray-900">{pendaftar.nama}</p>
                      <p className="text-sm text-gray-500">{pendaftar.email}</p>
                      <p className="text-sm text-gray-500">{pendaftar.pendidikan} • {pendaftar.umur} tahun</p>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div>
                      <p className="text-sm text-gray-900 font-medium">{pendaftar.program}</p>
                      <p className="text-sm text-gray-500">{pendaftar.upt}</p>
                      <p className="text-sm text-gray-500">{pendaftar.wilayah}</p>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      {pendaftar.jenisDisabilitas}
                    </Badge>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(pendaftar.statusSeleksi)}
                      <Badge className={getStatusSeleksiColor(pendaftar.statusSeleksi)}>
                        {pendaftar.statusSeleksi}
                      </Badge>
                    </div>
                    {pendaftar.nilaiSeleksi && (
                      <p className="text-xs text-gray-500 mt-1">Nilai: {pendaftar.nilaiSeleksi}</p>
                    )}
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(pendaftar.statusProgram)}
                      <Badge className={getStatusProgramColor(pendaftar.statusProgram)}>
                        {pendaftar.statusProgram}
                      </Badge>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    {pendaftar.statusProgram === "Sedang Belajar" && (
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Pembelajaran</span>
                          <span>{pendaftar.progressBelajar}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-blue-500 h-1.5 rounded-full"
                            style={{ width: `${pendaftar.progressBelajar}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Kehadiran: {pendaftar.tingkatKehadiran}%</p>
                      </div>
                    )}
                    {pendaftar.statusProgram === "Lulus" && (
                      <div className="text-center">
                        <CheckCircle className="text-green-600 mx-auto mb-1" size={20} />
                        <p className="text-xs text-green-600 font-medium">Selesai</p>
                        <p className="text-xs text-gray-500">Kehadiran: {pendaftar.tingkatKehadiran}%</p>
                      </div>
                    )}
                    {(pendaftar.statusProgram === "Pendaftaran" || pendaftar.statusProgram === "Tidak Aktif") && (
                      <span className="text-gray-400 text-sm">-</span>
                    )}
                  </td>
                  <td className="py-4 px-2">
                    <Button variant="ghost" size="sm" title="Lihat Detail">
                      <Eye size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Menampilkan 1-{pendaftarData.length} dari {totalPendaftar} pendaftar
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-green-600 text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
} 