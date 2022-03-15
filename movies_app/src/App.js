import './App.css';
import Search from './components/Search';
import React,{useState} from 'react';
import ListMovies from './components/ListMovies';
import Add from './components/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link } from "react-router-dom";
import Description from './components/Description';


function App() {
  const[rate,setRate]=useState(1);
  const[keyword,setKeyword]=useState("");
  const [movies,setMovies] = useState([
    {
      
        Title: "See",
        Description:
        "See:Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins ",
        Rating: 4,
        PosterURL:
        "https://www.apple.com/fr/tv-pr/shows-and-films/s/see/images/show-home-graphic-header/4x1/Apple_TV_See_Season_2_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1634104759153",
        trilerLink:"https//www.youtube.com/embed?v=7Rg0y7NT1gU" ,
    
      },
    {
        Title: "La Casa",
        Description:
        "See:Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins ",
        Rating: 2,
        PosterURL:
        "https://i.egycdn.com/pic/WmFwZndlY21ITm9ObW1qbUVFY2FtVEVtRXdUWVRi.jpg",
        trilerLink:"https://www.youtube.com/embed/?v=zlgco9hNJpg"
    },
    {
        Title: "The witcher",
        Description:
        "See:Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact ",
        Rating: 3,
        PosterURL:
        "https://www.filmlore.no/wp-content/uploads/2021/10/witcher2-1024x576.jpg",
        trilerLink:"https://www.youtube.com/embed/?v=ndl1W4ltcmg"
    },
    {
        Title: "Breaking bad",
        Description:
        "See:Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact,",
        Rating: 4,
        PosterURL:
        "https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/18/12/11/3956503.jpg",
        trilerLink:"https://www.youtube.com/embed/?v=HhesaQXLuRY"
    },
    {
        Title: "Paranormal",
        Description:
        "After a skeptical hematologist is plunged into a series of inexplicable events, he unwillingly becomes the go-to-guy for paranormal investigations.Oct 22, 2020",
        Rating: 5,
        PosterURL:
        "https://resizing.flixster.com/UL7sNvg2Y1unjIzDKXq8bOeL3WA=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p18925783_b_h9_aa.jpg",
        trilerLink:"https://www.youtube.com/embed/?v=LFtRkDC7aHc"
      },
    {
        Title: "Peaky blinders",
        Description:
        "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost  Jun 18, 2015",
        Rating: 3,
        PosterURL:
        "https://i2-prod.birminghammail.co.uk/incoming/article22381553.ece/ALTERNATES/s810/0_Peaky-Blinders.jpg",
        trilerLink:"https://www.youtube.com/embed/?v=oVzVdvGIC7U"
    
      }
    
  ])
  const dataRate=(r)=>{
    setRate(r)
    console.log(r)
  }
  /* const filterMovies = movies.filter(movie=>
    
    movie.name.toLowerCase().Includes(search.toLowerCase()) 
  ) */
  
const getData=(word)=>{
  setKeyword(word)
}
const handleAdd = (newMovie) => {
  setMovies([...movies,newMovie]);
  }
  return (
    <div className="App">
        <div className='headerr'>
          <img className='logo' alt='' src='http://maktechblog.com/wp-content/uploads/2016/04/Google-Play-Movies-TV-new-icon.png'/>
          <h1 className='application'>Movies Time </h1>
          
            <Search getData={getData} dataRate={dataRate} rate={rate}/>
            <Add  handleAdd={handleAdd} />
      </div>
      {/* routes */}
      <Routes className='liste'>
          <Route
            path="/"
            element={
              <ListMovies movies={movies.filter(el=> el.Rating >= rate && el.Title.toLowerCase().includes(keyword.trim().toLowerCase()))} />
            }
          />
          <Route
            path="/description/:id"
            element={<Description movies={movies} />}
          />
     
            {/* <Route  path='/description/Title' element={ <Description /> }/> */}
      </Routes>

     
      {/* <div className='liste'>
      <ListMovies movies={movies.filter(el=> el.Rating >= rate && el.Title.toLowerCase().includes(keyword.trim().toLowerCase()))} />

      </div> */}
    </div>
  );
}

export default App;
