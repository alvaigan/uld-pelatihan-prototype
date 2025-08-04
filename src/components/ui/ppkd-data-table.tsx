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
import {
  ChevronUp,
  ChevronDown,
  Eye,
  Edit,
  Search,
  Filter,
  Phone,
  Mail,
  Building2,
  Award,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileCheck,
  Star
} from "lucide-react";

export interface PPKD {
  id: number;
  nama: string;
  kode: string;
  alamat: string;
  wilayah: string;
  kecamatan: string;
  kelurahan: string;
  koordinat: {
    lat: number;
    lng: number;
  };
  kontak: {
    telepon: string;
    email: string;
    website?: string;
  };
  kepala: {
    nama: string;
    nip: string;
    telepon: string;
  };
  staff: {
    total: number;
    instruktur: number;
    admin: number;
  };
  fasilitas: {
    ruangKelas: number;
    laboratorium: number;
    perpustakaan: boolean;
    aksesibilitas: string[];
  };
  program: {
    aktif: number;
    selesai: number;
    total: number;
  };
  peserta: {
    aktif: number;
    alumni: number;
    total: number;
  };
  status: 'Aktif' | 'Pending' | 'Tidak Aktif' | 'Review';
  akreditasi: 'A' | 'B' | 'C' | 'Belum Terakreditasi';
  tanggalBerdiri: string;
  tanggalDaftar: string;
  rating: number;
  catatanAdmin: string;
}

interface PPKDDataTableProps {
  data: PPKD[];
  onViewDetail?: (ppkd: PPKD) => void;
  onEdit?: (ppkd: PPKD) => void;
  onApprove?: (ppkd: PPKD) => void;
}

export function PPKDDataTable({ data, onViewDetail, onEdit, onApprove }: PPKDDataTableProps) {
  const [sortField, setSortField] = useState<keyof PPKD>('nama');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Review":
        return "bg-blue-100 text-blue-800";
      case "Tidak Aktif":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aktif":
        return <CheckCircle size={14} />;
      case "Pending":
        return <Clock size={14} />;
      case "Review":
        return <AlertTriangle size={14} />;
      case "Tidak Aktif":
        return <XCircle size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  const getAkreditasiColor = (akreditasi: string) => {
    switch (akreditasi) {
      case "A":
        return "bg-green-100 text-green-800";
      case "B":
        return "bg-blue-100 text-blue-800";
      case "C":
        return "bg-yellow-100 text-yellow-800";
      case "Belum Terakreditasi":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSort = (field: keyof PPKD) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedData = data
    .filter(ppkd => {
      const matchesSearch = 
        ppkd.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ppkd.wilayah.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ppkd.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ppkd.kepala.nama.toLowerCase().includes(searchTerm.toLowerCase());
      
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

  const SortableHeader = ({ field, children }: { field: keyof PPKD; children: React.ReactNode }) => (
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
              placeholder="Cari nama PPKD, wilayah, kode, atau kepala..." 
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
              <SortableHeader field="nama">PPKD</SortableHeader>
              <SortableHeader field="wilayah">Wilayah</SortableHeader>
              <SortableHeader field="status">Status</SortableHeader>
              <SortableHeader field="akreditasi">Akreditasi</SortableHeader>
              <TableHead>Kepala</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Peserta</TableHead>
              <TableHead>Kontak</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8">
                  <div className="flex flex-col items-center gap-2">
                    <Building2 className="text-gray-400" size={48} />
                    <p className="text-gray-500">Tidak ada data PPKD ditemukan</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedData.map((ppkd) => (
                <TableRow key={ppkd.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{ppkd.nama}</div>
                      <div className="text-sm text-gray-500">{ppkd.kode}</div>
                      {ppkd.rating > 0 && (
                        <div className="flex items-center gap-1 text-sm text-yellow-600">
                          <Star size={12} className="fill-current" />
                          <span>{ppkd.rating}/5.0</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium">{ppkd.wilayah}</div>
                      <div className="text-gray-500">{ppkd.kecamatan}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(ppkd.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(ppkd.status)}
                        {ppkd.status}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getAkreditasiColor(ppkd.akreditasi)}>
                      <Award size={12} className="mr-1" />
                      {ppkd.akreditasi}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium">{ppkd.kepala.nama}</div>
                      <div className="text-gray-500">{ppkd.kepala.nip}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-orange-600 font-medium">{ppkd.program.aktif}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">{ppkd.program.total}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Aktif/Total
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-blue-600 font-medium">{ppkd.peserta.aktif}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">{ppkd.peserta.total}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Aktif/Total
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center gap-1">
                        <Phone size={12} className="text-gray-400" />
                        <span className="text-gray-600">{ppkd.kontak.telepon}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail size={12} className="text-gray-400" />
                        <span className="text-gray-600 truncate max-w-32">{ppkd.kontak.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onViewDetail?.(ppkd)}
                      >
                        <Eye size={14} className="mr-1" />
                        Detail
                      </Button>
                      {ppkd.status === "Pending" && (
                        <Button 
                          size="sm"
                          onClick={() => onApprove?.(ppkd)}
                        >
                          <FileCheck size={14} className="mr-1" />
                          Approve
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onEdit?.(ppkd)}
                      >
                        <Edit size={14} className="mr-1" />
                        Edit
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
            Menampilkan {filteredAndSortedData.length} dari {data.length} PPKD
          </div>
        </div>
      )}
    </div>
  );
}