"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function CommissionChart({ data }: { data: { month: string; amount: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="#e4e7e7" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#667085" }} axisLine={false} tickLine={false} />
        <YAxis
          tick={{ fontSize: 12, fill: "#667085" }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `₹${v / 1000}k`}
        />
        <Tooltip
          formatter={(value) => [`₹${Number(value).toLocaleString("en-IN")}`, "Commission"]}
          contentStyle={{ borderRadius: 8, border: "1px solid #e4e7e7", fontSize: 13 }}
        />
        <Bar dataKey="amount" fill="#2f6f62" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
