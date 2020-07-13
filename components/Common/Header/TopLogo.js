import React from "react";
import Link from 'next/link'
import healthaawaj from "../../../image/logo.svg";
import {LogoDate} from "../../../helper/LogoDate";
export default function TopLogo() {
  return (
    <header className="hide-mb">
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-lg-4 rd-logo'>
            <span className='slogan hide-mb'>स्वास्थ्य सबैको लागि</span>
            <Link href='/' passHref>
              <a >
                <img src={healthaawaj} alt='health logo' className='img-fluid' />
              </a>
            </Link>
            <span className='date hide-mb'>{LogoDate()}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
