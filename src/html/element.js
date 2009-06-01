$debug("Defining HTMLElement");
/*
* HTMLElement - DOM Level 2
*/
var HTMLElement = function(ownerDocument) {
    this.DOMElement = DOMElement;
    this.DOMElement(ownerDocument);
    
    this.$css2props = null;
};
HTMLElement.prototype = new DOMElement;
__extend__(HTMLElement.prototype, {
		get className() { 
		    return this.getAttribute("class")||""; 
		    
	    },
		set className(val) { 
		    return this.setAttribute("class",trim(val)); 
		    
	    },
		get dir() { 
		    return this.getAttribute("dir")||"ltr"; 
		    
	    },
		set dir(val) { 
		    return this.setAttribute("dir",val); 
		    
	    },
		get id(){  
		    return this.getAttribute('id')||''; 
		    
	    },
		set id(id){  
		    this.setAttribute('id', id); 
            
	    },
		get innerHTML(){  
		    return this.childNodes.xml; 
		    
	    },
		set innerHTML(html){
		    //$debug("htmlElement.innerHTML("+html+")");
		    //Should be replaced with HTMLPARSER usage
		    var doc = new DOMParser().
			  parseFromString('<div>'+html+'</div>');
            var parent = doc.documentElement;
			while(this.firstChild != null){
			    this.removeChild( this.firstChild );
			}
			var importedNode;
			while(parent.firstChild != null){
	            importedNode = this.importNode( 
	                parent.removeChild( parent.firstChild ), true);
			    this.appendChild( importedNode );   
		    }
		    //Mark for garbage collection
		    doc = null;
		},
		get lang() { 
		    return this.getAttribute("lang")||""; 
		    
	    },
		set lang(val) { 
		    return this.setAttribute("lang",val); 
		    
	    },
		get offsetHeight(){
		    return Number(this.style["height"].replace("px",""));
		},
		get offsetWidth(){
		    return Number(this.style["width"].replace("px",""));
		},
		offsetLeft: 0,
		offsetRight: 0,
		get offsetParent(){
		    /* TODO */
		    return;
	    },
		set offsetParent(element){
		    /* TODO */
		    return;
	    },
		scrollHeight: 0,
		scrollWidth: 0,
		scrollLeft: 0, 
		scrollRight: 0,
		get style(){
		    if(this.$css2props === null){
		        this.$css2props = new CSS2Properties({
    		        cssText:this.getAttribute("style")
    	        });
	        }
	        return this.$css2props
		},
		get title() { 
		    return this.getAttribute("title")||""; 
		    
	    },
		set title(val) { 
		    return this.setAttribute("title",val); 
		    
	    },
		//Not in the specs but I'll leave it here for now.
		get outerHTML(){ 
		    return this.xml; 
		    
	    },
	    scrollIntoView: function(){
	        /*TODO*/
	        return;
	    
        },
		onclick: function(event){
		    __eval__(this.getAttribute('onclick')||'')
	    },
		ondblclick: function(event){
            __eval__(this.getAttribute('ondblclick')||'');
	    },
		onkeydown: function(event){
            __eval__(this.getAttribute('onkeydown')||'');
	    },
		onkeypress: function(event){
            __eval__(this.getAttribute('onkeypress')||'');
	    },
		onkeyup: function(event){
            __eval__(this.getAttribute('onkeyup')||'');
	    },
		onmousedown: function(event){
            __eval__(this.getAttribute('onmousedown')||'');
	    },
		onmousemove: function(event){
            __eval__(this.getAttribute('onmousemove')||'');
	    },
		onmouseout: function(event){
            __eval__(this.getAttribute('onmouseout')||'');
	    },
		onmouseover: function(event){
            __eval__(this.getAttribute('onmouseover')||'');
	    },
		onmouseup: function(event){
            __eval__(this.getAttribute('onmouseup')||'');
	    }
});

var __eval__ = function(script){
    try{
        eval(script);
    }catch(e){
        $error(e);
    }
};

var __registerEventAttrs__ = function(elm){
    if(elm.hasAttribute('onclick')){ 
        elm.addEventListener('click', elm.onclick ); 
    }
    if(elm.hasAttribute('ondblclick')){ 
        elm.addEventListener('dblclick', elm.onclick ); 
    }
    if(elm.hasAttribute('onkeydown')){ 
        elm.addEventListener('keydown', elm.onclick ); 
    }
    if(elm.hasAttribute('onkeypress')){ 
        elm.addEventListener('keypress', elm.onclick ); 
    }
    if(elm.hasAttribute('onkeyup')){ 
        elm.addEventListener('keyup', elm.onclick ); 
    }
    if(elm.hasAttribute('onmousedown')){ 
        elm.addEventListener('mousedown', elm.onclick ); 
    }
    if(elm.hasAttribute('onmousemove')){ 
        elm.addEventListener('mousemove', elm.onclick ); 
    }
    if(elm.hasAttribute('onmouseout')){ 
        elm.addEventListener('mouseout', elm.onclick ); 
    }
    if(elm.hasAttribute('onmouseover')){ 
        elm.addEventListener('mouseover', elm.onclick ); 
    }
    if(elm.hasAttribute('onmouseup')){ 
        elm.addEventListener('mouseup', elm.onclick ); 
    }
    return elm;
};
	
var __click__ = function(element){
	var event = new Event({
	  target:element,
	  currentTarget:element
	});
	event.initEvent("click");
	element.dispatchEvent(event);
};
var __submit__ = function(element){
	var event = new Event({
	  target:element,
	  currentTarget:element
	});
	event.initEvent("submit");
	element.dispatchEvent(event);
};
var __focus__ = function(element){
	var event = new Event({
	  target:element,
	  currentTarget:element
	});
	event.initEvent("focus");
	element.dispatchEvent(event);
};
var __blur__ = function(element){
	var event = new Event({
	  target:element,
	  currentTarget:element
	});
	event.initEvent("blur");
	element.dispatchEvent(event);
};

$w.HTMLElement = HTMLElement;
