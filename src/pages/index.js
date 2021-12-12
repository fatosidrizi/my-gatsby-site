import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"


// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page' pageHeading='Home'>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="../images/product.jpg" alt="product 1" loading="lazy" placeholder="blurred" />
      <StaticImage src="../images/product2.jpg" alt="product 2" loading="lazy" />
    </Layout>
  )
}

export default IndexPage
