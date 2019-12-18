import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'

const BlogPage = ({ data, pageContext }) => {
    const {edges} = data.allMarkdownRemark
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
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
            <div class="pagination">
              {!isFirst && (
                <Link to={`/blog/${prevPage}`} rel="prev">
                  ← Previous Page
                </Link>
              )}
              {Array.from({ length: numPages }, (_, i) => (
                <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
                  {i + 1}
                </Link>
              ))}
              {!isLast && (
                <Link to={`/blog/${nextPage}`} rel="next">
                  Next Page →
                </Link>
              )}
            </div>
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
query blogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___date}
        filter: {fields: {slug: {glob: "/blog/*"}}}
        limit: $limit
        skip: $skip
    ) {
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