import { useRef } from 'react';
import Navbar from './navbar'
import Homepage from './homepage'
import About from './about'
import Testimonials from './testimonials';
import Work from './work';

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const testRef = useRef(null);
  return (
    <div className='container'>
      <Navbar aboutRef={aboutRef} homeRef={homeRef} testRef={testRef} />
      <Homepage ref={homeRef} />
      <About ref={aboutRef} />
      <Work />
      <Testimonials ref={testRef}/>
    </div>
  )
}

export default Home
