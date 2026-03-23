import React from 'react'
import './SiteStyles.css'

const Home = () => {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">WEB D EXPLORE 2.0</p>
        <h1>Build. Break. Learn. Repeat.</h1>
        <p className="hero-text">
          A practical space to explore modern web development through coding sessions,
          projects, and team collaboration.
        </p>
        <div className="hero-actions">
          <a href="#tracks" className="btn btn-primary">Explore Tracks</a>
          <a href="#highlights" className="btn btn-ghost">View Highlights</a>
        </div>
      </section>

      <section id="tracks" className="card-grid">
        <article className="info-card">
          <h3>Frontend Foundations</h3>
          <p>HTML, CSS, responsive layout, and clean component architecture.</p>
        </article>
        <article className="info-card">
          <h3>React in Action</h3>
          <p>Routing, state management, reusable UI patterns, and performance basics.</p>
        </article>
        <article className="info-card">
          <h3>Real Projects</h3>
          <p>Build portfolio-ready mini products with peer feedback and iteration.</p>
        </article>
      </section>

      <section id="highlights" className="stats-row">
        <div className="stat-box">
          <h2>20+</h2>
          <p>Hands-on sessions</p>
        </div>
        <div className="stat-box">
          <h2>50+</h2>
          <p>Project submissions</p>
        </div>
        <div className="stat-box">
          <h2>1 Community</h2>
          <p>Designers, developers, and builders</p>
        </div>
      </section>
    </main>
  )
}

export default Home
