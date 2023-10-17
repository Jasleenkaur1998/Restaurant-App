import React from "react";
import image from "../assets/about-background-image.png";

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-container">
      <img src={image} alt="foodImage" />
      <div>
        <h4>About</h4>
        <h1>
          Food Is An Important
          <br />
          Part Of A Balanced
          <br />
          Diet
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
          <br />
          totam in assumenda voluptate neque possimus voluptas, hic ullam
          impedit <br />
          repellendus laborum sit expedita, officiis
        </p>
        <button type="button" className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
});

export default About;
