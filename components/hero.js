import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-container ${props.rootClassName} `}>
        <div className="hero-hero">
          <img
            alt="Rectangle11425789"
            src="/external/rectangle11425789-hmas.svg"
            className="hero-rectangle1142"
          />
          <button className="hero-wiredbutton">
            <span className="hero-text">
              <span>Partner with us</span>
            </span>
            <img
              alt="Vector24I6226"
              src="/external/vector24i6226-iq8j.svg"
              className="hero-vector24"
            />
          </button>
          <span className="hero-text2">
            <span>
              Ledge works seamlessly with games to deliver a premium experience
              that drives engagement and monetization without third-party ads or
              offers.
            </span>
          </span>
          <span className="hero-text4">
            <span>Build up your user base1</span>
          </span>
          <img
            alt="image1675789"
            src="/external/image1675789-iv4f-800h.png"
            className="hero-image167"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero-container {
            width: 100%;
            height: 752px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-hero {
            width: 1440px;
            height: 752px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .hero-rectangle1142 {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 752px;
            position: absolute;
          }
          .hero-wiredbutton {
            gap: 10px;
            top: 507px;
            left: 146px;
            width: 180px;
            height: 42px;
            display: flex;
            padding: 11px 31px;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 10px;
            justify-content: center;
            background-color: rgba(245, 242, 242, 1);
          }
          .hero-text {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 14px;
            font-style: SemiBold;
            text-align: left;
            font-family: Roboto;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .hero-vector24 {
            width: 9px;
            height: 6px;
          }
          .hero-text2 {
            top: 427px;
            left: 146px;
            color: rgba(255, 255, 255, 0.75);
            width: 464px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .hero-text4 {
            top: 250px;
            left: 146px;
            color: rgba(245, 242, 242, 1);
            width: 465px;
            height: auto;
            position: absolute;
            font-size: 56px;
            font-style: Black;
            text-align: left;
            font-family: Montserrat;
            font-weight: 900;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .hero-image167 {
            top: 0px;
            right: 0px;
            width: 763px;
            height: 752px;
            position: absolute;
            border-radius: 0 0 20px;
          }
          .hero-root-class-name {
            width: auto;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  rootClassName: '',
}

Hero.propTypes = {
  rootClassName: PropTypes.string,
}

export default Hero
