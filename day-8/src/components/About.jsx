import React from 'react'
import './SiteStyles.css'

const About = () => {
  return (
    <main className="page">
      <section className="section-head">
        <p className="eyebrow">About Us</p>
        <h1>Where curiosity turns into code</h1>
        <p className="section-text">
          Web D Explore 2.0 is a community-driven learning initiative focused on practical,
          project-based web development.
        </p>
      </section>

      <section className="split-layout">
        <article className="panel">
          <h3>Our Mission</h3>
          <p>
            Help learners move beyond tutorials by building real interfaces, collaborating,
            and learning industry-ready development habits.
          </p>
        </article>
        <article className="panel">
          <h3>What We Value</h3>
          <p>
            Consistency over intensity, clarity over complexity, and teamwork over individual
            silos.
          </p>
        </article>
      </section>

      <section className="timeline">
        <h2>Program Journey</h2>
        <div className="timeline-item">
          <span>Week 1</span>
          <p>Core web fundamentals, semantic HTML, and modern CSS patterns.</p>
        </div>
        <div className="timeline-item">
          <span>Week 2</span>
          <p>React basics, reusable components, and state-driven UI behavior.</p>
        </div>
        <div className="timeline-item">
          <span>Week 3</span>
          <p>Routing, integration, and mini-capstone deployment practice.</p>
        </div>
      </section>
    </main>
  )
}

export default About
