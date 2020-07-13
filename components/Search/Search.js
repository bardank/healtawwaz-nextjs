import React from "react";

export default function Search({data}) {
  return (
    <div className='container'>
      {data.posts.nodes.map(post => (
        <div key={post.postId}>
          <h2>{post.title}</h2>
          <img src={`${post.featuredImage.sourceUrl}`} alt='' className='img' />
        </div>
      ))}
    </div>
  );
}
