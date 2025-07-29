'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Award, 
  BarChart3,
  PieChart,
  Download,
  Calendar,
  Filter,
  Target,
  Briefcase,
  GraduationCap,
  MapPin
} from "lucide-react";
import { useState } from "react";

export default function Statistik() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState("2024");

  // Data statistik overview
  const overviewStats = [
    {
      title: "Total Program",
      value: "47",
      change: "+15%",
      trend: "up",
      icon: BookOpen,
      color: "blue"
    },
    {
      title: "Total Peserta",
      value: "1,247",
      change: "+23%",
      trend: "up",
      icon: Users,
      color: "green"
    },
    {
      title: "Tingkat Kelulusan",
      value: "85.3%",
      change: "+2.1%",
      trend: "up",
      icon: Award,
      color: "purple"
    },
    {
      title: "Job Placement Rate",
      value: "68.5%",
      change: "-3.2%",
      trend: "down",
      icon: Briefcase,
      color: "orange"
    }
  ];

  // Data program berdasarkan kategori
  const programKategori = [
    { kategori: "Digital Marketing", jumlah: 12, peserta: 340, kelulusan: 87 },
    { kategori: "Programming", jumlah: 15, peserta: 425, kelulusan: 89 },
    { kategori: "Design", jumlah: 8, peserta: 210, kelulusan: 82 },
    { kategori: "Data Analysis", jumlah: 6, peserta: 150, kelulusan: 91 },
    { kategori: "Business Skills", jumlah: 6, peserta: 122, kelulusan: 78 }
  ];

  // Data trend bulanan
  const trendBulanan = [
    { bulan: "Jan", pendaftar: 145, lulus: 120, bekerja: 82 },
    { bulan: "Feb", pendaftar: 162, lulus: 138, bekerja: 95 },
    { bulan: "Mar", pendaftar: 178, lulus: 152, bekerja: 104 },
    { bulan: "Apr", pendaftar: 134, lulus: 115, bekerja: 78 },
    { bulan: "May", pendaftar: 189, lulus: 161, bekerja: 112 },
    { bulan: "Jun", pendaftar: 201, lulus: 172, bekerja: 119 }
  ];

  // Data berdasarkan jenis disabilitas
  const dataDisabilitas = [
    { jenis: "Tunanetra", jumlah: 312, persentase: 25 },
    { jenis: "Tunarungu", jumlah: 287, persentase: 23 },
    { jenis: "Tunadaksa", jumlah: 374, persentase: 30 },
    { jenis: "Tunagrahita", jumlah: 186, persentase: 15 },
    { jenis: "Lainnya", jumlah: 88, persentase: 7 }
  ];

  const getColorByIndex = (index: number) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500'];
    return colors[index % colors.length];
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? <TrendingUp size={16} className="text-green-600" /> : <TrendingDown size={16} className="text-red-600" />;
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Statistik & Analitik</h1>
          <p className="text-gray-600 mt-1">Data dan statistik pelaksanaan pelatihan kerja</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          <Button variant="outline">
            <Download className="mr-2" size={18} />
            Export Laporan
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="program">Program</TabsTrigger>
          <TabsTrigger value="peserta">Peserta</TabsTrigger>
          <TabsTrigger value="kinerja">Kinerja</TabsTrigger>
        </TabsList>

        {/* Tab: Overview */}
        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewStats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <div className={`flex items-center mt-1 ${getTrendColor(stat.trend)}`}>
                      {getTrendIcon(stat.trend)}
                      <span className="text-sm ml-1">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                    <stat.icon className={`text-${stat.color}-600`} size={24} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trend Chart */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Trend Bulanan 2024</h3>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Pendaftar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Lulus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Bekerja</span>
                </div>
              </div>
            </div>
            
            <div className="h-80 relative">
              {/* Simple bar chart representation */}
              <div className="flex items-end justify-between h-full gap-2">
                {trendBulanan.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col items-center gap-1">
                      <div 
                        className="w-4 bg-purple-500 rounded-t"
                        style={{ height: `${(data.bekerja / 250) * 100}%` }}
                        title={`Bekerja: ${data.bekerja}`}
                      ></div>
                      <div 
                        className="w-4 bg-green-500"
                        style={{ height: `${(data.lulus / 250) * 100}%` }}
                        title={`Lulus: ${data.lulus}`}
                      ></div>
                      <div 
                        className="w-4 bg-blue-500 rounded-b"
                        style={{ height: `${(data.pendaftar / 250) * 100}%` }}
                        title={`Pendaftar: ${data.pendaftar}`}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.bulan}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Distribusi Jenis Disabilitas</h3>
              <div className="space-y-3">
                {dataDisabilitas.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${getColorByIndex(index)}`}></div>
                      <span className="text-sm text-gray-700">{item.jenis}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">{item.jumlah}</span>
                      <span className="text-xs text-gray-500">({item.persentase}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Top Performing Programs</h3>
              <div className="space-y-3">
                {programKategori.slice(0, 5).map((program, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{program.kategori}</p>
                      <p className="text-sm text-gray-600">{program.peserta} peserta</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{program.kelulusan}%</p>
                      <p className="text-xs text-gray-500">kelulusan</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Tab: Program */}
        <TabsContent value="program" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Statistik Program Pelatihan</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Kategori</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Jumlah Program</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Total Peserta</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Tingkat Kelulusan</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {programKategori.map((program, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-2 font-medium text-gray-900">{program.kategori}</td>
                      <td className="py-4 px-2 text-gray-700">{program.jumlah}</td>
                      <td className="py-4 px-2 text-gray-700">{program.peserta}</td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{program.kelulusan}%</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-20">
                            <div 
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${program.kelulusan}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <Badge className={program.kelulusan >= 85 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                          {program.kelulusan >= 85 ? "Excellent" : "Good"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Peserta */}
        <TabsContent value="peserta" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Peserta Berdasarkan Usia</h3>
              <div className="space-y-3">
                {[
                  { range: "18-25 tahun", jumlah: 467, persentase: 37 },
                  { range: "26-35 tahun", jumlah: 523, persentase: 42 },
                  { range: "36-45 tahun", jumlah: 198, persentase: 16 },
                  { range: "46+ tahun", jumlah: 59, persentase: 5 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.range}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${item.persentase * 2}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-12">{item.jumlah}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Peserta Berdasarkan Pendidikan</h3>
              <div className="space-y-3">
                {[
                  { level: "SMA/SMK", jumlah: 589, persentase: 47 },
                  { level: "D3", jumlah: 374, persentase: 30 },
                  { level: "S1", jumlah: 259, persentase: 21 },
                  { level: "S2+", jumlah: 25, persentase: 2 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.level}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${item.persentase * 2}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-12">{item.jumlah}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Tab: Kinerja */}
        <TabsContent value="kinerja" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Target className="text-green-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Target vs Realisasi</h3>
                  <p className="text-sm text-gray-600">2024</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Peserta</span>
                    <span>1,247 / 1,500</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Program</span>
                    <span>47 / 50</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Job Placement</span>
                    <span>68.5% / 70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Award className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Pencapaian KPI</h3>
                  <p className="text-sm text-gray-600">Kuartal 2</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tingkat Kehadiran</span>
                  <Badge className="bg-green-100 text-green-800">92%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Kepuasan Peserta</span>
                  <Badge className="bg-green-100 text-green-800">4.7/5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Completion Rate</span>
                  <Badge className="bg-yellow-100 text-yellow-800">85%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Time</span>
                  <Badge className="bg-green-100 text-green-800">&lt; 24h</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Briefcase className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Job Placement</h3>
                  <p className="text-sm text-gray-600">6 bulan terakhir</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">854</p>
                  <p className="text-sm text-gray-600">total ditempatkan</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="font-medium">423</p>
                    <p className="text-gray-600">Full-time</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="font-medium">431</p>
                    <p className="text-gray-600">Part-time</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 