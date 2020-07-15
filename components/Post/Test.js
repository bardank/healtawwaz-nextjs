import React from "react";

import Link from "next/link";
export default function RelatedPosts({data}) {
  const listState = React.useState({
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      1280: {
        items: 3,
      },
    },
  });
  let imageType = "rd-m-thumb";
  return (
    <div className='related-post'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='rd-title text-center'>
            <h2>
              <span>सम्बन्धित खवर</span>
            </h2>
          </div>
        </div>
        <OwlCarousel
          className='col-md-12 owl-carousel owl-theme'
          margin={10}
          autoplayTimeout='2000'
          autoPlay={true}
          autoplayHoverPause='true'
          responsive={listState[0].responsive}>
          {data.map(post => (
            <div className='item'>
              <div className='r-wrap'>
                <div className='img-area'>
                  <Link href='/[category_slug]/[postId]' as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                    <a>
                    {post.featuredImage.mediaDetails.sizes.map(img => (
                      <span key={img.name}>
                        {img.name == imageType && (
                          <img src={`${img.sourceUrl}`} className='img-fluid' />
                        )}
                      </span>
                    ))}
                    </a>
                  </Link>
                </div>
                <h4>
                  <Link href='/[category_slug]/[postId]' as={`/${post.categories.nodes[0].slug}/${post.postId}`}  passHref>
                    <a>{post.title}</a>
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
  {
    /* /related post */
  }
}

{
  /* <script>
    var owl = $('.owl-carousel');
								owl.owlCarousel({
        loop:true,
									margin:15,
									autoplay:true,
									autoplayTimeout:2000,
									autoplayHoverPause:true,
									responsive : {
        0 : {
        items:1
										},
										// breakpoint from 480 up
										480 : {
        items:2
										},
										// breakpoint from 768 up
										1280 : {
        items:3
										}
									}
								});
							</script> */
}
