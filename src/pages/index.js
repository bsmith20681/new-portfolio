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
      <div className="container">
        <div className="row hero">
          <div className="col-md-6">
            <h1>
              Hi I'm <span style={{ color: "#007BFF" }}>Ben Smith</span>. I am a{" "}
              <span style={{ color: "#007BFF" }}>Front End</span> Web Developer.
            </h1>
            <div style={{ marginBottom: "30px" }}>
              <Link
                className="btn btn-blue-filled"
                to="https://drive.google.com/file/d/1TUri61qg_5cdWk-E3BwkVeqX6iabqyHT/view?usp=sharing"
              >
                See My Resume
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
        <div className="homepage-title-container">
          <h2 className="homepage-title">My Recent Projects</h2>
        </div>
        <Project
          title="SimilarFont.io"
          image="similarfont-homepage"
          description="Similarfont.io is a blog where I document free alternatives to premium fonts. It was built using Next.js, Sanity CMS, and SASS. All of the pages were designed by myself using Figma. It is currently getting close to 200 pageviews per month and is slowly climbing up the Google search rankings for terms such as “Google Font Alternative”. "
          demoLink="https://similarfont.io/"
          githubLink=""
        />
        <Project
          title="University Landing Page"
          image="university-homepage"
          description="University Landing Page is a mock landing page for a higher education consulting company. It was built using HTML, SASS, Jquery, and Bootstrap. It is fully responsive and has proper markup to make it easily crawled by search engines. This site is fully compliant with proper website accessibility making it easy to use for anyone. "
          demoLink="https://optimistic-northcutt-94a4fc.netlify.app/"
          githubLink="https://github.com/bsmith20681/university-landing-page"
        />
        <Project
          title="traveler.com"
          image="travel-homepage"
          description="Traveler.com is a mock flight booking website similar to kayak.com or Google Flights. It was built using React.js and uses the SkyScanner API (yes the demo will find real flights based on SkyScanner’s results). This project was also designed using Figma and was styled using SASS. This project features a calendar component built from scratch and filtered search component. "
          demoLink="https://similarfont.io/"
          githubLink="https://github.com/bsmith20681/flight-app-frontend"
        />
      </div>
      <div className="container">
        <div className="homepage-title-container">
          <h2 className="homepage-title">Technical Toolbox</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>
              <strong>Languages</strong>
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Frameworks</strong>
            </p>
            <ul>
              <li>React</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Software</strong>
            </p>
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>Photoshop</li>
              <li>Figma</li>
              <li>WordPress</li>
            </ul>
          </div>
        </div>
      </div>

      {/*      <div className="container">
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
        </div> */}

      <div className="container">
        <div className="homepage-title-container">
          <h2 className="homepage-title">Contact Me</h2>
        </div>
        <div className="contact-me-text">
          <p>
            Phone Number and Email are on my resume. Feel free to reach out!
          </p>
          <a
            class="btn btn-blue-filled"
            href="https://drive.google.com/file/d/1TUri61qg_5cdWk-E3BwkVeqX6iabqyHT/view?usp=sharing"
          >
            See My Resume
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
