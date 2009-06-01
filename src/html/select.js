$debug("Defining HTMLSelectElement");
/* 
* HTMLSelectElement - DOM Level 2
*/
var HTMLSelectElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLSelectElement.prototype = new HTMLElement;
__extend__(HTMLSelectElement.prototype, {
    get type(){
        return this.getAttribute('type');
    },
    get selectedIndex(){
        var options = this.options;
        for(var i=0;i<options.length;i++){
            if(options[i].selected){
                return i;
            }
        };
        return -1;
    },
    set selectedIndex(value){
        if (this.selectedIndex != -1) {
            this.options[this.selectedIndex].selected = '';
        }
        var option = this.options[Number(value)];
        if (option) {
            option.selected = 'selected';
        }
    },
    get value(){
        return this.getAttribute('value')||'';
    },
    set value(value) {
        var options = this.options,
            i, index;
        for (i=0; i<options.length; i++) {
            if (options[i].value == value) {
                index = i;
                break;
            }
        }
        if (index !== undefined) {
            this.setAttribute('value', value);
            this.selectedIndex = index;
        }
    },
    get length(){
        return this.options.length;
    },
    get form(){
        var parent = this.parent;
        while(parent.nodeName.toLowerCase() != 'form'){
            parent = parent.parent;
        }
        return parent;
    },
    get options(){
        return this.getElementsByTagName('option');
    },
    get disabled(){
        return (this.getAttribute('disabled')=='disabled');
    },
    set disabled(value){
        this.setAttribute('disabled', (value ? 'disabled' :''));
    },
    get multiple(){
        return this.getAttribute('multiple');
    },
    set multiple(value){
        this.setAttribute('multiple',value);
    },
    get name(){
        return this.getAttribute('name')||'';
    },
    set name(value){
        this.setAttribute('name',value);
    },
    get size(){
        return Number(this.getAttribute('size'));
    },
    set size(value){
        this.setAttribute('size',value);
    },
    get tabIndex(){
        return Number(this.getAttribute('tabindex'));
    },
    set tabIndex(value){
        this.setAttribute('tabindex',value);
    },
    add : function(){
        __add__(this);
    },
    remove : function(){
        __remove__(this);
    },
    blur: function(){
        __blur__(this);
    },
    focus: function(){
        __focus__(this);
    }
});

$w.HTMLSelectElement = HTMLSelectElement;