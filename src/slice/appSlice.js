import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchKey: '',
  isLoading: false,
  list: [],
  selectedCountry: undefined
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSearchKey: (state, action) => {
      state.searchKey = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCountryList: (state, action) => {
      state.list = action.payload
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload
    }
  }
})

export const { setSearchKey, setIsLoading, setCountryList, setSelectedCountry } = countrySlice.actions
export default countrySlice.reducer
