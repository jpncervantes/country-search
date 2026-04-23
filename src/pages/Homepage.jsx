import Brand from '@/components/brand/Brand'
import CountryDetails from '@/components/country-details/CountryDetails'
import SearchResult from '@/components/search-results/SearchResult'
import SearchBar from '@/components/searchbar/SearchBar'
import { sortCountriesByName } from '@/lib/helpers'
import StateMessage from '@/components/error-message/StateMessage'
import ResultsSkeleton from '@/components/loading-state/ResultsSkeleton'
import { useGetAllCountriesQuery, useSearchCountriesByNameQuery } from '@/slice/apiSlice'
import { useRef, useMemo } from 'react'
import { useSelector } from 'react-redux'

const Homepage = () => {
  const { searchKey, selectedCountry } = useSelector((state) => state.country)

  //query for getting all countries
  const {
    data: allCountries,
    isFetching: isAllLoading,
    error: allCountriesError
  } = useGetAllCountriesQuery({ fields: 'name,capital,flags,currencies,coatOfArms,car' }, { skip: !!searchKey })

  //query for getting a country by name
  const {
    data: searchResults,
    isFetching: isSearchLoading,
    error: searchError
  } = useSearchCountriesByNameQuery({ name: searchKey, fields: 'name,capital,flags,currencies,coatOfArms,car' }, { skip: !searchKey })

  // sort the list
  const sortedList = useMemo(() => {
    if (searchKey && searchResults) return sortCountriesByName(searchResults)
    if (!searchKey && allCountries) return sortCountriesByName(allCountries)
    return []
  }, [searchKey, searchResults, allCountries])

  const scrollContainerRef = useRef(null)

  return (
    <div className="justify-center flex items-center flex-col p-5 gap-5 md:p-12 h-screen transition-transform duration-200">
      <div className="w-full md:w-[40%] flex-col items-center flex gap-5">
        <Brand />
        <SearchBar />
      </div>
      <div
        ref={scrollContainerRef}
        className="w-full md:w-[90%] flex flex-col  items-center h-full overflow-auto px-1 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100"
      >
        {selectedCountry ? (
          <CountryDetails country={selectedCountry} scrollContainerRef={scrollContainerRef} />
        ) : isSearchLoading || isAllLoading ? (
          <ResultsSkeleton count={5} />
        ) : !isSearchLoading && searchKey && searchError && searchError.status === 404 ? (
          <StateMessage type="info" message="No results found." />
        ) : !isSearchLoading && searchKey && searchError && searchError.status === 'FETCH_ERROR' ? (
          <StateMessage type="error" message="Failed to fetch results. Please check your internet connection or try again later." />
        ) : !isAllLoading && !searchKey && allCountriesError && allCountriesError.status === 'FETCH_ERROR' ? (
          <StateMessage type="error" message="Failed to fetch country list. The provider server might be down, try again later." />
        ) : (
          <SearchResult countryList={sortedList} />
        )}
        <div className="min-h-px w-full" />
      </div>
    </div>
  )
}

export default Homepage
