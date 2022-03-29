import {useState, useEffect} from 'react'
import axios from 'axios'

import {Countries} from './components/Countries'
import {Pagination} from './components/Pagination'

function App() {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)

  useEffect(() => {
    const getCountries = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
        setIsLoading(false)
      } catch (isError) {
        setIsError(console.log(isError))
      }
    }
    getCountries()
  }, [])

  const lastCoytryIndex = currentPage * countriesPerPage
  const firstCoytryIndex = lastCoytryIndex - countriesPerPage
  const currentCountry = countries.slice(firstCoytryIndex, lastCoytryIndex)

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={currentCountry} isLoading={isLoading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
      />
    </div>
  )
}

export default App
