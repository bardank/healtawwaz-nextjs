import React from "react";
import Link from "next/link";

import OwlCarousel from "react-owl-carousel";
import $ from "jquery";

export default function SectionBishesh({data}) {
  const listState = React.useState({
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1280: {
        items: 4,
      },
    },
  });

  // console.log(data);
  let imageType = "rd-m-thumb";

  return (
    <div className='alt-layout row d-flex align-items-center'>
      <div className='col-md-3 bishes-bg'>
        <h2 className='d-flex align-items-center justify-content-center'>
          <a href='#'>
            विशेष
            <br />
            रिपोर्ट
          </a>
        </h2>
      </div>
      <div className='col-md-9'>
        {/* <div className='owl-carousel owl-theme'> */}
        <OwlCarousel
          className='owl-carousel owl-theme'
          loop
          autoPlay='true'
          loop='true'
          margin={10}
          autoPlay={true}
          autoplayTimeout='2000'
          // autoplayHoverPause='true'
          responsive={listState[0].responsive}>
          {data[0].posts.nodes.map(post => (
            <div className='item' key={post.postId}>
              <div className='rd-item'>
                <div className='image'>
                  <figure>
                    <Link  href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                      <a>
                      {post.featuredImage.mediaDetails.sizes.map(img => (
                        <React.Fragment key={img.name}>
                          {img.name === imageType && (
                            <img
                              src={`${img.sourceUrl}`}
                              className='img-fluid'
                            />
                          )}
                        </React.Fragment>
                      ))}
                      </a>
                    </Link>
                  </figure>
                </div>
                <div className='teaser'>
                  <h4>
                    <Link  href='/[category_slug]/[postId]'
                      as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                        <a>{post.title}</a>
                    </Link>
                  </h4>
                  <div className='author'>
                    <span> </span>

                    {post.PostDetail.authorName ? (
                      <>{post.PostDetail.authorName}</>
                    ) : (
                      <Link  href='/user/[id]' as={`/user/${post.author.slug}`} passHref>
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
      </div>
    </div>
  );
}

// responsive: {
//                             0: {
//                                 items: 1
//                             },
//                             // breakpoint from 480 up
//                             480: {
//                                 items: 2
//                             },
//                             // breakpoint from 768 up
//                             768: {
//                                 items: 3
//                             },
//                             // breakpoint from 768 up
//                             1280: {
//                                 items: 4
//                             }
//                         }
