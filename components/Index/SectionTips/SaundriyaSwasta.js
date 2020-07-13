import React, { Fragment } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function SaundriyaSwasta({data}) {
  let first;

  let firstimageType = "rd-l-thumb";
  let otherimageType = "rd-thumb";

  {
    data[0].posts.nodes.map((post, i) => {
      if (i === 0) {
        first = (
          <React.Fragment  key={post.postId}>
            <div className='col-md-7'>
              <div className='image'>
                <figure>
                  <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                    <a>
                    {post.featuredImage.mediaDetails.sizes.map((img,j) => (
                      <React.Fragment key={j}>
                        {img.name === firstimageType && (
                          <img
                            src={`${img.sourceUrl}`}
                            className='img-fluid'
                            alt=''
                          />
                        )}
                      </React.Fragment>
                    ))}
                    </a>
                  </Link>
                </figure>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='teaser'>
                <div className='author'>
                    <i className='fas fa-user-circle' />
                    <span> </span>
                    {post.PostDetail.authorName ? (
                      <>{post.PostDetail.authorName}</>
                    ) : (
                      <Link href='/user/[id]' as={`/user/${post.author.slug}`} passHref>
                        <a>
                        {post.author.name}
                        </a>
                      </Link>
                    )}
                </div>
                <h3>
                  <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                    <a>{data[0].posts.nodes[0].title}</a>
                  </Link>
                </h3>
                  <p
                    className=''
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        data[0].posts.nodes[0].content
                      ),
                    }}></p>
                  <Link  href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                    <a>
                    पुरा पढनुहोस्
                    <i className='fas fa-long-arrow-right' />
                    </a>
                  </Link>
              </div>
            </div>
          </React.Fragment>
        );
      }
    });
  }
  return (
    <div className='col-md-8 layout-7'>
      <div className='rd-title bg-transparent'>
        <h2>
          <span>
            <i className='fas fa-apple-alt' /> {data[0].name}
          </span>
          <Link href='/category/[id]' as={`/category/${data[0].slug}`} passHref>
            <a className='rd-morebtn' >
            <span>
              थप <i className='fas fa-angle-right' />
            </span>
            </a>
            
          </Link>
        </h2>
      </div>
      <div className='row rd-wrap mb-3 d-flex align-items-center'>{first}</div>
      <div className='row rd-wrap'>
        {data[0].posts.nodes.map((post, i) => (
          <Fragment key={i}>
            {i !== 0 && (
              <div className='col-md-4'>
                <div className='image'>
                  <figure>
                    <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref >
                      <a>
                      {post.featuredImage.mediaDetails.sizes.map(img => (
                        <React.Fragment key={img.name}>
                          {img.name == otherimageType ? (
                            <img
                              src={`${img.sourceUrl}`}
                              className='img-fluid'
                              alt=''
                            />
                          ) : null}
                        </React.Fragment>
                      ))}
                      </a>
                    </Link>
                  </figure>
                </div>
                <div className='teaser'>
                  <h4>
                    <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                      <a>
                      {data[0].posts.nodes[0].title}
                      </a>
                    </Link>
                  </h4>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
