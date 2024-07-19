import ResturantCard from "./ResturantCard";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js"
// import useCarouselData from "../utils/useCarouselData";





const Body =()=>{
  const [listOfResturants, setlistOfResturant]= useState([]);
  const [filteredResturant , setfilteredResturant] =useState([]);

  const [ searchText , setsearchText] =useState("");

// const [json] = useCarouselData();

useEffect(()=>{
 fetchData();
}, []);

 const fetchData =async()=>{
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6578133&lng=77.28181959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  

  const json = await data.json();
  console.log(json);


  setlistOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setfilteredResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
 
 }



const OnlineStatus=useOnlineStatus();
if(OnlineStatus===false) return (<h1>Looks like you are offline!! please check your internet connection</h1>);

    return listOfResturants.length===0 ? <Shimmer /> : (
       <div className="body">

       <div className="search">
        <input className="search-bar" type="text" 
        value={searchText} onChange={(e)=>{setsearchText(e.target.value)}} placeholder="search here" />
        <button id="submit" onClick={()=>{
          // filter logic
         

          const filteredResturant =listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
         
          setfilteredResturant(filteredResturant);
          

         }}
         >Search</button> 
       </div>
       
       <div className="filter">
        <button className="filter-btn" onClick={()=>{
          //filter logic here
          const filteredList =listOfResturants.filter((res)=> res.info.avgRating>4.2);
          // console.log(filteredList);
          setlistOfResturant(filteredList);
         

        }}>
        Top Rated Resturant
           </button>
       </div>


       <div className="resturant-container">
      
       {filteredResturant.map((resturant) => (
        <Link key={resturant.info.id}  to={"/restaurant/" + resturant.info.id}><ResturantCard resData={resturant} /> </Link>
        ))};
      
         {/* console.log(resList.get(0)); */}

    {/* //now listOfResturants is used for filtering only */}


       </div>
       </div>
    );
};


export default Body;