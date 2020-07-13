import React from "react";
import OwlCarousel from "react-owl-carousel";
import Link from "next/link";
export default function PostTrending({data}) {
  const listState = React.useState({
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      1280: {
        items: 5,
      },
    },
  });
  let imageType = "rd-m-thumb";
  return (
    <div className='col-md-12 read-this'>
      <div className='rd-title text-center'>
        <h2 className='bg-rd'>
          <span>ट्रेण्डिङ</span>
        </h2>
      </div>
      <OwlCarousel
        className='owl-carousel owl-theme'
        loop
        autoPlay={true}
        items='1'
        loop='true'
        margin={15}
        autoplayTimeout='3000'
        autoplayHoverPause='true'
        responsive={listState[0].responsive}>
        {data.nodes.map(post => (
          <div className='item' key={post.name}>
            <div className='r-wrap'>
              <div className='img-area'>
                <Link href='/[category_slug]/[postId]' as={`/${post.categories.nodes[0].slug}/${post.postId}`}passHref>
                  <a>
                  {post.featuredImage.mediaDetails.sizes.map(img => (
                    <span key={img.name}>
                      {img.name == imageType && (
                        <img
                          src={`${img.sourceUrl}`}
                          className='img-fluid'
                          alt=''
                        />
                      )}
                    </span>
                  ))}
                  </a>
                  
                </Link>
              </div>
              <h4>
                <Link href='/[category_slug]/[postId]' to={`/${post.categories.nodes[0].slug}/${post.postId}`}passHref>
                  <a>{post.title}</a>
                </Link>
              </h4>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
{
  /* 
<script>
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
									items:5
								}
							}
						});
					</script>	 */
}
