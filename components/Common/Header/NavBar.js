import React from "react";
import TopLogo from "./TopLogo";
import Header from "./Header";
import Link from 'next/link';

export default function NavBar({showScroll}) {
  return (
    <>
      <TopLogo />
      <div className='rd-corona'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='card bg1'>
                <Link href='#' passHref>
                  <a >
                    <span>कोरोना अप्डेट</span>
                    <br />
                    कोभिड-१९ समाचार
                  </a>
                </Link>
              </div>
              <div className='card' style={{background: "#fff3aa"}}>
                <span id='spanInfected' /> जम्मा संक्रमित (नेपाल)
              </div>
              <div className='card' style={{background: "#dbfcc7"}}>
                <span id='spanRecovered' /> निको भएको
              </div>
              <div className='card' style={{background: "#ffb1b1"}}>
                <span id='spanDeaths' /> मृत्यु
              </div>
              <div className='card' style={{background: "#fde5d9"}}>
                <span id='spanWorldDeaths' /> जम्मा संक्रमित (विश्व)
              </div>
              <Link href='#' passHref>
              <a >
                <img
                  src='http://ha.resham.info.np/wp-content/themes/healthaawaj/img/covid.jpg'
                  alt='true'
                  className='img-fluid'
                />
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Header showScroll={showScroll} />
    </>
  );
}
