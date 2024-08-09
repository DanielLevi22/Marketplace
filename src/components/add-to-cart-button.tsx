"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function AddToCartButton({ product }: { product: any }) {
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(true)
    }, 2000)

    return () => clearTimeout(timeout)
  },[isSuccess])

  return (
    <Button 
      onClick={() => 
      setIsSuccess(true)}  
      size="lg" 
      className="w-full"
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  )
}