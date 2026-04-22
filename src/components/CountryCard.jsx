const CountryCard = ({ country, selectCountry }) => {
    return <div
        className="size-24 p-2 flex flex-col justify-center items-center border rounded-2xl shadow-sm/20 cursor-pointer
    hover:scale-110 hover:shadow-md/20 transition-all"
        title={country.name.common}
        onClick={() => selectCountry(country)} >
        <img src={country.flags.svg} alt={country.flags.alt} className="h-1/2 w-auto border" />
    </div>
}

export default CountryCard