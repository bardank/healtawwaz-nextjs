import React from "react";
import Post from "./Post";
import Pagination from "./Pagination";

export default function AllPosts({mydata}) {
  console.log(mydata);
  let {data} = mydata;
  let posts = data.category.posts.edges;

  return (
    <div className='container'>
      <hr />
      <React.Fragment>
        <h2>Category Detail Page</h2>
        <h1>{data.category.name}</h1>
        {posts.length === 0 ? (
          <h1>No Posts</h1>
        ) : (
          <div>
            <h1>Has Data</h1>
            <Post mydata={mydata} />
            <Pagination mydata={mydata} />
          </div>
        )}
      </React.Fragment>
    </div>
  );
}
