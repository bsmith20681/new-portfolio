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
      <h1>This is the blog page</h1>
      {console.log(data.allSanityPost.nodes)}
      {data.allSanityPost.nodes.map(article => {
        return (
          <ul>
            <li>
              <img src={article.mainImage.asset.url} alt="" />
              <Link to={article._rawSlug.current}>{article.title}</Link>
            </li>
          </ul>
        )
      })}
    </Layout>
  )
}

export default Blog
