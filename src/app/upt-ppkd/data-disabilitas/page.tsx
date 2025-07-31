import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  UserCheck, 
  Users, 
  MapPin,
  Calendar,
  Phone,
  Mail
} from "lucide-react";

export default function DataDisabilitas() {
  const dataDisabilitas = [
    {
      id: 1,
      nama: "Ahmad Subandi",
      nik: "3171010101900001",
      jenisDisabilitas: "Tunanetra",
      alamat: "Jakarta Selatan",
      umur: 25,
      pendidikan: "SMA",
      telepon: "081234567890",
      email: "ahmad.subandi@email.com",
      status: "Aktif Mencari Kerja",
      tanggalDaftar: "15 Jan 2024"
    },
    {
      id: 2,
      nama: "Siti Maryam",
      nik: "3171010101900002",
      jenisDisabilitas: "Tunarungu",
      alamat: "Jakarta Timur",
      umur: 28,
      pendidikan: "D3",
      telepon: "081234567891",
      email: "siti.maryam@email.com",
      status: "Sedang Mengikuti Pelatihan",
      tanggalDaftar: "20 Jan 2024"
    },
    {
      id: 3,
      nama: "Budi Santoso",
      nik: "3171010101900003",
      jenisDisabilitas: "Tunadaksa",
      alamat: "Jakarta Pusat",
      umur: 32,
      pendidikan: "S1",
      telepon: "081234567892",
      email: "budi.santoso@email.com",
      status: "Sudah Bekerja",
      tanggalDaftar: "10 Jan 2024"
    },
    {
      id: 4,
      nama: "Rina Kusuma",
      nik: "3171010101900004",
      jenisDisabilitas: "Tunagrahita",
      alamat: "Jakarta Barat",
      umur: 24,
      pendidikan: "SMA",
      telepon: "081234567893",
      email: "rina.kusuma@email.com",
      status: "Aktif Mencari Kerja",
      tanggalDaftar: "25 Jan 2024"
    },
    {
      id: 5,
      nama: "Deni Pratama",
      nik: "3171010101900005",
      jenisDisabilitas: "Tunanetra",
      alamat: "Jakarta Utara",
      umur: 30,
      pendidikan: "D3",
      telepon: "081234567894",
      email: "deni.pratama@email.com",
      status: "Sedang Mengikuti Pelatihan",
      tanggalDaftar: "5 Feb 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktif Mencari Kerja":
        return "bg-yellow-100 text-yellow-800";
      case "Sedang Mengikuti Pelatihan":
        return "bg-blue-100 text-blue-800";
      case "Sudah Bekerja":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Data Penyandang Disabilitas</h1>
          <p className="text-gray-600 mt-1">Kelola data penyandang disabilitas di wilayah kerja Anda</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2" size={18} />
            Export Data
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Penyandang Disabilitas</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Aktif Mencari Kerja</p>
              <p className="text-2xl font-bold text-gray-900">456</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Search className="text-yellow-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Sedang Pelatihan</p>
              <p className="text-2xl font-bold text-gray-900">298</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <UserCheck className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Sudah Bekerja</p>
              <p className="text-2xl font-bold text-gray-900">493</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <UserCheck className="text-green-600" size={24} />
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
                placeholder="Cari nama, NIK, atau alamat..."
                className="pl-10"
              />
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
              <UserCheck className="mr-2" size={18} />
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
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Nama</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">NIK</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Jenis Disabilitas</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Wilayah</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Pendidikan</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataDisabilitas.map((person) => (
                <tr key={person.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-2">
                    <div>
                      <p className="font-medium text-gray-900">{person.nama}</p>
                      <p className="text-sm text-gray-500">{person.umur} tahun</p>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-700">{person.nik}</td>
                  <td className="py-4 px-2">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {person.jenisDisabilitas}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-700">{person.alamat}</td>
                  <td className="py-4 px-2 text-sm text-gray-700">{person.pendidikan}</td>
                  <td className="py-4 px-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(person.status)}`}>
                      {person.status}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Phone size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Mail size={16} />
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
            Menampilkan 1-5 dari 1,247 data
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