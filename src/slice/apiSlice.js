import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCountryList } from './appSlice'

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    searchCountriesByName: builder.query({
      query: ({ name, fields }) => {
        const searchParams = new URLSearchParams({ fields }).toString()
        return `name/${encodeURIComponent(name)}${searchParams ? `?${searchParams}` : ''}`
      },
      providesTags: (result, error, arg) => [{ type: 'CountrySearch', id: arg?.name }]
    }),
    getAllCountries: builder.query({
      query: (params = {}) => {
        const searchParams = new URLSearchParams(params).toString()
        return `all${searchParams ? `?${searchParams}` : ''}`
      },
      providesTags: ['AllCountries']
    })
  })
})

export const { useSearchCountriesByNameQuery, useGetAllCountriesQuery } = countryApi
