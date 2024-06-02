import { Link } from "react-router-dom";
import Gmail_logo from "../../public/gmail_icon.png";
import meet_logo from "../../public/meet_icon.png"
import calender_logo from "../../public/calender_icon.png"
import call_logo from "../../public/call_icon.png"
import whatsapp_logo from "../../public/whatsapp_icon.png"
import Gmail_cards from "./gmail_cards.jsx"
import CalendarCards from "./Calender_Cards.jsx"
import CallCards from "./call_cards.jsx"
import MeetCards from "./meet_cards.jsx"
import WhatsappCards from "./whatsappCards.jsx"

// import Gmail_cards from "./gmail_cards.jsx"
// import Gmail_cards from "./gmail_cards.jsx"
// import Gmail_cards from "./gmail_cards.jsx"
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
      borderColor: 'black', // Set the color of the border
    }
  },
};

export default function AnalyticsPage() {

  const [selectedFramework, setSelectedFramework] = React.useState("gmail");
  
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
        borderColor: 'black', // Set the color of the border
      }
    },
  };
  
  // Custom plugin to render text in the center
  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.font = '5px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'white';
    },
  };
  
  // Register the custom plugin
  ChartJS.register(centerTextPlugin);
  
  
  
  // Custom plugin to render text in the center
  
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

  


    return (
        <div className="flex flex-col w-full min-h-screen md:ml-8">
      <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
        <Combobox  value={selectedFramework} setValue={setSelectedFramework}/>
        <div>
          
        {!selectedFramework&&
          <Gmail_cards/>
        }

        {
          selectedFramework=="gmail"&&
          <Gmail_cards/>
        }
        {
          selectedFramework=="calender"&&
          <CalendarCards/>
        }
        {
          selectedFramework=="gmeet"&&
          <MeetCards/>
        }
        {
          selectedFramework=="call"&&
          <CallCards/>
        }
        {
          selectedFramework=="whatsapp"&&
          <WhatsappCards/>
        }
             
        </div>
      </main>
      </div>
    );
}
