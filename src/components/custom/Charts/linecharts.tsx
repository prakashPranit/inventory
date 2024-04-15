"use client"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { DollarSign } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 400, pv: 2400, amt: 2400},
{name: 'Page C', uv: 500, pv: 3000, amt: 2400},
{name: 'Page D', uv: 700, pv: 4000, amt: 2400}
];



export default function RenderLineChart() {
  return (
 
      
      
<LineChart className='-ml-4 mt-4 sm: w-full'  width={300} height={135} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
      

  )
}


