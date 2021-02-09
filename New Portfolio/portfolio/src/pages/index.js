import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

import Memoji from "../images/memoji.png"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      allSanityPost(limit: 3) {
        totalCount
        nodes {
          title
          _rawSlug(resolveReferences: { maxDepth: 10 })
          _rawMainImage
          mainImage {
            asset {
              url
            }
          }
          id
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      {console.log(data)}
      <div className="container">
        <div className="row hero">
          <div className="col-md-6">
            <h1>
              Hi I'm <span style={{ color: "#007BFF" }}>Ben Smith</span>. I am a{" "}
              <span style={{ color: "#007BFF" }}>Front End</span> Web Developer.
            </h1>
            <div style={{ marginBottom: "30px" }}>
              <Link className="btn btn-blue-filled" to="/contact-me">
                Contact Me
              </Link>
              <a className="btn btn-blue" href="#recentProjects">
                See My Work
              </a>
            </div>
            <p>
              <span role="img" aria-labelledby="emoji hand raised">
                🙋‍♂️
              </span>{" "}
              Currently Employed. Looking for remote work.
            </p>
          </div>
          <div className="col-md-6 hero-image">
            <img alt="memoji of ben smith" src={Memoji}></img>
          </div>
        </div>
      </div>
      <div className="container" id="recentProjects">
        <div className="homepage-title-container container">
          <h2 className="homepage-title">My Recent Projects</h2>
        </div>
        <Project
          title="this is a title"
          image="grey-square"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque nibh ac molestie vestibulum. Vestibulum eu arcu id augue volutpat pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in elit quis diam fringilla ornare. Mauris scelerisque congue condimentum. Aliquam volutpat vehicula commodo. Etiam sollicitudin ut urna gravida fermentum. Maecenas risus leo, tincidunt ut dignissim eget, aliquam euismod ante."
        />
        <Project title="this is a title" image="grey-square" description="" />
        <Project
          title="this is a title"
          image="grey-square"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque nibh ac molestie vestibulum. Vestibulum eu arcu id augue volutpat pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in elit quis diam fringilla ornare. Mauris scelerisque congue condimentum. Aliquam volutpat vehicula commodo. Etiam sollicitudin ut urna gravida fermentum. Maecenas risus leo, tincidunt ut dignissim eget, aliquam euismod ante."
        />
      </div>
      <div className="homepage-title-container">
        <h2 className="homepage-title">Open Source I Contribute to</h2>
      </div>
      <div className="container">
        <div className="homepage-title-container">
          <h2 className="homepage-title">My Recent Posts</h2>
        </div>
        <div className="row">
          {data.allSanityPost.nodes.map(article => {
            return (
              <div className="col-md-4 blog-item">
                <Link to={`/blog/${article._rawSlug.current}`}>
                  <img src={article.mainImage.asset.url} alt="" />
                  <h4 className="blog-title">{article.title}</h4>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="homepage-title-container">
        <h2 className="homepage-title">Contact Me</h2>
      </div>
    </Layout>
  )
}

export default IndexPage
