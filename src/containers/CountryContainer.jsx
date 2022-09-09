import React, {useState, useEffect} from "react";
// import CountryList from "../components/CountryList";
import IndividualItem from '../components/IndividualItem';
import TotalPopulationNumbers from "../components/TotalPopulationNumbers";
import CountrySelector from "../components/CountrySelector";

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

    // const onCountrySelect = cca2 => {
    //     setSelectedCountry(cca2)
    //   }


    return (
        <>
        <TotalPopulationNumbers countries={countries}/>
        <CountrySelector country={selectedCountry} countries={countries} onCountrySelect={onCountrySelect}/>
        <IndividualItem selectedCountry={thisCountry} />
        {/* <CountryList countries={countries} onCountryClick={onCountryClick}/> */}
        </>
    )
}

export default CountryContainer;