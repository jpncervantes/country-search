import { debounce } from '@/lib/helpers'
import { Input } from '../ui/input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchKey } from '@/slice/appSlice'
import Instructions from '../user-instructions/Instructions'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const SearchBar = () => {
  const [showTutorial, setShowTutorial] = useState(true)

  const dispatch = useDispatch()

  const handleSearch = debounce((e) => {
    const value = e.target.value
    dispatch(setSearchKey(value))
  }, 300)
  return (
    <div className="w-full flex flex-col gap-5 items-center relative">
      <Input
        className="h-12 border-black border rounded-full p-5 pr-15 text-black placeholder-black"
        placeholder="Search a country"
        onChange={handleSearch}
      />
      <FaMagnifyingGlass className="absolute right-5 top-3" size={20} />
      {showTutorial ? (
        <Instructions toggleTutorial={(value) => setShowTutorial(value)} />
      ) : (
        <span
          className="text-[12px] underline cursor-pointer"
          onClick={() => {
            setShowTutorial(true)
          }}
        >
          Show Tutorial
        </span>
      )}
    </div>
  )
}

export default SearchBar
