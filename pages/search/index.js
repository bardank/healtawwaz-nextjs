import React from "react";
import {Query} from "@apollo/react-components";
import {SEARCH_POST} from "../../queries/posts/SearchPost";
import queryString from "query-string";
import loadingSVG from "../../image/icon.svg";
import Search from "../../components/Search/Search";
import NotFound from "../NotFound";
import { useRouter } from 'next/router';

export default function SearchPost(props){
  
  const values = useRouter().query;
  let search = values.news;
  // console.log(search)
  const renderPage = function (loading, error, data, refetch) {
    if (loading) {
      return (
        <div className='loading'>
          <object type='image/svg+xml' data={loadingSVG}></object>;
        </div>
      );
    }
    if (error) {
      console.log(error);
      return <NotFound />;
    }
    console.log(data.posts.nodes.length);
    return (
      <React.Fragment>
        <h1>Search Result</h1>
        {data.posts.nodes.length === 0 ? (
          <h2>No Posts Found</h2>
        ) : (
          <Search data={data} />
        )}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Query query={SEARCH_POST} variables={{search:search}}>
        {({loading, error, data, refetch}) => {
          return renderPage(loading, error, data, refetch);
        }}
      </Query>
    </React.Fragment>
  );
}