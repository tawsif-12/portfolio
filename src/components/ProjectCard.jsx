import React from 'react'

export default function ProjectCard({ title, description, link, tags = [] }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((t, i) => (
          <span key={i} className="tag">{t}</span>
        ))}
      </div>
      <a className="btn" href={link} target="_blank" rel="noreferrer">View</a>
    </article>
  )
}
