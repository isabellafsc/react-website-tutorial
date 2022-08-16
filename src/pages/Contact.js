import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}> </div>
      <div className="rightSide">
        <h1> Contact Us </h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name"> Full Name </label>
          <input name="name" placeholder="Enter full name..." type="text" required />

          <label htmlFor="email"> Email </label>
          <input name="email" placeholder="Enter email..." type="email" required />

          <label htmlFor="message"> Message </label>
          <textarea name="message" placeholder="Enter message..." rows="6" required> </textarea>

          <button type='submit'> Send Message </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
