import React from "react";
import snoor from "../image/snoor.gif";
import bear from "../image/bear.png";
import Link from "next/link";
import SearchBar from "../components/Common/Header/SearchBar";
export default function NotFound() {
  return (
    <main id='primary' className='rd-error'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-md-6'>
            <div className='img-area'>
              <img src={snoor} className='img-fluid rd-snoor' />
              <img src={bear} className='img-fluid' />
            </div>
          </div>
          <div className='col-md-6'>
            {/* <a href="/"> <img src="<?php echo get_stylesheet_directory_uri();?>/img/logo.svg" class="logo" alt="Logo" style="height:80px;"></a> */}
            <h1>माफ गर्नुहोला, पृष्ठ भेटिएन</h1>
            <p>
              तपाईले खोज्नुभएको पृष्ठ भेटिएन । पृष्ठ सरेको वा हटाईएको हुनसक्छ..
            </p>
            <Link href='/'  passHref>
              <a className='btn btn-lg btn-default'>
              <i className='fal fa-long-arrow-left' /> गृहपृष्ठमा जानुहोस
              </a>
            </Link>
            <p>
              अर्को पृष्ठ खोज्नुहोस् <i className='fal fa-long-arrow-down' />
            </p>
            <div className='search-wrap row'>
              <div className='col-md-6'>
                <SearchBar show={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
