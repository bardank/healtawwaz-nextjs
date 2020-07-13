import React from "react";

const HooksHost = ({children}) => children();

export default function MyTest({data}) {
  //   if (data.length == 0) {
  //     console.length("Empty");
  //   }
  const [x, xx] = React.useState("");
  //   console.log(data.length);

  return (
    <div>
      <h1>jjj</h1>
    </div>
  );
}
