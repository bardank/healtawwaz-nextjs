import React from "react";
import Profile from "./Profile";
import MostReads from "./MostReads";
import PopularPost from "../../Common/PopularPost";

export default function SectionProfile({data}) {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <Profile data={data} />
          {/* <MostReads /> */}
          <PopularPost myclass={"col-md-5 rd-popular"} />
        </div>
      </div>
    </React.Fragment>
  );
}
