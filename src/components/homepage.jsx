import { forwardRef } from "react"
import food from "../assets/home-banner-image.png"

const Homepage = forwardRef((props, ref) => {
  return (
    <div className="main-content-container">
      <div className="main-content">
        <h1>
          Your favourite food <br />
          Delivered Hot & <br />
          Fresh
        </h1>
        <div>
          Healthy switcher chefs do all the prep work, like
          <br />
          peeling, chopping and marinating, so you can cook <br /> a fresh food
        </div>
        <button className="order-button" type="button">Order Now</button>
      </div>
      <div>
        <img src={food} alt="" />
      </div>
    </div>
  )
})

export default Homepage
