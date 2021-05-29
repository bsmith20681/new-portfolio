import React, { useState } from "react"
import * as emailjs from "emailjs-com"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DisplayMessage from "../components/DisplayMessage"

const ContactMe = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [messageSuccess, setMessageSuccess] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_zr5224k",
        "template_",
        e.target,
        "user_cUDGxCajC3J07prrCf4OQ"
      )
      .then(
        result => {
          console.log(result.text)
          setMessageSuccess(true)
        },
        error => {
          console.log(error.text)
          setMessageSuccess(false)
        }
      )

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h1>Contact Me</h1>
          <p>
            This message goes to my personal email and I usually respond within
            24 hours
          </p>
        </div>
        <div>
          {messageSuccess === true ? (
            <DisplayMessage message={messageSuccess} />
          ) : messageSuccess === null ? (
            ""
          ) : (
            <DisplayMessage message={messageSuccess} />
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <textarea
                  className="contact-textArea"
                  rows="10"
                  placeholder="Type Your Message..."
                  value={message}
                  name="message"
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-blue-filled"
              style={{ border: "none" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactMe
