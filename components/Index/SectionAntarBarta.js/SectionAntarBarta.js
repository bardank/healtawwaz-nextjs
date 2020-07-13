import React from "react";
import Antarbarta from "./Antarbarta";
import AddAntarbarta from "./AddAntarbarta";
import SwastaShikshya from "./SwastaShikshya";

export default function SectionAntarBarta({data}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 layout-3'>
          <Antarbarta data={data.antarbarta} />
          <SwastaShikshya data={data.swastashishya} />
        </div>
        <AddAntarbarta />
      </div>
    </div>
  );
}
