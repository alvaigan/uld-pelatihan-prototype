import React from 'react';
import DetailProgramPelatihanClient from './detail-client';

export default async function DetailProgramPelatihan({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  return <DetailProgramPelatihanClient id={resolvedParams.id} />;
}