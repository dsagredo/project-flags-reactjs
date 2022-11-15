const ContinentFilter = ({setRegionValue}: any) => (
  <select className="ml-auto text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" onChange={(e) => setRegionValue(e.target.value.slice(0, 3) === 'All' ? "" : e.target.value)}>
    <option value="All">Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
);

export default ContinentFilter;