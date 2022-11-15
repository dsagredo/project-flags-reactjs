const Input = ({searchValue, setSearchValue}: any) => (
	<>
		<i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
		<input type="text" className="shadow-md ml-1 pl-10 p-2 rounded-md w-1/2 mb-2 md:w-1/3 lg:w-1/3 bg-gray-50 dark:bg-gray-700" placeholder="Search for a country..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
	</>
);

export default Input