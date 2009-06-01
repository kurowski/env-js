$debug("Defining HTMLTitleElement");
/* 
* HTMLTitleElement - DOM Level 2
*/
var HTMLTitleElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLTitleElement.prototype = new HTMLElement;
__extend__(HTMLTitleElement.prototype, {
    //TODO
});

$w.HTMLTitleElement = HTMLTitleElement;