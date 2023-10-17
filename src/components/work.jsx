import RestaurantIcon from "@mui/icons-material/Restaurant"
import PanToolAltIcon from '@mui/icons-material/PanToolAlt'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

const Work = () => {
  return (
    <div className="work-container">
      <h4>Work</h4>
      <h1>How It Works</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        <br />
        repudiandae dolorem quas iure enim saepe, sit libero dicta
        <br />
        dolores architecto hic deserunt quod <br />
        rerum neque natus.
        <br />
      </p>
      <div className="card-container">
        <div className="cards">
          <RestaurantIcon style={{ color: "#FE9E0D", fontSize: "6rem" }} />
          <h3>Pick Meals</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita, dolorem harum. Vitae nulla et sapiente earum eaque.
          </p>
        </div>
        <div className="cards">
            <PanToolAltIcon style={{ color: "#FE9E0D", fontSize: "6rem" }} />
            <h3>Choose How Often</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita, dolorem harum. Vitae nulla et sapiente earum eaque.
          </p>
        </div>
        <div className="cards">
        <LocalShippingIcon style={{ color: "#FE9E0D", fontSize: "6rem" }} />
        <h3>Fast Deliveries</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita, dolorem harum. Vitae nulla et sapiente earum eaque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Work
