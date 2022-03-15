import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Description = ({ movies }) => {
  const location = useLocation();
  console.log(location.state);

  const movie = movies.filter((el) => el.Title === location.state);
  return ( 
  <div>

    <div style={{ display:"flex" , justifyContent:"space-around"}}>
      

      <div style={{ color: "beige" , width:"500px"}}>{movie[0].Description}</div>

      <iframe width="560" height="315" src={movie[0].trilerLink}  title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
       </div>
       <div style={{ width:"300px" , backgroundColor:" "}}> <Link to="/">Go back</Link></div>
     
    
    </div>
  )
}

export default Description
