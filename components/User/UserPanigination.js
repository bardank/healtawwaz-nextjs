import React from "react";

export default function UserPanigination({mydata}) {
  let {fetchMore} = mydata;
  let {data} = mydata;
  console.log(data.user);
  console.log(data.user.posts.pageInfo.startCursor);

  //   let posts = data.category.posts.edges;
  return (
    <div>
      {data.user.posts.pageInfo.hasNextPage ? (
        <button
          className='btn btn-primary'
          onClick={() => {
            fetchMore({
              variables: {
                cursor: data.user.posts.pageInfo.startCursor,
              },
              updateQuery: (prev, {fetchMoreResult}) => {
                if (!fetchMoreResult) {
                  return prev;
                }
                console.log(fetchMore);
                console.log(fetchMoreResult);
                return {
                  user: {
                    ...prev.user,
                    posts: {
                      ...fetchMoreResult.user.posts,
                      edges: [
                        ...prev.user.posts.edges,
                        ...fetchMoreResult.user.posts.edges,
                      ],
                    },
                  },
                };
              },
            });
          }}>
          Load More
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
