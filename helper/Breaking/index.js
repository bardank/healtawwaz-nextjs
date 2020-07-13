import React from "react";

export const Breakingnews = news => {
  let breakingposts = [];

  try {
    news.mynewbreaking.map(post => {
      // console.log(post.date);
      let postDate = new Date(post.date);
      postDate.setHours(postDate.getHours() + 12);
      // console.log(postDate);
      if (postDate > Date.now()) {
        breakingposts.push(post);
        //   return post;
      }
    });
    //   console.log(breakingposts);
  } catch (e) {
    console.log("");
  }
  return breakingposts;
};
