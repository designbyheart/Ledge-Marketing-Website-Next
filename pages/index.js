import React from 'react'
import Head from 'next/head'

import Hero from '../components/hero'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Ledge Marketing Website</title>
          <meta property="og:title" content="Ledge Marketing Website" />
        </Head>
        <Hero rootClassName="hero-root-class-name"></Hero>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            flex-direction: column;
            background-color: #0f0c1a;
          }
        `}
      </style>
    </>
  )
}

export default Home
