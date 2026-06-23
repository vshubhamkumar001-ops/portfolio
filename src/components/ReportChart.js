"use client";

import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

export default function ReportChart({ tableData }) {
  const chartData = useMemo(() => {
    if (!tableData || tableData.length === 0) return null;

    // We'll create two types of charts based on what properties exist in the tableData
    const hasCapexPerTonne = tableData[0].capexPerTonne !== undefined;
    const hasCapacity = tableData[0].capacity !== undefined;

    if (hasCapexPerTonne) {
      // Parse data for CapEx per Tonne chart
      return {
        type: 'capex',
        title: 'Capital Expenditure (₹ Lakh / Tonne)',
        data: tableData.map(row => {
          // Extract numeric value from "₹16.7 lakh/tonne" or "₹10–13 lakh/tonne"
          let val = 0;
          if (row.capexPerTonne) {
            const match = row.capexPerTonne.match(/[\d.]+/);
            if (match) val = parseFloat(match[0]);
          }
          // Shorten project names for the X-axis
          let shortName = row.project.split('(')[0].split(',')[0].trim();
          if (shortName.length > 20) shortName = shortName.substring(0, 20) + '...';
          
          return {
            name: shortName,
            fullName: row.project,
            value: val,
            original: row.capexPerTonne
          };
        }).filter(d => d.value > 0)
      };
    } else if (hasCapacity) {
      // Parse data for Capacity chart
      return {
        type: 'capacity',
        title: 'Plant Capacity (Metric Tonnes)',
        data: tableData.map(row => {
          // Extract numeric value from "~13,000 MT" or "100,000+ MT"
          let val = 0;
          if (row.capacity) {
            const cleanStr = row.capacity.replace(/,/g, '');
            const match = cleanStr.match(/[\d.]+/);
            if (match) val = parseFloat(match[0]);
          }
          let shortName = row.project.split('(')[0].split(',')[0].trim();
          
          return {
            name: shortName,
            fullName: row.project,
            value: val,
            original: row.capacity
          };
        }).filter(d => d.value > 0)
      };
    }
    
    return null;
  }, [tableData]);

  if (!chartData || chartData.data.length === 0) return null;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ background: 'var(--bg-surface)', padding: '12px', border: '1px solid var(--border)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <p style={{ fontWeight: 600, marginBottom: '4px', color: 'var(--text-primary)' }}>{data.fullName}</p>
          <p style={{ color: 'var(--accent)', fontWeight: 500 }}>{data.original}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ margin: '40px 0', padding: '24px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
      <h3 style={{ fontSize: '18px', marginBottom: '24px', fontWeight: 600 }}>{chartData.title}</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData.data} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-light)" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'var(--text-muted)', fontSize: 12 }} 
              axisLine={false} 
              tickLine={false} 
              angle={-25}
              textAnchor="end"
            />
            <YAxis 
              tick={{ fill: 'var(--text-muted)', fontSize: 12 }} 
              axisLine={false} 
              tickLine={false} 
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-base)', opacity: 0.5 }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={60}>
              {chartData.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? "var(--accent)" : "var(--accent-light)"} opacity={index === 0 ? 1 : 0.6} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
