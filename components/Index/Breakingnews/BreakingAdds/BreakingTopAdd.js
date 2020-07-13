import React from "react";
import {BEFORE_BREAKING} from "../../../../queries/widgets/breaking/index.js";
import {useQuery} from "@apollo/react-hooks";
import RectangleWidgetAdd from "../../../Widget/RectangleWidgetAdd/index.js";

export default function BreakingTopAdd() {
  // for  fetching widgets
  const {loading, error, data} = useQuery(BEFORE_BREAKING);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className='container'>
      <div className='row'>
        <RectangleWidgetAdd data={data.sidebar.text} myclass={"col-md-12"} />
      </div>
    </div>
  );
}
