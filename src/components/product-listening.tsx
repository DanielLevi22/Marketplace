"use client"
import { Product } from "@/payload-types"
import { useEffect, useState } from "react"
import { ProductPlaceholder } from "./product-placeholder"
import Link from "next/link"
import { cn, formatPrice } from "@/lib/utils"
import { PRODUCT_CATEGORIES } from "@/config"
import { ImageSlider } from "./image-slider."


interface ProductListingProps {
  product: Product | null
  index: number
}
export function ProductListing({index,product}: ProductListingProps) { 
  const  [ isVisible, setIsVisible ] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)
    
    return () => clearTimeout(timer)
  },[index])

  if(!product || !isVisible) {
    return (
      <ProductPlaceholder />
    )
  }

  const label =  PRODUCT_CATEGORIES.find(({value}) => value === product.category)?.label

  const validUrls = product.images.map(({ image }) => typeof image === "string" ? image: image.url)
  .filter(Boolean) as string[]
  if(isVisible && product) {
    return (
      <Link 
        className={cn('invisible cursor-pointer size-full group/main',
          {
            'invisible animate-in fade-in-5': isVisible
          }
        )} 
        href={`/products/${product.id}`}
        >
            <div className="flex flex-col w-full">
              <ImageSlider urls={product.images} />

              <h3 className="mt-4 font-medium text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-700">{label}</p>
            </div>
            <p className="mt-1 font-medium text-sm text-gray-900">{formatPrice(product.price)}</p>
      </Link>
    )
  }

return (
  <div></div>  
)
}