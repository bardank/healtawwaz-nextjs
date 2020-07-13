import React from "react";

export default function Footer({data}) {
  return (
    <React.Fragment>
      {data.showScroll ? (
        <a className='scrollTop' onClick={data.scrollTop}>
          <i className='fas fa-arrow-circle-up'></i>
        </a>
      ) : (
        ""
      )}

      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <h4>हाम्राे बारेमा</h4>
              <span className='animate-border border-white' />
              <address className='rd-address'>
                <p>
                  <strong>
                    हेल्थ नेपाल मिडिया प्रा.लि. द्वारा सञ्चालित हेल्थ आवाज डटकम
                  </strong>
                </p>
                <p>
                  <a href='mailto:healthaawaj@gmail.com'>
                    healthaawaj@gmail.com
                  </a>
                </p>
                <p>अम्बिका मार्ग, मध्य वानेश्वर, काठमाडौं</p>
                <p>
                  <a href='tel:+977014488980'>+९७७ ०१ ४४८८९८०</a>
                </p>
                <p>सूचना विभाग दर्ता नं. : १३९२/०७५-०७६</p>
              </address>
              <ul className='rd-social'>
                <li>
                  <a
                    href='https://www.facebook.com/HealthAawajOfficial/'
                    target='_blank'>
                    <i className='fab fa-facebook-f' />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/healthaawaj' target='_blank'>
                    <i className='fab fa-twitter' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/channel/UC8AqZf6rtVc3d82dYsXFAkA'
                    target='_blank'>
                    <i className='fab fa-youtube' />
                  </a>
                </li>
              </ul>
              <br />
              <div style={{float: "left", marginRight: 10}}>
                <iframe
                  src='https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fhealthaawajofficial&width=51&layout=button&action=like&size=small&show_faces=false&share=false&height=65&appId=2358789964361367'
                  width={51}
                  height={65}
                  style={{border: "none", overflow: "hidden"}}
                  scrolling='no'
                  frameBorder={0}
                  allowtransparency='true'
                  allow='encrypted-media'
                />
              </div>
              <a
                href='https://twitter.com/healthaawaj?ref_src=twsrc%5Etfw'
                className='twitter-follow-button'
                data-show-count='false'>
                Follow @healthaawaj
              </a>
            </div>
            <div className='col-md-4'>
              <h4>क्याटेगोरी</h4>
              <span className='animate-border border-white' />
              <ul className='category row'>
                <li className='col-md-6'>
                  <a href='#'>अन्तर्वार्ता / विचार</a>
                </li>
                <li className='col-md-6'>
                  <a href='#'>अन्तर्वार्ता / विचार</a>
                </li>
                <li className='col-md-6'>
                  <a href='#'>अन्तर्वार्ता / विचार</a>
                </li>
                <li className='col-md-6'>
                  <a href='#'>अन्तर्वार्ता / विचार</a>
                </li>
              </ul>
            </div>
            <div className='col-md-5'>
              <h4>हेल्थ आवाज टिम</h4>
              <span className='animate-border border-white' />
              <div className='row team'>
                <div className='col-md-4'>
                  <p>
                    <strong>बजार संयोजक</strong> विनोद कोइराला
                    <br /> ९८५१०४१७३९
                  </p>
                  <p>
                    <strong>लेखा/प्रशासन</strong> विज्ञात चापागाई
                  </p>
                </div>
                <div className='col-md-4'>
                  <p>
                    <strong>बरिष्ठ सम्वाददाता</strong> भिषा काफ्ले
                  </p>
                  <p>
                    <strong>सम्वाददाता</strong> सिर्जना मगर
                    <br /> पदमराज भट्ट
                    <br /> मानदत्त रावल
                  </p>
                </div>
                <div className='col-md-4'>
                  <p>
                    <strong>डेस्क संयोजक</strong> मनिषा थापा
                  </p>
                  <p>
                    <strong>ग्राफिक्स एण्ड आई.टि</strong> रेशम खड्का
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row f-bottom'>
            <div className='col-md-12'>
              <hr />
            </div>
            <div className='col-md-6'>
              <p>
                © हेल्थ नेपाल मिडिया प्रा.लि. द्वारा सञ्चालित हेल्थ आवाज डटकम
              </p>
            </div>
            <div className='col-md-6 text-right'>
              <p>
                Design &amp; Developed with <i className='fas fa-heart' /> at{" "}
                <a href='#' target='_blank'>
                  Techie IT
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div id='app'></div>
    </React.Fragment>
  );
}
//Back to Top
// var btn = $('#back-top');

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, '300');
// });
