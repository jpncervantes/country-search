const NumberBullet = ({ number }) => {
  return <div className="bg-gray-600 text-white text-[12px] rounded-full h-5 w-5 flex items-center justify-center">{number}</div>
}

const Instructions = () => {
  return (
    <div className="bg-[#F4F4F4] w-fit flex flex-col p-5 rounded-[20px] items-center justify-center gap-3">
      <span className="text-[12px]">How to Use:</span>
      <div className="flex w-full justify-center gap-5">
        <div className=" gap-3 flex justify-center">
          <NumberBullet number={1} />
          <span className="font-bold text-[12px] items-center flex">Search for a country</span>
        </div>
        <div className="gap-3 flex justify-center">
          <NumberBullet number={2} />
          <span className="font-bold text-[12px] items-center flex">View country info by clicking a card</span>
        </div>
      </div>
    </div>
  )
}

export default Instructions
