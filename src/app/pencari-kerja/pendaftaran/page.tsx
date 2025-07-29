'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload } from "lucide-react";
import React, { useState, Suspense } from "react";

const dummyPelatihan = {
  '1': {
    title: 'Digital Marketing untuk Pemula',
    provider: 'Lembaga Pelatihan Digital',
  },
  '2': {
    title: 'Pemrograman Web dengan HTML & CSS',
    provider: 'Coding Academy Indonesia',
  },
  '3': {
    title: 'Desain Grafis dengan Adobe Photoshop',
    provider: 'Creative Design Institute',
  },
};

function PendaftaranContent() {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get('id');
  const pelatihan = id && (id === '1' || id === '2' || id === '3') ? dummyPelatihan[id] : null;

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    hp: "",
    nik: "",
    alamat: "",
    disabilitas: "",
    motivasi: "",
    ktp: null as File | null,
    cv: null as File | null,
    rekom: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    alert("Pendaftaran berhasil dikirim!");
    router.push('/pencari-kerja/status');
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <Button variant="ghost" className="w-fit mb-2" onClick={() => router.push('/pencari-kerja/pelatihan')}><ArrowLeft className="mr-2" size={18}/> Kembali ke Program Pelatihan</Button>
      <Card className="p-8">
        {pelatihan && (
          <div className="mb-6">
            <div className="text-lg font-bold mb-1">{pelatihan.title}</div>
            <div className="text-sm text-gray-500">{pelatihan.provider}</div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="nama">Nama Lengkap</Label>
              <Input 
                id="nama" 
                placeholder="Nama lengkap" 
                required 
                value={formData.nama}
                onChange={(e) => handleInputChange('nama', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Email aktif" 
                required 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="hp">Nomor HP</Label>
              <Input 
                id="hp" 
                placeholder="Nomor HP" 
                required 
                value={formData.hp}
                onChange={(e) => handleInputChange('hp', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="nik">NIK</Label>
              <Input 
                id="nik" 
                placeholder="Nomor Induk Kependudukan" 
                required 
                value={formData.nik}
                onChange={(e) => handleInputChange('nik', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="alamat">Alamat</Label>
              <Input 
                id="alamat" 
                placeholder="Alamat domisili" 
                required 
                value={formData.alamat}
                onChange={(e) => handleInputChange('alamat', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="disabilitas">Jenis Disabilitas</Label>
              <Input 
                id="disabilitas" 
                placeholder="Contoh: Tuli, Netra, Daksa, dll" 
                required 
                value={formData.disabilitas}
                onChange={(e) => handleInputChange('disabilitas', e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="motivasi">Motivasi Mengikuti Pelatihan</Label>
            <Textarea 
              id="motivasi" 
              placeholder="Ceritakan motivasi dan harapan Anda mengikuti pelatihan ini..." 
              rows={4} 
              required 
              value={formData.motivasi}
              onChange={(e) => handleInputChange('motivasi', e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Upload Dokumen Pendukung</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="ktp">Scan KTP <span className="text-red-500">*</span></Label>
                <Input 
                  id="ktp" 
                  type="file" 
                  accept="image/*,application/pdf" 
                  required 
                  onChange={(e) => handleFileChange('ktp', e.target.files?.[0] || null)}
                />
              </div>
              <div>
                <Label htmlFor="cv">CV/Resume <span className="text-red-500">*</span></Label>
                <Input 
                  id="cv" 
                  type="file" 
                  accept="application/pdf" 
                  required 
                  onChange={(e) => handleFileChange('cv', e.target.files?.[0] || null)}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="rekom">Surat Rekomendasi <span className="text-gray-500">(Opsional)</span></Label>
                <Input 
                  id="rekom" 
                  type="file" 
                  accept="application/pdf" 
                  onChange={(e) => handleFileChange('rekom', e.target.files?.[0] || null)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button type="submit" className="bg-green-600 hover:bg-green-700 px-8">
              <Upload className="mr-2" size={18} />
              Kirim Pendaftaran
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default function PendaftaranPelatihan() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-64">Loading...</div>}>
      <PendaftaranContent />
    </Suspense>
  );
} 