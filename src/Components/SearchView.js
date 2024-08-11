import Hero from './Hero'
import React from 'react';
//TMDB API KEY 0b2244f98a7beac525e24f701d165592
//example url= https://api.themoviedb.org/3/search/movie?query=starwars&include_adult=false&language=en-US&page=1

const SearchView=({keyword,searchResults})=>{
    const title=`You are searching for ${keyword}`
    const resulthtml=searchResults.map((obj,i)=>{
        return(<div key={i}>{obj.original_title}</div>)
    })
    return (<>
        <Hero text={title} />
        {resulthtml}
    </>)
}

export default SearchView ;