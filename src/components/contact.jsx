import { forwardRef } from "react"

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contact-container">
      <h2>
        Have Questions In Mind?
        <br />
        Let Us Help You
      </h2>
     <div className="email-container">
     <input type="text" placeholder="youremail@gmail.com" className="email-box" />
     <button className="submit-button" type="submit">Submit</button>
     </div>
    </div>
  )
})

export default Contact
