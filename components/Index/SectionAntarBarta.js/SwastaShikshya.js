import React, { Fragment } from "react";
import Link from "next/link";

export default function SwastaShikshya({data}) {
  let first;
  let limit = 3;

  let imageType = "rd-l-thumb";
  {
    data[0].posts.nodes.map((post, i) => {
      if (i === 0) {
        first = (
          <div className='col-md-7' key={i}>
            <div className='image'>
              <figure>
                <Link href='/[category_slug]/[postId]' as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                  <a>
                  {post.featuredImage.mediaDetails.sizes.map((img,j) => (
                    <React.Fragment key={j}>
                      {img.name === imageType && (
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
            <div className='teaser'>
              <h3>
                <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                  <a>{data[0].posts.nodes[0].title}</a>
                </Link>
              </h3>
              <div className='author'>
                  <i className='fas fa-user-circle' /> <span> </span>
                  {post.PostDetail.authorName ? (
                    <>{post.PostDetail.authorName}</>
                  ) : (
                    <Link href='/users/[id]' as={`/user/${post.author.slug}`} passHref>
                      <a>{post.author.name}</a>
                    </Link>
                  )}
              </div>
            </div>
          </div>
        );
      }
      else{
        return null;
      }
    });
  }
  return (
    <div className='row'>
      <div className='col-md-12 layout-5'>
        <div className='rd-title bg-transparent'>
          <h2>
            <span>
              <i className='fas fa-heart-rate rd-flip' /> {data[0].name}
            </span>
            <Link href='/category/[name]' as={`/category/${data[0].slug}`}  passHref>
              <a className='rd-morebtn'>
              <span>
                थप <i className='fas fa-angle-right' />
              </span>
              </a>
            </Link>
          </h2>
        </div>
        <div className='rd-wrap'>
          <div className='row'>
            {first}{" "}
            <div className='col-md-5 pl-0'>
              {data[0].posts.nodes.map((post, i) => (
                <Fragment key={i}>
                  {i !== 0 && (
                    <React.Fragment>
                      {i < limit && (
                        <div className='teaser rd-list'>
                          <h4>
                            <Link
                              href='/[name]/[id]'
                              as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                                <a>{post.title}</a>
                            </Link>
                          </h4>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
