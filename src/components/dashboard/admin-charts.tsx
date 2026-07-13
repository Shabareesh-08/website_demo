"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#2f6f62", "#3c8776", "#b08d45", "#2c4f7c", "#8a3a2e", "#cbab6a"];

export function RecoveryTrendChart({ data }: { data: { month: string; recovered: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="#e4e7e7" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#667085" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#667085" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${v}Cr`} />
        <Tooltip
          formatter={(value) => [`₹${Number(value)} Cr`, "Recovered"]}
          contentStyle={{ borderRadius: 8, border: "1px solid #e4e7e7", fontSize: 13 }}
        />
        <Bar dataKey="recovered" fill="#0b1f3a" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ClaimsCategoryChart({ data }: { data: { category: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="category" innerRadius={55} outerRadius={85} paddingAngle={2}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e4e7e7", fontSize: 13 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
