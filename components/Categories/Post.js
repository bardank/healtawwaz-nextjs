import React from "react";
import Link from "next/link";

export default function Post({mydata}) {
  console.log(mydata);
  let {data} = mydata;
  let posts = data.category.posts.edges;
  return (
    <div>
      <h1>Deatil Page</h1>
      {posts.map(post => (
        <div key={post.node.id}>
          <img src='' alt='' />
          <h3>
            <Link href='/[category_slug]/[postId]'  as={`/${mydata.data.category.slug}/${post.node.postId}`}>
              <a>{post.node.title}</a>
            </Link>
          </h3>
          {post.node.PostDetail.customCategory}
          <p>{post.node.PostDetail.customCategory}</p>
          <img
            src={`${post.node.featuredImage.sourceUrl}`}
            alt=''
            className='img'
          />
          <p>{post.node.PostDetail.subHeading}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
