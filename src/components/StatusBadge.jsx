function getInventoryStatus(stockQuantity, lowStockThreshold) {
  if (stockQuantity === 0) {
    return "Out of stock"
  }

  if (stockQuantity <= lowStockThreshold) {
    return "Low Stock"
  }

  return "In Stock"
}

function StatusBadge({ stockQuantity, lowStockThreshold }) {
  const status = getInventoryStatus(stockQuantity, lowStockThreshold)

  const statusClassName = status.toLowerCase().replaceAll(" ", "-")

  return (
    <span className={`status-badge status-badge--${statusClassName}`}>
      {status}
    </span>
  )
}

export default StatusBadge
