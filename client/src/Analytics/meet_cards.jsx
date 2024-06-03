import { Link } from "react-router-dom";
import Gmail_logo from "../../public/gmail_icon.png";
import meet_logo from "../../public/meet_icon.png"
import calender_logo from "../../public/calender_icon.png"
import call_logo from "../../public/call_icon.png"
import whatsapp_logo from "../../public/whatsapp_icon.png"

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Circle,
  CircleCheck,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"

import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ReactApexCharts from 'react-apexcharts';
// import { HorizontalBarChart } from "../components/argraphAnalytics/analyticsbar.jsx";
// import HorizontalBarChart from "../components/argraphAnalytics/analyticsbar.jsx";
// Register necessary chart.js components and plugins
import HorizontalBarChart from "@/components/bargraphAnalytics/analyticsbar.jsx";

import Combobox from "../components/ui/combobox.jsx"


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const MeetCards = () => {
  
    const MyChart = () => {
      const options = {
        chart: {
          type: 'line',
          height: '100%',
          width: '100%',
          toolbar: {
            show: false // Hides the default toolbar
          }
        },
        series: [{
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          color: '#905CD6'
        }],
        xaxis: {
          labels: {
            show: false
          },
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
              show: false
            },
          axisBorder: {
              show: true
            },
        },
        grid: {
          show: false
        },
        tooltip: {
          enabled: false
        },
        title: {
          text: undefined
        },
        subtitle: {
          text: undefined
        },
        legend: {
          show: false
        }
      };
    
      return (
        <div id="chart" className="h-[120px] w-[120px]">
          <ReactApexCharts options={options} series={options.series} type="line" height="100%" width="100%" />
        </div>
      );
    }
  
    const frameworks = [
      {
        value: "gmail",
        label: "Gmail",
      },
      {
        value: "calender",
        label: "Calender",
      },
      {
        value: "whatsapp",
        label: "Whatsapp",
      },
      {
        value: "gmeet",
        label: "Gmeet",
      },
      {
        value: "call",
        label: "Call",
      },
    ]
    const data = {
      labels: ['Food', 'Apparels', 'Electronics', 'Household'],
      datasets: [{
        data: [49, 25, 18, 8],
        backgroundColor: [
          '#905CD6', // Food
          '#C7ADEB', // Apparels
          '#E3D6F5', // Electronics
          '#F7ADEB', // Household
        ],
        hoverOffset: 4,
      }],
    };
    
    const options = {
      cutout: '70%', // Adjust this value to control the size of the blank center
      plugins: {
        legend: {
          display: false, // Hide the default legend
        },
        datalabels: {
          color: 'white', // Color of the labels
          font: {
            weight: 'bold',
            size: 6,
          },
          formatter: (value, context) => {
            let label = context.chart.data.labels[context.dataIndex];
            return `${label}, ${value}%`; // Show the label and value (percentage) in the label
          },
          anchor: 'end',
          align: 'end',
          offset: 3,
          textAlign: 'left',
          borderRadius: 4,
          
          borderWidth: 1,
          backgroundColor: 'transparent',
          padding: 1,
        },
        tooltip: {
          enabled: false, // Disable tooltips
        },
      },
      elements: {
        arc: {
          borderWidth: 1, // Set the width of the border
          borderColor: 'white', // Set the color of the border
        }
      },
    };
  
    return(
      <div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4">
      <Card  x-chunk="dashboard-01-chunk-0" className="h-[250px]  bg-[191919] border-none">
        <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
        </CardHeader>
        <CardContent>
        <div className="flex items-center justify-center ">
            <div className="h-[120px] w-[120px]">
            <Doughnut 
              data={data} 
              options={options} 
              height={60}
              width={60}
              />
            </div>
        </div>
        
        </CardContent>
        <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
            <h1>Meet categories</h1>
          </CardTitle>
        
      </Card>
      <Card x-chunk="dashboard-01-chunk-0"  className="h-[250px]  bg-[191919] border-none">
        <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
       
        </CardHeader>
        <CardContent>
        <div className="flex items-center justify-center w-full h-full">
            <div>
            <MyChart />
  
            </div>
        </div>
        
        </CardContent>
        <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
            <h1>Meet Interactions</h1>
          </CardTitle>
        
      </Card>
  
      <Card x-chunk="dashboard-01-chunk-0 " className="h-[250px]  bg-[191919] border-none">
        <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
        
        </CardHeader>
        <CardContent>
        <div className="flex items-center justify-center w-full h-full">
            <div className="">
            <HorizontalBarChart data={[
                { label: 'A', percentage: 53, color: '#905CD6' },
                { label: 'B', percentage: 21, color: '#905CD6' },
                { label: 'C', percentage: 82, color: '#905CD6' },
                { label: 'D', percentage: 58, color: '#905CD6' },
              ]}/>
            </div>
        </div>
        
        </CardContent>
        <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
            <h1>Meet Follow-ups</h1>
          </CardTitle>
        
      </Card>
      <Card x-chunk="dashboard-01-chunk-0"  className="h-[250px]  bg-[191919] border-none">
        <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
       
        </CardHeader>
        <CardContent>
        <div className="flex items-center justify-center w-full h-full">
            <div>
            <MyChart />
  
            </div>
        </div>
        
        </CardContent>
        <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
            <h1>Meet Active Leads</h1>
          </CardTitle>
        
      </Card>

  
  
  </div>
  <Card className="w-[100%] mt-16 rounded-full"> 
  <div class="w-full flex rounded-xl relative rounded-full">
  <div class="flex-1 h-6 bg-[#E9DAFF]  flex items-center justify-center text-center relative rounded-l-xl rounded-r">
  <span class=" absolute text-xs font-bold text-purple font-sans top-7">8am</span>

  </div>
  <div class="flex-1 h-6 bg-[#FFFFFF] relative">
    <span class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity">Orange</span>
  </div>
  <div class="flex-1 h-6 bg-[#7C55B6] relative rounded-l">
    <span class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity">Yellow</span>
  </div>
  <div class="flex-1 h-6 bg-[#8F64CF] relative rounded-r">
    <span class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity">Green</span>
  </div>
  <div class="flex-1 h-6 bg-[#FFFFF] flex items-center justify-center text-center relative rounded-l">
    <span class="text-xs font-bold text-purple font-sans absolute top-7">Lunch Break</span>
</div>

  <div class="flex-1 h-6 bg-[#C099FA] relative rounded-l">
    <span class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity">Indigo</span>
  </div>
  <div class="flex-1 h-6 bg-[#D8BDFF] relative flex items-center justify-center text-center  rounded-r-xl">
  <span class="text-xs font-bold text-purple font-sans absolute top-7"></span>

  </div>
</div>

      </Card>
  </div>
    )
  }

  export default MeetCards;