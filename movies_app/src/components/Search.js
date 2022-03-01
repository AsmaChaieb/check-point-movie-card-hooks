import React,{useState}  from 'react'
import StarRatingComponent from 'react-star-rating-component';



const Search = ({getData,dataRate,rate}) => {
    const [rating, setRating] = useState(1)
    
const onStarClick=(nextValue, prevValue, name) =>{
    dataRate(nextValue);
  }
    return (
        

                    <div classNames="searchbox-wrap">
                    <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={rate}
                    onStarClick={onStarClick}
                    />
                    <input type="text"
                    placeholder="Search for a movie..." 
                    className="searchbox"
                    onChange={e=> getData(e.target.value)}
                    
                    />
                </div>

        
    )
    }

export default Search