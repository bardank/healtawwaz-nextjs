import {Query} from "@apollo/react-components";
import React from "react";
import {CATEGORY_POSTS} from "../../queries/posts/CategoryPosts";
import AllPosts from "../../components/Categories/AllPosts";
import NotFound from "../NotFound";
import loadingSVG from "../../image/icon.svg";
import { useRouter } from 'next/router';

const Category = function (props) {
  let router = useRouter()
  let { id } = router.query
  console.log(id)
  const renderPage = (loading, error, data, fetchMore)=>{
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
    console.log(data.category);
    if (typeof data !== "undefined" && data.category !== null) {
      // let posts = data.category.posts.nodes;
      let posts = data.category.posts.edges;
      console.log(data);
      let combinedata = {
        data,
        fetchMore,
      };
      return <AllPosts mydata={combinedata} />;
    }
    console.log("Last");
    return <NotFound />;
  }
  return (
    <Query query={CATEGORY_POSTS} variables={{id, cursor: null}}>
      {({loading, error, data, fetchMore}) => {
        return renderPage(loading, error, data, fetchMore);
      }}
    </Query>
  );
}

export default Category
