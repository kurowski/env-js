$debug("Defining HTMLDocument");
/*
* HTMLDocument - DOM Level 2
*/
/**
 * @class  HTMLDocument - The Document interface represents the entire HTML or XML document.
 *   Conceptually, it is the root of the document tree, and provides the primary access to the document's data.
 *
 * @extends DOMDocument
 */
var HTMLDocument = function(implementation) {
  this.DOMDocument = DOMDocument;
  this.DOMDocument(implementation);

  this.title = "";
  this._refferer = "";
  this._domain;
  this._open = false;
};
HTMLDocument.prototype = new DOMDocument;
__extend__(HTMLDocument.prototype, {
    createElement: function(tagName){
          // throw Exception if the tagName string contains an illegal character
          if (__ownerDocument__(this).implementation.errorChecking && 
                (!__isValidName__(tagName))) {
              throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
          }
          tagName = tagName.toUpperCase();
          // create DOMElement specifying 'this' as ownerDocument
          //This is an html document so we need to use explicit interfaces per the 
          if(     tagName.match(/^A$/))                 {node = new HTMLAnchorElement(this);}
          else if(tagName.match(/AREA/))                {node = new HTMLAreaElement(this);}
          else if(tagName.match(/BASE/))                {node = new HTMLBaseElement(this);}
          else if(tagName.match(/BLOCKQUOTE|Q/))        {node = new HTMLQuoteElement(this);}
          else if(tagName.match(/BODY/))                {node = new HTMLElement(this);}
          else if(tagName.match(/BR/))                  {node = new HTMLElement(this);}
          else if(tagName.match(/BUTTON/))              {node = new HTMLButtonElement(this);}
          else if(tagName.match(/CAPTION/))             {node = new HTMLElement(this);}
          else if(tagName.match(/COL|COLGROUP/))        {node = new HTMLTableColElement(this);}
          else if(tagName.match(/DEL|INS/))             {node = new HTMLModElement(this);}
          else if(tagName.match(/DIV/))                 {node = new HTMLElement(this);}
          else if(tagName.match(/DL/))                  {node = new HTMLElement(this);}
          else if(tagName.match(/FIELDSET/))            {node = new HTMLFieldSetElement(this);}
          else if(tagName.match(/FORM/))                {node = new HTMLFormElement(this);}
          else if(tagName.match(/^FRAME$/))             {node = new HTMLFrameElement(this);}
          else if(tagName.match(/FRAMESET/))            {node = new HTMLFrameSetElement(this);}
          else if(tagName.match(/H1|H2|H3|H4|H5|H6/))   {node = new HTMLElement(this);}
          else if(tagName.match(/HEAD/))                {node = new HTMLHeadElement(this);}
          else if(tagName.match(/HR/))                  {node = new HTMLElement(this);}
          else if(tagName.match(/HTML/))                {node = new HTMLElement(this);}
          else if(tagName.match(/IFRAME/))              {node = new HTMLIFrameElement(this);}
          else if(tagName.match(/IMG/))                 {node = new HTMLImageElement(this);}
          else if(tagName.match(/INPUT/))               {node = new HTMLInputElement(this);}
          else if(tagName.match(/LABEL/))               {node = new HTMLLabelElement(this);}
          else if(tagName.match(/LEGEND/))              {node = new HTMLLegendElement(this);}
          else if(tagName.match(/^LI$/))                {node = new HTMLElement(this);}
          else if(tagName.match(/LINK/))                {node = new HTMLLinkElement(this);}
          else if(tagName.match(/MAP/))                 {node = new HTMLMapElement(this);}
          else if(tagName.match(/META/))                {node = new HTMLMetaElement(this);}
          else if(tagName.match(/OBJECT/))              {node = new HTMLObjectElement(this);}
          else if(tagName.match(/OL/))                  {node = new HTMLElement(this);}
          else if(tagName.match(/OPTGROUP/))            {node = new HTMLOptGroupElement(this);}
          else if(tagName.match(/OPTION/))              {node = new HTMLOptionElement(this);;}
          else if(tagName.match(/^P$/))                 {node = new HTMLElement(this);}
          else if(tagName.match(/PARAM/))               {node = new HTMLParamElement(this);}
          else if(tagName.match(/PRE/))                 {node = new HTMLElement(this);}
          else if(tagName.match(/SCRIPT/))              {node = new HTMLScriptElement(this);}
          else if(tagName.match(/SELECT/))              {node = new HTMLSelectElement(this);}
          else if(tagName.match(/STYLE/))               {node = new HTMLStyleElement(this);}
          else if(tagName.match(/TABLE/))               {node = new HTMLTableElement(this);}
          else if(tagName.match(/TBODY|TFOOT|THEAD/))   {node = new HTMLSectionElement(this);}
          else if(tagName.match(/TD|TH/))               {node = new HTMLTableCellElement(this);}
          else if(tagName.match(/TEXTAREA/))            {node = new HTMLElement(this);}
          else if(tagName.match(/TITLE/))               {node = new HTMLElement(this);}
          else if(tagName.match(/TR/))                  {node = new HTMLTableRowElement(this);}
          else if(tagName.match(/UL/))                  {node = new HTMLElement(this);}
          else{
            node = new HTMLElement(this);
          }
        
          // assign values to properties (and aliases)
          node.tagName  = tagName;
          return node;
    },
    get anchors(){
        return new HTMLCollection(this.getElementsByTagName('a'), 'Anchor');
        
    },
    get applets(){
        return new HTMLCollection(this.getElementsByTagName('applet'), 'Applet');
        
    },
    get body(){ 
        var nodelist = this.getElementsByTagName('body');
        return nodelist.item(0);
        
    },
    set body(html){
        return this.replaceNode(this.body,html);
        
    },
    //set/get cookie see cookie.js
    get domain(){
        return this._domain||window.location.domain;
        
    },
    set domain(){
        /* TODO - requires a bit of thought to enforce domain restrictions */ 
        return; 
        
    },
    get forms(){
      return new HTMLCollection(this.getElementsByTagName('form'), 'Form');
    },
    get images(){
        return new HTMLCollection(this.getElementsByTagName('img'), 'Image');
        
    },
    get lastModified(){ 
        /* TODO */
        return this._lastModified; 
    
    },
    get links(){
        return new HTMLCollection(this.getElementsByTagName('a'), 'Link');
        
    },
    get location(){
        return $w.location
    },
    get referrer(){
        /* TODO */
        return this._refferer; 
        
    },
    get URL(){
        /* TODO*/
        return this._url; 
        
    },
	close : function(){ 
	    /* TODO */ 
	    this._open = false;
    },
	getElementsByName : function(name){
        //returns a real Array + the DOMNodeList
        var retNodes = __extend__([],new DOMNodeList(this, this.documentElement)),
          node;
        // loop through all Elements in the 'all' collection
        var all = this.all;
        for (var i=0; i < all.length; i++) {
            node = all[i];
            if (node.nodeType == DOMNode.ELEMENT_NODE && node.getAttribute('name') == name) {
                retNodes.push(node);
            }
        }
        return retNodes;
	},
	open : function(){ 
	    /* TODO */
	    this._open = true;  
    },
	write: function(htmlstring){ 
	    /* TODO */
	    return; 
	
    },
	writeln: function(htmlstring){ 
	    this.write(htmlstring+'\n'); 
    },
	toString: function(){ 
	    return "Document" +  (typeof this._url == "string" ? ": " + this._url : ""); 
    },
	get innerHTML(){ 
	    return this.documentElement.outerHTML; 
	    
    },
	get __html__(){
	    return true;
	    
    }
});

$w.HTMLDocument = HTMLDocument;
