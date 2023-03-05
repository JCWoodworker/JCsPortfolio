import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import GithubIcon from "../../icons/GithubIcon"
import FadeInSection from "../../services/FadeInSection"

const CarShow = () => {
	return (
		<FadeInSection>
			<Container>
				<Row className="project-row">
					<h1>
						Car Show App
						<GithubIcon link="https://github.com/JCWoodworker/car-show-participant-app/blob/main/README.md" />
					</h1>
					<h3>
						Made for the Michael P Stefanik Charitable Foundation's annual car
						show. Users can add cars and pay for a registration through Paypal.
						Admin can view all registered and non-registered cars, and register
						cars as "cash" rather than "credit".
					</h3>
					<ul>
						<li>React</li>
						<li>Node</li>
						<li>Express</li>
						<li>Postgres</li>
						<li>-</li>
						<li>Deployed With Heroku</li>
					</ul>
				</Row>
				<Row className="image-row">
					<a
						href="https://car-show-app-preprod.herokuapp.com/"
						target="_blank"
						className="screenshot"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-car-show-001.png"
							alt="placeholder"
						/>
					</a>
					<a
						href="https://car-show-app-preprod.herokuapp.com/"
						target="_blank"
						className="screenshot"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-car-show-002.png"
							alt="placeholder"
						/>
					</a>
					<a
						href="https://car-show-app-preprod.herokuapp.com/"
						target="_blank"
						className="screenshot"
					>
						<Image
							fluid
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/Screenshot-car-show-003.png"
							alt="placeholder"
						/>
					</a>
				</Row>
			</Container>
		</FadeInSection>
	)
}

export default CarShow
