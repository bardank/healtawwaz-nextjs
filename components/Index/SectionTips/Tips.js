import React from "react";
import Link from "next/link";

export default function Tips({data}) {
  let limit = 2;
  let imageType = "rd-l-thumb";

  return (
    <div className='col-md-4 layout-6'>
      <div className='rd-title bg-transparent'>
        <h2>
          <span>
            <i className='fas fa-wand-magic' /> {data[0].name}
          </span>
          <Link href='/category/[id]' as={`/category/${data[0].slug}`} passHref>
            <a  className='rd-morebtn'>
            <span>
              थप <i className='fas fa-angle-right' />
            </span>
            </a>
          </Link>
        </h2>
      </div>
      <div className='rd-wrap'>
        {data[0].posts.nodes.map((post, i) => (
          <React.Fragment key={i}>
            {i < limit && (
              <div className='l-wrap'>
                <div className='image'>
                  <figure>
                    <Link href='/[category_slug]/[postId]'
                      as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                        <a>
                        {post.featuredImage.mediaDetails.sizes.map((img, i) => (
                          <React.Fragment key={i}>
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
                  <div className='author'>
                    {post.PostDetail.authorName ? (
                      <>{post.PostDetail.authorName}</>
                    ) : (
                      <Link  href='/user/[id]' as={`/user/${post.author.slug}`} passHref>
                        <a>{post.author.name}</a>
                      </Link>
                    )}
                  </div>
                  <h4>
                    <a href='#'>{post.title}</a>
                  </h4>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
