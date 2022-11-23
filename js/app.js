
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

window.onload = () => {

    let pdfFileName = `test.pdf`;

    // function to create link to download (and open) PDF
    let PDFDownloadLink = (/*blob*/) => {

        let link = document.createElement(`a`);
        link.href = pdfFileName;/*data*/
        window.open(link.download = pdfFileName);
        link.dispatchEvent(new MouseEvent(`click`));
        console.log(`downloaded PDF`);
    };

    // if this is uncommented, it auto downloads when page is loaded
    // PDFDownloadLink();

    // if the PDF text is clicked, execute the exploit
    document.getElementById(`danger-pdf`).addEventListener(`click`, () => {
        PDFDownloadLink();
    });
};
