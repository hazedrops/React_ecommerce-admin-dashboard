import ProductRow from "./ProductRow"

function ProductTable({ products }) {
  if (products.length === 0) {
    return (
      <div className='empty-state' role='status'>
        No products matched your search.
      </div>
    )
  }

  return (
    <div className='table-wrapper'>
      <table className='product-table'>
        <caption>Product inventory list</caption>

        <thead>
          <tr>
            <th scope='col'>Product</th>
            <th scope='col'>SKU</th>
            <th scope='col'>Brand</th>
            <th scope='col'>Price</th>
            <th scope='col'>Stock</th>
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
