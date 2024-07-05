import { CDN_URL } from "../utils/constants";

const ResturantCard =(props)=>{
    const {resData} = props;
      return(
         <div className="res-card">
  
           <img className="res-logo"  
          src={CDN_URL +resData.info.cloudinaryImageId} /> 
  
  
            <h3 className="res-name">{resData.info.name}</h3>

            <div className="res-external-container">

            <div className="res-details"> 

            <h4 className="res-rating">⭐{resData.info.avgRating}</h4>
  
        
            <h4 className="res-timeDelivery">{resData.info.sla.deliveryTime}minutes</h4>
  
            </div>
            
            <h4 className="foodtype">{resData.info.cuisines.join(" ,")}</h4>
  
            </div>
            </div>
  
      
        
      ); 
  };

  export default ResturantCard