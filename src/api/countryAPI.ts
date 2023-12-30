import axios from 'axios';
import { CountryAPI } from '../interface/Country.interface';

const getCountry = () => {
    const resp = axios.get<CountryAPI[]>(process.env.REACT_APP_API_BASE_URL!);
    return resp;
};
export default getCountry;
