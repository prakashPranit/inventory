"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export interface FormInput {
    type: 'string' | 'number' | 'date';
    label: string;
    placeholder: string;
    value: string | number | Date;
}
interface ReusableFormProps {
    inputs: FormInput[];
    formDescription?: string;
    formTitle?: string;
    source:string;
}


export interface Farmer {
  id: number;
  name: string;
  email: string;
  upi: string;
  phone: number;
}


const initialFarmerState: Farmer = {
  id: 0,
  name: '',
  email: '',
  upi: '',
  phone: 0
};






const ReusableForm: React.FC<ReusableFormProps> = ({ inputs,formTitle,formDescription }) => {

  const creationMutation = api.farmer.createFarmer.useMutation()

  useEffect(()=>{
    console.log("formsubmit",data)
  },[])

  
// const handleformSubmit = () => {
//   console.log("state",formState)
//  const response = creationMutation.mutate(formState);
//  console.log(response,"response")
// };

const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{formTitle}</CardTitle>
        <CardDescription>
        {formDescription}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <CardContent className="grid gap-4">
        {/* {inputs?.map((item,key)=> (
          <div className="grid gap-2" key={key}>
            <Label htmlFor={item.label}>{item.label}</Label>
            <Input  {...register(item.label)} key={item.label}   id={item.label} type={item.type} placeholder={item.placeholder} required />
          </div>
        ))} */}
      </CardContent>
      <input type="submit" >    <Button className="w-full">Submit</Button></input>
      </form>
      <CardFooter>
    
     
      </CardFooter>
    </Card>
  )
}


export default ReusableForm