import React from "react";


const IndividualItem = ({selectedCountry, onFavouriteToggle}) =>{
    if(!selectedCountry)return null

    const handleClick = () => {
        onFavouriteToggle(selectedCountry.cca2)
      }

    const favouriteBtnText = selectedCountry.isFavourite ? 'Remove from favourites' : 'Add to favourites'

    return (
        <div className="individual">
            <li>
                <h2>{selectedCountry.name.common}</h2>
                <p>Capital: {selectedCountry.capital}</p>
                <p>Population:{selectedCountry.population}</p>
                <p>Region:{selectedCountry.region}</p>
                <img src={selectedCountry.flags.png}/><br/>
                <button onClick={handleClick}>{favouriteBtnText}</button>
            </li>
        </div>
    )
}

export default IndividualItem;

