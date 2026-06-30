import StatusBadge from "./StatusBadge"

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

function ProductRow({ product }) {
  const formattedPrice = priceFormatter.format(product.price)

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
        <StatusBadge product={ product } />
      </td>
    </tr>
  )
}

export default ProductRow
