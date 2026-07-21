import { useMemo, useState } from "react"
import "./App.css"
import SearchBar from "./components/SearchBar"
import ProductTable from "./components/ProductTable"
import InventorySummary from "./components/InventorySummary"
import StatusFilter from "./components/StatusFilter"

import { getInventoryStatus } from "./utils/inventoryStatus"
import { products } from "./data/products"

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const hasActiveFilters = searchValue.trim() !== "" || selectedStatus !== "all"

  function handleClearFilters() {
    setSearchValue("")
    setSelectedStatus("all")
  }

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

        <div className='filter-toolbar'>
          <StatusFilter 
            selectedStatus={selectedStatus} 
            onStatusChange={setSelectedStatus} 
          />

          { hasActiveFilters && filteredProducts.length > 0 && (
            <button
              type='button'
              className='clear-filters-button'
              onClick={ handleClearFilters }
            >
              Clear filters
            </button>
          ) }
        </div>        

        <div className='dashboard__count' aria-label='Visible product count'>
          <span>{filteredProducts.length} </span>
          <small>
            {filteredProducts.length === 1 ? "Product" : "Products"}
          </small>
        </div>

        <ProductTable 
          products={filteredProducts} 
          hasActiveFilters={hasActiveFilters}
          onClearFilters={handleClearFilters}  
        />
      </section>
    </main>
  )
}

export default App
