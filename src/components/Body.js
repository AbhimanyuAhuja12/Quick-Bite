import ResturantCard from "./ResturantCard";
// import resList from "../utils/mockData";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";






const Body =()=>{
  // Local state variable - Super Powerful variable
  const [listOfResturants, setlistOfResturant]= useState([]);
  const [filteredResturant , setfilteredResturant] =useState([]);

  const [ searchText , setsearchText] =useState("");

  // console.log("body rendered")

useEffect(()=>{
 fetchData();
}, []);

 const fetchData =async()=>{
  // const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.6578133&lng=77.28181959999999");
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6578133&lng=77.28181959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  

  const json = await data.json();
  console.log(json);
  // optional chaining

  // setlistOfResturant(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);

  setlistOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setfilteredResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  // console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
 };

 // conditional rendering 
// if(listOfResturants.length===0){ 
//   return <Shimmer />
// }

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