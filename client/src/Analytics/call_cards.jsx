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
  EllipsisVertical,
  Package2,
  UserRound,
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
const CallCards = () => {
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
         data:[Math.floor(Math.random() * 90) + 10, Math.floor(Math.random() * 80) + 20,Math.floor(Math.random() * 90) + 10 , Math.floor(Math.random() * 60) + 40,Math.floor(Math.random() * 90) + 10, Math.floor(Math.random() * 80) + 20,Math.floor(Math.random() * 90) + 10 , Math.floor(Math.random() * 60) + 40,Math.floor(Math.random() * 60) + 40],
          color: '#FF4B61'
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
        data: [Math.floor(Math.random() * 90) + 10, Math.floor(Math.random() * 80) + 20,Math.floor(Math.random() * 90) + 10 , Math.floor(Math.random() * 60) + 40],
        backgroundColor: [
          '#E83F54', // Food
          '#FFA5B0', // Apparels
          '#FF7998', // Electronics
          '#FF4B61', // Household
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
      <div className="w-full flex flex-col">

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
            <h1>Call categories</h1>
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
            <h1>Call Interactions</h1>
          </CardTitle>
        
      </Card>
  
      <Card x-chunk="dashboard-01-chunk-0 " className="h-[250px]  bg-[191919] border-none">
        <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
        
        </CardHeader>
        <CardContent>
        <div className="flex items-center justify-center w-full h-full">
            <div className="">
            <HorizontalBarChart data={[
                { label: 'A', percentage: Math.floor(Math.random() * 100) + 1, color: '#E83F54' },
                { label: 'B', percentage: Math.floor(Math.random() * 100) + 1, color: '#FF4B61' },
                { label: 'C', percentage: Math.floor(Math.random() * 100) + 1, color: '#FF7998' },
                { label: 'D', percentage: Math.floor(Math.random() * 100) + 1, color: '#FFA5B0' },
              ]}/>
            </div>
        </div>
        
        </CardContent>
        <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
            <h1>Call Follow-ups</h1>
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
            <h1>Call Active Leads</h1>
          </CardTitle>
        
      </Card>
      </div>
  
  

    <div className="flex w-full">
    <Card  x-chunk="dashboard-01-chunk-0" className="flex-1 mx-3 my-3 border-none p-3  shadow-xl">
        
          <div  className="flex flex-row justify-between p-3 ">
              <div className="flex">
                <div className="flex flex-col justify-center mr-2"> 
                 <UserRound />
                </div>
                <div>
                  <h1 className="font-bold my-1"> Important Calls</h1>
                  <p className="text-[10px] text-[#808281]  bg-gray my-1">Recent Chats</p>
                </div>
              </div>  
              <div className="flex flex-col justify-center">
                <h2 className="text-10px  underline">See all</h2>
              </div>
            </div>
          
          
          
          <ul>
            <li  className="flex flex-row justify-between p-2 bg-[#F4F5F7] rounded-xl my-2">
              <div className="flex items-center">
                <div className="flex flex-center flex-col items-center justify-center bg-[#D6D6D6] w-[50px] h-[50px] rounded-full"> 
                 <UserRound />
                </div>
                <div className="mx-2 flex flex-col justify-center">
                  
                  <h1 className="font-bold ">Jayanth</h1>
                  <p className="text-xs text-[#808281] font-bold bg-gray bold ">Business Call</p>
                 
                </div>
              </div>  
              <div className="flex flex-col justify-center">
              <EllipsisVertical />
              </div>
            </li>
            <li  className="flex flex-row justify-between p-2 bg-[#F4F5F7] rounded-xl my-2">
              <div className="flex items-center">
                <div className="flex flex-center flex-col items-center justify-center bg-[#D6D6D6] w-[50px] h-[50px] rounded-full"> 
                 <UserRound />
                </div>
                <div className="mx-2 flex flex-col justify-center">
                  
                  <h1 className="font-bold ">Teja</h1>
                  <p className="text-xs text-[#808281] font-bold bg-gray bold ">Personal Call</p>
                 
                </div>
              </div>  
              <div className="flex flex-col justify-center">
              <EllipsisVertical />
              </div>
            </li>
            <li  className="flex flex-row justify-between p-2 bg-[#F4F5F7] rounded-xl my-2">
              <div className="flex items-center">
                <div className="flex flex-center flex-col items-center justify-center bg-[#D6D6D6] w-[50px] h-[50px] rounded-full"> 
                 <UserRound />
                </div>
                <div className="mx-2 flex flex-col justify-center">
                  
                  <h1 className="font-bold ">john</h1>
                  <p className="text-xs text-[#808281] font-bold bg-gray bold ">Project Discussion</p>
                 
                </div>
              </div>  
              <div className="flex flex-col justify-center">
              <EllipsisVertical />
              </div>
            </li>
            <li  className="flex flex-row justify-between p-2 bg-[#F4F5F7] rounded-xl my-2">
              <div className="flex items-center">
                <div className="flex flex-center flex-col items-center justify-center bg-[#D6D6D6] w-[50px] h-[50px] rounded-full"> 
                 <UserRound />
                </div>
                <div className="mx-2 flex flex-col justify-center">
                  
                  <h1 className="font-bold ">Praveen</h1>
                  <p className="text-xs text-[#808281] font-bold bg-gray bold ">Gmeet</p>
                 
                </div>
              </div>  
              <div className="flex flex-col justify-center">
              <EllipsisVertical />
              </div>
            </li>

          </ul>
          
        </Card>
        <Card  x-chunk="dashboard-01-chunk-0" className="flex-1  mx-3 my-3 border-none p-3  shadow-xl">
        
        <div  className="flex flex-row justify-between p-3 ">
            <div className="flex">
              <div className="flex flex-col justify-center mr-2"> 
               <UserRound />
              </div>
              <div>
                <h1 className="font-bold my-1">Normal Calls</h1>
                <p className="text-[10px] text-[#808281]  bg-gray my-1">Recent Chats</p>
              </div>
            </div>  
            <div className="flex flex-col justify-center">
              <h2 className="text-10px  underline">See all</h2>
            </div>
          </div>
        
        
        
        <ul>
          <li  className="flex flex-row justify-between p-2 bg-[#F4F5F7] rounded-xl my-2">
            <div className="flex items-center">
              <div className="flex flex-center flex-col items-center justify-center bg-[#D6D6D6] w-[50px] h-[50px] rounded-full"> 
               <UserRound />
              </div>
              <div className="mx-2 flex flex-col justify-center">
                
                <h1 className="font-bold ">Prashanth</h1>
                <p className="text-xs text-[#808281] font-bold bg-gray bold ">Personal Call</p>
               
              </div>
            </div>  
            <div className="flex flex-col justify-center">
            <EllipsisVertical />
            </div>
          </li>
          <li  className="flex flex-row justify-between p-2 bg-[#F4F5F7] rounded-xl my-2">
            <div className="flex items-center">
              <div className="flex flex-center flex-col items-center justify-center bg-[#D6D6D6] w-[50px] h-[50px] rounded-full"> 
               <UserRound />
              </div>
              <div className="mx-2 flex flex-col justify-center">
                
                <h1 className="font-bold ">Thomas</h1>
                <p className="text-xs text-[#808281] font-bold bg-gray bold ">Project Discussion</p>
               
              </div>
            </div>  
            <div className="flex flex-col justify-center">
            <EllipsisVertical />
            </div>
          </li>
          <li  className="flex flex-row justify-between p-2 bg-[#F4F5F7] rounded-xl my-2">
            <div className="flex items-center">
              <div className="flex flex-center flex-col items-center justify-center bg-[#D6D6D6] w-[50px] h-[50px] rounded-full"> 
               <UserRound />
              </div>
              <div className="mx-2 flex flex-col justify-center">
                
                <h1 className="font-bold ">Micheal</h1>
                <p className="text-xs text-[#808281] font-bold bg-gray bold ">Project Discussion</p>
               
              </div>
            </div>  
            <div className="flex flex-col justify-center">
            <EllipsisVertical />
            </div>
          </li>
          <li  className="flex flex-row justify-between p-2 bg-[#F4F5F7] rounded-xl my-2">
            <div className="flex items-center">
              <div className="flex flex-center flex-col items-center justify-center bg-[#D6D6D6] w-[50px] h-[50px] rounded-full"> 
               <UserRound />
              </div>
              <div className="mx-2 flex flex-col justify-center">
                
                <h1 className="font-bold ">Ranjith</h1>
                <p className="text-xs text-[#808281] font-bold bg-gray bold ">Casual</p>
               
              </div>
            </div>  
            <div className="flex flex-col justify-center">
            <EllipsisVertical />
            </div>
          </li>

        </ul>
        
      </Card>
  </div>
  </div>
  
    )
  }

  export default CallCards;