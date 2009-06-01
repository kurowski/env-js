$debug("Defining HTMLOptionElement");
/* 
* HTMLOptionElement - DOM Level 2
*/
var HTMLOptionElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLOptionElement.prototype = new HTMLElement;
__extend__(HTMLOptionElement.prototype, {
    get form(){
        var parent = this.parent;
        while(parent.nodeName.toLowerCase() != 'form'){
            parent = parent.parent;
        }
        return parent;
    },
    get defaultSelected(){
        return this.getAttribute('defaultSelected');
    },
    set defaultSelected(value){
        this.setAttribute('defaultSelected',value);
    },
    get text(){
         return ((this.nodeValue === null) ||  (this.nodeValue ===undefined)) ? 
             this.innerHTML : 
             this.nodeValue;
    },
    get index(){
        var options = this.parent.childNodes;
        for(var i; i<options.length;i++){
            if(this == options[i])
                return i;
        }
        return -1;
    },
    get disabled(){
        return this.getAttribute('disabled');
    },
    set disabled(value){
        this.setAttribute('disabled',value);
    },
    get label(){
        return this.getAttribute('label');
    },
    set label(value){
        this.setAttribute('label',value);
    },
    get selected(){
        return (this.getAttribute('selected')=='selected');
    },
    set selected(value){
        this.setAttribute('selected', (value ? 'selected' :''));
    },
    get value(){
        return ((this.getAttribute('value') === undefined) || (this.getAttribute('value') === null)) ?
            this.text : 
            this.getAttribute('value');
    },
    set value(value){
        this.setAttribute('value',value);
    }
});

$w.HTMLOptionElement = HTMLOptionElement;
