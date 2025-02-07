import React from "react";
import "./practice.css";

export const Practice = () => {
  return (
    <div className="resume-container">
      <h1 className="name">Surendar R</h1>
      <p className="location">
        Chennai, India | <a href="mailto:rsurendar116@gmail.com">rsurendar116@gmail.com</a> | +91-7397434270 |{" "}
        <a href="http://www.linkedin.com/in/surendar-r-50099721a" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
      <p className="github">
        GitHub:{" "}
        <a href="https://github.com/Rsurendar2712" target="_blank" rel="noreferrer">
          github.com/Rsurendar2712
        </a>
      </p>

      <section>
        <h2>Objective</h2>
        <p>
          Maintaining responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and modern
          frameworks like React, continuously learning new technologies to enhance development processes. I am
          dedicated to crafting visually appealing and highly functional web applications. Eager to apply my skills in a
          collaborative environment to deliver exceptional user experiences.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Amazon Clone (HTML, CSS)</h3>
          <p>
            Created a static user interface mimicking the Amazon website layout using HTML and CSS. Focused on the
            visual design, enhancing web design skills while creating a visually appealing representation of an e-commerce
            platform.
          </p>
        </div>
        <div className="project">
          <h3>Calculator (HTML, CSS, JavaScript)</h3>
          <p>
            Developed a calculator that performs basic mathematical operations. The project enhanced my skills in web
            development and interactivity, providing users with a friendly interface.
          </p>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          <strong>B.E., Electrical and Electronics Engineering</strong> (6.52 CGPA) <br />
          Apollo Engineering College, Anna University - Chennai, India <br />
          <em>Aug 2016 – Apr 2020</em>
        </p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Web Development:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Front-End Frameworks:</strong> React.js</li>
          <li><strong>Backend:</strong> Java</li>
          <li><strong>Database:</strong> SQL</li>
        </ul>
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          <li><strong>Tamil:</strong> Native speaker, fluent in verbal and written communication.</li>
          <li><strong>English:</strong> Proficient in speaking, reading, and writing. Strong communication skills
            facilitate effective collaboration in team environments.
          </li>
        </ul>
      </section>

      <section>
        <h2>Courses</h2>
        <p>
          <strong>Full Stack Developer</strong> - Besant Technologies <br />
          Completed comprehensive training in HTML, CSS, JavaScript, and React, with a strong understanding of
          front-end principles and Git version control. Currently learning backend development.
        </p>
      </section>
    </div>
  );
};


