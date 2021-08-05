import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

import Memoji from "../images/memoji.png"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

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
            <div className="hero-buttons">
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
            <div className="hero-icons">
              <a href="https://github.com/bsmith20681/">
                <img
                  className="hero-icon"
                  src={github}
                  alt="github icon link"
                />
              </a>
              <a href="https://www.linkedin.com/in/ben-smith-268006a7/">
                <img
                  className="hero-icon"
                  src={linkedin}
                  alt="linkedin icon link"
                />
              </a>
            </div>
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
          technologies="Next.js, SCSS, Sanity Headless CMS"
          description="Similarfont.io is a blog where I document free alternatives to premium fonts. It was built using Next.js, Sanity CMS, and SASS. All of the pages were designed by myself using Figma. It is currently getting close to 2,300 pageviews per month and is slowly climbing up the Google search rankings for terms such as “Google Font Alternative”. "
          demoLink="https://similarfont.io/"
          githubLink="https://github.com/bsmith20681/similarfont.io"
        />
        <Project
          title="CryptoWatch"
          image="cryptowatch-homepage"
          technologies="React.js, SCSS, Axios, Coingecko API, Chart.js"
          description="Cryptowatch is a cryptocurrency price tracking app that displays the latest prices on the top 10 cryptocurrencies. This app was built using React.js and fetches all it’s data using the Coingecko api. The project was originally designed using Figma and then transformed into a working prototype using JSX and CSS. "
          demoLink="https://elated-jackson-04b800.netlify.app/"
          githubLink="https://github.com/bsmith20681/cryptowatch"
        />
        <Project
          title="Ecommerce Landing Page (Single Product)"
          image="pureskin-homepage"
          technologies="HTML, CSS, jQuery, Bootstrap"
          description="Pureskin is a mock landing page advertising a skin care product. This project is fully responsive and was built using the Bootstrap framework. Despite using a framework, I did write a lot of my own custom CSS in order to make the design look more original. HTML, CSS, and JavaScript were the main technologies used in this project."
          demoLink="https://frosty-rosalind-e9fc47.netlify.app/"
          githubLink="https://github.com/bsmith20681/shopify-theme-html"
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
