import React from "react";
import Trending from "./Trending";
import Samachar from "./Samachar";

export default function SectionTrending({data}) {
  return (
    <div className='container'>
      <div className='row'>
        <Trending />
        <Samachar data={data.samachar} />
      </div>
    </div>
  );
}
