import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Phone,
    Mail,
    MapPin,
    Calendar,
    User,
    GraduationCap,
    Accessibility,
    UserCheck,
} from "lucide-react";
import Link from "next/link";

// Mock data - in a real app, this would come from an API
const getDataById = (id: string) => {
    const dataDisabilitas = [
        {
            id: "1",
            nama: "Ahmad Subandi",
            nik: "3171010101900001",
            jenisDisabilitas: "Tunanetra",
            alamat: "Jakarta Selatan",
            umur: 25,
            pendidikan: "SMA",
            telepon: "081234567890",
            email: "ahmad.subandi@email.com",
            status: "Aktif Mencari Kerja",
            tanggalDaftar: "15 Jan 2024",
        },
        {
            id: "2",
            nama: "Siti Maryam",
            nik: "3171010101900002",
            jenisDisabilitas: "Tunarungu",
            alamat: "Jakarta Timur",
            umur: 28,
            pendidikan: "D3",
            telepon: "081234567891",
            email: "siti.maryam@email.com",
            status: "Sedang Mengikuti Pelatihan",
            tanggalDaftar: "20 Jan 2024",
        },
        {
            id: "3",
            nama: "Budi Santoso",
            nik: "3171010101900003",
            jenisDisabilitas: "Tunadaksa",
            alamat: "Jakarta Pusat",
            umur: 32,
            pendidikan: "S1",
            telepon: "081234567892",
            email: "budi.santoso@email.com",
            status: "Sudah Bekerja",
            tanggalDaftar: "10 Jan 2024",
        },
        {
            id: "4",
            nama: "Rina Kusuma",
            nik: "3171010101900004",
            jenisDisabilitas: "Tunagrahita",
            alamat: "Jakarta Barat",
            umur: 24,
            pendidikan: "SMA",
            telepon: "081234567893",
            email: "rina.kusuma@email.com",
            status: "Aktif Mencari Kerja",
            tanggalDaftar: "25 Jan 2024",
        },
        {
            id: "5",
            nama: "Deni Pratama",
            nik: "3171010101900005",
            jenisDisabilitas: "Tunanetra",
            alamat: "Jakarta Utara",
            umur: 30,
            pendidikan: "D3",
            telepon: "081234567894",
            email: "deni.pratama@email.com",
            status: "Sedang Mengikuti Pelatihan",
            tanggalDaftar: "5 Feb 2024",
        },
    ];

    return dataDisabilitas.find((item) => item.id === id) || null;
};

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

export default async function DetailDisabilitas({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    const data = getDataById(resolvedParams.id);

    if (!data) {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <Link href="/upt-ppkd/data-disabilitas">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2" size={16} />
                            Kembali
                        </Button>
                    </Link>
                </div>

                <Card className="p-6">
                    <div className="text-center py-12">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            Data Tidak Ditemukan
                        </h2>
                        <p className="text-gray-600">
                            Penyandang disabilitas dengan ID {resolvedParams.id} tidak
                            ditemukan.
                        </p>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Detail Penyandang Disabilitas
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Informasi lengkap penyandang disabilitas
                    </p>
                </div>
                <Link href="/upt-ppkd/data-disabilitas">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2" size={16} />
                        Kembali
                    </Button>
                </Link>
            </div>

            {/* Detail Card */}
            <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Profile Section */}
                    <div className="md:col-span-1">
                        <div className="bg-gray-100 rounded-lg p-6 text-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900">
                                {data.nama}
                            </h3>
                            <p className="text-gray-600">ID: {data.id}</p>
                            <span
                                className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${getStatusColor(data.status)}`}
                            >
                                {data.status}
                            </span>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start">
                                <User className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Nama Lengkap</p>
                                    <p className="font-medium">{data.nama}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Accessibility className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Jenis Disabilitas</p>
                                    <p className="font-medium">{data.jenisDisabilitas}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <User className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Nomor Induk Kependudukan
                                    </p>
                                    <p className="font-medium">{data.nik}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <GraduationCap className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Pendidikan Terakhir</p>
                                    <p className="font-medium">{data.pendidikan}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Calendar className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Tanggal Pendaftaran</p>
                                    <p className="font-medium">{data.tanggalDaftar}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <UserCheck className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Usia</p>
                                    <p className="font-medium">{data.umur} tahun</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="text-gray-400 mr-3 mt-1" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Alamat</p>
                                    <p className="font-medium">{data.alamat}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <h4 className="font-medium text-gray-900 mb-3">Kontak</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start">
                                    <Phone className="text-gray-400 mr-3 mt-1" size={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Telepon</p>
                                        <p className="font-medium">{data.telepon}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="text-gray-400 mr-3 mt-1" size={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">{data.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
                <Button variant="outline">
                    <Phone className="mr-2" size={16} />
                    Telepon
                </Button>
                <Button variant="outline">
                    <Mail className="mr-2" size={16} />
                    Email
                </Button>
                <Button>Cetak Data</Button>
            </div>
        </div>
    );
}
