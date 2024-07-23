import {CDN_URL} from "../utils/constants"
const ItemList=({items})=>{
    console.log(items);
    return(
        <div>
          
            {items.map(item=>
                 <div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between" key={item.card.info.id}>
            <div className="w-9/12">
                <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>-₹{item.card.info.price ?  item.card.info.price/100: item.card.info.defaultPrice/100}

                </span>
               
                </div>
                
                <p className="text-xs ">{item.card.info.description}</p>
            </div>
                <div >
                <div className="absolute">
                    <button className="bg-black text-white p-2 shadow-lg mx-auto rounded m-auto">Add+</button>
                    </div>
                <img src={CDN_URL+ item.card.info.imageId} 
                    className="w-36 " />
                   
                </div>
            </div>)}
          
        </div>
    )
}

export default ItemList;