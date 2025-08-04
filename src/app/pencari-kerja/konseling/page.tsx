'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  CheckCircle,
  ArrowRight,
  Heart,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export default function LayananKonseling() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Layanan Konseling</h1>
            <p className="text-lg opacity-90">
              Dapatkan dukungan konseling profesional untuk pengembangan karir Anda
            </p>
          </div>
        </div>
      </div>

      {/* Layanan Konseling untuk Penyandang Disabilitas */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-red-500" size={24} />
          <h2 className="text-xl font-bold">Layanan Konseling untuk Penyandang Disabilitas</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-blue-900 mb-2">Dukungan Khusus untuk Anda</h3>
            <p className="text-blue-800 text-sm">
              Penyandang disabilitas yang lulus wawancara maupun yang tidak lolos seleksi pekerjaan akan difasilitasi 
              dengan layanan konseling untuk memberikan dukungan lebih lanjut dalam pengembangan karir atau 
              evaluasi proses seleksi.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-2">
              <Headphones className="text-green-600" size={20} />
              <h3 className="font-semibold text-green-900">Layanan Konseling melalui Hotline Chat</h3>
            </div>
            <p className="text-green-800 text-sm">
              Layanan ini dilakukan melalui media chat menggunakan platform pihak ketiga 
              (seperti WhatsApp, Telegram, atau platform sejenis) yang memungkinkan konseling secara 
              langsung berdasarkan wilayah Sudinaker masing-masing.
            </p>
          </div>
        </div>
      </Card>

      {/* Proses Pengajuan Layanan Konseling */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="text-green-500" size={24} />
          <h2 className="text-xl font-bold">Proses Pengajuan Layanan Konseling</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Formulir Pengisian Kebutuhan Konseling</h3>
              <p className="text-blue-700 text-sm">
                Pencari kerja yang ingin mengakses layanan konseling pertama-tama mengisi formulir 
                pengisian kebutuhan konseling pada sistem ULD. Formulir ini mencakup beberapa 
                pertanyaan terkait kebutuhan layanan <span className="font-semibold">konsultasi</span> pengguna.
              </p>
            </div>
            <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2">
              <ArrowRight className="text-gray-400" size={24} />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-orange-100 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-bold text-orange-900 mb-2">Pengisian Formulir</h3>
              <p className="text-orange-700 text-sm">
                Setelah mengisi form, sistem akan mencatat preferensi pengguna dan 
                menghubungkannya dengan wilayah Sudinaker tempat pencari kerja terdaftar.
              </p>
            </div>
            <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2">
              <ArrowRight className="text-gray-400" size={24} />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-bold text-green-900 mb-2">Mendapatkan Nomor Kontak</h3>
              <p className="text-green-700 text-sm">
                Sistem akan memberikan nomor kontak WhatsApp yang sesuai dengan wilayah yang bersangkutan 
                beserta pre-text sesi konseling.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Mendapatkan Nomor Kontak dan Pre-text */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Phone className="text-purple-500" size={24} />
          <h2 className="text-xl font-bold">Mendapatkan Nomor Kontak dan Pre-text Sesi Konseling</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold text-purple-900 mb-2">Nomor Kontak WhatsApp</h3>
            <p className="text-purple-800 text-sm">
              Setelah form diisi, sistem akan memberikan nomor kontak WhatsApp yang sesuai dengan 
              wilayah yang bersangkutan untuk memulai sesi konseling.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
            <h3 className="font-semibold text-indigo-900 mb-2">Pre-text Sesi Konseling</h3>
            <p className="text-indigo-800 text-sm">
              Sistem secara otomatis mengirimkan pre-text yang berisi pengantar atau informasi 
              terkait sesi konseling yang akan dilakukan melalui WhatsApp.
            </p>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Siap untuk Memulai Sesi Konseling?
          </h3>
          <p className="text-gray-600 mb-6">
            Isi formulir kebutuhan konseling untuk mendapatkan dukungan yang tepat sesuai dengan kebutuhan Anda.
          </p>
          <Link href="/pencari-kerja/konseling/formulir">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <MessageCircle size={20} className="mr-2" />
              Mulai Konseling Sekarang
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}