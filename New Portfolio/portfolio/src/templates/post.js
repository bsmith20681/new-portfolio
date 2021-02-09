import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

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
      body {
        _rawChildren
      }
    }
  }
`

const Post = ({ data }) => {
  return (
    <Layout>
      {console.log(data)}
      <h1>{data.post.title}</h1>
    </Layout>
  )
}

export default Post
