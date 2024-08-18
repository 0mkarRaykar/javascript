document.getElementById("container").addEventListener(
    "click",
    function (e) {
      //   console.log("whole container is triggered");
    },
    false
  ); // default is false
  document.getElementById("img2").addEventListener(
    "click",
    function (e) {
      // alert("You are under my Genjutsu");
      //   console.log("You are under my Genjutsu");
      //   e.stopPropagation(); // to stop propagation
    },
    true
  ); // change value to false to see changes

  // +++++++   notes:- event propagates    ++++++++
  // false (or omitted) means it will be invoked during the bubbling phase.
  // true means the event listener will be invoked during the capturing phase.

  // bubbling means it goes from bottom to top
  // capturing means it starts from top and goes to bottom

  document.getElementById("google").addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
      // console.log("google click");
      e.preventDefault();
    },
    true
  );

  document
    .querySelector("#container")
    .addEventListener("click", function (e) {
      console.log(e.target.tagName); // if only seleting target then img'll delete not a div; selete parent node to delete div
      if (e.target.tagName === "IMG") {
        // remove this if statement and see  magic
        let removeIt = e.target.parentNode;
        removeIt.remove();
      }
    //   let removeIt = e.target.parentNode; // uncomment this when you comment if statement
    //   removeIt.remove(); // this too
    });