"use client"

import { Progress } from "@radix-ui/react-progress";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

import ReusableForm from "./formcard";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import FarmerForm from "./Forms/farmerform/create";
import RenderLineChart from "./Charts/linecharts";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

const SimpleBarChartWithoutSSR = dynamic(
    import("./Charts/linecharts"),
    { ssr: false }
);

interface StatProps {
    source: string;
    data: {
      week: string;
      month: string;
    }
  }
 const Stats: React.FC<StatProps> = ({ source, data }) => {
 

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
    
      <Card className=" w-full z-10 sm:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle>Your {source?source:"Stats"} Dashboard</CardTitle>
          <CardDescription>
            Introducing a dynamic dashboard analysis.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Sheet>
          <SheetTrigger asChild>
        <Button variant="default">Register a farmer</Button>
      </SheetTrigger>
  <SheetContent className=" w-[400px] sm:w-[540px]">

    <FarmerForm />
  
  </SheetContent>
 
</Sheet>

        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle className="text-3xl">{data?.week}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">+25% from last week</div>
        </CardContent>
        <CardFooter>
          <Progress value={25} aria-label="Increase" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>This Month</CardDescription>
          <CardTitle className="text-3xl">{data?.month}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">+25% from last week</div>
        </CardContent>
        <CardFooter>
          <Progress value={25} aria-label="Increase" />
        </CardFooter>
      </Card>
     {/* <SimpleBarChartWithoutSSR/> */}
    </div>
  );
};


export default Stats