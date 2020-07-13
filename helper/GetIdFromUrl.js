export const GetIdFromUrl = url => {
  let myid = "";

  try {
    let myarray1 = url.split("be/");
    let myarray2 = url.split("?v=");
    if (myarray1.length === 2) {
      myid = myarray1[1];
      console.log("Found");
    } else if (myarray2.length === 2) {
      myid = myarray2[1];
    } else {
      myid = "notfound";
    }
    return myid;
  } catch (err) {
    return (myid = "notfound");
  }
};
