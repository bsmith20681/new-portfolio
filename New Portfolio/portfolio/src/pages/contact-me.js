import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMe = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1>Contact Me</h1>
        <p>
          This message goes to my personal email and I usually respond within 24
          hours
        </p>
      </div>
      <div>
        <form action="" className="contact-form">
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="contact-input" placeholder="Name" />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="contact-input"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <textarea
                className="contact-textArea"
                rows="10"
                placeholder="Type Your Message..."
              ></textarea>
            </div>
          </div>
          <button className="btn btn-blue-filled" style={{ border: "none" }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactMe
