export function getInventoryStatus(product) {
  if (product.stockQuantity === 0) {
    return "outOfStock"
  }

  if (product.stockQuantity <= product.lowStockThreshold) {
    return "lowStock"
  }

  return "inStock"
}
