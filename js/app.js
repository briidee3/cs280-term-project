
// Bri D'Urso - 11/22/22 CS280 Term project
//
// This file is designed to carry out a theoretical
// ACE exploit using JS and PDF files
//

window.onload = () => {

    // function to create link to download and PDF
    let PDFDownloadLink = () => {
        var link = document.createElement(`a`);
        link.href = URL;
        link.download = `./test.pdf`;
        link.dispatchEvent(new MouseEvent(`click`));
    };

    // if the PDF text is clicked, execute the exploit
    document.getElementById(`danger-pdf`).addEventListener(`click`, () => {
        PDFDownloadLink();
        console.log(`mission is a go... hopefully, lol`);
    });

};
