"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";

function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!items.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}

export function PortfolioContent() {
  const [roleIndex, setRoleIndex] = useState(0);

  useReveal();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.rolePhrases.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <main>
      <section className="home section" id="home">
        <div className="particles" aria-hidden />

        <div className="home-content reveal">
          <h1>
            Hi There,<br />
            I am <span>{portfolioData.firstName}</span>
          </h1>

          <p>
            I am into <span>{portfolioData.rolePhrases[roleIndex]}</span>
          </p>

          <a href="#about" className="btn">
            <span>About Me</span>
          </a>

          <div className="socials">
            {portfolioData.socials.map((social) => (
              <a
                key={social.label}
                className="social-icon"
                href={social.href}
                aria-label={social.label}
                style={{ ["--brand-color" as string]: social.brandColor }}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={social.icon}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  className="social-icon-image"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="home-image reveal delay-1">
          <div className="avatar-shell">
            <div className="avatar-core">
              <Image
                src={portfolioData.avatarPath}
                alt="Generated avatar illustration"
                className="avatar-image"
                width={640}
                height={640}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>

        <div className="about-row">
          <div className="about-image reveal">
            <div className="profile-card">
              <Image
                src={portfolioData.avatarPath}
                alt="Generated profile illustration"
                className="profile-image"
                width={640}
                height={640}
              />
            </div>
          </div>

          <div className="about-content reveal delay-1">
            <h3>{portfolioData.name}</h3>
            <span className="tag">Full Stack Developer</span>

            <p>{portfolioData.about}</p>

            <div className="about-meta">
              <p>
                <strong>Email:</strong> {portfolioData.email}
              </p>
              <p>
                <strong>Place:</strong> {portfolioData.location}
              </p>
            </div>

            <div className="cp-wrap">
              <h4>Competitive Programming</h4>
              <ul>
                {portfolioData.competitiveProgramming.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <Link href={portfolioData.resumePath} target="_blank" className="btn">
              <span>Resume</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <h2 className="heading light">
          Skills & <span>Abilities</span>
        </h2>

        <div className="skills-wrap reveal">
          {portfolioData.skills.map((group) => (
            <article key={group.title} className="skills-group">
              <h3>{group.title}</h3>
              <div className="skills-chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education section" id="education">
        <h2 className="heading">
          My <span>Education</span>
        </h2>

        <p className="quote">Education sharpens how we think, not just what we know.</p>

        <div className="education-list">
          {portfolioData.education.map((item, index) => (
            <article key={item.degree} className={`education-card reveal delay-${index % 2}`}>
              <div className="education-art" aria-hidden>
                <span>{index === 0 ? "College" : "School"}</span>
              </div>

              <div className="education-text">
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <h4>
                  {item.period} | {item.status}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section" id="projects">
        <h2 className="heading light">
          Projects <span>Made</span>
        </h2>

        <div className="work-grid">
          {portfolioData.projects.map((project, index) => (
            <article key={project.title} className={`work-card reveal delay-${index % 3}`}>
              <div className="work-front">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1280}
                  height={760}
                  className="project-image"
                />
                <div className="work-links">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : null}
                  {project.code ? (
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Source Code
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <h2 className="heading">
          Experience <span>Timeline</span>
        </h2>

        <div className="timeline">
          {portfolioData.experience.map((item, index) => (
            <article
              key={`${item.company}-${item.period}`}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"} reveal`}
            >
              <div className="timeline-content">
                <h3>{item.company}</h3>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-period">{item.period}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="cert-wrap reveal">
          <h3>Certifications</h3>
          <div className="cert-grid">
            {portfolioData.certifications.map((item) => (
              <article key={`${item.title}-${item.issuer}`} className="cert-card">
                <h4>{item.title}</h4>
                <p>{item.issuer}</p>
                {item.details ? <p className="cert-detail">{item.details}</p> : null}
                <div className="cert-footer">
                  {item.period ? <span>{item.period}</span> : <span>Details available on document</span>}
                  {item.document ? (
                    <a href={item.document} target="_blank" rel="noreferrer" className="cert-link">
                      View Document
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <h2 className="heading">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-shell reveal">
          <div className="contact-art">
            <p>{portfolioData.heroLine}</p>
            <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
            <a href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`}>{portfolioData.phone}</a>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="field">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="field">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="field">
              <textarea name="message" placeholder="Message" rows={5} required />
            </div>
            <button type="submit" className="btn submit-btn">
              <span>Send</span>
            </button>
          </form>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-grid">
          <div>
            <h3>{`${portfolioData.firstName}'s Portfolio`}</h3>
            <p>{portfolioData.contactPitch}</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h3>Contact Info</h3>
            <p>{portfolioData.phone}</p>
            <p>{portfolioData.email}</p>
            <p>{portfolioData.location}</p>
          </div>
        </div>

        <p className="credit">Designed and rebuilt for Ayush Kumar</p>
      </footer>
    </main>
  );
}
