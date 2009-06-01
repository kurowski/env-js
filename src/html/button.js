$debug("Defining HTMLButtonElement");
/* 
* HTMLButtonElement - DOM Level 2
*/
var HTMLButtonElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLButtonElement.prototype = new HTMLElement;
__extend__(HTMLButtonElement.prototype, {
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
    get tabIndex(){
        return Number(this.getAttribute('tabindex'));
    },
    set tabIndex(value){
        this.setAttribute('tabindex',Number(value));
    },
    get type(){
        return this.getAttribute('type');
    },
    set type(value){
        this.setAttribute('type',value);
    },
    get value(){
        return this.getAttribute('value');
    },
    set value(value){
        this.setAttribute('value',value);
    }
});

$w.HTMLButtonElement = HTMLButtonElement;				