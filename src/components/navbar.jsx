import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = ({ homeRef, aboutRef, testRef, workRef, contactRef }) => {
  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToTest = () => {
    if (testRef.current) {
      testRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToWork = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <div className="home-container">
      <div className="brand-name">Foodie</div>
      <div className="nav-container">
        <button onClick={scrollToHome}>Home</button>
        <button onClick={scrollToAbout}>About</button>
        <button onClick={scrollToWork}>Work</button>
        <button onClick={scrollToTest}>Testimonials</button>
        <button onClick={scrollToContact}>Contact</button>
        <AiOutlineShoppingCart className="cart-icon" />
        <button className="booking-button">
          <button>Booking Now</button>
        </button>
      </div>
    </div>
  )
}

export default Navbar
