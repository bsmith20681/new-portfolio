import React from "react"

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
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Project
