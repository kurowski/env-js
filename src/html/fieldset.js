$debug("Defining HTMLFieldSetElement");
/* 
* HTMLFieldSetElement - DOM Level 2
*/
var HTMLFieldSetElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLFieldSetElement.prototype = new HTMLElement;
__extend__(HTMLFieldSetElement.prototype, {
    get form(){
        var parent = this.parent;
        while(parent.nodeName.toLowerCase() != 'form'){
            parent = parent.parent;
        }
        return parent;
    }
});

$w.HTMLFieldSetElement = HTMLFieldSetElement;	