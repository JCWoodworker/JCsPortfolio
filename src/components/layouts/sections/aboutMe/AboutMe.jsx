import React, { useState } from "react"
import { Container, Row, Image } from "react-bootstrap"
import GithubIcon from "../../../icons/GithubIcon"
import InstagramIcon from "../../../icons/InstagramIcon"
import LinkedInIcon from "../../../icons/LinkedInIcon"
import FadeInSection from "../../../services/FadeInSection"

const AboutMe = () => {
	const [skillsList, setSkillsList] = useState([
		"JavaScript",
		"Python",
		"TypeScript",
		"HTML",
		"CSS",
		"SQL",
		"React",
		"Node",
		"Express",
		"Postgres",
		"RESTful APIs",
		"EmailJS",
		"Heroku",
		"Netlify",
		"Vtie",
		"Mac Terminal",
		"VS Code",
		"Git",
		"Github",
		"Agile Development",
		"Jira",
		"Postman",
		"Splunk",
		"Sendgrid",
		"Twilio",
		"Microsoft Office",
		"Google Suite",
		"TypeORM",
		"Knex",
		"Objection",
		"AWS",
		"Bootstrap",
	])
	return (
		<FadeInSection>
			<Container>
				<Row className="project-row">
					<h1>
						About Me
						<GithubIcon link="https://github.com/JCWoodworker/JCWoodworker" />
						<InstagramIcon link="https://www.instagram.com/rilocalwoodworks/" />
						<LinkedInIcon link="https://www.linkedin.com/in/j-corey/" />
					</h1>
					<h3>
						Husband - Father - Woodworker - Full Stack Developer - Dog Dad
					</h3>
				</Row>
				<Row className="image-row">
					<a
						className="screenshot"
						href="https://github.com/JCWoodworker/JCWoodworker"
						target="_blank"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/about-me-003.jpeg"
							alt="placeholder"
						/>
					</a>
					<a
						className="screenshot"
						href="https://github.com/JCWoodworker/JCWoodworker"
						target="_blank"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/about-me-002.jpg"
							alt="placeholder"
						/>
					</a>
					<a
						className="screenshot"
						href="https://github.com/JCWoodworker/JCWoodworker"
						target="_blank"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/about-me-001.jpeg"
							alt="placeholder"
						/>
					</a>
				</Row>
				<Row className="project-row">
					<h3>Skills</h3>
					<ul>
						{skillsList.map((skill) => (
							<li>{skill}</li>
						))}
					</ul>
				</Row>
			</Container>
		</FadeInSection>
	)
}

export default AboutMe
