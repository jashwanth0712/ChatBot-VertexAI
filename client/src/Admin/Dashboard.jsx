
// import Image from "next/image";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import Stepper from '../Admin/input_page.jsx'
import { useState } from "react";
import IntegrationsPage from "./Integrations.jsx";
import MobileMockup from "./MobileMockup.jsx";
import { SwitchForm } from "@/components/ui/questions.jsx";
import LeadGenerator from "./LeadGenerator.jsx"
import AnalyticsPage from "@/Analytics/analytics.jsx"
// import { SwitchForm } from "@/components/ui/questions.jsx";
// import { Package2 } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs.jsx";
import { CalendarDateRangePicker } from "../components/ui/date-range-picker.jsx";
import { MainNav } from "../components/ui/main-nav.jsx";
import { Overview } from "../components/ui/overview.jsx";
import { RecentSales } from "../components/ui/recent-sales.jsx";
import { Search } from "../components/ui/search.jsx";
import TeamSwitcher from "../components/ui/team-switcher.jsx";
import { UserNav } from "../components/ui/user-nav.jsx";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "../components/ui/tooltip.jsx"

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  Blocks, 
  PanelLeft,
  BotMessageSquare,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"



export const metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};



export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const handlePageClick = (pageName) => {
    setCurrentPage(pageName);
  };
  const routes = [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '#' },
    { name: 'Bots', icon: <BotMessageSquare className="w-5 h-5"/>, path: '#' },
    { name: 'Integrations', icon: <Blocks  className="w-5 h-5" />, path: '#' },
    { name: 'Analytics', icon: <LineChart className="w-5 h-5" />, path: '#' },
    { name: 'Lead-Generator', icon: <Users2 className="w-5 h-5" />, path: '#' },
    // { name: 'Settings', icon: <Settings className="w-5 h-5" />, path: '#' },
  ];
  return (
    <div className="md:flex justify-center w-[70vw] ">

        {/* Side Bar */}
      {/* <div className="flex flex-col w-1/6 min-h-screen bg-muted/40"> */}
      <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-30 bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="#"
          className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="w-4 h-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        {routes.map((route, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={route.path}
                  className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8 ${
                    currentPage === route.name && 'bg-accent text-accent-foreground'
                  }`}
                  onClick={() => handlePageClick(route.name)}
                >
                  {route.icon}
                  <span className="sr-only">{route.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{route.name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
    </aside>
      {/* </div> */}

      {/* Side Bar */}
      {
        currentPage === 'Dashboard' &&        
      <div className="flex-col hidden w-[90vw] h-screen md:flex md:ml-16">
        <div className="border-b ">
          <div className="flex items-center h-16 px-4 ">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="flex items-center ml-auto space-x-4 ">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 p-8 pt-6 space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                
                {/* <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">
                      answer the following questions
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <SwitchForm/>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card> */}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-5">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-7">
                    <SwitchForm/>
                  </CardContent>
                </Card>
                {/* <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card> */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      }
      {
        currentPage === 'Bots' && 
    <Stepper/>

      }
      {
        currentPage === 'Integrations' && 
        <IntegrationsPage/>

      }
      {
        currentPage==='Analytics' &&
        <AnalyticsPage/>
      }
      {
        currentPage==='Lead-Generator' &&
        <LeadGenerator/>
      }


</div>
  );
}

