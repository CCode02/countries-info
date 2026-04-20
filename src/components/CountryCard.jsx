const CountryCard = ({ country }) => {
    return <div className="size-24 p-2 flex flex-col justify-center items-center border rounded-2xl shadow-sm/20
    hover:scale-110 hover:shadow-md/20 transition-all">
        <img src={country.flags.svg} alt={country.flags.alt} className="h-1/2 w-auto" />
    </div>
}

export default CountryCard