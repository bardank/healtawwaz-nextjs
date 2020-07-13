import React from "react";
import Link from "next/link";
import condom from "../../../image/condom.png";
import OwlCarousel from "react-owl-carousel";
export default function SectionYaun({data}) {
  const listState = React.useState({
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 2,
      },
      1280: {
        items: 2,
      },
    },
  });
  let limit = 2;
  let imageType = "rd-p-thumb";
  return (
    <div className='alt-layout layout-4 row d-flex align-items-center'>
      <div className='container'>
        <div className='row layout-9'>
          <div className='col-md-12'>
            <div className='rd-title bg-transparent'>
              <h2>
                <span>
                  <i className='fas fa-venus-mars' /> {data[0].name}
                </span>
                <Link href='/category/[name]' as={`/category/${data[0].slug}`} passHref>
                  <a className='rd-morebtn' >
                  <span>
                    थप <i className='fas fa-angle-right' />
                  </span>
                  </a>
                </Link>
              </h2>
            </div>
          </div>
          <div className='rd-wrap text-center col-md-12'>
            <div className='row d-flex align-items-center'>
              <div className='col-md-3 hide-mb'>
                <img src={`${condom}`} alt='condom' className='img-fluid' />
              </div>
              <div className='col-md-9'>
                <OwlCarousel
                  className='owl-carousel owl-theme'
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
                              <Link href='/[name]/[id]'
                                as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                                  <a>
                                  {post.featuredImage.mediaDetails.sizes.map(
                                    img => (
                                      <React.Fragment key={img.name}>
                                        {img.name == imageType ? (
                                          <img
                                            src={`${img.sourceUrl}`}
                                            className='img-fluid rounded'
                                          />
                                        ) : null}
                                      </React.Fragment>
                                    )
                                  )}
                                  </a>
                              </Link>
                            </figure>
                          </div>
                          <div className='teaser'>
                            <span className='author'>
                              {post.PostDetail.authorName ? (
                                <>{post.PostDetail.authorName}</>
                              ) : (
                                <Link href='/user/[authorname]' as={`/user/${post.author.slug}`} passHref>
                                  <a >
                                  {post.author.name}
                                  </a>
                                </Link>
                              )}
                            </span>
                            <h3>
                              <a href='#'>वीर्य, शुक्राणु र हस्तमैथुन</a>
                            </h3>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
