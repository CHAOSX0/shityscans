"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function SayHi({number}: {number: number}){
    useEffect(()=>{
      toast.success(`موسى يقول: تبا لك يا محمود وصلت الى الفصل ${number}`)
    },[])
return (
    <>
    </>
)
}