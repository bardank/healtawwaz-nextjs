import React from "react";

export default function Pagination({mydata}) {
  let {fetchMore} = mydata;
  let {data} = mydata;
  let posts = data.category.posts.edges;
  return (
    <div>
      {data.category.posts.pageInfo.hasNextPage ? (
        <button
          className='btn btn-primary'
          onClick={() => {
            fetchMore({
              variables: {
                cursor: data.category.posts.pageInfo.startCursor,
              },
              updateQuery: (prev, {fetchMoreResult}) => {
                if (!fetchMoreResult) {
                  return prev;
                }
                console.log(fetchMore);
                console.log(fetchMoreResult);
                return {
                  category: {
                    ...prev.category,
                    posts: {
                      ...fetchMoreResult.category.posts,
                      edges: [
                        ...prev.category.posts.edges,
                        ...fetchMoreResult.category.posts.edges,
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
