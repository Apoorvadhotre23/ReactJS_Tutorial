import "./Header.css"
import {useSelector} from "react-redux"

function Cart() {
  const selector = useSelector((state)=>state.cart.value)
  return (
    
    <div>
        <div className="cart">
        🛒
        <span className="cart-count">{selector}</span>
      </div>
    </div>
  )
}

export default Cart