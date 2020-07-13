import React from "react";
import {Helmet} from "react-helmet";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";

import Link from "next/link";
import SectionHotAdd from "./SectionHotAdd";
export default function Banner({data}) {
  let imageType = "rd-m-thumb";
  return (
    <React.Fragment>
      <div className='col-md-7 banner'>
        {/* <div className='owl-carousel owl-theme'> */}
        <OwlCarousel
          className='owl-carousel owl-theme'
          loop
          autoPlay='true'
          items='1'
          loop='true'
          autoPlay={true}
          autoplayTimeout='3000'
          autoplayHoverPause='true'>
          {/* <h3 className='jj'></h3> */}
          {data.map(post => (
            <div className='item' key={post.id}>
              <div className='image'>
                <figure>
                  <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                    <a>
                    {post.featuredImage.mediaDetails.sizes.map((img,i) => (
                      <React.Fragment key={i}>
                        {img.name === imageType && (
                          <img
                            src={`${img.sourceUrl}`}
                            className='img-fluid'
                            alt={img.name}
                          />
                        )}
                      </React.Fragment>
                    ))}
                    </a>
                  </Link>
                </figure>
                <div className='teaser'>
                  <h2>
                    <Link
                     href='/[category_slug]/[postId]'
                      as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref >
                        <a>
                        {post.title}
                        </a>
                    </Link>
                  </h2>
                  <div className='author'>
                    {post.PostDetail.authorName ? (
                      <>{post.PostDetail.authorName}</>
                    ) : (
                      // <Link href='#'>
                      <Link href='/user/[id]' as={`/user/${post.author.slug}`} passHref>
                        <a>
                          {post.author.name}
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>

        {/* {<script>{jsfunc()}</script>} */}
        <Helmet>
          <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
          <title>Health Aawaj : HomePage</title>
        </Helmet>
      </div>
    </React.Fragment>
  );
}
