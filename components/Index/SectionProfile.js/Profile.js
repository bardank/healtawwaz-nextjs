import React from "react";
import Link from "next/link";

export default function Profile({data}) {
  let imageType = "rd-thumb";

  return (
    <div className='col-md-7 layout-3'>
      <div className='rd-title bg-transparent'>
        <h2>
          <span>
            <i className='fas fa-id-card-alt rd-flip' />
            {data[0].name}
          </span>
          <a href='#' className='rd-morebtn'>
            <span>
              थप <i className='fas fa-angle-right' />
            </span>
          </a>
        </h2>
      </div>
      {data[0].posts.nodes.map(post => (
        <div className='rd-wrap' key={post.id}>
          <div className='media d-flex align-items-center'>
            {post.featuredImage.mediaDetails.sizes.map(img => (
              <React.Fragment key={img.name}>
                {img.name === imageType && (
                  <img
                    src={`${img.sourceUrl}`}
                    className='align-self-center mr-3 rounded-circle'
                  />
                )}
              </React.Fragment>
            ))}

            <div className='media-body'>
              <span className='author'>
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
              <h3>
                <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                  <a>{post.title}</a>
                </Link>
              </h3>
              <Link href='/[category_slug]/[postId]' as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                <a>
                पुरा पढनुहोस् <i className='fas fa-long-arrow-right' />
                </a>
              </Link>
              <p />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
