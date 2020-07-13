import React from "react";

export default function Video() {
  return (
    <div className='col-md-8 layout-8'>
      <div className='rd-title bg-transparent'>
        <h2>
          <span>
            <i className='fas fa-video' /> भिडियाे
          </span>
          <a href='#' className='rd-morebtn'>
            <span>
              थप <i className='fas fa-angle-right' />
            </span>
          </a>
        </h2>
      </div>
      {/* Flickity HTML init */}
      <div className='carousel carousel-main' data-flickity>
        <div className='carousel-cell flex-video'>
          <iframe
            src='https://player.vimeo.com/video/20732587?color=969696'
            width={640}
            height={360}
            frameBorder={0}
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
          />
        </div>
        <div className='carousel-cell flex-video'>
          <iframe
            width={560}
            height={315}
            src='https://www.youtube.com/embed/ukXYb7VehB0'
            frameBorder={0}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='carousel-cell flex-video'>
          <iframe
            width={560}
            height={315}
            src='https://www.youtube.com/embed/ssmpDG9Z5BU'
            frameBorder={0}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='carousel-cell flex-video'>
          <iframe
            width={560}
            height={315}
            src='https://www.youtube.com/embed/Te4wnYSQBco'
            frameBorder={0}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='carousel-cell flex-video'>
          <iframe
            width={560}
            height={315}
            src='https://www.youtube.com/embed/9vvQJI2HV0U'
            frameBorder={0}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='carousel-cell flex-video'>
          <iframe
            width={560}
            height={315}
            src='https://www.youtube.com/embed/9V2L_gkVAto'
            frameBorder={0}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
      <div
        className='carousel carousel-nav'
        data-flickity='{ "asNavFor": ".carousel-main", "contain": true, "pageDots": false }'>
        <div className='carousel-cell d-flex align-items-center'>
          <img
            src='https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F132768437_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png'
            className='img-fluid'
          />
        </div>
        <div className='carousel-cell d-flex align-items-center'>
          <img
            src='https://i.ytimg.com/vi/ukXYb7VehB0/hqdefault.jpg'
            className='img-fluid'
          />
        </div>
        <div className='carousel-cell d-flex align-items-center'>
          <img
            src='https://i.ytimg.com/vi/ssmpDG9Z5BU/maxresdefault.jpg'
            className='img-fluid'
          />
        </div>
        <div className='carousel-cell d-flex align-items-center'>
          <img
            src='https://i.ytimg.com/vi/Te4wnYSQBco/maxresdefault.jpg'
            className='img-fluid'
          />
        </div>
        <div className='carousel-cell d-flex align-items-center'>
          <img
            src='https://i.ytimg.com/vi/9vvQJI2HV0U/maxresdefault.jpg'
            className='img-fluid'
          />
        </div>
        <div className='carousel-cell d-flex align-items-center'>
          <img
            src='https://www.healthaawaj.com/wp-content/uploads/2019/06/teaching-2.jpg'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  );
}
