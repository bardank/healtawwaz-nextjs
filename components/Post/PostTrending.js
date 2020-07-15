import React from "react";
import Carousel from "react-multi-carousel";
import Link from "next/link";
export default function PostTrending({data}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1280 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1280, min: 480 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  let imageType = "rd-m-thumb";
  return (
    <div className='col-md-12 read-this'>
      <div className='rd-title text-center'>
        <h2 className='bg-rd'>
          <span>ट्रेण्डिङ</span>
        </h2>
      </div>
      <Carousel
      swipeable={true}
      draggable={true}
      // showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="col-md-12 owl-carousel owl-theme "
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      // itemClass="carousel-item-padding-40-px"
      // deviceType={this.props.deviceType}
      // dotListClass="custom-dot-list-style"
    >
      {data.nodes.map(post => (
          <div className='item' key={post.postId}>
            <div className='r-wrap'>
              <div className='img-area'>
                <Link href='/[category_slug]/[postId]' as={`/${post.categories.nodes[0].slug}/${post.postId}`}passHref>
                  <a>
                  {post.featuredImage.mediaDetails.sizes.map((img, j) => (
                    <span key={j}>
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
                <Link href='/[category_slug]/[postId]' as={`/${post.categories.nodes[0].slug}/${post.postId}`}passHref>
                  <a>{post.title}</a>
                </Link>
              </h4>
            </div>
          </div>
        ))}
    </Carousel>
     
    </div>
  );
}

