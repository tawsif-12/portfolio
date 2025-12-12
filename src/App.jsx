import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: 'Project Alpha',
    description: 'A short description of Project Alpha.',
    link: '#',
    tags: ['React', 'API']
  },
  {
    title: 'Project Beta',
    description: 'A short description of Project Beta.',
    link: '#',
    tags: ['Design', 'CSS']
  }
]

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <Hero />

      <main className="main">
        <section id="about" className="about card">
          <h2>About Me</h2>
          <p>Hi — I'm a researcher passionate about exploring new ideas and building innovative solutions. I enjoy working on challenging problems and learning new things.</p>
        </section>

        <section id="skill" className="skill card">
          <h2>Skills</h2>
          <p>React • JavaScript • Python • Research • Data Analysis • Machine Learning</p>
        </section>

        <section id="projects" className="projects card">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact card">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:tawsifmannan1212@gmail.com">tawsifmannan1212@gmail.com</a></p>
          <p>Phone: 01883874663</p>
          <p>Location: Dhaka, Bangladesh</p>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} MD TOWSIF BIN MANNAN</small>
      </footer>
    </div>
  )
}
