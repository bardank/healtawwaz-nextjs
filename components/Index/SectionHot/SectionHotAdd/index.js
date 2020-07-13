import React from "react";
import {
  AFTER_SAMACHAR,
  AFTER_SAMACHAR_SMALL_LEFT,
  AFTER_SAMACHAR_SMALL_RIGHT,
  AFTER_SPECIAL_FULL,
} from "../../../../queries/widgets/sectionhot/index";
import {useQuery} from "@apollo/react-hooks";
import RectangleWidgetAdd from "../../../Widget/RectangleWidgetAdd";
// "../../../Widget/RectangleWidgetAdd/index.js";
export default function SectionHotAdd() {
  return (
    <div className='container'>
      <div className='row'>
        <AddOne />
        <AddTwoSmallL />
        <AddTwoSmallR />
        <AddThree />
      </div>
    </div>
  );
}
function AddOne() {
  const {loading, error, data} = useQuery(AFTER_SAMACHAR);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return <RectangleWidgetAdd data={data.sidebar.text} myclass={"col-md-12"} />;
}
function AddTwoSmallL() {
  const {loading, error, data} = useQuery(AFTER_SAMACHAR_SMALL_LEFT);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return <RectangleWidgetAdd data={data.sidebar.text} myclass={"col-md-6"} />;
}
function AddTwoSmallR() {
  const {loading, error, data} = useQuery(AFTER_SAMACHAR_SMALL_RIGHT);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return <RectangleWidgetAdd data={data.sidebar.text} myclass={"col-md-6"} />;
}
function AddThree() {
  const {loading, error, data} = useQuery(AFTER_SPECIAL_FULL);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return <RectangleWidgetAdd data={data.sidebar.text} myclass={"col-md-12"} />;
}
