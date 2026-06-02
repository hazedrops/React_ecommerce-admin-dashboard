import { useMemo, useState } from "react"
import "./App.css"
import SearchBar from "./components/SearchBar"
import ProductTable from "./components/ProductTable"

const products = [
  {
    id: 1,
    title: "Blackmagic Design ATEM Mini Pro",
    sku: "BMD-BMDSWATEMMINIBPR",
    brand: "Blackmagic Design",
    price: 345,
    stockQuantity: 3,
    lowStockThreashold: 5,
  },
  {
    id: 2,
    title: "Shure SM7B Dynamic Microphone",
    sku: "SHU-MIC-SM7B",
    brand: "Shure",
    price: 439,
    stockQuantity: 12,
    lowStockThreashold: 5,
  },
  {
    id: 3,
    title: "Pioneer DJ DDJ-FLX4 Controller",
    sku: "PION-DDJFLX4",
    brand: "Pioneer DJ",
    price: 3292,
    stockQuantity: 0,
    lowStockThreashold: 5,
  },
]

function App() {
  const [searchValue, setSearchValue] = useState("")

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase()

    if (!normalizedSearch) {
      return products
    }

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.sku.toLowerCase().includes(normalizedSearch) ||
        product.brand.toLowerCase().includes(normalizedSearch)
      )
    })
  }, [searchValue])

  return (
    <main className='app'>
      <section className='dashboard' aria-labelledby='dashboard-title'>
        <div className='dashboard__header'>
            <p className='dashboard__eyebrow'>eCommerce Admin</p>
            <h1 id='dashboard-title'>Inventory Dashboard</h1>
            <p className='dashboard__description'>
              Search products, monitor stock levels, and identify low-stock or
              out-of-stock items.
            </p>
        </div>

        <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />

        <div className='dashboard__count' area-label='Visible product count'>
          <span>{filteredProducts.length} </span>
          <small>
            {filteredProducts.length === 1 ? "Product" : "Products"}
          </small>
        </div>

        <ProductTable products={filteredProducts} />
      </section>
    </main>
  )
}

export default App
