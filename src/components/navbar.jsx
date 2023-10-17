import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = () => {
  return (
    <div className="home-container">
      <div className="brand-name">Foodie</div>
      <div className="nav-container">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <AiOutlineShoppingCart className="cart-icon" />
        <button className="booking-button"><a href="">Booking Now</a></button>
      </div>
    </div>
  )
}

export default Navbar
