import { useRef } from "react"
import Navbar from "./navbar"
import Homepage from "./homepage"
import About from "./about"
import Testimonials from "./testimonials"
import Work from "./work"
import Contact from "./contact"
import Footer from "./footer"

const Home = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const testRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="container">
      <Navbar
        aboutRef={aboutRef}
        homeRef={homeRef}
        testRef={testRef}
        workRef={workRef}
        contactRef={contactRef}
      />
      <Homepage ref={homeRef} />
      <About ref={aboutRef} />
      <Work ref={workRef} />
      <Testimonials ref={testRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}

export default Home
