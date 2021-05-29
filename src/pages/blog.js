import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityPost {
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
      <div className="container">
        <div className="row">
          {console.log(data.allSanityPost.nodes)}
          {data.allSanityPost.nodes.map(article => {
            return (
              <div className="col-md-4 blog-item">
                <Link to={article._rawSlug.current}>
                  <img src={article.mainImage.asset.url} alt="" />
                  <h4 className="blog-title">{article.title}</h4>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
