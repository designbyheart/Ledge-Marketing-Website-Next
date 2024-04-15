import React from 'react'
import Head from 'next/head'

const Pricing = (props) => {
  return (
    <>
      <div className="pricing-container">
        <Head>
          <title>Pricing - Ledge Marketing Website</title>
          <meta
            property="og:title"
            content="Pricing - Ledge Marketing Website"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .pricing-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Pricing
