'use client';

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Copy,
  ExternalLink,
  MessageCircle,
  Phone,
  ArrowLeft,
  Calendar,
  User,
  MapPin,
} from "lucide-react";
import Link from "next/link";

interface ContactInfo {
  nomorWhatsApp: string;
  namaKonselor: string;
  wilayah: string;
  jamOperasional: string;
}

function HasilKonselingContent() {
  const searchParams = useSearchParams();
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [preText, setPreText] = useState<string>("");
  const [copiedText, setCopiedText] = useState<string>("");
  
  const nama = searchParams.get('nama');
  const wilayah = searchParams.get('wilayah');
  const masalah = searchParams.get('masalah');

  // Simulasi data kontak berdasarkan wilayah
  const getContactByWilayah = (wilayah: string): ContactInfo => {
    const contacts: Record<string, ContactInfo> = {
      "Jakarta Pusat": {
        nomorWhatsApp: "+62813-8888-1001",
        namaKonselor: "Ibu Sari Dewi, M.Psi",
        wilayah: "Jakarta Pusat",
        jamOperasional: "Senin-Jumat, 08:00-16:00 WIB"
      },
      "Jakarta Utara": {
        nomorWhatsApp: "+62813-8888-1002", 
        namaKonselor: "Bapak Adi Nugroho, S.Psi",
        wilayah: "Jakarta Utara",
        jamOperasional: "Senin-Jumat, 08:00-16:00 WIB"
      },
      "Jakarta Selatan": {
        nomorWhatsApp: "+62813-8888-1003",
        namaKonselor: "Ibu Maya Sinta, M.Psi",
        wilayah: "Jakarta Selatan", 
        jamOperasional: "Senin-Jumat, 08:00-16:00 WIB"
      },
      "Jakarta Timur": {
        nomorWhatsApp: "+62813-8888-1004",
        namaKonselor: "Bapak Rudi Santoso, S.Psi",
        wilayah: "Jakarta Timur",
        jamOperasional: "Senin-Jumat, 08:00-16:00 WIB"
      },
      "Jakarta Barat": {
        nomorWhatsApp: "+62813-8888-1005",
        namaKonselor: "Ibu Linda Putri, M.Psi",
        wilayah: "Jakarta Barat",
        jamOperasional: "Senin-Jumat, 08:00-16:00 WIB"
      },
      "Kepulauan Seribu": {
        nomorWhatsApp: "+62813-8888-1006",
        namaKonselor: "Bapak Deni Kurnia, S.Psi",
        wilayah: "Kepulauan Seribu",
        jamOperasional: "Senin-Jumat, 08:00-16:00 WIB"
      }
    };
    
    return contacts[wilayah] || contacts["Jakarta Pusat"];
  };

  useEffect(() => {
    if (wilayah) {
      const contact = getContactByWilayah(wilayah);
      setContactInfo(contact);
      
      // Generate pre-text
      const generatedPreText = `Halo, saya ${nama || 'Pencari Kerja'} dari wilayah ${wilayah}. Saya ingin mengajukan konseling terkait ${masalah || 'pengembangan karir'}. Mohon bantuan untuk sesi konseling. Terima kasih.`;
      setPreText(generatedPreText);
    }
  }, [nama, wilayah, masalah]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(type);
      setTimeout(() => setCopiedText(""), 2000);
    });
  };

  const openWhatsApp = () => {
    if (contactInfo && preText) {
      const whatsappUrl = `https://wa.me/${contactInfo.nomorWhatsApp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(preText)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (!contactInfo) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Memproses data konseling...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/pencari-kerja/konseling">
          <Button variant="outline" size="sm">
            <ArrowLeft size={16} className="mr-2" />
            Kembali ke Konseling
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Informasi Kontak Konseling</h1>
          <p className="text-gray-600">Hubungi konselor melalui WhatsApp untuk memulai sesi konseling</p>
        </div>
      </div>

      {/* Success Card */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="text-green-600" size={32} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-green-800">Formulir Berhasil Dikirim!</h2>
            <p className="text-green-700">
              Sistem telah menyiapkan kontak konselor yang sesuai dengan wilayah Anda.
            </p>
          </div>
        </div>
      </Card>

      {/* Data Pengajuan */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <User className="text-blue-500" size={20} />
          Data Pengajuan Konseling
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Nama Lengkap</div>
            <div className="font-semibold">{nama || 'Tidak tersedia'}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Wilayah Sudinaker</div>
            <div className="font-semibold flex items-center gap-1">
              <MapPin size={16} className="text-gray-600" />
              {wilayah || 'Tidak tersedia'}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Masalah Konseling</div>
            <div className="font-semibold">{masalah || 'Tidak tersedia'}</div>
          </div>
        </div>
      </Card>

      {/* Informasi Konselor */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Phone className="text-purple-500" size={20} />
          Informasi Konselor
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Nama Konselor</div>
              <div className="font-semibold text-lg">{contactInfo.namaKonselor}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Wilayah Layanan</div>
              <div className="font-semibold">{contactInfo.wilayah}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                <Calendar size={16} />
                Jam Operasional
              </div>
              <div className="font-semibold">{contactInfo.jamOperasional}</div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-blue-600 mb-2">Nomor WhatsApp Konselor</div>
            <div className="text-xl font-bold text-blue-800 mb-3">{contactInfo.nomorWhatsApp}</div>
            <Button 
              onClick={() => copyToClipboard(contactInfo.nomorWhatsApp, 'phone')}
              variant="outline" 
              size="sm"
              className="w-full"
            >
              <Copy size={16} className="mr-2" />
              {copiedText === 'phone' ? 'Tersalin!' : 'Salin Nomor'}
            </Button>
          </div>
        </div>
      </Card>

      {/* Pre-text Konseling */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <MessageCircle className="text-indigo-500" size={20} />
          Pre-text Sesi Konseling
        </h3>
        
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 mb-4">
          <div className="text-sm text-indigo-600 mb-2">Pesan yang akan dikirim:</div>
          <div className="font-medium text-indigo-800 whitespace-pre-line">
            {preText}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => copyToClipboard(preText, 'pretext')}
            variant="outline"
            className="flex-1"
          >
            <Copy size={16} className="mr-2" />
            {copiedText === 'pretext' ? 'Tersalin!' : 'Salin Pesan'}
          </Button>
          
          <Button 
            onClick={openWhatsApp}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            <ExternalLink size={16} className="mr-2" />
            Buka WhatsApp
          </Button>
        </div>
      </Card>

      {/* Instruksi */}
      <Card className="p-6 bg-yellow-50 border-yellow-200">
        <h3 className="text-lg font-bold mb-3 text-yellow-800">Langkah Selanjutnya</h3>
        
        <div className="space-y-3 text-yellow-700">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold">1</span>
            </div>
            <div>
              <div className="font-semibold">Hubungi Konselor</div>
              <div className="text-sm">Klik tombol &quot;Buka WhatsApp&quot; atau salin nomor untuk menghubungi konselor</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold">2</span>
            </div>
            <div>
              <div className="font-semibold">Kirim Pre-text</div>
              <div className="text-sm">Gunakan pre-text yang telah disediakan atau salin pesan untuk memulai konseling</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold">3</span>
            </div>
            <div>
              <div className="font-semibold">Tunggu Respon</div>
              <div className="text-sm">Konselor akan merespon dalam jam operasional dan mengatur jadwal konseling</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Additional Actions */}
      <div className="flex gap-4 justify-center">
        <Link href="/pencari-kerja/konseling/formulir">
          <Button variant="outline">
            Ajukan Konseling Lain
          </Button>
        </Link>
        <Link href="/pencari-kerja/dashboard">
          <Button>
            Kembali ke Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function HasilKonseling() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat informasi konseling...</p>
        </div>
      </div>
    }>
      <HasilKonselingContent />
    </Suspense>
  );
}