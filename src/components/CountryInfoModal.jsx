import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const CountryInfoModal = ({ country, dialogRef }) => {
    return <>
        {!country
            ? null
            :
            <div className="flex flex-col h-full overflow-hidden p-4 items-center" >
                <button className='cursor-pointer' onClick={() => dialogRef.current.close()} >
                    <FontAwesomeIcon icon={faCircleXmark} size='lg' className='absolute right-4' />
                </button>


                <h2 className="text-3xl md:text-4xl font-bold mb-4" >
                    {country.name.common}
                </h2>

                <div className="flex flex-col md:flex-row w-full justify-between gap-2">
                    <div className='flex flex-col'>
                        <p><strong>Ofiicial name: </strong>{country.name.official}</p>
                        <p><strong>Region: </strong>{country.region}</p>
                        <p><strong>Capital: </strong>{country.capital}</p>
                        <p><strong>Population: </strong>{country.population}</p>
                        <p><strong>independent: </strong>{country.independent ? 'yes' : 'no'}</p>
                    </div>
                    <div className='flex w-full justify-center items-center'>
                        <img
                            src={country.flags.svg}
                            alt={country.flags.alt}
                            className="h-30 w-auto max-w-50 border rounded-md" />
                    </div>
                </div>
                <div>
                </div>
            </div>
        }
    </>
}

export default CountryInfoModal