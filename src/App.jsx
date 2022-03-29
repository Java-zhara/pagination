import { useState, useEffect } from "react";
import axios from "axios";

import { Countries } from "./components/Countries";
import { Pagination } from "./components/Pagination";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  useEffect(() => {
    const getCountries = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(console.log(error));
      }
    };
    getCountries();
  }, []);

  const lastCoytryIndex = currentPage * countriesPerPage;
  const firstCoytryIndex = lastCoytryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCoytryIndex, lastCoytryIndex);

  const paginate = (numberPage) => setCurrentPage(numberPage);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={currentCountry} isLoading={isLoading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
      <button className="btn btn-primary" onClick={prevPage}>
        Назад
      </button>
      <button className="btn btn-primary ms-2" onClick={nextPage}>
        Вперед
      </button>
    </div>
  );
}

export default App;
