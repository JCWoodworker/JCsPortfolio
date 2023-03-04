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
						<h3>
							A project management app with built-in CRM for woodworkers.  Distributed by a lumberyard who can view data on what
							hardwoods their users need (and how much), update pricing, and send marketing emails to all users.
						</h3>
						<h3>Utilizes EmailJS and Twilio</h3>
					</Col>
					<Col>
						<a
							href="https://woodworking-project-calc.herokuapp.com/"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/screenshot-wpm-original.png"
								alt="placeholder"
							></Image>
						</a>
						<h3>React, Node, Express PostgreSQL</h3>
						<h3>Deployed with Heroku</h3>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default WpmOriginal
