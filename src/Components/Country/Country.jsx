import React from 'react';
import './Country.css'
const Country = ({country}) => {
     console.log(country.area.area)

     const handelVisited = () =>{
        console.log('button clicked')
     }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area}{country.area.area > 30000 ? "Big Country" : 'Small country' }</p>
            <button onClick={handelVisited}>Not Visited</button>
        </div>
    );
};

export default Country;