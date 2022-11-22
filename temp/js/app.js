"use strict";

// Bri D'Urso - 11/22/22 CS280 Term project
//
// This file is designed to carry out a theoretical
// ACE exploit using JS and PDF files
//
// This is a proof of concept, and is not meant to be
// necessarily a very thorough example; this is mostly
// just for the purposes of showing off the capabilities
// of certain methods of potential exploitation
//
// This was produced and tested using Chrome browser;
// other functionality may be necessary for compatability with others
//

window.onload = function () {
  var pdfFileName = "test.pdf";

  // if the PDF text is clicked, execute the exploit
  document.getElementById("danger-pdf").addEventListener("click", function () {
    //create blob from pdf to auto open it
    fetch(pdfFileName).then(function (r) {
      return r.blob();
    }).then(PDFDownloadLink);
  });

  // function to create link to download and open PDF
  var PDFDownloadLink = function PDFDownloadLink(blob) {
    // set up blob stuff to get proper url once file is downloaded
    var newBlob = new Blob([blob], {
      type: "application/pdf"
    });
    var data = window.URL.createObjectURL(newBlob);
    var link = document.createElement("a");
    link.href = data;
    //link.download = pdfFileName;
    link.dispatchEvent(new MouseEvent("click"));
    console.log("downloaded PDF");
    window.open(data);
    setTimeout(function () {
      window.URL.revokeObjectURL(data);
    }, 100);
  };
};