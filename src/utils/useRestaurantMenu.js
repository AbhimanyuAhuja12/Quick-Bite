import { useEffect, useState } from "react";
import { RestaurantApi } from "./constants";

const useRestaurantMenu=(resId)=>{

    const[resInfo,setresInfo]=useState(null);
  
    useEffect(()=>{
      fetchData();
    },[])

    const fetchData= async ()=>{
      const data= await fetch(RestaurantApi + resId);
      const json =await data.json();

      setresInfo(json.data);
    }


    return resInfo;
}

export default useRestaurantMenu;