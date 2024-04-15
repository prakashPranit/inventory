import { Progress } from "@radix-ui/react-progress";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import Link from "next/link";

import { Copy, Truck, MoreVertical, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem } from "../ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const invoices = [
  {
    date: "12 March",
    paymentStatus: "Paid",
    rate: "25",
    quantity: "125kg",
  },
  {
    date: "18 March",
    paymentStatus: "Unpaid",
    rate: "25",
    quantity: "300kg",
  },
  {
    date: "19 March",
    paymentStatus: "Paid",
    rate: "25",
    quantity: "129kg",
  },
  {
    date: "130 March",
    paymentStatus: "Unpaid",
    rate: "25",
    quantity: "200kg",
  },
]





interface ItemDataProps  {
   item: any;
  }
 const TableItemDetails: React.FC<ItemDataProps> = ({ item}) => {
 

  return (
   
      <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
               
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                Raju Patti wala
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Tea leaves supplied</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Track Order
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Order Details</div>
                  
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                 
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total Quantity</span>
                      <span>  329 KG</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-2" />
                <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice,index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{invoice.date}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.quantity}</TableCell>
            <TableCell className="text-right">{invoice.rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total to be paid</TableCell>
          <TableCell className="text-right">Rs 2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
  
  );
};


export default TableItemDetails