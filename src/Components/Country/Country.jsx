import React, { useState } from 'react';
import './Country.css'

   const Country = ({country, handelVisitedCountries, handelVisitedFlag}) => {

    const[visited, setVisited] = useState(false);

     //console.log(country.area.area)
   //console.log(handelVisitedCountries);

      const handelVisited = () =>{
        //1st way
    //     if(visited){
    //         setVisited(false)
    //     }
    //     else{
    //         setVisited(true)
    //     }
       //2nd way
    //setVisited(visited ? false : true);
    //3rd way
    setVisited(!visited);
    handelVisitedCountries(country);
     }

    return (
         //<div className={`country ${visited && 'country-visited'}`}>
        <div className= {`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area}{country.area.area > 30000 ? "Big Country" : 'Small country' }</p>

            <button onClick={handelVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            <button onClick={() =>{handelVisitedFlag(country?.flags?.flags?.png)}}>Add Visited Flag</button>
        </div>
        //</div>
    );
};

export default Country;