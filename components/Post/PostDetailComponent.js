import React, {useEffect, useState} from "react";
import Head from 'next/head';
import PostTrending from "./PostTrending";
import { useRouter } from 'next/router'
import Link from 'next/link';
// import MostReads from "./MostReads";
import RelatedPosts from "./RelatedPosts";
import myogimage from "../../image/fb.png";
// import {Helmet} from "react-helmet";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {dateConvertor} from "../../helper/DateConvertor";
import {GetIdFromUrl} from "../../helper/GetIdFromUrl";
import PopularPost from "../Common/PopularPost";

export default function PostDetailComponent({post, params}) {
  
  const categoryslug = params.category_slug;
  let ogimage;
  if (post.postBy.featuredImage.sourceUrl) {
    ogimage = post.postBy.featuredImage.sourceUrl;
  } else {
    ogimage = myogimage;
  }

  let imageType = "rd-thumb";
  let authorname;
  let authorinfo;
  let wpauthor;
  let authorUrl;
  if (post.postBy.PostDetail.authorName) {
    authorname = post.postBy.PostDetail.authorName;
    if (post.postBy.PostDetail.authorInfo) {
      authorinfo = post.postBy.PostDetail.authorInfo;
    } else if (post.postBy.PostDetail.authorPhoto) {
      post.postBy.PostDetail.authorPhoto.mediaDetails.sizes.map(img => {
        if (img.name === imageType) {
          authorUrl = img.sourceUrl;
        }
      });
    }
    authorUrl =
      "https://secure.gravatar.com/avatar/8cff2ab1b8b88079256f92a3cf9d10ee?s=96&d=mm&r=g";
  } else {
    // authorname = ;
    wpauthor = post.postBy.author.name;
    authorUrl = post.postBy.author.avatar.url;
    authorinfo = post.postBy.author.description;
  }
  let videoId = GetIdFromUrl(post.postBy.PostDetail.videoLink);
  // console.log(videoId);
  // for share
  let url;
  useEffect(() => {
    if(process.browser && (typeof window !== 'undefined')){
      let uri = window.location.pathname;
      url = `https://react.resham.info.np${uri}`;
    }
    return ()=>{
    }
  }, [])

 
  // getting category data
  let Postdata;
  try {
    post.postBy.categories.nodes.map(category => {
      if (categoryslug === category.slug) {
        Postdata = category;
      }
    });
  } catch (e) {}

  let relatedPosts = [];
  Postdata.posts.nodes.map(i => {
    if (i.postId !== post.postBy.postId) {
      relatedPosts.push(i);
    }
  });
  return (
    <main className='main-cont'>
        <Head>
          <meta property='og:title' content='This is title from helmet' />
          <meta property='og:url' content={`${url}`} />
          <meta
            property='og:title'
            content={`${post.postBy.seo.opengraphTitle}`}
          />
          <meta
            property='og:description'
            content={`${post.postBy.seo.opengraphDescription}`}
          />

          <meta property='og:image' content={`${ogimage}`} />
          <meta property="fb:app_id" content="2358789964361367" />
          <script async crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=2358789964361367&autoLogAppEvents=1"  defer /> 
          <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e990f2a844afb2e" defer></script>
          <title>{post.postBy.seo.opengraphTitle}</title>
        </Head>

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div id='crumbs' className='rd-breadcrumb'>
              <Link href='/' passHref>
                <a>गृहपृष्ठ</a>
              </Link> 
              <Link href='/category/[id]' as={`/category/${Postdata.slug}`} passHref>
                <a>{Postdata.name}</a>
              </Link> 
              <span className='current'>{post.postBy.title}</span>
            </div>
          </div>
          <div className='news-top col-12'>
            <div className='rd-heading'>
              <h1 className='single-heading' itemProp='name'>
                {post.postBy.title}
              </h1>
              {post.postBy.PostDetail.subHeading !== null && (
                <h2>{post.postBy.PostDetail.subHeading}</h2>
              )}
              <div className='row post-meta d-flex align-items-center'>
                <div className='col-lg-5'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='post-info d-flex align-items-center'>
                        <img
                          src={`${authorUrl}`}
                          width={60}
                          height={60}
                          alt='Health Aawaj'
                          className='avatar img-fluid rounded-circle'
                          style={{}}
                          data-was-processed='true'
                        />
                        <span className='rduser border-right'>
                          <span itemProp='author'>
                            {wpauthor ? (
                              <a>{wpauthor}</a>
                            ) : (
                              <>{authorname}</>
                            )}
                          </span>
                          <span className='author-info'>{authorinfo}</span>
                        </span>
                        <span className='rddate' itemProp='datePublished'>
                          <i className='fas fa-clock' />
                          &nbsp;
                          {dateConvertor(post.postBy.date)} मा प्रकाशित
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-7 d-flex justify-content-end'>
                  {/* <div className="addthis_inline_share_toolbox"></div> */}
                  <div className='addthis_inline_share_toolbox'></div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/* /news top */}
          <div className='col-md-9 news-detail border-right'>
            <div
              className='img-area mb-3'
              itemScope
              itemType='http://schema.org/ImageObject'>
              <img
                src={`${post.postBy.featuredImage.sourceUrl}`}
                className='img-fluid'
              />
              {/* <div
                className='fill'
                style={{backgroundImage: 'url("img/corona.jpg")'}}
              /> */}
            </div>
            <p
              className=''
              dangerouslySetInnerHTML={{
                __html: post.postBy.content,
              }}></p>
            {videoId === "notfound" ? (
              ""
            ) : (
              <div className='rd-video'>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
            )}

            <span>
              <strong>क्याटेगोरी : </strong>
              {post.postBy.categories.nodes.map((category, i) => (
                <span key={category.slug}>
                  {i === 0 ? "" : ","}
                  <Link href='/category/[id]' as={`/category/${category.slug}`} passHref>
                    <a>{category.name}</a>
                  </Link>
                </span>
              ))}
            </span>
            <br />
            <span>
              <strong>ट्याग : </strong>
              {post.postBy.tags.nodes.map((tag, i) => (
                <span key={tag.slug}>
                  {i === 0 ? "" : ","}

                  <Link href='/tag/[id]' as={`/tag/${tag.slug}`} passHref>
                   <a> #{tag.name}</a></Link>
                </span>
              ))}
            </span>
            <hr />
            <div className='rd-fb-comments'>
              <h3>
                <i className='fas fa-comments' /> तपाईको प्रतिक्रिया दिनुहोस
              </h3>

              <div
                className='fb-comments'
                data-href={`${url}`}
                data-numposts={5}
                data-width
              />
            </div>
            <hr />
              <RelatedPosts data={relatedPosts} />
          </div>
          {/* <PopularPost myclass={"col-md-3 rd-popular"} /> */}
            <PostTrending data={post.posts} />
        </div>
      </div>
    </main>
  )
}
