import React, { useEffect } from 'react'

const useCarouselData=()=> {

    useEffect(()=>{
     fetchData();
    },[]);
       
        const fetchData =async()=>{
         const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6578133&lng=77.28181959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         
       
         const json = await data.json();
        //  console.log(json);
        return json;
        
      
}
// return json;

}

export default useCarouselData;
