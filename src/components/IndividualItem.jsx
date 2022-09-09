import React from "react";


const IndividualItem = ({selectedCountry}) =>{
    if(!selectedCountry)return null
    return (
        <>
            <li>
                <h2>{selectedCountry.name.common}</h2>
                <p>Capital: {selectedCountry.capital}</p>
                <p>Population:{selectedCountry.population}</p>
                <p>Region:{selectedCountry.region}</p>
                <img src={selectedCountry.flags.png}/>
            </li>
        </>
    )
}

export default IndividualItem;

