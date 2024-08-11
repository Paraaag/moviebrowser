import React, { useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  console.log(id);
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    const fetch = require("node-fetch");

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjIyNDRmOThhN2JlYWM1MjVlMjRmNzAxZDE2NTU5MiIsIm5iZiI6MTcyMzI3OTk1MC40NzU1NzUsInN1YiI6IjY2YjcyODJkNmY5MmI3NjcyOGFhOGM4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O81FSZSILrO-iWP8Hsw_H79BXiyWNpu8XLpbpVZXHFM",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then(data=>{
        
        setTimeout(()=>{
          setMovieDetails(data);
          setIsLoading(false);
        },2000)
      })
  }, [id]);

  function renderMovieDetails(){
    if(isLoading)
    {
      return <Hero text="Loading..."/>
    }
    if(movieDetails)
    {
      const posterPath=`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
      const backdropUrl=`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
      return( <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                    <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
              </div>
              <div className="col-md-9">
                    <h2>{movieDetails.original_title}</h2>
                    <p className="lead">{movieDetails.overview}</p>
              </div>

            </div>

          </div>
          </>
      )

    }
  }
  return renderMovieDetails();
};

export default MovieView;
