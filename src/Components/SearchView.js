import Hero from "./Hero";
import React from "react";
//TMDB API KEY 0b2244f98a7beac525e24f701d165592
//example url= https://api.themoviedb.org/3/search/movie?query=starwars&include_adult=false&language=en-US&page=1
import {Link} from 'react-router-dom'
const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl=`/movies/${movie.id}`
  return (<div className="col-lg-3 col-md-3 col-2 my-4">
    <div className="card">
      <img
        src={posterUrl}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p className="card-text">
        </p>
        <Link to={detailUrl} className="btn btn-primary">
          Show Details
        </Link>
      </div>
    </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resulthtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  return (
    <>
      <Hero text={title} />
      {resulthtml && (
        <div className="container">
          <div className="row">{resulthtml}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
