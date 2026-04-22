import { debounce } from '@/lib/helpers'
import { Input } from '../ui/input'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchKey } from '@/slice/appSlice'
import { useSearchCountriesByNameQuery } from '@/slice/apiSlice'

const SearchBar = () => {
  const dispatch = useDispatch()

  const handleSearch = useCallback(
    debounce((e) => {
      dispatch(setSearchKey(e.target.value))
    }, 300),
    []
  )
  return (
    <div className="w-full">
      <Input className="h-12 border-black border-2 rounded-full p-5" placeholder="Search a country" onChange={handleSearch} />
    </div>
  )
}

export default SearchBar
