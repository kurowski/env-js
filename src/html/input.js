$debug("Defining HTMLInputElement");
/* 
* HTMLInputElement - DOM Level 2
*/
var HTMLInputElement = function(ownerDocument) {
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLInputElement.prototype = new HTMLElement;
__extend__(HTMLInputElement.prototype, {
    get defaultValue(){
        return this.getAttribute('defaultValue');
    },
    set defaultValue(value){
        this.setAttribute('defaultValue', value);
    },
    get defaultChecked(){
        return this.getAttribute('defaultChecked');
    },
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
    get access(){
        return this.getAttribute('access');
    },
    set access(value){
        this.setAttribute('access', value);
    },
    get alt(){
        return this.getAttribute('alt');
    },
    set alt(value){
        this.setAttribute('alt', value);
    },
    get checked(){
        return (this.getAttribute('checked')=='checked');
    },
    set checked(value){
        this.setAttribute('checked', (value ? 'checked' :''));
    },
    get disabled(){
        return (this.getAttribute('disabled')=='disabled');
    },
    set disabled(value){
        this.setAttribute('disabled', (value ? 'disabled' :''));
    },
    get maxLength(){
        return Number(this.getAttribute('maxlength')||'0');
    },
    set maxLength(value){
        this.setAttribute('maxlength', value);
    },
    get name(){
        return this.getAttribute('name')||'';
    },
    set name(value){
        this.setAttribute('name', value);
    },
    get readOnly(){
        return (this.getAttribute('readonly')=='readonly');
    },
    set readOnly(value){
        this.setAttribute('readonly', (value ? 'readonly' :''));
    },
    get size(){
        return this.getAttribute('size');
    },
    set size(value){
        this.setAttribute('size', value);
    },
    get src(){
        return this.getAttribute('src');
    },
    set src(value){
        this.setAttribute('src', value);
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
    get useMap(){
        return this.getAttribute('map');
    },
    get value(){
        return this.getAttribute('value');
    },
    set value(value){
        this.setAttribute('value',value);
    },
	blur:function(){
	    __blur__(this);
	    
    },
	focus:function(){
	    __focus__(this);
	    
    },
	select:function(){
	    __select__(this);
	    
    },
	click:function(){
	    __click__(this);
	    
    }
});

$w.HTMLInputElement = HTMLInputElement;