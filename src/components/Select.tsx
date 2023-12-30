const ContinentFilter = ({ setRegionValue }: any) => (
    <select
        className="shadow-md bg-gray-50 text-gray-500 p-3 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-pointer focus:border-gray-600 focus:ring-0 focus:outline-none"
        onChange={(e) =>
            setRegionValue(
                e.target.value.slice(0, 3) === 'All' ? '' : e.target.value
            )
        }
    >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
);

export default ContinentFilter;
