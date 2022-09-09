import CountryItem from "./CountryItem"
import IndividualItem from "./IndividualItem"

const CountryList = ({countries, onCountryClick})=>{
    const countryItems = countries.map((country)=>{
        return <CountryItem country = {country} key={country.cca2} onCountryClick={onCountryClick}/>
    })
    return (
        <div>
            <ul>
                {countryItems}
            </ul>
        </div>
    )
} 

export default CountryList