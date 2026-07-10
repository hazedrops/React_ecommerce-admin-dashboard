import { useMemo, useState } from "react"
import "./App.css"
import SearchBar from "./components/SearchBar"
import ProductTable from "./components/ProductTable"
import InventorySummary from "./components/InventorySummary"
import StatusFilter from "./components/StatusFilter"
import { getInventoryStatus } from "./utils/inventoryStatus"

const products = [
  {
    id: 1,
    title: "Blackmagic Design ATEM Mini Pro",
    sku: "BMD-BMDSWATEMMINIBPR",
    brand: "Blackmagic Design",
    price: 345,
    stockQuantity: 3,
    lowStockThreshold: 5,
  },
  {
    id: 2,
    title: "Shure SM7B Dynamic Microphone",
    sku: "SHU-MIC-SM7B",
    brand: "Shure",
    price: 439,
    stockQuantity: 12,
    lowStockThreshold: 5,
  },
  {
    id: 3,
    title: "Pioneer DJ DDJ-FLX4 Controller",
    sku: "PION-DDJFLX4",
    brand: "Pioneer DJ",
    price: 3292,
    stockQuantity: 0,
    lowStockThreshold: 5,
  },
  {
    id: 4,
    title: "AKG P120 General Purpose Recording Microphone",
    sku: "AKG-MIC-P120",
    brand: "AKG",
    price: 129,
    stockQuantity: 4,
    lowStockThreshold: 5,
  },
]

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase()
    
    return products.filter((product) => {
      const matchesSearch = 
        !normalizedSearch ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.sku.toLowerCase().includes(normalizedSearch) ||
        product.brand.toLowerCase().includes(normalizedSearch)

      const productStatus = getInventoryStatus(product)

      const matchesStatus = 
        selectedStatus === "all" || productStatus === selectedStatus
      
        return matchesSearch && matchesStatus
    })
  }, [searchValue, selectedStatus])

  const inventorySummary = useMemo(() => {
    return filteredProducts.reduce(
      (summary, product) => {
        const status = getInventoryStatus(product)

        summary.totalProducts += 1
        summary[status] += 1

        return summary
      },
      {
        totalProducts: 0,
        inStock: 0,
        lowStock: 0,
        outOfStock: 0,
      },
    )
  }, [filteredProducts])

  return (
    <main className='app'>
      <section className='dashboard' aria-labelledby='dashboard-title'>
        <div className='dashboard__header'>
          <div>
            <p className='dashboard__eyebrow'>eCommerce Admin</p>
            <h1 id='dashboard-title'>Inventory Dashboard</h1>
            <p className='dashboard__description'>
              Search products, monitor stock levels, and identify low-stock or
              out-of-stock items.
            </p>
          </div>
        </div>

        <InventorySummary summary={inventorySummary} />

        <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />

        <StatusFilter 
          selectedStatus={selectedStatus} 
          onStatusChange={setSelectedStatus} 
        />
        

        <div className='dashboard__count' aria-label='Visible product count'>
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
