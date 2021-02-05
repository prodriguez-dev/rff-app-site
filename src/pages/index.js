import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"
import staticdata from '../../staticdata.json'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
        <h1>Learn to<br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/video">Watch the video</Link>

        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" alt="Sketch Logo"/>
          <img src={require('../images/logo-figma.png')} width="50" alt="Figma Logo"/>
          <img src={require('../images/logo-studio.png')} width="50" alt="Studio Logo"/>
          <img src={require('../images/logo-framer.png')} width="50" alt="Framer Logo"/>
          <img src={require('../images/logo-react.png')} width="50" alt="React Logo"/>
          <img src={require('../images/logo-swift.png')} width="50" alt="Swift Logo"/>
        </div>

        <Wave />

        </div>
      </div>

      <div className="Cards">
        <h2>12 courses, more coming</h2>
        <div className="CardGroup">
          <Card
            title="Design System with Figma"
            text="10 sections"
            image={require('../images/card-bg-1.jpg')}
          />
          <Card
            title="React for Designers"
            text="12 sections"
            image={require('../images/card-bg-2.jpg')}
          />
          <Card
            title="Video Editing with Screenflow"
            text="6 sections"
            image={require('../images/card-bg-3.jpg')}
          />
          <Card
            title="Sound Design with Cubase"
            text="6 sections"
            image={require('../images/card-bg-4.jpg')}
          />
        </div>

        <Section
          image={require('../images/wallpaper2.jpg')}
          logo={require('../images/logo-react.png')}
          title="React for Designers"
          text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
        />

        {staticdata.cells}

      </div>

    </div>
  </Layout>
)

export default IndexPage