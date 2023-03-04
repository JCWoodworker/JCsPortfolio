import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import GithubHeaderLink from "../../icons/GithubHeaderLink"

const CarShow = () => {
	return (
		<>
			<h1>
				Car Show App
				<GithubHeaderLink link="https://github.com/JCWoodworker/car-show-participant-app/blob/main/README.md" />
			</h1>
			<Container>
				<Row className="project-row">
					<Col>
						<a
							href="https://car-show-app-preprod.herokuapp.com/"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-car-show-001.png"
								alt="placeholder"
							/>
						</a>
						<a
							href="https://car-show-app-preprod.herokuapp.com/"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-car-show-002.png"
								alt="placeholder"
							/>
						</a>
						<h3>Deployed with Heroku</h3>
					</Col>
					<Col>
						<h3>
							Made for the Michael P Stefanik Charitable Foundation's annual car show.  Users can add cars and pay for a registration through Paypal.  Admin can view all registered and non-registered cars, and register cars as "cash" rather than "credit".
						</h3>
						<ul>
							<li>React</li>
							<li>Node</li>
							<li>Express</li>
							<li>Postgres</li>
						</ul>
						<a
							href="https://car-show-app-preprod.herokuapp.com/"
							target="_blank"
						>
							<Image
								className="screenshot"
								fluid
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-car-show-003.png"
								alt="placeholder"
							/>
						</a>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default CarShow
