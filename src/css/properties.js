/*
* CSS2Properties - DOM Level 2 CSS
*/
var CSS2Properties = function(options){
    __extend__(this, __supportedStyles__);
    __cssTextToStyles__(this, options.cssText?options.cssText:"");
};
__extend__(CSS2Properties.prototype, {
    get cssText(){
        return Array.prototype.apply.join(this,[';\n']);
    },
    set cssText(cssText){ 
        __cssTextToStyles__(this, cssText); 
    },
    getPropertyCSSValue : function(){
        
    },
    getPropertyPriority : function(){
        
    },
    getPropertyValue : function(name){
		var camelCase = name.replace(/\-(\w)/g, function(all, letter){
			return letter.toUpperCase();
		});
        var i, value = this[camelCase];
        if(value === undefined){
            for(i=0;i<this.length;i++){
                if(this[i]===name){
                    return this[i];
                }
            }
        }
        return value;
    },
    item : function(index){
        return this[index];
    },
    removeProperty: function(){
        
    },
    setProperty: function(){
        
    },
    toString:function(){
        if (this.length >0){
            return "{\n\t"+Array.prototype.join.apply(this,[';\n\t'])+"}\n";
        }else{
            return '';
        }
    }
});

var __cssTextToStyles__ = function(css2props, cssText){
    var styleArray=[];
    var style, name, value, camelCaseName, w3cName, styles = cssText.split(';');
    for ( var i = 0; i < styles.length; i++ ) {
        //$log("Adding style property " + styles[i]);
    	style = styles[i].split(':');
    	if ( style.length == 2 ){
    	    //keep a reference to the original name of the style which was set
    	    //this is the w3c style setting method.
    	    styleArray[styleArray.length] = w3cName = styles[i];
            //camel case for dash case
    	    value = trim(style[1]);
            camelCaseName = trim(style[0].replace(/\-(\w)/g, function(all, letter){
				return letter.toUpperCase();
			}));
            $debug('CSS Style Name:  ' + camelCaseName);
            if(css2props[camelCaseName]!==undefined){
                //set the value internally with camelcase name 
                $debug('Setting css ' + camelCaseName + ' to ' + value);
                css2props[camelCaseName] = value;
            };
    	}
    }
    __setArray__(css2props, styleArray);
};
//Obviously these arent all supported but by commenting out various sections
//this provides a single location to configure what is exposed as supported.
//These will likely need to be functional getters/setters in the future to deal with
//the variation on input formulations
var __supportedStyles__ = {
    azimuth: "",
    background:	"",
    backgroundAttachment:	"",
    backgroundColor:	"",
    backgroundImage:	"",
    backgroundPosition:	"",
    backgroundRepeat:	"",
    border:	"",
    borderBottom:	"",
    borderBottomColor:	"",
    borderBottomStyle:	"",
    borderBottomWidth:	"",
    borderCollapse:	"",
    borderColor:	"",
    borderLeft:	"",
    borderLeftColor:	"",
    borderLeftStyle:	"",
    borderLeftWidth:	"",
    borderRight:	"",
    borderRightColor:	"",
    borderRightStyle:	"",
    borderRightWidth:	"",
    borderSpacing:	"",
    borderStyle:	"",
    borderTop:	"",
    borderTopColor:	"",
    borderTopStyle:	"",
    borderTopWidth:	"",
    borderWidth:	"",
    bottom:	"",
    captionSide:	"",
    clear:	"",
    clip:	"",
    color:	"",
    content:	"",
    counterIncrement:	"",
    counterReset:	"",
    cssFloat:	"",
    cue:	"",
    cueAfter:	"",
    cueBefore:	"",
    cursor:	"",
    direction:	"",
    display:	"",
    elevation:	"",
    emptyCells:	"",
    font:	"",
    fontFamily:	"",
    fontSize:	"",
    fontSizeAdjust:	"",
    fontStretch:	"",
    fontStyle:	"",
    fontVariant:	"",
    fontWeight:	"",
    height:	"",
    left:	"",
    letterSpacing:	"",
    lineHeight:	"",
    listStyle:	"",
    listStyleImage:	"",
    listStylePosition:	"",
    listStyleType:	"",
    margin:	"",
    marginBottom:	"",
    marginLeft:	"",
    marginRight:	"",
    marginTop:	"",
    markerOffset:	"",
    marks:	"",
    maxHeight:	"",
    maxWidth:	"",
    minHeight:	"",
    minWidth:	"",
    opacity:	1,
    orphans:	"",
    outline:	"",
    outlineColor:	"",
    outlineOffset:	"",
    outlineStyle:	"",
    outlineWidth:	"",
    overflow:	"",
    overflowX:	"",
    overflowY:	"",
    padding:	"",
    paddingBottom:	"",
    paddingLeft:	"",
    paddingRight:	"",
    paddingTop:	"",
    page:	"",
    pageBreakAfter:	"",
    pageBreakBefore:	"",
    pageBreakInside:	"",
    pause:	"",
    pauseAfter:	"",
    pauseBefore:	"",
    pitch:	"",
    pitchRange:	"",
    position:	"",
    quotes:	"",
    richness:	"",
    right:	"",
    size:	"",
    speak:	"",
    speakHeader:	"",
    speakNumeral:	"",
    speakPunctuation:	"",
    speechRate:	"",
    stress:	"",
    tableLayout:	"",
    textAlign:	"",
    textDecoration:	"",
    textIndent:	"",
    textShadow:	"",
    textTransform:	"",
    top:	"",
    unicodeBidi:	"",
    verticalAlign:	"",
    visibility:	"",
    voiceFamily:	"",
    volume:	"",
    whiteSpace:	"",
    widows:	"",
    width:	"",
    wordSpacing:	"",
    zIndex:	""
};

$w.CSS2Properties = CSS2Properties;