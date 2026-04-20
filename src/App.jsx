import { useEffect, useState } from "react"
import countriesService from './services/countries'
import CountryCard from "./components/CountryCard"

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService.getAll().then(response => setCountries(response))
  }, [])

  return (
    <div className="flex flex-col w-full h-screen p-12 items-center box-border">
      <h1 className="text-6xl font-bold">
        Search Country
      </h1>
      <input type="text" className="border py-2 px-4 text-4xl rounded-4xl mt-8" />
      <div className="flex flex-wrap gap-4 mt-12 justify-center">
        {countries.map(country => <CountryCard key={country.name.official} country={country} />)}
      </div>
    </div>
  )
}

export default App
