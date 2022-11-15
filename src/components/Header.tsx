import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = ({theme, handleTheme}: any) => {
	return (
		<div className="w-100% shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-whit mb-16">
			<div className="flex container mx-auto">
				<h1>Where in the world?</h1>
				<div className="ml-auto font-medium text-sm md:text-textbase lg:text-xl" >
					<button onClick={handleTheme}>
						{theme ? <FaMoon /> : <FaRegMoon />}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header