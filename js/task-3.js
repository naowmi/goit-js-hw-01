"use strict"
function getElementWidth(content, padding, border) {
    let contentNumber = parseFloat(content);
    let paddingNumber = parseFloat(padding);
    let borderNumber = parseFloat(border);
    const totalWidth = contentNumber + paddingNumber * 2 + borderNumber * 2;
    return totalWidth
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 