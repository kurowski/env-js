$debug("Defining HTMLFormElement");
/* 
* HTMLFormElement - DOM Level 2
*/
var HTMLFormElement = function(ownerDocument){
    this.HTMLElement = HTMLElement;
    this.HTMLElement(ownerDocument);
};
HTMLFormElement.prototype = new HTMLElement;
__extend__(HTMLFormElement.prototype,{
    get acceptCharset(){ 
        return this.getAttribute('accept-charset');
        
    },
    set acceptCharset(acceptCharset){
        this.setAttribute('accept-charset', acceptCharset);
        
    },
    get action(){
        return this.getAttribute('action');
        
    },
    set action(action){
        this.setAttribute('action', action);
        
    },
    get elements() {
        return this.getElementsByTagName("*");
        
    },
    get enctype(){
        return this.getAttribute('enctype');
        
    },
    set enctype(enctype){
        this.setAttribute('enctype', enctype);
        
    },
    get length() {
        return this.elements.length;
        
    },
    get method(){
        return this.getAttribute('method');
        
    },
    set method(action){
        this.setAttribute('method', method);
        
    },
	get name() {
	    return this.getAttribute("name") || ""; 
	    
    },
	set name(val) { 
	    return this.setAttribute("name",val); 
	    
    },
	get target() { 
	    return this.getAttribute("target") || ""; 
	    
    },
	set target(val) { 
	    return this.setAttribute("target",val); 
	    
    },
	submit:function(){
	    __submit__(this);
	    
    },
	reset:function(){
	    __reset__(this);
	    
    }
});

$w.HTMLFormElement	= HTMLFormElement;