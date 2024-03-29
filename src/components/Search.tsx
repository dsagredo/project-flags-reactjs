import { useEffect, useState } from 'react';
import { filterCountries } from '../slices/CountrySlice';
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import Select from './Select';
import Input from './Input';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [regionValue, setRegionValue] = useState('');
    const { data } = useAppSelector((state: RootState) => state.country);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const searchByName = searchValue.toLowerCase();
        const searchByRegion = regionValue.toLowerCase();

        if (searchByName && searchByRegion) {
            dispatch(
                filterCountries(
                    data.filter(
                        (country) =>
                            country.name.common
                                .toLowerCase()
                                .includes(searchByName) &&
                            country.region.toLowerCase() === searchByRegion
                    )
                )
            );
        } else if (searchByRegion) {
            dispatch(
                filterCountries(
                    data.filter(
                        (country) =>
                            country.region.toLowerCase() === searchByRegion
                    )
                )
            );
        } else if (searchByName) {
            dispatch(
                filterCountries(
                    data.filter((country) =>
                        country.name.common.toLowerCase().includes(searchByName)
                    )
                )
            );
        } else {
            dispatch(filterCountries(data));
        }
    }, [dispatch, data, searchValue, regionValue]);

    return (
        <div className="flex flex-col lg:flex-row mb-16 gap-4 justify-between">
            <Input searchValue={searchValue} setSearchValue={setSearchValue} />
            <Select setRegionValue={setRegionValue} />
        </div>
    );
};

export default Search;
