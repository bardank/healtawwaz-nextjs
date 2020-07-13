import {gql} from "apollo-boost";

// fetching posts and catogories
export const POSTS = gql`
         {
           categories(first: 15) {
             nodes {
               name
               id
               slug
               posts {
                 nodes {
                   title
                   uri
                   id
                   content
                   PostDetail {
                     authorName
                     authorInfo
                     videoLink
                     authorPhoto {
                       mediaDetails {
                         sizes {
                           sourceUrl
                           name
                         }
                       }
                       sourceUrl
                     }
                     subHeading
                   }
                   author {
                     name

                     slug
                     description
                     avatar {
                       url
                     }
                   }
                   postId
                   categories {
                     nodes {
                       slug
                     }
                   }
                   featuredImage {
                     mediaDetails {
                       sizes {
                         name
                         sourceUrl
                       }
                     }
                   }
                 }
               }
             }
           }
           posts(first: 11) {
             nodes {
               id
               title
               postId
               categories {
                 nodes {
                   slug
                 }
               }
             }
           }

           tags {
             nodes {
               name
               posts(first: 5) {
                 nodes {
                   id
                   title
                   date
                   postId
                   author {
                     name
                     slug
                     description
                     avatar {
                       url
                     }
                   }
                   categories {
                     nodes {
                       slug
                     }
                   }
                   PostDetail {
                     authorName
                     subHeading
                     customCategory
                     authorInfo
                     videoLink
                     authorPhoto {
                       mediaDetails {
                         sizes {
                           sourceUrl
                           name
                         }
                       }
                       sourceUrl
                     }
                   }
                   featuredImage {
                     sourceUrl
                     mediaDetails {
                       sizes {
                         name
                         sourceUrl
                       }
                     }
                   }
                   tags {
                     nodes {
                       name
                     }
                   }
                 }
               }
             }
           }
         }
       `;
