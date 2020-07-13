import React from "react";

import DOMPurify from "dompurify";

export default function RectangleWidgetAdd({data, myclass}) {
  // for  fetching widgets
  return (
    <div className={myclass}>
      <div
        className='rd-ads'
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data),
        }}></div>
    </div>
  );
}
