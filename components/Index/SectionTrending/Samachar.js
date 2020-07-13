import React, { Fragment } from "react";
import Link from "next/link";

export default function Samachar({data}) {
  let first;
  let imageType = "rd-l-thumb";
  {
    data[0].posts.nodes.map((post, i) => {
      if (i === 0) {
        first = (
          <div className='col-md-7' key={post.postId}>
            <div className='image'>
              <figure>
                <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                  <a>
                  {post.featuredImage.mediaDetails.sizes.map((img, j) => (
                    <React.Fragment key={j}>
                      {/* {console.log(img)} */}
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
                <a href='#'>
                  <i className='fas fa-user-circle' />
                  <span> </span>
                  {post.PostDetail.authorName ? (
                    <>{post.PostDetail.authorName}</>
                  ) : (
                    <Link href='/user/[id]' as={`/user/${post.author.slug}`} passHref>
                      <a>{post.author.name}</a>
                    </Link>
                  )}
                </a>
              </div>
            </div>
          </div>
        );
      }
      else{
        return null
      }
    });
  }
  return (
    <div className='col-md-8 layout-2'>
      <div className='rd-title bg-transparent'>
        <h2>
          <span>{data[0].name}</span>
          <Link href='/category/[name]' as={`/category/${data[0].slug}`} passHref>
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
          {first}
          <div className='col-md-5 pl-0'>
            {data[0].posts.nodes.map((post, i) => (
              <Fragment key={i}>
                {i !== 0 && (
                  <div className='teaser rd-list' key={i}>
                    <h4>
                      <Link  href='/[name]/[id]' as={`/${data[0].slug}/${post.postId}`} passHref>
                        <a> {post.title}</a>
                      </Link>
                    </h4>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div className='col-md-5 pl-0'>
  <div className='teaser rd-list'>
    <h4>
      <a href='#'>
        ssखटाएको ठाउँमा चिकित्सक नगएपछि सुदूरपश्चिम स्वास्थ्य
        निर्देशनालयले..
                    </a>
    </h4>
  </div>
  <div className='teaser rd-list'>
    <h4>
      <a href='#'>
        रुखबाट लडेर घाइते भएकी महिलाको हेलिकोप्टरबाट उद्धार
                    </a>
    </h4>
  </div>
  <div className='teaser rd-list'>
    <h4>
      <a href='#'>
        वीरगन्जमा कोभिड—१९ का २ जना संक्रमित थपिए, ४ जना निको
        भएर..
                    </a>
    </h4>
  </div>
  <div className='teaser rd-list'>
    <h4>
      <a href='#'>
        लकडाउन छिचोल्दैं महोत्तरीबाट १५ जना कोभिड–१९ जाँच्न टेकु
        अस्पतालमा
                    </a>
    </h4>
  </div>
</div> */
