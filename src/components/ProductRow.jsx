import StatusBadge from "./StatusBadge"

function ProductRow({ product }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price)

  return (
    <tr>
      <td>
        <strong>{product.title}</strong>{" "}
      </td>
      <td>{product.sku}</td>
      <td>{product.brand}</td>
      <td>{formattedPrice}</td>
      <td>{product.stockQuantity}</td>
      <td>
        <StatusBadge
          stockQuantity={product.stockQuantity}
          lowStockThreashold={product.lowStockThreshold}
        />
      </td>
    </tr>
  )
}

export default ProductRow
