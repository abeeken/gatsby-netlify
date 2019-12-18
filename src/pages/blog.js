import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const BlogPage = ({ data }) => {
    const {edges} = data.allMarkdownRemark
    return(
        <Layout>
            <Helmet title="Blog" />
            <h2>Blog</h2>
            {edges.map(edge => {
                const {frontmatter, fields, excerpt} = edge.node
                return(
                    <div class="post">
                        <h3 key={fields.slug}><a href={fields.slug}>{frontmatter.title}</a></h3>
                        <p>{frontmatter.date}</p>
                        <p>{excerpt}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {fields: {slug: {glob: "/blog/*"}}}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")          
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`