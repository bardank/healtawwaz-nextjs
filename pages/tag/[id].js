import {Query} from "@apollo/react-components";
import React, {Component} from "react";
import gql from "graphql-tag";
import {TAG_POSTS} from "../../queries/posts/tag";
import loadingSVG from "../../image/icon.svg";

// import AllPosts from "../components/Categories/AllPosts";
import TagComponent from "../../components/Tag/TagComponent";
import NotFound from "../NotFound";

function TagPage (props){
  let {id} = props.query

  const renderPage = function(loading, error, data, fetchMore) {
    if (error) {
      return <NotFound />;
    }
    if (loading) {
      return (
        <div className='loading'>
          <object type='image/svg+xml' data={loadingSVG}></object>;
        </div>
      );
    }

    if (typeof data !== "undefined" && data.tag !== null) {
      // let posts = data.category.posts.nodes;
      let posts = data.tag.posts.edges;
      // console.log(data);
      let combinedata = {
        data,
        fetchMore,
      };
      return <TagComponent mydata={combinedata} />;
    }
    // console.log("Last");
    return null;
  }
  return (
    <Query query={TAG_POSTS} variables={{id, cursor: null}}>
      {({loading, error, data, fetchMore}) => {
        return renderPage(loading, error, data, fetchMore);
      }}
    </Query>
  );
}

TagPage.getInitialProps   = async(props) => {
  return {query: props.query}
}
export default TagPage;