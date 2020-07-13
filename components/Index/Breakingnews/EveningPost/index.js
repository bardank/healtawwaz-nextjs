import React from "react";
import {EVENING_POSTS} from "../../../../queries/posts/EveningPost/index";
import {useQuery} from "@apollo/react-hooks";
import Link from "next/link";
export default function EveningPosts() {
  const [isEvening, setIsEvening] = React.useState(false);
  React.useEffect(() => {
    var today = new Date();
    var time = today.getHours();
    if (time >= 18 && time <= 22) {
      setIsEvening(true);
    }
  });
  return <React.Fragment>{isEvening && <FetchingCode />}</React.Fragment>;
}

function FetchingCode() {
  const {loading, error, data} = useQuery(EVENING_POSTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <section className='breaking'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12'>
            <div className='breaking-wrap'>
              {data.getPopularPost.map((post, i) => (
                <React.Fragment key={1}>
                  {i < 3 && (
                    <h1 key={post.id}>
                      <Link href='/[category_slug]/[postId]' as={`${post.slug}/${post.id}`}>
                        <a>
                        {post.title}
                        </a>
                      </Link>
                    </h1>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
