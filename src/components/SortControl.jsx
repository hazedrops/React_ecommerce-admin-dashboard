function SortControl({
  sortValue,
  sortDirection,
  onSortChange,
  onDirectionChange,
}) {
  return (
    <div className='sort-control'>
      <div className='sort-control__field'>
        <label htmlFor='product-sort' className='sort-control__label'>
          Sort by
        </label>

        <select
          id='product-sort'
          className='sort-control__select'
          value={sortValue}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value='default'>Default order</option>
          <option value='title'>Product Title</option>
          <option value='brand'>Brand</option>
          <option value='price'>Price</option>
          <option value='stock'>Stock Quantity</option>
        </select>
      </div>

      <div className='sort-control__field'>
        <label htmlFor='sort-direction' className='sort-control__label'>
          Order
        </label>

        <select
          id='sort-direction'
          className='sort-control__select'
          value={sortDirection}
          onChange={(event) => onDirectionChange(event.target.value)}
          disabled={sortValue === 'default'}
        >
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      </div>
    </div>
  )
}

export default SortControl
