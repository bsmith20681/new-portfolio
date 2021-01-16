import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Memoji from "../images/memoji.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row hero">
        <div className="col-md-6">
          <h1>
            Hi I'm <span style={{ color: "#007BFF" }}>Ben Smith</span>. I am a{" "}
            <span style={{ color: "#007BFF" }}>Front End</span> Web Developer.
          </h1>
          <div>
            <a href="">Contact Me</a>
            <a href="">See My Work</a>
          </div>
          <p>🙋‍♂️ Currently Employed. Looking for remote work.</p>
        </div>
        <div className="col-md-6 hero-image">
          <img alt="memoji of ben smith" src={Memoji}></img>
        </div>
      </div>
    </div>
    <div className="homepage-title-container">
      <h2 className="homepage-title">My Recent Projects</h2>
    </div>
    <div className="homepage-title-container">
      <h2 className="homepage-title">Open Source I Contribute to</h2>
    </div>
    <div className="homepage-title-container">
      <h2 className="homepage-title">My Recent Posts</h2>
    </div>
    <div className="homepage-title-container">
      <h2 className="homepage-title">Contact Me</h2>
    </div>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
