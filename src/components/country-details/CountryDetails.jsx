import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Button } from '../ui/button'
import { setSelectedCountry } from '@/slice/appSlice'
import { FaArrowLeft, FaCircle, FaLeftRight } from 'react-icons/fa6'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'

const CountryDetails = ({ country, scrollContainerRef }) => {
  const { name, car } = country
  const dispatch = useDispatch()

  useEffect(() => {
    if (scrollContainerRef && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      console.log('scroll container to top called')
    }
  }, [scrollContainerRef])

  const handleBack = () => {
    dispatch(setSelectedCountry(undefined))
  }

  const currencyCode = Object.keys(country.currencies)[0]
  const currency = country?.currencies[currencyCode]
  return (
    <div className="w-full md:w-[70%]">
      <div className="flex items-center gap-1 cursor-pointer" onClick={handleBack}>
        <FaArrowLeft />
        <span>Go Back</span>
      </div>
      <div className="w-full flex justify-center flex-col items-center p-10">
        <span className="text-[13px] font-semibold">Official Name:</span>
        <span className="text-[48px] font-extrabold text-center">{name?.official}</span>
        <span className="text-[30px] font-semibold">{name?.common}</span>
      </div>
      <div className="flex md:flex-row flex-col items-start justify-start gap-10">
        <div className="flex flex-col md:w-[50%] gap-10">
          <Card className=" flex justify-center flex-col w-full">
            <CardHeader className="m-5 mb-2">
              <CardTitle className="text-[13px] font-semibold">Currency:</CardTitle>
            </CardHeader>
            <CardContent className="m-5 mt-0 font-extrabold">
              <div className="flex items-center gap-5">
                <span className="text-[32px]">{currency?.symbol}</span>
                <FaCircle size={10} />
                <span className="text-[32px]">{currency?.name}</span>
              </div>
            </CardContent>
            <CardFooter className="mt-auto pl-10">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(currency?.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Learn More
              </a>
            </CardFooter>
          </Card>
          <Card className=" flex justify-center flex-col">
            <CardHeader className="m-5 mb-2">
              <CardTitle className="text-[13px] font-semibold">Driving Information:</CardTitle>
            </CardHeader>
            <CardContent className="m-5 mt-0">
              <span className="text-[32px] font-bold">
                In {name?.common}, they drive on the <span className="italic font-extrabold">{car?.side}</span> side of the road
              </span>
            </CardContent>
          </Card>
        </div>

        <Card className="md:w-[50%] w-full flex justify-center items-center p-10 gap-3">
          <CardHeader className="m-5 mb-2 w-full">
            <CardTitle className="text-[13px] font-semibold">National Symbols:</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 w-full justify-center">
            <div className="flex flex-col gap-3 items-center">
              <span className="text-[13px] font-semibold">Flag:</span>
              <img src={country?.flags?.svg} alt="" height={200} width={200} className="border border-black rounded-lg" />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="text-[13px] font-semibold">Coat of Arms:</span>
              {country?.coatOfArms?.svg ? (
                <img src={country?.coatOfArms?.svg} alt="" height={200} width={200} className="border border-black rounded-lg" />
              ) : (
                <span>Nothing to Show</span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default CountryDetails
