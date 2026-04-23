import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { setSelectedCountry } from '@/slice/appSlice'

// Helper to bold matching parts
function highlightMatch(text, searchKey) {
  if (!searchKey) return text
  const regex = new RegExp(`(${searchKey})`, 'gi')
  const parts = String(text).split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? (
      <b key={i} className="underline font-bold">
        {part}
      </b>
    ) : (
      part
    )
  )
}

function getMatchingNameFields(nameObj, searchKey) {
  if (!searchKey || !nameObj) return []
  const matches = []

  // Check top-level fields
  ;['common', 'official'].forEach((field) => {
    if (nameObj[field] && nameObj[field].toLowerCase().includes(searchKey.toLowerCase())) {
      matches.push({
        label: field.charAt(0).toUpperCase() + field.slice(1),
        value: highlightMatch(nameObj[field], searchKey)
      })
    }
  })

  // Check nativeName fields
  if (nameObj.nativeName) {
    Object.entries(nameObj.nativeName).forEach(([lang, obj]) => {
      ;['common', 'official'].forEach((field) => {
        if (obj[field] && obj[field].toLowerCase().includes(searchKey.toLowerCase())) {
          matches.push({
            label: `Native (${lang}) ${field.charAt(0).toUpperCase() + field.slice(1)}`,
            value: highlightMatch(obj[field], searchKey)
          })
        }
      })
    })
  }

  return matches
}

const SearchResult = ({ countryList }) => {
  const dispatch = useDispatch()
  const { searchKey } = useSelector((state) => state.country)
  const handleSelectCountry = (country) => {
    dispatch(setSelectedCountry(country))
  }
  return (
    <div className="w-full flex flex-wrap justify-center gap-5 pt-5">
      {countryList?.map((country, i) => {
        let nameMatches = getMatchingNameFields(country?.name, searchKey)
        nameMatches = nameMatches.filter((match) => match.label.startsWith('Native'))
        return (
          <Card key={i} className="w-60 flex flex-col relative cursor-pointer" onClick={() => handleSelectCountry(country)}>
            <CardHeader>
              <CardTitle className="w-[80%]">{highlightMatch(country?.name.common, searchKey)}</CardTitle>
              <CardDescription>{highlightMatch(country?.name.official, searchKey)}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <div>
                <span className="font-bold">Capital: </span>
                <span>{country?.capital?.[0] ? country?.capital : 'Not Applicable'}</span>
              </div>

              <div>
                {nameMatches?.length > 0 ? (
                  <div>
                    <span className="font-bold">{nameMatches[0].label}:</span> {nameMatches[0].value}
                  </div>
                ) : null}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <p>Learn More</p>
            </CardFooter>
            <div className="rounded-full border border-gray-500 overflow-hidden flex items-center justify-center h-7 w-7 absolute top-2 right-2">
              <img src={country?.flags?.svg} className="w-full h-full object-cover" />
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default SearchResult
