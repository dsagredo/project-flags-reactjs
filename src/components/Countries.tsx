import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import { getCountries } from '../slices/CountrySlice';
import Country from './Country';
import Search from './Search';
import { CountryAPI } from '../interface/Country.interface';

const CountryList = (): JSX.Element => {
    const { data, loading, filtered } = useAppSelector(
        (state: RootState) => state.country
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const renderData = filtered ? filtered : data;

    if (!loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-center ">Loading...</p>
            </div>
        );
    }
    return (
        <div className="container px-4 mx-auto min-h-screen">
            <Search />
            {filtered && !filtered.length ? (
                <h4> No Contacts Matched</h4>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                    {renderData?.map(
                        (
                            {
                                name,
                                flags,
                                population,
                                region,
                                capital,
                            }: CountryAPI,
                            index
                        ) => (
                            <Link
                                to={{ pathname: `/country/${name.common}` }}
                                key={index}
                            >
                                <Country
                                    key={index}
                                    name={name.common}
                                    flag={flags.png}
                                    population={population}
                                    region={region}
                                    capital={capital}
                                />
                            </Link>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default CountryList;
