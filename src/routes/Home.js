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

      <div>
         <Link to="/about">About</Link>
         <ul className="grid">

            {data.map(each => {
               return (
                  <li key={each.id} className="li">
                     <Link to={`/movie/${each.id}`} className="imgdiv"><img src={each.medium_cover_image} alt="movie cover" /></Link>
                     <div className="textnp">
                        <h2> {each.title_english}</h2>
                        <p className="summary"> {each.summary.slice(0, 120) + "..."}</p>
                        <ul>{each.genres.map((e, i) => <li key={i}>{e}</li>)}</ul>
                     </div>

                     <br />
                     <br />
                     <br />
                  </li>
               )
            })}
         </ul>
      </div>

   );
}

export default Home;
