import React from "react"
import { Row } from "react-bootstrap"
import FadeInSection from "../../services/FadeInSection"

const ProjectComponent = (props) => {
  // props needed:
    // id
    // title
    // github link
    // image links
    // descriptions

	return (
		<FadeInSection>
			<Container>
				<Row className="project-row">
					<h1>
						Woodworker's Project Manager & CRM
						<GithubIcon link="https://github.com/JCWoodworker/Woodworker-project-management/blob/main/README.md" />
					</h1>
				</Row>
			</Container>
		</FadeInSection>
	)
}
