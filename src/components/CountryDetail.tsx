import { FC } from 'react';
import { RootState, useAppSelector } from '../app/store';
import { useParams, useNavigate } from 'react-router-dom';
import { CountryAPI } from '../interface/Country.interface';

const CountryDetail: FC = () => {
    const { name } = useParams();
    const { data } = useAppSelector((state: RootState) => state.country);
    const [country] = data.filter((item: any) => item.name.common === name);
    const navigate = useNavigate();
    const renderDetail = ({
        name,
        flags,
        population,
        region,
        subregion,
        capital,
        tld,
    }: CountryAPI) => (
        <>
            <div className="container mx-auto mb-16">
                <button
                    className="px-8 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg"
                    onClick={() => navigate(-1)}
                >
                    <i className="fa fa-arrow-left"></i> Back
                </button>
            </div>
            <div className="container flex mx-auto p-8 pl-0 pr-0 dark:text-white">
                <img
                    src={flags.svg}
                    className="rounded-2xl w-1/2"
                    alt={name.common}
                />
                <div className="p-8 pl-8">
                    <h2 className="font-bold text-2xl mb-8">{name.common}</h2>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <p>
                            Population:{' '}
                            <span className="dark:text-gray-400 text-gray-700 text-sm">
                                {population}
                            </span>
                        </p>
                        <p>
                            Region:{' '}
                            <span className="dark:text-gray-400 text-gray-700 text-sm">
                                {region}
                            </span>
                        </p>
                        <p>
                            Sub Region:{' '}
                            <span className="dark:text-gray-400 text-gray-700 text-sm">
                                {subregion}
                            </span>
                        </p>
                        <p>
                            Capital:{' '}
                            <span className="dark:text-gray-400 text-gray-700 text-sm">
                                {capital}
                            </span>
                        </p>
                        <p>
                            Top Level Domain:{' '}
                            <span className="dark:text-gray-400 text-gray-700 text-sm">
                                {tld}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

    return renderDetail(country);
};

export default CountryDetail;
