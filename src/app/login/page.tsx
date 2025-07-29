'use client';
// Login page styled to match https://v0-nexjs-ui-design.vercel.app/auth/login and provided screenshot
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [userType, setUserType] = useState<string>("");
  const [email, setEmail] = useState<string>("asdfasdf@mail.com");
  const [password, setPassword] = useState<string>("password");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!userType) {
      alert("Silakan pilih tipe pengguna");
      return;
    }
    
    if (!email || !password) {
      alert("Email dan password harus diisi");
      return;
    }

    // Route based on user type
    switch (userType) {
      case "pencari-kerja":
        router.push("/pencari-kerja/dashboard");
        break;
      case "upt-ppkd":
        router.push("/upt-ppkd/dashboard");
        break;
      case "uld-provinsi":
        router.push("/uld-provinsi/dashboard");
        break;
      default:
        alert("Tipe pengguna tidak valid");
    }
  };
  return (
    <div className="min-h-screen flex">
      {/* Left: Info Section */}
      <div className="hidden md:flex flex-col justify-center w-1/2 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] text-white px-16">
        <h1 className="text-3xl font-bold mb-4">Platform<br/>Ketenagakerjaan Inklusif</h1>
        <p className="mb-6 text-lg">Menghubungkan talenta penyandang disabilitas dengan peluang kerja yang inklusif</p>
        <ul className="space-y-2 text-base list-disc list-inside">
          <li>Akses mudah untuk semua pengguna</li>
          <li>Peluang kerja yang beragam</li>
          <li>Dukungan ULD terpercaya</li>
        </ul>
      </div>
      {/* Right: Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-[#f5f7fd] min-h-screen">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold mb-1">Masuk ke Akun</CardTitle>
            <p className="text-muted-foreground text-sm">Masukkan kredensial Anda untuk mengakses platform</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="userType">Tipe Pengguna</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger id="userType" className="mt-1 w-full">
                    <SelectValue placeholder="Pilih tipe pengguna" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pencari-kerja">Pencari Kerja</SelectItem>
                    <SelectItem value="upt-ppkd">UPT PPKD</SelectItem>
                    <SelectItem value="uld-provinsi">ULD Provinsi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Email" 
                  className="mt-1" 
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Password" 
                    className="mt-1 pr-10" 
                    value={password || ""}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* Eye icon placeholder */}
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </span>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">Lupa password?</a>
              </div>
              <Button type="submit" className="w-full mt-2 bg-[#3b82f6] hover:bg-[#2563eb]">Masuk</Button>
            </form>
            <div className="mt-6 text-center text-sm">
              Belum punya akun?
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  {/* User icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9.004 9.004 0 0112 15c2.003 0 3.867.658 5.293 1.764M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Daftar sebagai Penyandang Disabilitas
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  {/* Building icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21V7a2 2 0 012-2h2a2 2 0 012 2v14M13 21V3a2 2 0 012-2h2a2 2 0 012 2v18M9 21h6" /></svg>
                  Daftar sebagai Perusahaan
                </Button>
              </div>
              <Link href="/" className="block mt-4 text-gray-400 hover:underline">&larr; Kembali ke Beranda</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 