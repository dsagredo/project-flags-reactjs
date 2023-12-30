import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import getCountry from '../api/countryAPI';
import { Data, CountryAPI } from '../interface/Country.interface';

const initialState: Data = {
    data: [],
    loading: false,
    message: '',
    filtered: null,
};

export const getCountries = createAsyncThunk(
    'countries/getCountries',
    async () => {
        const { data } = await getCountry();
        return data;
    }
);

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        filterCountries(state, action) {
            state.filtered = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getCountries.fulfilled,
            (state, action: PayloadAction<CountryAPI[]>) => {
                state.data = action.payload;
                state.loading = true;
            }
        );
    },
});

export const { filterCountries } = countrySlice.actions;

export default countrySlice.reducer;
