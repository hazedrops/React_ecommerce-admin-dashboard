function SortControl({ sortValue, onSortChange }) {
  return (
    <div className='sort-control'>
      <label htmlFor='product-sort' className='sort-control__label'>
        Sort by
      </label>

      <select
        id='product-sort'
        className='sort-control__select'
        value={sortValue}
        onChange={(event) => onSortchange(event.target.value)}
      >
        <option value='default'>Default order</option>
        <option value='title'>Product Title</option>
        <option value='brand'>Brand</option>
        <option value='price'>Price</option>
        <option value='stock'>Stock Quantity</option>
      </select>
    </div>
  )
}

export default SortControl
