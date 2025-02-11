import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Beng Guan Koay</h1>
        <p>Full-Stack Developer | Cloud Engineer | DevOps Enthusiast</p>
      </header>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Project 1: Real-Time Chat Application</strong> - Built with Node.js and
            WebSocket for real-time communication. Hosted on AWS using EC2 and S3, integrated with
            PostgreSQL for message persistence.
          </li>
          <li>
            <strong>Project 2: E-Commerce Platform</strong> - Full-stack application with Vue.js for
            the frontend, Node.js (Express) for the backend, and PostgreSQL for database management.
            Deployed on AWS with automated CI/CD using Jenkins.
          </li>
          <li>
            <strong>Project 3: Cloud-Based File Storage System</strong> - Leveraged AWS S3 and EC2
            to build a scalable file storage platform. Integrated Jenkins pipelines for deployment
            automation and PostgreSQL for user data.
          </li>
        </ul>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Node.js</li>
          <li>Vue.js</li>
          <li>AWS (EC2, S3, Lambda, RDS)</li>
          <li>PostgreSQL</li>
          <li>Jenkins (CI/CD)</li>
          <li>Docker & Kubernetes</li>
          <li>RESTful APIs</li>
          <li>Version Control (Git, GitHub, GitLab)</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: bengguankoay@gmail.com</p>
        <p>GitHub: github.com/bengguankoay</p>
      </section>
    </div>
  );
};

export default Portfolio;
