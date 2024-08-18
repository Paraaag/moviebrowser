import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/AboutView";
import { Switch, Route } from "react-router-dom";
import SearchView from "./Components/SearchView";
import MovieView from "./Components/MovieView.js"
import { useState, useEffect } from "react";
import NotFound from "./Components/NotFound.js";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {

      const fetch = require('node-fetch');

      const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjIyNDRmOThhN2JlYWM1MjVlMjRmNzAxZDE2NTU5MiIsIm5iZiI6MTcyMzI3OTk1MC40NzU1NzUsInN1YiI6IjY2YjcyODJkNmY5MmI3NjcyOGFhOGM4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O81FSZSILrO-iWP8Hsw_H79BXiyWNpu8XLpbpVZXHFM'
        }
      };
      if(searchText)
      {fetch(url, options)
        .then(res => res.json())
        .then(data=>{
  setSearchResults(data.results)
})}  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={AboutView}></Route>
        <Route path="/search" exact>
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" exact component={MovieView}></Route>
        <Route path='*' component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
