import type { Product } from "@/payload-types";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

export function CartItem({ product }: { product: Product }) {
  const  { image  } = product.images[0]
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center space-x-4">
        <div className="relative aspect-square size-16 min-w-fit overflow-hidden rounded">
          {typeof image !== 'string' && image.url ?(
            <Image 
              src={image.url} 
              alt={product.name} 
              fill 
              className="absolute object-cover"
            />
          ): (
            <div className="flex h-full items-center justify-center bg-secondary">
              <ImageIcon className="size-4 text-muted-foreground" />
            </div>  
          ) }
        </div>
      </div>
    </div>
  )
}