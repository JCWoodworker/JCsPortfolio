import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import GithubHeaderLink from "../../../icons/GithubHeaderLink"

const AboutMe = () => {
	return (
		<>
			<h1>
				About Me
				<GithubHeaderLink link="https://github.com/JCWoodworker/JCWoodworker" />
			</h1>
			<Container>
				<Row className="project-row">
					<Col>
						<a
							href="https://github.com/JCWoodworker/JCWoodworker"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/about-me-003.jpeg"
								alt="placeholder"
							/>
						</a>
						<a
							href="https://github.com/JCWoodworker/JCWoodworker"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/about-me-002.jpg"
								alt="placeholder"
							/>
						</a>
					</Col>
					<Col>
						<h3>
							Husband - Father - Woodworker - Full Stack Developer - Dog Dad
						</h3>

						<a
							href="https://github.com/JCWoodworker/JCWoodworker"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/about-me-001.jpeg"
								alt="placeholder"
							/>
						</a>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default AboutMe
