const Input = ({ searchValue, setSearchValue }: any) => (
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
            </svg>
        </div>
        <input
            type="search"
            className="shadow-md p-3 pl-10 bg-gray-50 rounded-lg dark:bg-gray-700"
            placeholder="Search for a country..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
    </div>
);

export default Input;
