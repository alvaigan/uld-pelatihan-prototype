'use client';

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ClipboardCheck,
  ArrowLeft,
  Send,
  User,
  MapPin,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  namaLengkap: string;
  email: string;
  nomorTelepon: string;
  alamat: string;
  wilayahSudinaker: string;
  jenisDisabilitas: string;
  statusPekerjaan: string;
  masalahKonseling: string;
  deskripsiMasalah: string;
  preferensiWaktu: string;
  pernahKonseling: string;
}

export default function FormulirKonseling() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    namaLengkap: '',
    email: '',
    nomorTelepon: '',
    alamat: '',
    wilayahSudinaker: '',
    jenisDisabilitas: '',
    statusPekerjaan: '',
    masalahKonseling: '',
    deskripsiMasalah: '',
    preferensiWaktu: '',
    pernahKonseling: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect ke halaman hasil dengan data
      const queryParams = new URLSearchParams({
        nama: formData.namaLengkap,
        wilayah: formData.wilayahSudinaker,
        masalah: formData.masalahKonseling
      });
      router.push(`/pencari-kerja/konseling/hasil?${queryParams.toString()}`);
    }, 2000);
  };

  const wilayahSudinaker = [
    "Jakarta Pusat",
    "Jakarta Utara", 
    "Jakarta Selatan",
    "Jakarta Timur",
    "Jakarta Barat",
    "Kepulauan Seribu"
  ];

  const jenisDisabilitasOptions = [
    "Disabilitas Fisik",
    "Disabilitas Sensorik (Tunanetra)",
    "Disabilitas Sensorik (Tunarungu)",
    "Disabilitas Intelektual",
    "Disabilitas Mental",
    "Disabilitas Ganda",
    "Lainnya"
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/pencari-kerja/konseling">
          <Button variant="outline" size="sm">
            <ArrowLeft size={16} className="mr-2" />
            Kembali
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Formulir Kebutuhan Konseling</h1>
          <p className="text-gray-600">Isi formulir berikut untuk mendapatkan layanan konseling yang sesuai</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Data Pribadi */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-blue-500" size={24} />
            <h2 className="text-xl font-bold">Data Pribadi</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="namaLengkap">Nama Lengkap *</Label>
              <Input
                id="namaLengkap"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                placeholder="Masukkan nama lengkap"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Masukkan email"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="nomorTelepon">Nomor Telepon *</Label>
              <Input
                id="nomorTelepon"
                name="nomorTelepon"
                value={formData.nomorTelepon}
                onChange={handleInputChange}
                placeholder="Masukkan nomor telepon"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="jenisDisabilitas">Jenis Disabilitas *</Label>
              <select
                id="jenisDisabilitas"
                name="jenisDisabilitas"
                value={formData.jenisDisabilitas}
                onChange={handleInputChange}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih jenis disabilitas</option>
                {jenisDisabilitasOptions.map((jenis) => (
                  <option key={jenis} value={jenis}>{jenis}</option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="alamat">Alamat Lengkap *</Label>
              <Textarea
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                placeholder="Masukkan alamat lengkap"
                required
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        </Card>

        {/* Wilayah dan Status */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-green-500" size={24} />
            <h2 className="text-xl font-bold">Wilayah dan Status Pekerjaan</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="wilayahSudinaker">Wilayah Sudinaker *</Label>
              <select
                id="wilayahSudinaker"
                name="wilayahSudinaker"
                value={formData.wilayahSudinaker}
                onChange={handleInputChange}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih wilayah Sudinaker</option>
                {wilayahSudinaker.map((wilayah) => (
                  <option key={wilayah} value={wilayah}>{wilayah}</option>
                ))}
              </select>
            </div>
            
            <div>
              <Label htmlFor="statusPekerjaan">Status Pekerjaan Saat Ini *</Label>
              <select
                id="statusPekerjaan"
                name="statusPekerjaan"
                value={formData.statusPekerjaan}
                onChange={handleInputChange}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih status pekerjaan</option>
                <option value="Belum Bekerja">Belum Bekerja</option>
                <option value="Sedang Mencari Kerja">Sedang Mencari Kerja</option>
                <option value="Tidak Lolos Seleksi">Tidak Lolos Seleksi</option>
                <option value="Sedang Bekerja">Sedang Bekerja</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Kebutuhan Konseling */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-purple-500" size={24} />
            <h2 className="text-xl font-bold">Kebutuhan Konseling</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="masalahKonseling">Masalah yang Ingin Dikonsultasikan *</Label>
              <select
                id="masalahKonseling"
                name="masalahKonseling"
                value={formData.masalahKonseling}
                onChange={handleInputChange}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih masalah konseling</option>
                <option value="Pengembangan Karir">Pengembangan Karir</option>
                <option value="Evaluasi Proses Seleksi">Evaluasi Proses Seleksi</option>
                <option value="Persiapan Interview">Persiapan Interview</option>
                <option value="Motivasi dan Kepercayaan Diri">Motivasi dan Kepercayaan Diri</option>
                <option value="Adaptasi di Tempat Kerja">Adaptasi di Tempat Kerja</option>
                <option value="Pengembangan Keterampilan">Pengembangan Keterampilan</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="deskripsiMasalah">Deskripsi Detail Masalah *</Label>
              <Textarea
                id="deskripsiMasalah"
                name="deskripsiMasalah"
                value={formData.deskripsiMasalah}
                onChange={handleInputChange}
                placeholder="Jelaskan secara detail masalah yang ingin Anda konsultasikan..."
                required
                className="mt-1"
                rows={4}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="preferensiWaktu">Preferensi Waktu Konseling *</Label>
                <select
                  id="preferensiWaktu"
                  name="preferensiWaktu"
                  value={formData.preferensiWaktu}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih waktu konseling</option>
                  <option value="Pagi (08:00 - 12:00)">Pagi (08:00 - 12:00)</option>
                  <option value="Siang (12:00 - 15:00)">Siang (12:00 - 15:00)</option>
                  <option value="Sore (15:00 - 18:00)">Sore (15:00 - 18:00)</option>
                  <option value="Fleksibel">Fleksibel</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="pernahKonseling">Pernah Melakukan Konseling Sebelumnya? *</Label>
                <select
                  id="pernahKonseling"
                  name="pernahKonseling"
                  value={formData.pernahKonseling}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih jawaban</option>
                  <option value="Ya">Ya</option>
                  <option value="Tidak">Tidak</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Submit Button */}
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Pastikan semua data yang Anda masukkan sudah benar. Setelah submit, Anda akan mendapatkan 
              informasi kontak WhatsApp untuk memulai sesi konseling.
            </p>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              {isSubmitting ? (
                <>
                  <ClipboardCheck size={20} className="mr-2 animate-pulse" />
                  Memproses...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-2" />
                  Kirim Formulir
                </>
              )}
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
}