import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="restaurant-card flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-[250px] h-[350px] mx-2 my-5 p-4 transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg hover:shadow-custom">
      <div className="thumb relative h-[150px] w-full shadow-md">
        <span id="close-modal" className="absolute top-0 right-0 w-6 h-6 bg-black text-white text-center text-sm cursor-pointer transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black">💌</span>
        <img src={CDN_URL + resData.info.cloudinaryImageId} alt="Restaurant" className="w-full h-full object-cover object-center" />
      </div>
      <div className="content flex-1 p-2">
        <header className="content-header border-b border-gray-300 pb-1 mb-2">
          <div className="flex justify-between items-center">
            <h2 className="recipe-title font-bold text-sm">{resData.info.name}</h2>
            <div className="user-rating flex items-center">
              <i className="icon ion-ios-star-outline text-yellow-400 text-xl"></i>
              <span className="ml-1 text-sm font-bold">{resData.info.avgRating}</span>
            </div>
          </div>
        </header>
        <ul className="recipe-details flex justify-between mb-2 text-gray-700 text-xs">
          <li className="recipe-details-item flex-1 text-center">
            <i className="icon ion-ios-time-outline text-2xl"></i>
            <span className="value block text-pink-500 text-lg font-bold">{resData.info.sla.deliveryTime}</span>
            <span className="title block text-xs font-light">Minutes</span>
          </li>
          <li className="recipe-details-item flex-1 text-center">
            <i className="icon ion-ios-restaurant-outline text-2xl"></i>
            <span className="value block text-pink-500 text-lg font-bold">{resData.info.cuisines.length}</span>
            <span className="title block text-xs font-light">Cuisines</span>
          </li>
        </ul>
        <p className="description text-gray-600 text-xs mb-2">{resData.info.cuisines.join(", ")}</p>
        <footer className="content-footer text-center">
          <a href="#" className="block bg-pink-500 text-white text-sm font-medium py-1 px-2 rounded transition-transform duration-250 ease-in-out hover:translate-y-[-2px] hover:shadow-lg">Menu</a>
        </footer>
      </div>
    </div>
  );
};



 export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
