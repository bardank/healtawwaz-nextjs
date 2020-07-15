import React, {Component} from "react";
import {Query} from "@apollo/react-components";
import {POST_DETAIL} from "../../queries/posts/postDetail";
import loadingSVG from "../../image/icon.svg";

import PostDetailComponent from "../../components/Post/PostDetailComponent";
import NotFound from "../NotFound";
import { useRouter } from 'next/router';
import { post } from "jquery";

function PostDetail(props) {
    let {postId} = props.params;
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

        <PostDetailComponent post={data} params={props.params} />
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

PostDetail.getInitialProps = async(props) => {
  console.log(props.query)
  return {params: props.query.params}
}

export default PostDetail;