import { useDispatch } from 'react-redux'
import { Button } from '../ui/button'
import { setSelectedCountry } from '@/slice/appSlice'
import { FaArrowLeft, FaCircle, FaLeftRight } from 'react-icons/fa6'
import { Card } from '../ui/card'

const CountryDetails = ({ country }) => {
  const { name, car } = country
  const dispatch = useDispatch()

  const handleBack = () => {
    dispatch(setSelectedCountry(undefined))
  }

  const currencyCode = Object.keys(country.currencies)[0]
  const currency = country?.currencies[currencyCode]
  return (
    <div className="w-[70%]">
      <div className="flex items-center gap-1 cursor-pointer" onClick={handleBack}>
        <FaArrowLeft />
        <span>Go Back</span>
      </div>
      <div className="w-full flex justify-center flex-col items-center p-10">
        <span className="text-[48px] font-bold">{name?.official}</span>
        <span className="text-[20px] font-semibold">{name?.common}</span>
      </div>
      <div className="flex items-start justify-start gap-10">
        <div className="flex flex-col w-[50%] gap-10">
          <Card className=" flex justify-center flex-col p-10 bg-[#EFEFEF]">
            <span className="text-[13px] font-semibold">in {name?.common}, you pay with:</span>
            <div className="flex items-center gap-5">
              <span className="text-[32px] font-bold">{currency?.symbol}</span>
              <FaCircle size={10} />
              <span className="text-[32px] font-bold">{currency?.name}</span>
            </div>
          </Card>
          <Card className=" flex justify-center flex-col p-10 bg-[#EFEFEF]">
            <span className="text-[32px] font-bold">
              in {name?.common}, they drive on the {car?.side} side of the road
            </span>
          </Card>
        </div>

        <Card className="w-[50%] flex justify-center items-center p-10 gap-3 bg-[#EFEFEF]">
          <div className="flex flex-col gap-3 items-center">
            <span className="text-[13px] font-semibold">Flag:</span>
            <img src={country?.flags?.svg} alt="" height={200} width={200} className="border border-black rounded-lg" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span className="text-[13px] font-semibold">Coat of Arms:</span>
            <img src={country?.coatOfArms?.svg} alt="" height={200} width={200} className="border border-black rounded-lg" />
          </div>
        </Card>
      </div>
    </div>
  )
}
export default CountryDetails
