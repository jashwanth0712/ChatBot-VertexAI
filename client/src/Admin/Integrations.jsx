import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Gmail_logo from "../../public/gmail_icon.png";
import meet_logo from "../../public/meet_icon.png";
import calender_logo from "../../public/calender_icon.png";
import call_logo from "../../public/call_icon.png";
import whatsapp_logo from "../../public/whatsapp_icon.png";

import { ArrowUpRight, Circle, CircleCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function IntegrationsPage() {
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

  return (
    <div className="flex flex-col w-full min-h-screen md:ml-8 ">
      <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
              <CircleCheck color="#5FD068" />
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={Gmail_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>Gmail Integration</h1>
              </CardTitle>
            
          </Card>
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
            <Circle color="#878787"/>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={calender_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>Calender Integration</h1>
              </CardTitle>
            
          </Card>

          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
            <Circle color="#878787"/>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={whatsapp_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>whatsapp Integration</h1>
              </CardTitle>
            
          </Card>

          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
            <Circle color="#878787"/>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={meet_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>Gmeet Integration</h1>
              </CardTitle>
            
          </Card>

          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
            <Circle color="#878787"/>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={call_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>Call Integration</h1>
              </CardTitle>
            
          </Card>
          
            {/* <Card>
            <CardHeader className="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">+25% from last week</div>
            </CardContent>
            <CardFooter>
                <Progress value={25} aria-label="25% increase" />
            </CardFooter>
            </Card> */}

          {/* <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card> */}
        </div>
        
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Important mails</CardTitle>
                <CardDescription>
                  {`You have ${emails.length} unread Important emails`}
                </CardDescription>
              </div>
              <Button asChild size="sm" className="gap-1 ml-auto">
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
      </main>
    </div>
  );
}
