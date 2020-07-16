import {Query} from "@apollo/react-components";
import React, {Component} from "react";
import gql from "graphql-tag";
import {USER_POSTS} from "../../queries/posts/User";
import AllPosts from "../../components/Categories/AllPosts";
import UserComponent from "../../components/User/UserComponent";

function UserPage(props) {
  let {id} = props.query;
  const renderPage =  function(loading, error, data, fetchMore) {
    if (error) {
      console.log(error);
      return "";
    }
    if (loading) {
      return "";
    }
    if (typeof data !== "undefined" && data.user !== null) {
      // let posts = data.user.posts.edges;
      console.log(data);
      let combinedata = {
        data,
        fetchMore,
      };
      return <UserComponent mydata={combinedata} />;
    }
    // console.log("Last");
    return "No Posts";
  }
  return (
    <Query query={USER_POSTS} variables={{id, cursor: null}}>
      {({loading, error, data, fetchMore}) => {
        return renderPage(loading, error, data, fetchMore);
      }}
    </Query>
  );
}
TagPage.getInitialProps   = async(props) => {
  return {query: props.query}
}
export default UserPage