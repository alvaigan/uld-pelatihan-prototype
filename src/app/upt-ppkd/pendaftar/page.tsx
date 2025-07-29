import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Users, 
  FileText,
  Phone,
  Mail,
  Calendar
} from "lucide-react";

export default function DataPendaftar() {
  const pendaftarList = [
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
      tanggalDaftar: "15 Jan 2024",
      statusSeleksi: "Lulus",
      nilaiSeleksi: 85,
      dokumen: ["KTP", "CV", "Surat Rekomendasi"]
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
      tanggalDaftar: "20 Jan 2024",
      statusSeleksi: "Menunggu",
      nilaiSeleksi: null,
      dokumen: ["KTP", "CV"]
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
      program: "Digital Marketing untuk Penyandang Disabilitas",
      tanggalDaftar: "10 Jan 2024",
      statusSeleksi: "Tidak Lulus",
      nilaiSeleksi: 65,
      dokumen: ["KTP", "CV", "Surat Rekomendasi"]
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
      tanggalDaftar: "25 Jan 2024",
      statusSeleksi: "Menunggu",
      nilaiSeleksi: null,
      dokumen: ["KTP", "CV"]
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
      program: "Pemrograman Web Responsif",
      tanggalDaftar: "5 Feb 2024",
      statusSeleksi: "Lulus",
      nilaiSeleksi: 90,
      dokumen: ["KTP", "CV", "Surat Rekomendasi", "Portofolio"]
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
          <h1 className="text-2xl font-bold text-gray-900">Data Pendaftar</h1>
          <p className="text-gray-600 mt-1">Kelola data pendaftar program pelatihan</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2" size={18} />
            Export Data
          </Button>
          <Button>
            <CheckCircle className="mr-2" size={18} />
            Proses Seleksi
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Pendaftar</p>
              <p className="text-2xl font-bold text-gray-900">892</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

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
              <p className="text-sm text-gray-600 mb-1">Lulus Seleksi</p>
              <p className="text-2xl font-bold text-gray-900">634</p>
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
              <p className="text-2xl font-bold text-gray-900">102</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <XCircle className="text-red-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Cari nama, NIK, atau email pendaftar..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2" size={18} />
              Program
            </Button>
            <Button variant="outline">
              <CheckCircle className="mr-2" size={18} />
              Status Seleksi
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2" size={18} />
              Tanggal Daftar
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
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Program</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Jenis Disabilitas</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Tanggal Daftar</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Status Seleksi</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Nilai</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pendaftarList.map((pendaftar) => (
                <tr key={pendaftar.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-2">
                    <div>
                      <p className="font-medium text-gray-900">{pendaftar.nama}</p>
                      <p className="text-sm text-gray-500">{pendaftar.email}</p>
                      <p className="text-sm text-gray-500">{pendaftar.pendidikan} • {pendaftar.umur} tahun</p>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <p className="text-sm text-gray-900 font-medium">{pendaftar.program}</p>
                  </td>
                  <td className="py-4 px-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      {pendaftar.jenisDisabilitas}
                    </Badge>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-700">
                    {pendaftar.tanggalDaftar}
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(pendaftar.statusSeleksi)}
                      <Badge className={getStatusColor(pendaftar.statusSeleksi)}>
                        {pendaftar.statusSeleksi}
                      </Badge>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-700">
                    {pendaftar.nilaiSeleksi ? pendaftar.nilaiSeleksi : "-"}
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" title="Lihat Detail">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" title="Telepon">
                        <Phone size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" title="Email">
                        <Mail size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" title="Dokumen">
                        <FileText size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Menampilkan 1-5 dari 892 pendaftar
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-600 text-white">
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