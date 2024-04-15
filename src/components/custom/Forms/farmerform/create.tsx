

"use client"
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";


const farmerSchema = z.object({
 name: z.string(),
 address:z.string(),
 phone: z.string(),
 upi: z.string(),
});
type farmerSchemaType = z.infer<typeof farmerSchema>;

export default function FarmerForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<farmerSchemaType>({ resolver: zodResolver(farmerSchema) });
    const creationMutation = api.farmer.createFarmer.useMutation()


    //we should here call like API or something...
    const onSubmit: SubmitHandler<farmerSchemaType> = (data) =>{
        try{
            const response = creationMutation.mutate(data)
            toast("Farmer created successfully")
        }catch(error){
         toast("Something went wrong")
        }
        
        
    } 

    return (

        <Card className=" mt-8 w-full max-w-sm">
    
            <CardHeader>
                <CardDescription >
                    {"Register a new farmer"}
                </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
                <form onSubmit={handleSubmit(onSubmit)} className="form">

                    {/* First Input for name */}
                    <Label htmlFor={"name"}>{"Name"}</Label>
                    <Separator className="mt-4"/>
                    <Input placeholder="Fullname" {...register("name")} />
                    
                    {errors.name && (
                        <Alert className="mt-4" variant={"destructive"}>
                            <Terminal className="h-2 w-2" />
                            <AlertDescription>
                                {errors.name.message}
                            </AlertDescription>
                        </Alert>

                    )}
                      <Separator className="mt-4"/>
                    {/* Input for address */}
                    <Label className="mt-4" htmlFor={"address"}>{"Address"}</Label>
                    <Separator className="mt-4"/>
                    <Input placeholder="Address" {...register("address")} />
                
                    {errors.address && (
                        <Alert className="mt-4" variant={"destructive"}>
                            <Terminal className="h-2 w-2" />
                            <AlertDescription>
                                {errors.address.message}
                            </AlertDescription>
                        </Alert>
                    )}
                      <Separator className="mt-4"/>
                     {/* Input for upi */}
                     <Label className="mt-4" htmlFor={"upi"}>{"UPI"}</Label>
                     <Separator className="mt-4"/>
                    <Input placeholder="UPI address" {...register("upi")} />
                
                    {errors.upi && (
                        <Alert className="mt-4" variant={"destructive"}>
                            <Terminal className="h-2 w-2" />
                            <AlertDescription>
                                {errors.upi.message}
                            </AlertDescription>
                        </Alert>
                    )}
                      <Separator className="mt-4"/>
                     {/* Input for number */}
                     <Label className="mt-4" htmlFor={"phone"}>{"Phone Number"}</Label>
                     <Separator className="mt-4"/>
                    <Input type="text" placeholder="Mobile Number" {...register("phone")} />
                
                    {errors.phone && (
                        <Alert className="mt-4" variant={"destructive"}>
                            <Terminal className="h-2 w-2" />
                            <AlertDescription>
                                {errors.phone.message}
                            </AlertDescription>
                        </Alert>
                    )}
                   
            <Button className="mt-6" type="submit">Save changes</Button>
         
                   
                </form>
            </CardContent>
            <CardFooter>
                   {/*  */}
            <ToastContainer/>

            </CardFooter>
        </Card>



    );
}