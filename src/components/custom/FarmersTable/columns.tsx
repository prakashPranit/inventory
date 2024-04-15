"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { useSetRecoilState } from "recoil"
import { atom } from "recoil";


export const selectedFarmerRowState= atom({
    key: 'farmerRow', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Farmer = {
  id: number
  phone: string
  name:string
  address:string
  upi:string
}



export const columns: ColumnDef<Farmer>[] = [
    {
      id: "select",
      // header: ({ table }) => (
     
      //   <Checkbox
      //     checked={
      //       table.getIsAllPageRowsSelected() ||
      //       (table.getIsSomePageRowsSelected() && "indeterminate")
      //     }
      //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      //     aria-label="Select all"
      //   />
      // ),
      // cell: ({ row }) => (
      //   <Checkbox
      //     checked={row.getIsSelected()}
      //     onCheckedChange={(value) => row.toggleSelected(!!value)}
      //     aria-label="Select row"
      //   />
      // ),
      enableSorting: false,
      enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => <div className="ml-3">{row.getValue("name")}</div>,
      },
    {
      accessorKey: "address",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Address
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className=" ml-3 lowercase">{row.getValue("address")}</div>,
    },
    {
      accessorKey: "phone",
      header: () => <div >Phone</div>,
      cell: ({ row }) => {
  
        return <div className=" font-medium">{row.getValue("phone")}</div>
      },
    },
    {
      id: "actions",
      header: () => <div >Action</div>,
      enableHiding: false,
      cell: ({ row }) => {

        const setSelectState = useSetRecoilState(selectedFarmerRowState)
          
   
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-10 bg-white p-3 border-2 border-gray-500 rounded-md" align="end">
             
              <DropdownMenuItem  className="p-1"
                onClick={() =>setSelectState(row.original.id)}
              >
              Recent transactions
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem  className="p-1">View customer</DropdownMenuItem>
              <DropdownMenuItem  className="p-1">View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]