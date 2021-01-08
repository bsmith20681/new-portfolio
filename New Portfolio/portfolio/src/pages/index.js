import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Memoji from "../images/memoji.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          Hi I'm Ben Smith. I am a Front End web developer.
        </div>

        <div className="col-md-6">
          <img src={Memoji}></img>
        </div>
      </div>
    </div>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
