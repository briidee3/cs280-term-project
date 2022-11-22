
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

window.onload = () => {

    let pdfFileName = `test.pdf`;
    let pdfFileURL = `file:///C:\\Users\\briid\\Downloads\\${pdfFileName}`;

    // if the PDF text is clicked, execute the exploit
    document.getElementById(`danger-pdf`).addEventListener(`click`, () => {
        PDFDownloadLink();
        openPDF(pdfFileName);
    });



    // function to create link to download and open PDF
    let PDFDownloadLink = () => {
        let link = document.createElement(`a`);
        link.href = pdfFileName;
        link.download = pdfFileName;
        link.dispatchEvent(new MouseEvent(`click`));
        console.log(`downloaded PDF`);
    };


    // function to open PDF in browser once downloaded
    let openPDF = (fileURL) => {
        window.open(fileURL);
        console.log(`opened PDF`);
    };

};
