import React from "react";
import { useLocation } from "react-router-dom";

const Description = ({movies}) => {
  const location = useLocation();
  console.log(location.state);
  const movie = movies.filter((el) => el.Title === location.state);
  return <div style={{ color: "red" }}>{movie[0].Description}</div>;
};

export default Description;