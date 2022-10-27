
// Bri D'Urso -- 10-27-22 -- CS280 Term Project
// 
// This script is designed to exploit a property of CSS
// which apparently makes an element be stored in browser
// memory without regarding the memory limits, (I think).
// Basically, it has to  do with the 'position: fixed;'
// attribute in CSS, and the plan is to overflow the browser's
// buffer with a bunch of elements with fixed positions.

window.onload = () => {

    // payload to overflow the buffer with
    let payloadStyles = `position: fixed;`;
    let payload = `<img src="img/egg.jpeg" alt="eg" style="${payloadStyles}">`;

    // make way too many fixed elements 
    let fixedOverflow = () => {
        for (let i = 0; i < 1000; i++) {
            document.getElementById(`egg`).innerHTML += payload;
        }
    };

    // run the "fixedOverflow" function when the egg is clicked
    document.getElementById(`egg`).addEventListener(`click`, () => {
        fixedOverflow();
        console.log(`mission is a go... hopefully, lol`);
    });

};