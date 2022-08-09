(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1310:function(module,exports,__webpack_require__){"use strict";(function(global){Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),React=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(__webpack_require__(2));function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}var isWindows="navigator"in global&&/Win/i.test(navigator.platform),isMacLike="navigator"in global&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),className="npm__react-simple-code-editor__textarea",Editor=function(_React$Component){function Editor(){var _ref,_temp,_this;_classCallCheck(this,Editor);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_ref=Editor.__proto__||Object.getPrototypeOf(Editor)).call.apply(_ref,[this].concat(args))),_this.state={capture:!0,ie:!1},_this._recordCurrentState=function(){var input=_this._input;if(input){var value=input.value,selectionStart=input.selectionStart,selectionEnd=input.selectionEnd;_this._recordChange({value:value,selectionStart:selectionStart,selectionEnd:selectionEnd})}},_this._getLines=function(text,position){return text.substring(0,position).split("\n")},_this._recordChange=function(record){var overwrite=arguments.length>1&&void 0!==arguments[1]&&arguments[1],_this$_history=_this._history,stack=_this$_history.stack,offset=_this$_history.offset;if(stack.length&&offset>-1){_this._history.stack=stack.slice(0,offset+1);var count=_this._history.stack.length;if(count>100){var extras=count-100;_this._history.stack=stack.slice(extras,count),_this._history.offset=Math.max(_this._history.offset-extras,0)}}var timestamp=Date.now();if(overwrite){var last=_this._history.stack[_this._history.offset];if(last&&timestamp-last.timestamp<3e3){var re=/[^a-z0-9]([a-z0-9]+)$/i,previous=_this._getLines(last.value,last.selectionStart).pop().match(re),current=_this._getLines(record.value,record.selectionStart).pop().match(re);if(previous&&current&&current[1].startsWith(previous[1]))return void(_this._history.stack[_this._history.offset]=_extends({},record,{timestamp:timestamp}))}}_this._history.stack.push(_extends({},record,{timestamp:timestamp})),_this._history.offset++},_this._updateInput=function(record){var input=_this._input;input&&(input.value=record.value,input.selectionStart=record.selectionStart,input.selectionEnd=record.selectionEnd,_this.props.onValueChange(record.value))},_this._applyEdits=function(record){var input=_this._input,last=_this._history.stack[_this._history.offset];last&&input&&(_this._history.stack[_this._history.offset]=_extends({},last,{selectionStart:input.selectionStart,selectionEnd:input.selectionEnd})),_this._recordChange(record),_this._updateInput(record)},_this._undoEdit=function(){var _this$_history2=_this._history,stack=_this$_history2.stack,offset=_this$_history2.offset,record=stack[offset-1];record&&(_this._updateInput(record),_this._history.offset=Math.max(offset-1,0))},_this._redoEdit=function(){var _this$_history3=_this._history,stack=_this$_history3.stack,offset=_this$_history3.offset,record=stack[offset+1];record&&(_this._updateInput(record),_this._history.offset=Math.min(offset+1,stack.length-1))},_this._handleKeyDown=function(e){var _this$props=_this.props,tabSize=_this$props.tabSize,insertSpaces=_this$props.insertSpaces,ignoreTabKey=_this$props.ignoreTabKey,_e$target=e.target,value=_e$target.value,selectionStart=_e$target.selectionStart,selectionEnd=_e$target.selectionEnd,tabCharacter=(insertSpaces?" ":"     ").repeat(tabSize);if(9===e.keyCode&&!ignoreTabKey&&_this.state.capture)if(e.preventDefault(),e.shiftKey){var linesBeforeCaret=_this._getLines(value,selectionStart),startLine=linesBeforeCaret.length-1,endLine=_this._getLines(value,selectionEnd).length-1,nextValue=value.split("\n").map((function(line,i){return i>=startLine&&i<=endLine&&line.startsWith(tabCharacter)?line.substring(tabCharacter.length):line})).join("\n");if(value!==nextValue){var startLineText=linesBeforeCaret[startLine];_this._applyEdits({value:nextValue,selectionStart:startLineText.startsWith(tabCharacter)?selectionStart-tabCharacter.length:selectionStart,selectionEnd:selectionEnd-(value.length-nextValue.length)})}}else if(selectionStart!==selectionEnd){var _linesBeforeCaret=_this._getLines(value,selectionStart),_startLine=_linesBeforeCaret.length-1,_endLine=_this._getLines(value,selectionEnd).length-1,_startLineText=_linesBeforeCaret[_startLine];_this._applyEdits({value:value.split("\n").map((function(line,i){return i>=_startLine&&i<=_endLine?tabCharacter+line:line})).join("\n"),selectionStart:/\S/.test(_startLineText)?selectionStart+tabCharacter.length:selectionStart,selectionEnd:selectionEnd+tabCharacter.length*(_endLine-_startLine+1)})}else{var updatedSelection=selectionStart+tabCharacter.length;_this._applyEdits({value:value.substring(0,selectionStart)+tabCharacter+value.substring(selectionEnd),selectionStart:updatedSelection,selectionEnd:updatedSelection})}else if(8===e.keyCode){var hasSelection=selectionStart!==selectionEnd;if(value.substring(0,selectionStart).endsWith(tabCharacter)&&!hasSelection){e.preventDefault();var _updatedSelection=selectionStart-tabCharacter.length;_this._applyEdits({value:value.substring(0,selectionStart-tabCharacter.length)+value.substring(selectionEnd),selectionStart:_updatedSelection,selectionEnd:_updatedSelection})}}else if(13===e.keyCode){if(selectionStart===selectionEnd){var matches=_this._getLines(value,selectionStart).pop().match(/^\s+/);if(matches&&matches[0]){e.preventDefault();var indent="\n"+matches[0],_updatedSelection2=selectionStart+indent.length;_this._applyEdits({value:value.substring(0,selectionStart)+indent+value.substring(selectionEnd),selectionStart:_updatedSelection2,selectionEnd:_updatedSelection2})}}}else if(57===e.keyCode||219===e.keyCode||222===e.keyCode||192===e.keyCode){var chars=void 0;57===e.keyCode&&e.shiftKey?chars=["(",")"]:219===e.keyCode?chars=e.shiftKey?["{","}"]:["[","]"]:222===e.keyCode?chars=e.shiftKey?['"','"']:["'","'"]:192!==e.keyCode||e.shiftKey||(chars=["`","`"]),selectionStart!==selectionEnd&&chars&&(e.preventDefault(),_this._applyEdits({value:value.substring(0,selectionStart)+chars[0]+value.substring(selectionStart,selectionEnd)+chars[1]+value.substring(selectionEnd),selectionStart:selectionStart,selectionEnd:selectionEnd+2}))}else!(isMacLike?e.metaKey&&90===e.keyCode:e.ctrlKey&&90===e.keyCode)||e.shiftKey||e.altKey?(isMacLike?e.metaKey&&90===e.keyCode&&e.shiftKey:isWindows?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&90===e.keyCode&&e.shiftKey)&&!e.altKey?(e.preventDefault(),_this._redoEdit()):77!==e.keyCode||!e.ctrlKey||isMacLike&&!e.shiftKey||(e.preventDefault(),_this.setState((function(state){return{capture:!state.capture}}))):(e.preventDefault(),_this._undoEdit())},_this._handleChange=function(e){var _e$target2=e.target,value=_e$target2.value,selectionStart=_e$target2.selectionStart,selectionEnd=_e$target2.selectionEnd;_this._recordChange({value:value,selectionStart:selectionStart,selectionEnd:selectionEnd},!0),_this.props.onValueChange(value)},_this._history={stack:[],offset:-1},_possibleConstructorReturn(_this,_temp)}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Editor,_React$Component),_createClass(Editor,[{key:"componentDidMount",value:function componentDidMount(){/Trident/.test(navigator.userAgent)&&this.setState({ie:!0}),this._recordCurrentState()}},{key:"render",value:function render(){var _this2=this,_props=this.props,value=_props.value,style=_props.style,padding=_props.padding,highlight=_props.highlight,autoFocus=_props.autoFocus,disabled=_props.disabled,form=_props.form,maxLength=_props.maxLength,minLength=_props.minLength,name=_props.name,placeholder=_props.placeholder,readOnly=_props.readOnly,required=_props.required,onFocus=_props.onFocus,onBlur=_props.onBlur,rest=(_props.onValueChange,_props.tabSize,_props.insertSpaces,_props.ignoreTabKey,function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}(_props,["value","style","padding","highlight","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onFocus","onBlur","onValueChange","tabSize","insertSpaces","ignoreTabKey"])),contentStyle={paddingTop:padding,paddingRight:padding,paddingBottom:padding,paddingLeft:padding},highlighted=highlight(value);return React.createElement("div",_extends({},rest,{style:_extends({},styles.container,style)}),React.createElement("textarea",{ref:function ref(c){return _this2._input=c},style:_extends({},styles.editor,styles.textarea,contentStyle),className:className+" "+(this.state.ie?className+"-ie":""),value:value,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onFocus:onFocus,onBlur:onBlur,disabled:disabled,form:form,maxLength:maxLength,minLength:minLength,name:name,placeholder:placeholder,readOnly:readOnly,required:required,autoFocus:autoFocus,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),React.createElement("pre",_extends({"aria-hidden":"true",style:_extends({},styles.editor,styles.highlight,contentStyle)},"string"==typeof highlighted?{dangerouslySetInnerHTML:{__html:highlighted+"<br />"}}:{children:highlighted})),React.createElement("style",{type:"text/css"},"\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * IE doesn't support '-webkit-text-fill-color'\n * So we use 'color: transparent' to make the text transparent on IE\n * Unlike other browsers, it doesn't affect caret color in IE\n */\n.npm__react-simple-code-editor__textarea-ie {\n  color: transparent !important;\n}\n\n.npm__react-simple-code-editor__textarea-ie::selection {\n  background-color: #accef7 !important;\n  color: transparent !important;\n}\n"))}},{key:"session",get:function get(){return{history:this._history}},set:function set(session){this._history=session.history}}]),Editor}(React.Component);Editor.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},exports.default=Editor;var styles={container:{position:"relative",textAlign:"left",whiteSpace:"pre-wrap",wordBreak:"keep-all",boxSizing:"border-box",padding:0},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",margin:0,border:0,resize:"none",background:"none",overflow:"hidden",color:"inherit",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",margin:0,border:0,pointerEvents:"none"},editor:{boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"inherit",wordBreak:"inherit"}}}).call(this,__webpack_require__(102))}}]);