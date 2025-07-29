'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Upload, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  Award, 
  FileText,
  Search,
  Filter,
  Plus,
  CheckCircle,
  Clock,
  Users,
  Calendar,
  Send,
  Settings,
  Image
} from "lucide-react";
import { useState } from "react";

export default function KelolaSertifikat() {
  const [activeTab, setActiveTab] = useState("upload");

  const pesertaLulus = [
    {
      id: 1,
      nama: "Ahmad Subandi",
      program: "Digital Marketing untuk Penyandang Disabilitas",
      jenisDisabilitas: "Tunanetra",
      nilaiAkhir: 85,
      tanggalLulus: "20 Feb 2024",
      statusSertifikat: "Belum Upload",
      nomorSertifikat: null,
      tanggalTerbit: null
    },
    {
      id: 2,
      nama: "Siti Maryam",
      program: "Pemrograman Web Responsif",
      jenisDisabilitas: "Tunarungu",
      nilaiAkhir: 90,
      tanggalLulus: "18 Feb 2024",
      statusSertifikat: "Sudah Terbit",
      nomorSertifikat: "CERT-2024-001",
      tanggalTerbit: "25 Feb 2024"
    },
    {
      id: 3,
      nama: "Budi Santoso",
      program: "Digital Marketing untuk Penyandang Disabilitas",
      jenisDisabilitas: "Tunadaksa",
      nilaiAkhir: 78,
      tanggalLulus: "20 Feb 2024",
      statusSertifikat: "Menunggu Review",
      nomorSertifikat: "CERT-2024-002",
      tanggalTerbit: null
    },
    {
      id: 4,
      nama: "Rina Kusuma",
      program: "Desain Grafis Inklusif",
      jenisDisabilitas: "Tunagrahita",
      nilaiAkhir: 82,
      tanggalLulus: "22 Feb 2024",
      statusSertifikat: "Belum Upload",
      nomorSertifikat: null,
      tanggalTerbit: null
    }
  ];

  const templateSertifikat = [
    {
      id: 1,
      nama: "Template Digital Marketing",
      program: "Digital Marketing",
      preview: "/templates/digital-marketing.png",
      status: "Aktif",
      tanggalBuat: "15 Jan 2024",
      digunakan: 45
    },
    {
      id: 2,
      nama: "Template Programming",
      program: "Programming",
      preview: "/templates/programming.png",
      status: "Aktif",
      tanggalBuat: "20 Jan 2024",
      digunakan: 38
    },
    {
      id: 3,
      nama: "Template Design",
      program: "Design",
      preview: "/templates/design.png",
      status: "Draft",
      tanggalBuat: "25 Jan 2024",
      digunakan: 0
    }
  ];

  const riwayatSertifikat = [
    {
      id: 1,
      nomorSertifikat: "CERT-2024-001",
      namaPeserta: "Siti Maryam",
      program: "Pemrograman Web Responsif",
      tanggalTerbit: "25 Feb 2024",
      status: "Terkirim",
      downloadCount: 3
    },
    {
      id: 2,
      nomorSertifikat: "CERT-2024-002",
      namaPeserta: "Budi Santoso",
      program: "Digital Marketing untuk Penyandang Disabilitas",
      tanggalTerbit: "26 Feb 2024",
      status: "Pending",
      downloadCount: 0
    },
    {
      id: 3,
      nomorSertifikat: "CERT-2024-003",
      namaPeserta: "Ahmad Fadli",
      program: "Data Analysis Fundamentals",
      tanggalTerbit: "20 Feb 2024",
      status: "Terkirim",
      downloadCount: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Sudah Terbit":
        return "bg-green-100 text-green-800";
      case "Menunggu Review":
        return "bg-yellow-100 text-yellow-800";
      case "Belum Upload":
        return "bg-red-100 text-red-800";
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      case "Terkirim":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Sudah Terbit":
      case "Terkirim":
        return <CheckCircle size={16} className="text-green-600" />;
      case "Menunggu Review":
      case "Pending":
        return <Clock size={16} className="text-yellow-600" />;
      default:
        return <FileText size={16} className="text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Sertifikat</h1>
          <p className="text-gray-600 mt-1">Upload dan kelola sertifikat peserta yang lulus pelatihan</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings className="mr-2" size={18} />
            Template
          </Button>
          <Button>
            <Upload className="mr-2" size={18} />
            Upload Sertifikat
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Peserta Lulus</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Sertifikat Terbit</p>
              <p className="text-2xl font-bold text-gray-900">134</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Award className="text-green-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Menunggu Upload</p>
              <p className="text-2xl font-bold text-gray-900">22</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="text-yellow-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Template Aktif</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="text-purple-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="upload">Upload Sertifikat</TabsTrigger>
          <TabsTrigger value="template">Template</TabsTrigger>
          <TabsTrigger value="riwayat">Riwayat</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
        </TabsList>

        {/* Tab: Upload Sertifikat */}
        <TabsContent value="upload" className="space-y-6">
          {/* Search and Filter */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input placeholder="Cari nama peserta atau program..." className="pl-10" />
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

          {/* Peserta Lulus Table */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Peserta yang Lulus</h3>
              <Button size="sm">
                <Send className="mr-2" size={16} />
                Kirim Batch
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Peserta</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Program</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Nilai</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Tanggal Lulus</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Status Sertifikat</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {pesertaLulus.map((peserta) => (
                    <tr key={peserta.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-2">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="py-4 px-2">
                        <div>
                          <p className="font-medium text-gray-900">{peserta.nama}</p>
                          <p className="text-sm text-gray-500">{peserta.jenisDisabilitas}</p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <p className="text-sm text-gray-900">{peserta.program}</p>
                      </td>
                      <td className="py-4 px-2">
                        <span className="font-bold text-blue-600">{peserta.nilaiAkhir}</span>
                      </td>
                      <td className="py-4 px-2 text-sm text-gray-700">
                        {peserta.tanggalLulus}
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(peserta.statusSertifikat)}
                          <Badge className={getStatusColor(peserta.statusSertifikat)}>
                            {peserta.statusSertifikat}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex gap-2">
                          {peserta.statusSertifikat === "Belum Upload" && (
                            <Button variant="outline" size="sm">
                              <Upload className="mr-1" size={16} />
                              Upload
                            </Button>
                          )}
                          {peserta.statusSertifikat === "Sudah Terbit" && (
                            <>
                              <Button variant="ghost" size="sm" title="Lihat">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" title="Download">
                                <Download size={16} />
                              </Button>
                            </>
                          )}
                          {peserta.statusSertifikat === "Menunggu Review" && (
                            <Button variant="outline" size="sm" className="text-green-600">
                              <CheckCircle className="mr-1" size={16} />
                              Approve
                            </Button>
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

        {/* Tab: Template */}
        <TabsContent value="template" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Template Sertifikat</h3>
              <Button>
                <Plus className="mr-2" size={18} />
                Buat Template Baru
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templateSertifikat.map((template) => (
                <Card key={template.id} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image className="text-gray-400" size={48} aria-label="Template preview" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{template.nama}</h4>
                        <Badge className={getStatusColor(template.status)}>
                          {template.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600">{template.program}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Digunakan: {template.digunakan}x</span>
                        <span>{template.tanggalBuat}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="mr-1" size={16} />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="mr-1" size={16} />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Riwayat */}
        <TabsContent value="riwayat" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Riwayat Sertifikat</h3>
              <Button variant="outline">
                <Download className="mr-2" size={18} />
                Export Data
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">No. Sertifikat</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Peserta</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Program</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Tanggal Terbit</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Download</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {riwayatSertifikat.map((sertifikat) => (
                    <tr key={sertifikat.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-2 font-mono text-sm">
                        {sertifikat.nomorSertifikat}
                      </td>
                      <td className="py-4 px-2">
                        <p className="font-medium text-gray-900">{sertifikat.namaPeserta}</p>
                      </td>
                      <td className="py-4 px-2 text-sm text-gray-700">
                        {sertifikat.program}
                      </td>
                      <td className="py-4 px-2 text-sm text-gray-700">
                        {sertifikat.tanggalTerbit}
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(sertifikat.status)}
                          <Badge className={getStatusColor(sertifikat.status)}>
                            {sertifikat.status}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-sm text-gray-700">
                        {sertifikat.downloadCount}x
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" title="Lihat">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" title="Download">
                            <Download size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" title="Kirim Ulang">
                            <Send size={16} />
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

        {/* Tab: Bulk Upload */}
        <TabsContent value="bulk" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upload Sertifikat Massal</h3>
            
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Upload File ZIP</h4>
                <p className="text-gray-600 mb-4">Drag and drop file ZIP berisi sertifikat atau klik untuk browse</p>
                <Button>
                  <Upload className="mr-2" size={18} />
                  Pilih File ZIP
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Format: ZIP file berisi PDF sertifikat dengan nama file sesuai nomor sertifikat
                </p>
              </div>

              <Card className="p-4 bg-blue-50 border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Petunjuk Upload Massal:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• File harus dalam format ZIP</li>
                  <li>• Setiap sertifikat harus dalam format PDF</li>
                  <li>• Nama file harus sesuai dengan nomor sertifikat (contoh: CERT-2024-001.pdf)</li>
                  <li>• Maksimal ukuran file ZIP: 50MB</li>
                  <li>• Maksimal 100 sertifikat per upload</li>
                </ul>
              </Card>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Download className="mr-2" size={18} />
                  Download Template
                </Button>
                <Button className="flex-1" disabled>
                  <Upload className="mr-2" size={18} />
                  Proses Upload
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 