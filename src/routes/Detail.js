
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


const Detail = () => {
   const [data, setData] = useState([])
   const id = useParams().id


   useEffect(() => {
      const fetchData = async () => {
         const data = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
         console.log(data.data.data)
         setData(data.data.data.movie)
      }
      fetchData()


   }, [])

   return (
      
      <div>Hel
         <Link to="/">Home</Link>

         <div>
            <img src={data.medium_cover_image} alt="movie poster" />
         </div>

         {data.title}
         {data.description_intro}
      </div>
   )
}

export default Detail