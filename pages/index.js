import * as React from "react";
import {Query} from "@apollo/react-components";
import {POSTS} from "../queries/posts/posts";
// import loadingImage from "../image/icon.svg";
// import condom from "../image/condom.png";

import StatefulIndexPost from "../components/Index/StatefulIndexPost";
import NotFound from "./NotFound";
import loadingSVG from "../image/icon.svg";
import SkipAdd from "../components/Widget/SkipAdd";
export default class PageIndex extends React.Component {
  renderPage(loading, error, data, refetch) {
    if (error) {
      console.log(error);
      return <NotFound />;
    }
    if (loading) {
      return (
        <div className='loading d-flex align-items-center justify-content-center'>
          <object type='image/svg+xml' data={loadingSVG}></object>
        </div>
      );
    }
    return (
      <React.Fragment>
        <SkipAdd />
        <button className='fetch' onClick={() => refetch()}>
          <i className='fas fa-sync'></i>
        </button>
        <StatefulIndexPost data={data} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <Query query={POSTS}>
        {({loading, error, data, refetch}) => {
          return this.renderPage(loading, error, data, refetch);
        }}
      </Query>
    );
  }
}
