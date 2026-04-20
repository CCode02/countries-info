import { useEffect, useState } from "react"
import countriesService from './services/countries'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService.getAll().then(response => setCountries(response))
  },[])

  return (
    <div className="flex flex-col w-full h-screen p-12 items-center box-border">
    <h1 className="text-6xl font-bold">
      Search Country
      </h1>
    <input type="text" className="border py-2 px-4 text-4xl rounded-4xl mt-8" />
    </div>
  )
}

export default App
