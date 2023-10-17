import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <div>FOODIE</div>
        <div>
          <FacebookIcon /> <LinkedInIcon /> <YouTubeIcon /> <InstagramIcon />
        </div>
      </div>
      <div className="inner-footer-container">
        <div>
          Quality
          <br /> Careers
          <br /> Help
          <br /> Work
          <br /> Testimonials
        </div>
        <div>
          244-5333-7783 <br />
          hello@food.com <br />
          press@food.com <br />
          contact@food.com
        </div>
        <div>
          Terms & Conditions
          <br /> Privacy Policy
        </div>
      </div>
    </div>
  )
}

export default Footer
