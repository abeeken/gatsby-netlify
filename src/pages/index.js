import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

export default ({ data }) => (
    <Layout>
        <Helmet title="Hello World" />
        <div>Hello world!</div>
        <Img className="image" fluid={data.file.childImageSharp.fluid} alt="Image Alt" />
    </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "IMG_20191208_084707.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`