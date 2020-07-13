import React, {Component, lazy, Suspense} from "react";
import BreakingNews from "./Breakingnews/BreakingNews";
// import {
//   LazyLoadComponent,
//   trackWindowScroll,
// } from "react-lazy-load-image-component";
// import {InView} from "react-intersection-observer";

const SectionHot = lazy(() => import("./SectionHot/SectionHot"));
const SectionTrending = lazy(() => import("./SectionTrending/SectionTrending"));
const JanSwastya = lazy(() => import("./JanSwastya/JanSwastya"));
const SectionAntarBarta = lazy(() =>
  import("./SectionAntarBarta.js/SectionAntarBarta")
);
const SectionProfile = lazy(() => import("./SectionProfile.js/SectionProfile"));
const SectionBishesh = lazy(() => import("./SectionBishesh/SectionBishesh"));
const SectionTips = lazy(() => import("./SectionTips/SectionTips"));
const SectionYaun = lazy(() => import("./SectionYawn/SectionYaun"));
const SectionCorporate = lazy(() =>
  import("./SectionCorpate/SectionCorporate")
);
const SectionVideo = lazy(() => import("./SectionVideo/SectionVideo"));

class StatefulIndexPost extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      breakingnews: [],
      sectionhot: [],
      sectiontrending: [],
      bisheshreport: [],
      profiles: [],
      janswasta: [],
      sectiontips: [],
      sectionvideo: [],
      yawnswasta: [],
      corporate: [],
    };
  }

  //   const [ref, inView, entry] = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });

  componentDidMount() {
    // fetched all the categories
    let data = this.props.data;
    const {
      posts: {nodes},
    } = data;
    // declearing valiable to store data of each section
    let hotnews = [];
    let profiles = [];
    let mynewbanner = [];
    let mynewbreaking = [];
    let samachar = [];
    let antarbarta = [];
    let bisheshreport = [];
    let corporate = [];
    let janswasta = [];
    let swastashishya = [];
    let tips = [];
    let baikalpic = [];
    let yawnswasta = [];
    let saundryaswasta = [];
    let test = [];
    // for fetching profiles
    let categories = data.categories.nodes;
    let tags = data.tags.nodes;
    // searching ny id and giving pushing in above variable according to [category id ]
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].id === "Y2F0ZWdvcnk6MjI=") {
        profiles.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6NQ==") {
        samachar.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6Nw==") {
        antarbarta.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6MjQ=") {
        corporate.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6MQ==") {
        janswasta.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6MjM=") {
        yawnswasta.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6Mg==") {
        bisheshreport.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6OA==") {
        baikalpic.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6Mjg=") {
        tips.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6Ng==") {
        swastashishya.push(categories[i]);
      } else if (categories[i].id === "Y2F0ZWdvcnk6Mjk=") {
        saundryaswasta.push(categories[i]);
      }
    }

    // fetching first 8 news and adding it in variable hotnews
    for (var i = 0; i < 8; i++) {
      hotnews.push(nodes[i]);
    }
    // fetching post list by tags and pushing in variables
    //  In queries i  have only fetched first 5 post of all tags
    tags.map(tag => {
      if (tag.name === "banner") {
        // fetching only two  banner
        for (var i = 0; i < 2; i++) {
          mynewbanner.push(tag.posts.nodes[i]);
        }
      } else if (tag.name === "breaking") {
        // fetching only 3 breaking
        for (var i = 0; i < 3; i++) {
          mynewbreaking.push(tag.posts.nodes[i]);
        }
      }
    });
    // adding those abouve variable in state
    this.setState({
      sectionhot: {
        hotnews,
        mynewbanner,
      },
    });
    this.setState({
      sectiontrending: {
        samachar,
      },
    });
    this.setState({
      sectionantarwarta: {
        antarbarta,
        swastashishya,
      },
    });
    this.setState({
      breakingnews: {
        mynewbreaking,
      },
    });
    this.setState({
      sectiontips: {
        tips,
        saundryaswasta,
      },
    });
    this.setState({
      sectionvideo: {
        baikalpic,
      },
    });
    this.setState({
      bisheshreport,
    });
    this.setState({
      corporate,
    });
    this.setState({
      yawnswasta,
    });
    this.setState({
      profiles,
    });
    this.setState({
      janswasta,
    });
  }

  render() {
    // checking if data are added in state or not if not then show nothing
    if (this.state.breakingnews.length === 0) {
      return "";
    }
    // distructuring the state
    let {
      breakingnews,
      sectionhot,
      sectiontrending,
      bisheshreport,
      profiles,
      janswasta,
      sectionantarwarta,
      sectiontips,
      sectionvideo,
      yawnswasta,
      corporate,
    } = this.state;
    return (
      <React.Fragment>
        <BreakingNews data={breakingnews} />
        {/* <LazyLoadComponent> */}
        {/* Applied lazy loading to rest of the component wrapped with <SUspense> as first the breaking news and remaining comes with lazy loading */}
        {/* <InView
            as='React.Fragment'
            onChange={() => console.log("Inview: changed")}> */}
        <Suspense fallback={<div>Loading ....</div>}>
          <SectionHot data={sectionhot} />
          <div className='rd-home'>
            <SectionTrending data={sectiontrending} />
            <SectionBishesh data={bisheshreport} />
            <SectionProfile data={profiles} />
            <JanSwastya data={janswasta} />
            <SectionAntarBarta data={sectionantarwarta} />
            <SectionTips data={sectiontips} />
            <SectionVideo data={sectionvideo} />
            <SectionYaun data={yawnswasta} />
            <SectionCorporate data={corporate} />
          </div>
        </Suspense>
        {/* </InView> */}
        {/* </LazyLoadComponent> */}
      </React.Fragment>
    );
  }
}
export default StatefulIndexPost;
// if we want data only if we scroll
// export default trackWindowScroll(StatefulIndexPost);
