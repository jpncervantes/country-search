import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
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
