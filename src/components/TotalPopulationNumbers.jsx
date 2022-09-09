const TotalPopulationNumbers = function({countries}){
    const grandTotal = countries.reduce((total, countryPop)=>{
        return total+=countryPop.population
    },0);
    return (
        <div>
            <h3>Total World Population:{grandTotal}</h3>
        </div>
    )
};

export default TotalPopulationNumbers

