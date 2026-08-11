import { addItem , removeItem, clearItems} from "../redux/slice";
import "./Product.css";
import {useDispatch} from "react-redux"

function Product() {
  const dispatch = useDispatch();

  return (
    <div className="product-container">

      <div className="product-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQT1-KNcPFmJjkY5wby7B-nl_ogb1ArmnNKauKimuDg&s=10"
          alt="Wireless Headphones"
        />
      </div>

      <div className="product-details">

        <h1>Wireless Headphones</h1>

        <h2>₹1,499</h2>

        <p>
          Enjoy high-quality sound with these comfortable wireless
          headphones. Perfect for music, calls, and everyday use.
        </p>

        <p><strong>Brand:</strong> Boat</p>
        <p><strong>Category:</strong> Electronics</p>
        <p><strong>Color:</strong> Black</p>
        <p><strong>Availability:</strong> In Stock</p>

        <button className="add-cart-btn" onClick={()=>dispatch(addItem())}>
          Add to Cart
        </button>

        <button className="add-cart-btn remove" onClick={()=>dispatch(removeItem())}>Remove from cart</button>
        <button className="add-cart-btn clear" onClick={()=>dispatch(clearItems())}>clear cart</button>

      </div>

    </div>
  );
}

export default Product;