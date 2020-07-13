import React from "react";

export default function TagPanigination({mydata}) {
  let {fetchMore} = mydata;
  let {data} = mydata;
  //   let posts = data.category.posts.edges;
  return (
    <div>
      {data.tag.posts.pageInfo.hasNextPage ? (
        <button
          className='btn btn-primary'
          onClick={() => {
            fetchMore({
              variables: {
                cursor: data.tag.posts.pageInfo.startCursor,
              },
              updateQuery: (prev, {fetchMoreResult}) => {
                if (!fetchMoreResult) {
                  return prev;
                }
                console.log(fetchMore);
                console.log(fetchMoreResult);
                return {
                  tag: {
                    ...prev.tag,
                    posts: {
                      ...fetchMoreResult.tag.posts,
                      edges: [
                        ...prev.tag.posts.edges,
                        ...fetchMoreResult.tag.posts.edges,
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
