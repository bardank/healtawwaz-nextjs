import React from "react";
import TagPost from "./TagPost";
import TagPanigination from "./TagPanigination";

export default function TagComponent({mydata}) {
  console.log(mydata);
  let {data} = mydata;
  let posts = data.tag.posts.edges;

  return (
    <div className='container'>
      <hr />
      <React.Fragment>
        <h2>Tag Detail Page</h2>
        <h1>{data.tag.name}</h1>
        {posts.length === 0 ? (
          <h1>No Posts</h1>
        ) : (
          <div>
            <TagPost mydata={mydata} />
            <TagPanigination mydata={mydata} />
          </div>
        )}
      </React.Fragment>
    </div>
  );
}
