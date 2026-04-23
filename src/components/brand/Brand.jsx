import { FaLocationDot } from 'react-icons/fa6'

const Brand = () => {
  return (
    <div className="flex items-center justify-center">
      <FaLocationDot size={43} className="bounce2" />
      <span className="text-[48px] font-semibold" style={{ fontFamily: 'Oswald' }}>
        WanderPedia
      </span>
    </div>
  )
}

export default Brand
