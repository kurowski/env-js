$debug("Defining HTMLTextAreaElement");
/* 
* HTMLTextAreaElement - DOM Level 2
*/
var HTMLTextAreaElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLTextAreaElement.prototype = new HTMLElement;
__extend__(HTMLTextAreaElement.prototype, {
    //TODO
});

$w.HTMLTextAreaElement = HTMLTextAreaElement;