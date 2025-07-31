'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
  Calendar,
  X,
  Check,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

// Define types
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
  program: string;
  tanggalDaftar: string;
  statusSeleksi: string;
  nilaiSeleksi: number | null;
  dokumen: string[];
  catatan: string;
}

// Modal Component
function Modal({ isOpen, onClose, title, children }: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function DataPendaftar() {
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedPendaftar, setSelectedPendaftar] = useState<Pendaftar | null>(null);
  const [contactType, setContactType] = useState<'phone' | 'email'>('phone');
  const [selectionResults, setSelectionResults] = useState<{[key: number]: {status: string, nilai: number, catatan: string}}>({});
  const [pendaftarList, setPendaftarList] = useState([
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
      dokumen: ["KTP", "CV", "Surat Rekomendasi"],
      catatan: "Kandidat sangat potensial dengan pengalaman sebelumnya di bidang teknologi"
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
      dokumen: ["KTP", "CV"],
      catatan: "Menunggu proses seleksi"
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
      dokumen: ["KTP", "CV", "Surat Rekomendasi"],
      catatan: "Perlu peningkatan keterampilan dasar sebelum mengikuti program"
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
      dokumen: ["KTP", "CV"],
      catatan: "Menunggu proses seleksi"
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
      dokumen: ["KTP", "CV", "Surat Rekomendasi", "Portofolio"],
      catatan: "Kandidat unggul dengan portofolio yang baik"
    }
  ]);

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

  const pendingApplicants = pendaftarList.filter(p => p.statusSeleksi === "Menunggu");

  const handleProcessSelection = () => {
    // Update status berdasarkan hasil seleksi
    const updatedList = pendaftarList.map(pendaftar => {
      const result = selectionResults[pendaftar.id];
      if (result) {
        return {
          ...pendaftar,
          statusSeleksi: result.status,
          nilaiSeleksi: result.nilai,
          catatan: result.catatan
        };
      }
      return pendaftar;
    });
    
    setPendaftarList(updatedList);
    setSelectionResults({});
    setShowProcessModal(false);
    alert('Proses seleksi berhasil diselesaikan!');
  };

  const handleSelectionChange = (id: number, field: string, value: string | number) => {
    setSelectionResults(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const handleViewDetail = (pendaftar: Pendaftar) => {
    setSelectedPendaftar(pendaftar);
    setShowDetailModal(true);
  };

  const handleViewDocument = (pendaftar: Pendaftar) => {
    setSelectedPendaftar(pendaftar);
    setShowDocumentModal(true);
  };

  const handleContact = (pendaftar: Pendaftar, type: 'phone' | 'email') => {
    setSelectedPendaftar(pendaftar);
    setContactType(type);
    setShowContactModal(true);
  };

  const handleExportData = () => {
    // Mock export functionality
    alert('Data pendaftar berhasil diexport ke file Excel!');
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
          <Button variant="outline" onClick={handleExportData}>
            <Download className="mr-2" size={18} />
            Export Data
          </Button>
          <Button onClick={() => setShowProcessModal(true)} disabled={pendingApplicants.length === 0}>
            <CheckCircle className="mr-2" size={18} />
            Proses Seleksi {pendingApplicants.length > 0 && `(${pendingApplicants.length})`}
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Pendaftar</p>
              <p className="text-2xl font-bold text-gray-900">{pendaftarList.length}</p>
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
              <p className="text-2xl font-bold text-gray-900">{pendaftarList.filter(p => p.statusSeleksi === "Menunggu").length}</p>
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
              <p className="text-2xl font-bold text-gray-900">{pendaftarList.filter(p => p.statusSeleksi === "Lulus").length}</p>
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
              <p className="text-2xl font-bold text-gray-900">{pendaftarList.filter(p => p.statusSeleksi === "Tidak Lulus").length}</p>
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
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        title="Lihat Detail"
                        onClick={() => handleViewDetail(pendaftar)}
                      >
                        <Eye size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        title="Telepon"
                        onClick={() => handleContact(pendaftar, 'phone')}
                      >
                        <Phone size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        title="Email"
                        onClick={() => handleContact(pendaftar, 'email')}
                      >
                        <Mail size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        title="Dokumen"
                        onClick={() => handleViewDocument(pendaftar)}
                      >
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
            Menampilkan 1-{pendaftarList.length} dari {pendaftarList.length} pendaftar
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

      {/* Process Selection Modal */}
      <Modal 
        isOpen={showProcessModal} 
        onClose={() => setShowProcessModal(false)}
        title="Proses Seleksi Pendaftar"
      >
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-blue-600" size={20} />
              <p className="text-blue-800 font-medium">
                {pendingApplicants.length} pendaftar menunggu proses seleksi
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {pendingApplicants.map((pendaftar) => (
              <Card key={pendaftar.id} className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{pendaftar.nama}</h4>
                      <p className="text-sm text-gray-500">{pendaftar.program}</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">
                      {pendaftar.jenisDisabilitas}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Status Seleksi</Label>
                      <select 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={selectionResults[pendaftar.id]?.status || ''}
                        onChange={(e) => handleSelectionChange(pendaftar.id, 'status', e.target.value)}
                      >
                        <option value="">Pilih Status</option>
                        <option value="Lulus">Lulus</option>
                        <option value="Tidak Lulus">Tidak Lulus</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Nilai (0-100)</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={selectionResults[pendaftar.id]?.nilai || ''}
                        onChange={(e) => handleSelectionChange(pendaftar.id, 'nilai', parseInt(e.target.value) || 0)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Catatan</Label>
                      <Input
                        value={selectionResults[pendaftar.id]?.catatan || ''}
                        onChange={(e) => handleSelectionChange(pendaftar.id, 'catatan', e.target.value)}
                        placeholder="Catatan evaluasi"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button variant="outline" onClick={() => setShowProcessModal(false)} className="flex-1">
              Batal
            </Button>
            <Button onClick={handleProcessSelection} className="flex-1">
              <Check className="mr-2" size={18} />
              Simpan Hasil Seleksi
            </Button>
          </div>
        </div>
      </Modal>

      {/* Detail Modal */}
      <Modal 
        isOpen={showDetailModal} 
        onClose={() => setShowDetailModal(false)}
        title="Detail Pendaftar"
      >
        {selectedPendaftar && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Nama Lengkap</Label>
                  <p className="text-gray-900 font-medium">{selectedPendaftar.nama}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">NIK</Label>
                  <p className="text-gray-900">{selectedPendaftar.nik}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Email</Label>
                  <p className="text-gray-900">{selectedPendaftar.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Telepon</Label>
                  <p className="text-gray-900">{selectedPendaftar.telepon}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Alamat</Label>
                  <p className="text-gray-900">{selectedPendaftar.alamat}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Umur</Label>
                  <p className="text-gray-900">{selectedPendaftar.umur} tahun</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Pendidikan</Label>
                  <p className="text-gray-900">{selectedPendaftar.pendidikan}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Jenis Disabilitas</Label>
                  <Badge className="bg-purple-100 text-purple-800">{selectedPendaftar.jenisDisabilitas}</Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Program yang Dipilih</Label>
                  <p className="text-gray-900">{selectedPendaftar.program}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Tanggal Pendaftaran</Label>
                  <p className="text-gray-900">{selectedPendaftar.tanggalDaftar}</p>
                </div>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-700">Status Seleksi</Label>
              <div className="flex items-center gap-2 mt-1">
                {getStatusIcon(selectedPendaftar.statusSeleksi)}
                <Badge className={getStatusColor(selectedPendaftar.statusSeleksi)}>
                  {selectedPendaftar.statusSeleksi}
                </Badge>
                {selectedPendaftar.nilaiSeleksi && (
                  <span className="text-sm text-gray-600">• Nilai: {selectedPendaftar.nilaiSeleksi}</span>
                )}
              </div>
            </div>

            {selectedPendaftar.catatan && (
              <div>
                <Label className="text-sm font-medium text-gray-700">Catatan</Label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-lg mt-1">{selectedPendaftar.catatan}</p>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Document Modal */}
      <Modal 
        isOpen={showDocumentModal} 
        onClose={() => setShowDocumentModal(false)}
        title="Dokumen Pendaftar"
      >
        {selectedPendaftar && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900">{selectedPendaftar.nama}</h4>
              <p className="text-blue-700 text-sm">{selectedPendaftar.email}</p>
            </div>
            
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">Dokumen yang Diupload:</Label>
              {selectedPendaftar.dokumen.map((doc: string, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="text-blue-600" size={20} />
                    <span className="text-gray-900">{doc}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink size={16} className="mr-1" />
                    Lihat
                  </Button>
                </div>
              ))}
            </div>
            
            {selectedPendaftar.dokumen.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                <p>Belum ada dokumen yang diupload</p>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Contact Modal */}
      <Modal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)}
        title={contactType === 'phone' ? 'Hubungi via Telepon' : 'Kirim Email'}
      >
        {selectedPendaftar && (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900">{selectedPendaftar.nama}</h4>
              <p className="text-blue-700 text-sm">
                {contactType === 'phone' ? selectedPendaftar.telepon : selectedPendaftar.email}
              </p>
            </div>

            {contactType === 'phone' ? (
              <div className="text-center space-y-4">
                <Phone size={48} className="mx-auto text-green-600" />
                <p className="text-gray-600">Klik tombol di bawah untuk melakukan panggilan</p>
                <Button className="w-full">
                  <Phone className="mr-2" size={18} />
                  Panggil {selectedPendaftar.telepon}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Subjek</Label>
                  <Input placeholder="Masukkan subjek email" className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Pesan</Label>
                  <Textarea 
                    rows={6}
                    placeholder="Tulis pesan Anda di sini..."
                    className="mt-1"
                  />
                </div>
                <Button className="w-full">
                  <Mail className="mr-2" size={18} />
                  Kirim Email
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
} 