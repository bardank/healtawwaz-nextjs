import React, {Fragment, useEffect} from 'react'
import Navbar from '../components/Common/Header/NavBar';
import Footer from '../components/Common/Footer';
import {ApolloProvider} from "@apollo/react-hooks";
import ApolloClient, {InMemoryCache} from "apollo-boost";

import "react-lazy-load-image-component/src/effects/blur.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './styles/style.scss'
import 'react-multi-carousel/lib/styles.css';

import ScrollToTop from "../helper/ScrollToTop";


const client = new ApolloClient({
  uri: "https://ha.resham.info.np/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
    const [showScroll, setShowScroll] = React.useState(false);
    const checkScrollTop = () => {
        if (window.pageYOffset > 304) {
        setShowScroll(true);
        } else {
        setShowScroll(false);
        }
    };

    useEffect(() => {
        if(process.browser){
            window.addEventListener("scroll", checkScrollTop);
        }
    
    }, [process])
    
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };
    let scrollStick = {
        showScroll,
        scrollTop,
    };
    return(
        <Fragment>
            <ApolloProvider client={client}>
                <Navbar  showScroll={showScroll}/>
                <ScrollToTop>
                    <Component {...pageProps} />
                </ScrollToTop>
                <Footer data={scrollStick} />
            </ApolloProvider>
        </Fragment> 
    )
}
// MyApp.getInitialProps = async (ctx )  => {
//     console.log(ctx)
//     return {...ctx}
// }
export default MyApp