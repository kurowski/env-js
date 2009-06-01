$debug("Defining HTMLLegendElement");
/* 
* HTMLLegendElement - DOM Level 2
*/
var HTMLLegendElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLLegendElement.prototype = new HTMLElement;
__extend__(HTMLLegendElement.prototype, {
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
    }
});

$w.HTMLLegendElement = HTMLLegendElement;	