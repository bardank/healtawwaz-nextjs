import React from "react";
import Link from "next/link";

export default function Antarbarta({data}) {
  // let imageType = "rd-thumb";
  // console.log(data);
  let imageType = "rd-i-thumb";
  let limit = 2;

  return (
    <React.Fragment>
      <div className='rd-title bg-transparent'>
        <h2>
          <span>
            <i className='fas fa-microphone-alt rd-flip' />
            {data[0].name}
          </span>
          <Link href='/category/[id]' as={`/category/${data[0].slug}`} passHref>
            <a className='rd-morebtn'>
            <span>
              थप <i className='fas fa-angle-right' />
            </span>
            </a>
            
          </Link>
        </h2>
      </div>
      <div className='l-wrap'>
        {data[0].posts.nodes.map((post, i) => (
          <React.Fragment key={i}>
            {i < limit && (
              <div className='rd-wrap'>
                <div className='media d-flex align-items-center'>
                  {post.featuredImage.mediaDetails.sizes.map(img => (
                    <React.Fragment key={img.name}>
                      {img.name == imageType && (
                        <img
                          src={`${img.sourceUrl}`}
                          className='align-self-center mr-3 rounded'
                        />
                      )}
                    </React.Fragment>
                  ))}
                  <div className='media-body'>
                    <span className='author'>
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
                    </span>
                    <h3>
                      <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                        <a>
                        {post.title}
                        </a>
                      </Link>
                    </h3>
                    <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                      <a>
                      पुरा पढनुहोस् <i className='fas fa-long-arrow-right' />
                      </a>
                    </Link>
                    <p />
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
