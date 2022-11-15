import {useState, FC} from 'react';
import {Routes, Route} from "react-router-dom";
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    if (theme) {
      document.documentElement.classList.add('dark');
      setTheme(current => !current);
    } else {
      document.documentElement.classList.remove('dark')
      setTheme(current => !current)
    }
  }

  return (
    <div className="lg:w-full bg-white-100 dark:bg-gray-900 dark:text-white min-h-screen">
      <Header theme={theme} handleTheme={handleTheme} />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
