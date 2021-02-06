import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer
        >
        <Footer data={data}>
          Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:paul@prodriguez.dev">Email us</a> to ask anything.<br></br><br></br>© {new Date().getFullYear()}, Built by <a href="https://www.prodriguez.dev">Paul Rodriguez</a>
        </Footer>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
