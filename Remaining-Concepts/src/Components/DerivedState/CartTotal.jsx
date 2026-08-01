
function CartTotal() {

    const item = [
        {name:"Laptop", price: 50000},
        {name:"Mouse", price: 1000},
        {name:"Laptop", price: 2000}
    ]

    const totalPrice = item.reduce((sum,i)=>sum + i.price, 0);
  return (
    <div>
        <h3>Cart Total</h3>
        {item.map((i, index)=>(
            <p key={index}>
                {i.name} - ₹{i.price}
            </p>
        ))}

        <h4>Total Price: {totalPrice}</h4>
    </div>
  )
}

export default CartTotal