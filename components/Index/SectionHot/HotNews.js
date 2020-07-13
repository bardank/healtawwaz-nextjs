import React from "react";
import Link from "next/link";
export default function HotNews({data}) {
  // console.log(data[0].categories.nodes[0].slug);
  return (
    <div className='col-md-5'>
      <div className='hot'>
        <label>
          <i className='fab fa-hotjar'></i> हट न्युज
        </label>
        <ul>
          {data.map((post, i) => (
            <li key={post.id}>
              <Link  href='/[category_slug]/[postId]' as={`/${post.categories.nodes[0].slug}/${post.postId}`} passHref>
                <a>
                {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
