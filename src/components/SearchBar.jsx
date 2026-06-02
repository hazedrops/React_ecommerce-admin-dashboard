function SearchBar({ searchValue, onSearchChange }) {
  return (
    <div className='search-bar'>
      <label htmlFor='product-search'>Search products</label>

      <input
        id='product-search'
        type='search'
        value={searchValue}
        // connects the user typing in the input to the product filtering logic in App.jsx
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder='Search by title, SKU, or brand...'
      />
    </div>
  )
}

export default SearchBar
