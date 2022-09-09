import React, {useState, useEffect} from "react";
// import CountryList from "../components/CountryList";
import IndividualItem from '../components/IndividualItem';
import TotalPopulationNumbers from "../components/TotalPopulationNumbers";
import CountrySelector from "../components/CountrySelector";
import FavouriteCountries from "../components/FavouriteCountry";

const CountryContainer = ()=>{

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(()=>{
        getCountries();
    }, [])

    const getCountries = function(){
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(countries=>setCountries(countries))
    }
    
    // const onCountryClick = function(countries){
    //     setSelectedCountry(countries);
    // }
    
    const onCountrySelect= (country)=>{
        setSelectedCountry(country)
    }
   
    const thisCountry = countries.find(country => country.cca2 === selectedCountry)

    const handleFavouriteToggle = (cca2) => {
        const updatedCountries = countries.map((country) => {
          return country.cca2 === cca2
            ? {...country, isFavourite: !country.isFavourite}
            : country
        })
        setCountries(updatedCountries)
      }

    // const onCountrySelect = cca2 => {
    //     setSelectedCountry(cca2)
    //   }


    return (
        <>
        <div className="container">
        <h1>Countries of the World</h1>
        <TotalPopulationNumbers countries={countries}/>
        <CountrySelector country={selectedCountry} countries={countries} onCountrySelect={onCountrySelect}/>
        <FavouriteCountries onCountrySelect={onCountrySelect} countries={countries}/>
        <IndividualItem selectedCountry={thisCountry} onFavouriteToggle={handleFavouriteToggle}/>
        {/* <CountryList countries={countries} onCountryClick={onCountryClick}/> */}
        </div>
        </>
    )
}

export default CountryContainer;