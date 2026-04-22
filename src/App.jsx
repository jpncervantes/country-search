import { FaLocationDot } from 'react-icons/fa6'
import './App.css'
import SearchBar from './components/searchbar/SearchBar'
import 'react-loading-skeleton/dist/skeleton.css'
import SearchResult from './components/search-results/SearchResult'
import { useGetAllCountriesQuery, useSearchCountriesByNameQuery } from './slice/apiSlice'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Brand from './components/brand/Brand'
import { useDispatch, useSelector } from 'react-redux'
import { setCountryList } from './slice/appSlice'
import CountryDetails from './components/country-details/CountryDetails'

function App() {
  const dispatch = useDispatch()
  const { searchKey, list, selectedCountry } = useSelector((state) => state.country)
  const {
    data: allCountries,
    isLoading: isAllLoading,
    refetch
  } = useGetAllCountriesQuery({ fields: 'name,capital,flags,currencies,coatOfArms,car' }, { skip: !!searchKey })
  const { data: searchResults, isLoading: isSearchLoading } = useSearchCountriesByNameQuery(
    { name: searchKey, fields: 'name,capital,flags,currencies,coatOfArms,car' },
    { skip: !searchKey }
  )

  const countryList = searchKey ? searchResults : allCountries
  const isLoading = searchKey ? isSearchLoading : isAllLoading

  //for storing in the state
  useEffect(() => {
    if (searchKey && searchResults) {
      dispatch(setCountryList(searchResults))
      console.log('called search')
    } else if (!searchKey && allCountries) {
      dispatch(setCountryList(allCountries))
      console.log('called all')
    }
  }, [allCountries, searchResults, searchKey, dispatch])

  //for refetching list of all countries
  useEffect(() => {
    if (searchKey === '' && list && list?.length > 0) {
      refetch()
    }
  }, [searchKey])

  return (
    <div className="justify-center flex items-center flex-col p-12 gap-12 h-screen">
      <div className="w-[40%] flex-col items-center flex gap-5">
        <Brand />
        <SearchBar />
      </div>
      <div className="w-[90%] flex justify-center h-full overflow-auto pt-5 px-1 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
        {selectedCountry ? <CountryDetails country={selectedCountry} /> : <SearchResult countryList={countryList} isLoading={isLoading} />}
      </div>
    </div>
  )
}

export default App
