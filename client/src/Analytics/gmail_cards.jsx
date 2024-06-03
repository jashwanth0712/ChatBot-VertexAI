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
import { useState, useEffect } from "react";

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
const GmailCards = () => {
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
          color: '#fecc07'
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
          '#FFCD04', // Food
          '#D6AE0E', // Apparels
          '#FFEB9B', // Electronics
          '#FAF2D5', // Household
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
    const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/emails", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Assuming the access token is stored in localStorage
          },
        });
        setEmails(response.data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, []);
    return(
      <div className="space-y-4">
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
            <h1>Mail categories</h1>
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
            <h1>Mail Interactions</h1>
          </CardTitle>
        
      </Card>
  
      <Card x-chunk="dashboard-01-chunk-0 " className="h-[250px]  bg-[191919] border-none">
        <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
        
        </CardHeader>
        <CardContent>
        <div className="flex items-center justify-center w-full h-full">
            <div className="">
            <HorizontalBarChart data={[
                { label: 'A', percentage: 53, color: '#FFCD04' },
                { label: 'B', percentage: 21, color: '#FFCD04' },
                { label: 'C', percentage: 82, color: '#FFCD04' },
                { label: 'D', percentage: 58, color: '#FFCD04' },
              ]}/>
            </div>
        </div>
        
        </CardContent>
        <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
            <h1>Mail Follow-ups</h1>
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
            <h1>Mail Active Leads</h1>
          </CardTitle>
        
      </Card>
  
  
  </div>
          <div className="grid gap-4 md:gap-8 w-full">
          <Card className="xl:col-span-2 w-full" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Important mails</CardTitle>
                <CardDescription>
                  {`You have ${emails.length} unread Important emails`}
                </CardDescription>
              </div>
              <Button asChild size="sm" className="gap-1 ml-auto bg-[#fecc07] hover:text-black hover:bg-[#fec000] size-sm">
                <Link href="#">
                  View All
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mail</TableHead>
                    <TableHead className="hidden xl:table-column">From</TableHead>
                    <TableHead className="hidden xl:table-column">To</TableHead>
                    <TableHead className="hidden xl:table-column">Date</TableHead>
                    <TableHead className="text-right">Subject</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emails.map((email, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="font-medium">{email.from}</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">{email.from}</TableCell>
                      <TableCell className="hidden xl:table-column">{email.to}</TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        {new Date(email.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">{email.subject}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          {/* Other cards */}
        </div>
      </div>
   
    )
  }

  export default GmailCards;