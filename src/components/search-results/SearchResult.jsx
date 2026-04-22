import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { setSelectedCountry } from '@/slice/appSlice'

const SearchResult = ({ countryList, isLoading }) => {
  const dispatch = useDispatch()
  const handleSelectCountry = (country) => {
    dispatch(setSelectedCountry(country))
  }
  if (isLoading)
    return (
      <div style={{ width: '100%', height: 90 }}>
        <Skeleton height={30} count={3} />
      </div>
    )

  return (
    <div className="w-full flex flex-wrap justify-center gap-5">
      {countryList?.map((country) => {
        return (
          <>
            <Card className="w-60 flex flex-col relative cursor-pointer" onClick={() => handleSelectCountry(country)}>
              <CardHeader>
                <CardTitle className="w-[80%]">{country?.name.common}</CardTitle>
                <CardDescription>{country?.name.official}</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-1">
                <span className="font-bold">Capital:</span>
                <span>{country?.capital?.[0] ? country?.capital : 'Not Applicable'}</span>
              </CardContent>
              <CardFooter className="mt-auto">
                <p>Learn More</p>
              </CardFooter>
              <div className="rounded-full border border-gray-500 overflow-hidden flex items-center justify-center h-7 w-7 absolute top-2 right-2">
                <img src={country?.flags?.svg} className="w-full h-full object-cover" />
              </div>
            </Card>
          </>
        )
      })}
    </div>
  )
}

export default SearchResult
