import React, {Component} from "react";
import {Query} from "@apollo/react-components";
import {POST_DETAIL} from "../../queries/posts/postDetail";
import loadingSVG from "../../image/icon.svg";

import PostDetailComponent from "../../components/Post/PostDetailComponent";
import NotFound from "../NotFound";

function PostDetail(props) {
  let {postId} = props.query;
  const renderPage = function(loading, error, data, refetch) {
  if (loading) {
    return (
      <div className='loading'>
        <object type='image/svg+xml' data={loadingSVG}></object>
      </div>
    );
  }
  if (error) {
    return <NotFound />;
  }
  return (
    <React.Fragment>

      <PostDetailComponent post={data} params={props.query} />
    </React.Fragment>
  );
}
  return (
    <Query query={POST_DETAIL} variables={{postId: postId}}>
      {({loading, error, data, refetch}) => {
        return renderPage(loading, error, data, refetch);
      }}
    </Query>
  );
}

PostDetail.getInitialProps   = async(props) => {
  return {query: props.query}
}

export default  PostDetail;