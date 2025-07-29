'use client';

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ProfilPencariKerja() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    hp: "",
    disabilitas: "",
    alamat: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile data:", formData);
    alert("Profil berhasil disimpan!");
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Profil & Data Diri</h1>
        <p className="text-gray-600">Lengkapi data diri Anda untuk memaksimalkan peluang kerja dan pelatihan yang sesuai.</p>
      </div>
      <Card className="p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="nama">Nama Lengkap</Label>
              <Input 
                id="nama" 
                placeholder="Nama lengkap" 
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
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="hp">Nomor HP</Label>
              <Input 
                id="hp" 
                placeholder="Nomor HP" 
                value={formData.hp}
                onChange={(e) => handleInputChange('hp', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="disabilitas">Jenis Disabilitas</Label>
              <Input 
                id="disabilitas" 
                placeholder="Contoh: Tuli, Netra, Daksa, dll" 
                value={formData.disabilitas}
                onChange={(e) => handleInputChange('disabilitas', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="alamat">Alamat</Label>
              <Input 
                id="alamat" 
                placeholder="Alamat domisili" 
                value={formData.alamat}
                onChange={(e) => handleInputChange('alamat', e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button type="submit" className="bg-green-600 hover:bg-green-700">Simpan Profil</Button>
          </div>
        </form>
      </Card>
    </div>
  );
} 