import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

export const query = graphql`
  query PostBySlug($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      title
      _id
      _rawSlug
      slug {
        current
      }
      id
      mainImage {
        asset {
          url
          title
        }
      }
      author {
        _createdAt
        name
        image {
          asset {
            url
            fixed(width: 200, height: 200) {
              base64
              srcWebp
              srcSetWebp
            }
          }
        }
      }
      _rawBody
    }
  }
`

const Post = ({ data }) => {
  return (
    <Layout>
      {console.log(data)}
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-8">
            <article>
              <img src={data.post.mainImage.asset.url} alt="" />
              <h1>{data.post.title}</h1>
              <div className="post-author-info">
                <p>Written By {data.post.author.name}</p>
                <img src={data.post.author.image.asset.fixed.srcWebp} alt="" />
              </div>
              <BlockContent blocks={data.post._rawBody} />
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post
