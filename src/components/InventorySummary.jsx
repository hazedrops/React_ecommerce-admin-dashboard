function InventorySummary({summary}) {
  return (
    <section className='inventory-summary' aria-label='Inventory summary'>
      <article className='summary-card'>
        <h3 className='summary-label'>Total Products</h3>
        <strong className='summary-value'>{summary.totalProducts}</strong>
      </article>

      <article className='summary-card'>
        <h3 className='summary-label'>In Stock</h3>
        <strong className='summary-value'>{summary.inStock}</strong>
      </article>

      <article className='summary-card'>
        <h3 className='summary-label'>Low Stock</h3>
        <strong className='summary-value'>{summary.lowStock}</strong>
      </article>

      <article className='summary-card'>
        <h3 className='summary-label'>Out of Stock</h3>
        <strong className='summary-value'>{summary.outOfStock}</strong>
      </article>
    </section>
  )
}

export default InventorySummary