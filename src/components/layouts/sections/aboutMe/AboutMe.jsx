import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import GithubIcon from "../../../icons/GithubIcon"
import InstagramIcon from "../../../icons/InstagramIcon"
import LinkedInIcon from "../../../icons/LinkedInIcon"
import FadeInSection from "../../../services/FadeInSection"

const AboutMe = () => {
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
			</Container>
		</FadeInSection>
	)
}

export default AboutMe
