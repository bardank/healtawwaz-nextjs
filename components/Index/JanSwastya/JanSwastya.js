import React from "react";
import Link from "next/link";

import OwlCarousel from "react-owl-carousel";

export default function JanSwastya({data}) {
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
  let imageType = "rd-l-thumb";

  return (
    <div className='alt-layout layout-4 row d-flex align-items-center'>
      <div className='col-md-12'>
        <div className='rd-title bg-transparent text-center'>
          <h2>
            <span>
              <i className='fas fa-stethoscope rd-flip' />
              {data[0].name}
            </span>
            <Link href="/category/[id]" as={`/category/${data[0].slug}`} passHref >
              <a className='rd-morebtn' >
              <span>
                थप <i className='fas fa-angle-right' />
              </span>
              </a>
            </Link>
          </h2>
        </div>
        <OwlCarousel
          className='owl-carousel owl-theme'
          loop
          autoPlay='true'
          loop='true'
          margin={15}
          autoPlay={true}
          autoplayTimeout='2000'
          autoplayHoverPause='true'
          responsive={listState[0].responsive}>
          {data[0].posts.nodes.map(post => (
            <div className='item' key={post.postId}>
              <div className='rd-item'>
                <div className='image'>
                  <figure>
                    <Link as={`/${data[0].slug}/${post.postId}`} href='/[category_slug]/[postId]' passHref>
                      <a>
                      {post.featuredImage.mediaDetails.sizes.map(img => (
                        <React.Fragment key={img.name}>
                          {img.name == imageType && (
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
                    <Link
                      href='/[category_slug]/[postId]' 
                      as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                      <a>{post.title}</a>
                    </Link>
                  </h4>
                  <div className='author'>
                    <i className='fas fa-user-circle' />
                    <span> </span>

                    {post.PostDetail.authorName ? (
                      <>{post.PostDetail.authorName}</>
                    ) : (
                      <Link  href='/user/[id]'  as={`/user/${post.author.slug}`} passHref>
                        <a> {post.author.name} </a>
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
