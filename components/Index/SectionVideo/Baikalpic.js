import React from "react";
import Link from "next/link";

export default function Baikalpic({data}) {
  let limit = 7;
  let imageType = "rd-l-thumb";

  return (
    <div className='col-md-4 layout-1'>
      <div className='rd-title'>
        <h2>
          <span> {data[0].name}</span>
        </h2>
      </div>
      <div className='rd-wrap'>
        <ul>
          {data[0].posts.nodes.map((post, i) => (
            <React.Fragment key={i}>
              {i < limit && (
                <li>
                  <Link href='/[category_slug]/[postId]' as={`/${data[0].slug}/${post.postId}`} passHref>
                    <a>{post.title}</a>
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className='rd-ads'>
        <span>-विज्ञापन-</span>
        <Link href='#' passHref>
          <a>
          {/* <img src='img/nnh.gif' className='img-fluid' alt='nnh' /> */}
          </a>
        </Link>
      </div>
    </div>
  );
}
