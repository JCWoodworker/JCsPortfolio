import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import GithubHeaderLink from "../../icons/GithubHeaderLink"

const WpmOriginal = () => {
	return (
		<>
			<h1>
				Woodworker's Project Manager & CRM
				<GithubHeaderLink link="https://github.com/JCWoodworker/Woodworker-project-management/blob/main/README.md" />
			</h1>
			<Container>
				<Row className="project-row">
					<Col>
						<a
							href="https://woodworking-project-calc.herokuapp.com/"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/screenshot-wpm-original-001.png"
								alt="placeholder"
							></Image>
						</a>
						<a
							href="https://woodworking-project-calc.herokuapp.com/"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-wpm-original-002.png"
								alt="placeholder"
							></Image>
						</a>
						<h3>Deployed with Heroku</h3>
					</Col>
					<Col>
						<h3>
							A project management app with built-in CRM for woodworkers.
							Distributed by a lumberyard who can view data on what hardwoods
							their users need (and how much), update pricing, and send
							marketing emails to all users.
						</h3>
						<ul>
							<li>React</li>
							<li>Node</li>
							<li>Express</li>
							<li>Postgres</li>
							<li>EmailJS</li>
							<li>Twilio</li>
						</ul>
						<a
							href="https://woodworking-project-calc.herokuapp.com/"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-wpm-original-003.png"
								alt="placeholder"
							></Image>
						</a>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default WpmOriginal
