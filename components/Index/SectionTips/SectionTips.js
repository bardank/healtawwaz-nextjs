import React from "react";
import Tips from "./Tips";
import SaundriyaSwasta from "./SaundriyaSwasta";

export default function SectionTips({data}) {
  return (
    <div className='alt-layout layout-4 row d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <Tips data={data.tips} />
          <SaundriyaSwasta data={data.saundryaswasta} />
        </div>
      </div>
    </div>
  );
  {
    /* Soundarya Swastya */
  }
}
