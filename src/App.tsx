import './App.css'
import ProductCard from './components/ProductCard'
import type { Product } from './types/Product'

function App() {

  const products: Product[] = [{
    id: 1,
    title: 'Laptop',
    price: 10.99,
    description: 'Laptop para desarrollo',
    category: 'Tecnologia',
    image: 'https://via.placeholder.com/150'

  },
   {
      id: 2,
      title: 'Mouse',
      price: 80,
      description: 'Mouse inalámbrico',
      category: 'Accesorios',
      image: 'https://via.placeholder.com/150'
    }
  ]

  return (
      <main>
      <h1>React Junior Practice</h1>
      <p>Mi primer proyecto de práctica con React y TypeScript.</p>
    
    {products.map((product) => (

      <ProductCard key={product.id} product={product} />
      
        )
      )
    }
    </main>
  )
}

export default App
