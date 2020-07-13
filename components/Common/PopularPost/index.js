import React from "react";
import {POPULAR_POSTS} from "../../../queries/posts/PopularPost/index.js";
import {useQuery} from "@apollo/react-hooks";
import Link from "next/link";
import {ToNepaliDigit} from "../../../helper/ToNepaliDigit";
export default function PopularPost({myclass}) {
  const {loading, error, data} = useQuery(POPULAR_POSTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  //   console.log(data);
  return (
    <div className={myclass}>
      <div className='rd-title text-center'>
        <h2>
          <span>धेरै पढिएका</span>
        </h2>
      </div>
      <div className='rd-wrap'>
        <ul>
          {data.getPopularPost.map((post, i) => (
            <li className='d-flex align-items-center' key={post.id}>
              <span>{ToNepaliDigit(i + 1)}</span>
              <Link href='[name]/[id]' as={`/${post.slug}/${post.id}`} passHref>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
