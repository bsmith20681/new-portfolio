import React from "react"
import { Link } from "gatsby"

const Project = props => {
  return (
    <div class="row">
      <div className="col-md-5">
        <img
          className="project-image"
          src={require(`../images/${props.image}.png`)}
          alt="placeholder image"
        />
      </div>
      <div className="col-md-7">
        <h3>{props.title}</h3>
        <hr></hr>
        <p>
          {props.description}...<Link to="/">Read More</Link>
        </p>
        <a href="" className="btn btn-blue-filled">
          <i class="fas fa-laptop"></i>Demo
        </a>
        <a href="" className="btn btn-blue">
          <i class="fab fa-github"></i>View Code
        </a>
      </div>
    </div>
  )
}

export default Project
