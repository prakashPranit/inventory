import { Progress } from "@radix-ui/react-progress";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import Link from "next/link";


interface BreadcrumbProps  {
   items: string[];
  }
 const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
 

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
     <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              {
             items.map((item, index) => (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink href="#">{item}</BreadcrumbLink>
                  </BreadcrumbItem>
                ))
              }
            </BreadcrumbList>
          </Breadcrumb>
    </div>
  );
};


export default Breadcrumbs