import {FC} from 'react';

interface Flags {
	flag: string;
	name: string
	population: number;
	region: string;
	capital: string[];
}
const Country: FC<Flags> = ({
	name,
	flag,
	population,
	region,
	capital,
}) => (
	<div className="rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white">
		<img className="w-full rounded-tl-lg rounded-tr-lg" src={flag} alt={name} />
		<div className="p-4">
			<h3 className="font-bold mb-4">{name}</h3>
			<p className="text-xs">Population: <span className="text-gray-700 dark:text-gray-300">{population}</span></p>
			<p className="text-xs">Región: <span className="text-gray-700 dark:text-gray-300">{region}</span></p>
			<p className="text-xs">Capital: <span className="text-gray-700 dark:text-gray-300">{capital}</span></p>
		</div>
	</div>
);

export default Country;