import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import type { Product } from './types/Product'
import SearchBar from './components/SearchBar'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios.get<Product[]>('https://fakestoreapi.com/products')
      .then((response) => {
        return response.data
      })
      .then((data: Product[]) => {
        setProducts(data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
     
  }, [])

   if(loading){
     return <h1>Cargando productos...</h1>
   }
   if(error){
     return <p>Error: {error}</p>
   }
  

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    
<div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">React Junior Practice</h1>
      <p>Mi primer proyecto de práctica con React y TypeScript.</p>
    

    <SearchBar search={search} onSearchChange={setSearch} />

     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {filteredProducts.map((product) => (
      <div className="col-md-4" key={product.id}>
        <ProductCard product={product} />
      </div>
    ))}
  </div>
  </div>

  )
}

export default App
