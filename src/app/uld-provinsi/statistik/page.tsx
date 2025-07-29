'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Award, 
  Building2,
  MapPin,
  Download,
  Calendar,
  Target,
  CheckCircle,
  AlertTriangle,
  GraduationCap,
  Briefcase,
  PieChart,
  LineChart
} from "lucide-react";
import { useState } from "react";

export default function StatistikProvinsi() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState("2024");

  // Provincial Overview Stats
  const provinsiStats = {
    totalUPT: 5,
    totalProgram: 47,
    totalPeserta: 1247,
    totalLulus: 634,
    tingkatKelulusan: 85.3,
    jobPlacementRate: 68.5,
    budgetAlokasi: 2500000000,
    budgetTerpakai: 1875000000
  };

  // Regional Performance Data
  const regionalData = [
    {
      wilayah: "Jakarta Selatan",
      upt: "UPT PPKD Jakarta Selatan",
      programAktif: 8,
      programSelesai: 12,
      totalPeserta: 234,
      pesertaLulus: 198,
      tingkatKelulusan: 89,
      tingkatKehadiran: 91,
      jobPlacement: 72,
      budget: 500000000,
      realisasi: 425000000,
      performance: "Excellent"
    },
    {
      wilayah: "Jakarta Timur", 
      upt: "UPT PPKD Jakarta Timur",
      programAktif: 12,
      programSelesai: 15,
      totalPeserta: 298,
      pesertaLulus: 267,
      tingkatKelulusan: 92,
      tingkatKehadiran: 94,
      jobPlacement: 78,
      budget: 600000000,
      realisasi: 540000000,
      performance: "Excellent"
    },
    {
      wilayah: "Jakarta Pusat",
      upt: "UPT PPKD Jakarta Pusat", 
      programAktif: 6,
      programSelesai: 8,
      totalPeserta: 178,
      pesertaLulus: 145,
      tingkatKelulusan: 85,
      tingkatKehadiran: 88,
      jobPlacement: 65,
      budget: 400000000,
      realisasi: 320000000,
      performance: "Good"
    },
    {
      wilayah: "Jakarta Barat",
      upt: "UPT PPKD Jakarta Barat",
      programAktif: 10,
      programSelesai: 13, 
      totalPeserta: 267,
      pesertaLulus: 218,
      tingkatKelulusan: 87,
      tingkatKehadiran: 89,
      jobPlacement: 69,
      budget: 550000000,
      realisasi: 467500000,
      performance: "Good"
    },
    {
      wilayah: "Jakarta Utara",
      upt: "UPT PPKD Jakarta Utara",
      programAktif: 7,
      programSelesai: 9,
      totalPeserta: 189,
      pesertaLulus: 156,
      tingkatKelulusan: 91,
      tingkatKehadiran: 93,
      jobPlacement: 74,
      budget: 450000000,
      realisasi: 382500000,
      performance: "Excellent"
    }
  ];

  // Program Category Performance
  const categoryStats = [
    {
      kategori: "Digital Marketing",
      totalProgram: 12,
      totalPeserta: 340,
      tingkatKelulusan: 87,
      avgSatisfaction: 4.6,
      jobPlacement: 75,
      trend: "up"
    },
    {
      kategori: "Programming",
      totalProgram: 15,
      totalPeserta: 425,
      tingkatKelulusan: 89,
      avgSatisfaction: 4.8,
      jobPlacement: 82,
      trend: "up"
    },
    {
      kategori: "Design",
      totalProgram: 8,
      totalPeserta: 210,
      tingkatKelulusan: 82,
      avgSatisfaction: 4.4,
      jobPlacement: 68,
      trend: "down"
    },
    {
      kategori: "Data Analysis",
      totalProgram: 6,
      totalPeserta: 150,
      tingkatKelulusan: 91,
      avgSatisfaction: 4.9,
      jobPlacement: 78,
      trend: "up"
    },
    {
      kategori: "Business Skills",
      totalProgram: 6,
      totalPeserta: 122,
      tingkatKelulusan: 78,
      avgSatisfaction: 4.2,
      jobPlacement: 58,
      trend: "down"
    }
  ];

  // Demographic Data
  const demographicData = {
    jenisDisabilitas: [
      { jenis: "Tunanetra", jumlah: 312, persentase: 25, trend: "+5%" },
      { jenis: "Tunarungu", jumlah: 287, persentase: 23, trend: "+8%" },
      { jenis: "Tunadaksa", jumlah: 374, persentase: 30, trend: "+3%" },
      { jenis: "Tunagrahita", jumlah: 186, persentase: 15, trend: "+12%" },
      { jenis: "Lainnya", jumlah: 88, persentase: 7, trend: "-2%" }
    ],
    kelompokUmur: [
      { range: "18-25", jumlah: 467, persentase: 37 },
      { range: "26-35", jumlah: 523, persentase: 42 },
      { range: "36-45", jumlah: 198, persentase: 16 },
      { range: "46+", jumlah: 59, persentase: 5 }
    ],
    pendidikan: [
      { level: "SMA/SMK", jumlah: 589, persentase: 47 },
      { level: "D3", jumlah: 374, persentase: 30 },
      { level: "S1", jumlah: 259, persentase: 21 },
      { level: "S2+", jumlah: 25, persentase: 2 }
    ]
  };

  // Monthly Trend Data
  const monthlyTrend = [
    { bulan: "Jan", pendaftar: 145, lulus: 120, penempatan: 82 },
    { bulan: "Feb", pendaftar: 162, lulus: 138, penempatan: 95 },
    { bulan: "Mar", pendaftar: 178, lulus: 152, penempatan: 104 },
    { bulan: "Apr", pendaftar: 134, lulus: 115, penempatan: 78 },
    { bulan: "May", pendaftar: 189, lulus: 161, penempatan: 112 },
    { bulan: "Jun", pendaftar: 201, lulus: 172, penempatan: 119 }
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "Excellent":
        return "bg-green-100 text-green-800";
      case "Good":
        return "bg-blue-100 text-blue-800";
      case "Average":
        return "bg-yellow-100 text-yellow-800";
      case "Poor":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? 
      <TrendingUp size={16} className="text-green-600" /> : 
      <TrendingDown size={16} className="text-red-600" />;
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Statistik Provinsi DKI Jakarta</h1>
          <p className="text-gray-600 mt-1">Comprehensive analytics dan performance metrics pelatihan disabilitas</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
          <TabsTrigger value="overview">Overview Provinsi</TabsTrigger>
          <TabsTrigger value="regional">Performa Regional</TabsTrigger>
          <TabsTrigger value="demografi">Analisis Demografi</TabsTrigger>
          <TabsTrigger value="trends">Trend & Forecast</TabsTrigger>
        </TabsList>

        {/* Tab: Overview Provinsi */}
        <TabsContent value="overview" className="space-y-6">
          {/* Key Provincial Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total UPT PPKD</p>
                  <p className="text-2xl font-bold text-gray-900">{provinsiStats.totalUPT}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <CheckCircle size={14} className="mr-1" />
                    Semua aktif
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Building2 className="text-blue-600" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Program</p>
                  <p className="text-2xl font-bold text-gray-900">{provinsiStats.totalProgram}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp size={14} className="mr-1" />
                    +18% YoY
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <BookOpen className="text-green-600" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Peserta</p>
                  <p className="text-2xl font-bold text-gray-900">{provinsiStats.totalPeserta.toLocaleString()}</p>
                  <p className="text-sm text-purple-600 flex items-center mt-1">
                    <Users size={14} className="mr-1" />
                    +23% YoY
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Users className="text-purple-600" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Tingkat Kelulusan</p>
                  <p className="text-2xl font-bold text-gray-900">{provinsiStats.tingkatKelulusan}%</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp size={14} className="mr-1" />
                    +2.1% YoY
                  </p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Award className="text-orange-600" size={24} />
                </div>
              </div>
            </Card>
          </div>

          {/* Provincial Performance Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Key Performance Indicators</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Job Placement Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-600">{provinsiStats.jobPlacementRate}%</span>
                    <TrendingDown size={16} className="text-red-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Rata-rata Kepuasan</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-green-600">4.6/5.0</span>
                    <TrendingUp size={16} className="text-green-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tingkat Kehadiran</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-purple-600">91%</span>
                    <TrendingUp size={16} className="text-green-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Budget Realization</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-orange-600">75%</span>
                    <TrendingUp size={16} className="text-green-500" />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Top Performing Categories</h3>
              <div className="space-y-3">
                {categoryStats.slice(0, 5).map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{category.kategori}</p>
                      <p className="text-sm text-gray-600">{category.totalPeserta} peserta</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-green-600">{category.tingkatKelulusan}%</span>
                        {getTrendIcon(category.trend)}
                      </div>
                      <p className="text-xs text-gray-500">Job: {category.jobPlacement}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Trend Visualization */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Trend Bulanan {selectedPeriod}</h3>
            <div className="grid grid-cols-6 gap-4">
              {monthlyTrend.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="space-y-2 mb-2">
                    <div className="flex flex-col items-center gap-1">
                      <div 
                        className="w-6 bg-blue-500 rounded-t"
                        style={{ height: `${(data.pendaftar / 250) * 60}px` }}
                        title={`Pendaftar: ${data.pendaftar}`}
                      ></div>
                      <div 
                        className="w-6 bg-green-500"
                        style={{ height: `${(data.lulus / 250) * 60}px` }}
                        title={`Lulus: ${data.lulus}`}
                      ></div>
                      <div 
                        className="w-6 bg-purple-500 rounded-b"
                        style={{ height: `${(data.penempatan / 250) * 60}px` }}
                        title={`Penempatan: ${data.penempatan}`}
                      ></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{data.bulan}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>Pendaftar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Lulus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span>Penempatan Kerja</span>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Performa Regional */}
        <TabsContent value="regional" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Performa UPT PPKD per Wilayah</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Wilayah</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Program</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Peserta</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Kelulusan</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Job Placement</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Budget</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {regionalData.map((region, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-2">
                        <div>
                          <p className="font-medium text-gray-900">{region.wilayah}</p>
                          <p className="text-sm text-gray-500">{region.upt}</p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-center">
                          <p className="font-bold text-blue-600">{region.programAktif}</p>
                          <p className="text-xs text-gray-500">Aktif</p>
                          <p className="text-xs text-gray-500">{region.programSelesai} Selesai</p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-center">
                          <p className="font-bold text-purple-600">{region.totalPeserta}</p>
                          <p className="text-xs text-gray-500">Total</p>
                          <p className="text-xs text-green-600">{region.pesertaLulus} Lulus</p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-green-600">{region.tingkatKelulusan}%</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${region.tingkatKelulusan}%` }}
                            ></div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Kehadiran: {region.tingkatKehadiran}%</p>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-center">
                          <p className="font-bold text-orange-600">{region.jobPlacement}%</p>
                          <p className="text-xs text-gray-500">Placed</p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div>
                          <p className="text-sm font-medium">Rp {(region.budget / 1000000).toFixed(0)}M</p>
                          <p className="text-xs text-gray-500">
                            {Math.round((region.realisasi / region.budget) * 100)}% realisasi
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <Badge className={getPerformanceColor(region.performance)}>
                          {region.performance}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Regional Comparison Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Tingkat Kelulusan per Wilayah</h3>
              <div className="space-y-3">
                {regionalData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 w-24">{region.wilayah.replace('Jakarta ', '')}</span>
                    <div className="flex-1 mx-3">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-green-500 h-3 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${region.tingkatKelulusan}%` }}
                        >
                          <span className="text-xs text-white font-medium">{region.tingkatKelulusan}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Job Placement Rate per Wilayah</h3>
              <div className="space-y-3">
                {regionalData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 w-24">{region.wilayah.replace('Jakarta ', '')}</span>
                    <div className="flex-1 mx-3">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-500 h-3 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${region.jobPlacement}%` }}
                        >
                          <span className="text-xs text-white font-medium">{region.jobPlacement}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Tab: Analisis Demografi */}
        <TabsContent value="demografi" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Breakdown by Disability Type */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Jenis Disabilitas</h3>
              <div className="space-y-3">
                {demographicData.jenisDisabilitas.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{item.jenis}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.jumlah}</span>
                        <span className={`text-xs ${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {item.trend}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${item.persentase * 3}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{item.persentase}% dari total</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Age Distribution */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Distribusi Usia</h3>
              <div className="space-y-3">
                {demographicData.kelompokUmur.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{item.range} tahun</span>
                      <span className="text-sm font-medium">{item.jumlah}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${item.persentase * 2}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{item.persentase}% dari total</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education Level */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Tingkat Pendidikan</h3>
              <div className="space-y-3">
                {demographicData.pendidikan.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{item.level}</span>
                      <span className="text-sm font-medium">{item.jumlah}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${item.persentase * 2}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{item.persentase}% dari total</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Demographic Insights */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Insights Demografis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">30%</p>
                <p className="text-sm text-blue-700">Tunadaksa</p>
                <p className="text-xs text-gray-600">Kelompok terbesar</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">42%</p>
                <p className="text-sm text-green-700">Usia 26-35</p>
                <p className="text-xs text-gray-600">Kelompok produktif</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">47%</p>
                <p className="text-sm text-purple-700">SMA/SMK</p>
                <p className="text-xs text-gray-600">Pendidikan dominan</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">+8%</p>
                <p className="text-sm text-orange-700">Growth Rate</p>
                <p className="text-xs text-gray-600">YoY participation</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Trends & Forecast */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Proyeksi Target 2024</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Target Peserta</span>
                    <span>1,500 / 1,247 (83%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Target Program</span>
                    <span>50 / 47 (94%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Target Kelulusan</span>
                    <span>85% / 85.3% (100%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Target Job Placement</span>
                    <span>70% / 68.5% (98%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Prediksi Trend 2025</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-800">Peningkatan Partisipasi</p>
                    <p className="text-sm text-green-600">Proyeksi +25% peserta</p>
                  </div>
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-800">Diversifikasi Program</p>
                    <p className="text-sm text-blue-600">15 kategori baru</p>
                  </div>
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-medium text-purple-800">Digital Transformation</p>
                    <p className="text-sm text-purple-600">80% program online</p>
                  </div>
                  <Target className="text-purple-600" size={24} />
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-orange-800">Job Market Integration</p>
                    <p className="text-sm text-orange-600">Target 75% placement</p>
                  </div>
                  <Briefcase className="text-orange-600" size={24} />
                </div>
              </div>
            </Card>
          </div>

          {/* Budget Analysis */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Analisis Budget & ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-lg font-bold text-gray-900">Rp 2.5B</p>
                <p className="text-sm text-gray-600">Total Budget</p>
                <p className="text-xs text-green-600">+15% dari 2023</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-lg font-bold text-gray-900">75%</p>
                <p className="text-sm text-gray-600">Budget Utilization</p>
                <p className="text-xs text-blue-600">Rp 1.875B terpakai</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-lg font-bold text-gray-900">Rp 2.9M</p>
                <p className="text-sm text-gray-600">Cost per Participant</p>
                <p className="text-xs text-orange-600">-8% dari target</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-lg font-bold text-gray-900">312%</p>
                <p className="text-sm text-gray-600">Estimated ROI</p>
                <p className="text-xs text-green-600">Job placement value</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 