import { useEffect, useRef, useState } from "react"
import countriesService from './services/countries'
import CountryCard from "./components/CountryCard"
import CountryInfoModal from "./components/CountryInfoModal"

function App() {

  const [countries, setCountries] = useState([])
  const [countriesFiltered, setCountriesFiltered] = useState([])
  const [countryName, setCountryName] = useState('')
  const [countrySelected, setCountrySelected] = useState(null)

  const dialogRef = useRef()

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

  const selectCountry = (country) => {
    setCountrySelected(country)
    dialogRef.current.showModal()
  }

  return (
    <div className="flex flex-col w-full h-full px-4 py-12 md:p-12 items-center box-border">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        Search Country
      </h1>
      <input
        type="text"
        onChange={handleCountryNameChange}
        value={countryName}
        className="border py-2 px-8 text-3xl leading-none rounded-4xl mt-8 w-9/10 md:w-3/5 lg:w-2/5" />
      <div className="flex flex-wrap gap-6 mt-12 justify-center">
        {countriesFiltered.map(country => <CountryCard
          key={country.name.official}
          country={country}
          selectCountry={selectCountry} />)}
      </div>
      <dialog
        ref={dialogRef}
        className='animate-in fade-in zoom-in backdrop:animate-in backdrop:fade-in m-auto h-fit w-full 
            max-w-4/10 rounded-lg bg-white p-0 shadow-xl duration-200 backdrop:bg-black/50 
            backdrop:backdrop-blur-sm backdrop:duration-300 starting:scale-95 starting:opacity-0 
            backdrop:starting:opacity-0' >
        <CountryInfoModal country={countrySelected} dialogRef={dialogRef} />
      </dialog>
    </div>
  )
}

export default App
