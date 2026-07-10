const statusOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "In Stock",
    value: "inStock",
  },
  {
    label: "Low Stock",
    value: "lowStock",
  },
  {
    label: "Out of Stock",
    value: "outOfStock",
  },
]

function StatusFilter({ selectedStatus, onStatusChange }) {
  return (
    <div className='status-filter' aria-label='Filter products by stock status'>
      {statusOptions.map((option) => (
        <button
          key={option.value}
          type='button'
          className={
            selectedStatus === option.value
              ? "status-filter__button status-filter__button--active"
              : "status-filter__button"
          }
          onClick={() => onStatusChange(option.value)}
          aria-pressed={selectedStatus === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
export default StatusFilter
