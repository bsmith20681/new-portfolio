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
          <div className="contact-input">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="email" />
          </div>
          <textarea
            name=""
            id=""
            cols="55"
            rows="10"
            placeholder="Type Your Message..."
            className="contact-textArea"
          ></textarea>
          <button className="btn btn-blue-filled" style={{ border: "none" }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactMe
