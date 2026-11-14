import ProductRow from './ProductRow'

function ProductTable({
  products,
  hasActiveFilters,
  onClearFilters,
  onSort,
  sortValue,
  sortDirection,
}) {
  if (products.length === 0) {
    return (
      <div className='empty-state' role='status'>
        <h2 className='empty-state__title'>No products matched your search.</h2>

        <p className='empty-state__message'>
          Try changing your search or selecting a different stock status.
        </p>

        {hasActiveFilters && (
          <button
            type='button'
            className='empty-state__button'
            onClick={onClearFilters}
          >
            Clear filters
          </button>
        )}
      </div>
    )
  }

  return (
    <div className='table-wrapper'>
      <table className='product-table'>
        <caption>Product inventory list</caption>

        <thead>
          <tr>
            <th
              scope='col'
              aria-sort={
                sortValue === 'title'
                  ? sortDirection === 'asc'
                    ? 'ascending'
                    : 'descending'
                  : undefined
              }
            >
              <button
                type='button'
                className='table-sort-button'
                onClick={() => onSort('title')}
              >
                Product
                {sortValue === 'title' && (
                  <span className='table-sort-icon' aria-hidden='true'>
                    {sortDirection === 'asc' ? '\u2191' : '\u2193'}
                  </span>
                )}
              </button>
            </th>

            <th scope='col'>SKU</th>
            <th
              scope='col'
              aria-sort={
                sortValue === 'brand'
                  ? sortDirection === 'asc'
                    ? 'ascending'
                    : 'descending'
                  : undefined
              }
            >
              <button
                type='button'
                className='table-sort-button'
                onClick={() => onSort('brand')}
              >
                Brand
                {sortValue === 'brand' && (
                  <span className='table-sort-icon' aria-hidden='true'>
                    {sortDirection === 'asc' ? ' \u2191' : ' \u2193'}
                  </span>
                )}
              </button>
            </th>

            <th
              scope='col'
              aria-sort={
                sortValue === 'price'
                  ? sortDirection === 'asc'
                    ? 'ascending'
                    : 'descending'
                  : undefined
              }
            >
              <button
                type='button'
                className='table-sort-button'
                onClick={() => onSort('price')}
              >
                Price
                {sortValue === 'price' && (
                  <span className='table-sort-icon' aria-hidden='true'>
                    {sortDirection === 'asc' ? ' \u2191' : ' \u2193'}
                  </span>
                )}
              </button>
            </th>

            <th
              scope='col'
              aria-sort={
                sortValue === 'stock'
                  ? sortDirection === 'asc'
                    ? 'ascending'
                    : 'descending'
                  : undefined
              }
            >
              <button
                type='button'
                className='table-sort-button'
                onClick={() => onSort('stock')}
              >
                Stock
                {sortValue === 'stock' && (
                  <span className='table-sort-icon' aria-hidden='true'>
                    {sortDirection === 'asc' ? ' \u2191' : ' \u2193'}
                  </span>
                )}
              </button>
            </th>
            <th scope='col'>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
