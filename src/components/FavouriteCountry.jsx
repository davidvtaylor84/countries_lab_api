const FavouriteCountries = ({ countries, onCountrySelect }) => {

    const favouriteCountries = countries.filter(country => country.isFavourite)
  
    return (
      <>
      <div className="favourites">
        <h3>Favourite Countries</h3>
        <ul>
          {favouriteCountries.map(country => {
            return (
              <li key={country.cca2}>
                <button onClick={() => onCountrySelect(country.cca2)}>{country.name.official}</button>
                </li>
            )
          })}
        </ul>
        </div>
      </>
    )
  }
  
  export default FavouriteCountries