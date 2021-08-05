import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptop } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Project = props => {
  return (
    <div className="row my-5">
      <div className="col-md-5">
        <img
          className="project-image"
          src={require(`../images/${props.image}.jpg`)}
          alt="placeholder image"
        />
      </div>
      <div className="col-md-7">
        <h3>{props.title}</h3>
        <hr></hr>
        <p>Technologies Used: {props.technologies}</p>
        <p>{props.description}</p>
        <a href={props.demoLink} className="btn btn-blue-filled">
          <FontAwesomeIcon icon={faLaptop} /> Demo
        </a>
        <a href={props.githubLink} className="btn btn-blue">
          <FontAwesomeIcon icon={faGithub} />
          View Code
        </a>
      </div>
    </div>
  )
}

export default Project
