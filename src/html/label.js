$debug("Defining HTMLLabelElement");
/* 
* HTMLLabelElement - DOM Level 2
*/
var HTMLLabelElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLLabelElement.prototype = new HTMLElement;
__extend__(HTMLLabelElement.prototype, {
    get form(){
        var parent = this.parent;
        while(parent.nodeName.toLowerCase() != 'form'){
            parent = parent.parent;
        }
        return parent;
    },
    get accessKey(){
        return this.getAttribute('accesskey');
    },
    set accessKey(value){
        this.setAttribute('accesskey',value);
    },
    get htmlFor(){
        return this.getAttribute('for');
    },
    set htmlFor(value){
        this.setAttribute('for',value);
    }
});

$w.HTMLLabelElement = HTMLLabelElement;	