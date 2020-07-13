import React from "react";
import Banner from "./Banner";
import HotNews from "./HotNews";
import SectionHotAdd from "./SectionHotAdd";

export default function SectionHot({data}) {
  return (
    <section className='banner-hot'>
      <div className='container'>
        <div className='row'>
          <Banner data={data.mynewbanner} />
          <HotNews data={data.hotnews} />
          <SectionHotAdd />
        </div>
      </div>
    </section>
  );
}
