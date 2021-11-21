import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios"

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://yts.mx/api/v2/list_movies.json?limit=10")
      .then(res => {
        console.log(res.data.data.movies)
        setData(res.data.data.movies)
      })
  }, [])

  return (

      <center className="App">
         <Link to="/about">About</Link>
        {data.map(each => {
          return (
            <li key={each.id} className="grid">
              <Link to={`/movie/${each.id}`}><img src={each.medium_cover_image} alt="movie cover" /></Link>
              <h2> {each.title_english}</h2>
              <p> {each.summary}</p>
              <ul>{each.genres.map((e, i) => <li key={i}>{e}</li>)}</ul>
              <br />
              <br />
              <br />
            </li>
          )
        })}
      </center>

  );
}

export default Home;
