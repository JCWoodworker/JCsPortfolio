import React from "react"

const InstagramHeaderLink = (props) => {

	return (
		<a href={props.link} target="_blank">
			<i className="bi bi-instagram icon" />
		</a>
	)
}

export default InstagramHeaderLink
