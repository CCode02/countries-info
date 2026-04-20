import { useEffect, useState } from "react"
import countriesService from './services/countries'
import CountryCard from "./components/CountryCard"

function App() {

  const [countries, setCountries] = useState([])
  const [countriesFiltered, setCountriesFiltered] = useState([])
  const [countryName, setCountryName] = useState('')

  useEffect(() => {
    countriesService.getAll().then(response => {
      setCountries(response)
      setCountriesFiltered(response)
    })
  }, [])

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value)
    setCountriesFiltered(countries.filter(c => c.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div className="flex flex-col w-full h-screen p-12 items-center box-border">
      <h1 className="text-6xl font-bold">
        Search Country
      </h1>
      <input 
      type="text" 
      onChange={handleCountryNameChange}
      value={countryName}
      className="border py-2 px-4 text-4xl rounded-4xl mt-8" />
      <div className="flex flex-wrap gap-4 mt-12 justify-center">
        {countriesFiltered.map(country => <CountryCard key={country.name.official} country={country} />)}
      </div>
    </div>
  )
}

export default App
