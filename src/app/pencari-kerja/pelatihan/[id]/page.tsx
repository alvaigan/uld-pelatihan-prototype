'use client';
import { useParams, useRouter } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";

const pelatihanList = [
  {
    id: 1,
    title: "Digital Marketing untuk Pemula",
    provider: "Lembaga Pelatihan Digital",
    desc: "Pelajari dasar-dasar digital marketing termasuk SEO, social media marketing, dan content marketing.",
    tags: ["SEO", "Social Media", "Content Marketing", "+1"],
    rating: 4.8,
    peserta: 1250,
    durasi: "4 minggu",
    mulai: "1/2/2024",
    mode: "Online",
    akses: ["Screen Reader Compatible", "Subtitle Available", "Sign Language"],
    price: 0,
    badge: "Gratis",
    kurikulum: [
      "Pengenalan Digital Marketing",
      "SEO Dasar",
      "Social Media Marketing",
      "Content Marketing",
      "Studi Kasus & Praktek"
    ],
    capaian: [
      "Memahami konsep dasar digital marketing",
      "Mampu mengelola kampanye media sosial",
      "Mampu membuat konten pemasaran yang efektif"
    ],
    benefit: [
      "E-sertifikat",
      "Akses materi selamanya",
      "Bimbingan mentor"
    ]
  },
  {
    id: 2,
    title: "Pemrograman Web dengan HTML & CSS",
    provider: "Coding Academy Indonesia",
    desc: "Belajar membuat website dari nol menggunakan HTML dan CSS dengan pendekatan yang mudah dipahami.",
    tags: ["HTML", "CSS", "Responsive Design", "+1"],
    rating: 4.9,
    peserta: 890,
    durasi: "6 minggu",
    mulai: "5/2/2024",
    mode: "Hybrid",
    akses: ["Screen Reader Compatible", "Large Text Support", "Keyboard Navigation"],
    price: 500000,
    badge: "Rp 500.000",
    kurikulum: [
      "Dasar HTML",
      "Dasar CSS",
      "Responsive Design",
      "Membuat Website Portfolio"
    ],
    capaian: [
      "Mampu membuat halaman web statis",
      "Mampu mengatur layout dan style dengan CSS",
      "Mampu membuat website responsif"
    ],
    benefit: [
      "E-sertifikat",
      "Akses grup diskusi",
      "Project akhir"
    ]
  },
  {
    id: 3,
    title: "Desain Grafis dengan Adobe Photoshop",
    provider: "Creative Design Institute",
    desc: "Kuasi teknik desain grafis profesional menggunakan Adobe Photoshop untuk berbagai kebutuhan.",
    tags: ["Adobe Photoshop", "Graphic Design", "Photo Editing", "+1"],
    rating: 4.7,
    peserta: 650,
    durasi: "8 minggu",
    mulai: "10/2/2024",
    mode: "Offline",
    akses: ["High Contrast Mode", "Voice Commands", "Tactile Feedback"],
    price: 750000,
    badge: "Rp 750.000",
    kurikulum: [
      "Pengenalan Photoshop",
      "Dasar Editing Foto",
      "Desain Poster & Banner",
      "Studi Kasus Desain"
    ],
    capaian: [
      "Mampu mengoperasikan Adobe Photoshop",
      "Mampu membuat desain grafis sederhana",
      "Mampu melakukan editing foto dasar"
    ],
    benefit: [
      "E-sertifikat",
      "Akses lab komputer",
      "Portofolio desain"
    ]
  },
];

export default function PelatihanDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const pelatihan = pelatihanList.find((p) => p.id === Number(id));

  if (!pelatihan) return <div className="text-center py-20">Program pelatihan tidak ditemukan.</div>;

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <Button variant="ghost" className="w-fit mb-2" onClick={() => router.push('/pencari-kerja/pelatihan')}><ArrowLeft className="mr-2" size={18}/> Kembali ke Program Pelatihan</Button>
      {/* Greeting Card */}
      <Card className="p-8 flex flex-col gap-4 shadow-md border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <div className="text-2xl font-bold mb-1">{pelatihan.title}</div>
            <div className="text-sm text-gray-500 mb-2">{pelatihan.provider}</div>
          </div>
          <div className="flex flex-col md:items-end gap-2 min-w-[120px]">
            <span className={`text-xs px-3 py-1 rounded-lg font-semibold w-fit ${pelatihan.price === 0 ? "bg-green-500 text-white" : "bg-green-100 text-green-800"}`}>{pelatihan.badge}</span>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full md:w-auto px-8 py-2 mt-2">
              <Link href={`/pencari-kerja/pendaftaran?id=${pelatihan.id}`}>Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
        <div className="text-gray-700 text-base mb-2">{pelatihan.desc}</div>
        <div className="flex flex-wrap gap-2 mb-2">
          {pelatihan.tags.map((tag, i) => (
            <Badge key={i} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-2">
          <span className="flex items-center gap-1"><Users size={16}/> {pelatihan.peserta} peserta</span>
          <span className="flex items-center gap-1"><Clock size={16}/> {pelatihan.durasi}</span>
          <span className="flex items-center gap-1"><Calendar size={16}/> Mulai: {pelatihan.mulai}</span>
          <span className="flex items-center gap-1"><Globe size={16}/> {pelatihan.mode}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {pelatihan.akses.map((a, i) => (
            <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full border border-gray-300">{a}</span>
          ))}
        </div>
      </Card>
      {/* Section detail */}
      <div className="bg-white rounded-xl shadow p-8 flex flex-col gap-8 border border-gray-100">
        <div>
          <div className="font-bold text-lg mb-2">Kurikulum</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {pelatihan.kurikulum.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div>
          <div className="font-bold text-lg mb-2">Capaian Pembelajaran</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {pelatihan.capaian.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div>
          <div className="font-bold text-lg mb-2">Benefit</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {pelatihan.benefit.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
} 