"use client"

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Platform } from '@/lib/types';
import { YieldTime, getPerformance } from '@/lib/yields';
import { useInvestment } from '@/lib/context';

type Props = {
    data: Platform[];
}

export default function YieldTable({data}: Props) {
    const {investment} = useInvestment()
    return (
    <div className="flex flex-col">
          <h2>Con una inversión de {investment} obtienes: </h2>
          <Table>
            <TableHeader>
            <TableRow>
              <TableHead>Plataforma</TableHead>
              <TableHead>Moneda</TableHead>
              <TableHead>APY</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Rendimiento semanal</TableHead>
              <TableHead>Rendimiento mensual</TableHead>
              <TableHead>Rendimiento anual</TableHead>              
            </TableRow>
            </TableHeader>
        
        <TableBody>
          {data.map((platform) => (
            <TableRow key={platform.platform}>
              <TableCell>{platform.platform}</TableCell>
              <TableCell>{platform.currency}</TableCell>
              <TableCell>{platform.APY}%</TableCell>
              <TableCell>{platform.price ? Intl.NumberFormat('es-AR', {style: 'currency', currency: "ARS"}).format(platform.price) : "-"}</TableCell>
              <TableCell>{Intl.NumberFormat('es-AR', {style: 'currency', currency: platform.currency}).format(getPerformance(platform, investment, YieldTime.WEEK))}</TableCell>
              <TableCell>{Intl.NumberFormat('es-AR', {style: 'currency', currency: platform.currency}).format(getPerformance(platform, investment, YieldTime.MONTH))}</TableCell>
              <TableCell>{Intl.NumberFormat('es-AR', {style: 'currency', currency: platform.currency}).format(getPerformance(platform, investment, YieldTime.YEAR))}</TableCell>     
            </TableRow>  
          ))}
          
        </TableBody>

          </Table>
        </div>
   )
}