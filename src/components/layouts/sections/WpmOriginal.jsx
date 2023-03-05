import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import GithubIcon from "../../icons/GithubIcon"
import FadeInSection from "../../services/FadeInSection"

const WpmOriginal = () => {
	return (
		<FadeInSection>
			<Container>
				<Row className="project-row">
					<h1>
						Woodworker's Project Manager & CRM
						<GithubIcon link="https://github.com/JCWoodworker/Woodworker-project-management/blob/main/README.md" />
					</h1>
					<h3>
						A project management app with built-in CRM for woodworkers.
						Distributed by a lumberyard who can view data on what hardwoods
						their users need (and how much), update pricing, and send marketing
						emails to all users.
					</h3>
					<ul>
						<li>React</li>
						<li>Node</li>
						<li>Express</li>
						<li>Postgres</li>
						<li>-</li>
						<li>EmailJS</li>
						<li>Twilio</li>
						<li>-</li>
						<li>Deployed With Heroku</li>
					</ul>
					</Row>
					<Row className="image-row">
					<a
						className="screenshot"
						href="https://woodworking-project-calc.herokuapp.com/"
						target="_blank"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/screenshot-wpm-original-001.png"
							alt="placeholder"
						></Image>
					</a>
					<a
						className="screenshot"
						href="https://woodworking-project-calc.herokuapp.com/"
						target="_blank"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-wpm-original-002.png"
							alt="placeholder"
						></Image>
					</a>
					<a
						className="screenshot"
						href="https://woodworking-project-calc.herokuapp.com/"
						target="_blank"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-wpm-original-003.png"
							alt="placeholder"
						></Image>
					</a>
				</Row>
			</Container>
		</FadeInSection>
	)
}

export default WpmOriginal
