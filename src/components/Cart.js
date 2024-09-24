import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price =
      item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100;
    return total + price;
  }, 0);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="p-2 m-2 rounded-lg text-white bg-black"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is Empty. Add Items to Cart</h1>}

      {/* Display Cart Items */}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>

      {/* Display Total Price */}
      {cartItems.length > 0 && (
        <div className="font-bold text-xl mt-4">
          Total Price: ₹{totalPrice}
        </div>
      )}

      {/* Order Now Button */}
      {cartItems.length > 0 && (
        <button className="p-3 mt-4 bg-green-500 text-white rounded-lg">
          Order Now
        </button>
      )}
    </div>
  );
};

export default Cart;
