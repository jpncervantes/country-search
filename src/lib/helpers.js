export function debounce(fn, delay) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export function sortCountriesByName(countries) {
  if (!Array.isArray(countries)) return countries
  return [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common))
}
