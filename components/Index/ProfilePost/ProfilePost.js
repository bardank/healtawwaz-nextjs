// import React from "react";
// import {Link} from "react-router-dom";

// export default function ProfilePost({profiles}) {
//   if (!profiles) {
//     return "";
//   }
//   let imageType = "rd-l-thumb";
//   return (
//     <div>
//       <h3>Profile Posts</h3>
//       {profiles.map(data => (
//         <span key={data.id}>
//           <h2>{}</h2>
//           {data.posts.nodes.map(post => (
//             <span key={post.uri}>
//               <h1>
//                 <Link to={`/news/${post.id}`}>{post.title}</Link>
//               </h1>
//               {post.featuredImage.mediaDetails.sizes.map(img => (
//                 <span key={img.name}>
//                   {img.name == imageType ? (
//                     <img src={`${img.sourceUrl}`} />
//                   ) : null}
//                 </span>
//               ))}
//               {/* <img src={`${post.mediaDetails.sizes[0].}`} alt=""/> */}
//             </span>
//           ))}
//           <hr />
//           <hr />
//         </span>
//       ))}
//       {/* <h2>{title}</h2> */}
//     </div>
//   );
// }
