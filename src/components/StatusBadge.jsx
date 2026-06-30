import { getInventoryStatus } from "../utils/inventoryStatus"

const statusConfig = {
  inStock: {
    label: "In Stock",
    className: "status-badge--in-stock",
  },
  lowStock: {
    label: "Low Stock",
    className: "status-badge--low-stock",
  },
  outOfStock: {
    label: "Out of Stock",
    className: "status-badge--out-of-stock",
  },
}

function StatusBadge({ product }) {
  const status = getInventoryStatus(product)

  const currentStatus = statusConfig[status]

  return <span className={currentStatus.className}>{currentStatus.label}</span>
}

export default StatusBadge
