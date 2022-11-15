import axios from 'axios';
import { CountryAPI } from "../interface/Country.interface";

const getCountry = () => {
	const resp = axios.get<CountryAPI[]>('https://restcountries.com/v3.1/all');
	return resp;
}

export default getCountry;