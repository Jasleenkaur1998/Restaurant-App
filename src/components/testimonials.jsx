import { forwardRef } from "react"
import StarRateIcon from "@mui/icons-material/StarRate"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

const Testimonials = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="test-container">
      <h4>Testimonials</h4>
      <h1>What are they saying</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        <br />
        repudiandae dolorem quas iure enim saepe, sit libero dicta
        <br />
        dolores architecto hic deserunt quod <br />
        rerum neque natus.
        <br />
      </p>
      <div className="test-card">
        <span className="profile-icon">
          <AccountCircleIcon sx={{fontSize:"5rem", color: "#FE9E0D"}} />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          <br />
          repudiandae dolorem quas iure enim saepe, sit libero dicta
          <br />
          dolores architecto hic deserunt quod <br />
          rerum neque natus.
          <br />
        </p>
        <StarRateIcon style={{color: "#FE9E0D"}} />
        <StarRateIcon style={{color: "#FE9E0D"}}/>
        <StarRateIcon style={{color: "#FE9E0D"}}/>
        <StarRateIcon style={{color: "#FE9E0D"}}/>
        <h3>John Doe</h3>
      </div>
    </div>
  )
})

export default Testimonials
