import type { Product } from '../types/Product.ts'

interface ProductCardProps{
    product: Product
}

function ProductCard({ product }: ProductCardProps){
    return (
         <div className="rounded-xl border p-4 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="mt-4 text-lg font-semibold">
        {product.title}
      </h2>

      <p className="text-sm text-gray-500">
        {product.category}
      </p>

      <p className="mt-2 text-xl font-bold">
        ${product.price}
      </p>
    </div>
    )
}

export default ProductCard