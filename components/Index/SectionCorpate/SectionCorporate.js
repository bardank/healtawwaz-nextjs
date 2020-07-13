import React from "react";

import OwlCarousel from "react-owl-carousel";
import $ from "jquery";

import Link from "next/link";
export default function SectionCorporate({data}) {
  const listState = React.useState({
    responsive: {
      0: {
        items: 2,
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
  let limit = 2;
  let imageType = "rd-i-thumb";
  return (
    <div className='container'>
      <div className='row layout-7'>
        <div className='col-md-12'>
          <div className='rd-title bg-transparent'>
            <h2>
              <span>
                <i className='fas fa-car-building' /> {data[0].name}
              </span>
              <Link as={`/category/${data[0].slug}`} href='/category/[id]'>
                <a  className='rd-morebtn'>
                <span>
                  थप <i className='fas fa-angle-right' />
                </span>
                </a>
               
              </Link>
            </h2>
          </div>
        </div>
        <div className='rd-wrap text-center col-md-12'>
          <OwlCarousel
            className='owl-carousel rd-corporate owl-theme'
            margin={15}
            autoPlay={true}
            autoplayTimeout='2000'
            autoplayHoverPause='true'
            responsive={listState[0].responsive}>
            {data[0].posts.nodes.map((post, i) => (
              <React.Fragment key={i}>
                {i < limit && (
                  <div className='item'>
                    <div className='image'>
                      <figure>
                        <Link
                          href='/[category_slug]/[postId]'
                          as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
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
                      <span className='location'>
                        <i className='fas fa-map-marker-alt' />
                        {post.PostDetail.authorName ? (
                          <>{post.PostDetail.authorName}</>
                        ) : (
                          <Link href='/user/[id]' as={`/user/${post.author.slug}`} passHref>
                            <a>
                            {post.author.name}
                            </a>
                          </Link>
                        )}
                      </span>
                      <h4>
                        <Link  href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                          <a>
                          {post.title}
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
{
  /* <script>
                                var owl = $('.rd-corporate');
                        owl.owlCarousel({
                                    loop: true,
                            margin: 15,
                            autoplay: true,
                            autoplayTimeout: 2000,
                            autoplayHoverPause: true,
                            responsive: {
                                    0: {
                                    items: 2
                                },
                                // breakpoint from 480 up
                                480: {
                                    items: 2
                                },
                                // breakpoint from 768 up
                                768: {
                                    items: 3
                                },
                                // breakpoint from 768 up
                                1280: {
                                    items: 4
                                }
                            }
                        });
                    </script> */
}
