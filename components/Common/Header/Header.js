import React, {Component} from "react";
import {Query} from "@apollo/react-components";
import {MAIN_MENU} from "../../../queries/posts/MainMenu";
import {MenuItems} from "../../../helper/MenuItems";
import Link from 'next/link'
import SearchBar from "./SearchBar";
import SideNavBar from "./SideNavBar";
import TrendingTag from "./TrendingTag";
import MainMenu from "./MainMenu";
import loadingSVG from "../../../image/icon.svg";
import healthaawaj from "../../../image/logo.svg";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      submenu: null,
    };
  }

  // this toggle is for sidebar show and hide
  toggleClass = () => {
    const currentState = this.state.show;
    this.setState({show: !currentState});
  };
  // toggle for sidebar submenu
  toggleSubClass = () => {
    const currentState = this.state.submenu;
    this.setState({submenu: !currentState});
  };
  renderPage(loading, error, data, refetch) {
    if (loading) {
      return (
        <div className='loading'>
          {/* <img src={loadingSVG} /> */}
          <object type='image/svg+xml' data={loadingSVG}/>;
        </div>
      );
    }
    if (error) {
      return "Error";
    }
    let categories = data.categories.nodes;
    // the Menu function is defined in HELPER FOLDER which generally takes menu and category details as DATA and returns only menuitems
    let myMenus = MenuItems(data);
    return (
      <React.Fragment>
        <nav
          className={
            this.props.showScroll ? "navbar-sticky" : "false"
          }>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <ul className="rd-mb-menu">
                  <SideNavBar categories={categories} />
                  <li className="rd-logo-m">
                    <Link href='/' passHref>
                      <a >
                        <img src={healthaawaj} alt='health logo' className='img-fluid' />
                      </a>
                    </Link>
                    
                  </li>
                  <MainMenu myMenus={myMenus} />
                  <li>
                    {/* this toggle is for go on top of page */}
                    <a onClick={this.toggleClass}>
                      <i className='fas fa-search'></i>
                    </a>
                  </li>
                </ul>
                <SearchBar show={this.state.show} />
              </div>
            </div>
          </div>
        </nav>
        <TrendingTag />
      </React.Fragment>
    );
  }
  render() {
    return (
      <Query query={MAIN_MENU}>
        {({loading, error, data, refetch}) => {
          return this.renderPage(loading, error, data, refetch);
        }}
      </Query>
    );
  }
}
