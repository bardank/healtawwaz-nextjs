import React, {Component} from "react";
import { useRouter, withRouter } from 'next/router'
// import {withRouter} from "react-router";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { pathname, query } = this.props.router
    // verify props have changed to avoid an infinite loop
    if (query.counter !== prevProps.router.query.counter) {
      console.log(query)
    }
  }
  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    // if (this.props.location !== prevProps.location) {
    //   window.scrollTo(0, 0);
    // }
  }

  render() {
    return this.props.children;
  }
}


export default withRouter(ScrollToTop);
