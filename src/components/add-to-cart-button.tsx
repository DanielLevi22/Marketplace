"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import type { Product } from "@/payload-types";
import { useCart } from "@/hooks/use-cart";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(true)
    }, 2000)

    return () => clearTimeout(timeout)
  },[isSuccess])

  return (
    <Button 
      onClick={() => {
        addItem(product)
        setIsSuccess(true)
      }}  
        
      size="lg" 
      className="w-full"
      
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  )
}