const NumberBullet = ({ number }) => {
  return <div className="bg-gray-600 text-white rounded-full w-fit px-3 py-1">{number}</div>
}

const Instructions = () => {
  return (
    <div className="bg-[#EAEAEA] w-full h-80 flex p-12 rounded-xl items-start justify-center gap-10">
      <div className="w-[28%] gap-3 flex flex-col border-black p-6 h-full ">
        <NumberBullet number={1} />
        <span className="font-bold">Search for a country</span>
        <p className="text-sm">You can use the name commonly associated with the country, or other alternative names you are familiar with.</p>
      </div>
      <div className="w-[28%] gap-3 flex flex-col border-black border-l p-6 h-full ">
        <NumberBullet number={2} />
        <span className="font-bold">View Country Info</span>
        <p className="text-sm">Clicking on the country you have searched will show you various information about that country</p>
      </div>
      <div className="w-[28%] gap-3 flex flex-col border-black border-l p-6 h-full ">
        <NumberBullet number={3} />
        <span className="font-bold">Tailor your search</span>
        <p className="text-sm">Take advantage of the multiple filtering options to further tailor fit your search.</p>
      </div>
    </div>
  )
}

export default Instructions
