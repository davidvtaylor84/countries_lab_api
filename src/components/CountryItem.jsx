
const CountryItem =({country, onCountrySelect}) =>{

    if (!country) {
        return null
      }
    
    const handleChange = function(){
        onCountrySelect(country)
    }

    return (
        <div>
            <li onChange={handleChange}>{country.name.common}</li>
        </div>
    )
}

export default CountryItem
