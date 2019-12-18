const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node);
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    // Creates slugs for blog pages - might need to detect content type to create differently nested slugs...
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    })
  }
}

exports.createPages = async function({ actions, graphql }) {
    // Create individual posts
    const { data } = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.edges.forEach(edge => {
      const slug = edge.node.fields.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/blogTemplate.js`),
        context: { slug: slug },
      })
    })

    // Create blog list pages
    const posts = data.allMarkdownRemark.edges
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blogListTemplate.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  }