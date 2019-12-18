import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Helmet title={frontmatter.title} />
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
  }
  export const pageQuery = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  `