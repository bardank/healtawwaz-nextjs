import React from "react";
import UserPost from "./UserPost";
import UserPanigination from "./UserPanigination";

export default function UserComponent({mydata}) {
  console.log(mydata);
  let {data} = mydata;
  let posts = data.user.posts.edges;

  return (
    <div className='container'>
      <hr />
      <React.Fragment>
        <h2>User Detail Page</h2>
        <h1>{data.user.name}</h1>
        {posts.length === 0 ? (
          <h1>No Posts</h1>
        ) : (
          <div>
            <UserPost mydata={mydata} />
            <UserPanigination mydata={mydata} />
          </div>
        )}
      </React.Fragment>
    </div>
  );
}
