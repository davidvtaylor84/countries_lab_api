import React from "react";

const CountrySelector = ({countries, onCountrySelect})=>{


    const handleChange = event => {
        onCountrySelect(event.target.value)
    }


    return (
        <select defaultValue="" onChange = { handleChange } >
            <option value = "" disabled > Choose a country </option> {
                countries.map(country => {
                    return ( <option key = { country.cca2 } value = { country.cca2 }> { country.name.common } </option>
                    )
                })
            }
        </select>
    )}

export default CountrySelector
