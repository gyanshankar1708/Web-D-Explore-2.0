import React from 'react'
import './SiteStyles.css'

const Contact = () => {
  return (
    <main className="page">
      <section className="section-head">
        <p className="eyebrow">Contact</p>
        <h1>Let us connect</h1>
        <p className="section-text">
          Have questions, ideas, or want to collaborate? Send us a message and we will reach out.
        </p>
      </section>

      <section className="contact-grid">
        <article className="panel">
          <h3>Reach Us</h3>
          <p>Email: hello@webdexplore.dev</p>
          <p>Phone: +91 90000 00000</p>
          <p>Location: ISTE Student Chapter</p>
        </article>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message" />

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </main>
  )
}

export default Contact
