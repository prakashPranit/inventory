"use client"

import {
  File,
  ListFilter,
} from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  Card,

} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import Stats from "@/components/custom/stats"
import FarmerDataTable from "@/components/custom/FarmersTable/page"
import TableItemDetails from "@/components/custom/tableitemdetails"

export default function Summary() {
  

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 mt-6">
     
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-2 md:gap-4 lg:col-span-2">
            <Stats source={"Farmers"} data={{week:String(2390) ,month:String(46667)}} />
           
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                    <FarmerDataTable duration={"week"}/>
                    </Card>
                  
              </TabsContent>
              <TabsContent value="month">
                <Card x-chunk="dashboard-05-chunk-3">
                    <FarmerDataTable duration={"month"}  />
                    </Card>
                  
              </TabsContent>
              <TabsContent value="year">
                <Card x-chunk="dashboard-05-chunk-3">
                    <FarmerDataTable duration={"year"} />
                    </Card>
                  
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <TableItemDetails item={{}}/>
           
          </div>
        </div>
      </div>

  )
}
