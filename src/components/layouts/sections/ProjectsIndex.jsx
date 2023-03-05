import React from "react"
import { Container, Row, Col, Fade } from "react-bootstrap"

import AboutMe from "./aboutMe/AboutMe"
import WpmOriginal from "./WpmOriginal"
import CarShow from "./CarShow"
import Contact from "./contact/Contact"
import FadeInSection from "../../services/FadeInSection"

const ProjectsIndex = () => {
	return (
		<Container className="mainContainer" id="projects">
				<Row className="component-container" id="about">
						<AboutMe />
				</Row>
				<Row className="component-container" id="wpm">
						<WpmOriginal />
				</Row>
				<Row className="component-container" id="carShow">
						<CarShow />
				</Row>
				<Row className="component-container" id="contact">
						<Contact />
				</Row>
		</Container>
	)
}

export default ProjectsIndex
