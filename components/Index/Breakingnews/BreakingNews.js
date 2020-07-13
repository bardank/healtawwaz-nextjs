import React from "react";
import Link from "next/link";
import {useQuery} from "@apollo/react-hooks";
import {Breakingnews} from "../../../helper/Breaking/index";
import BreakingTopAdd from "./BreakingAdds/BreakingTopAdd.js";
import BreakingDownAdd from "./BreakingAdds/BreakingDownAdd.js";
import EveningPosts from "./EveningPost";
export default function BreakingNews(props) {
  let breakingposts = Breakingnews(props.data);
  // for  fetching widgets
  return (
    <React.Fragment>
      <BreakingTopAdd />
      <section className='breaking'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-12'>
              {breakingposts.map(post => (
                <div className='breaking-wrap' key={post.id}>
                  {post.PostDetail.customCategory && (
                    <span className='category'>
                      {post.PostDetail.customCategory}
                    </span>
                  )}
                  <h1>
                    <Link href='/[category_slug]/[postId]'
                      as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                    <a >
                      {post.title}
                    </a>
                    </Link>
                   
                  </h1>
                  {post.PostDetail.subHeading && (
                    <h2>{post.PostDetail.subHeading}</h2>
                  )}
                  <span className='author'>
                    <i className='fab fa-user-circle' />
                    <span> </span>

                    {post.PostDetail.authorName ? (
                      <>{post.PostDetail.authorName}</>
                    ) : (
                      <Link href='/user/[id]' as={`/user/${post.author.slug}`} passHref>
                        <a >
                        {post.author.name}
                        </a>
                      </Link>
                    )}
                  </span>
                  <Link href='/[name]/[id]' as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                    <a>
                      <img
                        src={`${post.featuredImage.sourceUrl}`}
                        alt='kk'
                        className='img-fluid'
                      />
                    </a>
                    
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BreakingDownAdd />
      <EveningPosts />
    </React.Fragment>
  );
}
