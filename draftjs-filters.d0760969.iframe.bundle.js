(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1321:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"applyContentWithSelection",(function(){return applyContentWithSelection})),__webpack_require__.d(__webpack_exports__,"cloneEntities",(function(){return cloneEntities})),__webpack_require__.d(__webpack_exports__,"filterBlockTypes",(function(){return filterBlockTypes})),__webpack_require__.d(__webpack_exports__,"filterEditorState",(function(){return filterEditorState})),__webpack_require__.d(__webpack_exports__,"filterEntityData",(function(){return filterEntityData})),__webpack_require__.d(__webpack_exports__,"filterEntityRanges",(function(){return filterEntityRanges})),__webpack_require__.d(__webpack_exports__,"filterInlineStyles",(function(){return filterInlineStyles})),__webpack_require__.d(__webpack_exports__,"limitBlockDepth",(function(){return limitBlockDepth})),__webpack_require__.d(__webpack_exports__,"preserveAtomicBlocks",(function(){return preserveAtomicBlocks})),__webpack_require__.d(__webpack_exports__,"preserveBlockByText",(function(){return preserveBlockByText})),__webpack_require__.d(__webpack_exports__,"removeInvalidAtomicBlocks",(function(){return removeInvalidAtomicBlocks})),__webpack_require__.d(__webpack_exports__,"removeInvalidDepthBlocks",(function(){return removeInvalidDepthBlocks})),__webpack_require__.d(__webpack_exports__,"replaceTextBySpaces",(function(){return replaceTextBySpaces})),__webpack_require__.d(__webpack_exports__,"resetAtomicBlocks",(function(){return resetAtomicBlocks})),__webpack_require__.d(__webpack_exports__,"shouldKeepEntityByAttribute",(function(){return shouldKeepEntityByAttribute})),__webpack_require__.d(__webpack_exports__,"shouldKeepEntityType",(function(){return shouldKeepEntityType})),__webpack_require__.d(__webpack_exports__,"shouldRemoveImageEntity",(function(){return shouldRemoveImageEntity}));var draft_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1287),UNORDERED_LIST_ITEM="unordered-list-item",ORDERED_LIST_ITEM="ordered-list-item",preserveAtomicBlocks=function preserveAtomicBlocks(content){var blockMap=content.getBlockMap(),perservedBlocks=blockMap.filter((function(block){var text=block.getText();return block.getEntityAt(0)&&["📷"," ","📷 "].includes(text)})).map((function(block){return block.set("type","atomic")}));return 0!==perservedBlocks.size?content.merge({blockMap:blockMap.merge(perservedBlocks)}):content},resetAtomicBlocks=function resetAtomicBlocks(content){var blocks=content.getBlockMap(),normalisedBlocks=blocks.filter((function(block){return"atomic"===block.getType()&&(" "!==block.getText()||0!==block.getInlineStyleAt(0).size)})).map((function(block){var chars=block.getCharacterList().slice(0,1).map((function(char){var newChar=char;return char.getStyle().forEach((function(type){newChar=draft_js__WEBPACK_IMPORTED_MODULE_0__.CharacterMetadata.removeStyle(newChar,type)})),newChar}));return block.merge({text:" ",characterList:chars})}));return 0!==normalisedBlocks.size&&(blocks=blocks.merge(normalisedBlocks)),content.merge({blockMap:blocks})},removeInvalidAtomicBlocks=function removeInvalidAtomicBlocks(whitelist,content){var blockMap=content.getBlockMap(),filteredBlocks=blockMap.filter((function isValidAtomicBlock(block){if("atomic"!==block.getType())return!0;var isValid,entityKey=block.getEntityAt(0);if(entityKey){var type=content.getEntity(entityKey).getType();isValid=whitelist.some((function(t){return t.type===type}))}else isValid=!1;return isValid}));return filteredBlocks.size!==blockMap.size?content.merge({blockMap:filteredBlocks}):content},removeInvalidDepthBlocks=function removeInvalidDepthBlocks(content){var blockMap=content.getBlockMap(),filteredBlocks=blockMap.filter((function isValidDepthBlock(block){return[UNORDERED_LIST_ITEM,ORDERED_LIST_ITEM].includes(block.getType())||0===block.getDepth()}));return filteredBlocks.size!==blockMap.size?content.merge({blockMap:filteredBlocks}):content},preserveBlockByText=function preserveBlockByText(rules,content){var blockMap=content.getBlockMap(),blocks=blockMap.filter((function(block){return"unstyled"===block.getType()})).map((function(block){var match,text=block.getText(),newBlock=block,matchingRule=rules.find((function(rule){return null!==(match=new RegExp(rule.test).exec(text))}));if(matchingRule&&match&&match[0]){var _text=block.getText();if(block.getEntityAt(0)&&match[0]===_text)return newBlock;for(var sliceOffset=match[0].length,chars=block.getCharacterList(),startOffset=0;startOffset<sliceOffset;)chars=chars.shift(),startOffset++;newBlock=newBlock.merge({type:matchingRule.type,depth:matchingRule.depth,text:_text.slice(sliceOffset),characterList:chars})}return newBlock}));return 0===blocks.size?content:content.merge({blockMap:blockMap.merge(blocks)})},limitBlockDepth=function limitBlockDepth(max,content){var blockMap=content.getBlockMap(),changedBlocks=blockMap.filter((function(block){return block.getDepth()>max})).map((function(block){return block.set("depth",max)}));return 0===changedBlocks.size?content:content.merge({blockMap:blockMap.merge(changedBlocks)})},filterBlockTypes=function filterBlockTypes(whitelist,content){var blockMap=content.getBlockMap(),changedBlocks=blockMap.filter((function(block){return!whitelist.includes(block.getType())})).map((function(block){return block.merge({type:"unstyled",depth:0})}));return 0===changedBlocks.size?content:content.merge({blockMap:blockMap.merge(changedBlocks)})},filterInlineStyles=function filterInlineStyles(whitelist,content){var blockMap=content.getBlockMap(),blocks=blockMap.map((function(block){var altered=!1,chars=block.getCharacterList().map((function(char){var newChar=char;return char.getStyle().filter((function(type){return!whitelist.includes(type)})).forEach((function(type){altered=!0,newChar=draft_js__WEBPACK_IMPORTED_MODULE_0__.CharacterMetadata.removeStyle(newChar,type)})),newChar}));return altered?block.set("characterList",chars):block}));return content.merge({blockMap:blockMap.merge(blocks)})},cloneEntities=function cloneEntities(content){var newContent=content,blockMap=newContent.getBlockMap(),encounteredEntities=[],shouldCloneEntity=function shouldCloneEntity(firstChar){var key=firstChar.getEntity();if(key){if(encounteredEntities.includes(key))return!0;encounteredEntities.push(key)}return!1},blocks=blockMap.map((function(block){var newChars=block.getCharacterList(),altered=!1;return block.findEntityRanges(shouldCloneEntity,(function updateRangeWithClone(start,end){var key=newChars.get(start).getEntity(),entity=newContent.getEntity(key),newKey=(newContent=newContent.createEntity(entity.getType(),entity.getMutability(),entity.getData())).getLastCreatedEntityKey();newChars=newChars.map((function(char,i){return start<=i&&i<=end?draft_js__WEBPACK_IMPORTED_MODULE_0__.CharacterMetadata.applyEntity(char,newKey):char})),altered=!0})),altered?block.set("characterList",newChars):block}));return newContent.merge({blockMap:blockMap.merge(blocks)})},filterEntityRanges=function filterEntityRanges(filterFn,content){var blockMap=content.getBlockMap(),blocks=blockMap.map((function(block){var altered=!1,chars=block.getCharacterList().map((function(char){var entityKey=char.getEntity();if(entityKey&&!filterFn(content,entityKey,block))return altered=!0,draft_js__WEBPACK_IMPORTED_MODULE_0__.CharacterMetadata.applyEntity(char,null);return char}));return altered?block.set("characterList",chars):block}));return content.merge({blockMap:blockMap.merge(blocks)})},shouldKeepEntityType=function shouldKeepEntityType(whitelist,type){return whitelist.some((function(e){return e.type===type}))},shouldRemoveImageEntity=function shouldRemoveImageEntity(entityType,blockType){return"IMAGE"===entityType&&"atomic"!==blockType},shouldKeepEntityByAttribute=function shouldKeepEntityByAttribute(entityTypes,entityType,data){var config=entityTypes.find((function(t){return t.type===entityType})),whitelist=config&&config.whitelist?config.whitelist:{};return Object.keys(whitelist).every((function(attr){var check=whitelist[attr];if("boolean"==typeof check){var hasData=data.hasOwnProperty(attr);return check?hasData:!hasData}return new RegExp(check).test(data[attr])}))},filterEntityData=function filterEntityData(entityTypes,content){var newContent=content,entities={};return newContent.getBlockMap().forEach((function(block){block.findEntityRanges((function(char){var entityKey=char.getEntity();if(entityKey){var entity=newContent.getEntity(entityKey);entities[entityKey]=entity}}))})),Object.keys(entities).forEach((function(key){var entity=entities[key],data=entity.getData(),config=entityTypes.find((function(t){return t.type===entity.getType()})),whitelist=config?config.attributes:null;if(!whitelist)return data;var newData=whitelist.reduce((function(attrs,attr){return data.hasOwnProperty(attr)&&(attrs[attr]=data[attr]),attrs}),{});newContent=newContent.replaceEntityData(key,newData)})),newContent},replaceTextBySpaces=function replaceTextBySpaces(characters,content){var blockMap=content.getBlockMap(),blocks=blockMap.map((function(block){var text=block.getText(),newText=characters.reduce((function(txt,char){return txt.replace(new RegExp(char,"g")," ".repeat(char.length))}),text);return text!==newText?block.set("text",newText):block}));return content.merge({blockMap:blockMap.merge(blocks)})},applyContentWithSelection=function applyContentWithSelection(editorState,content,nextContent){if(nextContent===content)return editorState;if(0===nextContent.getBlockMap().size)return draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.moveFocusToEnd(draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.set(editorState,{currentContent:draft_js__WEBPACK_IMPORTED_MODULE_0__.ContentState.createFromText("")}));var nextState=draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.set(editorState,{currentContent:nextContent}),selection=editorState.getSelection(),anchorKey=selection.getAnchorKey(),anchorBlock=nextContent.getBlockForKey(anchorKey);if(!selection.isCollapsed()||!!anchorBlock)return nextState;var nextAnchorKey=nextContent.getBlockMap().keySeq().reverse().find((function(k){return content.getKeyAfter(k)!==nextContent.getKeyAfter(k)}));if(nextAnchorKey){var blockEndOffset=nextContent.getBlockForKey(nextAnchorKey).getText().length,nextSelection=selection.merge({anchorKey:nextAnchorKey,focusKey:nextAnchorKey,anchorOffset:blockEndOffset,focusOffset:blockEndOffset});return draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.acceptSelection(nextState,nextSelection)}return nextState},BLOCK_PREFIX_RULES=[{test:"^(· |•\t|•|📷 |\t| \t)",type:"unordered-list-item",depth:0},{test:"^(◦|o |o\t)",type:"unordered-list-item",depth:1},{test:"^(§ |\t|◾)",type:"unordered-list-item",depth:2},{test:"^1{0,1}\\d\\.[ \t]",type:"ordered-list-item",depth:0},{test:"^x{0,1}(i|ii|iii|iv|v|vi|vii|viii|ix|x)\\.[ \t]",type:"ordered-list-item",depth:2},{test:"^[a-z]\\.[ \t]",type:"ordered-list-item",depth:1}],filterEditorState=function filterEditorState(options,editorState){var blocks=options.blocks,styles=options.styles,entities=options.entities,maxNesting=options.maxNesting,whitespacedCharacters=options.whitespacedCharacters,_options$blockTextRul=options.blockTextRules,blockTextRules=void 0===_options$blockTextRul?BLOCK_PREFIX_RULES:_options$blockTextRul,filters=[removeInvalidDepthBlocks,preserveBlockByText.bind(null,blockTextRules),limitBlockDepth.bind(null,maxNesting),filterInlineStyles.bind(null,styles),filterBlockTypes.bind(null,blocks.concat(["unstyled","atomic"])),preserveAtomicBlocks,resetAtomicBlocks,filterEntityRanges.bind(null,(function shouldKeepEntityRange(content,entityKey,block){var entity=content.getEntity(entityKey),entityData=entity.getData(),entityType=entity.getType(),blockType=block.getType();return shouldKeepEntityType(entities,entityType)&&shouldKeepEntityByAttribute(entities,entityType,entityData)&&!shouldRemoveImageEntity(entityType,blockType)})),removeInvalidAtomicBlocks.bind(null,entities),filterEntityData.bind(null,entities),cloneEntities,replaceTextBySpaces.bind(null,whitespacedCharacters)],content=editorState.getCurrentContent(),nextContent=filters.reduce((function(c,filter){return filter(c)}),content);return applyContentWithSelection(editorState,content,nextContent)}}}]);