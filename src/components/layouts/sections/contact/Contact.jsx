import React from "react"
import { Container, Row } from "react-bootstrap"
import ContactForm from "./ContactForm"
import FadeInSection from "../../../services/FadeInSection"

const Contact = () => {
	return (
		<FadeInSection>
			<Container>
				<Row className="project-row">
					<h1>Contact Me</h1>
					<ContactForm />
				</Row>
			</Container>
		</FadeInSection>
	)
}

export default Contact
