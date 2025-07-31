'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft,
  Send,
  Save
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function BuatProgram() {
  const [formData, setFormData] = useState({
    namaProgram: '',
    kategori: '',
    durasi: '',
    kapasitas: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    lokasi: '',
    modaPelatihan: '',
    biaya: '',
    sumberDana: '',
    deskripsi: '',
    instruktur: '',
    aksesibilitas: [] as string[]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (isDraft: boolean = false) => {
    // Handle form submission logic here
    console.log('Form submitted:', { ...formData, isDraft });
    // You can add actual submission logic here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/upt-ppkd/program-pelatihan">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2" size={18} />
            Kembali
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Buat Program Pelatihan</h1>
          <p className="text-gray-600 mt-1">Buat dan ajukan program pelatihan baru untuk penyandang disabilitas</p>
        </div>
      </div>

      {/* Form */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Informasi Program</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="namaProgram" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Program <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="namaProgram"
                  placeholder="Masukkan nama program pelatihan" 
                  value={formData.namaProgram}
                  onChange={(e) => handleInputChange('namaProgram', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kategori" className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="kategori"
                  placeholder="Digital Marketing, Programming, Design, dll" 
                  value={formData.kategori}
                  onChange={(e) => handleInputChange('kategori', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="durasi" className="block text-sm font-medium text-gray-700 mb-2">
                  Durasi <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="durasi"
                  placeholder="4 minggu, 8 minggu, dll" 
                  value={formData.durasi}
                  onChange={(e) => handleInputChange('durasi', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kapasitas" className="block text-sm font-medium text-gray-700 mb-2">
                  Kapasitas Peserta <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="kapasitas"
                  type="number" 
                  placeholder="30" 
                  value={formData.kapasitas}
                  onChange={(e) => handleInputChange('kapasitas', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="instruktur" className="block text-sm font-medium text-gray-700 mb-2">
                  Instruktur
                </Label>
                <Input 
                  id="instruktur"
                  placeholder="Nama instruktur" 
                  value={formData.instruktur}
                  onChange={(e) => handleInputChange('instruktur', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="tanggalMulai" className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Mulai <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="tanggalMulai"
                  type="date" 
                  value={formData.tanggalMulai}
                  onChange={(e) => handleInputChange('tanggalMulai', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="tanggalSelesai" className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Selesai <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="tanggalSelesai"
                  type="date" 
                  value={formData.tanggalSelesai}
                  onChange={(e) => handleInputChange('tanggalSelesai', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lokasi" className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Pelatihan <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="lokasi"
                  placeholder="Jl. Sudirman No. 123, Jakarta Pusat" 
                  value={formData.lokasi}
                  onChange={(e) => handleInputChange('lokasi', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="modaPelatihan" className="block text-sm font-medium text-gray-700 mb-2">
                  Moda Pelatihan <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.modaPelatihan} onValueChange={(value) => handleInputChange('modaPelatihan', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih moda pelatihan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Luring">Luring</SelectItem>
                    <SelectItem value="Daring">Daring</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="biaya" className="block text-sm font-medium text-gray-700 mb-2">
                  Biaya (Rp)
                </Label>
                <Input 
                  id="biaya"
                  type="number" 
                  placeholder="0" 
                  value={formData.biaya}
                  onChange={(e) => handleInputChange('biaya', e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">Kosongkan atau isi 0 jika gratis</p>
              </div>
              <div>
                <Label htmlFor="sumberDana" className="block text-sm font-medium text-gray-700 mb-2">
                  Sumber Dana <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="sumberDana"
                  placeholder="APBN, APBD, Swasta, dll." 
                  value={formData.sumberDana}
                  onChange={(e) => handleInputChange('sumberDana', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Program <span className="text-red-500">*</span>
            </Label>
            <Textarea 
              id="deskripsi"
              rows={4}
              placeholder="Jelaskan detail program pelatihan, tujuan pembelajaran, target peserta, dan manfaat yang akan diperoleh..."
              value={formData.deskripsi}
              onChange={(e) => handleInputChange('deskripsi', e.target.value)}
            />
          </div>

          {/* Ragam Disabilitas */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-3">
              Ragam Disabilitas <span className="text-red-500">*</span>
            </Label>
            <p className="text-xs text-gray-500 mb-3">Berdasarkan UU No. 8 Tahun 2016 tentang Penyandang Disabilitas</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Penyandang Disabilitas Fisik',
                'Penyandang Disabilitas Intelektual',
                'Penyandang Disabilitas Mental',
                'Penyandang Disabilitas Sensorik'
              ].map((feature) => (
                <label key={feature} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    value={feature}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const currentFeatures = formData.aksesibilitas;
                      if (checked) {
                        setFormData(prev => ({
                          ...prev,
                          aksesibilitas: [...currentFeatures, feature]
                        }));
                      } else {
                        setFormData(prev => ({
                          ...prev,
                          aksesibilitas: currentFeatures.filter(f => f !== feature)
                        }));
                      }
                    }}
                  />
                  <span className="text-sm text-gray-700">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => handleSubmit(true)}
            >
              <Save className="mr-2" size={18} />
              Simpan sebagai Draft
            </Button>
            <Button 
              className="flex-1"
              onClick={() => handleSubmit(false)}
            >
              <Send className="mr-2" size={18} />
              Ajukan Program
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
} 