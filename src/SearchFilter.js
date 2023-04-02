import React from 'react'

const SearchFilter = ({setSearchTerm}) => {
  return (
    <div>
          filter shown with: <input onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}/>
    </div>
  )
}

export default SearchFilter;