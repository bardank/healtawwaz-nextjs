import React from "react";
import Video from "./Video";
import Baikalpic from "./Baikalpic";

export default function SectionVideo({data}) {
  return (
    <div className='container'>
      <div className='row'>
        {/* <Video /> */}
        <Baikalpic data={data.baikalpic} />
      </div>
    </div>
  );
}
