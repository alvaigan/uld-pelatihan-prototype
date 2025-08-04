'use client';

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ChevronUp,
  ChevronDown,
  Eye,
  BarChart3,
  Search,
  Filter,
  MapPin,
  BookOpen,
  Users,
  PlayCircle,
  Clock,
  CheckCircle,
  PauseCircle,
} from "lucide-react";

export interface Program {
  id: number;
  namaProgram: string;
  upt: string;
  wilayah: string;
  kategori: string;
  instruktur: string;
  kapasitas: number;
  terdaftar: number;
  aktif: number;
  lulus: number;
  dropout: number;
  tanggalMulai: string;
  tanggalSelesai: string;
  durasi: string;
  progress: number;
  status: string;
  tingkatKehadiran: number;
  tingkatKepuasan: number;
  biaya: number;
  aksesibilitas: string[];
  mingguKe: number;
}

interface DataTableProps {
  data: Program[];
  onViewDetail?: (program: Program) => void;
  onViewMonitoring?: (program: Program) => void;
}

export function DataTable({ data, onViewDetail, onViewMonitoring }: DataTableProps) {
  const [sortField, setSortField] = useState<keyof Program>('namaProgram');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Sedang Berjalan":
        return "bg-blue-100 text-blue-800";
      case "Hampir Selesai":
        return "bg-orange-100 text-orange-800";
      case "Selesai":
        return "bg-green-100 text-green-800";
      case "Pendaftaran":
        return "bg-purple-100 text-purple-800";
      case "Ditunda":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Sedang Berjalan":
        return <PlayCircle size={16} className="text-blue-600" />;
      case "Hampir Selesai":
        return <Clock size={16} className="text-orange-600" />;
      case "Selesai":
        return <CheckCircle size={16} className="text-green-600" />;
      case "Pendaftaran":
        return <Users size={16} className="text-purple-600" />;
      case "Ditunda":
        return <PauseCircle size={16} className="text-gray-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  const handleSort = (field: keyof Program) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedData = data
    .filter(program => {
      const matchesSearch = 
        program.namaProgram.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.upt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.instruktur.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    })
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

  const SortableHeader = ({ field, children }: { field: keyof Program; children: React.ReactNode }) => (
    <TableHead 
      className="cursor-pointer hover:bg-gray-50"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        {sortField === field && (
          sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
        )}
      </div>
    </TableHead>
  );

  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg border">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Cari nama program, UPT, atau instruktur..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2" size={16} />
            Filter
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <SortableHeader field="namaProgram">Nama Program</SortableHeader>
              <SortableHeader field="upt">UPT PPKD</SortableHeader>
              <SortableHeader field="wilayah">Wilayah</SortableHeader>
              <SortableHeader field="status">Status</SortableHeader>
              <SortableHeader field="progress">Progress</SortableHeader>
              <SortableHeader field="terdaftar">Peserta</SortableHeader>
              <SortableHeader field="tanggalMulai">Periode</SortableHeader>
              <TableHead>Aksesibilitas</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8">
                  <div className="flex flex-col items-center gap-2">
                    <BookOpen className="text-gray-400" size={48} />
                    <p className="text-gray-500">Tidak ada data program ditemukan</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedData.map((program) => (
                <TableRow key={program.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{program.namaProgram}</div>
                      <div className="text-sm text-gray-500">{program.kategori}</div>
                      <div className="text-sm text-gray-500">{program.instruktur}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium">{program.upt}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="text-sm">{program.wilayah}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(program.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(program.status)}
                        {program.status}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {(program.status === "Sedang Berjalan" || program.status === "Hampir Selesai") ? (
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{program.progress}%</div>
                        <Progress value={program.progress} className="h-1.5 w-16" />
                        <div className="text-xs text-gray-500">Minggu {program.mingguKe}</div>
                      </div>
                    ) : program.status === "Selesai" ? (
                      <div className="text-sm">
                        <div className="text-green-600 font-medium">100%</div>
                        <div className="text-xs text-gray-500">Selesai</div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">-</div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-blue-600 font-medium">{program.terdaftar}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">{program.kapasitas}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Aktif: {program.aktif}
                      </div>
                      {program.status === "Selesai" && (
                        <div className="text-xs">
                          <span className="text-green-600">Lulus: {program.lulus}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium">{program.tanggalMulai}</div>
                      <div className="text-gray-500">{program.tanggalSelesai}</div>
                      <div className="text-xs text-gray-400">{program.durasi}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {program.aksesibilitas.slice(0, 2).map((akses, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">
                          {akses}
                        </span>
                      ))}
                      {program.aksesibilitas.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                          +{program.aksesibilitas.length - 2}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onViewDetail?.(program)}
                      >
                        <Eye size={14} className="mr-1" />
                        Detail
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onViewMonitoring?.(program)}
                      >
                        <BarChart3 size={14} className="mr-1" />
                        Monitor
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Table Footer */}
      {filteredAndSortedData.length > 0 && (
        <div className="flex items-center justify-between text-sm text-gray-600 px-4 py-2">
          <div>
            Menampilkan {filteredAndSortedData.length} dari {data.length} program
          </div>
        </div>
      )}
    </div>
  );
}