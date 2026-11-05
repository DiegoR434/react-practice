import type { Product } from '../types/Product.ts'

interface ProductCardProps{
    product: Product
}

function ProductCard({ product }: ProductCardProps){
    return (
        <div>
            <img src={product.image} alt={product.title} width="150"/>

            <h2>{product.title}</h2>

            <p>{product.category}</p>

            <strong>${product.price}</strong>
        </div>
    )
}

export default ProductCard