import Cart from "./Cart";
import "./Header.css";


function Header() {
  return (
    <header className="header">
      <div className="logo">
        MyShop
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </nav>

      <Cart/>
      
    </header>
  );
}

export default Header;