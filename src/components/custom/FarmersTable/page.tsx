"use client"

import { useEffect, useState } from "react";
import { Farmer, columns } from "./columns"
import { DataTable } from "./data-table"
import { api } from "@/utils/api";
import { toast } from "react-toastify";

interface FarmerTabProps{
  duration:"week"|"month"|"year"
}

export default function FarmerDataTable({duration}:FarmerTabProps) {
  let farmers
  try{
    if(duration==="week"){

    }
   farmers = api.farmer.getAllFarmers.useQuery({duration:duration})
   toast("Farmer created successfully")
  }catch(error){
   toast("Something went wrong")
  }
  
  console.log("farmers",farmers?.data)
 const formatted:Farmer[] = farmers?.data ?farmers.data?.map((farmer) => ({
   id: farmer.id,
   name: farmer.name,
   address:farmer.address,
   upi: farmer.upi,
   phone: farmer.phone
 })):[]

  

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={formatted} />
    </div>
  );
}
