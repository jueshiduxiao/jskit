/*!
 * BSD License
 * 
 * For yoga software
 * 
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 *  * Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 *  * Neither the name Facebook nor the names of its contributors may be used to
 *    endorse or promote products derived from this software without specific
 *    prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Yoga"] = factory();
	else
		root["Yoga"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, __dirname, Buffer) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;((function(root,wrapper){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return wrapper}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if(typeof module=="object"&&module.exports)module.exports=wrapper;else(root.nbind=root.nbind||{}).init=wrapper}))(this,(function(Module,cb){if(typeof Module=="function"){cb=Module;Module={}}Module.onRuntimeInitialized=(function(init,cb){return(function(){if(init)init.apply(this,arguments);try{Module.ccall("nbind_init")}catch(err){cb(err);return}cb(null,{bind:Module._nbind_value,reflect:Module.NBind.reflect,queryType:Module.NBind.queryType,toggleLightGC:Module.toggleLightGC,lib:Module})})})(Module.onRuntimeInitialized,cb);var Module;if(!Module)Module=(typeof Module!=="undefined"?Module:null)||{};var moduleOverrides={};for(var key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var ENVIRONMENT_IS_WEB=typeof window==="object";var ENVIRONMENT_IS_WORKER=typeof importScripts==="function";var ENVIRONMENT_IS_NODE=typeof process==="object"&&"function"==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;var ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;if(ENVIRONMENT_IS_NODE){if(!Module["print"])Module["print"]=function print(x){process["stdout"].write(x+"\n")};if(!Module["printErr"])Module["printErr"]=function printErr(x){process["stderr"].write(x+"\n")};var nodeFS=__webpack_require__(7);var nodePath=__webpack_require__(8);Module["read"]=function read(filename,binary){filename=nodePath["normalize"](filename);var ret=nodeFS["readFileSync"](filename);if(!ret&&filename!=nodePath["resolve"](filename)){filename=path.join(__dirname,"..","src",filename);ret=nodeFS["readFileSync"](filename)}if(ret&&!binary)ret=ret.toString();return ret};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};Module["load"]=function load(f){globalEval(read(f))};if(!Module["thisProgram"]){if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}else{Module["thisProgram"]="unknown-program"}}Module["arguments"]=process["argv"].slice(2);if(true){module["exports"]=Module}process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(!Module["print"])Module["print"]=print;if(typeof printErr!="undefined")Module["printErr"]=printErr;if(typeof read!="undefined"){Module["read"]=read}else{Module["read"]=function read(){throw"no read() available (jsc?)"}}Module["readBinary"]=function readBinary(f){if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}var data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof console!=="undefined"){if(!Module["print"])Module["print"]=function print(x){console.log(x)};if(!Module["printErr"])Module["printErr"]=function printErr(x){console.log(x)}}else{var TRY_USE_DUMP=false;if(!Module["print"])Module["print"]=TRY_USE_DUMP&&typeof dump!=="undefined"?(function(x){dump(x)}):(function(x){})}if(ENVIRONMENT_IS_WORKER){Module["load"]=importScripts}if(typeof Module["setWindowTitle"]==="undefined"){Module["setWindowTitle"]=(function(title){document.title=title})}}else{throw"Unknown runtime environment. Where are we?"}function globalEval(x){eval.call(null,x)}if(!Module["load"]&&Module["read"]){Module["load"]=function load(f){globalEval(Module["read"](f))}}if(!Module["print"]){Module["print"]=(function(){})}if(!Module["printErr"]){Module["printErr"]=Module["print"]}if(!Module["arguments"]){Module["arguments"]=[]}if(!Module["thisProgram"]){Module["thisProgram"]="./this.program"}Module.print=Module["print"];Module.printErr=Module["printErr"];Module["preRun"]=[];Module["postRun"]=[];for(var key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}var Runtime={setTempRet0:(function(value){tempRet0=value}),getTempRet0:(function(){return tempRet0}),stackSave:(function(){return STACKTOP}),stackRestore:(function(stackTop){STACKTOP=stackTop}),getNativeTypeSize:(function(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return Runtime.QUANTUM_SIZE}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}),getNativeFieldSize:(function(type){return Math.max(Runtime.getNativeTypeSize(type),Runtime.QUANTUM_SIZE)}),STACK_ALIGN:16,prepVararg:(function(ptr,type){if(type==="double"||type==="i64"){if(ptr&7){assert((ptr&7)===4);ptr+=4}}else{assert((ptr&3)===0)}return ptr}),getAlignSize:(function(type,size,vararg){if(!vararg&&(type=="i64"||type=="double"))return 8;if(!type)return Math.min(size,8);return Math.min(size||(type?Runtime.getNativeFieldSize(type):0),Runtime.QUANTUM_SIZE)}),dynCall:(function(sig,ptr,args){if(args&&args.length){if(!args.splice)args=Array.prototype.slice.call(args);args.splice(0,0,ptr);return Module["dynCall_"+sig].apply(null,args)}else{return Module["dynCall_"+sig].call(null,ptr)}}),functionPointers:[],addFunction:(function(func){for(var i=0;i<Runtime.functionPointers.length;i++){if(!Runtime.functionPointers[i]){Runtime.functionPointers[i]=func;return 2*(1+i)}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."}),removeFunction:(function(index){Runtime.functionPointers[(index-2)/2]=null}),warnOnce:(function(text){if(!Runtime.warnOnce.shown)Runtime.warnOnce.shown={};if(!Runtime.warnOnce.shown[text]){Runtime.warnOnce.shown[text]=1;Module.printErr(text)}}),funcWrappers:{},getFuncWrapper:(function(func,sig){assert(sig);if(!Runtime.funcWrappers[sig]){Runtime.funcWrappers[sig]={}}var sigCache=Runtime.funcWrappers[sig];if(!sigCache[func]){sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func,arguments)}}return sigCache[func]}),getCompilerSetting:(function(name){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"}),stackAlloc:(function(size){var ret=STACKTOP;STACKTOP=STACKTOP+size|0;STACKTOP=STACKTOP+15&-16;return ret}),staticAlloc:(function(size){var ret=STATICTOP;STATICTOP=STATICTOP+size|0;STATICTOP=STATICTOP+15&-16;return ret}),dynamicAlloc:(function(size){var ret=DYNAMICTOP;DYNAMICTOP=DYNAMICTOP+size|0;DYNAMICTOP=DYNAMICTOP+15&-16;if(DYNAMICTOP>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){DYNAMICTOP=ret;return 0}}return ret}),alignMemory:(function(size,quantum){var ret=size=Math.ceil(size/(quantum?quantum:16))*(quantum?quantum:16);return ret}),makeBigInt:(function(low,high,unsigned){var ret=unsigned?+(low>>>0)+ +(high>>>0)*+4294967296:+(low>>>0)+ +(high|0)*+4294967296;return ret}),GLOBAL_BASE:8,QUANTUM_SIZE:4,__dummy__:0};Module["Runtime"]=Runtime;var __THREW__=0;var ABORT=false;var EXITSTATUS=0;var undef=0;var tempValue,tempInt,tempBigInt,tempInt2,tempBigInt2,tempPair,tempBigIntI,tempBigIntR,tempBigIntS,tempBigIntP,tempBigIntD,tempDouble,tempFloat;var tempI64,tempI64b;var tempRet0,tempRet1,tempRet2,tempRet3,tempRet4,tempRet5,tempRet6,tempRet7,tempRet8,tempRet9;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}var globalScope=this;function getCFunc(ident){var func=Module["_"+ident];if(!func){try{func=eval("_"+ident)}catch(e){}}assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)");return func}var cwrap,ccall;((function(){var JSfuncs={"stackSave":(function(){Runtime.stackSave()}),"stackRestore":(function(){Runtime.stackRestore()}),"arrayToC":(function(arr){var ret=Runtime.stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=Runtime.stackAlloc((str.length<<2)+1);writeStringToMemory(str,ret)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};ccall=function ccallFunc(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=Runtime.stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){if(opts&&opts.async){EmterpreterAsync.asyncFinalizers.push((function(){Runtime.stackRestore(stack)}));return}Runtime.stackRestore(stack)}return ret};var sourceRegex=/^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(jsfunc){var parsed=jsfunc.toString().match(sourceRegex).slice(1);return{arguments:parsed[0],body:parsed[1],returnValue:parsed[2]}}var JSsource={};for(var fun in JSfuncs){if(JSfuncs.hasOwnProperty(fun)){JSsource[fun]=parseJSFunc(JSfuncs[fun])}}cwrap=function cwrap(ident,returnType,argTypes){argTypes=argTypes||[];var cfunc=getCFunc(ident);var numericArgs=argTypes.every((function(type){return type==="number"}));var numericRet=returnType!=="string";if(numericRet&&numericArgs){return cfunc}var argNames=argTypes.map((function(x,i){return"$"+i}));var funcstr="(function("+argNames.join(",")+") {";var nargs=argTypes.length;if(!numericArgs){funcstr+="var stack = "+JSsource["stackSave"].body+";";for(var i=0;i<nargs;i++){var arg=argNames[i],type=argTypes[i];if(type==="number")continue;var convertCode=JSsource[type+"ToC"];funcstr+="var "+convertCode.arguments+" = "+arg+";";funcstr+=convertCode.body+";";funcstr+=arg+"="+convertCode.returnValue+";"}}var cfuncname=parseJSFunc((function(){return cfunc})).returnValue;funcstr+="var ret = "+cfuncname+"("+argNames.join(",")+");";if(!numericRet){var strgfy=parseJSFunc((function(){return Pointer_stringify})).returnValue;funcstr+="ret = "+strgfy+"(ret);"}if(!numericArgs){funcstr+=JSsource["stackRestore"].body.replace("()","(stack)")+";"}funcstr+="return ret})";return eval(funcstr)}}))();Module["ccall"]=ccall;Module["cwrap"]=cwrap;function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=+1?tempDouble>+0?(Math_min(+Math_floor(tempDouble/+4294967296),+4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/+4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}Module["setValue"]=setValue;function getValue(ptr,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];default:abort("invalid type for setValue: "+type)}return null}Module["getValue"]=getValue;var ALLOC_NORMAL=0;var ALLOC_STACK=1;var ALLOC_STATIC=2;var ALLOC_DYNAMIC=3;var ALLOC_NONE=4;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;Module["ALLOC_STACK"]=ALLOC_STACK;Module["ALLOC_STATIC"]=ALLOC_STATIC;Module["ALLOC_DYNAMIC"]=ALLOC_DYNAMIC;Module["ALLOC_NONE"]=ALLOC_NONE;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[_malloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][allocator===undefined?ALLOC_STATIC:allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var ptr=ret,stop;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];if(typeof curr==="function"){curr=Runtime.getFunctionIndex(curr)}type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=Runtime.getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}Module["allocate"]=allocate;function getMemory(size){if(!staticSealed)return Runtime.staticAlloc(size);if(typeof _sbrk!=="undefined"&&!_sbrk.called||!runtimeInitialized)return Runtime.dynamicAlloc(size);return _malloc(size)}Module["getMemory"]=getMemory;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return Module["UTF8ToString"](ptr)}Module["Pointer_stringify"]=Pointer_stringify;function AsciiToString(ptr){var str="";while(1){var ch=HEAP8[ptr++>>0];if(!ch)return str;str+=String.fromCharCode(ch)}}Module["AsciiToString"]=AsciiToString;function stringToAscii(str,outPtr){return writeAsciiToMemory(str,outPtr,false)}Module["stringToAscii"]=stringToAscii;function UTF8ArrayToString(u8Array,idx){var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}Module["UTF8ArrayToString"]=UTF8ArrayToString;function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}Module["UTF8ToString"]=UTF8ToString;function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}Module["stringToUTF8Array"]=stringToUTF8Array;function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}Module["stringToUTF8"]=stringToUTF8;function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}Module["lengthBytesUTF8"]=lengthBytesUTF8;function UTF16ToString(ptr){var i=0;var str="";while(1){var codeUnit=HEAP16[ptr+i*2>>1];if(codeUnit==0)return str;++i;str+=String.fromCharCode(codeUnit)}}Module["UTF16ToString"]=UTF16ToString;function stringToUTF16(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr}Module["stringToUTF16"]=stringToUTF16;function lengthBytesUTF16(str){return str.length*2}Module["lengthBytesUTF16"]=lengthBytesUTF16;function UTF32ToString(ptr){var i=0;var str="";while(1){var utf32=HEAP32[ptr+i*4>>2];if(utf32==0)return str;++i;if(utf32>=65536){var ch=utf32-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}else{str+=String.fromCharCode(utf32)}}}Module["UTF32ToString"]=UTF32ToString;function stringToUTF32(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343){var trailSurrogate=str.charCodeAt(++i);codeUnit=65536+((codeUnit&1023)<<10)|trailSurrogate&1023}HEAP32[outPtr>>2]=codeUnit;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr}Module["stringToUTF32"]=stringToUTF32;function lengthBytesUTF32(str){var len=0;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343)++i;len+=4}return len}Module["lengthBytesUTF32"]=lengthBytesUTF32;function demangle(func){var hasLibcxxabi=!!Module["___cxa_demangle"];if(hasLibcxxabi){try{var buf=_malloc(func.length);writeStringToMemory(func.substr(1),buf);var status=_malloc(4);var ret=Module["___cxa_demangle"](buf,0,0,status);if(getValue(status,"i32")===0&&ret){return Pointer_stringify(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}}var i=3;var basicTypes={"v":"void","b":"bool","c":"char","s":"short","i":"int","l":"long","f":"float","d":"double","w":"wchar_t","a":"signed char","h":"unsigned char","t":"unsigned short","j":"unsigned int","m":"unsigned long","x":"long long","y":"unsigned long long","z":"..."};var subs=[];var first=true;function dump(x){if(x)Module.print(x);Module.print(func);var pre="";for(var a=0;a<i;a++)pre+=" ";Module.print(pre+"^")}function parseNested(){i++;if(func[i]==="K")i++;var parts=[];while(func[i]!=="E"){if(func[i]==="S"){i++;var next=func.indexOf("_",i);var num=func.substring(i,next)||0;parts.push(subs[num]||"?");i=next+1;continue}if(func[i]==="C"){parts.push(parts[parts.length-1]);i+=2;continue}var size=parseInt(func.substr(i));var pre=size.toString().length;if(!size||!pre){i--;break}var curr=func.substr(i+pre,size);parts.push(curr);subs.push(curr);i+=pre+size}i++;return parts}function parse(rawList,limit,allowVoid){limit=limit||Infinity;var ret="",list=[];function flushList(){return"("+list.join(", ")+")"}var name;if(func[i]==="N"){name=parseNested().join("::");limit--;if(limit===0)return rawList?[name]:name}else{if(func[i]==="K"||first&&func[i]==="L")i++;var size=parseInt(func.substr(i));if(size){var pre=size.toString().length;name=func.substr(i+pre,size);i+=pre+size}}first=false;if(func[i]==="I"){i++;var iList=parse(true);var iRet=parse(true,1,true);ret+=iRet[0]+" "+name+"<"+iList.join(", ")+">"}else{ret=name}paramLoop:while(i<func.length&&limit-->0){var c=func[i++];if(c in basicTypes){list.push(basicTypes[c])}else{switch(c){case"P":list.push(parse(true,1,true)[0]+"*");break;case"R":list.push(parse(true,1,true)[0]+"&");break;case"L":{i++;var end=func.indexOf("E",i);var size=end-i;list.push(func.substr(i,size));i+=size+2;break};case"A":{var size=parseInt(func.substr(i));i+=size.toString().length;if(func[i]!=="_")throw"?";i++;list.push(parse(true,1,true)[0]+" ["+size+"]");break};case"E":break paramLoop;default:ret+="?"+c;break paramLoop}}}if(!allowVoid&&list.length===1&&list[0]==="void")list=[];if(rawList){if(ret){list.push(ret+"?")}return list}else{return ret+flushList()}}var parsed=func;try{if(func=="Object._main"||func=="_main"){return"main()"}if(typeof func==="number")func=Pointer_stringify(func);if(func[0]!=="_")return func;if(func[1]!=="_")return func;if(func[2]!=="Z")return func;switch(func[3]){case"n":return"operator new()";case"d":return"operator delete()"}parsed=parse()}catch(e){parsed+="?"}if(parsed.indexOf("?")>=0&&!hasLibcxxabi){Runtime.warnOnce("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling")}return parsed}function demangleAll(text){return text.replace(/__Z[\w\d_]+/g,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function stackTrace(){return demangleAll(jsStackTrace())}Module["stackTrace"]=stackTrace;var PAGE_SIZE=4096;function alignMemoryPage(x){if(x%4096>0){x+=4096-x%4096}return x}var HEAP;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var STATIC_BASE=0,STATICTOP=0,staticSealed=false;var STACK_BASE=0,STACKTOP=0,STACK_MAX=0;var DYNAMIC_BASE=0,DYNAMICTOP=0;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function enlargeMemory(){abortOnCannotGrowMemory()}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||134217728;var totalMemory=64*1024;while(totalMemory<TOTAL_MEMORY||totalMemory<2*TOTAL_STACK){if(totalMemory<16*1024*1024){totalMemory*=2}else{totalMemory+=16*1024*1024}}if(totalMemory!==TOTAL_MEMORY){TOTAL_MEMORY=totalMemory}assert(typeof Int32Array!=="undefined"&&typeof Float64Array!=="undefined"&&!!(new Int32Array(1))["subarray"]&&!!(new Int32Array(1))["set"],"JS engine does not provide full typed array support");var buffer;buffer=new ArrayBuffer(TOTAL_MEMORY);HEAP8=new Int8Array(buffer);HEAP16=new Int16Array(buffer);HEAP32=new Int32Array(buffer);HEAPU8=new Uint8Array(buffer);HEAPU16=new Uint16Array(buffer);HEAPU32=new Uint32Array(buffer);HEAPF32=new Float32Array(buffer);HEAPF64=new Float64Array(buffer);HEAP32[0]=255;assert(HEAPU8[0]===255&&HEAPU8[3]===0,"Typed arrays 2 must be run on a little-endian system");Module["HEAP"]=HEAP;Module["buffer"]=buffer;Module["HEAP8"]=HEAP8;Module["HEAP16"]=HEAP16;Module["HEAP32"]=HEAP32;Module["HEAPU8"]=HEAPU8;Module["HEAPU16"]=HEAPU16;Module["HEAPU32"]=HEAPU32;Module["HEAPF32"]=HEAPF32;Module["HEAPF64"]=HEAPF64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Runtime.dynCall("v",func)}else{Runtime.dynCall("vi",func,[callback.arg])}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}Module["addOnPreRun"]=addOnPreRun;function addOnInit(cb){__ATINIT__.unshift(cb)}Module["addOnInit"]=addOnInit;function addOnPreMain(cb){__ATMAIN__.unshift(cb)}Module["addOnPreMain"]=addOnPreMain;function addOnExit(cb){__ATEXIT__.unshift(cb)}Module["addOnExit"]=addOnExit;function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}Module["addOnPostRun"]=addOnPostRun;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}Module["intArrayFromString"]=intArrayFromString;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}Module["intArrayToString"]=intArrayToString;function writeStringToMemory(string,buffer,dontAddNull){var array=intArrayFromString(string,dontAddNull);var i=0;while(i<array.length){var chr=array[i];HEAP8[buffer+i>>0]=chr;i=i+1}}Module["writeStringToMemory"]=writeStringToMemory;function writeArrayToMemory(array,buffer){for(var i=0;i<array.length;i++){HEAP8[buffer++>>0]=array[i]}}Module["writeArrayToMemory"]=writeArrayToMemory;function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}Module["writeAsciiToMemory"]=writeAsciiToMemory;function unSign(value,bits,ignore){if(value>=0){return value}return bits<=32?2*Math.abs(1<<bits-1)+value:Math.pow(2,bits)+value}function reSign(value,bits,ignore){if(value<=0){return value}var half=bits<=32?Math.abs(1<<bits-1):Math.pow(2,bits-1);if(value>=half&&(bits<=32||value>half)){value=-2*half+value}return value}if(!Math["imul"]||Math["imul"](4294967295,5)!==-5)Math["imul"]=function imul(a,b){var ah=a>>>16;var al=a&65535;var bh=b>>>16;var bl=b&65535;return al*bl+(ah*bl+al*bh<<16)|0};Math.imul=Math["imul"];if(!Math["fround"]){var froundBuffer=new Float32Array(1);Math["fround"]=(function(x){froundBuffer[0]=x;return froundBuffer[0]})}Math.fround=Math["fround"];if(!Math["clz32"])Math["clz32"]=(function(x){x=x>>>0;for(var i=0;i<32;i++){if(x&1<<31-i)return i}return 32});Math.clz32=Math["clz32"];var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_min=Math.min;var Math_clz32=Math.clz32;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}Module["addRunDependency"]=addRunDependency;function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["removeRunDependency"]=removeRunDependency;Module["preloadedImages"]={};Module["preloadedAudios"]={};var memoryInitializer=null;var ASM_CONSTS=[(function($0,$1,$2,$3,$4,$5,$6,$7){{return _nbind.callbackSignatureList[$0].apply(this,arguments)}})];function _emscripten_asm_const_3(code,a0,a1,a2){return ASM_CONSTS[code](a0,a1,a2)}function _emscripten_asm_const_4(code,a0,a1,a2,a3){return ASM_CONSTS[code](a0,a1,a2,a3)}function _emscripten_asm_const_5(code,a0,a1,a2,a3,a4){return ASM_CONSTS[code](a0,a1,a2,a3,a4)}function _emscripten_asm_const_6(code,a0,a1,a2,a3,a4,a5){return ASM_CONSTS[code](a0,a1,a2,a3,a4,a5)}function _emscripten_asm_const_7(code,a0,a1,a2,a3,a4,a5,a6){return ASM_CONSTS[code](a0,a1,a2,a3,a4,a5,a6)}function _emscripten_asm_const_8(code,a0,a1,a2,a3,a4,a5,a6,a7){return ASM_CONSTS[code](a0,a1,a2,a3,a4,a5,a6,a7)}STATIC_BASE=8;STATICTOP=STATIC_BASE+12528;__ATINIT__.push({func:(function(){__GLOBAL__sub_I_nbind_cc()})},{func:(function(){__GLOBAL__sub_I_common_cc()})},{func:(function(){__GLOBAL__sub_I_Binding_cc()})});allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,18,0,0,61,34,0,0,0,2,0,0,0,0,0,0,240,17,0,0,74,34,0,0,240,17,0,0,87,34,0,0,24,18,0,0,100,34,0,0,8,2,0,0,0,0,0,0,24,18,0,0,133,34,0,0,16,2,0,0,0,0,0,0,24,18,0,0,167,34,0,0,32,2,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,3,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,3,0,0,0,0,0,192,127,3,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,192,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,192,127,0,0,0,0,0,0,0,0,255,255,255,255,255,255,255,255,0,0,128,191,0,0,128,191,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,132,6,0,0,132,6,0,0,0,0,0,0,0,0,128,63,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,72,26,0,0,86,26,0,0,98,26,0,0,46,26,0,0,56,26,0,0,64,26,0,0,1,0,0,0,3,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,3,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,28,0,0,41,28,0,0,42,28,0,0,41,28,0,0,42,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,217,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,32,0,0,41,28,0,0,41,28,0,0,41,28,0,0,41,28,0,0,41,28,0,0,41,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,41,28,0,0,41,28,0,0,42,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,220,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,32,8,0,0,3,0,0,0,221,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,8,0,0,222,32,0,0,2,0,0,0,223,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,222,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,84,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,84,8,0,0,222,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,28,0,0,42,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,7,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,32,0,0,42,28,0,0,41,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,32,0,0,42,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,42,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,41,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,42,28,0,0,41,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,42,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,236,10,0,0,3,0,0,0,244,10,0,0,1,0,0,0,223,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,8,0,0,116,11,0,0,2,0,0,0,225,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,220,32,0,0,42,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,42,28,0,0,220,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,116,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,13,0,0,42,28,0,0,41,28,0,0,2,0,0,0,224,32,0,0,4,13,0,0,43,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,68,13,0,0,2,0,0,0,217,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,13,0,0,41,28,0,0,41,28,0,0,2,0,0,0,40,28,0,0,0,0,0,0,0,0,0,0,2,0,0,0,9,0,0,0,10,0,0,0,2,0,0,0,11,0,0,0,160,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,14,0,0,151,33,0,0,65,33,0,0,219,32,0,0,78,33,0,0,220,32,0,0,83,33,0,0,88,33,0,0,89,33,0,0,32,8,0,0,101,33,0,0,72,14,0,0,114,33,0,0,133,33,0,0,134,33,0,0,143,33,0,0,144,33,0,0,0,0,0,0,3,0,0,0,80,14,0,0,1,0,0,0,221,32,0,0,164,33,0,0,165,33,0,0,166,33,0,0,167,33,0,0,168,33,0,0,222,32,0,0,42,28,0,0,169,33,0,0,170,33,0,0,171,33,0,0,172,33,0,0,173,33,0,0,41,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,180,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,12,0,0,0,13,0,0,0,2,0,0,0,14,0,0,0,133,33,0,0,164,33,0,0,181,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,133,33,0,0,164,33,0,0,181,33,0,0,68,15,0,0,7,0,0,0,181,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,133,33,0,0,164,33,0,0,181,33,0,0,222,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,133,33,0,0,164,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,181,33,0,0,68,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,181,33,0,0,172,15,0,0,2,0,0,0,180,15,0,0,1,0,0,0,166,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,181,33,0,0,164,33,0,0,164,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,181,33,0,0,172,15,0,0,222,32,0,0,68,15,0,0,252,15,0,0,7,0,0,0,172,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,32,0,0,222,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,16,0,0,222,32,0,0,2,0,0,0,181,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,222,32,0,0,222,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,222,32,0,0,222,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,133,33,0,0,181,33,0,0,32,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,32,8,0,0,32,8,0,0,32,8,0,0,32,8,0,0,32,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,32,0,0,172,15,0,0,32,8,0,0,128,17,0,0,2,0,0,0,60,34,0,0,0,0,0,0,0,0,0,0,2,0,0,0,15,0,0,0,16,0,0,0,2,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,1,0,0,18,0,0,0,19,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,32,2,0,0,20,0,0,0,21,0,0,0,22,0,0,0,23,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,48,2,0,0,20,0,0,0,24,0,0,0,22,0,0,0,23,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,18,0,0,80,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,209,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,201,42,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,108,105,115,116,0,67,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,105,116,101,109,115,0,67,111,117,108,100,32,110,111,116,32,101,120,116,101,110,100,32,97,108,108,111,99,97,116,105,111,110,32,102,111,114,32,105,116,101,109,115,0,0,0,0,37,115,10,0,67,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,110,111,100,101,0,67,97,110,110,111,116,32,114,101,115,101,116,32,97,32,110,111,100,101,32,119,104,105,99,104,32,115,116,105,108,108,32,104,97,115,32,99,104,105,108,100,114,101,110,32,97,116,116,97,99,104,101,100,0,67,97,110,110,111,116,32,114,101,115,101,116,32,97,32,110,111,100,101,32,115,116,105,108,108,32,97,116,116,97,99,104,101,100,32,116,111,32,97,32,112,97,114,101,110,116,0,67,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,99,111,110,102,105,103,0,67,97,110,110,111,116,32,115,101,116,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,58,32,78,111,100,101,115,32,119,105,116,104,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,115,32,99,97,110,110,111,116,32,104,97,118,101,32,99,104,105,108,100,114,101,110,46,0,67,104,105,108,100,32,97,108,114,101,97,100,121,32,104,97,115,32,97,32,112,97,114,101,110,116,44,32,105,116,32,109,117,115,116,32,98,101,32,114,101,109,111,118,101,100,32,102,105,114,115,116,46,0,67,97,110,110,111,116,32,97,100,100,32,99,104,105,108,100,58,32,78,111,100,101,115,32,119,105,116,104,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,115,32,99,97,110,110,111,116,32,104,97,118,101,32,99,104,105,108,100,114,101,110,46,0,79,110,108,121,32,108,101,97,102,32,110,111,100,101,115,32,119,105,116,104,32,99,117,115,116,111,109,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,115,115,104,111,117,108,100,32,109,97,110,117,97,108,108,121,32,109,97,114,107,32,116,104,101,109,115,101,108,118,101,115,32,97,115,32,100,105,114,116,121,0,67,97,110,110,111,116,32,103,101,116,32,108,97,121,111,117,116,32,112,114,111,112,101,114,116,105,101,115,32,111,102,32,109,117,108,116,105,45,101,100,103,101,32,115,104,111,114,116,104,97,110,100,115,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,37,115,37,100,46,123,91,115,107,105,112,112,101,100,93,32,0,0,119,109,58,32,37,115,44,32,104,109,58,32,37,115,44,32,97,119,58,32,37,102,32,97,104,58,32,37,102,32,61,62,32,100,58,32,40,37,102,44,32,37,102,41,32,37,115,10,0,42,0,37,115,37,100,46,123,37,115,0,119,109,58,32,37,115,44,32,104,109,58,32,37,115,44,32,97,119,58,32,37,102,32,97,104,58,32,37,102,32,37,115,10,0,37,115,37,100,46,125,37,115,0,119,109,58,32,37,115,44,32,104,109,58,32,37,115,44,32,100,58,32,40,37,102,44,32,37,102,41,32,37,115,10,0,79,117,116,32,111,102,32,99,97,99,104,101,32,101,110,116,114,105,101,115,33,0,105,110,105,116,105,97,108,0,97,118,97,105,108,97,98,108,101,87,105,100,116,104,32,105,115,32,105,110,100,101,102,105,110,105,116,101,32,115,111,32,119,105,100,116,104,77,101,97,115,117,114,101,77,111,100,101,32,109,117,115,116,32,98,101,32,89,71,77,101,97,115,117,114,101,77,111,100,101,85,110,100,101,102,105,110,101,100,0,97,118,97,105,108,97,98,108,101,72,101,105,103,104,116,32,105,115,32,105,110,100,101,102,105,110,105,116,101,32,115,111,32,104,101,105,103,104,116,77,101,97,115,117,114,101,77,111,100,101,32,109,117,115,116,32,98,101,32,89,71,77,101,97,115,117,114,101,77,111,100,101,85,110,100,101,102,105,110,101,100,0,109,101,97,115,117,114,101,0,102,108,101,120,0,115,116,114,101,116,99,104,0,109,117,108,116,105,108,105,110,101,45,115,116,114,101,116,99,104,0,97,98,115,45,109,101,97,115,117,114,101,0,97,98,115,45,108,97,121,111,117,116,0,69,120,112,101,99,116,32,99,117,115,116,111,109,32,98,97,115,101,108,105,110,101,32,102,117,110,99,116,105,111,110,32,116,111,32,110,111,116,32,114,101,116,117,114,110,32,78,97,78,0,85,78,68,69,70,73,78,69,68,0,69,88,65,67,84,76,89,0,65,84,95,77,79,83,84,0,76,65,89,95,85,78,68,69,70,73,78,69,68,0,76,65,89,95,69,88,65,67,84,76,89,0,76,65,89,95,65,84,95,77,79,83,84,0,32,32,0,60,100,105,118,32,0,108,97,121,111,117,116,61,34,0,119,105,100,116,104,58,32,37,103,59,32,0,104,101,105,103,104,116,58,32,37,103,59,32,0,116,111,112,58,32,37,103,59,32,0,108,101,102,116,58,32,37,103,59,0,34,32,0,115,116,121,108,101,61,34,0,102,108,101,120,45,100,105,114,101,99,116,105,111,110,58,32,37,115,59,32,0,106,117,115,116,105,102,121,45,99,111,110,116,101,110,116,58,32,37,115,59,32,0,97,108,105,103,110,45,105,116,101,109,115,58,32,37,115,59,32,0,97,108,105,103,110,45,99,111,110,116,101,110,116,58,32,37,115,59,32,0,97,108,105,103,110,45,115,101,108,102,58,32,37,115,59,32,0,37,115,58,32,37,103,59,32,0,102,108,101,120,45,103,114,111,119,0,102,108,101,120,45,115,104,114,105,110,107,0,102,108,101,120,45,98,97,115,105,115,0,102,108,101,120,87,114,97,112,58,32,37,115,59,32,0,111,118,101,114,102,108,111,119,58,32,37,115,59,32,0,100,105,115,112,108,97,121,58,32,37,115,59,32,0,109,97,114,103,105,110,0,112,97,100,100,105,110,103,0,98,111,114,100,101,114,0,119,105,100,116,104,0,104,101,105,103,104,116,0,109,97,120,45,119,105,100,116,104,0,109,97,120,45,104,101,105,103,104,116,0,109,105,110,45,119,105,100,116,104,0,109,105,110,45,104,101,105,103,104,116,0,112,111,115,105,116,105,111,110,58,32,37,115,59,32,0,108,101,102,116,0,114,105,103,104,116,0,116,111,112,0,98,111,116,116,111,109,0,104,97,115,45,99,117,115,116,111,109,45,109,101,97,115,117,114,101,61,34,116,114,117,101,34,0,62,0,10,0,60,47,100,105,118,62,0,37,115,45,37,115,0,37,115,58,32,97,117,116,111,59,32,0,112,120,0,37,0,37,115,58,32,37,103,37,115,59,32,0,0,0,0,103,101,116,73,110,115,116,97,110,99,101,67,111,117,110,116,0,78,111,100,101,0,99,114,101,97,116,101,68,101,102,97,117,108,116,0,99,114,101,97,116,101,87,105,116,104,67,111,110,102,105,103,0,100,101,115,116,114,111,121,0,114,101,115,101,116,0,99,111,112,121,83,116,121,108,101,0,115,101,116,80,111,115,105,116,105,111,110,84,121,112,101,0,115,101,116,80,111,115,105,116,105,111,110,0,115,101,116,80,111,115,105,116,105,111,110,80,101,114,99,101,110,116,0,115,101,116,65,108,105,103,110,67,111,110,116,101,110,116,0,115,101,116,65,108,105,103,110,73,116,101,109,115,0,115,101,116,65,108,105,103,110,83,101,108,102,0,115,101,116,70,108,101,120,68,105,114,101,99,116,105,111,110,0,115,101,116,70,108,101,120,87,114,97,112,0,115,101,116,74,117,115,116,105,102,121,67,111,110,116,101,110,116,0,115,101,116,77,97,114,103,105,110,0,115,101,116,77,97,114,103,105,110,80,101,114,99,101,110,116,0,115,101,116,77,97,114,103,105,110,65,117,116,111,0,115,101,116,79,118,101,114,102,108,111,119,0,115,101,116,68,105,115,112,108,97,121,0,115,101,116,70,108,101,120,0,115,101,116,70,108,101,120,66,97,115,105,115,0,115,101,116,70,108,101,120,66,97,115,105,115,80,101,114,99,101,110,116,0,115,101,116,70,108,101,120,71,114,111,119,0,115,101,116,70,108,101,120,83,104,114,105,110,107,0,115,101,116,87,105,100,116,104,0,115,101,116,87,105,100,116,104,80,101,114,99,101,110,116,0,115,101,116,87,105,100,116,104,65,117,116,111,0,115,101,116,72,101,105,103,104,116,0,115,101,116,72,101,105,103,104,116,80,101,114,99,101,110,116,0,115,101,116,72,101,105,103,104,116,65,117,116,111,0,115,101,116,77,105,110,87,105,100,116,104,0,115,101,116,77,105,110,87,105,100,116,104,80,101,114,99,101,110,116,0,115,101,116,77,105,110,72,101,105,103,104,116,0,115,101,116,77,105,110,72,101,105,103,104,116,80,101,114,99,101,110,116,0,115,101,116,77,97,120,87,105,100,116,104,0,115,101,116,77,97,120,87,105,100,116,104,80,101,114,99,101,110,116,0,115,101,116,77,97,120,72,101,105,103,104,116,0,115,101,116,77,97,120,72,101,105,103,104,116,80,101,114,99,101,110,116,0,115,101,116,65,115,112,101,99,116,82,97,116,105,111,0,115,101,116,66,111,114,100,101,114,0,115,101,116,80,97,100,100,105,110,103,0,115,101,116,80,97,100,100,105,110,103,80,101,114,99,101,110,116,0,103,101,116,80,111,115,105,116,105,111,110,84,121,112,101,0,103,101,116,80,111,115,105,116,105,111,110,0,103,101,116,65,108,105,103,110,67,111,110,116,101,110,116,0,103,101,116,65,108,105,103,110,73,116,101,109,115,0,103,101,116,65,108,105,103,110,83,101,108,102,0,103,101,116,70,108,101,120,68,105,114,101,99,116,105,111,110,0,103,101,116,70,108,101,120,87,114,97,112,0,103,101,116,74,117,115,116,105,102,121,67,111,110,116,101,110,116,0,103,101,116,77,97,114,103,105,110,0,103,101,116,70,108,101,120,66,97,115,105,115,0,103,101,116,70,108,101,120,71,114,111,119,0,103,101,116,70,108,101,120,83,104,114,105,110,107,0,103,101,116,87,105,100,116,104,0,103,101,116,72,101,105,103,104,116,0,103,101,116,77,105,110,87,105,100,116,104,0,103,101,116,77,105,110,72,101,105,103,104,116,0,103,101,116,77,97,120,87,105,100,116,104,0,103,101,116,77,97,120,72,101,105,103,104,116,0,103,101,116,65,115,112,101,99,116,82,97,116,105,111,0,103,101,116,66,111,114,100,101,114,0,103,101,116,79,118,101,114,102,108,111,119,0,103,101,116,68,105,115,112,108,97,121,0,103,101,116,80,97,100,100,105,110,103,0,105,110,115,101,114,116,67,104,105,108,100,0,114,101,109,111,118,101,67,104,105,108,100,0,103,101,116,67,104,105,108,100,67,111,117,110,116,0,103,101,116,80,97,114,101,110,116,0,103,101,116,67,104,105,108,100,0,115,101,116,77,101,97,115,117,114,101,70,117,110,99,0,117,110,115,101,116,77,101,97,115,117,114,101,70,117,110,99,0,109,97,114,107,68,105,114,116,121,0,105,115,68,105,114,116,121,0,99,97,108,99,117,108,97,116,101,76,97,121,111,117,116,0,103,101,116,67,111,109,112,117,116,101,100,76,101,102,116,0,103,101,116,67,111,109,112,117,116,101,100,82,105,103,104,116,0,103,101,116,67,111,109,112,117,116,101,100,84,111,112,0,103,101,116,67,111,109,112,117,116,101,100,66,111,116,116,111,109,0,103,101,116,67,111,109,112,117,116,101,100,87,105,100,116,104,0,103,101,116,67,111,109,112,117,116,101,100,72,101,105,103,104,116,0,103,101,116,67,111,109,112,117,116,101,100,76,97,121,111,117,116,0,103,101,116,67,111,109,112,117,116,101,100,77,97,114,103,105,110,0,103,101,116,67,111,109,112,117,116,101,100,66,111,114,100,101,114,0,103,101,116,67,111,109,112,117,116,101,100,80,97,100,100,105,110,103,0,0,0,0,0,0,0,0,0,0,67,111,110,102,105,103,0,99,114,101,97,116,101,0,115,101,116,69,120,112,101,114,105,109,101,110,116,97,108,70,101,97,116,117,114,101,69,110,97,98,108,101,100,0,105,115,69,120,112,101,114,105,109,101,110,116,97,108,70,101,97,116,117,114,101,69,110,97,98,108,101,100,0,86,97,108,117,101,0,76,97,121,111,117,116,0,83,105,122,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,118,111,105,100,0,98,111,111,108,0,0,115,116,100,58,58,115,116,114,105,110,103,0,99,98,70,117,110,99,116,105,111,110,32,38,0,99,111,110,115,116,32,99,98,70,117,110,99,116,105,111,110,32,38,0,0,69,120,116,101,114,110,97,108,0,0,66,117,102,102,101,114,0,1,1,1,2,2,4,4,4,4,8,8,4,8,0,0,0,0,0,0,0,0,0,0,73,110,116,54,52,0,0,0,95,110,98,105,110,100,95,110,101,119,0,123,114,101,116,117,114,110,40,95,110,98,105,110,100,46,99,97,108,108,98,97,99,107,83,105,103,110,97,116,117,114,101,76,105,115,116,91,36,48,93,46,97,112,112,108,121,40,116,104,105,115,44,97,114,103,117,109,101,110,116,115,41,41,59,125,0,78,66,105,110,100,73,68,0,78,66,105,110,100,0,98,105,110,100,95,118,97,108,117,101,0,114,101,102,108,101,99,116,0,113,117,101,114,121,84,121,112,101,0,108,97,108,108,111,99,0,108,114,101,115,101,116,0,0,83,116,57,98,97,100,95,97,108,108,111,99,0,83,116,57,101,120,99,101,112,116,105,111,110,0,83,116,57,116,121,112,101,95,105,110,102,111,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,33,34,118,101,99,116,111,114,32,108,101,110,103,116,104,95,101,114,114,111,114,34,0,47,85,115,101,114,115,47,101,109,105,108,115,106,47,68,111,99,117,109,101,110,116,115,47,101,109,115,100,107,95,112,111,114,116,97,98,108,101,47,101,109,115,99,114,105,112,116,101,110,47,49,46,51,53,46,48,47,115,121,115,116,101,109,47,105,110,99,108,117,100,101,47,108,105,98,99,120,120,47,118,101,99,116,111,114,0,95,95,116,104,114,111,119,95,108,101,110,103,116,104,95,101,114,114,111,114,0,115,116,100,58,58,98,97,100,95,97,108,108,111,99,0,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);allocate([111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE+10240);allocate([17,0,10,0,17,17,17,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,15,10,17,17,17,3,10,7,0,1,19,9,11,11,0,0,9,6,11,0,0,11,0,6,17,0,0,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,10,10,17,17,17,0,10,0,0,2,0,9,11,0,0,0,9,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,13,0,0,0,0,9,14,0,0,0,0,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,10,0,0,0,0,9,11,0,0,0,0,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,45,43,32,32,32,48,88,48,120,0,40,110,117,108,108,41,0,45,48,88,43,48,88,32,48,88,45,48,120,43,48,120,32,48,120,0,105,110,102,0,73,78,70,0,110,97,110,0,78,65,78,0,46,0],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE+11977);var tempDoublePtr=Runtime.alignMemory(allocate(12,"i8",ALLOC_STATIC),8);assert(tempDoublePtr%8==0);function copyTempFloat(ptr){HEAP8[tempDoublePtr]=HEAP8[ptr];HEAP8[tempDoublePtr+1]=HEAP8[ptr+1];HEAP8[tempDoublePtr+2]=HEAP8[ptr+2];HEAP8[tempDoublePtr+3]=HEAP8[ptr+3]}function copyTempDouble(ptr){HEAP8[tempDoublePtr]=HEAP8[ptr];HEAP8[tempDoublePtr+1]=HEAP8[ptr+1];HEAP8[tempDoublePtr+2]=HEAP8[ptr+2];HEAP8[tempDoublePtr+3]=HEAP8[ptr+3];HEAP8[tempDoublePtr+4]=HEAP8[ptr+4];HEAP8[tempDoublePtr+5]=HEAP8[ptr+5];HEAP8[tempDoublePtr+6]=HEAP8[ptr+6];HEAP8[tempDoublePtr+7]=HEAP8[ptr+7]}function _atexit(func,arg){__ATEXIT__.unshift({func:func,arg:arg})}function ___cxa_atexit(){return _atexit.apply(null,arguments)}Module["_i64Subtract"]=_i64Subtract;var _fabsf=Math_abs;Module["_i64Add"]=_i64Add;function _pthread_cleanup_pop(){assert(_pthread_cleanup_push.level==__ATEXIT__.length,"cannot pop if something else added meanwhile!");__ATEXIT__.pop();_pthread_cleanup_push.level=__ATEXIT__.length}function __ZSt18uncaught_exceptionv(){return!!__ZSt18uncaught_exceptionv.uncaught_exception}var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:(function(adjusted){if(!adjusted||EXCEPTIONS.infos[adjusted])return adjusted;for(var ptr in EXCEPTIONS.infos){var info=EXCEPTIONS.infos[ptr];if(info.adjusted===adjusted){return ptr}}return adjusted}),addRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount++}),decRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];assert(info.refcount>0);info.refcount--;if(info.refcount===0){if(info.destructor){Runtime.dynCall("vi",info.destructor,[ptr])}delete EXCEPTIONS.infos[ptr];___cxa_free_exception(ptr)}}),clearRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount=0})};function ___resumeException(ptr){if(!EXCEPTIONS.last){EXCEPTIONS.last=ptr}EXCEPTIONS.clearRef(EXCEPTIONS.deAdjust(ptr));throw ptr+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function ___cxa_find_matching_catch(){var thrown=EXCEPTIONS.last;if(!thrown){return(asm["setTempRet0"](0),0)|0}var info=EXCEPTIONS.infos[thrown];var throwntype=info.type;if(!throwntype){return(asm["setTempRet0"](0),thrown)|0}var typeArray=Array.prototype.slice.call(arguments);var pointer=Module["___cxa_is_pointer_type"](throwntype);if(!___cxa_find_matching_catch.buffer)___cxa_find_matching_catch.buffer=_malloc(4);HEAP32[___cxa_find_matching_catch.buffer>>2]=thrown;thrown=___cxa_find_matching_catch.buffer;for(var i=0;i<typeArray.length;i++){if(typeArray[i]&&Module["___cxa_can_catch"](typeArray[i],throwntype,thrown)){thrown=HEAP32[thrown>>2];info.adjusted=thrown;return(asm["setTempRet0"](typeArray[i]),thrown)|0}}thrown=HEAP32[thrown>>2];return(asm["setTempRet0"](throwntype),thrown)|0}function ___cxa_throw(ptr,type,destructor){EXCEPTIONS.infos[ptr]={ptr:ptr,adjusted:ptr,type:type,destructor:destructor,refcount:0};EXCEPTIONS.last=ptr;if(!("uncaught_exception"in __ZSt18uncaught_exceptionv)){__ZSt18uncaught_exceptionv.uncaught_exception=1}else{__ZSt18uncaught_exceptionv.uncaught_exception++}throw ptr+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}Module["_memset"]=_memset;var _BDtoILow=true;function __decorate(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r}function _defineHidden(value){return(function(target,key){Object.defineProperty(target,key,{configurable:false,enumerable:false,value:value,writable:true})})}var _nbind={};function __nbind_register_primitive(id,size,flags){var spec={flags:1024|flags,id:id,ptrSize:size};_nbind.makeType(_nbind.constructType,spec)}Module["_bitshift64Shl"]=_bitshift64Shl;function _abort(){Module["abort"]()}function _YGPositionTypeToString(){Module["printErr"]("missing function: YGPositionTypeToString");abort(-1)}function __nbind_free_external(num){_nbind.externalList[num].dereference(num)}function _YGWrapToString(){Module["printErr"]("missing function: YGWrapToString");abort(-1)}function __nbind_reference_external(num){_nbind.externalList[num].reference()}function ___assert_fail(condition,filename,line,func){ABORT=true;throw"Assertion failed: "+Pointer_stringify(condition)+", at: "+[filename?Pointer_stringify(filename):"unknown filename",line,func?Pointer_stringify(func):"unknown function"]+" at "+stackTrace()}function _YGFlexDirectionToString(){Module["printErr"]("missing function: YGFlexDirectionToString");abort(-1)}function _YGJustifyToString(){Module["printErr"]("missing function: YGJustifyToString");abort(-1)}var _emscripten_asm_const_int=true;function __nbind_register_pool(pageSize,usedPtr,rootPtr,pagePtr){_nbind.Pool.pageSize=pageSize;_nbind.Pool.usedPtr=usedPtr/4;_nbind.Pool.rootPtr=rootPtr;_nbind.Pool.pagePtr=pagePtr/4;HEAP32[usedPtr/4]=16909060;if(HEAP8[usedPtr]==1)_nbind.bigEndian=true;HEAP32[usedPtr/4]=0;_nbind.makeTypeKindTbl=(_a={},_a[1024]=_nbind.PrimitiveType,_a[64]=_nbind.Int64Type,_a[2048]=_nbind.BindClass,_a[3072]=_nbind.BindClassPtr,_a[4096]=_nbind.SharedClassPtr,_a[5120]=_nbind.ArrayType,_a[6144]=_nbind.ArrayType,_a[7168]=_nbind.CStringType,_a[9216]=_nbind.CallbackType,_a[10240]=_nbind.BindType,_a);_nbind.makeTypeNameTbl={"Buffer":_nbind.BufferType,"External":_nbind.ExternalType,"Int64":_nbind.Int64Type,"_nbind_new":_nbind.CreateValueType,"bool":_nbind.BooleanType,"cbFunction &":_nbind.CallbackType,"const cbFunction &":_nbind.CallbackType,"const std::string &":_nbind.StringType,"std::string":_nbind.StringType};Module["toggleLightGC"]=_nbind.toggleLightGC;_nbind.callUpcast=Module["dynCall_ii"];var globalScope=_nbind.makeType(_nbind.constructType,{flags:2048,id:0,name:""});globalScope.proto=Module;_nbind.BindClass.list.push(globalScope);var _a}var PATH=undefined;function _emscripten_set_main_loop_timing(mode,value){Browser.mainLoop.timingMode=mode;Browser.mainLoop.timingValue=value;if(!Browser.mainLoop.func){return 1}if(mode==0){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setTimeout(){setTimeout(Browser.mainLoop.runner,value)};Browser.mainLoop.method="timeout"}else if(mode==1){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_rAF(){Browser.requestAnimationFrame(Browser.mainLoop.runner)};Browser.mainLoop.method="rAF"}else if(mode==2){if(!window["setImmediate"]){var setImmediates=[];var emscriptenMainLoopMessageId="__emcc";function Browser_setImmediate_messageHandler(event){if(event.source===window&&event.data===emscriptenMainLoopMessageId){event.stopPropagation();setImmediates.shift()()}}window.addEventListener("message",Browser_setImmediate_messageHandler,true);window["setImmediate"]=function Browser_emulated_setImmediate(func){setImmediates.push(func);window.postMessage(emscriptenMainLoopMessageId,"*")}}Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setImmediate(){window["setImmediate"](Browser.mainLoop.runner)};Browser.mainLoop.method="immediate"}return 0}function _emscripten_set_main_loop(func,fps,simulateInfiniteLoop,arg,noSetTiming){Module["noExitRuntime"]=true;assert(!Browser.mainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Browser.mainLoop.func=func;Browser.mainLoop.arg=arg;var thisMainLoopId=Browser.mainLoop.currentlyRunningMainloop;Browser.mainLoop.runner=function Browser_mainLoop_runner(){if(ABORT)return;if(Browser.mainLoop.queue.length>0){var start=Date.now();var blocker=Browser.mainLoop.queue.shift();blocker.func(blocker.arg);if(Browser.mainLoop.remainingBlockers){var remaining=Browser.mainLoop.remainingBlockers;var next=remaining%1==0?remaining-1:Math.floor(remaining);if(blocker.counted){Browser.mainLoop.remainingBlockers=next}else{next=next+.5;Browser.mainLoop.remainingBlockers=(8*remaining+next)/9}}console.log('main loop blocker "'+blocker.name+'" took '+(Date.now()-start)+" ms");Browser.mainLoop.updateStatus();setTimeout(Browser.mainLoop.runner,0);return}if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop)return;Browser.mainLoop.currentFrameNumber=Browser.mainLoop.currentFrameNumber+1|0;if(Browser.mainLoop.timingMode==1&&Browser.mainLoop.timingValue>1&&Browser.mainLoop.currentFrameNumber%Browser.mainLoop.timingValue!=0){Browser.mainLoop.scheduler();return}if(Browser.mainLoop.method==="timeout"&&Module.ctx){Module.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");Browser.mainLoop.method=""}Browser.mainLoop.runIter((function(){if(typeof arg!=="undefined"){Runtime.dynCall("vi",func,[arg])}else{Runtime.dynCall("v",func)}}));if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop)return;if(typeof SDL==="object"&&SDL.audio&&SDL.audio.queueNewAudioData)SDL.audio.queueNewAudioData();Browser.mainLoop.scheduler()};if(!noSetTiming){if(fps&&fps>0)_emscripten_set_main_loop_timing(0,1e3/fps);else _emscripten_set_main_loop_timing(1,1);Browser.mainLoop.scheduler()}if(simulateInfiniteLoop){throw"SimulateInfiniteLoop"}}var Browser={mainLoop:{scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:(function(){Browser.mainLoop.scheduler=null;Browser.mainLoop.currentlyRunningMainloop++}),resume:(function(){Browser.mainLoop.currentlyRunningMainloop++;var timingMode=Browser.mainLoop.timingMode;var timingValue=Browser.mainLoop.timingValue;var func=Browser.mainLoop.func;Browser.mainLoop.func=null;_emscripten_set_main_loop(func,0,false,Browser.mainLoop.arg,true);_emscripten_set_main_loop_timing(timingMode,timingValue);Browser.mainLoop.scheduler()}),updateStatus:(function(){if(Module["setStatus"]){var message=Module["statusMessage"]||"Please wait...";var remaining=Browser.mainLoop.remainingBlockers;var expected=Browser.mainLoop.expectedBlockers;if(remaining){if(remaining<expected){Module["setStatus"](message+" ("+(expected-remaining)+"/"+expected+")")}else{Module["setStatus"](message)}}else{Module["setStatus"]("")}}}),runIter:(function(func){if(ABORT)return;if(Module["preMainLoop"]){var preRet=Module["preMainLoop"]();if(preRet===false){return}}try{func()}catch(e){if(e instanceof ExitStatus){return}else{if(e&&typeof e==="object"&&e.stack)Module.printErr("exception thrown: "+[e,e.stack]);throw e}}if(Module["postMainLoop"])Module["postMainLoop"]()})},isFullScreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:(function(){if(!Module["preloadPlugins"])Module["preloadPlugins"]=[];if(Browser.initted)return;Browser.initted=true;try{new Blob;Browser.hasBlobConstructor=true}catch(e){Browser.hasBlobConstructor=false;console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Browser.BlobBuilder=typeof MozBlobBuilder!="undefined"?MozBlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:!Browser.hasBlobConstructor?console.log("warning: no BlobBuilder"):null;Browser.URLObject=typeof window!="undefined"?window.URL?window.URL:window.webkitURL:undefined;if(!Module.noImageDecoding&&typeof Browser.URLObject==="undefined"){console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");Module.noImageDecoding=true}var imagePlugin={};imagePlugin["canHandle"]=function imagePlugin_canHandle(name){return!Module.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(name)};imagePlugin["handle"]=function imagePlugin_handle(byteArray,name,onload,onerror){var b=null;if(Browser.hasBlobConstructor){try{b=new Blob([byteArray],{type:Browser.getMimetype(name)});if(b.size!==byteArray.length){b=new Blob([(new Uint8Array(byteArray)).buffer],{type:Browser.getMimetype(name)})}}catch(e){Runtime.warnOnce("Blob constructor present but fails: "+e+"; falling back to blob builder")}}if(!b){var bb=new Browser.BlobBuilder;bb.append((new Uint8Array(byteArray)).buffer);b=bb.getBlob()}var url=Browser.URLObject.createObjectURL(b);var img=new Image;img.onload=function img_onload(){assert(img.complete,"Image "+name+" could not be decoded");var canvas=document.createElement("canvas");canvas.width=img.width;canvas.height=img.height;var ctx=canvas.getContext("2d");ctx.drawImage(img,0,0);Module["preloadedImages"][name]=canvas;Browser.URLObject.revokeObjectURL(url);if(onload)onload(byteArray)};img.onerror=function img_onerror(event){console.log("Image "+url+" could not be decoded");if(onerror)onerror()};img.src=url};Module["preloadPlugins"].push(imagePlugin);var audioPlugin={};audioPlugin["canHandle"]=function audioPlugin_canHandle(name){return!Module.noAudioDecoding&&name.substr(-4)in{".ogg":1,".wav":1,".mp3":1}};audioPlugin["handle"]=function audioPlugin_handle(byteArray,name,onload,onerror){var done=false;function finish(audio){if(done)return;done=true;Module["preloadedAudios"][name]=audio;if(onload)onload(byteArray)}function fail(){if(done)return;done=true;Module["preloadedAudios"][name]=new Audio;if(onerror)onerror()}if(Browser.hasBlobConstructor){try{var b=new Blob([byteArray],{type:Browser.getMimetype(name)})}catch(e){return fail()}var url=Browser.URLObject.createObjectURL(b);var audio=new Audio;audio.addEventListener("canplaythrough",(function(){finish(audio)}),false);audio.onerror=function audio_onerror(event){if(done)return;console.log("warning: browser could not fully decode audio "+name+", trying slower base64 approach");function encode64(data){var BASE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var PAD="=";var ret="";var leftchar=0;var leftbits=0;for(var i=0;i<data.length;i++){leftchar=leftchar<<8|data[i];leftbits+=8;while(leftbits>=6){var curr=leftchar>>leftbits-6&63;leftbits-=6;ret+=BASE[curr]}}if(leftbits==2){ret+=BASE[(leftchar&3)<<4];ret+=PAD+PAD}else if(leftbits==4){ret+=BASE[(leftchar&15)<<2];ret+=PAD}return ret}audio.src="data:audio/x-"+name.substr(-3)+";base64,"+encode64(byteArray);finish(audio)};audio.src=url;Browser.safeSetTimeout((function(){finish(audio)}),1e4)}else{return fail()}};Module["preloadPlugins"].push(audioPlugin);var canvas=Module["canvas"];function pointerLockChange(){Browser.pointerLock=document["pointerLockElement"]===canvas||document["mozPointerLockElement"]===canvas||document["webkitPointerLockElement"]===canvas||document["msPointerLockElement"]===canvas}if(canvas){canvas.requestPointerLock=canvas["requestPointerLock"]||canvas["mozRequestPointerLock"]||canvas["webkitRequestPointerLock"]||canvas["msRequestPointerLock"]||(function(){});canvas.exitPointerLock=document["exitPointerLock"]||document["mozExitPointerLock"]||document["webkitExitPointerLock"]||document["msExitPointerLock"]||(function(){});canvas.exitPointerLock=canvas.exitPointerLock.bind(document);document.addEventListener("pointerlockchange",pointerLockChange,false);document.addEventListener("mozpointerlockchange",pointerLockChange,false);document.addEventListener("webkitpointerlockchange",pointerLockChange,false);document.addEventListener("mspointerlockchange",pointerLockChange,false);if(Module["elementPointerLock"]){canvas.addEventListener("click",(function(ev){if(!Browser.pointerLock&&canvas.requestPointerLock){canvas.requestPointerLock();ev.preventDefault()}}),false)}}}),createContext:(function(canvas,useWebGL,setInModule,webGLContextAttributes){if(useWebGL&&Module.ctx&&canvas==Module.canvas)return Module.ctx;var ctx;var contextHandle;if(useWebGL){var contextAttributes={antialias:false,alpha:false};if(webGLContextAttributes){for(var attribute in webGLContextAttributes){contextAttributes[attribute]=webGLContextAttributes[attribute]}}contextHandle=GL.createContext(canvas,contextAttributes);if(contextHandle){ctx=GL.getContext(contextHandle).GLctx}canvas.style.backgroundColor="black"}else{ctx=canvas.getContext("2d")}if(!ctx)return null;if(setInModule){if(!useWebGL)assert(typeof GLctx==="undefined","cannot set in module if GLctx is used, but we are a non-GL context that would replace it");Module.ctx=ctx;if(useWebGL)GL.makeContextCurrent(contextHandle);Module.useWebGL=useWebGL;Browser.moduleContextCreatedCallbacks.forEach((function(callback){callback()}));Browser.init()}return ctx}),destroyContext:(function(canvas,useWebGL,setInModule){}),fullScreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullScreen:(function(lockPointer,resizeCanvas,vrDevice){Browser.lockPointer=lockPointer;Browser.resizeCanvas=resizeCanvas;Browser.vrDevice=vrDevice;if(typeof Browser.lockPointer==="undefined")Browser.lockPointer=true;if(typeof Browser.resizeCanvas==="undefined")Browser.resizeCanvas=false;if(typeof Browser.vrDevice==="undefined")Browser.vrDevice=null;var canvas=Module["canvas"];function fullScreenChange(){Browser.isFullScreen=false;var canvasContainer=canvas.parentNode;if((document["webkitFullScreenElement"]||document["webkitFullscreenElement"]||document["mozFullScreenElement"]||document["mozFullscreenElement"]||document["fullScreenElement"]||document["fullscreenElement"]||document["msFullScreenElement"]||document["msFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvasContainer){canvas.cancelFullScreen=document["cancelFullScreen"]||document["mozCancelFullScreen"]||document["webkitCancelFullScreen"]||document["msExitFullscreen"]||document["exitFullscreen"]||(function(){});canvas.cancelFullScreen=canvas.cancelFullScreen.bind(document);if(Browser.lockPointer)canvas.requestPointerLock();Browser.isFullScreen=true;if(Browser.resizeCanvas)Browser.setFullScreenCanvasSize()}else{canvasContainer.parentNode.insertBefore(canvas,canvasContainer);canvasContainer.parentNode.removeChild(canvasContainer);if(Browser.resizeCanvas)Browser.setWindowedCanvasSize()}if(Module["onFullScreen"])Module["onFullScreen"](Browser.isFullScreen);Browser.updateCanvasDimensions(canvas)}if(!Browser.fullScreenHandlersInstalled){Browser.fullScreenHandlersInstalled=true;document.addEventListener("fullscreenchange",fullScreenChange,false);document.addEventListener("mozfullscreenchange",fullScreenChange,false);document.addEventListener("webkitfullscreenchange",fullScreenChange,false);document.addEventListener("MSFullscreenChange",fullScreenChange,false)}var canvasContainer=document.createElement("div");canvas.parentNode.insertBefore(canvasContainer,canvas);canvasContainer.appendChild(canvas);canvasContainer.requestFullScreen=canvasContainer["requestFullScreen"]||canvasContainer["mozRequestFullScreen"]||canvasContainer["msRequestFullscreen"]||(canvasContainer["webkitRequestFullScreen"]?(function(){canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"])}):null);if(vrDevice){canvasContainer.requestFullScreen({vrDisplay:vrDevice})}else{canvasContainer.requestFullScreen()}}),nextRAF:0,fakeRequestAnimationFrame:(function(func){var now=Date.now();if(Browser.nextRAF===0){Browser.nextRAF=now+1e3/60}else{while(now+2>=Browser.nextRAF){Browser.nextRAF+=1e3/60}}var delay=Math.max(Browser.nextRAF-now,0);setTimeout(func,delay)}),requestAnimationFrame:function requestAnimationFrame(func){if(typeof window==="undefined"){Browser.fakeRequestAnimationFrame(func)}else{if(!window.requestAnimationFrame){window.requestAnimationFrame=window["requestAnimationFrame"]||window["mozRequestAnimationFrame"]||window["webkitRequestAnimationFrame"]||window["msRequestAnimationFrame"]||window["oRequestAnimationFrame"]||Browser.fakeRequestAnimationFrame}window.requestAnimationFrame(func)}},safeCallback:(function(func){return(function(){if(!ABORT)return func.apply(null,arguments)})}),allowAsyncCallbacks:true,queuedAsyncCallbacks:[],pauseAsyncCallbacks:(function(){Browser.allowAsyncCallbacks=false}),resumeAsyncCallbacks:(function(){Browser.allowAsyncCallbacks=true;if(Browser.queuedAsyncCallbacks.length>0){var callbacks=Browser.queuedAsyncCallbacks;Browser.queuedAsyncCallbacks=[];callbacks.forEach((function(func){func()}))}}),safeRequestAnimationFrame:(function(func){return Browser.requestAnimationFrame((function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}else{Browser.queuedAsyncCallbacks.push(func)}}))}),safeSetTimeout:(function(func,timeout){Module["noExitRuntime"]=true;return setTimeout((function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}else{Browser.queuedAsyncCallbacks.push(func)}}),timeout)}),safeSetInterval:(function(func,timeout){Module["noExitRuntime"]=true;return setInterval((function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}}),timeout)}),getMimetype:(function(name){return{"jpg":"image/jpeg","jpeg":"image/jpeg","png":"image/png","bmp":"image/bmp","ogg":"audio/ogg","wav":"audio/wav","mp3":"audio/mpeg"}[name.substr(name.lastIndexOf(".")+1)]}),getUserMedia:(function(func){if(!window.getUserMedia){window.getUserMedia=navigator["getUserMedia"]||navigator["mozGetUserMedia"]}window.getUserMedia(func)}),getMovementX:(function(event){return event["movementX"]||event["mozMovementX"]||event["webkitMovementX"]||0}),getMovementY:(function(event){return event["movementY"]||event["mozMovementY"]||event["webkitMovementY"]||0}),getMouseWheelDelta:(function(event){var delta=0;switch(event.type){case"DOMMouseScroll":delta=event.detail;break;case"mousewheel":delta=event.wheelDelta;break;case"wheel":delta=event["deltaY"];break;default:throw"unrecognized mouse wheel event: "+event.type}return delta}),mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:(function(event){if(Browser.pointerLock){if(event.type!="mousemove"&&"mozMovementX"in event){Browser.mouseMovementX=Browser.mouseMovementY=0}else{Browser.mouseMovementX=Browser.getMovementX(event);Browser.mouseMovementY=Browser.getMovementY(event)}if(typeof SDL!="undefined"){Browser.mouseX=SDL.mouseX+Browser.mouseMovementX;Browser.mouseY=SDL.mouseY+Browser.mouseMovementY}else{Browser.mouseX+=Browser.mouseMovementX;Browser.mouseY+=Browser.mouseMovementY}}else{var rect=Module["canvas"].getBoundingClientRect();var cw=Module["canvas"].width;var ch=Module["canvas"].height;var scrollX=typeof window.scrollX!=="undefined"?window.scrollX:window.pageXOffset;var scrollY=typeof window.scrollY!=="undefined"?window.scrollY:window.pageYOffset;if(event.type==="touchstart"||event.type==="touchend"||event.type==="touchmove"){var touch=event.touch;if(touch===undefined){return}var adjustedX=touch.pageX-(scrollX+rect.left);var adjustedY=touch.pageY-(scrollY+rect.top);adjustedX=adjustedX*(cw/rect.width);adjustedY=adjustedY*(ch/rect.height);var coords={x:adjustedX,y:adjustedY};if(event.type==="touchstart"){Browser.lastTouches[touch.identifier]=coords;Browser.touches[touch.identifier]=coords}else if(event.type==="touchend"||event.type==="touchmove"){var last=Browser.touches[touch.identifier];if(!last)last=coords;Browser.lastTouches[touch.identifier]=last;Browser.touches[touch.identifier]=coords}return}var x=event.pageX-(scrollX+rect.left);var y=event.pageY-(scrollY+rect.top);x=x*(cw/rect.width);y=y*(ch/rect.height);Browser.mouseMovementX=x-Browser.mouseX;Browser.mouseMovementY=y-Browser.mouseY;Browser.mouseX=x;Browser.mouseY=y}}),xhrLoad:(function(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response)}else{onerror()}};xhr.onerror=onerror;xhr.send(null)}),asyncLoad:(function(url,onload,onerror,noRunDep){Browser.xhrLoad(url,(function(arrayBuffer){assert(arrayBuffer,'Loading data file "'+url+'" failed (no arrayBuffer).');onload(new Uint8Array(arrayBuffer));if(!noRunDep)removeRunDependency("al "+url)}),(function(event){if(onerror){onerror()}else{throw'Loading data file "'+url+'" failed.'}}));if(!noRunDep)addRunDependency("al "+url)}),resizeListeners:[],updateResizeListeners:(function(){var canvas=Module["canvas"];Browser.resizeListeners.forEach((function(listener){listener(canvas.width,canvas.height)}))}),setCanvasSize:(function(width,height,noUpdates){var canvas=Module["canvas"];Browser.updateCanvasDimensions(canvas,width,height);if(!noUpdates)Browser.updateResizeListeners()}),windowedWidth:0,windowedHeight:0,setFullScreenCanvasSize:(function(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen+Runtime.QUANTUM_SIZE*0>>2];flags=flags|8388608;HEAP32[SDL.screen+Runtime.QUANTUM_SIZE*0>>2]=flags}Browser.updateResizeListeners()}),setWindowedCanvasSize:(function(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen+Runtime.QUANTUM_SIZE*0>>2];flags=flags&~8388608;HEAP32[SDL.screen+Runtime.QUANTUM_SIZE*0>>2]=flags}Browser.updateResizeListeners()}),updateCanvasDimensions:(function(canvas,wNative,hNative){if(wNative&&hNative){canvas.widthNative=wNative;canvas.heightNative=hNative}else{wNative=canvas.widthNative;hNative=canvas.heightNative}var w=wNative;var h=hNative;if(Module["forcedAspectRatio"]&&Module["forcedAspectRatio"]>0){if(w/h<Module["forcedAspectRatio"]){w=Math.round(h*Module["forcedAspectRatio"])}else{h=Math.round(w/Module["forcedAspectRatio"])}}if((document["webkitFullScreenElement"]||document["webkitFullscreenElement"]||document["mozFullScreenElement"]||document["mozFullscreenElement"]||document["fullScreenElement"]||document["fullscreenElement"]||document["msFullScreenElement"]||document["msFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvas.parentNode&&typeof screen!="undefined"){var factor=Math.min(screen.width/w,screen.height/h);w=Math.round(w*factor);h=Math.round(h*factor)}if(Browser.resizeCanvas){if(canvas.width!=w)canvas.width=w;if(canvas.height!=h)canvas.height=h;if(typeof canvas.style!="undefined"){canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}else{if(canvas.width!=wNative)canvas.width=wNative;if(canvas.height!=hNative)canvas.height=hNative;if(typeof canvas.style!="undefined"){if(w!=wNative||h!=hNative){canvas.style.setProperty("width",w+"px","important");canvas.style.setProperty("height",h+"px","important")}else{canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}}}),wgetRequests:{},nextWgetRequestHandle:0,getNextWgetRequestHandle:(function(){var handle=Browser.nextWgetRequestHandle;Browser.nextWgetRequestHandle++;return handle})};var SYSCALLS={varargs:0,get:(function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret}),getStr:(function(){var ret=Pointer_stringify(SYSCALLS.get());return ret}),get64:(function(){var low=SYSCALLS.get(),high=SYSCALLS.get();if(low>=0)assert(high===0);else assert(high===-1);return low}),getZero:(function(){assert(SYSCALLS.get()===0)})};function ___syscall6(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD();FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function _malloc(bytes){var ptr=Runtime.dynamicAlloc(bytes+8);return ptr+8&4294967288}Module["_malloc"]=_malloc;function ___cxa_allocate_exception(size){return _malloc(size)}function ___syscall54(which,varargs){SYSCALLS.varargs=varargs;try{return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _sysconf(name){switch(name){case 30:return PAGE_SIZE;case 85:return totalMemory/PAGE_SIZE;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;case 79:return 0;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1e3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:{if(typeof navigator==="object")return navigator["hardwareConcurrency"]||1;return 1}}___setErrNo(ERRNO_CODES.EINVAL);return-1}Module["_bitshift64Lshr"]=_bitshift64Lshr;function _typeModule(self){var structureList=[[0,1,"X"],[1,1,"const X"],[128,1,"X *"],[256,1,"X &"],[384,1,"X &&"],[512,1,"std::shared_ptr<X>"],[640,1,"std::unique_ptr<X>"],[5120,1,"std::vector<X>"],[6144,2,"std::array<X, Y>"],[9216,-1,"std::function<X (Y)>"]];function applyStructure(outerName,outerFlags,innerName,innerFlags,param,flip){if(outerFlags==1){var ref=innerFlags&896;if(ref==128||ref==256||ref==384)outerName="X const"}var name;if(flip){name=innerName.replace("X",outerName).replace("Y",param)}else{name=outerName.replace("X",innerName).replace("Y",param)}return name.replace(/([*&]) (?=[*&])/g,"$1")}function reportProblem(problem,id,kind,structureType,place){throw new Error(problem+" type "+kind.replace("X",id+"?")+(structureType?" with flag "+structureType:"")+" in "+place)}function getComplexType(id,constructType,getType,queryType,place,kind,prevStructure,depth){if(kind===void 0){kind="X"}if(depth===void 0){depth=1}var result=getType(id);if(result)return result;var query=queryType(id);var structureType=query.placeholderFlag;var structure=structureList[structureType];if(prevStructure&&structure){kind=applyStructure(prevStructure[2],prevStructure[0],kind,structure[0],"?",true)}var problem;if(structureType==0)problem="Unbound";if(structureType>=10)problem="Corrupt";if(depth>20)problem="Deeply nested";if(problem)reportProblem(problem,id,kind,structureType,place||"?");var subId=query.paramList[0];var subType=getComplexType(subId,constructType,getType,queryType,place,kind,structure,depth+1);var srcSpec;var spec={flags:structure[0],id:id,name:"",paramList:[subType]};var argList=[];var structureParam="?";switch(query.placeholderFlag){case 1:srcSpec=subType.spec;break;case 2:if((subType.flags&15360)==1024&&subType.spec.ptrSize==1){spec.flags=7168;break};case 3:case 6:case 5:srcSpec=subType.spec;if((subType.flags&15360)!=2048){}break;case 8:structureParam=""+query.paramList[1];spec.paramList.push(query.paramList[1]);break;case 9:for(var _i=0,_a=query.paramList[1];_i<_a.length;_i++){var paramId=_a[_i];var paramType=getComplexType(paramId,constructType,getType,queryType,place,kind,structure,depth+1);argList.push(paramType.name);spec.paramList.push(paramType)}structureParam=argList.join(", ");break;default:break}spec.name=applyStructure(structure[2],structure[0],subType.name,subType.flags,structureParam);if(srcSpec){for(var _b=0,_c=Object.keys(srcSpec);_b<_c.length;_b++){var key=_c[_b];spec[key]=spec[key]||srcSpec[key]}spec.flags|=srcSpec.flags}return makeType(constructType,spec)}function makeType(constructType,spec){var flags=spec.flags;var refKind=flags&896;var kind=flags&15360;if(!spec.name&&kind==1024){if(spec.ptrSize==1){spec.name=(flags&16?"":(flags&8?"un":"")+"signed ")+"char"}else{spec.name=(flags&8?"u":"")+(flags&32?"float":"int")+(spec.ptrSize*8+"_t")}}if(spec.ptrSize==8&&!(flags&32))kind=64;if(kind==2048){if(refKind==512||refKind==640){kind=4096}else if(refKind)kind=3072}return constructType(kind,spec)}var Type=(function(){function Type(spec){this.id=spec.id;this.name=spec.name;this.flags=spec.flags;this.spec=spec}Type.prototype.toString=(function(){return this.name});return Type})();var output={Type:Type,getComplexType:getComplexType,makeType:makeType,structureList:structureList};self.output=output;return self.output||output}function __nbind_register_type(id,namePtr){var name=_nbind.readAsciiString(namePtr);var spec={flags:10240,id:id,name:name};_nbind.makeType(_nbind.constructType,spec)}var _BDtoIHigh=true;function _pthread_cleanup_push(routine,arg){__ATEXIT__.push((function(){Runtime.dynCall("vi",routine,[arg])}));_pthread_cleanup_push.level=__ATEXIT__.length}function __nbind_register_callback_signature(typeListPtr,typeCount){var typeList=_nbind.readTypeIdList(typeListPtr,typeCount);var num=_nbind.callbackSignatureList.length;_nbind.callbackSignatureList[num]=_nbind.makeJSCaller(typeList);return num}function __extends(Class,Parent){for(var key in Parent)if(Parent.hasOwnProperty(key))Class[key]=Parent[key];function Base(){this.constructor=Class}Base.prototype=Parent.prototype;Class.prototype=new Base}function __nbind_register_class(idListPtr,policyListPtr,superListPtr,upcastListPtr,superCount,destructorPtr,namePtr){var name=_nbind.readAsciiString(namePtr);var policyTbl=_nbind.readPolicyList(policyListPtr);var idList=HEAPU32.subarray(idListPtr/4,idListPtr/4+2);var spec={flags:2048|(policyTbl["Value"]?2:0),id:idList[0],name:name};var bindClass=_nbind.makeType(_nbind.constructType,spec);bindClass.ptrType=_nbind.getComplexType(idList[1],_nbind.constructType,_nbind.getType,_nbind.queryType);bindClass.destroy=_nbind.makeMethodCaller(bindClass.ptrType,{boundID:spec.id,flags:0,name:"destroy",num:0,ptr:destructorPtr,title:bindClass.name+".free",typeList:["void","uint32_t","uint32_t"]});if(superCount){bindClass.superIdList=Array.prototype.slice.call(HEAPU32.subarray(superListPtr/4,superListPtr/4+superCount));bindClass.upcastList=Array.prototype.slice.call(HEAPU32.subarray(upcastListPtr/4,upcastListPtr/4+superCount))}Module[bindClass.name]=bindClass.makeBound(policyTbl);_nbind.BindClass.list.push(bindClass)}function _removeAccessorPrefix(name){var prefixMatcher=/^[Gg]et_?([A-Z]?([A-Z]?))/;return name.replace(prefixMatcher,(function(match,initial,second){return second?initial:initial.toLowerCase()}))}function __nbind_register_function(boundID,policyListPtr,typeListPtr,typeCount,ptr,direct,signatureType,namePtr,num,flags){var bindClass=_nbind.getType(boundID);var policyTbl=_nbind.readPolicyList(policyListPtr);var typeList=_nbind.readTypeIdList(typeListPtr,typeCount);var specList;if(signatureType==4){specList=[{direct:ptr,name:"__nbindConstructor",ptr:0,title:bindClass.name+" constructor",typeList:["uint32_t"].concat(typeList.slice(1))},{direct:direct,name:"__nbindValueConstructor",ptr:0,title:bindClass.name+" value constructor",typeList:["void","uint32_t"].concat(typeList.slice(1))}]}else{var name_1=_nbind.readAsciiString(namePtr);var title=(bindClass.name&&bindClass.name+".")+name_1;if(signatureType==2||signatureType==3){name_1=_removeAccessorPrefix(name_1)}specList=[{boundID:boundID,direct:direct,name:name_1,ptr:ptr,title:title,typeList:typeList}]}for(var _i=0,specList_1=specList;_i<specList_1.length;_i++){var spec=specList_1[_i];spec.signatureType=signatureType;spec.policyTbl=policyTbl;spec.num=num;spec.flags=flags;bindClass.addMethod(spec)}}function _YGEdgeToString(){Module["printErr"]("missing function: YGEdgeToString");abort(-1)}function _nbind_value(name,proto){if(!_nbind.typeNameTbl[name])_nbind.throwError("Unknown value type "+name);Module["NBind"].bind_value(name,proto);_defineHidden(_nbind.typeNameTbl[name].proto.prototype.__nbindValueConstructor)(proto.prototype,"__nbindValueConstructor")}Module["_nbind_value"]=_nbind_value;function __nbind_get_value_object(num,ptr){var obj=_nbind.popValue(num);if(!obj.fromJS){throw new Error("Object "+obj+" has no fromJS function")}obj.fromJS((function(){obj.__nbindValueConstructor.apply(this,Array.prototype.concat.apply([ptr],arguments))}))}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}Module["_memcpy"]=_memcpy;function _llvm_stackrestore(p){var self=_llvm_stacksave;var ret=self.LLVM_SAVEDSTACKS[p];self.LLVM_SAVEDSTACKS.splice(p,1);Runtime.stackRestore(ret)}function _YGOverflowToString(){Module["printErr"]("missing function: YGOverflowToString");abort(-1)}function _sbrk(bytes){var self=_sbrk;if(!self.called){DYNAMICTOP=alignMemoryPage(DYNAMICTOP);self.called=true;assert(Runtime.dynamicAlloc);self.alloc=Runtime.dynamicAlloc;Runtime.dynamicAlloc=(function(){abort("cannot dynamically allocate, sbrk now has control")})}var ret=DYNAMICTOP;if(bytes!=0){var success=self.alloc(bytes);if(!success)return-1>>>0}return ret}function _llvm_stacksave(){var self=_llvm_stacksave;if(!self.LLVM_SAVEDSTACKS){self.LLVM_SAVEDSTACKS=[]}self.LLVM_SAVEDSTACKS.push(Runtime.stackSave());return self.LLVM_SAVEDSTACKS.length-1}function _YGAlignToString(){Module["printErr"]("missing function: YGAlignToString");abort(-1)}var _BItoD=true;function _time(ptr){var ret=Date.now()/1e3|0;if(ptr){HEAP32[ptr>>2]=ret}return ret}function _pthread_self(){return 0}function ___syscall140(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),offset_high=SYSCALLS.get(),offset_low=SYSCALLS.get(),result=SYSCALLS.get(),whence=SYSCALLS.get();var offset=offset_low;assert(offset_high===0);FS.llseek(stream,offset,whence);HEAP32[result>>2]=stream.position;if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall146(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.get(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();var ret=0;if(!___syscall146.buffer)___syscall146.buffer=[];var buffer=___syscall146.buffer;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){var curr=HEAPU8[ptr+j];if(curr===0||curr===10){Module["print"](UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}}ret+=len}return ret}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function __nbind_finish(){for(var _i=0,_a=_nbind.BindClass.list;_i<_a.length;_i++){var bindClass=_a[_i];bindClass.finish()}}function _YGDisplayToString(){Module["printErr"]("missing function: YGDisplayToString");abort(-1)}var ___dso_handle=allocate(1,"i32*",ALLOC_STATIC);((function(_nbind){var typeIdTbl={};_nbind.typeNameTbl={};var Pool=(function(){function Pool(){}Pool.lalloc=(function(size){size=size+7&~7;var used=HEAPU32[Pool.usedPtr];if(size>Pool.pageSize/2||size>Pool.pageSize-used){var NBind=_nbind.typeNameTbl["NBind"].proto;return NBind.lalloc(size)}else{HEAPU32[Pool.usedPtr]=used+size;return Pool.rootPtr+used}});Pool.lreset=(function(used,page){var topPage=HEAPU32[Pool.pagePtr];if(topPage){var NBind=_nbind.typeNameTbl["NBind"].proto;NBind.lreset(used,page)}else{HEAPU32[Pool.usedPtr]=used}});return Pool})();_nbind.Pool=Pool;function constructType(kind,spec){var construct=kind==10240?_nbind.makeTypeNameTbl[spec.name]||_nbind.BindType:_nbind.makeTypeKindTbl[kind];var bindType=new construct(spec);typeIdTbl[spec.id]=bindType;_nbind.typeNameTbl[spec.name]=bindType;return bindType}_nbind.constructType=constructType;function getType(id){return typeIdTbl[id]}_nbind.getType=getType;function queryType(id){var placeholderFlag=HEAPU8[id];var paramCount=_nbind.structureList[placeholderFlag][1];id/=4;if(paramCount<0){++id;paramCount=HEAPU32[id]+1}var paramList=Array.prototype.slice.call(HEAPU32.subarray(id+1,id+1+paramCount));if(placeholderFlag==9){paramList=[paramList[0],paramList.slice(1)]}return{paramList:paramList,placeholderFlag:placeholderFlag}}_nbind.queryType=queryType;function getTypes(idList,place){return idList.map((function(id){return typeof id=="number"?_nbind.getComplexType(id,constructType,getType,queryType,place):_nbind.typeNameTbl[id]}))}_nbind.getTypes=getTypes;function readTypeIdList(typeListPtr,typeCount){return Array.prototype.slice.call(HEAPU32,typeListPtr/4,typeListPtr/4+typeCount)}_nbind.readTypeIdList=readTypeIdList;function readAsciiString(ptr){var endPtr=ptr;while(HEAPU8[endPtr++]);return String.fromCharCode.apply("",HEAPU8.subarray(ptr,endPtr-1))}_nbind.readAsciiString=readAsciiString;function readPolicyList(policyListPtr){var policyTbl={};if(policyListPtr){while(1){var namePtr=HEAPU32[policyListPtr/4];if(!namePtr)break;policyTbl[readAsciiString(namePtr)]=true;policyListPtr+=4}}return policyTbl}_nbind.readPolicyList=readPolicyList;function getDynCall(typeList,name){var mangleMap={float32_t:"d",float64_t:"d",int64_t:"d",uint64_t:"d","void":"v"};var signature=typeList.map((function(type){return mangleMap[type.name]||"i"})).join("");var dynCall=Module["dynCall_"+signature];if(!dynCall){throw new Error("dynCall_"+signature+" not found for "+name+"("+typeList.map((function(type){return type.name})).join(", ")+")")}return dynCall}_nbind.getDynCall=getDynCall;function addMethod(obj,name,func,arity){var overload=obj[name];if(obj.hasOwnProperty(name)&&overload){if(overload.arity||overload.arity===0){overload=_nbind.makeOverloader(overload,overload.arity);obj[name]=overload}overload.addMethod(func,arity)}else{func.arity=arity;obj[name]=func}}_nbind.addMethod=addMethod;function throwError(message){throw new Error(message)}_nbind.throwError=throwError;_nbind.bigEndian=false;_a=_typeModule(_typeModule),_nbind.Type=_a.Type,_nbind.makeType=_a.makeType,_nbind.getComplexType=_a.getComplexType,_nbind.structureList=_a.structureList;var BindType=(function(_super){__extends(BindType,_super);function BindType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.heap=HEAPU32;_this.ptrSize=4;return _this}BindType.prototype.needsWireRead=(function(policyTbl){return!!this.wireRead||!!this.makeWireRead});BindType.prototype.needsWireWrite=(function(policyTbl){return!!this.wireWrite||!!this.makeWireWrite});return BindType})(_nbind.Type);_nbind.BindType=BindType;var PrimitiveType=(function(_super){__extends(PrimitiveType,_super);function PrimitiveType(spec){var _this=_super.call(this,spec)||this;var heapTbl=spec.flags&32?{32:HEAPF32,64:HEAPF64}:spec.flags&8?{8:HEAPU8,16:HEAPU16,32:HEAPU32}:{8:HEAP8,16:HEAP16,32:HEAP32};_this.heap=heapTbl[spec.ptrSize*8];_this.ptrSize=spec.ptrSize;return _this}PrimitiveType.prototype.needsWireWrite=(function(policyTbl){return!!policyTbl&&!!policyTbl["Strict"]});PrimitiveType.prototype.makeWireWrite=(function(expr,policyTbl){return policyTbl&&policyTbl["Strict"]&&(function(arg){if(typeof arg=="number")return arg;throw new Error("Type mismatch")})});return PrimitiveType})(BindType);_nbind.PrimitiveType=PrimitiveType;function pushCString(str,policyTbl){if(str===null||str===undefined){if(policyTbl&&policyTbl["Nullable"]){return 0}else throw new Error("Type mismatch")}if(policyTbl&&policyTbl["Strict"]){if(typeof str!="string")throw new Error("Type mismatch")}else str=str.toString();var length=Module.lengthBytesUTF8(str)+1;var result=_nbind.Pool.lalloc(length);Module.stringToUTF8Array(str,HEAPU8,result,length);return result}_nbind.pushCString=pushCString;function popCString(ptr){if(ptr===0)return null;return Module.Pointer_stringify(ptr)}_nbind.popCString=popCString;var CStringType=(function(_super){__extends(CStringType,_super);function CStringType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireRead=popCString;_this.wireWrite=pushCString;_this.readResources=[_nbind.resources.pool];_this.writeResources=[_nbind.resources.pool];return _this}CStringType.prototype.makeWireWrite=(function(expr,policyTbl){return(function(arg){return pushCString(arg,policyTbl)})});return CStringType})(BindType);_nbind.CStringType=CStringType;var BooleanType=(function(_super){__extends(BooleanType,_super);function BooleanType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireRead=(function(arg){return!!arg});return _this}BooleanType.prototype.needsWireWrite=(function(policyTbl){return!!policyTbl&&!!policyTbl["Strict"]});BooleanType.prototype.makeWireRead=(function(expr){return"!!("+expr+")"});BooleanType.prototype.makeWireWrite=(function(expr,policyTbl){return policyTbl&&policyTbl["Strict"]&&(function(arg){if(typeof arg=="boolean")return arg;throw new Error("Type mismatch")})||expr});return BooleanType})(BindType);_nbind.BooleanType=BooleanType;var Wrapper=(function(){function Wrapper(){}Wrapper.prototype.persist=(function(){this.__nbindState|=1});return Wrapper})();_nbind.Wrapper=Wrapper;function makeBound(policyTbl,bindClass){var Bound=(function(_super){__extends(Bound,_super);function Bound(marker,flags,ptr,shared){var _this=_super.call(this)||this;if(!(_this instanceof Bound)){return new(Function.prototype.bind.apply(Bound,Array.prototype.concat.apply([null],arguments)))}var nbindFlags=flags;var nbindPtr=ptr;var nbindShared=shared;if(marker!==_nbind.ptrMarker){var wirePtr=_this.__nbindConstructor.apply(_this,arguments);nbindFlags=4096|512;nbindShared=HEAPU32[wirePtr/4];nbindPtr=HEAPU32[wirePtr/4+1]}var spec={configurable:true,enumerable:false,value:null,writable:false};var propTbl={"__nbindFlags":nbindFlags,"__nbindPtr":nbindPtr};if(nbindShared){propTbl["__nbindShared"]=nbindShared;_nbind.mark(_this)}for(var _i=0,_a=Object.keys(propTbl);_i<_a.length;_i++){var key=_a[_i];spec.value=propTbl[key];Object.defineProperty(_this,key,spec)}_defineHidden(0)(_this,"__nbindState");return _this}Bound.prototype.free=(function(){bindClass.destroy.call(this,this.__nbindShared,this.__nbindFlags);this.__nbindState|=2;disableMember(this,"__nbindShared");disableMember(this,"__nbindPtr")});return Bound})(Wrapper);__decorate([_defineHidden()],Bound.prototype,"__nbindConstructor",void 0);__decorate([_defineHidden()],Bound.prototype,"__nbindValueConstructor",void 0);__decorate([_defineHidden(policyTbl)],Bound.prototype,"__nbindPolicies",void 0);return Bound}_nbind.makeBound=makeBound;function disableMember(obj,name){function die(){throw new Error("Accessing deleted object")}Object.defineProperty(obj,name,{configurable:false,enumerable:false,get:die,set:die})}_nbind.ptrMarker={};var BindClass=(function(_super){__extends(BindClass,_super);function BindClass(spec){var _this=_super.call(this,spec)||this;_this.wireRead=(function(arg){return _nbind.popValue(arg,_this.ptrType)});_this.wireWrite=(function(arg){return pushPointer(arg,_this.ptrType,true)});_this.pendingSuperCount=0;_this.ready=false;_this.methodTbl={};if(spec.paramList){_this.classType=spec.paramList[0].classType;_this.proto=_this.classType.proto}else _this.classType=_this;return _this}BindClass.prototype.makeBound=(function(policyTbl){var Bound=_nbind.makeBound(policyTbl,this);this.proto=Bound;this.ptrType.proto=Bound;return Bound});BindClass.prototype.addMethod=(function(spec){var overloadList=this.methodTbl[spec.name]||[];overloadList.push(spec);this.methodTbl[spec.name]=overloadList});BindClass.prototype.registerMethods=(function(src,staticOnly){var setter;for(var _i=0,_a=Object.keys(src.methodTbl);_i<_a.length;_i++){var name_1=_a[_i];var overloadList=src.methodTbl[name_1];for(var _b=0,overloadList_1=overloadList;_b<overloadList_1.length;_b++){var spec=overloadList_1[_b];var target=void 0;var caller=void 0;target=this.proto.prototype;if(staticOnly&&spec.signatureType!=0)continue;switch(spec.signatureType){case 0:target=this.proto;case 4:caller=_nbind.makeCaller(spec);_nbind.addMethod(target,spec.name,caller,spec.typeList.length-1);break;case 3:setter=_nbind.makeMethodCaller(src.ptrType,spec);break;case 2:Object.defineProperty(target,spec.name,{configurable:true,enumerable:false,get:_nbind.makeMethodCaller(src.ptrType,spec),set:setter});break;case 1:caller=_nbind.makeMethodCaller(src.ptrType,spec);_nbind.addMethod(target,spec.name,caller,spec.typeList.length-1);break;default:break}}}});BindClass.prototype.registerSuperMethods=(function(src,firstSuper,visitTbl){if(visitTbl[src.name])return;visitTbl[src.name]=true;var superNum=0;var nextFirst;for(var _i=0,_a=src.superIdList||[];_i<_a.length;_i++){var superId=_a[_i];var superClass=_nbind.getType(superId);if(superNum++<firstSuper||firstSuper<0){nextFirst=-1}else{nextFirst=0}this.registerSuperMethods(superClass,nextFirst,visitTbl)}this.registerMethods(src,firstSuper<0)});BindClass.prototype.finish=(function(){if(this.ready)return this;this.ready=true;this.superList=(this.superIdList||[]).map((function(superId){return _nbind.getType(superId).finish()}));var Bound=this.proto;if(this.superList.length){var Proto=(function(){this.constructor=Bound});Proto.prototype=this.superList[0].proto.prototype;Bound.prototype=new Proto}if(Bound!=Module)Bound.prototype.__nbindType=this;this.registerSuperMethods(this,1,{});return this});BindClass.prototype.upcastStep=(function(dst,ptr){if(dst==this)return ptr;for(var i=0;i<this.superList.length;++i){var superPtr=this.superList[i].upcastStep(dst,_nbind.callUpcast(this.upcastList[i],ptr));if(superPtr)return superPtr}return 0});return BindClass})(_nbind.BindType);BindClass.list=[];_nbind.BindClass=BindClass;function popPointer(ptr,type){return ptr?new type.proto(_nbind.ptrMarker,type.flags,ptr):null}_nbind.popPointer=popPointer;function pushPointer(obj,type,tryValue){if(!(obj instanceof _nbind.Wrapper)){if(tryValue){return _nbind.pushValue(obj)}else throw new Error("Type mismatch")}var ptr=obj.__nbindPtr;var objType=obj.__nbindType.classType;var classType=type.classType;if(obj instanceof type.proto){while(objType!=classType){ptr=_nbind.callUpcast(objType.upcastList[0],ptr);objType=objType.superList[0]}}else{ptr=objType.upcastStep(classType,ptr);if(!ptr)throw new Error("Type mismatch")}return ptr}_nbind.pushPointer=pushPointer;function pushMutablePointer(obj,type){var ptr=pushPointer(obj,type);if(obj.__nbindFlags&1){throw new Error("Passing a const value as a non-const argument")}return ptr}var BindClassPtr=(function(_super){__extends(BindClassPtr,_super);function BindClassPtr(spec){var _this=_super.call(this,spec)||this;_this.classType=spec.paramList[0].classType;_this.proto=_this.classType.proto;var isConst=spec.flags&1;var isValue=(_this.flags&896)==256&&spec.flags&2;var push=isConst?pushPointer:pushMutablePointer;var pop=isValue?_nbind.popValue:popPointer;_this.makeWireWrite=(function(expr,policyTbl){return policyTbl["Nullable"]?(function(arg){return arg?push(arg,_this):0}):(function(arg){return push(arg,_this)})});_this.wireRead=(function(arg){return pop(arg,_this)});_this.wireWrite=(function(arg){return push(arg,_this)});return _this}return BindClassPtr})(_nbind.BindType);_nbind.BindClassPtr=BindClassPtr;function popShared(ptr,type){var shared=HEAPU32[ptr/4];var unsafe=HEAPU32[ptr/4+1];return unsafe?new type.proto(_nbind.ptrMarker,type.flags,unsafe,shared):null}_nbind.popShared=popShared;function pushShared(obj,type){if(!(obj instanceof type.proto))throw new Error("Type mismatch");return obj.__nbindShared}function pushMutableShared(obj,type){if(!(obj instanceof type.proto))throw new Error("Type mismatch");if(obj.__nbindFlags&1){throw new Error("Passing a const value as a non-const argument")}return obj.__nbindShared}var SharedClassPtr=(function(_super){__extends(SharedClassPtr,_super);function SharedClassPtr(spec){var _this=_super.call(this,spec)||this;_this.readResources=[_nbind.resources.pool];_this.classType=spec.paramList[0].classType;_this.proto=_this.classType.proto;var isConst=spec.flags&1;var push=isConst?pushShared:pushMutableShared;_this.wireRead=(function(arg){return popShared(arg,_this)});_this.wireWrite=(function(arg){return push(arg,_this)});return _this}return SharedClassPtr})(_nbind.BindType);_nbind.SharedClassPtr=SharedClassPtr;_nbind.externalList=[0];var firstFreeExternal=0;var External=(function(){function External(data){this.refCount=1;this.data=data}External.prototype.register=(function(){var num=firstFreeExternal;if(num){firstFreeExternal=_nbind.externalList[num]}else num=_nbind.externalList.length;_nbind.externalList[num]=this;return num});External.prototype.reference=(function(){++this.refCount});External.prototype.dereference=(function(num){if(--this.refCount==0){if(this.free)this.free();_nbind.externalList[num]=firstFreeExternal;firstFreeExternal=num}});return External})();_nbind.External=External;function popExternal(num){var obj=_nbind.externalList[num];obj.dereference(num);return obj.data}function pushExternal(obj){var external=new External(obj);external.reference();return external.register()}var ExternalType=(function(_super){__extends(ExternalType,_super);function ExternalType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireRead=popExternal;_this.wireWrite=pushExternal;return _this}return ExternalType})(_nbind.BindType);_nbind.ExternalType=ExternalType;_nbind.callbackSignatureList=[];var CallbackType=(function(_super){__extends(CallbackType,_super);function CallbackType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireWrite=(function(func){if(typeof func!="function")_nbind.throwError("Type mismatch");return(new _nbind.External(func)).register()});return _this}return CallbackType})(_nbind.BindType);_nbind.CallbackType=CallbackType;_nbind.valueList=[0];var firstFreeValue=0;function pushValue(value){var num=firstFreeValue;if(num){firstFreeValue=_nbind.valueList[num]}else num=_nbind.valueList.length;_nbind.valueList[num]=value;return num*2+1}_nbind.pushValue=pushValue;function popValue(num,type){if(!num)_nbind.throwError("Value type JavaScript class is missing or not registered");if(num&1){num>>=1;var obj=_nbind.valueList[num];_nbind.valueList[num]=firstFreeValue;firstFreeValue=num;return obj}else if(type){return _nbind.popShared(num,type)}else throw new Error("Invalid value slot "+num)}_nbind.popValue=popValue;var valueBase=0x10000000000000000;function push64(num){if(typeof num=="number")return num;return pushValue(num)*4096+valueBase}function pop64(num){if(num<valueBase)return num;return popValue((num-valueBase)/4096)}var CreateValueType=(function(_super){__extends(CreateValueType,_super);function CreateValueType(){return _super!==null&&_super.apply(this,arguments)||this}CreateValueType.prototype.makeWireWrite=(function(expr){return"(_nbind.pushValue(new "+expr+"))"});return CreateValueType})(_nbind.BindType);_nbind.CreateValueType=CreateValueType;var Int64Type=(function(_super){__extends(Int64Type,_super);function Int64Type(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireWrite=push64;_this.wireRead=pop64;return _this}return Int64Type})(_nbind.BindType);_nbind.Int64Type=Int64Type;function pushArray(arr,type){if(!arr)return 0;var length=arr.length;if((type.size||type.size===0)&&length<type.size){throw new Error("Type mismatch")}var ptrSize=type.memberType.ptrSize;var result=_nbind.Pool.lalloc(4+length*ptrSize);HEAPU32[result/4]=length;var heap=type.memberType.heap;var ptr=(result+4)/ptrSize;var wireWrite=type.memberType.wireWrite;var num=0;if(wireWrite){while(num<length){heap[ptr++]=wireWrite(arr[num++])}}else{while(num<length){heap[ptr++]=arr[num++]}}return result}_nbind.pushArray=pushArray;function popArray(ptr,type){if(ptr===0)return null;var length=HEAPU32[ptr/4];var arr=new Array(length);var heap=type.memberType.heap;ptr=(ptr+4)/type.memberType.ptrSize;var wireRead=type.memberType.wireRead;var num=0;if(wireRead){while(num<length){arr[num++]=wireRead(heap[ptr++])}}else{while(num<length){arr[num++]=heap[ptr++]}}return arr}_nbind.popArray=popArray;var ArrayType=(function(_super){__extends(ArrayType,_super);function ArrayType(spec){var _this=_super.call(this,spec)||this;_this.wireRead=(function(arg){return popArray(arg,_this)});_this.wireWrite=(function(arg){return pushArray(arg,_this)});_this.readResources=[_nbind.resources.pool];_this.writeResources=[_nbind.resources.pool];_this.memberType=spec.paramList[0];if(spec.paramList[1])_this.size=spec.paramList[1];return _this}return ArrayType})(_nbind.BindType);_nbind.ArrayType=ArrayType;function pushString(str,policyTbl){if(str===null||str===undefined){if(policyTbl&&policyTbl["Nullable"]){str=""}else throw new Error("Type mismatch")}if(policyTbl&&policyTbl["Strict"]){if(typeof str!="string")throw new Error("Type mismatch")}else str=str.toString();var length=Module.lengthBytesUTF8(str);var result=_nbind.Pool.lalloc(4+length+1);HEAPU32[result/4]=length;Module.stringToUTF8Array(str,HEAPU8,result+4,length+1);return result}_nbind.pushString=pushString;function popString(ptr){if(ptr===0)return null;var length=HEAPU32[ptr/4];return Module.Pointer_stringify(ptr+4,length)}_nbind.popString=popString;var StringType=(function(_super){__extends(StringType,_super);function StringType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireRead=popString;_this.wireWrite=pushString;_this.readResources=[_nbind.resources.pool];_this.writeResources=[_nbind.resources.pool];return _this}StringType.prototype.makeWireWrite=(function(expr,policyTbl){return(function(arg){return pushString(arg,policyTbl)})});return StringType})(_nbind.BindType);_nbind.StringType=StringType;function makeArgList(argCount){return Array.apply(null,Array(argCount)).map((function(dummy,num){return"a"+(num+1)}))}function anyNeedsWireWrite(typeList,policyTbl){return typeList.reduce((function(result,type){return result||type.needsWireWrite(policyTbl)}),false)}function anyNeedsWireRead(typeList,policyTbl){return typeList.reduce((function(result,type){return result||!!type.needsWireRead(policyTbl)}),false)}function makeWireRead(convertParamList,policyTbl,type,expr){var paramNum=convertParamList.length;if(type.makeWireRead){return type.makeWireRead(expr,convertParamList,paramNum)}else if(type.wireRead){convertParamList[paramNum]=type.wireRead;return"(convertParamList["+paramNum+"]("+expr+"))"}else return expr}function makeWireWrite(convertParamList,policyTbl,type,expr){var wireWrite;var paramNum=convertParamList.length;if(type.makeWireWrite){wireWrite=type.makeWireWrite(expr,policyTbl,convertParamList,paramNum)}else wireWrite=type.wireWrite;if(wireWrite){if(typeof wireWrite=="string"){return wireWrite}else{convertParamList[paramNum]=wireWrite;return"(convertParamList["+paramNum+"]("+expr+"))"}}else return expr}function buildCallerFunction(dynCall,ptrType,ptr,num,policyTbl,needsWireWrite,prefix,returnType,argTypeList,mask,err){var argList=makeArgList(argTypeList.length);var convertParamList=[];var callExpression=makeWireRead(convertParamList,policyTbl,returnType,"dynCall("+[prefix].concat(argList.map((function(name,index){return makeWireWrite(convertParamList,policyTbl,argTypeList[index],name)}))).join(",")+")");var resourceSet=_nbind.listResources([returnType],argTypeList);var sourceCode="function("+argList.join(",")+"){"+(mask?"this.__nbindFlags&mask&&err();":"")+resourceSet.makeOpen()+"var r="+callExpression+";"+resourceSet.makeClose()+"return r;"+"}";return eval("("+sourceCode+")")}function buildJSCallerFunction(returnType,argTypeList){var argList=makeArgList(argTypeList.length);var convertParamList=[];var callExpression=makeWireWrite(convertParamList,null,returnType,"_nbind.externalList[num].data("+argList.map((function(name,index){return makeWireRead(convertParamList,null,argTypeList[index],name)})).join(",")+")");var resourceSet=_nbind.listResources(argTypeList,[returnType]);resourceSet.remove(_nbind.resources.pool);var sourceCode="function("+["dummy","num"].concat(argList).join(",")+"){"+resourceSet.makeOpen()+"var r="+callExpression+";"+resourceSet.makeClose()+"return r;"+"}";return eval("("+sourceCode+")")}_nbind.buildJSCallerFunction=buildJSCallerFunction;function makeJSCaller(idList){var argCount=idList.length-1;var typeList=_nbind.getTypes(idList,"callback");var returnType=typeList[0];var argTypeList=typeList.slice(1);var needsWireRead=anyNeedsWireRead(argTypeList,null);var needsWireWrite=returnType.needsWireWrite(null);if(!needsWireWrite&&!needsWireRead){switch(argCount){case 0:return(function(dummy,num){return _nbind.externalList[num].data()});case 1:return(function(dummy,num,a1){return _nbind.externalList[num].data(a1)});case 2:return(function(dummy,num,a1,a2){return _nbind.externalList[num].data(a1,a2)});case 3:return(function(dummy,num,a1,a2,a3){return _nbind.externalList[num].data(a1,a2,a3)});default:break}}return buildJSCallerFunction(returnType,argTypeList)}_nbind.makeJSCaller=makeJSCaller;function makeMethodCaller(ptrType,spec){var argCount=spec.typeList.length-1;var typeIdList=spec.typeList.slice(0);typeIdList.splice(1,0,"uint32_t",spec.boundID);var typeList=_nbind.getTypes(typeIdList,spec.title);var returnType=typeList[0];var argTypeList=typeList.slice(3);var needsWireRead=returnType.needsWireRead(spec.policyTbl);var needsWireWrite=anyNeedsWireWrite(argTypeList,spec.policyTbl);var ptr=spec.ptr;var num=spec.num;var dynCall=_nbind.getDynCall(typeList,spec.title);var mask=~spec.flags&1;function err(){throw new Error("Calling a non-const method on a const object")}if(!needsWireRead&&!needsWireWrite){switch(argCount){case 0:return(function(){return this.__nbindFlags&mask?err():dynCall(ptr,num,_nbind.pushPointer(this,ptrType))});case 1:return(function(a1){return this.__nbindFlags&mask?err():dynCall(ptr,num,_nbind.pushPointer(this,ptrType),a1)});case 2:return(function(a1,a2){return this.__nbindFlags&mask?err():dynCall(ptr,num,_nbind.pushPointer(this,ptrType),a1,a2)});case 3:return(function(a1,a2,a3){return this.__nbindFlags&mask?err():dynCall(ptr,num,_nbind.pushPointer(this,ptrType),a1,a2,a3)});default:break}}return buildCallerFunction(dynCall,ptrType,ptr,num,spec.policyTbl,needsWireWrite,"ptr,num,pushPointer(this,ptrType)",returnType,argTypeList,mask,err)}_nbind.makeMethodCaller=makeMethodCaller;function makeCaller(spec){var argCount=spec.typeList.length-1;var typeList=_nbind.getTypes(spec.typeList,spec.title);var returnType=typeList[0];var argTypeList=typeList.slice(1);var needsWireRead=returnType.needsWireRead(spec.policyTbl);var needsWireWrite=anyNeedsWireWrite(argTypeList,spec.policyTbl);var direct=spec.direct;var ptr=spec.ptr;if(spec.direct&&!needsWireRead&&!needsWireWrite){var dynCall_1=_nbind.getDynCall(typeList,spec.title);switch(argCount){case 0:return(function(){return dynCall_1(direct)});case 1:return(function(a1){return dynCall_1(direct,a1)});case 2:return(function(a1,a2){return dynCall_1(direct,a1,a2)});case 3:return(function(a1,a2,a3){return dynCall_1(direct,a1,a2,a3)});default:break}ptr=0}var prefix;if(ptr){var typeIdList=spec.typeList.slice(0);typeIdList.splice(1,0,"uint32_t");typeList=_nbind.getTypes(typeIdList,spec.title);prefix="ptr,num"}else{ptr=direct;prefix="ptr"}var dynCall=_nbind.getDynCall(typeList,spec.title);return buildCallerFunction(dynCall,null,ptr,spec.num,spec.policyTbl,needsWireWrite,prefix,returnType,argTypeList)}_nbind.makeCaller=makeCaller;function makeOverloader(func,arity){var callerList=[];function call(){return callerList[arguments.length].apply(this,arguments)}call.addMethod=(function(_func,_arity){callerList[_arity]=_func});call.addMethod(func,arity);return call}_nbind.makeOverloader=makeOverloader;var Resource=(function(){function Resource(open,close){var _this=this;this.makeOpen=(function(){return Object.keys(_this.openTbl).join("")});this.makeClose=(function(){return Object.keys(_this.closeTbl).join("")});this.openTbl={};this.closeTbl={};if(open)this.openTbl[open]=true;if(close)this.closeTbl[close]=true}Resource.prototype.add=(function(other){for(var _i=0,_a=Object.keys(other.openTbl);_i<_a.length;_i++){var key=_a[_i];this.openTbl[key]=true}for(var _b=0,_c=Object.keys(other.closeTbl);_b<_c.length;_b++){var key=_c[_b];this.closeTbl[key]=true}});Resource.prototype.remove=(function(other){for(var _i=0,_a=Object.keys(other.openTbl);_i<_a.length;_i++){var key=_a[_i];delete this.openTbl[key]}for(var _b=0,_c=Object.keys(other.closeTbl);_b<_c.length;_b++){var key=_c[_b];delete this.closeTbl[key]}});return Resource})();_nbind.Resource=Resource;function listResources(readList,writeList){var result=new Resource;for(var _i=0,readList_1=readList;_i<readList_1.length;_i++){var bindType=readList_1[_i];for(var _a=0,_b=bindType.readResources||[];_a<_b.length;_a++){var resource=_b[_a];result.add(resource)}}for(var _c=0,writeList_1=writeList;_c<writeList_1.length;_c++){var bindType=writeList_1[_c];for(var _d=0,_e=bindType.writeResources||[];_d<_e.length;_d++){var resource=_e[_d];result.add(resource)}}return result}_nbind.listResources=listResources;_nbind.resources={pool:new Resource("var used=HEAPU32[_nbind.Pool.usedPtr],page=HEAPU32[_nbind.Pool.pagePtr];","_nbind.Pool.lreset(used,page);")};var ExternalBuffer=(function(_super){__extends(ExternalBuffer,_super);function ExternalBuffer(buf,ptr){var _this=_super.call(this,buf)||this;_this.ptr=ptr;return _this}ExternalBuffer.prototype.free=(function(){_free(this.ptr)});return ExternalBuffer})(_nbind.External);function getBuffer(buf){if(buf instanceof ArrayBuffer){return new Uint8Array(buf)}else if(buf instanceof DataView){return new Uint8Array(buf.buffer,buf.byteOffset,buf.byteLength)}else return buf}function pushBuffer(buf,policyTbl){if(buf===null||buf===undefined){if(policyTbl&&policyTbl["Nullable"])buf=[]}if(typeof buf!="object")throw new Error("Type mismatch");var b=buf;var length=b.byteLength||b.length;if(!length&&length!==0&&b.byteLength!==0)throw new Error("Type mismatch");var result=_nbind.Pool.lalloc(8);var data=_malloc(length);var ptr=result/4;HEAPU32[ptr++]=length;HEAPU32[ptr++]=data;HEAPU32[ptr++]=(new ExternalBuffer(buf,data)).register();HEAPU8.set(getBuffer(buf),data);return result}var BufferType=(function(_super){__extends(BufferType,_super);function BufferType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireWrite=pushBuffer;_this.readResources=[_nbind.resources.pool];_this.writeResources=[_nbind.resources.pool];return _this}BufferType.prototype.makeWireWrite=(function(expr,policyTbl){return(function(arg){return pushBuffer(arg,policyTbl)})});return BufferType})(_nbind.BindType);_nbind.BufferType=BufferType;function commitBuffer(num,data,length){var buf=_nbind.externalList[num].data;var NodeBuffer=Buffer;if(typeof Buffer!="function")NodeBuffer=(function(){});if(buf instanceof Array){}else{var src=HEAPU8.subarray(data,data+length);if(buf instanceof NodeBuffer){var srcBuf=void 0;if(typeof Buffer.from=="function"&&Buffer.from.length>=3){srcBuf=Buffer.from(src)}else srcBuf=new Buffer(src);srcBuf.copy(buf)}else getBuffer(buf).set(src)}}_nbind.commitBuffer=commitBuffer;var dirtyList=[];var gcTimer=0;function sweep(){for(var _i=0,dirtyList_1=dirtyList;_i<dirtyList_1.length;_i++){var obj=dirtyList_1[_i];if(!(obj.__nbindState&(1|2))){obj.free()}}dirtyList=[];gcTimer=0}_nbind.mark=(function(obj){});function toggleLightGC(enable){if(enable){_nbind.mark=(function(obj){dirtyList.push(obj);if(!gcTimer)gcTimer=setTimeout(sweep,0)})}else{_nbind.mark=(function(obj){})}}_nbind.toggleLightGC=toggleLightGC}))(_nbind);Module["requestFullScreen"]=function Module_requestFullScreen(lockPointer,resizeCanvas,vrDevice){Browser.requestFullScreen(lockPointer,resizeCanvas,vrDevice)};Module["requestAnimationFrame"]=function Module_requestAnimationFrame(func){Browser.requestAnimationFrame(func)};Module["setCanvasSize"]=function Module_setCanvasSize(width,height,noUpdates){Browser.setCanvasSize(width,height,noUpdates)};Module["pauseMainLoop"]=function Module_pauseMainLoop(){Browser.mainLoop.pause()};Module["resumeMainLoop"]=function Module_resumeMainLoop(){Browser.mainLoop.resume()};Module["getUserMedia"]=function Module_getUserMedia(){Browser.getUserMedia()};Module["createContext"]=function Module_createContext(canvas,useWebGL,setInModule,webGLContextAttributes){return Browser.createContext(canvas,useWebGL,setInModule,webGLContextAttributes)};STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP);staticSealed=true;STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=DYNAMICTOP=Runtime.alignMemory(STACK_MAX);assert(DYNAMIC_BASE<TOTAL_MEMORY,"TOTAL_MEMORY not big enough for stack");var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_DYNAMIC);function invoke_viiiii(index,a1,a2,a3,a4,a5){try{Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_vid(index,a1,a2){try{Module["dynCall_vid"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_fiff(index,a1,a2,a3){try{return Module["dynCall_fiff"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_vi(index,a1){try{Module["dynCall_vi"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_vii(index,a1,a2){try{Module["dynCall_vii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_ii(index,a1){try{return Module["dynCall_ii"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_viddi(index,a1,a2,a3,a4){try{Module["dynCall_viddi"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_vidd(index,a1,a2,a3){try{Module["dynCall_vidd"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_iiii(index,a1,a2,a3){try{return Module["dynCall_iiii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_diii(index,a1,a2,a3){try{return Module["dynCall_diii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_di(index,a1){try{return Module["dynCall_di"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_iid(index,a1,a2){try{return Module["dynCall_iid"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_iii(index,a1,a2){try{return Module["dynCall_iii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_viiddi(index,a1,a2,a3,a4,a5){try{Module["dynCall_viiddi"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6){try{Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_dii(index,a1,a2){try{return Module["dynCall_dii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_i(index){try{return Module["dynCall_i"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_iiiiii(index,a1,a2,a3,a4,a5){try{return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_viiid(index,a1,a2,a3,a4){try{Module["dynCall_viiid"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_viififi(index,a1,a2,a3,a4,a5,a6){try{Module["dynCall_viififi"](index,a1,a2,a3,a4,a5,a6)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_viii(index,a1,a2,a3){try{Module["dynCall_viii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_v(index){try{Module["dynCall_v"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_viid(index,a1,a2,a3){try{Module["dynCall_viid"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_idd(index,a1,a2){try{return Module["dynCall_idd"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_viiii(index,a1,a2,a3,a4){try{Module["dynCall_viiii"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}Module.asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,"Infinity":Infinity};Module.asmLibraryArg={"abort":abort,"assert":assert,"invoke_viiiii":invoke_viiiii,"invoke_vid":invoke_vid,"invoke_fiff":invoke_fiff,"invoke_vi":invoke_vi,"invoke_vii":invoke_vii,"invoke_ii":invoke_ii,"invoke_viddi":invoke_viddi,"invoke_vidd":invoke_vidd,"invoke_iiii":invoke_iiii,"invoke_diii":invoke_diii,"invoke_di":invoke_di,"invoke_iid":invoke_iid,"invoke_iii":invoke_iii,"invoke_viiddi":invoke_viiddi,"invoke_viiiiii":invoke_viiiiii,"invoke_dii":invoke_dii,"invoke_i":invoke_i,"invoke_iiiiii":invoke_iiiiii,"invoke_viiid":invoke_viiid,"invoke_viififi":invoke_viififi,"invoke_viii":invoke_viii,"invoke_v":invoke_v,"invoke_viid":invoke_viid,"invoke_idd":invoke_idd,"invoke_viiii":invoke_viiii,"_pthread_cleanup_pop":_pthread_cleanup_pop,"_YGDisplayToString":_YGDisplayToString,"__nbind_finish":__nbind_finish,"__nbind_reference_external":__nbind_reference_external,"_removeAccessorPrefix":_removeAccessorPrefix,"_typeModule":_typeModule,"_YGFlexDirectionToString":_YGFlexDirectionToString,"_atexit":_atexit,"__decorate":__decorate,"_llvm_stackrestore":_llvm_stackrestore,"___assert_fail":___assert_fail,"___cxa_allocate_exception":___cxa_allocate_exception,"__ZSt18uncaught_exceptionv":__ZSt18uncaught_exceptionv,"__extends":__extends,"_YGOverflowToString":_YGOverflowToString,"__nbind_get_value_object":__nbind_get_value_object,"_emscripten_set_main_loop_timing":_emscripten_set_main_loop_timing,"_fabsf":_fabsf,"_sbrk":_sbrk,"_YGJustifyToString":_YGJustifyToString,"__nbind_register_type":__nbind_register_type,"_YGWrapToString":_YGWrapToString,"_YGAlignToString":_YGAlignToString,"_emscripten_memcpy_big":_emscripten_memcpy_big,"___resumeException":___resumeException,"___cxa_find_matching_catch":___cxa_find_matching_catch,"_sysconf":_sysconf,"___setErrNo":___setErrNo,"__nbind_register_class":__nbind_register_class,"_abort":_abort,"_nbind_value":_nbind_value,"_pthread_self":_pthread_self,"_llvm_stacksave":_llvm_stacksave,"__nbind_register_primitive":__nbind_register_primitive,"_YGPositionTypeToString":_YGPositionTypeToString,"___syscall140":___syscall140,"___syscall54":___syscall54,"_defineHidden":_defineHidden,"_emscripten_set_main_loop":_emscripten_set_main_loop,"__nbind_register_callback_signature":__nbind_register_callback_signature,"__nbind_register_function":__nbind_register_function,"__nbind_free_external":__nbind_free_external,"___cxa_atexit":___cxa_atexit,"___cxa_throw":___cxa_throw,"_YGEdgeToString":_YGEdgeToString,"___syscall6":___syscall6,"_pthread_cleanup_push":_pthread_cleanup_push,"_time":_time,"_emscripten_asm_const_8":_emscripten_asm_const_8,"_emscripten_asm_const_7":_emscripten_asm_const_7,"_emscripten_asm_const_6":_emscripten_asm_const_6,"_emscripten_asm_const_5":_emscripten_asm_const_5,"_emscripten_asm_const_4":_emscripten_asm_const_4,"_emscripten_asm_const_3":_emscripten_asm_const_3,"___syscall146":___syscall146,"__nbind_register_pool":__nbind_register_pool,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT,"cttz_i8":cttz_i8,"___dso_handle":___dso_handle};// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env.cttz_i8|0;var n=env.___dso_handle|0;var o=0;var p=0;var q=0;var r=0;var s=global.NaN,t=global.Infinity;var u=0,v=0,w=0,x=0,y=0.0,z=0,A=0,B=0,C=0.0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=0;var N=global.Math.floor;var O=global.Math.abs;var P=global.Math.sqrt;var Q=global.Math.pow;var R=global.Math.cos;var S=global.Math.sin;var T=global.Math.tan;var U=global.Math.acos;var V=global.Math.asin;var W=global.Math.atan;var X=global.Math.atan2;var Y=global.Math.exp;var Z=global.Math.log;var _=global.Math.ceil;var $=global.Math.imul;var aa=global.Math.min;var ba=global.Math.clz32;var ca=global.Math.fround;var da=env.abort;var ea=env.assert;var fa=env.invoke_viiiii;var ga=env.invoke_vid;var ha=env.invoke_fiff;var ia=env.invoke_vi;var ja=env.invoke_vii;var ka=env.invoke_ii;var la=env.invoke_viddi;var ma=env.invoke_vidd;var na=env.invoke_iiii;var oa=env.invoke_diii;var pa=env.invoke_di;var qa=env.invoke_iid;var ra=env.invoke_iii;var sa=env.invoke_viiddi;var ta=env.invoke_viiiiii;var ua=env.invoke_dii;var va=env.invoke_i;var wa=env.invoke_iiiiii;var xa=env.invoke_viiid;var ya=env.invoke_viififi;var za=env.invoke_viii;var Aa=env.invoke_v;var Ba=env.invoke_viid;var Ca=env.invoke_idd;var Da=env.invoke_viiii;var Ea=env._pthread_cleanup_pop;var Fa=env._YGDisplayToString;var Ga=env.__nbind_finish;var Ha=env.__nbind_reference_external;var Ia=env._removeAccessorPrefix;var Ja=env._typeModule;var Ka=env._YGFlexDirectionToString;var La=env._atexit;var Ma=env.__decorate;var Na=env._llvm_stackrestore;var Oa=env.___assert_fail;var Pa=env.___cxa_allocate_exception;var Qa=env.__ZSt18uncaught_exceptionv;var Ra=env.__extends;var Sa=env._YGOverflowToString;var Ta=env.__nbind_get_value_object;var Ua=env._emscripten_set_main_loop_timing;var Va=env._fabsf;var Wa=env._sbrk;var Xa=env._YGJustifyToString;var Ya=env.__nbind_register_type;var Za=env._YGWrapToString;var _a=env._YGAlignToString;var $a=env._emscripten_memcpy_big;var ab=env.___resumeException;var bb=env.___cxa_find_matching_catch;var cb=env._sysconf;var db=env.___setErrNo;var eb=env.__nbind_register_class;var fb=env._abort;var gb=env._nbind_value;var hb=env._pthread_self;var ib=env._llvm_stacksave;var jb=env.__nbind_register_primitive;var kb=env._YGPositionTypeToString;var lb=env.___syscall140;var mb=env.___syscall54;var nb=env._defineHidden;var ob=env._emscripten_set_main_loop;var pb=env.__nbind_register_callback_signature;var qb=env.__nbind_register_function;var rb=env.__nbind_free_external;var sb=env.___cxa_atexit;var tb=env.___cxa_throw;var ub=env._YGEdgeToString;var vb=env.___syscall6;var wb=env._pthread_cleanup_push;var xb=env._time;var yb=env._emscripten_asm_const_8;var zb=env._emscripten_asm_const_7;var Ab=env._emscripten_asm_const_6;var Bb=env._emscripten_asm_const_5;var Cb=env._emscripten_asm_const_4;var Db=env._emscripten_asm_const_3;var Eb=env.___syscall146;var Fb=env.__nbind_register_pool;var Gb=ca(0);const Hb=ca(0);
// EMSCRIPTEN_START_FUNCS
function ye(a,b,d,e,f,h){a=a|0;b=b|0;d=ca(d);e=ca(e);f=f|0;h=h|0;var i=Hb,j=0,l=0,m=0,n=0;n=c[1684+(b<<2)>>2]|0;j=a+380+(n<<3)|0;switch(c[a+380+(n<<3)+4>>2]|0){case 2:{i=ca(ca(ca(g[j>>2])*d)/ca(100.0));break}case 1:{i=ca(g[j>>2]);break}default:i=ca(s)}a:do if((b&-2|0)==2?(l=c[a+96>>2]|0,(l|0)!=0):0){j=a+92|0;if((l|0)==3)d=ca(0.0);else switch(l|0){case 2:{d=ca(ca(ca(g[j>>2])*e)/ca(100.0));break a}case 1:{d=ca(g[j>>2]);break a}default:{d=ca(s);break a}}}else m=10;while(0);b:do if((m|0)==10){j=c[1636+(b<<2)>>2]|0;c:do if(!(c[a+60+(j<<3)+4>>2]|0)){if(b>>>0<2?(c[a+120>>2]|0)!=0:0){j=a+116|0;break}switch(j|0){case 0:case 2:case 4:case 5:{if(c[a+112>>2]|0){j=a+108|0;break c}break}default:{}}j=(c[a+128>>2]|0)==0?1604:a+124|0}else j=a+60+(j<<3)|0;while(0);l=c[j+4>>2]|0;if((l|0)==3)d=ca(0.0);else switch(l|0){case 2:{d=ca(ca(ca(g[j>>2])*e)/ca(100.0));break b}case 1:{d=ca(g[j>>2]);break b}default:{d=ca(s);break b}}}while(0);i=ca(i+ca(d+ca(je(a,b,e))));switch(c[f>>2]|0){case 2:case 1:{d=ca(g[h>>2]);g[h>>2]=((g[k>>2]=i,c[k>>2]|0)&2147483647)>>>0>2139095040|d<i?d:i;return}case 0:{if(((g[k>>2]=i,c[k>>2]|0)&2147483647)>>>0>2139095040)return;c[f>>2]=2;g[h>>2]=i;return}default:return}}function ze(a){a=a|0;var b=0,d=Hb,e=0,f=0,h=0,j=0,l=0,m=0,n=0,o=0,p=0,q=Hb;p=i;i=i+16|0;e=p;b=c[a+956>>2]|0;if(b){q=ca(g[a+904>>2]);d=ca(g[a+908>>2]);d=ca(Kb[b&0](a,q,d));if(((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0<2139095041){q=d;i=p;return ca(q)}c[e>>2]=6652;fe(a,5,5664,e);q=d;i=p;return ca(q)}h=a+944|0;j=qc(c[h>>2]|0)|0;if(j){l=a+16|0;m=a+4|0;f=0;n=0;while(1){b=uc(c[h>>2]|0,n)|0;if(c[b+936>>2]|0){b=f;break}if((c[b+24>>2]|0)==1)b=f;else{e=c[b+20>>2]|0;if(!e)e=c[l>>2]|0;if((e|0)==5?(c[m>>2]|0)>>>0>=2:0){o=16;break}b=(f|0)==0?b:f}n=n+1|0;if(n>>>0>=j>>>0)break;else f=b}if((o|0)==16){d=ca(ze(b));o=b+404|0;q=ca(g[o>>2]);q=ca(d+q);i=p;return ca(q)}if(b){o=b;d=ca(ze(o));o=o+404|0;q=ca(g[o>>2]);q=ca(d+q);i=p;return ca(q)}}q=ca(g[a+908>>2]);i=p;return ca(q)}function Ae(a,b,d){a=a|0;b=b|0;d=d|0;if(c[a+(b<<3)+4>>2]|0){a=a+(b<<3)|0;return a|0}if((b&-3|0)==1?(c[a+60>>2]|0)!=0:0){a=a+56|0;return a|0}switch(b|0){case 0:case 2:case 4:case 5:{if(c[a+52>>2]|0){a=a+48|0;return a|0}break}default:{}}if(!(c[a+68>>2]|0)){a=(b&-2|0)==4?1668:d;return a|0}else{a=a+64|0;return a|0}return 0}function Be(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,j=0,k=0,l=0.0;k=i;i=i+32|0;j=k+8|0;f=k;e=c[d+4>>2]|0;switch(e|0){case 3:{c[f>>2]=b;fe(a,3,7181,f);i=k;return}case 0:{i=k;return}default:{l=+ca(g[d>>2]);c[j>>2]=b;h[j+8>>3]=l;c[j+16>>2]=(e|0)==1?7192:7195;fe(a,3,7197,j);i=k;return}}}function Ce(b,e,f){b=b|0;e=e|0;f=f|0;var h=0,j=Hb,l=0,m=Hb,n=0,o=0,p=0,q=0;p=i;i=i+48|0;o=p;n=p+8|0;h=f+8|0;a[k>>0]=a[h>>0];a[k+1>>0]=a[h+1>>0];a[k+2>>0]=a[h+2>>0];a[k+3>>0]=a[h+3>>0];j=ca(g[k>>2]);h=f+12|0;h=d[h>>0]|d[h+1>>0]<<8|d[h+2>>0]<<16|d[h+3>>0]<<24;a[k>>0]=a[f>>0];a[k+1>>0]=a[f+1>>0];a[k+2>>0]=a[f+2>>0];a[k+3>>0]=a[f+3>>0];m=ca(g[k>>2]);l=f+4|0;do if((d[l>>0]|d[l+1>>0]<<8|d[l+2>>0]<<16|d[l+3>>0]<<24|0)==(h|0)){l=(h|0)==0;if(!l?!(ca(O(ca(m-j)))<ca(.0000999999974)):0)break;q=f+16|0;a[k>>0]=a[q>>0];a[k+1>>0]=a[q+1>>0];a[k+2>>0]=a[q+2>>0];a[k+3>>0]=a[q+3>>0];j=ca(g[k>>2]);q=f+20|0;if((h|0)==(d[q>>0]|d[q+1>>0]<<8|d[q+2>>0]<<16|d[q+3>>0]<<24|0)){if(l){q=f+28|0;if(d[q>>0]|d[q+1>>0]<<8|d[q+2>>0]<<16|d[q+3>>0]<<24)break}else{if(!(ca(O(ca(m-j)))<ca(.0000999999974)))break;q=f+28|0;if((h|0)!=(d[q>>0]|d[q+1>>0]<<8|d[q+2>>0]<<16|d[q+3>>0]<<24|0))break;q=f+24|0;a[k>>0]=a[q>>0];a[k+1>>0]=a[q+1>>0];a[k+2>>0]=a[q+2>>0];a[k+3>>0]=a[q+3>>0];if(!(ca(O(ca(m-ca(g[k>>2]))))<ca(.0000999999974)))break}if(((g[k>>2]=m,c[k>>2]|0)&2147483647)>>>0<=2139095040?ca(O(ca(m)))<ca(.0000999999974):0){i=p;return}Be(b,e,f);i=p;return}}while(0);l=0;do{h=ub(l|0)|0;c[o>>2]=e;c[o+4>>2]=h;po(n,30,7175,o)|0;h=f+(l<<3)|0;j=ca(g[h>>2]);if(!(((g[k>>2]=j,c[k>>2]|0)&2147483647)>>>0<=2139095040?ca(O(ca(j)))<ca(.0000999999974):0))Be(b,n,h);l=l+1|0}while((l|0)!=9);i=p;return}function De(a,b,d){a=a|0;b=b|0;d=d|0;do if(!(c[d+4>>2]|0))if(!(c[d+52>>2]|0)){d=(c[d+68>>2]|0)==0?1668:d+64|0;break}else{d=d+48|0;break}while(0);Be(a,b,d);return}function Ee(){var a=0;a=vn(4)|0;c[a>>2]=Dc()|0;return a|0}function Fe(a){a=a|0;if(a){Fc(c[a>>2]|0);xn(a)}return}function Ge(a){a=a|0;Fc(c[a>>2]|0);return}function He(a,b,d){a=a|0;b=b|0;d=d|0;ge(c[a>>2]|0,b,d);return}function Ie(a,b){a=a|0;b=b|0;return he(c[a>>2]|0,b)|0}function Je(){var a=0,b=0;a=vn(8)|0;b=wc()|0;c[a>>2]=b;c[a+4>>2]=0;Oc(b,a);return a|0}function Ke(a){a=a|0;var b=0;b=vn(8)|0;Me(b,a);return b|0}function Le(a){a=a|0;if(a){Ne(a);xn(a)}return}function Me(a,b){a=a|0;b=b|0;if(!b)b=wc()|0;else b=vc(c[b>>2]|0)|0;c[a>>2]=b;c[a+4>>2]=0;Oc(b,a);return}function Ne(a){a=a|0;var b=0;xc(c[a>>2]|0);b=a+4|0;a=c[b>>2]|0;c[b>>2]=0;if(a){b=c[a>>2]|0;if(b)rb(b|0);xn(a)}return}function Oe(a){a=a|0;var b=0,d=0;d=a+4|0;b=c[d>>2]|0;c[d>>2]=0;if(b){d=c[b>>2]|0;if(d)rb(d|0);xn(b)}Bc(c[a>>2]|0);return}function Pe(a,b){a=a|0;b=b|0;Lc(c[a>>2]|0,c[b>>2]|0);return}function Qe(a,b){a=a|0;b=b|0;_c(c[a>>2]|0,b);return}function Re(a,b,d){a=a|0;b=b|0;d=+d;md(c[a>>2]|0,b,ca(d));return}function Se(a,b,d){a=a|0;b=b|0;d=+d;nd(c[a>>2]|0,b,ca(d));return}function Te(a,b){a=a|0;b=b|0;Uc(c[a>>2]|0,b);return}function Ue(a,b){a=a|0;b=b|0;Wc(c[a>>2]|0,b);return}function Ve(a,b){a=a|0;b=b|0;Yc(c[a>>2]|0,b);return}function We(a,b){a=a|0;b=b|0;Qc(c[a>>2]|0,b);return}function Xe(a,b){a=a|0;b=b|0;ad(c[a>>2]|0,b);return}function Ye(a,b){a=a|0;b=b|0;Sc(c[a>>2]|0,b);return}function Ze(a,b,d){a=a|0;b=b|0;d=+d;pd(c[a>>2]|0,b,ca(d));return}function _e(a,b,d){a=a|0;b=b|0;d=+d;qd(c[a>>2]|0,b,ca(d));return}function $e(a,b){a=a|0;b=b|0;sd(c[a>>2]|0,b);return}function af(a,b){a=a|0;b=b|0;cd(c[a>>2]|0,b);return}function bf(a,b){a=a|0;b=b|0;ed(c[a>>2]|0,b);return}function cf(a,b){a=a|0;b=+b;gd(c[a>>2]|0,ca(b));return}function df(a,b){a=a|0;b=+b;jd(c[a>>2]|0,ca(b));return}function ef(a,b){a=a|0;b=+b;kd(c[a>>2]|0,ca(b));return}function ff(a,b){a=a|0;b=+b;hd(c[a>>2]|0,ca(b));return}function gf(a,b){a=a|0;b=+b;id(c[a>>2]|0,ca(b));return}function hf(a,b){a=a|0;b=+b;yd(c[a>>2]|0,ca(b));return}function jf(a,b){a=a|0;b=+b;zd(c[a>>2]|0,ca(b));return}function kf(a){a=a|0;Ad(c[a>>2]|0);return}function lf(a,b){a=a|0;b=+b;Cd(c[a>>2]|0,ca(b));return}function mf(a,b){a=a|0;b=+b;Dd(c[a>>2]|0,ca(b));return}function nf(a){a=a|0;Ed(c[a>>2]|0);return}function of(a,b){a=a|0;b=+b;Gd(c[a>>2]|0,ca(b));return}function pf(a,b){a=a|0;b=+b;Hd(c[a>>2]|0,ca(b));return}function qf(a,b){a=a|0;b=+b;Jd(c[a>>2]|0,ca(b));return}function rf(a,b){a=a|0;b=+b;Kd(c[a>>2]|0,ca(b));return}function sf(a,b){a=a|0;b=+b;Md(c[a>>2]|0,ca(b));return}function tf(a,b){a=a|0;b=+b;Nd(c[a>>2]|0,ca(b));return}function uf(a,b){a=a|0;b=+b;Pd(c[a>>2]|0,ca(b));return}function vf(a,b){a=a|0;b=+b;Qd(c[a>>2]|0,ca(b));return}function wf(a,b){a=a|0;b=+b;Sd(c[a>>2]|0,ca(b));return}function xf(a,b,d){a=a|0;b=b|0;d=+d;wd(c[a>>2]|0,b,ca(d));return}function yf(a,b,d){a=a|0;b=b|0;d=+d;td(c[a>>2]|0,b,ca(d));return}function zf(a,b,d){a=a|0;b=b|0;d=+d;ud(c[a>>2]|0,b,ca(d));return}function Af(a){a=a|0;return $c(c[a>>2]|0)|0}function Bf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0.0,j=0;e=i;i=i+16|0;j=e;od(j,c[b>>2]|0,d);f=+ca(g[j>>2]);c[a>>2]=c[j+4>>2];h[a+8>>3]=f;i=e;return}function Cf(a){a=a|0;return Vc(c[a>>2]|0)|0}function Df(a){a=a|0;return Xc(c[a>>2]|0)|0}function Ef(a){a=a|0;return Zc(c[a>>2]|0)|0}function Ff(a){a=a|0;return Rc(c[a>>2]|0)|0}function Gf(a){a=a|0;return bd(c[a>>2]|0)|0}function Hf(a){a=a|0;return Tc(c[a>>2]|0)|0}function If(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0.0,j=0;e=i;i=i+16|0;j=e;rd(j,c[b>>2]|0,d);f=+ca(g[j>>2]);c[a>>2]=c[j+4>>2];h[a+8>>3]=f;i=e;return}function Jf(a){a=a|0;return dd(c[a>>2]|0)|0}function Kf(a){a=a|0;return fd(c[a>>2]|0)|0}function Lf(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0;d=i;i=i+16|0;f=d;ld(f,c[b>>2]|0);e=+ca(g[f>>2]);c[a>>2]=c[f+4>>2];h[a+8>>3]=e;i=d;return}function Mf(a){a=a|0;return +(+ca(Mc(c[a>>2]|0)))}function Nf(a){a=a|0;return +(+ca(Nc(c[a>>2]|0)))}function Of(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0;d=i;i=i+16|0;f=d;Bd(f,c[b>>2]|0);e=+ca(g[f>>2]);c[a>>2]=c[f+4>>2];h[a+8>>3]=e;i=d;return}function Pf(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0;d=i;i=i+16|0;f=d;Fd(f,c[b>>2]|0);e=+ca(g[f>>2]);c[a>>2]=c[f+4>>2];h[a+8>>3]=e;i=d;return}function Qf(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0;d=i;i=i+16|0;f=d;Id(f,c[b>>2]|0);e=+ca(g[f>>2]);c[a>>2]=c[f+4>>2];h[a+8>>3]=e;i=d;return}function Rf(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0;d=i;i=i+16|0;f=d;Ld(f,c[b>>2]|0);e=+ca(g[f>>2]);c[a>>2]=c[f+4>>2];h[a+8>>3]=e;i=d;return}function Sf(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0;d=i;i=i+16|0;f=d;Od(f,c[b>>2]|0);e=+ca(g[f>>2]);c[a>>2]=c[f+4>>2];h[a+8>>3]=e;i=d;return}function Tf(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0;d=i;i=i+16|0;f=d;Rd(f,c[b>>2]|0);e=+ca(g[f>>2]);c[a>>2]=c[f+4>>2];h[a+8>>3]=e;i=d;return}function Uf(a){a=a|0;return +(+ca(Td(c[a>>2]|0)))}function Vf(a,b){a=a|0;b=b|0;return +(+ca(xd(c[a>>2]|0,b)))}function Wf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0.0,j=0;e=i;i=i+16|0;j=e;vd(j,c[b>>2]|0,d);f=+ca(g[j>>2]);c[a>>2]=c[j+4>>2];h[a+8>>3]=f;i=e;return}function Xf(a,b,d){a=a|0;b=b|0;d=d|0;Hc(c[a>>2]|0,c[b>>2]|0,d);return}function Yf(a,b){a=a|0;b=b|0;Ac(c[a>>2]|0,c[b>>2]|0);return}function Zf(a){a=a|0;return yc(c[a>>2]|0)|0}function _f(a){a=a|0;a=Ic(c[a>>2]|0)|0;if(!a)a=0;else a=Pc(a)|0;return a|0}function $f(a,b){a=a|0;b=b|0;b=zc(c[a>>2]|0,b)|0;if(!b)b=0;else b=Pc(b)|0;return b|0}function ag(a,b){a=a|0;b=b|0;var d=0,e=0;e=vn(4)|0;d=c[b>>2]|0;c[e>>2]=d;Ha(d|0);d=a+4|0;b=c[d>>2]|0;c[d>>2]=e;if(b){d=c[b>>2]|0;if(d)rb(d|0);xn(b)}Gc(c[a>>2]|0,1);return}function bg(a){a=a|0;var b=0,d=0;d=a+4|0;b=c[d>>2]|0;c[d>>2]=0;if(b){d=c[b>>2]|0;if(d)rb(d|0);xn(b)}Gc(c[a>>2]|0,0);return}function cg(a,b,d,e,f,g){a=a|0;b=b|0;d=+d;e=e|0;f=+f;g=g|0;var h=0,j=0;h=i;i=i+16|0;j=h;b=c[b+4>>2]|0;jm(j);rg(a,c[b>>2]|0,d,e,f,g);km(j);i=h;return}function dg(a){a=a|0;Jc(c[a>>2]|0);return}function eg(a){a=a|0;return Kc(c[a>>2]|0)|0}function fg(a,b,d,e){a=a|0;b=+b;d=+d;e=e|0;de(c[a>>2]|0,ca(b),ca(d),e);return}function gg(a){a=a|0;return +(+ca(Ud(c[a>>2]|0)))}function hg(a){a=a|0;return +(+ca(Wd(c[a>>2]|0)))}function ig(a){a=a|0;return +(+ca(Vd(c[a>>2]|0)))}function jg(a){a=a|0;return +(+ca(Xd(c[a>>2]|0)))}function kg(a){a=a|0;return +(+ca(Yd(c[a>>2]|0)))}function lg(a){a=a|0;return +(+ca(Zd(c[a>>2]|0)))}function mg(a,b){a=a|0;b=b|0;h[a>>3]=+ca(Ud(c[b>>2]|0));h[a+8>>3]=+ca(Wd(c[b>>2]|0));h[a+16>>3]=+ca(Vd(c[b>>2]|0));h[a+24>>3]=+ca(Xd(c[b>>2]|0));h[a+32>>3]=+ca(Yd(c[b>>2]|0));h[a+40>>3]=+ca(Zd(c[b>>2]|0));return}function ng(a,b){a=a|0;b=b|0;return +(+ca(_d(c[a>>2]|0,b)))}function og(a,b){a=a|0;b=b|0;return +(+ca($d(c[a>>2]|0,b)))}function pg(a,b){a=a|0;b=b|0;return +(+ca(ae(c[a>>2]|0,b)))}function qg(a,b,c,d,e,f){a=a|0;b=b|0;c=ca(c);d=d|0;e=ca(e);f=f|0;var j=0,k=0;j=i;i=i+16|0;k=j;cg(k,Pc(b)|0,+c,d,+e,f);g[a>>2]=ca(+h[k>>3]);g[a+4>>2]=ca(+h[k+8>>3]);i=j;return}function rg(b,d,e,f,g,h){b=b|0;d=d|0;e=+e;f=f|0;g=+g;h=h|0;var j=0,k=0;k=i;i=i+32|0;j=k;sg()|0;f=Ab(0,c[427]|0,d|0,+e,f|0,+g,h|0)|0;if(!(f&1)){j=f;c[b>>2]=c[j>>2];c[b+4>>2]=c[j+4>>2];c[b+8>>2]=c[j+8>>2];c[b+12>>2]=c[j+12>>2]}else{c[j>>2]=0;c[j+8>>2]=0;d=j+24|0;a[d>>0]=0;Ta(f|0,j|0)|0;j=j+8|0;c[b>>2]=c[j>>2];c[b+4>>2]=c[j+4>>2];c[b+8>>2]=c[j+8>>2];c[b+12>>2]=c[j+12>>2];a[d>>0]=0}i=k;return}function sg(){var b=0;if(!(a[8]|0)){c[425]=1712;c[426]=4;c[427]=pb(1712,5)|0;b=8;c[b>>2]=1;c[b+4>>2]=0}return 1700}function tg(){return Cc()|0}function ug(){var a=0;a=vg(1,0)|0;wg()|0;jl(7211,1,a,1732,0);xg(1768);yg(1772);zg(1776);Ag(1780);Bg(1784);return}function vg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;wg()|0;b=b|4;c[f>>2]=b;d=c[440]|0;if(d>>>0<(c[441]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[440]=b}else{cl(1756,e,f);b=c[440]|0}i=g;return (b-(c[439]|0)>>3)+-1|0}function wg(){var b=0;if(!(a[336]|0)){c[433]=0;c[434]=4;c[435]=1824;c[436]=2216;c[437]=0;c[439]=0;c[440]=0;c[441]=0;sb(25,1732,n|0)|0;b=336;c[b>>2]=1;c[b+4>>2]=0}return 1732}function xg(a){a=a|0;var b=0,d=0,e=0,f=0;Lk(a,8504);d=c[a>>2]|0;Mk()|0;d=d+28|0;b=c[d>>2]|0;f=vn(24)|0;c[f+4>>2]=0;c[f+8>>2]=0;c[f+12>>2]=0;c[f+16>>2]=3404;c[f+20>>2]=0;e=b;c[f>>2]=c[e>>2];c[b>>2]=f;c[d>>2]=c[e>>2];a=c[a>>2]|0;Nk()|0;a=a+28|0;d=c[a>>2]|0;e=vn(24)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e+12>>2]=0;c[e+16>>2]=3440;c[e+20>>2]=0;b=d;c[e>>2]=c[b>>2];c[d>>2]=e;c[a>>2]=c[b>>2];return}function yg(a){a=a|0;var b=0,d=0,e=0;Ek(a,8497);a=c[a>>2]|0;Fk()|0;a=a+28|0;d=c[a>>2]|0;e=vn(24)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e+12>>2]=0;c[e+16>>2]=3356;c[e+20>>2]=0;b=d;c[e>>2]=c[b>>2];c[d>>2]=e;c[a>>2]=c[b>>2];return}function zg(a){a=a|0;var b=0,d=0,e=0,f=0;sk(a,8491);d=c[a>>2]|0;tk()|0;d=d+28|0;b=c[d>>2]|0;f=vn(24)|0;c[f+4>>2]=0;c[f+8>>2]=0;c[f+12>>2]=0;c[f+16>>2]=3248;c[f+20>>2]=0;e=b;c[f>>2]=c[e>>2];c[b>>2]=f;c[d>>2]=c[e>>2];a=c[a>>2]|0;uk()|0;a=a+28|0;d=c[a>>2]|0;e=vn(24)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e+12>>2]=0;c[e+16>>2]=3284;c[e+20>>2]=0;b=d;c[e>>2]=c[b>>2];c[d>>2]=e;c[a>>2]=c[b>>2];return}function Ag(a){a=a|0;var b=0,d=0,e=0;b=i;i=i+16|0;d=b+8|0;e=b;Pj(a,8418);Qj(a,8425,2,0);Rj(a,7264,26,0);c[e>>2]=1;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Sj(a,8432,d,0);c[e>>2]=3;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Tj(a,8462,d,1);i=b;return}function Bg(a){a=a|0;var b=0,d=0,e=0;b=i;i=i+16|0;d=b+8|0;e=b;Cg(a,7228);Dg(a,7233,3,0);Eg(a,7247,5,0);Fg(a,7264,27,0);c[e>>2]=28;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Gg(a,7272,d,0);c[e>>2]=1;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Hg(a,7278,d,0);c[e>>2]=2;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7288,d,0);c[e>>2]=1;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Jg(a,7304,d,0);c[e>>2]=2;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Jg(a,7316,d,0);c[e>>2]=3;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7335,d,0);c[e>>2]=4;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7351,d,0);c[e>>2]=5;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7365,d,0);c[e>>2]=6;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7378,d,0);c[e>>2]=7;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7395,d,0);c[e>>2]=8;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7407,d,0);c[e>>2]=3;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Jg(a,7425,d,0);c[e>>2]=4;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Jg(a,7435,d,0);c[e>>2]=9;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7452,d,0);c[e>>2]=10;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7466,d,0);c[e>>2]=11;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ig(a,7478,d,0);c[e>>2]=1;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7489,d,0);c[e>>2]=2;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7497,d,0);c[e>>2]=3;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7510,d,0);c[e>>2]=4;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7530,d,0);c[e>>2]=5;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7542,d,0);c[e>>2]=6;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7556,d,0);c[e>>2]=7;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7565,d,0);c[e>>2]=29;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Gg(a,7581,d,0);c[e>>2]=8;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7594,d,0);c[e>>2]=9;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7604,d,0);c[e>>2]=30;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Gg(a,7621,d,0);c[e>>2]=10;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7635,d,0);c[e>>2]=11;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7647,d,0);c[e>>2]=12;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7666,d,0);c[e>>2]=13;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7679,d,0);c[e>>2]=14;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7699,d,0);c[e>>2]=15;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7711,d,0);c[e>>2]=16;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7730,d,0);c[e>>2]=17;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7743,d,0);c[e>>2]=18;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Kg(a,7763,d,0);c[e>>2]=5;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Jg(a,7778,d,0);c[e>>2]=6;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Jg(a,7788,d,0);c[e>>2]=7;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Jg(a,7799,d,0);c[e>>2]=6;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,7817,d,1);c[e>>2]=2;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Mg(a,7833,d,1);c[e>>2]=7;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,7845,d,1);c[e>>2]=8;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,7861,d,1);c[e>>2]=9;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,7875,d,1);c[e>>2]=10;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,7888,d,1);c[e>>2]=11;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,7905,d,1);c[e>>2]=12;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,7917,d,1);c[e>>2]=3;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Mg(a,7935,d,1);c[e>>2]=12;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ng(a,7945,d,1);c[e>>2]=1;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,7958,d,1);c[e>>2]=2;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,7970,d,1);c[e>>2]=13;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ng(a,7984,d,1);c[e>>2]=14;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ng(a,7993,d,1);c[e>>2]=15;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ng(a,8003,d,1);c[e>>2]=16;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ng(a,8015,d,1);c[e>>2]=17;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ng(a,8028,d,1);c[e>>2]=18;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ng(a,8040,d,1);c[e>>2]=3;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,8053,d,1);c[e>>2]=1;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Pg(a,8068,d,1);c[e>>2]=13;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,8078,d,1);c[e>>2]=14;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Lg(a,8090,d,1);c[e>>2]=4;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Mg(a,8101,d,1);c[e>>2]=5;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Qg(a,8112,d,0);c[e>>2]=19;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Rg(a,8124,d,0);c[e>>2]=15;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Sg(a,8136,d,1);c[e>>2]=16;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Tg(a,8150,d,0);c[e>>2]=4;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Ug(a,8160,d,0);c[e>>2]=20;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Vg(a,8169,d,0);c[e>>2]=31;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Gg(a,8184,d,0);c[e>>2]=32;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Gg(a,8201,d,0);c[e>>2]=17;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Wg(a,8211,d,1);c[e>>2]=1;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Xg(a,8219,d,0);c[e>>2]=4;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,8235,d,1);c[e>>2]=5;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,8251,d,1);c[e>>2]=6;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,8268,d,1);c[e>>2]=7;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,8283,d,1);c[e>>2]=8;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,8301,d,1);c[e>>2]=9;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Og(a,8318,d,1);c[e>>2]=21;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Yg(a,8336,d,1);c[e>>2]=2;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Pg(a,8354,d,1);c[e>>2]=3;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Pg(a,8372,d,1);c[e>>2]=4;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Pg(a,8390,d,1);i=b;return}function Cg(b,d){b=b|0;d=d|0;Nj()|0;c[b>>2]=2976;c[744]=8415;c[745]=2132;c[747]=d;if(!(a[224]|0)){c[755]=0;c[756]=0;d=224;c[d>>2]=1;c[d+4>>2]=0}c[746]=3020;c[752]=3;il(c[b>>2]|0);return}function Dg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;Hj()|0;h=Ij(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=2940;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Eg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;Bj()|0;h=Cj(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=2888;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Fg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;vj()|0;h=wj(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=2852;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Gg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;pj()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=qj(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2812;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Hg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;jj()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=kj(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2752;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Ig(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;dj()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=ej(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2708;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Jg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Zi()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=_i(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2660;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Kg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Ti()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=Ui(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2616;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Lg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Ni()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=Oi(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2576;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Mg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Gi()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=Hi(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2532;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Ng(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;ti()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=ui(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2396;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Og(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;ni()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=oi(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2356;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Pg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;hi()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=ii(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2312;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Qg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;bi()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=ci(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2264;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Rg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Xh()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=Yh(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2220;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Sg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Rh()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=Sh(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2180;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Tg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Lh()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=Mh(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2140;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Ug(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Fh()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=Gh(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2088;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Vg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;yh()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=zh(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=2036;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Wg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;sh()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=th(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=1996;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Xg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;mh()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=nh(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=1944;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Yg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Zg()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=_g(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=1788;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Zg(){var b=0;if(!(a[16]|0)){c[447]=1;c[448]=5;c[449]=1824;c[450]=1828;c[451]=0;c[453]=0;c[454]=0;c[455]=0;sb(33,1788,n|0)|0;b=16;c[b>>2]=1;c[b+4>>2]=0}return 1788}function _g(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Zg()|0;a=b|4;c[f>>2]=a;b=c[454]|0;if(b>>>0<(c[455]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[454]=a}else{$g(1812,e,f);a=c[454]|0}i=h;return ((a-(c[453]|0)|0)/12|0)+-1|0}function $g(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function ah(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;i=i+16|0;e=d+8|0;f=d;Zg()|0;g=(c[453]|0)+(a*12|0)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];b=dh(b,e)|0;i=d;return b|0}function bh(a){a=a|0;ch(a+24|0);return}function ch(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function dh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=i;i=i+48|0;e=f;d=c[b>>2]|0;g=c[b+4>>2]|0;b=a+(g>>1)|0;if(g&1)d=c[(c[b>>2]|0)+d>>2]|0;Mb[d&31](e,b);g=eh(e)|0;i=f;return g|0}function eh(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;d=h;fh()|0;b=c[467]|0;if(!b){e=dm(8)|0;b=e;f=vn(48)|0;g=f;d=a;a=g+48|0;do{c[g>>2]=c[d>>2];g=g+4|0;d=d+4|0}while((g|0)<(a|0));a=b+4|0;c[a>>2]=f;g=vn(8)|0;a=c[a>>2]|0;c[g>>2]=a;f=vn(16)|0;c[f+4>>2]=0;c[f+8>>2]=0;c[f>>2]=1884;c[f+12>>2]=a;c[g+4>>2]=f;c[e>>2]=g}else{c[d>>2]=b;g=d+4|0;c[g>>2]=d;c[d+8>>2]=0;c[d+8>>2]=gh(b,a,a+8|0,a+16|0,a+24|0,a+32|0,a+40|0)|0;b=c[(c[g>>2]|0)+8>>2]|0}i=h;return b|0}function fh(){var b=0;if(!(a[32]|0)){c[462]=0;c[463]=0;c[464]=0;c[465]=1856;c[467]=0;a[1872]=0;a[1873]=0;sb(34,1832,n|0)|0;b=32;c[b>>2]=1;c[b+4>>2]=0}return 1832}function gh(a,b,d,e,f,g,j){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;j=j|0;var k=0,l=0,m=0.0,n=0.0,o=0.0,p=0.0,q=0.0,r=0.0;k=i;i=i+16|0;l=k;jm(l);a=c[a>>2]|0;r=+h[b>>3];q=+h[d>>3];p=+h[e>>3];o=+h[f>>3];n=+h[g>>3];m=+h[j>>3];kh()|0;a=yb(0,c[478]|0,a|0,+r,+q,+p,+o,+n,+m)|0;km(l);i=k;return a|0}function hh(a){a=a|0;Io(a);xn(a);return}function ih(a){a=a|0;a=c[a+12>>2]|0;if(a)xn(a);return}function jh(a){a=a|0;xn(a);return}function kh(){var b=0;if(!(a[24]|0)){c[476]=1916;c[477]=6;c[478]=pb(1916,7)|0;b=24;c[b>>2]=1;c[b+4>>2]=0}return 1904}function lh(a){a=a|0;var b=0,d=0,e=0;d=a+24|0;b=c[d>>2]|0;if(b)do{e=b;b=c[b>>2]|0;xn(e)}while((b|0)!=0);c[d>>2]=0;d=a+16|0;b=c[d>>2]|0;if(b)do{e=b;b=c[b>>2]|0;xn(e)}while((b|0)!=0);c[d>>2]=0;return}function mh(){var b=0;if(!(a[40]|0)){c[486]=1;c[487]=1;c[488]=1824;c[489]=1980;c[490]=3;c[492]=0;c[493]=0;c[494]=0;sb(35,1944,n|0)|0;b=40;c[b>>2]=1;c[b+4>>2]=0}return 1944}function nh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;mh()|0;a=b|4;c[f>>2]=a;b=c[493]|0;if(b>>>0<(c[494]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[493]=a}else{oh(1968,e,f);a=c[493]|0}i=h;return ((a-(c[492]|0)|0)/12|0)+-1|0}function oh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function ph(a,b,d,e,f){a=a|0;b=b|0;d=+d;e=+e;f=f|0;var g=0;mh()|0;g=(c[492]|0)+(a*12|0)|0;a=c[g>>2]|0;g=c[g+4>>2]|0;b=b+(g>>1)|0;if(g&1)a=c[(c[b>>2]|0)+a>>2]|0;Ob[a&1](b,d,e,f);return}function qh(a){a=a|0;rh(a+24|0);return}function rh(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function sh(){var b=0;if(!(a[48]|0)){c[499]=1;c[500]=6;c[501]=1824;c[502]=2032;c[503]=0;c[505]=0;c[506]=0;c[507]=0;sb(36,1996,n|0)|0;b=48;c[b>>2]=1;c[b+4>>2]=0}return 1996}function th(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;sh()|0;a=b|4;c[f>>2]=a;b=c[506]|0;if(b>>>0<(c[507]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[506]=a}else{uh(2020,e,f);a=c[506]|0}i=h;return ((a-(c[505]|0)|0)/12|0)+-1|0}function uh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function vh(a,b){a=a|0;b=b|0;var d=0;sh()|0;d=(c[505]|0)+(a*12|0)|0;a=c[d>>2]|0;d=c[d+4>>2]|0;b=b+(d>>1)|0;if(d&1)a=c[(c[b>>2]|0)+a>>2]|0;return (Nb[a&31](b)|0)&1|0}function wh(a){a=a|0;xh(a+24|0);return}function xh(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function yh(){var b=0;if(!(a[56]|0)){c[509]=1;c[510]=6;c[511]=1824;c[512]=2072;c[513]=1;c[515]=0;c[516]=0;c[517]=0;sb(37,2036,n|0)|0;b=56;c[b>>2]=1;c[b+4>>2]=0}return 2036}function zh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;yh()|0;a=b|4;c[f>>2]=a;b=c[516]|0;if(b>>>0<(c[517]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[516]=a}else{Ah(2060,e,f);a=c[516]|0}i=h;return ((a-(c[515]|0)|0)/12|0)+-1|0}function Ah(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function Bh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;i=i+16|0;f=e+8|0;g=e;yh()|0;h=(c[515]|0)+(a*12|0)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Eh(b,f,d);i=e;return}function Ch(a){a=a|0;Dh(a+24|0);return}function Dh(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function Eh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;g=i;i=i+16|0;f=g;e=c[b>>2]|0;h=c[b+4>>2]|0;b=a+(h>>1)|0;if(h&1)e=c[(c[b>>2]|0)+e>>2]|0;c[f>>2]=d;Mb[e&31](b,f);e=c[f>>2]|0;if(e)rb(e|0);i=g;return}function Fh(){var b=0;if(!(a[64]|0)){c[522]=1;c[523]=6;c[524]=1824;c[525]=2124;c[526]=1;c[528]=0;c[529]=0;c[530]=0;sb(38,2088,n|0)|0;b=64;c[b>>2]=1;c[b+4>>2]=0}return 2088}function Gh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Fh()|0;a=b|4;c[f>>2]=a;b=c[529]|0;if(b>>>0<(c[530]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[529]=a}else{Hh(2112,e,f);a=c[529]|0}i=h;return ((a-(c[528]|0)|0)/12|0)+-1|0}function Hh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function Ih(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;Fh()|0;e=(c[528]|0)+(a*12|0)|0;a=c[e>>2]|0;e=c[e+4>>2]|0;b=b+(e>>1)|0;if(e&1)a=c[(c[b>>2]|0)+a>>2]|0;return Ub[a&15](b,d)|0}function Jh(a){a=a|0;Kh(a+24|0);return}function Kh(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function Lh(){var b=0;if(!(a[72]|0)){c[535]=1;c[536]=7;c[537]=1824;c[538]=2176;c[539]=0;c[541]=0;c[542]=0;c[543]=0;sb(39,2140,n|0)|0;b=72;c[b>>2]=1;c[b+4>>2]=0}return 2140}function Mh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Lh()|0;a=b|4;c[f>>2]=a;b=c[542]|0;if(b>>>0<(c[543]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[542]=a}else{Nh(2164,e,f);a=c[542]|0}i=h;return ((a-(c[541]|0)|0)/12|0)+-1|0}function Nh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function Oh(a,b){a=a|0;b=b|0;var d=0;Lh()|0;d=(c[541]|0)+(a*12|0)|0;a=c[d>>2]|0;d=c[d+4>>2]|0;b=b+(d>>1)|0;if(d&1)a=c[(c[b>>2]|0)+a>>2]|0;return Nb[a&31](b)|0}function Ph(a){a=a|0;Qh(a+24|0);return}function Qh(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function Rh(){var b=0;if(!(a[80]|0)){c[545]=1;c[546]=8;c[547]=1824;c[548]=2216;c[549]=0;c[551]=0;c[552]=0;c[553]=0;sb(40,2180,n|0)|0;b=80;c[b>>2]=1;c[b+4>>2]=0}return 2180}function Sh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Rh()|0;a=b|4;c[f>>2]=a;b=c[552]|0;if(b>>>0<(c[553]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[552]=a}else{Th(2204,e,f);a=c[552]|0}i=h;return ((a-(c[551]|0)|0)/12|0)+-1|0}function Th(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function Uh(a,b){a=a|0;b=b|0;var d=0;Rh()|0;d=(c[551]|0)+(a*12|0)|0;a=c[d>>2]|0;d=c[d+4>>2]|0;b=b+(d>>1)|0;if(d&1)a=c[(c[b>>2]|0)+a>>2]|0;return Nb[a&31](b)|0}function Vh(a){a=a|0;Wh(a+24|0);return}function Wh(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function Xh(){var b=0;if(!(a[88]|0)){c[555]=1;c[556]=7;c[557]=1824;c[558]=2256;c[559]=1;c[561]=0;c[562]=0;c[563]=0;sb(41,2220,n|0)|0;b=88;c[b>>2]=1;c[b+4>>2]=0}return 2220}function Yh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Xh()|0;a=b|4;c[f>>2]=a;b=c[562]|0;if(b>>>0<(c[563]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[562]=a}else{Zh(2244,e,f);a=c[562]|0}i=h;return ((a-(c[561]|0)|0)/12|0)+-1|0}function Zh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function _h(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;Xh()|0;e=(c[561]|0)+(a*12|0)|0;a=c[e>>2]|0;e=c[e+4>>2]|0;b=b+(e>>1)|0;if(e&1)a=c[(c[b>>2]|0)+a>>2]|0;Mb[a&31](b,d);return}function $h(a){a=a|0;ai(a+24|0);return}function ai(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function bi(){var b=0;if(!(a[96]|0)){c[566]=1;c[567]=4;c[568]=1824;c[569]=2300;c[570]=2;c[572]=0;c[573]=0;c[574]=0;sb(42,2264,n|0)|0;b=96;c[b>>2]=1;c[b+4>>2]=0}return 2264}function ci(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;bi()|0;a=b|4;c[f>>2]=a;b=c[573]|0;if(b>>>0<(c[574]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[573]=a}else{di(2288,e,f);a=c[573]|0}i=h;return ((a-(c[572]|0)|0)/12|0)+-1|0}function di(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function ei(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;bi()|0;f=(c[572]|0)+(a*12|0)|0;a=c[f>>2]|0;f=c[f+4>>2]|0;b=b+(f>>1)|0;if(f&1)a=c[(c[b>>2]|0)+a>>2]|0;ac[a&15](b,d,e);return}function fi(a){a=a|0;gi(a+24|0);return}function gi(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function hi(){var b=0;if(!(a[104]|0)){c[578]=1;c[579]=1;c[580]=1824;c[581]=2348;c[582]=1;c[584]=0;c[585]=0;c[586]=0;sb(43,2312,n|0)|0;b=104;c[b>>2]=1;c[b+4>>2]=0}return 2312}function ii(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;hi()|0;a=b|4;c[f>>2]=a;b=c[585]|0;if(b>>>0<(c[586]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[585]=a}else{ji(2336,e,f);a=c[585]|0}i=h;return ((a-(c[584]|0)|0)/12|0)+-1|0}function ji(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function ki(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;hi()|0;e=(c[584]|0)+(a*12|0)|0;a=c[e>>2]|0;e=c[e+4>>2]|0;b=b+(e>>1)|0;if(e&1)a=c[(c[b>>2]|0)+a>>2]|0;return +(+Xb[a&7](b,d))}function li(a){a=a|0;mi(a+24|0);return}function mi(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function ni(){var b=0;if(!(a[112]|0)){c[589]=1;c[590]=5;c[591]=1824;c[592]=2392;c[593]=0;c[595]=0;c[596]=0;c[597]=0;sb(44,2356,n|0)|0;b=112;c[b>>2]=1;c[b+4>>2]=0}return 2356}function oi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;ni()|0;a=b|4;c[f>>2]=a;b=c[596]|0;if(b>>>0<(c[597]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[596]=a}else{pi(2380,e,f);a=c[596]|0}i=h;return ((a-(c[595]|0)|0)/12|0)+-1|0}function pi(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function qi(a,b){a=a|0;b=b|0;var d=0;ni()|0;d=(c[595]|0)+(a*12|0)|0;a=c[d>>2]|0;d=c[d+4>>2]|0;b=b+(d>>1)|0;if(d&1)a=c[(c[b>>2]|0)+a>>2]|0;return +(+Sb[a&15](b))}function ri(a){a=a|0;si(a+24|0);return}function si(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function ti(){var b=0;if(!(a[120]|0)){c[599]=1;c[600]=9;c[601]=1824;c[602]=2432;c[603]=0;c[605]=0;c[606]=0;c[607]=0;sb(45,2396,n|0)|0;b=120;c[b>>2]=1;c[b+4>>2]=0}return 2396}function ui(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;ti()|0;a=b|4;c[f>>2]=a;b=c[606]|0;if(b>>>0<(c[607]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[606]=a}else{vi(2420,e,f);a=c[606]|0}i=h;return ((a-(c[605]|0)|0)/12|0)+-1|0}function vi(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function wi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;i=i+16|0;e=d+8|0;f=d;ti()|0;g=(c[605]|0)+(a*12|0)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];b=zi(b,e)|0;i=d;return b|0}function xi(a){a=a|0;yi(a+24|0);return}function yi(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function zi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;g=i;i=i+32|0;f=g+16|0;e=g;d=c[b>>2]|0;h=c[b+4>>2]|0;b=a+(h>>1)|0;if(h&1)d=c[(c[b>>2]|0)+d>>2]|0;Mb[d&31](e,b);Ai()|0;d=c[618]|0;if(!d){h=dm(8)|0;d=h;f=vn(16)|0;c[f>>2]=c[e>>2];c[f+4>>2]=c[e+4>>2];c[f+8>>2]=c[e+8>>2];c[f+12>>2]=c[e+12>>2];a=d+4|0;c[a>>2]=f;f=vn(8)|0;a=c[a>>2]|0;c[f>>2]=a;e=vn(16)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e>>2]=2488;c[e+12>>2]=a;c[f+4>>2]=e;c[h>>2]=f}else{c[f>>2]=d;h=f+4|0;c[h>>2]=f;f=f+8|0;c[f>>2]=0;c[f>>2]=Bi(d,e,e+8|0)|0;d=c[(c[h>>2]|0)+8>>2]|0}i=g;return d|0}function Ai(){var b=0;if(!(a[136]|0)){c[613]=0;c[614]=0;c[615]=0;c[616]=2460;c[618]=0;a[2476]=0;a[2477]=0;sb(34,2436,n|0)|0;b=136;c[b>>2]=1;c[b+4>>2]=0}return 2436}function Bi(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0.0,j=0;e=i;i=i+16|0;f=e;jm(f);j=c[a>>2]|0;a=c[b>>2]|0;g=+h[d>>3];Fi()|0;a=Cb(0,c[629]|0,j|0,a|0,+g)|0;km(f);i=e;return a|0}function Ci(a){a=a|0;Io(a);xn(a);return}function Di(a){a=a|0;a=c[a+12>>2]|0;if(a)xn(a);return}function Ei(a){a=a|0;xn(a);return}function Fi(){var b=0;if(!(a[128]|0)){c[627]=2520;c[628]=2;c[629]=pb(2520,3)|0;b=128;c[b>>2]=1;c[b+4>>2]=0}return 2508}function Gi(){var b=0;if(!(a[144]|0)){c[633]=1;c[634]=7;c[635]=1824;c[636]=2568;c[637]=1;c[639]=0;c[640]=0;c[641]=0;sb(46,2532,n|0)|0;b=144;c[b>>2]=1;c[b+4>>2]=0}return 2532}function Hi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Gi()|0;a=b|4;c[f>>2]=a;b=c[640]|0;if(b>>>0<(c[641]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[640]=a}else{Ii(2556,e,f);a=c[640]|0}i=h;return ((a-(c[639]|0)|0)/12|0)+-1|0}function Ii(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function Ji(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;i=i+16|0;f=e+8|0;g=e;Gi()|0;h=(c[639]|0)+(a*12|0)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];b=Mi(b,f,d)|0;i=e;return b|0}function Ki(a){a=a|0;Li(a+24|0);return}function Li(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function Mi(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;h=i;i=i+32|0;g=h+16|0;f=h;e=c[b>>2]|0;j=c[b+4>>2]|0;b=a+(j>>1)|0;if(j&1)e=c[(c[b>>2]|0)+e>>2]|0;ac[e&15](f,b,d);Ai()|0;e=c[618]|0;if(!e){j=dm(8)|0;e=j;g=vn(16)|0;c[g>>2]=c[f>>2];c[g+4>>2]=c[f+4>>2];c[g+8>>2]=c[f+8>>2];c[g+12>>2]=c[f+12>>2];d=e+4|0;c[d>>2]=g;g=vn(8)|0;d=c[d>>2]|0;c[g>>2]=d;f=vn(16)|0;c[f+4>>2]=0;c[f+8>>2]=0;c[f>>2]=2488;c[f+12>>2]=d;c[g+4>>2]=f;c[j>>2]=g}else{c[g>>2]=e;j=g+4|0;c[j>>2]=g;g=g+8|0;c[g>>2]=0;c[g>>2]=Bi(e,f,f+8|0)|0;e=c[(c[j>>2]|0)+8>>2]|0}i=h;return e|0}function Ni(){var b=0;if(!(a[152]|0)){c[644]=1;c[645]=10;c[646]=1824;c[647]=2612;c[648]=0;c[650]=0;c[651]=0;c[652]=0;sb(47,2576,n|0)|0;b=152;c[b>>2]=1;c[b+4>>2]=0}return 2576}function Oi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Ni()|0;a=b|4;c[f>>2]=a;b=c[651]|0;if(b>>>0<(c[652]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[651]=a}else{Pi(2600,e,f);a=c[651]|0}i=h;return ((a-(c[650]|0)|0)/12|0)+-1|0}function Pi(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function Qi(a,b){a=a|0;b=b|0;var d=0;Ni()|0;d=(c[650]|0)+(a*12|0)|0;a=c[d>>2]|0;d=c[d+4>>2]|0;b=b+(d>>1)|0;if(d&1)a=c[(c[b>>2]|0)+a>>2]|0;return Nb[a&31](b)|0}function Ri(a){a=a|0;Si(a+24|0);return}function Si(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function Ti(){var b=0;if(!(a[160]|0)){c[654]=1;c[655]=8;c[656]=1824;c[657]=2652;c[658]=1;c[660]=0;c[661]=0;c[662]=0;sb(48,2616,n|0)|0;b=160;c[b>>2]=1;c[b+4>>2]=0}return 2616}function Ui(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Ti()|0;a=b|4;c[f>>2]=a;b=c[661]|0;if(b>>>0<(c[662]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[661]=a}else{Vi(2640,e,f);a=c[661]|0}i=h;return ((a-(c[660]|0)|0)/12|0)+-1|0}function Vi(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function Wi(a,b,d){a=a|0;b=b|0;d=+d;var e=0;Ti()|0;e=(c[660]|0)+(a*12|0)|0;a=c[e>>2]|0;e=c[e+4>>2]|0;b=b+(e>>1)|0;if(e&1)a=c[(c[b>>2]|0)+a>>2]|0;Jb[a&31](b,d);return}function Xi(a){a=a|0;Yi(a+24|0);return}function Yi(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function Zi(){var b=0;if(!(a[168]|0)){c[665]=1;c[666]=1;c[667]=1824;c[668]=2696;c[669]=2;c[671]=0;c[672]=0;c[673]=0;sb(49,2660,n|0)|0;b=168;c[b>>2]=1;c[b+4>>2]=0}return 2660}function _i(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Zi()|0;a=b|4;c[f>>2]=a;b=c[672]|0;if(b>>>0<(c[673]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[672]=a}else{$i(2684,e,f);a=c[672]|0}i=h;return ((a-(c[671]|0)|0)/12|0)+-1|0}function $i(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function aj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=+e;var f=0;Zi()|0;f=(c[671]|0)+(a*12|0)|0;a=c[f>>2]|0;f=c[f+4>>2]|0;b=b+(f>>1)|0;if(f&1)a=c[(c[b>>2]|0)+a>>2]|0;cc[a&15](b,d,e);return}function bj(a){a=a|0;cj(a+24|0);return}function cj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function dj(){var b=0;if(!(a[176]|0)){c[677]=1;c[678]=8;c[679]=1824;c[680]=2744;c[681]=1;c[683]=0;c[684]=0;c[685]=0;sb(50,2708,n|0)|0;b=176;c[b>>2]=1;c[b+4>>2]=0}return 2708}function ej(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;dj()|0;a=b|4;c[f>>2]=a;b=c[684]|0;if(b>>>0<(c[685]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[684]=a}else{fj(2732,e,f);a=c[684]|0}i=h;return ((a-(c[683]|0)|0)/12|0)+-1|0}function fj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function gj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;dj()|0;e=(c[683]|0)+(a*12|0)|0;a=c[e>>2]|0;e=c[e+4>>2]|0;b=b+(e>>1)|0;if(e&1)a=c[(c[b>>2]|0)+a>>2]|0;Mb[a&31](b,d);return}function hj(a){a=a|0;ij(a+24|0);return}function ij(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function jj(){var b=0;if(!(a[184]|0)){c[688]=1;c[689]=9;c[690]=1824;c[691]=2788;c[692]=1;c[694]=0;c[695]=0;c[696]=0;sb(51,2752,n|0)|0;b=184;c[b>>2]=1;c[b+4>>2]=0}return 2752}function kj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;jj()|0;a=b|4;c[f>>2]=a;b=c[695]|0;if(b>>>0<(c[696]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[695]=a}else{lj(2776,e,f);a=c[695]|0}i=h;return ((a-(c[694]|0)|0)/12|0)+-1|0}function lj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function mj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;jj()|0;e=(c[694]|0)+(a*12|0)|0;a=c[e>>2]|0;e=c[e+4>>2]|0;b=b+(e>>1)|0;if(e&1)a=c[(c[b>>2]|0)+a>>2]|0;Mb[a&31](b,d);return}function nj(a){a=a|0;oj(a+24|0);return}function oj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function pj(){var b=0;if(!(a[192]|0)){c[703]=1;c[704]=22;c[705]=1824;c[706]=2848;c[707]=0;c[709]=0;c[710]=0;c[711]=0;sb(52,2812,n|0)|0;b=192;c[b>>2]=1;c[b+4>>2]=0}return 2812}function qj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;pj()|0;a=b|4;c[f>>2]=a;b=c[710]|0;if(b>>>0<(c[711]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[710]=a}else{rj(2836,e,f);a=c[710]|0}i=h;return ((a-(c[709]|0)|0)/12|0)+-1|0}function rj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function sj(a,b){a=a|0;b=b|0;var d=0;pj()|0;d=(c[709]|0)+(a*12|0)|0;a=c[d>>2]|0;d=c[d+4>>2]|0;b=b+(d>>1)|0;if(d&1)a=c[(c[b>>2]|0)+a>>2]|0;Lb[a&127](b);return}function tj(a){a=a|0;uj(a+24|0);return}function uj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function vj(){var b=0;if(!(a[200]|0)){c[713]=0;c[714]=23;c[715]=1824;c[716]=2256;c[717]=1;c[719]=0;c[720]=0;c[721]=0;sb(53,2852,n|0)|0;b=200;c[b>>2]=1;c[b+4>>2]=0}return 2852}function wj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;vj()|0;b=b|4;c[f>>2]=b;d=c[720]|0;if(d>>>0<(c[721]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[720]=b}else{xj(2876,e,f);b=c[720]|0}i=g;return (b-(c[719]|0)>>3)+-1|0}function xj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function yj(a,b){a=a|0;b=b|0;vj()|0;Lb[c[(c[2876>>2]|0)+(a<<3)>>2]&127](b);return}function zj(a){a=a|0;Aj(a+24|0);return}function Aj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Bj(){var b=0;if(!(a[208]|0)){c[722]=0;c[723]=11;c[724]=1824;c[725]=2924;c[726]=1;c[728]=0;c[729]=0;c[730]=0;sb(54,2888,n|0)|0;b=208;c[b>>2]=1;c[b+4>>2]=0}return 2888}function Cj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;Bj()|0;b=b|4;c[f>>2]=b;d=c[729]|0;if(d>>>0<(c[730]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[729]=b}else{Dj(2912,e,f);b=c[729]|0}i=g;return (b-(c[728]|0)>>3)+-1|0}function Dj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function Ej(a,b){a=a|0;b=b|0;Bj()|0;return Nb[c[(c[2912>>2]|0)+(a<<3)>>2]&31](b)|0}function Fj(a){a=a|0;Gj(a+24|0);return}function Gj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Hj(){var b=0;if(!(a[216]|0)){c[735]=0;c[736]=18;c[737]=1824;c[738]=2176;c[739]=0;c[741]=0;c[742]=0;c[743]=0;sb(55,2940,n|0)|0;b=216;c[b>>2]=1;c[b+4>>2]=0}return 2940}function Ij(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;Hj()|0;b=b|4;c[f>>2]=b;d=c[742]|0;if(d>>>0<(c[743]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[742]=b}else{Jj(2964,e,f);b=c[742]|0}i=g;return (b-(c[741]|0)>>3)+-1|0}function Jj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function Kj(a){a=a|0;Hj()|0;return Yb[c[(c[2964>>2]|0)+(a<<3)>>2]&7]()|0}function Lj(a){a=a|0;Mj(a+24|0);return}function Mj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Nj(){var b=0;if(!(a[232]|0)){c[748]=0;c[749]=0;c[750]=0;c[751]=3e3;c[753]=0;a[3016]=0;a[3017]=0;sb(34,2976,n|0)|0;b=232;c[b>>2]=1;c[b+4>>2]=0}return 2976}function Oj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((e&896|0)==512){if(d){a=c[d+4>>2]|0;if(a)Ko(a);xn(d)}}else if(b){Ne(b);xn(b)}return}function Pj(b,d){b=b|0;d=d|0;qk()|0;c[b>>2]=3204;c[801]=8417;c[802]=2932;c[804]=d;if(!(a[224]|0)){c[755]=0;c[756]=0;d=224;c[d>>2]=1;c[d+4>>2]=0}c[803]=3020;c[809]=5;il(c[b>>2]|0);return}function Qj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;kk()|0;h=lk(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=3164;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Rj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;ek()|0;h=fk(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=3120;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Sj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;_j()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=$j(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=3072;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Tj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;h=f+8|0;g=f;j=c[d>>2]|0;d=c[d+4>>2]|0;a=c[a>>2]|0;Uj()|0;c[g>>2]=j;c[g+4>>2]=d;c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];h=Vj(h,e)|0;a=a+28|0;d=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=0;c[g+12>>2]=h;c[g+16>>2]=3028;c[g+20>>2]=e;b=d;c[g>>2]=c[b>>2];c[d>>2]=g;c[a>>2]=c[b>>2];i=f;return}function Uj(){var b=0;if(!(a[240]|0)){c[757]=1;c[758]=8;c[759]=1824;c[760]=3064;c[761]=1;c[763]=0;c[764]=0;c[765]=0;sb(56,3028,n|0)|0;b=240;c[b>>2]=1;c[b+4>>2]=0}return 3028}function Vj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;Uj()|0;a=b|4;c[f>>2]=a;b=c[764]|0;if(b>>>0<(c[765]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[764]=a}else{Wj(3052,e,f);a=c[764]|0}i=h;return ((a-(c[763]|0)|0)/12|0)+-1|0}function Wj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function Xj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;Uj()|0;e=(c[763]|0)+(a*12|0)|0;a=c[e>>2]|0;e=c[e+4>>2]|0;b=b+(e>>1)|0;if(e&1)a=c[(c[b>>2]|0)+a>>2]|0;return (Ub[a&15](b,d)|0)&1|0}function Yj(a){a=a|0;Zj(a+24|0);return}function Zj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function _j(){var b=0;if(!(a[248]|0)){c[768]=1;c[769]=6;c[770]=1824;c[771]=3108;c[772]=2;c[774]=0;c[775]=0;c[776]=0;sb(57,3072,n|0)|0;b=248;c[b>>2]=1;c[b+4>>2]=0}return 3072}function $j(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=i;i=i+16|0;e=h+8|0;f=h;g=c[a>>2]|0;d=c[a+4>>2]|0;c[e>>2]=g;c[e+4>>2]=d;_j()|0;a=b|4;c[f>>2]=a;b=c[775]|0;if(b>>>0<(c[776]|0)>>>0){c[b>>2]=g;c[b+4>>2]=d;c[b+8>>2]=a;a=b+12|0;c[775]=a}else{ak(3096,e,f);a=c[775]|0}i=h;return ((a-(c[774]|0)|0)/12|0)+-1|0}function ak(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;g=a+4|0;i=c[a>>2]|0;j=i;f=(((c[g>>2]|0)-j|0)/12|0)+1|0;if(f>>>0>357913941)un(a);k=a+8|0;h=i;e=((c[k>>2]|0)-h|0)/12|0;if(e>>>0<178956970){e=e<<1;e=e>>>0<f>>>0?f:e}else e=357913941;l=(c[g>>2]|0)-h|0;f=(l|0)/12|0;h=vn(e*12|0)|0;n=c[b+4>>2]|0;d=c[d>>2]|0;m=h+(f*12|0)|0;c[m>>2]=c[b>>2];c[m+4>>2]=n;c[h+(f*12|0)+8>>2]=d;d=h+((((l|0)/-12|0)+f|0)*12|0)|0;To(d|0,i|0,l|0)|0;c[a>>2]=d;c[g>>2]=h+((f+1|0)*12|0);c[k>>2]=h+(e*12|0);if(j)xn(j);return}function bk(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;_j()|0;f=(c[774]|0)+(a*12|0)|0;a=c[f>>2]|0;f=c[f+4>>2]|0;b=b+(f>>1)|0;if(f&1)a=c[(c[b>>2]|0)+a>>2]|0;ac[a&15](b,d,(e|0)!=0);return}function ck(a){a=a|0;dk(a+24|0);return}function dk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);xn(d)}return}function ek(){var b=0;if(!(a[256]|0)){c[780]=0;c[781]=24;c[782]=1824;c[783]=3156;c[784]=1;c[786]=0;c[787]=0;c[788]=0;sb(58,3120,n|0)|0;b=256;c[b>>2]=1;c[b+4>>2]=0}return 3120}function fk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;ek()|0;b=b|4;c[f>>2]=b;d=c[787]|0;if(d>>>0<(c[788]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[787]=b}else{gk(3144,e,f);b=c[787]|0}i=g;return (b-(c[786]|0)>>3)+-1|0}function gk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function hk(a,b){a=a|0;b=b|0;ek()|0;Lb[c[(c[3144>>2]|0)+(a<<3)>>2]&127](b);return}function ik(a){a=a|0;jk(a+24|0);return}function jk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function kk(){var b=0;if(!(a[264]|0)){c[791]=0;c[792]=19;c[793]=1824;c[794]=3200;c[795]=0;c[797]=0;c[798]=0;c[799]=0;sb(59,3164,n|0)|0;b=264;c[b>>2]=1;c[b+4>>2]=0}return 3164}function lk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;kk()|0;b=b|4;c[f>>2]=b;d=c[798]|0;if(d>>>0<(c[799]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[798]=b}else{mk(3188,e,f);b=c[798]|0}i=g;return (b-(c[797]|0)>>3)+-1|0}function mk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function nk(a){a=a|0;kk()|0;return Yb[c[(c[3188>>2]|0)+(a<<3)>>2]&7]()|0}function ok(a){a=a|0;pk(a+24|0);return}function pk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function qk(){var b=0;if(!(a[272]|0)){c[805]=0;c[806]=0;c[807]=0;c[808]=3228;c[810]=0;a[3244]=0;a[3245]=0;sb(34,3204,n|0)|0;b=272;c[b>>2]=1;c[b+4>>2]=0}return 3204}function rk(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((e&896|0)==512){if(d){a=c[d+4>>2]|0;if(a)Ko(a);xn(d)}}else if(b){Ge(b);xn(b)}return}function sk(b,d){b=b|0;d=d|0;Ai()|0;c[b>>2]=2436;c[609]=8416;c[610]=3332;c[612]=d;if(!(a[296]|0)){c[837]=c[836];c[838]=0;d=296;c[d>>2]=1;c[d+4>>2]=0}c[611]=3348;c[617]=7;il(c[b>>2]|0);return}function tk(){var b=0;if(!(a[288]|0)){c[812]=4;c[813]=4;c[814]=1824;c[815]=3340;c[816]=0;c[818]=0;c[819]=0;c[820]=0;c[817]=60;sb(61,3248,n|0)|0;b=288;c[b>>2]=1;c[b+4>>2]=0}return 3248}function uk(){var b=0;if(!(a[280]|0)){c[821]=4;c[822]=1;c[823]=1824;c[824]=3320;c[825]=2;c[827]=0;c[828]=0;c[829]=0;c[826]=9;sb(62,3284,n|0)|0;b=280;c[b>>2]=1;c[b+4>>2]=0}return 3284}function vk(a,b){a=a|0;b=+b;var d=0,e=0,f=0,g=0;e=dm(8)|0;d=e;f=vn(16)|0;c[f>>2]=a;h[f+8>>3]=b;g=d+4|0;c[g>>2]=f;a=vn(8)|0;g=c[g>>2]|0;c[a>>2]=g;f=vn(16)|0;c[f+4>>2]=0;c[f+8>>2]=0;c[f>>2]=2488;c[f+12>>2]=g;c[a+4>>2]=f;c[e>>2]=a;return d|0}function wk(b,d,e){b=b|0;d=d|0;e=+e;c[b+8>>2]=d;h[b+16>>3]=e;a[b+24>>0]=1;return}function xk(a){a=a|0;yk(a+24|0);return}function yk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function zk(){var a=0,b=0,d=0,e=0,f=0;b=dm(8)|0;a=b;d=vn(16)|0;c[d>>2]=0;h[d+8>>3]=0.0;f=a+4|0;c[f>>2]=d;d=vn(8)|0;f=c[f>>2]|0;c[d>>2]=f;e=vn(16)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e>>2]=2488;c[e+12>>2]=f;c[d+4>>2]=e;c[b>>2]=d;return a|0}function Ak(b){b=b|0;c[b+8>>2]=0;h[b+16>>3]=0.0;a[b+24>>0]=1;return}function Bk(a){a=a|0;Ck(a+24|0);return}function Ck(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Dk(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((e&896|0)==512){if(d){a=c[d+4>>2]|0;if(a)Ko(a);xn(d)}}else if(b)xn(b);return}function Ek(b,d){b=b|0;d=d|0;fh()|0;c[b>>2]=1832;c[458]=8409;c[459]=3396;c[461]=d;if(!(a[296]|0)){c[837]=c[836];c[838]=0;d=296;c[d>>2]=1;c[d+4>>2]=0}c[460]=3348;c[466]=8;il(c[b>>2]|0);return}function Fk(){var b=0;if(!(a[304]|0)){c[839]=4;c[840]=5;c[841]=1824;c[842]=3392;c[843]=0;c[845]=0;c[846]=0;c[847]=0;c[844]=63;sb(64,3356,n|0)|0;b=304;c[b>>2]=1;c[b+4>>2]=0}return 3356}function Gk(){var a=0,b=0,d=0,e=0,f=0;a=dm(8)|0;b=a;d=vn(48)|0;e=d;f=e+48|0;do{c[e>>2]=0;e=e+4|0}while((e|0)<(f|0));e=b+4|0;c[e>>2]=d;f=vn(8)|0;d=c[e>>2]|0;c[f>>2]=d;e=vn(16)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e>>2]=1884;c[e+12>>2]=d;c[f+4>>2]=e;c[a>>2]=f;return b|0}function Hk(b){b=b|0;var d=0,e=0;d=b+8|0;e=d+48|0;do{c[d>>2]=0;d=d+4|0}while((d|0)<(e|0));a[b+56>>0]=1;return}function Ik(a){a=a|0;Jk(a+24|0);return}function Jk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Kk(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((e&896|0)==512){if(d){a=c[d+4>>2]|0;if(a)Ko(a);xn(d)}}else if(b)xn(b);return}function Lk(b,d){b=b|0;d=d|0;Zk()|0;c[b>>2]=3528;c[882]=7208;c[883]=3488;c[885]=d;if(!(a[296]|0)){c[837]=c[836];c[838]=0;d=296;c[d>>2]=1;c[d+4>>2]=0}c[884]=3348;c[890]=9;il(c[b>>2]|0);return}function Mk(){var b=0;if(!(a[320]|0)){c[851]=4;c[852]=6;c[853]=1824;c[854]=3524;c[855]=0;c[857]=0;c[858]=0;c[859]=0;c[856]=65;sb(66,3404,n|0)|0;b=320;c[b>>2]=1;c[b+4>>2]=0}return 3404}function Nk(){var b=0;if(!(a[312]|0)){c[860]=4;c[861]=1;c[862]=1824;c[863]=3476;c[864]=2;c[866]=0;c[867]=0;c[868]=0;c[865]=1;sb(67,3440,n|0)|0;b=312;c[b>>2]=1;c[b+4>>2]=0}return 3440}function Ok(a,b){a=+a;b=+b;var d=0,e=0,f=0,g=0,i=0;e=dm(8)|0;d=e;f=vn(16)|0;h[f>>3]=a;h[f+8>>3]=b;i=d+4|0;c[i>>2]=f;f=vn(8)|0;i=c[i>>2]|0;c[f>>2]=i;g=vn(16)|0;c[g+4>>2]=0;c[g+8>>2]=0;c[g>>2]=3504;c[g+12>>2]=i;c[f+4>>2]=g;c[e>>2]=f;return d|0}function Pk(b,c,d){b=b|0;c=+c;d=+d;h[b+8>>3]=c;h[b+16>>3]=d;a[b+24>>0]=1;return}function Qk(a){a=a|0;Rk(a+24|0);return}function Rk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Sk(a){a=a|0;Io(a);xn(a);return}function Tk(a){a=a|0;a=c[a+12>>2]|0;if(a)xn(a);return}function Uk(a){a=a|0;xn(a);return}function Vk(){var a=0,b=0,d=0,e=0,f=0;b=dm(8)|0;a=b;d=vn(16)|0;c[d>>2]=0;c[d+4>>2]=0;c[d+8>>2]=0;c[d+12>>2]=0;f=a+4|0;c[f>>2]=d;d=vn(8)|0;f=c[f>>2]|0;c[d>>2]=f;e=vn(16)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e>>2]=3504;c[e+12>>2]=f;c[d+4>>2]=e;c[b>>2]=d;return a|0}function Wk(b){b=b|0;var d=0;d=b+8|0;c[d>>2]=0;c[d+4>>2]=0;c[d+8>>2]=0;c[d+12>>2]=0;a[b+24>>0]=1;return}function Xk(a){a=a|0;Yk(a+24|0);return}function Yk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Zk(){var b=0;if(!(a[328]|0)){c[886]=0;c[887]=0;c[888]=0;c[889]=3552;c[891]=0;a[3568]=0;a[3569]=0;sb(34,3528,n|0)|0;b=328;c[b>>2]=1;c[b+4>>2]=0}return 3528}function _k(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((e&896|0)==512){if(d){a=c[d+4>>2]|0;if(a)Ko(a);xn(d)}}else if(b)xn(b);return}function $k(a){a=a|0;wg()|0;return Yb[c[(c[1756>>2]|0)+(a<<3)>>2]&7]()|0}function al(a){a=a|0;bl(a+24|0);return}function bl(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function cl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function dl(b,d){b=b|0;d=d|0;var e=0,f=0;if(!(a[8509]|0)){c[893]=0;sb(68,3572,n|0)|0;a[8509]=1}e=c[893]|0;a:do if(e){f=e;while(1){e=c[f+4>>2]|0;if((e|0)!=0?(vo(c[e+12>>2]|0,b)|0)==0:0)break;f=c[f>>2]|0;if(!f)break a}ml(e,d)}while(0);return}function el(){if(!(a[8509]|0)){c[893]=0;sb(68,3572,n|0)|0;a[8509]=1}return 3572}function fl(){if(!(a[8510]|0)){c[894]=0;sb(69,3576,n|0)|0;a[8510]=1}return 3576}function gl(){var b=0;if(!(a[8511]|0)){if(!(a[8512]|0)){a[8513]=8;a[8514]=0;a[8515]=16;a[8516]=8;a[8517]=0;a[8518]=8;a[8519]=0;a[8520]=8;a[8521]=0;a[8522]=8;a[8523]=0;a[8524]=32;a[8525]=32;a[8512]=1}c[895]=3584;a[8511]=1;b=3584}else b=c[895]|0;return b|0}function hl(){return 3596}function il(b){b=b|0;var d=0;if(!(a[8509]|0)){c[893]=0;sb(68,3572,n|0)|0;a[8509]=1}d=vn(8)|0;c[d+4>>2]=b;c[d>>2]=c[893];c[893]=d;return}function jl(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;if(!(a[8510]|0)){c[894]=0;sb(69,3576,n|0)|0;a[8510]=1}h=vn(24)|0;c[h+4>>2]=b;c[h+8>>2]=d;c[h+12>>2]=e;c[h+16>>2]=f;c[h+20>>2]=g;c[h>>2]=c[894];c[894]=h;return}function kl(){ol(3728,8622);return}function ll(a){a=a|0;var b=0,d=0;b=c[a>>2]|0;if(b)do{d=b;b=c[b>>2]|0;xn(d)}while((b|0)!=0);c[a>>2]=0;return}function ml(a,b){a=a|0;b=b|0;var d=0,e=0;a=a+36|0;d=c[a>>2]|0;if(d){e=c[d>>2]|0;if(e)rb(e|0);xn(d)}e=vn(4)|0;b=c[b>>2]|0;c[e>>2]=b;Ha(b|0);c[a>>2]=e;return}function nl(a){a=a|0;var b=0,d=0;b=c[a>>2]|0;if(b)do{d=b;b=c[b>>2]|0;xn(d)}while((b|0)!=0);c[a>>2]=0;return}function ol(b,d){b=b|0;d=d|0;pl()|0;c[b>>2]=3732;c[933]=8628;c[934]=3776;c[936]=d;if(!(a[224]|0)){c[755]=0;c[756]=0;d=224;c[d>>2]=1;c[d+4>>2]=0}c[935]=3020;c[941]=10;il(c[b>>2]|0);return}function pl(){var b=0;if(!(a[344]|0)){c[937]=0;c[938]=0;c[939]=0;c[940]=3756;c[942]=0;a[3772]=0;a[3773]=0;sb(34,3732,n|0)|0;b=344;c[b>>2]=1;c[b+4>>2]=0}return 3732}function ql(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((e&896|0)==512){if(d){a=c[d+4>>2]|0;if(a)Ko(a);xn(d)}}else if(b)xn(b);return}function rl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;v=i;i=i+48|0;u=v+24|0;q=v+20|0;t=v+8|0;r=v+4|0;s=v;b=c[b>>2]|0;if(b){m=u+4|0;n=u+8|0;o=t+4|0;p=t+8|0;k=t+8|0;l=u+8|0;do{h=b;j=c[h+16>>2]|0;if(j){f=c[j+12>>2]|0;c[u>>2]=0;c[m>>2]=0;c[n>>2]=0;e=(c[j+16>>2]|0)+1|0;ul(u,e);if(e)while(1){e=e+-1|0;fm(q,c[f>>2]|0);g=c[m>>2]|0;if(g>>>0<(c[l>>2]|0)>>>0){c[g>>2]=c[q>>2];c[m>>2]=(c[m>>2]|0)+4}else vl(u,q);if(!e)break;else f=f+4|0}e=c[j+8>>2]|0;c[t>>2]=0;c[o>>2]=0;c[p>>2]=0;a:do if(c[e>>2]|0){f=0;g=0;while(1){if((f|0)==(g|0))wl(t,e);else{c[f>>2]=c[e>>2];c[o>>2]=(c[o>>2]|0)+4}e=e+4|0;if(!(c[e>>2]|0))break a;f=c[o>>2]|0;g=c[k>>2]|0}}while(0);c[r>>2]=c[h+4>>2];c[s>>2]=c[j>>2];xl(d,a,r,s,u,t);e=c[t>>2]|0;f=e;if(e){g=c[o>>2]|0;if((g|0)!=(e|0))c[o>>2]=g+(~((g+-4-f|0)>>>2)<<2);xn(e)}e=c[u>>2]|0;f=e;if(e){g=c[m>>2]|0;if((g|0)!=(e|0))c[m>>2]=g+(~((g+-4-f|0)>>>2)<<2);xn(e)}}b=c[b>>2]|0}while((b|0)!=0)}i=v;return}function sl(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;x=i;i=i+64|0;r=x+52|0;l=x+48|0;m=x+44|0;n=x+40|0;q=x+36|0;o=x+32|0;p=x+28|0;u=x+24|0;v=x+20|0;w=x+8|0;s=x+4|0;t=x;j=gl()|0;h=c[j>>2]|0;g=c[h>>2]|0;if(g){k=c[j+8>>2]|0;j=c[j+4>>2]|0;while(1){fm(l,g);yl(a,l,j,k);h=h+4|0;g=c[h>>2]|0;if(!g)break;else{k=k+1|0;j=j+1|0}}}h=hl()|0;g=c[h>>2]|0;if(g)do{fm(m,g);c[n>>2]=c[h+4>>2];zl(b,m,n);h=h+8|0;g=c[h>>2]|0}while((g|0)!=0);g=c[(el()|0)>>2]|0;if(g)do{b=c[g+4>>2]|0;fm(q,c[b>>2]|0);c[o>>2]=c[b+12>>2];Al(d,q,o);g=c[g>>2]|0}while((g|0)!=0);fm(p,0);g=fl()|0;c[r>>2]=c[p>>2];rl(r,g,f);g=c[(el()|0)>>2]|0;if(g){a=w+4|0;m=w+8|0;n=w+8|0;do{l=c[g+4>>2]|0;fm(u,c[l>>2]|0);Bl(v,l+16|0);h=c[v>>2]|0;if(h){c[w>>2]=0;c[a>>2]=0;c[m>>2]=0;do{fm(s,c[c[h+4>>2]>>2]|0);j=c[a>>2]|0;if(j>>>0<(c[n>>2]|0)>>>0){c[j>>2]=c[s>>2];c[a>>2]=(c[a>>2]|0)+4}else vl(w,s);h=c[h>>2]|0}while((h|0)!=0);Cl(e,u,w);h=c[w>>2]|0;j=h;if(h){k=c[a>>2]|0;if((k|0)!=(h|0))c[a>>2]=k+(~((k+-4-j|0)>>>2)<<2);xn(h)}}c[t>>2]=c[u>>2];c[r>>2]=c[t>>2];rl(r,l+24|0,f);h=c[v>>2]|0;if(h)do{d=h;h=c[h>>2]|0;xn(d)}while((h|0)!=0);c[v>>2]=0;g=c[g>>2]|0}while((g|0)!=0)}i=x;return}function tl(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;q=i;i=i+32|0;o=q+16|0;e=q+31|0;f=q+30|0;g=q+12|0;l=q+8|0;m=q+29|0;n=q+4|0;h=q+28|0;j=q;k=hm(b)|0;c[o>>2]=0;p=o+4|0;c[p>>2]=0;c[o+8>>2]=0;switch(k<<24>>24){case 0:{a[e>>0]=0;h=Dl(d,e)|0;break}case 8:{h=gm(b)|0;a[f>>0]=8;fm(g,c[h+4>>2]|0);h=El(d,f,g,h+8|0)|0;break}case 9:{h=gm(b)|0;e=c[h+4>>2]|0;if(e){j=o+8|0;g=h+12|0;while(1){e=e+-1|0;fm(l,c[g>>2]|0);f=c[p>>2]|0;if(f>>>0<(c[j>>2]|0)>>>0){c[f>>2]=c[l>>2];c[p>>2]=(c[p>>2]|0)+4}else vl(o,l);if(!e)break;else g=g+4|0}}a[m>>0]=9;fm(n,c[h+8>>2]|0);h=Fl(d,m,n,o)|0;break}default:{n=gm(b)|0;a[h>>0]=k;fm(j,c[n+4>>2]|0);h=Gl(d,h,j)|0}}e=c[o>>2]|0;f=e;if(e){g=c[p>>2]|0;if((g|0)!=(e|0))c[p>>2]=g+(~((g+-4-f|0)>>>2)<<2);xn(e)}i=q;return h|0}function ul(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;f=a+8|0;g=c[a>>2]|0;d=g;if((c[f>>2]|0)-d>>2>>>0<b>>>0){h=a+4|0;d=(c[h>>2]|0)-d|0;if(!b)e=0;else e=vn(b<<2)|0;To(e|0,g|0,d|0)|0;c[a>>2]=e;c[h>>2]=e+(d>>2<<2);c[f>>2]=e+(b<<2);if(g)xn(g)}return}function vl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;i=a+4|0;j=c[a>>2]|0;k=j;e=((c[i>>2]|0)-k>>2)+1|0;if(e>>>0>1073741823)un(a);l=a+8|0;f=j;d=(c[l>>2]|0)-f|0;if(d>>2>>>0<536870911){d=d>>1;d=d>>>0<e>>>0?e:d;f=(c[i>>2]|0)-f|0;e=f>>2;if(!d){h=0;g=0;d=f}else m=6}else{f=(c[i>>2]|0)-f|0;d=1073741823;e=f>>2;m=6}if((m|0)==6){h=d;g=vn(d<<2)|0;d=f}c[g+(e<<2)>>2]=c[b>>2];To(g|0,j|0,d|0)|0;c[a>>2]=g;c[i>>2]=g+(e+1<<2);c[l>>2]=g+(h<<2);if(k)xn(k);return}function wl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;i=a+4|0;j=c[a>>2]|0;k=j;e=((c[i>>2]|0)-k>>2)+1|0;if(e>>>0>1073741823)un(a);l=a+8|0;f=j;d=(c[l>>2]|0)-f|0;if(d>>2>>>0<536870911){d=d>>1;d=d>>>0<e>>>0?e:d;f=(c[i>>2]|0)-f|0;e=f>>2;if(!d){h=0;g=0;d=f}else m=6}else{f=(c[i>>2]|0)-f|0;d=1073741823;e=f>>2;m=6}if((m|0)==6){h=d;g=vn(d<<2)|0;d=f}c[g+(e<<2)>>2]=c[b>>2];To(g|0,j|0,d|0)|0;c[a>>2]=g;c[i>>2]=g+(e+1<<2);c[l>>2]=g+(h<<2);if(k)xn(k);return}function xl(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0;l=i;i=i+48|0;m=l+40|0;k=l+32|0;o=l+24|0;j=l+12|0;h=l;jm(k);n=c[a>>2]|0;c[o>>2]=c[b>>2];a=c[d>>2]|0;e=c[e>>2]|0;Ol(j,f);$l(h,g);c[m>>2]=c[o>>2];am(n,m,a,e,j,h);e=c[h>>2]|0;f=e;if(e){b=h+4|0;d=c[b>>2]|0;if((d|0)!=(e|0))c[b>>2]=d+(~((d+-4-f|0)>>>2)<<2);xn(e)}e=c[j>>2]|0;f=e;if(e){b=j+4|0;d=c[b>>2]|0;if((d|0)!=(e|0))c[b>>2]=d+(~((d+-4-f|0)>>>2)<<2);xn(e)}km(k);i=l;return}function yl(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0;g=i;i=i+32|0;j=g+16|0;h=g+8|0;l=g;jm(h);k=c[b>>2]|0;c[l>>2]=c[d>>2];e=a[e>>0]|0;b=a[f>>0]|0;c[j>>2]=c[l>>2];Zl(k,j,e,b);km(h);i=g;return}function zl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;i=i+32|0;g=e+16|0;f=e+8|0;j=e;jm(f);h=c[a>>2]|0;c[j>>2]=c[b>>2];a=c[d>>2]|0;c[g>>2]=c[j>>2];Xl(h,g,a);km(f);i=e;return}function Al(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;i=i+32|0;g=e+16|0;f=e+8|0;j=e;jm(f);h=c[a>>2]|0;c[j>>2]=c[b>>2];a=c[d>>2]|0;c[g>>2]=c[j>>2];Xl(h,g,a);km(f);i=e;return}function Bl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;c[a>>2]=0;b=c[b>>2]|0;if(b){f=vn(12)|0;g=b+4|0;d=c[g+4>>2]|0;e=f+4|0;c[e>>2]=c[g>>2];c[e+4>>2]=d;b=c[b>>2]|0;if(!b)b=f;else{e=f;while(1){d=vn(12)|0;i=b+4|0;h=c[i+4>>2]|0;g=d+4|0;c[g>>2]=c[i>>2];c[g+4>>2]=h;c[e>>2]=d;b=c[b>>2]|0;if(!b){b=d;break}else e=d}}c[b>>2]=0;c[a>>2]=f}return}function Cl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;h=i;i=i+32|0;e=h+24|0;g=h+16|0;j=h+12|0;f=h;jm(g);a=c[a>>2]|0;c[j>>2]=c[b>>2];Ol(f,d);c[e>>2]=c[j>>2];Vl(a,e,f);a=c[f>>2]|0;e=a;if(a){b=f+4|0;d=c[b>>2]|0;if((d|0)!=(a|0))c[b>>2]=d+(~((d+-4-e|0)>>>2)<<2);xn(a)}km(g);i=h;return}function Dl(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;e=i;i=i+16|0;f=e;jm(f);g=c[b>>2]|0;b=a[d>>0]|0;Ul()|0;b=Db(0,c[988]|0,g|0,b&255|0)|0;km(f);i=e;return b|0}function El(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0;g=i;i=i+32|0;j=g+16|0;h=g+8|0;l=g;jm(h);k=c[b>>2]|0;d=a[d>>0]|0;c[l>>2]=c[e>>2];b=c[f>>2]|0;c[j>>2]=c[l>>2];b=Sl(k,d,j,b)|0;km(h);i=g;return b|0}function Fl(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0;k=i;i=i+32|0;g=k+24|0;j=k+16|0;m=k+12|0;h=k;jm(j);l=c[b>>2]|0;b=a[d>>0]|0;c[m>>2]=c[e>>2];Ol(h,f);c[g>>2]=c[m>>2];f=Pl(l,b,g,h)|0;b=c[h>>2]|0;g=b;if(b){e=h+4|0;d=c[e>>2]|0;if((d|0)!=(b|0))c[e>>2]=d+(~((d+-4-g|0)>>>2)<<2);xn(b)}km(j);i=k;return f|0}function Gl(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0;f=i;i=i+32|0;h=f+16|0;g=f+8|0;k=f;jm(g);j=c[b>>2]|0;b=a[d>>0]|0;c[k>>2]=c[e>>2];c[h>>2]=c[k>>2];b=Hl(j,b,h)|0;km(g);i=f;return b|0}function Hl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=i;i=i+16|0;f=e;Il()|0;g=c[948]|0;c[f>>2]=c[d>>2];a=Cb(0,g|0,a|0,b&255|0,Jl(f)|0)|0;i=e;return a|0}function Il(){var b=0;if(!(a[360]|0)){c[946]=3868;c[947]=2;c[948]=pb(3868,3)|0;b=360;c[b>>2]=1;c[b+4>>2]=0}return 3784}function Jl(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;f=i;i=i+32|0;e=f+12|0;b=f;Kl()|0;d=c[958]|0;if(!d){e=dm(8)|0;b=e;d=vn(4)|0;c[d>>2]=c[a>>2];g=b+4|0;c[g>>2]=d;a=vn(8)|0;g=c[g>>2]|0;c[a>>2]=g;d=vn(16)|0;c[d+4>>2]=0;c[d+8>>2]=0;c[d>>2]=3848;c[d+12>>2]=g;c[a+4>>2]=d;c[e>>2]=a}else{c[e>>2]=d;g=e+4|0;c[g>>2]=e;c[e+8>>2]=0;c[b>>2]=d;c[b+4>>2]=e;c[b+8>>2]=0;im(a,b);b=c[(c[g>>2]|0)+8>>2]|0}i=f;return b|0}function Kl(){var b=0;if(!(a[352]|0)){c[953]=0;c[954]=0;c[955]=0;c[956]=3820;c[958]=0;a[3836]=0;a[3837]=0;sb(34,3796,n|0)|0;b=352;c[b>>2]=1;c[b+4>>2]=0}return 3796}function Ll(a){a=a|0;Io(a);xn(a);return}function Ml(a){a=a|0;a=c[a+12>>2]|0;if(a)xn(a);return}function Nl(a){a=a|0;xn(a);return}function Ol(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;c[a>>2]=0;g=a+4|0;c[g>>2]=0;c[a+8>>2]=0;e=b+4|0;f=(c[e>>2]|0)-(c[b>>2]|0)>>2;if((f|0)!=0?(Rl(a,f),d=c[b>>2]|0,h=c[e>>2]|0,(d|0)!=(h|0)):0){e=c[g>>2]|0;do{c[e>>2]=c[d>>2];e=(c[g>>2]|0)+4|0;c[g>>2]=e;d=d+4|0}while((d|0)!=(h|0))}return}function Pl(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;l=i;i=i+16|0;g=l;Ql()|0;k=c[972]|0;h=b&255;c[g>>2]=c[d>>2];g=Jl(g)|0;j=c[e>>2]|0;b=e+4|0;d=c[b>>2]|0;c[e+8>>2]=0;c[b>>2]=0;c[e>>2]=0;e=j;d=d-j|0;b=d>>2;d=dm(d+4|0)|0;c[d>>2]=b;if(b){f=0;do{c[d+4+(f<<2)>>2]=Jl(e+(f<<2)|0)|0;f=f+1|0}while((f|0)!=(b|0))}b=Bb(0,k|0,a|0,h|0,g|0,d|0)|0;if(j)xn(j);i=l;return b|0}function Ql(){var b=0;if(!(a[368]|0)){c[970]=3892;c[971]=3;c[972]=pb(3892,4)|0;b=368;c[b>>2]=1;c[b+4>>2]=0}return 3880}function Rl(a,b){a=a|0;b=b|0;var d=0;if(b>>>0>1073741823)un(a);else{d=vn(b<<2)|0;c[a+4>>2]=d;c[a>>2]=d;c[a+8>>2]=d+(b<<2);return}}function Sl(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=i;i=i+16|0;g=f;Tl()|0;h=c[981]|0;c[g>>2]=c[d>>2];a=Bb(0,h|0,a|0,b&255|0,Jl(g)|0,e|0)|0;i=f;return a|0}function Tl(){var b=0;if(!(a[376]|0)){c[979]=3928;c[980]=3;c[981]=pb(3928,4)|0;b=376;c[b>>2]=1;c[b+4>>2]=0}return 3916}function Ul(){var b=0;if(!(a[384]|0)){c[986]=3956;c[987]=1;c[988]=pb(3956,2)|0;b=384;c[b>>2]=1;c[b+4>>2]=0}return 3944}function Vl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;k=i;i=i+16|0;g=k;Wl()|0;j=c[993]|0;c[g>>2]=c[b>>2];g=Jl(g)|0;h=c[d>>2]|0;e=d+4|0;b=c[e>>2]|0;c[d+8>>2]=0;c[e>>2]=0;c[d>>2]=0;e=h;d=b-h|0;b=d>>2;d=dm(d+4|0)|0;c[d>>2]=b;if(b){f=0;do{c[d+4+(f<<2)>>2]=Jl(e+(f<<2)|0)|0;f=f+1|0}while((f|0)!=(b|0))}Cb(0,j|0,a|0,g|0,d|0)|0;if(h)xn(h);i=k;return}function Wl(){var b=0;if(!(a[392]|0)){c[991]=3976;c[992]=2;c[993]=pb(3976,3)|0;b=392;c[b>>2]=1;c[b+4>>2]=0}return 3964}function Xl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=i;i=i+16|0;f=e;Yl()|0;g=c[999]|0;c[f>>2]=c[b>>2];Cb(0,g|0,a|0,Jl(f)|0,d|0)|0;i=e;return}function Yl(){var b=0;if(!(a[400]|0)){c[997]=4e3;c[998]=2;c[999]=pb(4e3,3)|0;b=400;c[b>>2]=1;c[b+4>>2]=0}return 3988}function Zl(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=i;i=i+16|0;g=f;_l()|0;h=c[1009]|0;c[g>>2]=c[b>>2];Bb(0,h|0,a|0,Jl(g)|0,d&255|0,e&255|0)|0;i=f;return}function _l(){var b=0;if(!(a[408]|0)){c[1007]=4040;c[1008]=3;c[1009]=pb(4040,4)|0;b=408;c[b>>2]=1;c[b+4>>2]=0}return 4028}function $l(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;c[a>>2]=0;g=a+4|0;c[g>>2]=0;c[a+8>>2]=0;e=b+4|0;f=(c[e>>2]|0)-(c[b>>2]|0)>>2;if((f|0)!=0?(cm(a,f),d=c[b>>2]|0,h=c[e>>2]|0,(d|0)!=(h|0)):0){e=c[g>>2]|0;do{c[e>>2]=c[d>>2];e=(c[g>>2]|0)+4|0;c[g>>2]=e;d=d+4|0}while((d|0)!=(h|0))}return}function am(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;p=i;i=i+16|0;l=p;bm()|0;o=c[1016]|0;c[l>>2]=c[b>>2];l=Jl(l)|0;m=c[f>>2]|0;b=f+4|0;k=c[b>>2]|0;c[f+8>>2]=0;c[b>>2]=0;c[f>>2]=0;f=m;k=k-m|0;b=k>>2;k=dm(k+4|0)|0;c[k>>2]=b;if(b){h=0;do{c[k+4+(h<<2)>>2]=Jl(f+(h<<2)|0)|0;h=h+1|0}while((h|0)!=(b|0))}j=c[g>>2]|0;f=g+4|0;h=c[f>>2]|0;c[g+8>>2]=0;c[f>>2]=0;c[g>>2]=0;f=j;g=h-j|0;h=g>>2;g=dm(g+4|0)|0;c[g>>2]=h;if(!h){zb(0,o|0,a|0,l|0,d|0,e|0,k|0,g|0)|0;if(j)n=7}else{b=0;do{c[g+4+(b<<2)>>2]=c[f+(b<<2)>>2];b=b+1|0}while((b|0)!=(h|0));zb(0,o|0,a|0,l|0,d|0,e|0,k|0,g|0)|0;n=7}if((n|0)==7)xn(j);if(m)xn(m);i=p;return}function bm(){var b=0;if(!(a[416]|0)){c[1014]=4068;c[1015]=5;c[1016]=pb(4068,6)|0;b=416;c[b>>2]=1;c[b+4>>2]=0}return 4056}function cm(a,b){a=a|0;b=b|0;var d=0;if(b>>>0>1073741823)un(a);else{d=vn(b<<2)|0;c[a+4>>2]=d;c[a>>2]=d;c[a+8>>2]=d+(b<<2);return}}function dm(a){a=a|0;var b=0,d=0;a=a+7&-8;if(a>>>0<=32768?(b=c[1025]|0,a>>>0<=(65536-b|0)>>>0):0){d=(c[1026]|0)+b|0;c[1025]=b+a;a=d}else{a=wn(a+8|0)|0;c[a>>2]=c[1027];c[1027]=a;a=a+8|0}return a|0}function em(a,b){a=a|0;b=b|0;var d=0,e=0;a:while(1){d=c[1027]|0;while(1){if((d|0)==(b|0))break a;e=c[d>>2]|0;c[1027]=e;if(!d)d=e;else break}xn(d)}c[1025]=a;return}function fm(a,b){a=a|0;b=b|0;c[a>>2]=b;return}function gm(a){a=a|0;return c[a>>2]|0}function hm(b){b=b|0;return a[c[b>>2]>>0]|0}function im(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d;c[e>>2]=c[a>>2];a=nm(c[b>>2]|0,e)|0;c[(c[b+4>>2]|0)+8>>2]=a;i=d;return}function jm(a){a=a|0;c[a>>2]=c[1025];c[a+4>>2]=c[1027];return}function km(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=c[a+4>>2]|0;a:while(1){a=c[1027]|0;while(1){if((a|0)==(d|0))break a;b=c[a>>2]|0;c[1027]=b;if(!a)a=b;else break}xn(a)}c[1025]=e;return}function lm(){om();return}function mm(){c[1026]=wn(65536)|0;qm(4132);rm(4136);return}function nm(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=c[1025]|0;e=c[1027]|0;a=c[a>>2]|0;d=c[b>>2]|0;pm()|0;d=Db(0,c[1030]|0,a|0,d|0)|0;a:while(1){b=c[1027]|0;while(1){if((b|0)==(e|0))break a;a=c[b>>2]|0;c[1027]=a;if(!b)b=a;else break}xn(b)}c[1025]=f;return d|0}function om(){var b=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;q=i;Fb(65536,4100,c[1026]|0,4108);f=gl()|0;e=c[f>>2]|0;b=c[e>>2]|0;if(b){g=c[f+8>>2]|0;f=c[f+4>>2]|0;while(1){jb(b|0,d[f>>0]|0,a[g>>0]|0);e=e+4|0;b=c[e>>2]|0;if(!b)break;else{g=g+1|0;f=f+1|0}}}e=hl()|0;b=c[e>>2]|0;if(b)do{Ya(b|0,c[e+4>>2]|0);e=e+8|0;b=c[e>>2]|0}while((b|0)!=0);Ya(8410,8630);e=el()|0;b=c[e>>2]|0;f=(b|0)==0;a:do if(!f){g=b;do{a[(c[g+4>>2]|0)+40>>0]=0;g=c[g>>2]|0}while((g|0)!=0);if(!f)while(1){g=e;h=e;e=b;while(1){f=e;e=c[e>>2]|0;f=c[f+4>>2]|0;b=f+40|0;if(!(a[b>>0]|0)){n=e;break}n=c[g>>2]|0;c[h>>2]=c[n>>2];xn(n);if(!e)break a}a[b>>0]=1;e=c[h>>2]|0;j=f+20|0;b=c[j>>2]|0;k=ib()|0;l=i;i=i+((1*(b<<2)|0)+15&-16)|0;m=i;i=i+((1*(b<<2)|0)+15&-16)|0;b=c[f+16>>2]|0;if(b){g=l;h=m;while(1){r=b;c[g>>2]=c[c[r+4>>2]>>2];c[h>>2]=c[r+8>>2];b=c[b>>2]|0;if(!b)break;else{g=g+4|0;h=h+4|0}}}eb(f|0,c[f+8>>2]|0,l|0,m|0,c[j>>2]|0,c[f+32>>2]|0,c[f+12>>2]|0);Na(k|0);if(!n)break;else b=n}}while(0);b=c[(fl()|0)>>2]|0;if(b)do{r=b;n=c[r+16>>2]|0;qb(0,c[n+8>>2]|0,c[n+12>>2]|0,(c[n+16>>2]|0)+1|0,c[n+4>>2]|0,c[r+8>>2]|0,c[n>>2]|0,c[r+4>>2]|0,c[r+12>>2]|0,c[r+20>>2]|0);b=c[b>>2]|0}while((b|0)!=0);b=c[(el()|0)>>2]|0;if(b)do{e=c[b+4>>2]|0;if((e|0)!=0?(o=c[e>>2]|0,p=c[e+24>>2]|0,(p|0)!=0):0){f=p;do{e=f;g=e+4|0;h=c[e+16>>2]|0;b:do if(h){j=c[h>>2]|0;switch(j|0){case 3:case 2:case 1:{qb(o|0,c[h+8>>2]|0,c[h+12>>2]|0,(c[h+16>>2]|0)+1|0,c[h+4>>2]|0,0,j|0,c[g>>2]|0,c[e+12>>2]|0,c[e+20>>2]|0);break b}case 0:{qb(o|0,c[h+8>>2]|0,c[h+12>>2]|0,(c[h+16>>2]|0)+1|0,c[h+4>>2]|0,c[e+8>>2]|0,0,c[g>>2]|0,c[e+12>>2]|0,c[e+20>>2]|0);break b}case 4:{qb(o|0,c[h+8>>2]|0,c[h+12>>2]|0,(c[h+16>>2]|0)+1|0,c[h+4>>2]|0,c[h+20>>2]|0,4,0,0,0);break b}default:break b}}while(0);f=c[f>>2]|0}while((f|0)!=0)}b=c[b>>2]|0}while((b|0)!=0);Ga();i=q;return}function pm(){var b=0;if(!(a[424]|0)){c[1028]=4124;c[1029]=1;c[1030]=pb(4124,2)|0;b=424;c[b>>2]=1;c[b+4>>2]=0}return 4112}function qm(a){a=a|0;var b=0,d=0,e=0,f=0;zm(a,8715);b=c[a>>2]|0;Am()|0;b=b+28|0;e=c[b>>2]|0;f=vn(24)|0;c[f+4>>2]=0;c[f+8>>2]=0;c[f+12>>2]=0;c[f+16>>2]=4192;c[f+20>>2]=0;d=e;c[f>>2]=c[d>>2];c[e>>2]=f;c[b>>2]=c[d>>2];Bm(a,8721,25,0);Cm(a,8732,3,0);Dm(a,8740,12,0);Em(a,8750,20,0);Fm(a,8757,26,0);return}function rm(a){a=a|0;var b=0,d=0,e=0;sm(a,8707);a=c[a>>2]|0;tm()|0;a=a+28|0;d=c[a>>2]|0;e=vn(24)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e+12>>2]=0;c[e+16>>2]=4140;c[e+20>>2]=0;b=d;c[e>>2]=c[b>>2];c[d>>2]=e;c[a>>2]=c[b>>2];return}function sm(b,d){b=b|0;d=d|0;Kl()|0;c[b>>2]=3796;c[949]=8629;c[950]=4184;c[952]=d;if(!(a[296]|0)){c[837]=c[836];c[838]=0;d=296;c[d>>2]=1;c[d+4>>2]=0}c[951]=3348;c[957]=11;il(c[b>>2]|0);return}function tm(){var b=0;if(!(a[432]|0)){c[1035]=4;c[1036]=21;c[1037]=1824;c[1038]=4176;c[1039]=1;c[1041]=0;c[1042]=0;c[1043]=0;c[1040]=27;sb(70,4140,n|0)|0;b=432;c[b>>2]=1;c[b+4>>2]=0}return 4140}function um(a){a=a|0;var b=0,d=0,e=0,f=0;d=dm(8)|0;b=d;e=vn(4)|0;c[e>>2]=a;f=b+4|0;c[f>>2]=e;a=vn(8)|0;f=c[f>>2]|0;c[a>>2]=f;e=vn(16)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e>>2]=3848;c[e+12>>2]=f;c[a+4>>2]=e;c[d>>2]=a;return b|0}function vm(b,d){b=b|0;d=d|0;c[b+4>>2]=d;a[b+8>>0]=1;return}function wm(a){a=a|0;xm(a+24|0);return}function xm(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function ym(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((e&896|0)==512){if(d){a=c[d+4>>2]|0;if(a)Ko(a);xn(d)}}else if(b)xn(b);return}function zm(b,d){b=b|0;d=d|0;sn()|0;c[b>>2]=4516;c[1129]=8764;c[1130]=4480;c[1132]=d;if(!(a[224]|0)){c[755]=0;c[756]=0;d=224;c[d>>2]=1;c[d+4>>2]=0}c[1131]=3020;c[1137]=12;il(c[b>>2]|0);return}function Am(){var b=0;if(!(a[480]|0)){c[1048]=4;c[1049]=7;c[1050]=1824;c[1051]=4476;c[1052]=0;c[1054]=0;c[1055]=0;c[1056]=0;c[1053]=71;sb(72,4192,n|0)|0;b=480;c[b>>2]=1;c[b+4>>2]=0}return 4192}function Bm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;en()|0;h=fn(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=4428;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Cm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;Zm()|0;h=_m(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=4368;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Dm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;Sm()|0;h=Tm(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=4320;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Em(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;Mm()|0;h=Nm(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=4276;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Fm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a=c[a>>2]|0;Gm()|0;h=Hm(d,e)|0;a=a+28|0;f=c[a>>2]|0;g=vn(24)|0;c[g+4>>2]=b;c[g+8>>2]=d;c[g+12>>2]=h;c[g+16>>2]=4228;c[g+20>>2]=e;b=f;c[g>>2]=c[b>>2];c[f>>2]=g;c[a>>2]=c[b>>2];return}function Gm(){var b=0;if(!(a[440]|0)){c[1057]=0;c[1058]=10;c[1059]=1824;c[1060]=4264;c[1061]=2;c[1063]=0;c[1064]=0;c[1065]=0;sb(73,4228,n|0)|0;b=440;c[b>>2]=1;c[b+4>>2]=0}return 4228}function Hm(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;Gm()|0;b=b|4;c[f>>2]=b;d=c[1064]|0;if(d>>>0<(c[1065]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[1064]=b}else{Im(4252,e,f);b=c[1064]|0}i=g;return (b-(c[1063]|0)>>3)+-1|0}function Im(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function Jm(a,b,d){a=a|0;b=b|0;d=d|0;Gm()|0;Mb[c[(c[4252>>2]|0)+(a<<3)>>2]&31](b,d);return}function Km(a){a=a|0;Lm(a+24|0);return}function Lm(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Mm(){var b=0;if(!(a[448]|0)){c[1069]=0;c[1070]=13;c[1071]=1824;c[1072]=4312;c[1073]=1;c[1075]=0;c[1076]=0;c[1077]=0;sb(74,4276,n|0)|0;b=448;c[b>>2]=1;c[b+4>>2]=0}return 4276}function Nm(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;Mm()|0;b=b|4;c[f>>2]=b;d=c[1076]|0;if(d>>>0<(c[1077]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[1076]=b}else{Om(4300,e,f);b=c[1076]|0}i=g;return (b-(c[1075]|0)>>3)+-1|0}function Om(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function Pm(a,b){a=a|0;b=b|0;Mm()|0;return Nb[c[(c[4300>>2]|0)+(a<<3)>>2]&31](b)|0}function Qm(a){a=a|0;Rm(a+24|0);return}function Rm(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Sm(){var b=0;if(!(a[456]|0)){c[1080]=0;c[1081]=9;c[1082]=1824;c[1083]=4356;c[1084]=2;c[1086]=0;c[1087]=0;c[1088]=0;sb(75,4320,n|0)|0;b=456;c[b>>2]=1;c[b+4>>2]=0}return 4320}function Tm(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;Sm()|0;b=b|4;c[f>>2]=b;d=c[1087]|0;if(d>>>0<(c[1088]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[1087]=b}else{Um(4344,e,f);b=c[1087]|0}i=g;return (b-(c[1086]|0)>>3)+-1|0}function Um(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function Vm(a,b,d){a=a|0;b=b|0;d=d|0;Sm()|0;return Ym(c[(c[1086]|0)+(a<<3)>>2]|0,b,d)|0}function Wm(a){a=a|0;Xm(a+24|0);return}function Xm(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function Ym(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;k=i;i=i+32|0;f=k+8|0;g=k+4|0;j=k;h=d;if(!(h&1))c[g>>2]=c[d>>2];else{c[f>>2]=0;l=f+4|0;c[l>>2]=0;d=f+8|0;a[d>>0]=0;Ta(h|0,f|0)|0;c[g>>2]=c[l>>2];a[d>>0]=0}c[j>>2]=e;c[f>>2]=c[g>>2];g=Ub[b&15](f,j)|0;if(g)rb(g|0);f=c[j>>2]|0;if(f)rb(f|0);i=k;return g|0}function Zm(){var b=0;if(!(a[464]|0)){c[1092]=0;c[1093]=3;c[1094]=1824;c[1095]=4404;c[1096]=5;c[1098]=0;c[1099]=0;c[1100]=0;sb(76,4368,n|0)|0;b=464;c[b>>2]=1;c[b+4>>2]=0}return 4368}function _m(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;Zm()|0;b=b|4;c[f>>2]=b;d=c[1099]|0;if(d>>>0<(c[1100]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[1099]=b}else{$m(4392,e,f);b=c[1099]|0}i=g;return (b-(c[1098]|0)>>3)+-1|0}function $m(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function an(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;Zm()|0;dn(c[(c[1098]|0)+(a<<3)>>2]|0,b,d,e,f,g);return}function bn(a){a=a|0;cn(a+24|0);return}function cn(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function dn(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0;m=i;i=i+32|0;l=m+16|0;k=m+12|0;j=m+8|0;h=m+4|0;n=m;c[l>>2]=b;c[k>>2]=d;c[j>>2]=e;c[h>>2]=f;c[n>>2]=g;Ib[a&3](l,k,j,h,n);b=c[n>>2]|0;if(b)rb(b|0);b=c[h>>2]|0;if(b)rb(b|0);b=c[j>>2]|0;if(b)rb(b|0);b=c[k>>2]|0;if(b)rb(b|0);b=c[l>>2]|0;if(b)rb(b|0);i=m;return}function en(){var b=0;if(!(a[472]|0)){c[1107]=0;c[1108]=11;c[1109]=1824;c[1110]=4464;c[1111]=2;c[1113]=0;c[1114]=0;c[1115]=0;sb(77,4428,n|0)|0;b=472;c[b>>2]=1;c[b+4>>2]=0}return 4428}function fn(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;e=g+4|0;f=g;c[e>>2]=a;en()|0;b=b|4;c[f>>2]=b;d=c[1114]|0;if(d>>>0<(c[1115]|0)>>>0){c[d>>2]=a;c[d+4>>2]=b;b=d+8|0;c[1114]=b}else{gn(4452,e,f);b=c[1114]|0}i=g;return (b-(c[1113]|0)>>3)+-1|0}function gn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;j=a+4|0;k=c[a>>2]|0;l=k;f=((c[j>>2]|0)-l>>3)+1|0;if(f>>>0>536870911)un(a);m=a+8|0;g=k;e=(c[m>>2]|0)-g|0;if(e>>3>>>0<268435455){e=e>>2;e=e>>>0<f>>>0?f:e;g=(c[j>>2]|0)-g|0;f=g>>3;if(!e){i=0;h=0;e=g}else n=6}else{g=(c[j>>2]|0)-g|0;e=536870911;f=g>>3;n=6}if((n|0)==6){i=e;h=vn(e<<3)|0;e=g}n=c[d>>2]|0;c[h+(f<<3)>>2]=c[b>>2];c[h+(f<<3)+4>>2]=n;To(h|0,k|0,e|0)|0;c[a>>2]=h;c[j>>2]=h+(f+1<<3);c[m>>2]=h+(i<<3);if(l)xn(l);return}function hn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;i=i+16|0;f=e;en()|0;a=c[(c[1113]|0)+(a<<3)>>2]|0;c[f>>2]=d;Mb[a&31](b,f);b=c[f>>2]|0;if(b)rb(b|0);i=e;return}function jn(a){a=a|0;kn(a+24|0);return}function kn(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function ln(){var a=0,b=0,d=0,e=0,f=0;b=dm(8)|0;a=b;f=a+4|0;c[f>>2]=vn(1)|0;d=vn(8)|0;f=c[f>>2]|0;c[d>>2]=f;e=vn(16)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e>>2]=4496;c[e+12>>2]=f;c[d+4>>2]=e;c[b>>2]=d;return a|0}function mn(b){b=b|0;a[b+8>>0]=1;return}function nn(a){a=a|0;on(a+24|0);return}function on(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);xn(d)}return}function pn(a){a=a|0;Io(a);xn(a);return}function qn(a){a=a|0;a=c[a+12>>2]|0;if(a)xn(a);return}function rn(a){a=a|0;xn(a);return}function sn(){var b=0;if(!(a[488]|0)){c[1133]=0;c[1134]=0;c[1135]=0;c[1136]=4540;c[1138]=0;a[4556]=0;a[4557]=0;sb(34,4516,n|0)|0;b=488;c[b>>2]=1;c[b+4>>2]=0}return 4516}function tn(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((e&896|0)==512){if(d){a=c[d+4>>2]|0;if(a)Ko(a);xn(d)}}else if(b)xn(b);return}function un(a){a=a|0;Oa(8908,8931,303,9017)}function vn(a){a=a|0;var b=0;b=(a|0)==0?1:a;a=Do(b)|0;a:do if(!a){while(1){a=Bn()|0;if(!a)break;bc[a&0]();a=Do(b)|0;if(a)break a}b=Pa(4)|0;c[b>>2]=4568;tb(b|0,496,18)}while(0);return a|0}function wn(a){a=a|0;return vn(a)|0}function xn(a){a=a|0;Eo(a);return}function yn(a){a=a|0;return}function zn(a){a=a|0;xn(a);return}function An(a){a=a|0;return 9038}function Bn(){var a=0;a=c[1145]|0;c[1145]=a+0;return a|0}function Cn(a){a=a|0;return}function Dn(a){a=a|0;return}function En(a){a=a|0;return}function Fn(a){a=a|0;return}function Gn(a){a=a|0;return}function Hn(a){a=a|0;xn(a);return}function In(a){a=a|0;xn(a);return}function Jn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;h=i;i=i+64|0;g=h;if((a|0)!=(b|0))if((b|0)!=0?(f=Nn(b,528,544,0)|0,(f|0)!=0):0){b=g;e=b+56|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(e|0));c[g>>2]=f;c[g+8>>2]=a;c[g+12>>2]=-1;c[g+48>>2]=1;ec[c[(c[f>>2]|0)+28>>2]&15](f,g,c[d>>2]|0,1);if((c[g+24>>2]|0)==1){c[d>>2]=c[g+16>>2];b=1}else b=0}else b=0;else b=1;i=h;return b|0}function Kn(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0;b=d+16|0;g=c[b>>2]|0;do if(g){if((g|0)!=(e|0)){f=d+36|0;c[f>>2]=(c[f>>2]|0)+1;c[d+24>>2]=2;a[d+54>>0]=1;break}b=d+24|0;if((c[b>>2]|0)==2)c[b>>2]=f}else{c[b>>2]=e;c[d+24>>2]=f;c[d+36>>2]=1}while(0);return}function Ln(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((a|0)==(c[b+8>>2]|0))Kn(0,b,d,e);return}function Mn(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((a|0)==(c[b+8>>2]|0))Kn(0,b,d,e);else{a=c[a+8>>2]|0;ec[c[(c[a>>2]|0)+28>>2]&15](a,b,d,e)}return}function Nn(d,e,f,g){d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;r=i;i=i+64|0;q=r;p=c[d>>2]|0;o=d+(c[p+-8>>2]|0)|0;p=c[p+-4>>2]|0;c[q>>2]=f;c[q+4>>2]=d;c[q+8>>2]=e;c[q+12>>2]=g;g=q+16|0;d=q+20|0;e=q+24|0;h=q+28|0;j=q+32|0;k=q+40|0;l=(p|0)==(f|0);m=g;n=m+36|0;do{c[m>>2]=0;m=m+4|0}while((m|0)<(n|0));b[g+36>>1]=0;a[g+38>>0]=0;a:do if(l){c[q+48>>2]=1;Wb[c[(c[f>>2]|0)+20>>2]&3](f,q,o,o,1,0);g=(c[e>>2]|0)==1?o:0}else{Ib[c[(c[p>>2]|0)+24>>2]&3](p,q,o,1,0);switch(c[q+36>>2]|0){case 0:{g=(c[k>>2]|0)==1&(c[h>>2]|0)==1&(c[j>>2]|0)==1?c[d>>2]|0:0;break a}case 1:break;default:{g=0;break a}}if((c[e>>2]|0)!=1?!((c[k>>2]|0)==0&(c[h>>2]|0)==1&(c[j>>2]|0)==1):0){g=0;break}g=c[g>>2]|0}while(0);i=r;return g|0}function On(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;a[d+53>>0]=1;do if((c[d+4>>2]|0)==(f|0)){a[d+52>>0]=1;f=d+16|0;b=c[f>>2]|0;if(!b){c[f>>2]=e;c[d+24>>2]=g;c[d+36>>2]=1;if(!((g|0)==1?(c[d+48>>2]|0)==1:0))break;a[d+54>>0]=1;break}if((b|0)!=(e|0)){g=d+36|0;c[g>>2]=(c[g>>2]|0)+1;a[d+54>>0]=1;break}b=d+24|0;f=c[b>>2]|0;if((f|0)==2){c[b>>2]=g;f=g}if((f|0)==1?(c[d+48>>2]|0)==1:0)a[d+54>>0]=1}while(0);return}function Pn(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0;a:do if((b|0)==(c[d+8>>2]|0)){if((c[d+4>>2]|0)==(e|0)?(h=d+28|0,(c[h>>2]|0)!=1):0)c[h>>2]=f}else{if((b|0)!=(c[d>>2]|0)){j=c[b+8>>2]|0;Ib[c[(c[j>>2]|0)+24>>2]&3](j,d,e,f,g);break}if((c[d+16>>2]|0)!=(e|0)?(i=d+20|0,(c[i>>2]|0)!=(e|0)):0){c[d+32>>2]=f;f=d+44|0;if((c[f>>2]|0)==4)break;h=d+52|0;a[h>>0]=0;k=d+53|0;a[k>>0]=0;b=c[b+8>>2]|0;Wb[c[(c[b>>2]|0)+20>>2]&3](b,d,e,e,1,g);if(a[k>>0]|0){if(!(a[h>>0]|0)){h=1;j=13}}else{h=0;j=13}do if((j|0)==13){c[i>>2]=e;k=d+40|0;c[k>>2]=(c[k>>2]|0)+1;if((c[d+36>>2]|0)==1?(c[d+24>>2]|0)==2:0){a[d+54>>0]=1;if(h)break}else j=16;if((j|0)==16?h:0)break;c[f>>2]=4;break a}while(0);c[f>>2]=3;break}if((f|0)==1)c[d+32>>2]=1}while(0);return}function Qn(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;do if((b|0)==(c[d+8>>2]|0)){if((c[d+4>>2]|0)==(e|0)?(i=d+28|0,(c[i>>2]|0)!=1):0)c[i>>2]=f}else if((b|0)==(c[d>>2]|0)){if((c[d+16>>2]|0)!=(e|0)?(h=d+20|0,(c[h>>2]|0)!=(e|0)):0){c[d+32>>2]=f;c[h>>2]=e;g=d+40|0;c[g>>2]=(c[g>>2]|0)+1;if((c[d+36>>2]|0)==1?(c[d+24>>2]|0)==2:0)a[d+54>>0]=1;c[d+44>>2]=4;break}if((f|0)==1)c[d+32>>2]=1}while(0);return}function Rn(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;if((a|0)==(c[b+8>>2]|0))On(0,b,d,e,f);else{a=c[a+8>>2]|0;Wb[c[(c[a>>2]|0)+20>>2]&3](a,b,d,e,f,g)}return}function Sn(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;if((a|0)==(c[b+8>>2]|0))On(0,b,d,e,f);return}function Tn(){var a=0;if(!(c[1166]|0))a=4716;else a=c[(hb()|0)+60>>2]|0;return a|0}function Un(b){b=b|0;var c=0,e=0;c=0;while(1){if((d[9053+c>>0]|0)==(b|0)){e=2;break}c=c+1|0;if((c|0)==87){c=87;b=9141;e=5;break}}if((e|0)==2)if(!c)b=9141;else{b=9141;e=5}if((e|0)==5)while(1){e=b;while(1){b=e+1|0;if(!(a[e>>0]|0))break;else e=b}c=c+-1|0;if(!c)break;else e=5}return b|0}function Vn(a){a=a|0;if(a>>>0>4294963200){c[(Tn()|0)>>2]=0-a;a=-1}return a|0}function Wn(a,b){a=ca(a);b=ca(b);var d=0,e=0;d=(g[k>>2]=a,c[k>>2]|0);do if((d&2147483647)>>>0<=2139095040){e=(g[k>>2]=b,c[k>>2]|0);if((e&2147483647)>>>0<=2139095040)if((e^d|0)<0){a=(d|0)<0?b:a;break}else{a=a<b?b:a;break}}else a=b;while(0);return ca(a)}function Xn(a,b){a=ca(a);b=ca(b);var d=0,e=0;d=(g[k>>2]=a,c[k>>2]|0);do if((d&2147483647)>>>0<=2139095040){e=(g[k>>2]=b,c[k>>2]|0);if((e&2147483647)>>>0<=2139095040)if((e^d|0)<0){a=(d|0)<0?a:b;break}else{a=a<b?a:b;break}}else a=b;while(0);return ca(a)}function Yn(a,b){a=ca(a);b=ca(b);var d=0,e=0,f=0,h=0,i=0,j=0,l=0,m=0,n=0;h=(g[k>>2]=a,c[k>>2]|0);l=(g[k>>2]=b,c[k>>2]|0);d=h>>>23&255;i=l>>>23&255;m=h&-2147483648;f=l<<1;a:do if((f|0)!=0?!((l&2147483647)>>>0>2139095040|(d|0)==255):0){e=h<<1;if(e>>>0<=f>>>0){b=ca(a*ca(0.0));return ca((e|0)==(f|0)?b:a)}if(!d){d=h<<9;if((d|0)>-1){e=0;do{e=e+-1|0;d=d<<1}while((d|0)>-1)}else e=0;d=e;j=h<<1-e}else j=h&8388607|8388608;if(!i){e=l<<9;if((e|0)>-1){f=0;do{f=f+-1|0;e=e<<1}while((e|0)>-1)}else f=0;i=f;l=l<<1-f}else l=l&8388607|8388608;e=j-l|0;f=(e|0)>-1;b:do if((d|0)>(i|0)){h=f;f=j;while(1){if(h){if((f|0)==(l|0))break}else e=f;f=e<<1;d=d+-1|0;e=f-l|0;h=(e|0)>-1;if((d|0)<=(i|0))break b}b=ca(a*ca(0.0));break a}else{h=f;f=j}while(0);if(h){if((f|0)==(l|0)){b=ca(a*ca(0.0));break}}else e=f;if(e>>>0<8388608)do{e=e<<1;d=d+-1|0}while(e>>>0<8388608);if((d|0)>0)d=e+-8388608|d<<23;else d=e>>>(1-d|0);b=(c[k>>2]=d|m,ca(g[k>>2]))}else n=3;while(0);if((n|0)==3){b=ca(a*b);b=ca(b/b)}return ca(b)}function Zn(a,b){a=+a;b=b|0;var d=0,e=0,f=0;h[k>>3]=a;d=c[k>>2]|0;e=c[k+4>>2]|0;f=So(d|0,e|0,52)|0;f=f&2047;switch(f|0){case 0:{if(a!=0.0){a=+Zn(a*18446744073709551616.0,b);d=(c[b>>2]|0)+-64|0}else d=0;c[b>>2]=d;break}case 2047:break;default:{c[b>>2]=f+-1022;c[k>>2]=d;c[k+4>>2]=e&-2146435073|1071644672;a=+h[k>>3]}}return +a}function _n(a,b){a=+a;b=b|0;return +(+Zn(a,b))}function $n(b,d,e){b=b|0;d=d|0;e=e|0;do if(b){if(d>>>0<128){a[b>>0]=d;b=1;break}if(d>>>0<2048){a[b>>0]=d>>>6|192;a[b+1>>0]=d&63|128;b=2;break}if(d>>>0<55296|(d&-8192|0)==57344){a[b>>0]=d>>>12|224;a[b+1>>0]=d>>>6&63|128;a[b+2>>0]=d&63|128;b=3;break}if((d+-65536|0)>>>0<1048576){a[b>>0]=d>>>18|240;a[b+1>>0]=d>>>12&63|128;a[b+2>>0]=d>>>6&63|128;a[b+3>>0]=d&63|128;b=4;break}else{c[(Tn()|0)>>2]=84;b=-1;break}}else b=1;while(0);return b|0}function ao(a,b){a=a|0;b=b|0;if(!a)a=0;else a=$n(a,b,0)|0;return a|0}function bo(a){a=a|0;return 0}function co(a){a=a|0;return}function eo(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0;m=i;i=i+16|0;l=m;k=e&255;a[l>>0]=k;g=b+16|0;h=c[g>>2]|0;if(!h)if(!(jo(b)|0)){h=c[g>>2]|0;j=4}else f=-1;else j=4;do if((j|0)==4){g=b+20|0;j=c[g>>2]|0;if(j>>>0<h>>>0?(f=e&255,(f|0)!=(a[b+75>>0]|0)):0){c[g>>2]=j+1;a[j>>0]=k;break}if((Qb[c[b+36>>2]&15](b,l,1)|0)==1)f=d[l>>0]|0;else f=-1}while(0);i=m;return f|0}function fo(a){a=a|0;var b=0,d=0;b=i;i=i+16|0;d=b;c[d>>2]=c[a+60>>2];a=Vn(vb(6,d|0)|0)|0;i=b;return a|0}function go(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;f=i;i=i+32|0;g=f;e=f+20|0;c[g>>2]=c[a+60>>2];c[g+4>>2]=0;c[g+8>>2]=b;c[g+12>>2]=e;c[g+16>>2]=d;if((Vn(lb(140,g|0)|0)|0)<0){c[e>>2]=-1;a=-1}else a=c[e>>2]|0;i=f;return a|0}function ho(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;q=i;i=i+48|0;n=q+16|0;m=q;e=q+32|0;o=a+28|0;f=c[o>>2]|0;c[e>>2]=f;p=a+20|0;f=(c[p>>2]|0)-f|0;c[e+4>>2]=f;c[e+8>>2]=b;c[e+12>>2]=d;k=a+60|0;l=a+44|0;b=2;f=f+d|0;while(1){if(!(c[1166]|0)){c[n>>2]=c[k>>2];c[n+4>>2]=e;c[n+8>>2]=b;h=Vn(Eb(146,n|0)|0)|0}else{wb(78,a|0);c[m>>2]=c[k>>2];c[m+4>>2]=e;c[m+8>>2]=b;h=Vn(Eb(146,m|0)|0)|0;Ea(0)}if((f|0)==(h|0)){f=6;break}if((h|0)<0){f=8;break}f=f-h|0;g=c[e+4>>2]|0;if(h>>>0<=g>>>0)if((b|0)==2){c[o>>2]=(c[o>>2]|0)+h;j=g;b=2}else j=g;else{j=c[l>>2]|0;c[o>>2]=j;c[p>>2]=j;j=c[e+12>>2]|0;h=h-g|0;e=e+8|0;b=b+-1|0}c[e>>2]=(c[e>>2]|0)+h;c[e+4>>2]=j-h}if((f|0)==6){n=c[l>>2]|0;c[a+16>>2]=n+(c[a+48>>2]|0);a=n;c[o>>2]=a;c[p>>2]=a}else if((f|0)==8){c[a+16>>2]=0;c[o>>2]=0;c[p>>2]=0;c[a>>2]=c[a>>2]|32;if((b|0)==2)d=0;else d=d-(c[e+4>>2]|0)|0}i=q;return d|0}function io(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;g=i;i=i+80|0;f=g;c[b+36>>2]=3;if((c[b>>2]&64|0)==0?(c[f>>2]=c[b+60>>2],c[f+4>>2]=21505,c[f+8>>2]=g+12,(mb(54,f|0)|0)!=0):0)a[b+75>>0]=-1;f=ho(b,d,e)|0;i=g;return f|0}function jo(b){b=b|0;var d=0,e=0;d=b+74|0;e=a[d>>0]|0;a[d>>0]=e+255|e;d=c[b>>2]|0;if(!(d&8)){c[b+8>>2]=0;c[b+4>>2]=0;d=c[b+44>>2]|0;c[b+28>>2]=d;c[b+20>>2]=d;c[b+16>>2]=d+(c[b+48>>2]|0);d=0}else{c[b>>2]=d|32;d=-1}return d|0}function ko(a,b){a=a|0;b=b|0;return (mo(a,wo(a)|0,1,b)|0)+-1|0}function lo(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=e+16|0;g=c[f>>2]|0;if(!g)if(!(jo(e)|0)){g=c[f>>2]|0;h=4}else f=0;else h=4;a:do if((h|0)==4){i=e+20|0;h=c[i>>2]|0;if((g-h|0)>>>0<d>>>0){f=Qb[c[e+36>>2]&15](e,b,d)|0;break}b:do if((a[e+75>>0]|0)>-1){f=d;while(1){if(!f){g=h;f=0;break b}g=f+-1|0;if((a[b+g>>0]|0)==10)break;else f=g}if((Qb[c[e+36>>2]&15](e,b,f)|0)>>>0<f>>>0)break a;d=d-f|0;b=b+f|0;g=c[i>>2]|0}else{g=h;f=0}while(0);To(g|0,b|0,d|0)|0;c[i>>2]=(c[i>>2]|0)+d;f=f+d|0}while(0);return f|0}function mo(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=$(d,b)|0;if((c[e+76>>2]|0)>-1){g=(bo(e)|0)==0;a=lo(a,f,e)|0;if(!g)co(e)}else a=lo(a,f,e)|0;if((a|0)!=(f|0))d=(a>>>0)/(b>>>0)|0;return d|0}function no(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d;c[e>>2]=b;b=qo(c[1178]|0,a,e)|0;i=d;return b|0}function oo(b){b=b|0;var d=0,e=0,f=0,g=0;f=c[1178]|0;if((c[f+76>>2]|0)>-1)g=bo(f)|0;else g=0;do if((ko(b,f)|0)<0)d=1;else{if((a[f+75>>0]|0)!=10?(d=f+20|0,e=c[d>>2]|0,e>>>0<(c[f+16>>2]|0)>>>0):0){c[d>>2]=e+1;a[e>>0]=10;d=0;break}d=(eo(f,10)|0)<0}while(0);if(g)co(f);return d<<31>>31|0}function po(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;i=i+16|0;g=f;c[g>>2]=e;e=so(a,b,d,g)|0;i=f;return e|0}function qo(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;s=i;i=i+224|0;o=s+80|0;r=s+96|0;q=s;p=s+136|0;f=r;g=f+40|0;do{c[f>>2]=0;f=f+4|0}while((f|0)<(g|0));c[o>>2]=c[e>>2];if((yo(0,d,o,q,r)|0)<0)e=-1;else{if((c[b+76>>2]|0)>-1)m=bo(b)|0;else m=0;e=c[b>>2]|0;n=e&32;if((a[b+74>>0]|0)<1)c[b>>2]=e&-33;e=b+48|0;if(!(c[e>>2]|0)){g=b+44|0;h=c[g>>2]|0;c[g>>2]=p;j=b+28|0;c[j>>2]=p;k=b+20|0;c[k>>2]=p;c[e>>2]=80;l=b+16|0;c[l>>2]=p+80;f=yo(b,d,o,q,r)|0;if(h){Qb[c[b+36>>2]&15](b,0,0)|0;f=(c[k>>2]|0)==0?-1:f;c[g>>2]=h;c[e>>2]=0;c[l>>2]=0;c[j>>2]=0;c[k>>2]=0}}else f=yo(b,d,o,q,r)|0;e=c[b>>2]|0;c[b>>2]=e|n;if(m)co(b);e=(e&32|0)==0?f:-1}i=s;return e|0}function ro(a,b){a=a|0;b=b|0;return qo(c[1178]|0,a,b)|0}function so(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0;n=i;i=i+128|0;g=n+112|0;m=n;h=m;j=4720;k=h+112|0;do{c[h>>2]=c[j>>2];h=h+4|0;j=j+4|0}while((h|0)<(k|0));if((d+-1|0)>>>0>2147483646)if(!d){d=1;l=4}else{c[(Tn()|0)>>2]=75;d=-1}else{g=b;l=4}if((l|0)==4){l=-2-g|0;l=d>>>0>l>>>0?l:d;c[m+48>>2]=l;b=m+20|0;c[b>>2]=g;c[m+44>>2]=g;d=g+l|0;g=m+16|0;c[g>>2]=d;c[m+28>>2]=d;d=qo(m,e,f)|0;if(l){e=c[b>>2]|0;a[e+(((e|0)==(c[g>>2]|0))<<31>>31)>>0]=0}}i=n;return d|0}function to(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;h=d&255;f=(e|0)!=0;a:do if(f&(b&3|0)!=0){g=d&255;while(1){if((a[b>>0]|0)==g<<24>>24){i=6;break a}b=b+1|0;e=e+-1|0;f=(e|0)!=0;if(!(f&(b&3|0)!=0)){i=5;break}}}else i=5;while(0);if((i|0)==5)if(f)i=6;else e=0;b:do if((i|0)==6){g=d&255;if((a[b>>0]|0)!=g<<24>>24){f=$(h,16843009)|0;c:do if(e>>>0>3)while(1){h=c[b>>2]^f;if((h&-2139062144^-2139062144)&h+-16843009)break;b=b+4|0;e=e+-4|0;if(e>>>0<=3){i=11;break c}}else i=11;while(0);if((i|0)==11)if(!e){e=0;break}while(1){if((a[b>>0]|0)==g<<24>>24)break b;b=b+1|0;e=e+-1|0;if(!e){e=0;break}}}}while(0);return ((e|0)!=0?b:0)|0}function uo(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;a:do if(!d)d=0;else{f=d;e=b;while(1){b=a[e>>0]|0;d=a[c>>0]|0;if(b<<24>>24!=d<<24>>24)break;f=f+-1|0;if(!f){d=0;break a}else{e=e+1|0;c=c+1|0}}d=(b&255)-(d&255)|0}while(0);return d|0}function vo(b,c){b=b|0;c=c|0;var d=0,e=0;e=a[b>>0]|0;d=a[c>>0]|0;if(e<<24>>24==0?1:e<<24>>24!=d<<24>>24)c=e;else{do{b=b+1|0;c=c+1|0;e=a[b>>0]|0;d=a[c>>0]|0}while(!(e<<24>>24==0?1:e<<24>>24!=d<<24>>24));c=e}return (c&255)-(d&255)|0}function wo(b){b=b|0;var d=0,e=0,f=0;f=b;a:do if(!(f&3))e=4;else{d=b;b=f;while(1){if(!(a[d>>0]|0))break a;d=d+1|0;b=d;if(!(b&3)){b=d;e=4;break}}}while(0);if((e|0)==4){while(1){d=c[b>>2]|0;if(!((d&-2139062144^-2139062144)&d+-16843009))b=b+4|0;else break}if((d&255)<<24>>24)do b=b+1|0;while((a[b>>0]|0)!=0)}return b-f|0}function xo(a){a=a|0;if(!(c[a+68>>2]|0))co(a);return}
function fc(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+15&-16;return b|0}function gc(){return i|0}function hc(a){a=a|0;i=a}function ic(a,b){a=a|0;b=b|0;i=a;j=b}function jc(a,b){a=a|0;b=b|0;if(!o){o=a;p=b}}function kc(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0]}function lc(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0];a[k+4>>0]=a[b+4>>0];a[k+5>>0]=a[b+5>>0];a[k+6>>0]=a[b+6>>0];a[k+7>>0]=a[b+7>>0]}function mc(a){a=a|0;D=a}function nc(){return D|0}function oc(a){a=a|0;var b=0;b=Nb[c[576>>2]&31](12)|0;Ec((b|0)!=0,5552);c[b>>2]=a;c[b+4>>2]=0;a=Nb[c[576>>2]&31](a<<2)|0;c[b+8>>2]=a;Ec((a|0)!=0,5587);return b|0}function pc(a){a=a|0;if(!a)return;Lb[c[584>>2]&127](c[a+8>>2]|0);Lb[c[584>>2]&127](a);return}function qc(a){a=a|0;if(!a){a=0;return a|0}a=c[a+4>>2]|0;return a|0}function rc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=c[a>>2]|0;if(!e){e=oc(4)|0;c[a>>2]=e}f=e+4|0;a=c[f>>2]|0;if((a|0)==(c[e>>2]|0)){c[e>>2]=a<<1;g=e+8|0;a=Ub[c[580>>2]&15](c[g>>2]|0,a<<3)|0;c[g>>2]=a;Ec((a|0)!=0,5623);a=c[f>>2]|0}e=e+8|0;if(a>>>0<=d>>>0){g=a;g=g+1|0;c[f>>2]=g;g=c[e>>2]|0;g=g+(d<<2)|0;c[g>>2]=b;return}do{g=a;a=a+-1|0;h=c[e>>2]|0;c[h+(g<<2)>>2]=c[h+(a<<2)>>2]}while(a>>>0>d>>>0);h=c[f>>2]|0;h=h+1|0;c[f>>2]=h;h=c[e>>2]|0;h=h+(d<<2)|0;c[h>>2]=b;return}function sc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=a+8|0;e=(c[d>>2]|0)+(b<<2)|0;f=c[e>>2]|0;c[e>>2]=0;e=a+4|0;a=(c[e>>2]|0)+-1|0;if(a>>>0<=b>>>0){d=a;c[e>>2]=d;return f|0}do{a=b;b=b+1|0;g=c[d>>2]|0;c[g+(a<<2)>>2]=c[g+(b<<2)>>2];c[(c[d>>2]|0)+(b<<2)>>2]=0;a=(c[e>>2]|0)+-1|0}while(b>>>0<a>>>0);c[e>>2]=a;return f|0}function tc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;e=c[a+4>>2]|0;if(!e){g=0;return g|0}f=c[a+8>>2]|0;d=0;while(1){if((c[f+(d<<2)>>2]|0)==(b|0))break;d=d+1|0;if(d>>>0>=e>>>0){d=0;g=6;break}}if((g|0)==6)return d|0;g=sc(a,d)|0;return g|0}function uc(a,b){a=a|0;b=b|0;if(!a){a=0;return a|0}if(!(c[a+4>>2]|0)){a=0;return a|0}a=c[(c[a+8>>2]|0)+(b<<2)>>2]|0;return a|0}function vc(b){b=b|0;var d=0,e=0,f=0;f=i;i=i+16|0;e=f;d=Nb[c[576>>2]&31](984)|0;if(!d){c[e>>2]=5668;ee(b,5,5664,e)}c[147]=(c[147]|0)+1;To(d|0,604,984)|0;if(!(a[b+2>>0]|0)){e=d+964|0;c[e>>2]=b;i=f;return d|0}c[d+4>>2]=2;c[d+12>>2]=4;e=d+964|0;c[e>>2]=b;i=f;return d|0}function wc(){return vc(1588)|0}function xc(a){a=a|0;var b=0,d=0,e=0,f=0;b=a+940|0;d=c[b>>2]|0;if(d){tc(c[d+944>>2]|0,a)|0;c[b>>2]=0}e=a+944|0;f=qc(c[e>>2]|0)|0;b=c[e>>2]|0;if(f){d=0;do{c[(uc(b,d)|0)+940>>2]=0;d=d+1|0;b=c[e>>2]|0}while((d|0)!=(f|0))}pc(b);Lb[c[584>>2]&127](a);c[147]=(c[147]|0)+-1;return}function yc(a){a=a|0;return qc(c[a+944>>2]|0)|0}function zc(a,b){a=a|0;b=b|0;return uc(c[a+944>>2]|0,b)|0}function Ac(b,d){b=b|0;d=d|0;if(!(tc(c[b+944>>2]|0,d)|0))return;To(d+400|0,1004,536)|0;c[d+940>>2]=0;while(1){d=b+972|0;if(a[d>>0]|0){d=5;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=5;break}}if((d|0)==5)return}function Bc(b){b=b|0;var d=0,e=0,f=0,g=0;g=i;i=i+16|0;f=g+8|0;e=g;d=b+944|0;if(qc(c[d>>2]|0)|0){c[e>>2]=5703;fe(b,5,5664,e)}if(c[b+940>>2]|0){c[f>>2]=5757;fe(b,5,5664,f)}pc(c[d>>2]|0);d=b+964|0;e=c[d>>2]|0;To(b|0,604,984)|0;if(!(a[e+2>>0]|0)){c[d>>2]=e;i=g;return}c[b+4>>2]=2;c[b+12>>2]=4;c[d>>2]=e;i=g;return}function Cc(){return c[147]|0}function Dc(){var a=0,b=0,d=0;d=i;i=i+16|0;b=d;a=Nb[c[576>>2]&31](16)|0;if(!a){c[b>>2]=5804;fe(0,5,5664,b)}c[148]=(c[148]|0)+1;c[a>>2]=c[397];c[a+4>>2]=c[398];c[a+8>>2]=c[399];c[a+12>>2]=c[400];i=d;return a|0}function Ec(a,b){a=a|0;b=b|0;var d=0,e=0;e=i;i=i+16|0;d=e;if(a){i=e;return}c[d>>2]=b;fe(0,5,5664,d);i=e;return}function Fc(a){a=a|0;Lb[c[584>>2]&127](a);c[148]=(c[148]|0)+-1;return}function Gc(a,b){a=a|0;b=b|0;var d=0,e=0;e=i;i=i+16|0;d=e;if(!b){c[a+952>>2]=0;i=e;return}if(qc(c[a+944>>2]|0)|0){c[d>>2]=5841;fe(a,5,5664,d)}c[a+952>>2]=b;i=e;return}function Hc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,j=0,k=0;k=i;i=i+16|0;j=k+8|0;h=k;f=d+940|0;if(c[f>>2]|0){c[h>>2]=5921;fe(b,5,5664,h)}if(c[b+952>>2]|0){c[j>>2]=5975;fe(b,5,5664,j)}rc(b+944|0,d,e);c[f>>2]=b;while(1){f=b+972|0;if(a[f>>0]|0){f=8;break}a[f>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){f=8;break}}if((f|0)==8){i=k;return}}function Ic(a){a=a|0;return c[a+940>>2]|0}function Jc(b){b=b|0;var d=0,e=0;e=i;i=i+16|0;d=e;if(!(c[b+952>>2]|0)){c[d>>2]=6044;fe(b,5,5664,d);d=b}else d=b;while(1){b=d+972|0;if(a[b>>0]|0){b=5;break}a[b>>0]=1;g[d+504>>2]=ca(s);d=c[d+940>>2]|0;if(!d){b=5;break}}if((b|0)==5){i=e;return}}function Kc(b){b=b|0;return (a[b+972>>0]|0)!=0|0}function Lc(b,d){b=b|0;d=d|0;if(!(uo(b,d,400)|0))return;To(b|0,d|0,400)|0;d=b;while(1){b=d+972|0;if(a[b>>0]|0){b=5;break}a[b>>0]=1;g[d+504>>2]=ca(s);d=c[d+940>>2]|0;if(!d){b=5;break}}if((b|0)==5)return}function Mc(a){a=a|0;var b=Hb;b=ca(g[a+44>>2]);return ca(((g[k>>2]=b,c[k>>2]|0)&2147483647)>>>0>2139095040?ca(0.0):b)}function Nc(b){b=b|0;var d=Hb;d=ca(g[b+48>>2]);if(((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0<=2139095040)return ca(d);d=(a[(c[b+964>>2]|0)+2>>0]|0)!=0?ca(1.0):ca(0.0);return ca(d)}function Oc(a,b){a=a|0;b=b|0;c[a+968>>2]=b;return}function Pc(a){a=a|0;return c[a+968>>2]|0}function Qc(b,d){b=b|0;d=d|0;var e=0;e=b+4|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function Rc(a){a=a|0;return c[a+4>>2]|0}function Sc(b,d){b=b|0;d=d|0;var e=0;e=b+8|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function Tc(a){a=a|0;return c[a+8>>2]|0}function Uc(b,d){b=b|0;d=d|0;var e=0;e=b+12|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function Vc(a){a=a|0;return c[a+12>>2]|0}function Wc(b,d){b=b|0;d=d|0;var e=0;e=b+16|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function Xc(a){a=a|0;return c[a+16>>2]|0}function Yc(b,d){b=b|0;d=d|0;var e=0;e=b+20|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function Zc(a){a=a|0;return c[a+20>>2]|0}function _c(b,d){b=b|0;d=d|0;var e=0;e=b+24|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function $c(a){a=a|0;return c[a+24>>2]|0}function ad(b,d){b=b|0;d=d|0;var e=0;e=b+28|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function bd(a){a=a|0;return c[a+28>>2]|0}function cd(b,d){b=b|0;d=d|0;var e=0;e=b+32|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function dd(a){a=a|0;return c[a+32>>2]|0}function ed(b,d){b=b|0;d=d|0;var e=0;e=b+36|0;if((c[e>>2]|0)==(d|0))return;c[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function fd(a){a=a|0;return c[a+36>>2]|0}function gd(b,d){b=b|0;d=ca(d);var e=0;e=b+40|0;if(!(ca(g[e>>2])!=d))return;g[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function hd(b,d){b=b|0;d=ca(d);var e=0;e=b+44|0;if(!(ca(g[e>>2])!=d))return;g[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function id(b,d){b=b|0;d=ca(d);var e=0;e=b+48|0;if(!(ca(g[e>>2])!=d))return;g[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function jd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+52|0;e=b+56|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==1:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:1;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function kd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+52|0;e=b+56|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==2:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:2;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function ld(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+52|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function md(b,d,e){b=b|0;d=d|0;e=ca(e);var f=0;f=b+132+(d<<3)|0;d=b+132+(d<<3)+4|0;if(!(ca(g[f>>2])!=e)?(c[d>>2]|0)==1:0)return;g[f>>2]=e;c[d>>2]=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0<2139095041&1;while(1){d=b+972|0;if(a[d>>0]|0){d=6;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=6;break}}if((d|0)==6)return}function nd(b,d,e){b=b|0;d=d|0;e=ca(e);var f=0;f=b+132+(d<<3)|0;d=b+132+(d<<3)+4|0;if(!(ca(g[f>>2])!=e)?(c[d>>2]|0)==2:0)return;g[f>>2]=e;c[d>>2]=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0>2139095040?0:2;while(1){d=b+972|0;if(a[d>>0]|0){d=6;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=6;break}}if((d|0)==6)return}function od(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=b+132+(d<<3)|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function pd(b,d,e){b=b|0;d=d|0;e=ca(e);var f=0;f=b+60+(d<<3)|0;d=b+60+(d<<3)+4|0;if(!(ca(g[f>>2])!=e)?(c[d>>2]|0)==1:0)return;g[f>>2]=e;c[d>>2]=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0<2139095041&1;while(1){d=b+972|0;if(a[d>>0]|0){d=6;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=6;break}}if((d|0)==6)return}function qd(b,d,e){b=b|0;d=d|0;e=ca(e);var f=0;f=b+60+(d<<3)|0;d=b+60+(d<<3)+4|0;if(!(ca(g[f>>2])!=e)?(c[d>>2]|0)==2:0)return;g[f>>2]=e;c[d>>2]=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0>2139095040?0:2;while(1){d=b+972|0;if(a[d>>0]|0){d=6;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=6;break}}if((d|0)==6)return}function rd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=b+60+(d<<3)|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function sd(b,d){b=b|0;d=d|0;var e=0;e=b+60+(d<<3)+4|0;if((c[e>>2]|0)==3)return;g[b+60+(d<<3)>>2]=ca(s);c[e>>2]=3;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function td(b,d,e){b=b|0;d=d|0;e=ca(e);var f=0;f=b+204+(d<<3)|0;d=b+204+(d<<3)+4|0;if(!(ca(g[f>>2])!=e)?(c[d>>2]|0)==1:0)return;g[f>>2]=e;c[d>>2]=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0<2139095041&1;while(1){d=b+972|0;if(a[d>>0]|0){d=6;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=6;break}}if((d|0)==6)return}function ud(b,d,e){b=b|0;d=d|0;e=ca(e);var f=0;f=b+204+(d<<3)|0;d=b+204+(d<<3)+4|0;if(!(ca(g[f>>2])!=e)?(c[d>>2]|0)==2:0)return;g[f>>2]=e;c[d>>2]=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0>2139095040?0:2;while(1){d=b+972|0;if(a[d>>0]|0){d=6;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=6;break}}if((d|0)==6)return}function vd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=b+204+(d<<3)|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function wd(b,d,e){b=b|0;d=d|0;e=ca(e);var f=0;f=b+276+(d<<3)|0;d=b+276+(d<<3)+4|0;if(!(ca(g[f>>2])!=e)?(c[d>>2]|0)==1:0)return;g[f>>2]=e;c[d>>2]=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0<2139095041&1;while(1){d=b+972|0;if(a[d>>0]|0){d=6;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=6;break}}if((d|0)==6)return}function xd(a,b){a=a|0;b=b|0;return ca(g[a+276+(b<<3)>>2])}function yd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+348|0;e=b+352|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==1:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:1;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function zd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+348|0;e=b+352|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==2:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:2;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Ad(b){b=b|0;var d=0;d=b+352|0;if((c[d>>2]|0)==3)return;g[b+348>>2]=ca(s);c[d>>2]=3;while(1){d=b+972|0;if(a[d>>0]|0){d=5;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=5;break}}if((d|0)==5)return}function Bd(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+348|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Cd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+356|0;e=b+360|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==1:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:1;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Dd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+356|0;e=b+360|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==2:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:2;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Ed(b){b=b|0;var d=0;d=b+360|0;if((c[d>>2]|0)==3)return;g[b+356>>2]=ca(s);c[d>>2]=3;while(1){d=b+972|0;if(a[d>>0]|0){d=5;break}a[d>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){d=5;break}}if((d|0)==5)return}function Fd(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+356|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Gd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+364|0;e=b+368|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==1:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:1;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Hd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+364|0;e=b+368|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==2:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:2;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Id(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+364|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Jd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+372|0;e=b+376|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==1:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:1;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Kd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+372|0;e=b+376|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==2:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:2;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Ld(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+372|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Md(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+380|0;e=b+384|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==1:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:1;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Nd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+380|0;e=b+384|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==2:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:2;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Od(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+380|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Pd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+388|0;e=b+392|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==1:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:1;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Qd(b,d){b=b|0;d=ca(d);var e=0,f=0;f=b+388|0;e=b+392|0;if(!(ca(g[f>>2])!=d)?(c[e>>2]|0)==2:0)return;g[f>>2]=d;c[e>>2]=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040?3:2;while(1){e=b+972|0;if(a[e>>0]|0){e=6;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=6;break}}if((e|0)==6)return}function Rd(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+388|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Sd(b,d){b=b|0;d=ca(d);var e=0;e=b+396|0;if(!(ca(g[e>>2])!=d))return;g[e>>2]=d;while(1){e=b+972|0;if(a[e>>0]|0){e=5;break}a[e>>0]=1;g[b+504>>2]=ca(s);b=c[b+940>>2]|0;if(!b){e=5;break}}if((e|0)==5)return}function Td(a){a=a|0;return ca(g[a+396>>2])}function Ud(a){a=a|0;return ca(g[a+400>>2])}function Vd(a){a=a|0;return ca(g[a+404>>2])}function Wd(a){a=a|0;return ca(g[a+408>>2])}function Xd(a){a=a|0;return ca(g[a+412>>2])}function Yd(a){a=a|0;return ca(g[a+416>>2])}function Zd(a){a=a|0;return ca(g[a+420>>2])}function _d(a,b){a=a|0;b=b|0;var d=0,e=0,f=Hb;e=i;i=i+16|0;d=e;if(b>>>0>=5){c[d>>2]=6130;fe(a,5,5664,d)}a:do switch(b|0){case 0:if((c[a+496>>2]|0)==2){b=a+444|0;break a}else{b=a+440|0;break a}case 2:if((c[a+496>>2]|0)==2){b=a+440|0;break a}else{b=a+444|0;break a}default:b=a+424+(b<<2)|0}while(0);f=ca(g[b>>2]);i=e;return ca(f)}function $d(a,b){a=a|0;b=b|0;var d=0,e=0,f=Hb;e=i;i=i+16|0;d=e;if(b>>>0>=5){c[d>>2]=6130;fe(a,5,5664,d)}a:do switch(b|0){case 0:if((c[a+496>>2]|0)==2){b=a+468|0;break a}else{b=a+464|0;break a}case 2:if((c[a+496>>2]|0)==2){b=a+464|0;break a}else{b=a+468|0;break a}default:b=a+448+(b<<2)|0}while(0);f=ca(g[b>>2]);i=e;return ca(f)}function ae(a,b){a=a|0;b=b|0;var d=0,e=0,f=Hb;e=i;i=i+16|0;d=e;if(b>>>0>=5){c[d>>2]=6130;fe(a,5,5664,d)}a:do switch(b|0){case 0:if((c[a+496>>2]|0)==2){b=a+492|0;break a}else{b=a+488|0;break a}case 2:if((c[a+496>>2]|0)==2){b=a+488|0;break a}else{b=a+492|0;break a}default:b=a+472+(b<<2)|0}while(0);f=ca(g[b>>2]);i=e;return ca(f)}function be(a,b,d,e,f,h,i,j,l,m,n,o){a=a|0;b=ca(b);d=d|0;e=ca(e);f=f|0;h=ca(h);i=i|0;j=ca(j);l=ca(l);m=ca(m);n=ca(n);o=ca(o);var p=0,q=0;if(l<ca(0.0)|m<ca(0.0)){i=0;return i|0}do if((f|0)==(a|0))if(((g[k>>2]=h,c[k>>2]|0)&2147483647)>>>0>2139095040){p=((g[k>>2]=b,c[k>>2]|0)&2147483647)>>>0>2139095040;break}else{p=ca(O(ca(h-b)))<ca(.0000999999974);break}else p=0;while(0);do if((i|0)==(d|0))if(((g[k>>2]=j,c[k>>2]|0)&2147483647)>>>0>2139095040){q=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0>2139095040;break}else{q=ca(O(ca(j-e)))<ca(.0000999999974);break}else q=0;while(0);a:do if(!p){n=ca(b-n);if((a|0)==1){if(((g[k>>2]=n,c[k>>2]|0)&2147483647)>>>0>2139095040){if(((g[k>>2]=l,c[k>>2]|0)&2147483647)>>>0>2139095040){a=1;break}}else if(ca(O(ca(n-l)))<ca(.0000999999974)){a=1;break}a=0;break}p=(a|0)==2;do if(p&(f|0)==0){if(n>=l){a=1;break a}if(((g[k>>2]=n,c[k>>2]|0)&2147483647)>>>0>2139095040)if(((g[k>>2]=l,c[k>>2]|0)&2147483647)>>>0>2139095040){a=1;break a}else{p=1;break}else if(ca(O(ca(n-l)))<ca(.0000999999974)){a=1;break a}else{p=1;break}}while(0);if(n<h&((f|0)==2&p))if(!(n>=l))if(((g[k>>2]=n,c[k>>2]|0)&2147483647)>>>0>2139095040){a=((g[k>>2]=l,c[k>>2]|0)&2147483647)>>>0>2139095040;break}else{a=ca(O(ca(n-l)))<ca(.0000999999974);break}else a=1;else a=0}else a=1;while(0);b:do if(!q){n=ca(e-o);if((d|0)==1){if(((g[k>>2]=n,c[k>>2]|0)&2147483647)>>>0>2139095040){if(((g[k>>2]=m,c[k>>2]|0)&2147483647)>>>0>2139095040){p=1;break}}else if(ca(O(ca(n-m)))<ca(.0000999999974)){p=1;break}p=0;break}p=(d|0)==2;do if(p&(i|0)==0){if(n>=m){p=1;break b}if(((g[k>>2]=n,c[k>>2]|0)&2147483647)>>>0>2139095040)if(((g[k>>2]=m,c[k>>2]|0)&2147483647)>>>0>2139095040){p=1;break b}else{p=1;break}else if(ca(O(ca(n-m)))<ca(.0000999999974)){p=1;break b}else{p=1;break}}while(0);if(n<j&((i|0)==2&p))if(!(n>=m))if(((g[k>>2]=n,c[k>>2]|0)&2147483647)>>>0>2139095040){p=((g[k>>2]=m,c[k>>2]|0)&2147483647)>>>0>2139095040;break}else{p=ca(O(ca(n-m)))<ca(.0000999999974);break}else p=1;else p=0}else p=1;while(0);i=a&p;return i|0}function ce(b,d,e,f,j,l,m,n,o,p,q){b=b|0;d=ca(d);e=ca(e);f=f|0;j=j|0;l=l|0;m=ca(m);n=ca(n);o=o|0;p=p|0;q=q|0;var r=0,t=0,u=0,v=0,w=0,x=Hb,y=Hb,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=Hb,K=Hb,L=Hb,M=0.0,N=0.0;I=i;i=i+160|0;F=I+120|0;D=I+104|0;C=I+72|0;A=I+56|0;E=I+8|0;B=I;c[150]=(c[150]|0)+1;H=b+972|0;if((a[H>>0]|0)!=0?(c[b+508>>2]|0)!=(c[149]|0):0)z=4;else if((c[b+512>>2]|0)==(f|0))G=0;else z=4;if((z|0)==4){c[b+516>>2]=0;c[b+920>>2]=-1;c[b+924>>2]=-1;g[b+928>>2]=ca(-1.0);g[b+932>>2]=ca(-1.0);G=1}a:do if(!(c[b+952>>2]|0)){if(o){r=b+912|0;x=ca(g[r>>2]);if(((g[k>>2]=x,c[k>>2]|0)&2147483647)>>>0>2139095040){if(((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0<=2139095040){r=0;z=62;break}}else if(!(ca(O(ca(x-d)))<ca(.0000999999974))){r=0;z=62;break}x=ca(g[b+916>>2]);if(((g[k>>2]=x,c[k>>2]|0)&2147483647)>>>0>2139095040){if(((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0<=2139095040){r=0;z=62;break}}else if(!(ca(O(ca(x-e)))<ca(.0000999999974))){r=0;z=62;break}if((c[b+920>>2]|0)!=(j|0)){r=0;z=62;break}r=(c[b+924>>2]|0)==(l|0)?r:0;z=53;break}t=c[b+516>>2]|0;if(!t){r=0;z=62}else{u=((g[k>>2]=d,c[k>>2]|0)&2147483647)>>>0>2139095040;v=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0>2139095040;w=0;while(1){r=b+520+(w*24|0)|0;x=ca(g[r>>2]);if(((g[k>>2]=x,c[k>>2]|0)&2147483647)>>>0>2139095040){if(u)z=47}else if(ca(O(ca(x-d)))<ca(.0000999999974))z=47;do if((z|0)==47){z=0;x=ca(g[b+520+(w*24|0)+4>>2]);if(((g[k>>2]=x,c[k>>2]|0)&2147483647)>>>0>2139095040){if(!v)break}else if(!(ca(O(ca(x-e)))<ca(.0000999999974)))break;if((c[b+520+(w*24|0)+8>>2]|0)==(j|0)?(c[b+520+(w*24|0)+12>>2]|0)==(l|0):0){z=53;break a}}while(0);w=w+1|0;if(w>>>0>=t>>>0){r=0;z=62;break}}}}else{r=c[b+96>>2]|0;b:do if(!r){do if(!(c[b+64>>2]|0))if(!(c[b+112>>2]|0)){r=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{r=b+108|0;break}else r=b+60|0;while(0);t=c[r+4>>2]|0;if((t|0)==3)x=ca(0.0);else switch(t|0){case 2:{x=ca(ca(ca(g[r>>2])*m)/ca(100.0));break b}case 1:{x=ca(g[r>>2]);break b}default:{x=ca(s);break b}}}else{t=b+92|0;if((r|0)==3)x=ca(0.0);else switch(r|0){case 2:{x=ca(ca(ca(g[t>>2])*m)/ca(100.0));break b}case 1:{x=ca(g[t>>2]);break b}default:{x=ca(s);break b}}}while(0);y=ca(x+ca(je(b,2,m)));do if(!(c[b+72>>2]|0))if(!(c[b+120>>2]|0)){r=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{r=b+116|0;break}else r=b+68|0;while(0);t=c[r+4>>2]|0;c:do if((t|0)==3)x=ca(0.0);else switch(t|0){case 2:{x=ca(ca(ca(g[r>>2])*m)/ca(100.0));break c}case 1:{x=ca(g[r>>2]);break c}default:{x=ca(s);break c}}while(0);x=ca(x+ca(je(b,0,m)));r=b+912|0;L=ca(g[r>>2]);K=ca(g[b+916>>2]);J=ca(g[b+928>>2]);if(!(be(j,d,l,e,c[b+920>>2]|0,L,c[b+924>>2]|0,K,J,ca(g[b+932>>2]),y,x)|0)){t=c[b+516>>2]|0;if(!t){r=0;z=62}else{u=0;while(1){r=b+520+(u*24|0)|0;J=ca(g[r>>2]);K=ca(g[b+520+(u*24|0)+4>>2]);L=ca(g[b+520+(u*24|0)+16>>2]);if(be(j,d,l,e,c[b+520+(u*24|0)+8>>2]|0,J,c[b+520+(u*24|0)+12>>2]|0,K,L,ca(g[b+520+(u*24|0)+20>>2]),y,x)|0){z=53;break a}u=u+1|0;if(u>>>0>=t>>>0){r=0;z=62;break}}}}else z=53}while(0);if((z|0)==53)if((r|0)!=0&(G^1)){v=r+16|0;c[b+904>>2]=c[v>>2];w=r+20|0;c[b+908>>2]=c[w>>2];if(!((a[5662]|0)==0|(a[5663]|0)==0)){t=c[150]|0;c[B>>2]=t>>>0>60?6184:6184+(60-t)|0;c[B+4>>2]=t;no(6245,B)|0;t=c[b+960>>2]|0;if(t)Lb[t&127](b);if(j>>>0>2)u=6262;else u=c[(o?1612:1624)+(j<<2)>>2]|0;if(l>>>0>2)t=6262;else t=c[(o?1612:1624)+(l<<2)>>2]|0;N=+ca(g[v>>2]);M=+ca(g[w>>2]);c[E>>2]=u;c[E+4>>2]=t;h[E+8>>3]=+d;h[E+16>>3]=+e;h[E+24>>3]=N;h[E+32>>3]=M;c[E+40>>2]=p;no(6263,E)|0}}else z=62;if((z|0)==62){if(a[5662]|0){t=c[150]|0;c[A>>2]=t>>>0>60?6184:6184+(60-t)|0;c[A+4>>2]=t;c[A+8>>2]=G?6312:6262;no(6314,A)|0;t=c[b+960>>2]|0;if(t)Lb[t&127](b);if(j>>>0>2)u=6262;else u=c[(o?1612:1624)+(j<<2)>>2]|0;if(l>>>0>2)t=6262;else t=c[(o?1612:1624)+(l<<2)>>2]|0;c[C>>2]=u;c[C+4>>2]=t;h[C+8>>3]=+d;h[C+16>>3]=+e;c[C+24>>2]=p;no(6323,C)|0}ke(b,d,e,f,j,l,m,n,o,q);if(a[5662]|0){t=c[150]|0;c[D>>2]=t>>>0>60?6184:6184+(60-t)|0;c[D+4>>2]=t;c[D+8>>2]=G?6312:6262;no(6357,D)|0;t=c[b+960>>2]|0;if(t)Lb[t&127](b);if(j>>>0>2)u=6262;else u=c[(o?1612:1624)+(j<<2)>>2]|0;if(l>>>0>2)t=6262;else t=c[(o?1612:1624)+(l<<2)>>2]|0;M=+ca(g[b+904>>2]);N=+ca(g[b+908>>2]);c[F>>2]=u;c[F+4>>2]=t;h[F+8>>3]=M;h[F+16>>3]=N;c[F+24>>2]=p;no(6366,F)|0}c[b+512>>2]=f;if(!r){t=b+516|0;r=c[t>>2]|0;if((r|0)==16){if(a[5662]|0)oo(6398)|0;c[t>>2]=0;r=0}if(o)r=b+912|0;else{c[t>>2]=r+1;r=b+520+(r*24|0)|0}g[r>>2]=d;g[r+4>>2]=e;c[r+8>>2]=j;c[r+12>>2]=l;c[r+16>>2]=c[b+904>>2];c[r+20>>2]=c[b+908>>2];r=0}}if(!o){H=c[150]|0;H=H+-1|0;c[150]=H;H=c[149]|0;o=b+508|0;c[o>>2]=H;o=(r|0)==0;o=G|o;i=I;return o|0}c[b+416>>2]=c[b+904>>2];c[b+420>>2]=c[b+908>>2];a[b+973>>0]=1;a[H>>0]=0;H=c[150]|0;H=H+-1|0;c[150]=H;H=c[149]|0;o=b+508|0;c[o>>2]=H;o=(r|0)==0;o=G|o;i=I;return o|0}function de(b,e,f,h){b=b|0;e=ca(e);f=ca(f);h=h|0;var i=Hb,j=0,l=0,m=Hb,n=0,o=Hb,p=Hb,q=0,r=0,t=0,u=Hb;c[149]=(c[149]|0)+1;l=b+380|0;n=c[b+384>>2]|0;if(((n|0)!=0?(t=b+368|0,(n|0)==(d[t>>0]|d[t+1>>0]<<8|d[t+2>>0]<<16|d[t+3>>0]<<24|0)):0)?(a[k>>0]=a[l>>0],a[k+1>>0]=a[l+1>>0],a[k+2>>0]=a[l+2>>0],a[k+3>>0]=a[l+3>>0],u=ca(g[k>>2]),t=b+364|0,a[k>>0]=a[t>>0],a[k+1>>0]=a[t+1>>0],a[k+2>>0]=a[t+2>>0],a[k+3>>0]=a[t+3>>0],ca(O(ca(u-ca(g[k>>2]))))<ca(.0000999999974)):0){c[b+976>>2]=l;j=l}else{j=b+348|0;c[b+976>>2]=j}q=b+388|0;r=c[b+392>>2]|0;if(((r|0)!=0?(t=b+376|0,(r|0)==(d[t>>0]|d[t+1>>0]<<8|d[t+2>>0]<<16|d[t+3>>0]<<24|0)):0)?(a[k>>0]=a[q>>0],a[k+1>>0]=a[q+1>>0],a[k+2>>0]=a[q+2>>0],a[k+3>>0]=a[q+3>>0],u=ca(g[k>>2]),t=b+372|0,a[k>>0]=a[t>>0],a[k+1>>0]=a[t+1>>0],a[k+2>>0]=a[t+2>>0],a[k+3>>0]=a[t+3>>0],ca(O(ca(u-ca(g[k>>2]))))<ca(.0000999999974)):0){c[b+980>>2]=q;t=q}else{t=b+356|0;c[b+980>>2]=t}switch(c[j+4>>2]|0){case 0:case 3:{j=32;break}case 1:{if(ca(g[j>>2])<ca(0.0))j=32;else{o=ca(g[j>>2]);j=17}break}case 2:{if(!(ca(g[j>>2])<ca(0.0))?((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0<2139095041:0){o=ca(ca(ca(g[j>>2])*e)/ca(100.0));j=17}else j=32;break}default:{o=ca(s);j=17}}a:do if((j|0)==17){j=c[b+96>>2]|0;b:do if(!j){do if(!(c[b+64>>2]|0))if(!(c[b+112>>2]|0)){j=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{j=b+108|0;break}else j=b+60|0;while(0);l=c[j+4>>2]|0;if((l|0)==3)m=ca(0.0);else switch(l|0){case 2:{m=ca(ca(ca(g[j>>2])*e)/ca(100.0));break b}case 1:{m=ca(g[j>>2]);break b}default:{m=ca(s);break b}}}else{l=b+92|0;if((j|0)==3)m=ca(0.0);else switch(j|0){case 2:{m=ca(ca(ca(g[l>>2])*e)/ca(100.0));break b}case 1:{m=ca(g[l>>2]);break b}default:{m=ca(s);break b}}}while(0);o=ca(o+ca(m+ca(je(b,2,e))));n=1}else if((j|0)==32){switch(n|0){case 2:{o=ca(g[l>>2]);m=ca(ca(o*e)/ca(100.0));j=35;break}case 1:{o=ca(g[l>>2]);m=o;j=35;break}default:{}}if((j|0)==35?m>=ca(0.0):0)switch(n|0){case 2:{o=ca(ca(o*e)/ca(100.0));n=2;break a}case 1:{n=2;break a}default:{o=ca(s);n=2;break a}}o=e;n=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0<2139095041&1}while(0);switch(c[t+4>>2]|0){case 0:case 3:{j=56;break}case 1:{if(ca(g[t>>2])<ca(0.0))j=56;else{m=ca(g[t>>2]);j=46}break}case 2:{if(!(ca(g[t>>2])<ca(0.0))?((g[k>>2]=f,c[k>>2]|0)&2147483647)>>>0<2139095041:0){m=ca(ca(ca(g[t>>2])*f)/ca(100.0));j=46}else j=56;break}default:{m=ca(s);j=46}}c:do if((j|0)==46){do if(!(c[b+72>>2]|0))if(!(c[b+120>>2]|0)){j=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{j=b+116|0;break}else j=b+68|0;while(0);l=c[j+4>>2]|0;d:do if((l|0)==3)i=ca(0.0);else switch(l|0){case 2:{i=ca(ca(ca(g[j>>2])*e)/ca(100.0));break d}case 1:{i=ca(g[j>>2]);break d}default:{i=ca(s);break d}}while(0);i=ca(m+ca(i+ca(je(b,0,e))));l=1}else if((j|0)==56){switch(r|0){case 2:{i=ca(g[q>>2]);p=ca(ca(i*f)/ca(100.0));j=59;break}case 1:{i=ca(g[q>>2]);p=i;j=59;break}default:{}}if((j|0)==59?p>=ca(0.0):0)switch(r|0){case 2:{i=ca(ca(i*f)/ca(100.0));l=2;break c}case 1:{l=2;break c}default:{i=ca(s);l=2;break c}}i=f;l=((g[k>>2]=f,c[k>>2]|0)&2147483647)>>>0<2139095041&1}while(0);j=b+964|0;if(!(ce(b,o,i,h,n,l,e,f,1,6420,c[j>>2]|0)|0))return;le(b,c[b+496>>2]|0,e,f,e);me(b,ca(g[(c[j>>2]|0)+4>>2]),ca(0.0),ca(0.0));if(!(a[5661]|0))return;ie(b,7,0);return}function ee(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;i=i+16|0;g=f;c[g>>2]=e;e=(a|0)!=0?a:1588;Zb[c[e+8>>2]&1](e,0,b,d,g)|0;if((b|0)==5)fb();else{i=f;return}}function fe(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=i;i=i+16|0;f=g;c[f>>2]=e;if(!a)e=0;else e=c[a+964>>2]|0;e=(e|0)!=0?e:1588;Zb[c[e+8>>2]&1](e,a,b,d,f)|0;if((b|0)==5)fb();else{i=g;return}}function ge(b,c,d){b=b|0;c=c|0;d=d|0;a[b+c>>0]=d&1;return}function he(b,c){b=b|0;c=c|0;return (a[b+c>>0]|0)!=0|0}function ie(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,j=0,l=0,m=Hb,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0;N=i;i=i+256|0;M=N+240|0;L=N+232|0;K=N+224|0;J=N+216|0;H=N+208|0;G=N+200|0;F=N+192|0;E=N+184|0;D=N+176|0;C=N+168|0;B=N+160|0;A=N+144|0;z=N+128|0;y=N+112|0;x=N+104|0;w=N+96|0;v=N+88|0;u=N+80|0;t=N+72|0;p=N+64|0;o=N+56|0;n=N+48|0;l=N+40|0;s=N+32|0;r=N+24|0;q=N+16|0;j=N+8|0;f=N;I=(d|0)==0;if(!I){e=0;do{fe(a,3,6766,f);e=e+1|0}while((e|0)!=(d|0))}fe(a,3,6769,j);e=c[a+960>>2]|0;if(e)Lb[e&127](a);if(b&1){fe(a,3,6775,q);h[r>>3]=+ca(g[a+416>>2]);fe(a,3,6784,r);h[s>>3]=+ca(g[a+420>>2]);fe(a,3,6796,s);h[l>>3]=+ca(g[a+404>>2]);fe(a,3,6809,l);h[n>>3]=+ca(g[a+400>>2]);fe(a,3,6819,n);fe(a,3,6829,o)}do if(b&2){fe(a,3,6832,p);e=c[a+4>>2]|0;if(e){c[t>>2]=Ka(e|0)|0;fe(a,3,6840,t)}e=c[a+8>>2]|0;if(e){c[u>>2]=Xa(e|0)|0;fe(a,3,6861,u)}e=c[a+16>>2]|0;if((e|0)!=4){c[v>>2]=_a(e|0)|0;fe(a,3,6883,v)}e=c[a+12>>2]|0;if((e|0)!=1){c[w>>2]=_a(e|0)|0;fe(a,3,6901,w)}e=c[a+20>>2]|0;if(e){c[x>>2]=_a(e|0)|0;fe(a,3,6921,x)}m=ca(g[a+44>>2]);if(((g[k>>2]=m,c[k>>2]|0)&2147483647)>>>0<=2139095040){c[y>>2]=6947;h[y+8>>3]=+m;fe(a,3,6938,y)}m=ca(g[a+48>>2]);if(((g[k>>2]=m,c[k>>2]|0)&2147483647)>>>0<=2139095040){c[z>>2]=6957;h[z+8>>3]=+m;fe(a,3,6938,z)}if((c[a+56>>2]|0)!=3)Be(a,6969,a+52|0);m=ca(g[a+40>>2]);if(((g[k>>2]=m,c[k>>2]|0)&2147483647)>>>0<=2139095040){c[A>>2]=6598;h[A+8>>3]=+m;fe(a,3,6938,A)}e=c[a+28>>2]|0;if(e){c[B>>2]=Za(e|0)|0;fe(a,3,6980,B)}e=c[a+32>>2]|0;if(e){c[C>>2]=Sa(e|0)|0;fe(a,3,6995,C)}e=c[a+36>>2]|0;if(e){c[D>>2]=Fa(e|0)|0;fe(a,3,7010,D)}Ce(a,7024,a+60|0);Ce(a,7031,a+204|0);Ce(a,7039,a+276|0);if((c[a+352>>2]|0)!=3)Be(a,7046,a+348|0);if((c[a+360>>2]|0)!=3)Be(a,7052,a+356|0);if((c[a+384>>2]|0)!=3)Be(a,7059,a+380|0);if((c[a+392>>2]|0)!=3)Be(a,7069,a+388|0);if((c[a+368>>2]|0)!=3)Be(a,7080,a+364|0);if((c[a+376>>2]|0)!=3)Be(a,7090,a+372|0);e=c[a+24>>2]|0;if(e){c[E>>2]=kb(e|0)|0;fe(a,3,7101,E)}E=a+132|0;De(a,7116,E);De(a,7121,E);De(a,7127,E);De(a,7131,E);fe(a,3,6829,F);if(!(c[a+952>>2]|0))break;fe(a,3,7138,G)}while(0);fe(a,3,7164,H);e=a+944|0;f=qc(c[e>>2]|0)|0;if(!((b&4|0)!=0&(f|0)!=0)){fe(a,3,7168,M);i=N;return}j=d+1|0;l=0;do{fe(a,3,7166,J);ie(uc(c[e>>2]|0,l)|0,b,j);l=l+1|0}while((l|0)!=(f|0));if(!I){e=0;do{fe(a,3,6766,K);e=e+1|0}while((e|0)!=(d|0))}fe(a,3,7166,L);fe(a,3,7168,M);i=N;return}function je(a,b,d){a=a|0;b=b|0;d=ca(d);var e=0,f=0;if((b&-2|0)==2?(f=c[a+104>>2]|0,(f|0)!=0):0){e=a+100|0;if((f|0)==3){d=ca(0.0);return ca(d)}switch(f|0){case 2:{d=ca(ca(ca(g[e>>2])*d)/ca(100.0));return ca(d)}case 1:{d=ca(g[e>>2]);return ca(d)}default:{d=ca(s);return ca(d)}}}e=c[1652+(b<<2)>>2]|0;a:do if(!(c[a+60+(e<<3)+4>>2]|0)){if(b>>>0<2?(c[a+120>>2]|0)!=0:0){e=a+116|0;break}switch(e|0){case 0:case 2:case 4:case 5:{if(c[a+112>>2]|0){e=a+108|0;break a}break}default:{}}e=(c[a+128>>2]|0)==0?1604:a+124|0}else e=a+60+(e<<3)|0;while(0);f=c[e+4>>2]|0;if((f|0)==3){d=ca(0.0);return ca(d)}switch(f|0){case 2:{d=ca(ca(ca(g[e>>2])*d)/ca(100.0));return ca(d)}case 1:{d=ca(g[e>>2]);return ca(d)}default:{d=ca(s);return ca(d)}}return ca(0)}function ke(b,e,f,h,j,l,m,n,o,p){b=b|0;e=ca(e);f=ca(f);h=h|0;j=j|0;l=l|0;m=ca(m);n=ca(n);o=o|0;p=p|0;var q=0,r=Hb,t=Hb,u=Hb,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=Hb,E=Hb,F=Hb,G=Hb,H=Hb,I=Hb,J=Hb,K=0,L=0,M=0,N=Hb,P=0,Q=Hb,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=Hb,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=Hb,ta=Hb,ua=0,va=0,wa=0,xa=Hb,ya=Hb,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=Hb,Qa=Hb,Ra=Hb,Sa=Hb,Ta=Hb,Ua=0,Va=0,Wa=Hb,Xa=Hb,Ya=0,Za=0,_a=Hb,$a=Hb,ab=0,bb=0,cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=Hb,nb=Hb,ob=Hb;lb=i;i=i+64|0;v=lb+8|0;q=lb;ia=lb+56|0;fa=lb+52|0;ha=lb+48|0;ga=lb+44|0;Ja=lb+40|0;Na=lb+36|0;Ha=lb+32|0;La=lb+28|0;Oa=lb+24|0;Ka=lb+20|0;Ma=lb+16|0;Ia=lb+12|0;C=((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0>2139095040;if(!((j|0)==0|C^1)){c[q>>2]=6428;fe(b,5,5664,q)}B=((g[k>>2]=f,c[k>>2]|0)&2147483647)>>>0>2139095040;if(!((l|0)==0|B^1)){c[v>>2]=6508;fe(b,5,5664,v)}gb=c[b>>2]|0;gb=(gb|0)==0?((h|0)!=0?h:1):gb;c[b+496>>2]=gb;ib=(gb|0)==2;hb=ib?3:2;K=b+96|0;y=c[K>>2]|0;w=(y|0)==0;a:do if(w){q=c[1636+(hb<<2)>>2]|0;b:do if(!(c[b+60+(q<<3)+4>>2]|0)){switch(q|0){case 0:case 2:case 4:case 5:{if(c[b+112>>2]|0){q=b+108|0;break b}break}default:{}}q=(c[b+128>>2]|0)==0?1604:b+124|0}else q=b+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3)r=ca(0.0);else switch(h|0){case 2:{r=ca(ca(ca(g[q>>2])*m)/ca(100.0));break a}case 1:{r=ca(g[q>>2]);break a}default:{r=ca(s);break a}}}else{q=b+92|0;if((y|0)==3)r=ca(0.0);else switch(y|0){case 2:{r=ca(ca(ca(g[q>>2])*m)/ca(100.0));break a}case 1:{r=ca(g[q>>2]);break a}default:{r=ca(s);break a}}}while(0);g[b+440>>2]=r;g[b+444>>2]=ca(je(b,hb,m));L=b+72|0;x=(c[L>>2]|0)==0;do if(x)if(!(c[b+120>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+116|0;break}else q=b+68|0;while(0);h=c[q+4>>2]|0;c:do if((h|0)==3)r=ca(0.0);else switch(h|0){case 2:{r=ca(ca(ca(g[q>>2])*m)/ca(100.0));break c}case 1:{r=ca(g[q>>2]);break c}default:{r=ca(s);break c}}while(0);g[b+428>>2]=r;g[b+436>>2]=ca(je(b,0,m));g[b+464>>2]=ca(se(b,hb));g[b+468>>2]=ca(te(b,hb));jb=b+288|0;z=(c[jb>>2]|0)==0;do if(z)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+284|0;while(0);g[b+452>>2]=ca(Wn(ca(g[q>>2]),ca(0.0)));kb=b+304|0;A=(c[kb>>2]|0)==0;do if(A)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+300|0;while(0);g[b+460>>2]=ca(Wn(ca(g[q>>2]),ca(0.0)));g[b+488>>2]=ca(ue(b,hb,m));g[b+492>>2]=ca(ve(b,hb,m));g[b+476>>2]=ca(ue(b,0,m));g[b+484>>2]=ca(ve(b,0,m));v=c[b+952>>2]|0;if(v){r=ca(ue(b,2,e));r=ca(r+ca(se(b,2)));D=ca(ve(b,2,e));D=ca(r+ca(D+ca(te(b,2))));r=ca(ue(b,0,e));do if(z)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+284|0;while(0);r=ca(r+ca(Wn(ca(g[q>>2]),ca(0.0))));t=ca(ve(b,0,e));do if(A)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+300|0;while(0);u=ca(r+ca(t+ca(Wn(ca(g[q>>2]),ca(0.0)))));d:do if(w){do if(!(c[b+64>>2]|0))if(!(c[b+112>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+108|0;break}else q=b+60|0;while(0);h=c[q+4>>2]|0;if((h|0)==3)r=ca(0.0);else switch(h|0){case 2:{r=ca(ca(ca(g[q>>2])*e)/ca(100.0));break d}case 1:{r=ca(g[q>>2]);break d}default:{r=ca(s);break d}}}else{q=b+92|0;if((y|0)==3)r=ca(0.0);else switch(y|0){case 2:{r=ca(ca(ca(g[q>>2])*e)/ca(100.0));break d}case 1:{r=ca(g[q>>2]);break d}default:{r=ca(s);break d}}}while(0);t=ca(r+ca(je(b,2,e)));do if(x)if(!(c[b+120>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+116|0;break}else q=b+68|0;while(0);h=c[q+4>>2]|0;e:do if((h|0)==3)r=ca(0.0);else switch(h|0){case 2:{r=ca(ca(ca(g[q>>2])*e)/ca(100.0));break e}case 1:{r=ca(g[q>>2]);break e}default:{r=ca(s);break e}}while(0);t=ca(e-t);r=ca(f-ca(r+ca(je(b,0,e))));if((j|0)==1&(l|0)==1){_a=ca(we(b,2,t,m));$a=ca(ue(b,2,m));$a=ca($a+ca(se(b,2)));u=ca(ve(b,2,m));g[b+904>>2]=ca(Wn(_a,ca($a+ca(u+ca(te(b,2))))));u=ca(we(b,0,r,n));r=ca(ue(b,0,m));do if(z)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+284|0;while(0);t=ca(r+ca(Wn(ca(g[q>>2]),ca(0.0))));r=ca(ve(b,0,m));do if(A)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+300|0;while(0);g[b+908>>2]=ca(Wn(u,ca(t+ca(r+ca(Wn(ca(g[q>>2]),ca(0.0)))))))}else{m=ca(r-u);_a=ca(t-D);$b[v&1](ia,b,_a,j,m,l);m=ca(D+ca(g[ia>>2]));m=ca(we(b,2,(j&-3|0)==0?m:t,e));_a=ca(ue(b,2,e));_a=ca(_a+ca(se(b,2)));$a=ca(ve(b,2,e));g[b+904>>2]=ca(Wn(m,ca(_a+ca($a+ca(te(b,2))))));u=ca(u+ca(g[ia+4>>2]));u=ca(we(b,0,(l&-3|0)==0?u:r,f));r=ca(ue(b,0,e));do if(!(c[jb>>2]|0))if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+284|0;while(0);t=ca(r+ca(Wn(ca(g[q>>2]),ca(0.0))));r=ca(ve(b,0,e));do if(!(c[kb>>2]|0))if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+300|0;while(0);g[b+908>>2]=ca(Wn(u,ca(t+ca(r+ca(Wn(ca(g[q>>2]),ca(0.0)))))))}i=lb;return}eb=b+944|0;fb=qc(c[eb>>2]|0)|0;if(!fb){r=ca(ue(b,2,m));r=ca(r+ca(se(b,2)));D=ca(ve(b,2,m));D=ca(r+ca(D+ca(te(b,2))));r=ca(ue(b,0,m));v=(c[jb>>2]|0)==0;do if(v)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+284|0;while(0);r=ca(r+ca(Wn(ca(g[q>>2]),ca(0.0))));t=ca(ve(b,0,m));w=(c[kb>>2]|0)==0;do if(w)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+300|0;while(0);u=ca(r+ca(t+ca(Wn(ca(g[q>>2]),ca(0.0)))));q=c[K>>2]|0;f:do if(!q){do if(!(c[b+64>>2]|0))if(!(c[b+112>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+108|0;break}else q=b+60|0;while(0);h=c[q+4>>2]|0;if((h|0)==3)r=ca(0.0);else switch(h|0){case 2:{r=ca(ca(ca(g[q>>2])*m)/ca(100.0));break f}case 1:{r=ca(g[q>>2]);break f}default:{r=ca(s);break f}}}else{h=b+92|0;if((q|0)==3)r=ca(0.0);else switch(q|0){case 2:{r=ca(ca(ca(g[h>>2])*m)/ca(100.0));break f}case 1:{r=ca(g[h>>2]);break f}default:{r=ca(s);break f}}}while(0);t=ca(r+ca(je(b,2,m)));do if(!(c[L>>2]|0))if(!(c[b+120>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+116|0;break}else q=b+68|0;while(0);h=c[q+4>>2]|0;g:do if((h|0)==3)r=ca(0.0);else switch(h|0){case 2:{r=ca(ca(ca(g[q>>2])*m)/ca(100.0));break g}case 1:{r=ca(g[q>>2]);break g}default:{r=ca(s);break g}}while(0);r=ca(r+ca(je(b,0,m)));Xa=ca(e-t);Xa=ca(we(b,2,(j&-3|0)==0?D:Xa,m));_a=ca(ue(b,2,m));_a=ca(_a+ca(se(b,2)));$a=ca(ve(b,2,m));g[b+904>>2]=ca(Wn(Xa,ca(_a+ca($a+ca(te(b,2))))));r=ca(f-r);u=ca(we(b,0,(l&-3|0)==0?u:r,n));r=ca(ue(b,0,m));do if(v)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+284|0;while(0);t=ca(r+ca(Wn(ca(g[q>>2]),ca(0.0))));r=ca(ve(b,0,m));do if(w)if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+300|0;while(0);g[b+908>>2]=ca(Wn(u,ca(t+ca(r+ca(Wn(ca(g[q>>2]),ca(0.0)))))));i=lb;return}do if(!o){v=(j|0)==2;if((!(e<=ca(0.0)&v)?!(f<=ca(0.0)&(l|0)==2):0)?!((j|0)==1&(l|0)==1):0)break;do if(!(c[L>>2]|0))if(!(c[b+120>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+116|0;break}else q=b+68|0;while(0);h=c[q+4>>2]|0;h:do if((h|0)==3)r=ca(0.0);else switch(h|0){case 2:{r=ca(ca(ca(g[q>>2])*m)/ca(100.0));break h}case 1:{r=ca(g[q>>2]);break h}default:{r=ca(s);break h}}while(0);t=ca(r+ca(je(b,0,m)));q=c[K>>2]|0;i:do if(!q){do if(!(c[b+64>>2]|0))if(!(c[b+112>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+108|0;break}else q=b+60|0;while(0);h=c[q+4>>2]|0;if((h|0)==3)r=ca(0.0);else switch(h|0){case 2:{r=ca(ca(ca(g[q>>2])*m)/ca(100.0));break i}case 1:{r=ca(g[q>>2]);break i}default:{r=ca(s);break i}}}else{h=b+92|0;if((q|0)==3)r=ca(0.0);else switch(q|0){case 2:{r=ca(ca(ca(g[h>>2])*m)/ca(100.0));break i}case 1:{r=ca(g[h>>2]);break i}default:{r=ca(s);break i}}}while(0);p=C|e<ca(0.0)&v;Xa=ca(e-ca(r+ca(je(b,2,m))));Xa=ca(we(b,2,p?ca(0.0):Xa,m));_a=ca(ue(b,2,m));_a=ca(_a+ca(se(b,2)));$a=ca(ve(b,2,m));g[b+904>>2]=ca(Wn(Xa,ca(_a+ca($a+ca(te(b,2))))));if(B)r=ca(0.0);else{p=f<ca(0.0)&(l|0)==2;r=ca(f-t);r=p?ca(0.0):r}u=ca(we(b,0,r,n));r=ca(ue(b,0,m));do if(!(c[jb>>2]|0))if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+284|0;while(0);t=ca(r+ca(Wn(ca(g[q>>2]),ca(0.0))));r=ca(ve(b,0,m));do if(!(c[kb>>2]|0))if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+300|0;while(0);g[b+908>>2]=ca(Wn(u,ca(t+ca(r+ca(Wn(ca(g[q>>2]),ca(0.0)))))));i=lb;return}while(0);bb=b+4|0;q=c[bb>>2]|0;j:do if(ib){switch(q|0){case 2:{cb=3;ua=0;db=0;break j}case 3:break;default:{Za=185;break j}}cb=2;ua=0;db=0}else Za=185;while(0);if((Za|0)==185){db=q>>>0<2;cb=q;ua=db;db=db?hb:0}Ya=(cb&-2|0)==2;ab=b+8|0;va=c[ab>>2]|0;Va=b+28|0;wa=(c[Va>>2]|0)!=0;Sa=Ya?m:n;Wa=Ya?n:m;xa=ca(ue(b,cb,m));xa=ca(xa+ca(se(b,cb)));ya=ca(ve(b,cb,m));ya=ca(ya+ca(te(b,cb)));r=ca(ue(b,db,m));r=ca(r+ca(se(b,db)));Ta=ca(xa+ya);Xa=ca(ve(b,db,m));Xa=ca(r+ca(Xa+ca(te(b,db))));ea=Ya?j:l;Ua=Ya?l:j;I=Ya?Ta:Xa;J=Ya?Xa:Ta;q=c[K>>2]|0;k:do if(!q){do if(!(c[b+64>>2]|0))if(!(c[b+112>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+108|0;break}else q=b+60|0;while(0);h=c[q+4>>2]|0;if((h|0)==3)t=ca(0.0);else switch(h|0){case 2:{t=ca(ca(ca(g[q>>2])*m)/ca(100.0));break k}case 1:{t=ca(g[q>>2]);break k}default:{t=ca(s);break k}}}else{h=b+92|0;if((q|0)==3)t=ca(0.0);else switch(q|0){case 2:{t=ca(ca(ca(g[h>>2])*m)/ca(100.0));break k}case 1:{t=ca(g[h>>2]);break k}default:{t=ca(s);break k}}}while(0);H=ca(t+ca(je(b,2,m)));do if(!(c[L>>2]|0))if(!(c[b+120>>2]|0)){q=(c[b+128>>2]|0)==0?1604:b+124|0;break}else{q=b+116|0;break}else q=b+68|0;while(0);h=c[q+4>>2]|0;l:do if((h|0)==3)t=ca(0.0);else switch(h|0){case 2:{t=ca(ca(ca(g[q>>2])*m)/ca(100.0));break l}case 1:{t=ca(g[q>>2]);break l}default:{t=ca(s);break l}}while(0);G=ca(t+ca(je(b,0,m)));q=b+364|0;switch(c[b+368>>2]|0){case 2:{t=ca(ca(ca(g[q>>2])*m)/ca(100.0));break}case 1:{t=ca(g[q>>2]);break}default:t=ca(s)}F=ca(ca(t-H)-I);q=b+380|0;switch(c[b+384>>2]|0){case 2:{t=ca(ca(ca(g[q>>2])*m)/ca(100.0));break}case 1:{t=ca(g[q>>2]);break}default:t=ca(s)}D=ca(ca(t-H)-I);q=b+372|0;switch(c[b+376>>2]|0){case 2:{t=ca(ca(ca(g[q>>2])*n)/ca(100.0));break}case 1:{t=ca(g[q>>2]);break}default:t=ca(s)}E=ca(ca(t-G)-J);q=b+388|0;switch(c[b+392>>2]|0){case 2:{t=ca(ca(ca(g[q>>2])*n)/ca(100.0));break}case 1:{t=ca(g[q>>2]);break}default:t=ca(s)}u=ca(ca(t-G)-J);sa=Ya?F:E;ta=Ya?D:u;Qa=ca(e-H);t=ca(Qa-I);if(((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040)$a=t;else $a=ca(Wn(ca(Xn(t,D)),F));Pa=ca(f-G);t=ca(Pa-J);if(((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040)_a=t;else _a=ca(Wn(ca(Xn(t,u)),E));J=Ya?$a:_a;Ra=Ya?_a:$a;m:do if((ea|0)==1){v=0;h=0;while(1){q=uc(c[eb>>2]|0,v)|0;n:do if(h){if(c[q+24>>2]|0){q=h;break}t=ca(g[q+44>>2]);if(((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040){t=ca(g[q+40>>2]);if(t>ca(0.0)&((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0<2139095041){Q=t;Za=230}}else{Q=t;Za=230}if((Za|0)==230?(Za=0,Q!=ca(0.0)):0){q=0;break m}t=ca(g[q+48>>2]);if(((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040){if(a[(c[q+964>>2]|0)+2>>0]|0){q=0;break m}t=ca(g[q+40>>2]);if(!(t<ca(0.0)&((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0<2139095041)){q=h;break}t=ca(-t)}if(t!=ca(0.0)){q=0;break m}else q=h}else{t=ca(g[q+44>>2]);if(((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040){t=ca(g[q+40>>2]);if(!(t>ca(0.0)&((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0<2139095041)){q=0;break}}if(!(t>ca(0.0))){q=0;break}t=ca(g[q+48>>2]);do if(((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040){if(a[(c[q+964>>2]|0)+2>>0]|0)break;t=ca(g[q+40>>2]);if(!(t<ca(0.0)&((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0<2139095041)){q=0;break n}N=ca(-t);Za=243}else{N=t;Za=243}while(0);if((Za|0)==243?(Za=0,!(N>ca(0.0))):0){q=0;break}}while(0);v=v+1|0;if(v>>>0>=fb>>>0)break;else h=q}}else q=0;while(0);_=(gb|0)!=0?gb:1;W=(g[k>>2]=$a,c[k>>2]|0)&2147483647;ba=W>>>0<2139095041;aa=(g[k>>2]=_a,c[k>>2]|0)&2147483647;da=aa>>>0<2139095041;$=b+32|0;aa=aa>>>0>2139095040;T=(l|0)==1;U=b+16|0;V=(j|0)==1;W=W>>>0>2139095040;X=q+500|0;Y=q+504|0;R=0;v=0;Z=0;t=ca(0.0);while(1){S=uc(c[eb>>2]|0,Z)|0;if((c[S+36>>2]|0)==1){xe(S);a[S+973>>0]=1;a[S+972>>0]=0;h=R}else{h=S+380|0;w=c[S+384>>2]|0;do if(!w)Za=253;else{ra=S+368|0;if((w|0)!=(d[ra>>0]|d[ra+1>>0]<<8|d[ra+2>>0]<<16|d[ra+3>>0]<<24|0)){Za=253;break}a[k>>0]=a[h>>0];a[k+1>>0]=a[h+1>>0];a[k+2>>0]=a[h+2>>0];a[k+3>>0]=a[h+3>>0];ja=ca(g[k>>2]);ra=S+364|0;a[k>>0]=a[ra>>0];a[k+1>>0]=a[ra+1>>0];a[k+2>>0]=a[ra+2>>0];a[k+3>>0]=a[ra+3>>0];if(!(ca(O(ca(ja-ca(g[k>>2]))))<ca(.0000999999974))){Za=253;break}c[S+976>>2]=h}while(0);if((Za|0)==253){Za=0;c[S+976>>2]=S+348}h=S+388|0;w=c[S+392>>2]|0;do if(!w)Za=258;else{ra=S+376|0;if((w|0)!=(d[ra>>0]|d[ra+1>>0]<<8|d[ra+2>>0]<<16|d[ra+3>>0]<<24|0)){Za=258;break}a[k>>0]=a[h>>0];a[k+1>>0]=a[h+1>>0];a[k+2>>0]=a[h+2>>0];a[k+3>>0]=a[h+3>>0];ja=ca(g[k>>2]);ra=S+372|0;a[k>>0]=a[ra>>0];a[k+1>>0]=a[ra+1>>0];a[k+2>>0]=a[ra+2>>0];a[k+3>>0]=a[ra+3>>0];if(!(ca(O(ca(ja-ca(g[k>>2]))))<ca(.0000999999974))){Za=258;break}c[S+980>>2]=h}while(0);if((Za|0)==258){Za=0;c[S+980>>2]=S+356}if(o){ra=c[S>>2]|0;le(S,(ra|0)==0?_:ra,J,Ra,$a)}do if((c[S+24>>2]|0)==1){if(R)c[R+948>>2]=S;c[S+948>>2]=0;h=S;v=(v|0)==0?S:v}else{if((S|0)==(q|0)){c[X>>2]=c[149];g[Y>>2]=ca(0.0);h=R;break}h=c[bb>>2]|0;o:do if(ib){switch(h|0){case 2:{h=3;break o}case 3:break;default:{Za=270;break o}}h=2}else Za=270;while(0);P=(h&-2|0)==2;D=P?$a:_a;p:do switch(c[S+56>>2]|0){case 0:case 3:{ja=ca(g[S+40>>2]);if(!(ja>ca(0.0)&((g[k>>2]=ja,c[k>>2]|0)&2147483647)>>>0<2139095041)){w=1676;break p}w=(a[(c[S+964>>2]|0)+2>>0]|0)!=0?1676:1604;break}default:w=S+52|0}while(0);switch(c[w+4>>2]|0){case 2:{u=ca(ca(D*ca(g[w>>2]))/ca(100.0));break}case 1:{u=ca(g[w>>2]);break}default:u=ca(s)}y=c[S+976>>2]|0;z=c[y+4>>2]|0;q:do switch(z|0){case 0:case 3:{A=0;break}case 1:{if(ca(g[y>>2])<ca(0.0)){A=0;break q}A=1;break}default:{if((z|0)!=2){A=1;break q}if(ca(g[y>>2])<ca(0.0)){A=0;break q}A=ba}}while(0);B=c[S+980>>2]|0;C=c[B+4>>2]|0;r:do switch(C|0){case 0:case 3:{K=0;break}case 1:{if(ca(g[B>>2])<ca(0.0)){K=0;break r}K=1;break}default:{if((C|0)!=2){K=1;break r}if(ca(g[B>>2])<ca(0.0)){K=0;break r}K=da}}while(0);do if(((g[k>>2]=u,c[k>>2]|0)&2147483647)>>>0>2139095040)Za=295;else{if(((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0>2139095040){Za=295;break}w=S+504|0;if((c[w>>2]&2147483647)>>>0<=2139095040){if(!(a[c[S+964>>2]>>0]|0)){Za=381;break}if((c[S+500>>2]|0)==(c[149]|0)){Za=381;break}}e=ca(ue(S,h,$a));e=ca(e+ca(se(S,h)));ja=ca(ve(S,h,$a));g[w>>2]=ca(Wn(u,ca(e+ca(ja+ca(te(S,h))))));Za=381}while(0);s:do if((Za|0)==295){M=P^1;l=A^1;if(!(M|l)){switch(z|0){case 2:{u=ca(ca($a*ca(g[y>>2]))/ca(100.0));break}case 1:{u=ca(g[y>>2]);break}default:u=ca(s)}e=ca(ue(S,2,$a));e=ca(e+ca(se(S,2)));ja=ca(ve(S,2,$a));g[S+504>>2]=ca(Wn(u,ca(e+ca(ja+ca(te(S,2))))));Za=381;break}L=K^1;if(!(P|L)){switch(C|0){case 2:{E=ca(ca(_a*ca(g[B>>2]))/ca(100.0));break}case 1:{E=ca(g[B>>2]);break}default:E=ca(s)}u=ca(ue(S,0,$a));do if(!(c[S+288>>2]|0))if(!(c[S+336>>2]|0)){h=(c[S+344>>2]|0)==0?1604:S+340|0;break}else{h=S+332|0;break}else h=S+284|0;while(0);u=ca(u+ca(Wn(ca(g[h>>2]),ca(0.0))));D=ca(ve(S,0,$a));do if(!(c[S+304>>2]|0))if(!(c[S+336>>2]|0)){h=(c[S+344>>2]|0)==0?1604:S+340|0;break}else{h=S+332|0;break}else h=S+300|0;while(0);g[S+504>>2]=ca(Wn(E,ca(u+ca(D+ca(Wn(ca(g[h>>2]),ca(0.0)))))));Za=381;break}g[ia>>2]=ca(s);g[fa>>2]=ca(s);c[ha>>2]=0;c[ga>>2]=0;w=c[S+96>>2]|0;t:do if(!w){do if(!(c[S+64>>2]|0))if(!(c[S+112>>2]|0)){w=(c[S+128>>2]|0)==0?1604:S+124|0;break}else{w=S+108|0;break}else w=S+60|0;while(0);x=c[w+4>>2]|0;if((x|0)==3){u=ca(0.0);break}switch(x|0){case 2:{u=ca(ca($a*ca(g[w>>2]))/ca(100.0));break t}case 1:{u=ca(g[w>>2]);break t}default:{u=ca(s);break t}}}else{x=S+92|0;if((w|0)==3){u=ca(0.0);break}switch(w|0){case 2:{u=ca(ca($a*ca(g[x>>2]))/ca(100.0));break t}case 1:{u=ca(g[x>>2]);break t}default:{u=ca(s);break t}}}while(0);G=ca(u+ca(je(S,2,$a)));do if(!(c[S+72>>2]|0))if(!(c[S+120>>2]|0)){w=(c[S+128>>2]|0)==0?1604:S+124|0;break}else{w=S+116|0;break}else w=S+68|0;while(0);x=c[w+4>>2]|0;u:do if((x|0)==3)u=ca(0.0);else switch(x|0){case 2:{u=ca(ca($a*ca(g[w>>2]))/ca(100.0));break u}case 1:{u=ca(g[w>>2]);break u}default:{u=ca(s);break u}}while(0);F=ca(u+ca(je(S,0,$a)));if(A){switch(z|0){case 2:{u=ca(ca($a*ca(g[y>>2]))/ca(100.0));break}case 1:{u=ca(g[y>>2]);break}default:u=ca(s)}ja=ca(G+u);g[ia>>2]=ja;c[ha>>2]=1;E=ja;x=1;z=(g[k>>2]=ja,c[k>>2]|0)}else{E=ca(s);x=0;z=2143289344}if(K){switch(C|0){case 2:{u=ca(ca(_a*ca(g[B>>2]))/ca(100.0));break}case 1:{u=ca(g[B>>2]);break}default:u=ca(s)}ja=ca(F+u);g[fa>>2]=ja;c[ga>>2]=1;D=ja;y=1;A=(g[k>>2]=ja,c[k>>2]|0)}else{D=ca(s);y=0;A=2143289344}w=c[$>>2]|0;if(!(P&(w|0)==2)){if(!((z&2147483647)>>>0<2139095041|W)){g[ia>>2]=$a;c[ha>>2]=2;E=$a;x=2}if((w|0)==2&(P^1))Za=355;else Za=352}else Za=352;do if((Za|0)==352){Za=0;if(!((A&2147483647)>>>0<2139095041|aa)){g[fa>>2]=_a;c[ga>>2]=2;D=_a;y=2}if(!P){Za=355;break}if(!(da&(T&L))){w=y;break}w=c[S+20>>2]|0;if(!w)w=c[U>>2]|0;if((w|0)!=4){w=y;break}g[fa>>2]=_a;c[ga>>2]=1;w=1;D=_a}while(0);do if((Za|0)==355){Za=0;if(!(ba&(V&l))){w=y;break}w=c[S+20>>2]|0;if(!w)w=c[U>>2]|0;if((w|0)!=4){w=y;break}g[ia>>2]=$a;c[ha>>2]=1;x=1;E=$a;w=y}while(0);u=ca(g[S+396>>2]);do if(((g[k>>2]=u,c[k>>2]|0)&2147483647)>>>0<=2139095040){if(!((x|0)==1&M)){if(!(P&(w|0)==1))break;f=ca(u*ca(D-F));e=ca(ue(S,2,$a));e=ca(e+ca(se(S,2)));ja=ca(ve(S,2,$a));g[S+504>>2]=ca(Wn(f,ca(e+ca(ja+ca(te(S,2))))));break s}E=ca(ca(E-G)/u);u=ca(ue(S,0,$a));do if(!(c[S+288>>2]|0))if(!(c[S+336>>2]|0)){h=(c[S+344>>2]|0)==0?1604:S+340|0;break}else{h=S+332|0;break}else h=S+284|0;while(0);u=ca(u+ca(Wn(ca(g[h>>2]),ca(0.0))));D=ca(ve(S,0,$a));do if(!(c[S+304>>2]|0))if(!(c[S+336>>2]|0)){h=(c[S+344>>2]|0)==0?1604:S+340|0;break}else{h=S+332|0;break}else h=S+300|0;while(0);g[S+504>>2]=ca(Wn(E,ca(u+ca(D+ca(Wn(ca(g[h>>2]),ca(0.0)))))));break s}while(0);ye(S,2,$a,$a,ha,ia);ye(S,0,_a,$a,ga,fa);e=ca(g[ia>>2]);f=ca(g[fa>>2]);ce(S,e,f,gb,c[ha>>2]|0,c[ga>>2]|0,$a,_a,0,6590,p)|0;f=ca(g[S+904+(c[1684+(h<<2)>>2]<<2)>>2]);e=ca(ue(S,h,$a));e=ca(e+ca(se(S,h)));ja=ca(ve(S,h,$a));g[S+504>>2]=ca(Wn(f,ca(e+ca(ja+ca(te(S,h))))));Za=381}while(0);if((Za|0)==381){Za=0;c[S+500>>2]=c[149]}h=R}while(0);t=ca(t+ca(g[S+504>>2]))}Z=Z+1|0;if((Z|0)==(fb|0)){ra=v;break}else R=h}q=(ea|0)==0?0:t>J&1;if(wa)ea=(ea|0)==2&(q|0)!=0?1:ea;M=(Ua|0)==1;S=M&(o^1);T=(ea|0)==1;U=(ea|0)==2;V=1684+(cb<<2)|0;W=(Ua&-3|0)==0;oa=M&(wa^1);X=(db&-2|0)==2;Y=1636+(db<<2)|0;Z=db>>>0<2;_=1636+(db<<2)|0;$=b+16|0;aa=1684+(db<<2)|0;ba=1652+(db<<2)|0;da=1636+(cb<<2)|0;ha=(g[k>>2]=Ra,c[k>>2]|0)&2147483647;pa=ha>>>0<2139095041;fa=1636+(cb<<2)|0;ga=1652+(cb<<2)|0;ha=ha>>>0>2139095040;ia=(Ua|0)!=1;ka=ha?0:2;P=((g[k>>2]=sa,c[k>>2]|0)&2147483647)>>>0<2139095041;R=((g[k>>2]=ta,c[k>>2]|0)&2147483647)>>>0<2139095041;la=b+964|0;ma=b+44|0;na=b+40|0;qa=pa^1;M=wa&(q|0)!=0|M^1;L=0;v=0;ja=ca(0.0);u=ca(0.0);while(1){v:do if(L>>>0<fb>>>0){A=0;q=L;B=0;x=0;E=ca(0.0);H=ca(0.0);Q=ca(0.0);N=ca(0.0);while(1){z=uc(c[eb>>2]|0,q)|0;do if((c[z+36>>2]|0)==1){h=A;w=B;F=H;D=Q;t=N}else{c[z+936>>2]=v;y=c[z+24>>2]|0;if((y|0)==1){h=A;w=B;F=H;D=Q;t=N;break}w:do if(Ya){h=c[z+96>>2]|0;if(!h){Za=397;break}w=z+92|0;if((h|0)==3){t=ca(0.0);break}switch(h|0){case 2:{t=ca(ca($a*ca(g[w>>2]))/ca(100.0));break w}case 1:{t=ca(g[w>>2]);break w}default:{t=ca(s);break w}}}else Za=397;while(0);x:do if((Za|0)==397){Za=0;h=c[da>>2]|0;y:do if(!(c[z+60+(h<<3)+4>>2]|0)){do if(ua){if(!(c[z+120>>2]|0))break;h=z+116|0;break y}while(0);z:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[z+112>>2]|0))break z;h=z+108|0;break y}default:{}}while(0);h=(c[z+128>>2]|0)==0?1604:z+124|0}else h=z+60+(h<<3)|0;while(0);w=c[h+4>>2]|0;if((w|0)==3){t=ca(0.0);break}switch(w|0){case 2:{t=ca(ca($a*ca(g[h>>2]))/ca(100.0));break x}case 1:{t=ca(g[h>>2]);break x}default:{t=ca(s);break x}}}while(0);G=ca(t+ca(je(z,cb,$a)));w=c[V>>2]|0;h=z+380+(w<<3)|0;switch(c[z+380+(w<<3)+4>>2]|0){case 2:{t=ca(ca(Sa*ca(g[h>>2]))/ca(100.0));break}case 1:{t=ca(g[h>>2]);break}default:t=ca(s)}h=z+364+(w<<3)|0;switch(c[z+364+(w<<3)+4>>2]|0){case 2:{F=ca(ca(Sa*ca(g[h>>2]))/ca(100.0));I=ca(g[z+504>>2]);F=ca(Xn(t,ca(Wn(F,I))));D=ca(ca(Sa*ca(g[h>>2]))/ca(100.0));break}case 1:{F=ca(g[h>>2]);I=ca(g[z+504>>2]);D=F;F=ca(Xn(t,ca(Wn(F,I))));break}default:{I=ca(g[z+504>>2]);F=ca(Xn(t,ca(Wn(ca(s),I))));D=ca(s)}}t=ca(Wn(D,F));if(wa&(x|0)!=0&ca(G+ca(H+t))>J){l=q;w=B;K=x;break v}H=ca(H+ca(G+t));E=ca(E+ca(G+F));x=x+1|0;A:do if(!y){t=ca(g[z+44>>2]);h=((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040;if(h){D=ca(g[z+40>>2]);if(D>ca(0.0)&((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0<2139095041)Za=421;else Za=422}else{D=t;Za=421}if((Za|0)==421?(Za=0,!(D!=ca(0.0))):0)Za=422;do if((Za|0)==422){Za=0;D=ca(g[z+48>>2]);if(((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0>2139095040){if(a[(c[z+964>>2]|0)+2>>0]|0)break;D=ca(g[z+40>>2]);if(!(D<ca(0.0)&((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0<2139095041)){D=Q;t=N;break A}D=ca(-D)}if(!(D!=ca(0.0))){D=Q;t=N;break A}}while(0);if(h){t=ca(g[z+40>>2]);l=t>ca(0.0)&((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0<2139095041;t=l?t:ca(0.0)}D=ca(Q+t);t=ca(g[z+48>>2]);B:do if(((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040){h=a[(c[z+964>>2]|0)+2>>0]|0;do if(!(h<<24>>24)){t=ca(g[z+40>>2]);if(!(t<ca(0.0)&((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0<2139095041))break;t=ca(-t);break B}while(0);t=h<<24>>24!=0?ca(1.0):ca(0.0)}while(0);t=ca(N-ca(t*I))}else{D=Q;t=N}while(0);if(A)c[A+948>>2]=z;c[z+948>>2]=0;h=z;w=(B|0)==0?z:B;F=H}while(0);q=q+1|0;if(q>>>0<fb>>>0){A=h;B=w;H=F;Q=D;N=t}else{l=q;K=x;Q=D;N=t;break}}}else{l=L;w=0;K=0;E=ca(0.0);Q=ca(0.0);N=ca(0.0)}while(0);C:do if(T)e=J;else{if(P&E<sa){e=sa;break}if(R&E>ta){e=ta;break}if(a[(c[la>>2]|0)+3>>0]|0){e=J;break}do if(!(Q==ca(0.0))){t=ca(g[ma>>2]);if(((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040){t=ca(g[na>>2]);if(!(t>ca(0.0)&((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0<2139095041))break}if(!(t==ca(0.0))){e=J;break C}}while(0);e=E}while(0);do if(((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0>2139095040){if(!(E<ca(0.0))){f=ca(0.0);break}f=ca(-E)}else f=ca(e-E);while(0);D:do if(S)t=ca(0.0);else{z=(w|0)==0;if(z){t=ca(0.0);break}h=f<ca(0.0);I=ca(f/N);x=f>ca(0.0);J=ca(f/Q);y=w;E=ca(0.0);t=ca(0.0);D=ca(0.0);do{H=ca(g[y+504>>2]);do if(h){F=ca(g[y+48>>2]);E:do if(((g[k>>2]=F,c[k>>2]|0)&2147483647)>>>0>2139095040){q=a[(c[y+964>>2]|0)+2>>0]|0;do if(!(q<<24>>24)){F=ca(g[y+40>>2]);if(!(F<ca(0.0)&((g[k>>2]=F,c[k>>2]|0)&2147483647)>>>0<2139095041))break;F=ca(-F);break E}while(0);F=q<<24>>24!=0?ca(1.0):ca(0.0)}while(0);F=ca(H*F);if(!(F!=ca(-0.0)))break;mb=ca(H-ca(F*I));ob=ca(we(y,cb,mb,e));nb=ca(ue(y,cb,$a));nb=ca(nb+ca(se(y,cb)));G=ca(ve(y,cb,$a));G=ca(Wn(ob,ca(nb+ca(G+ca(te(y,cb))))));if(!(mb!=G))break;t=ca(t+F);D=ca(D-ca(G-H))}else{if(!x)break;F=ca(g[y+44>>2]);if(((g[k>>2]=F,c[k>>2]|0)&2147483647)>>>0>2139095040){F=ca(g[y+40>>2]);if(!(F>ca(0.0)&((g[k>>2]=F,c[k>>2]|0)&2147483647)>>>0<2139095041))break}if(!(F!=ca(0.0)))break;ob=ca(H+ca(F*J));mb=ca(we(y,cb,ob,e));nb=ca(ue(y,cb,$a));nb=ca(nb+ca(se(y,cb)));G=ca(ve(y,cb,$a));G=ca(Wn(mb,ca(nb+ca(G+ca(te(y,cb))))));if(!(ob!=G))break;E=ca(E-F);D=ca(D-ca(G-H))}while(0);y=c[y+948>>2]|0}while((y|0)!=0);t=ca(N+t);D=ca(f+D);if(z){t=ca(0.0);break}I=ca(Q+E);B=D<ca(0.0);C=t==ca(0.0);J=ca(D/t);z=c[aa>>2]|0;A=D>ca(0.0);I=ca(D/I);y=w;t=ca(0.0);while(1){E=ca(g[y+504>>2]);do if(B){D=ca(g[y+48>>2]);F:do if(((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0>2139095040){q=a[(c[y+964>>2]|0)+2>>0]|0;do if(!(q<<24>>24)){D=ca(g[y+40>>2]);if(!(D<ca(0.0)&((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0<2139095041))break;D=ca(-D);break F}while(0);D=q<<24>>24!=0?ca(1.0):ca(0.0)}while(0);ob=ca(E*D);D=ca(-ob);if(!(ob!=ca(-0.0))){F=E;break}nb=ca(J*D);nb=ca(we(y,cb,ca(E+(C?D:nb)),e));ob=ca(ue(y,cb,$a));ob=ca(ob+ca(se(y,cb)));F=ca(ve(y,cb,$a));F=ca(Wn(nb,ca(ob+ca(F+ca(te(y,cb))))))}else{if(!A){F=E;break}D=ca(g[y+44>>2]);if(((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0>2139095040){D=ca(g[y+40>>2]);if(!(D>ca(0.0)&((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0<2139095041)){F=E;break}}if(!(D!=ca(0.0))){F=E;break}nb=ca(we(y,cb,ca(E+ca(D*I)),e));ob=ca(ue(y,cb,$a));ob=ca(ob+ca(se(y,cb)));F=ca(ve(y,cb,$a));F=ca(Wn(nb,ca(ob+ca(F+ca(te(y,cb))))))}while(0);t=ca(t-ca(F-E));G:do if(Ya){q=c[y+96>>2]|0;if(!q){Za=492;break}h=y+92|0;if((q|0)==3){D=ca(0.0);break}switch(q|0){case 2:{D=ca(ca($a*ca(g[h>>2]))/ca(100.0));break G}case 1:{D=ca(g[h>>2]);break G}default:{D=ca(s);break G}}}else Za=492;while(0);H:do if((Za|0)==492){Za=0;q=c[da>>2]|0;I:do if(!(c[y+60+(q<<3)+4>>2]|0)){do if(ua){if(!(c[y+120>>2]|0))break;q=y+116|0;break I}while(0);J:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[y+112>>2]|0))break J;q=y+108|0;break I}default:{}}while(0);q=(c[y+128>>2]|0)==0?1604:y+124|0}else q=y+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){D=ca(0.0);break}switch(h|0){case 2:{D=ca(ca($a*ca(g[q>>2]))/ca(100.0));break H}case 1:{D=ca(g[q>>2]);break H}default:{D=ca(s);break H}}}while(0);H=ca(D+ca(je(y,cb,$a)));K:do if(X){q=c[y+96>>2]|0;if(!q){Za=511;break}h=y+92|0;if((q|0)==3){D=ca(0.0);break}switch(q|0){case 2:{D=ca(ca($a*ca(g[h>>2]))/ca(100.0));break K}case 1:{D=ca(g[h>>2]);break K}default:{D=ca(s);break K}}}else Za=511;while(0);L:do if((Za|0)==511){Za=0;q=c[Y>>2]|0;M:do if(!(c[y+60+(q<<3)+4>>2]|0)){do if(Z){if(!(c[y+120>>2]|0))break;q=y+116|0;break M}while(0);N:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[y+112>>2]|0))break N;q=y+108|0;break M}default:{}}while(0);q=(c[y+128>>2]|0)==0?1604:y+124|0}else q=y+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){D=ca(0.0);break}switch(h|0){case 2:{D=ca(ca($a*ca(g[q>>2]))/ca(100.0));break L}case 1:{D=ca(g[q>>2]);break L}default:{D=ca(s);break L}}}while(0);G=ca(D+ca(je(y,db,$a)));E=ca(F+H);g[Na>>2]=E;c[La>>2]=1;x=y+976+(z<<2)|0;h=c[x>>2]|0;w=c[h+4>>2]|0;O:do if(ha)Za=533;else{switch(w|0){case 0:case 3:break;case 1:{if(!(ca(g[h>>2])<ca(0.0))){Za=534;break O}break}case 2:{if(!(ca(g[h>>2])<ca(0.0))){Za=535;break O}break}default:{D=ca(s);Za=539;break O}}if(M){Za=533;break}q=c[y+20>>2]|0;if(!q)q=c[$>>2]|0;if((q|0)!=4){Za=533;break}g[Ja>>2]=Ra;c[Ha>>2]=1}while(0);if((Za|0)==533)switch(w|0){case 0:case 3:{Za=536;break}case 1:{Za=534;break}case 2:{Za=535;break}default:{D=ca(s);Za=539}}do if((Za|0)==534){if(ca(g[h>>2])<ca(0.0)){Za=536;break}D=ca(g[h>>2]);Za=539}else if((Za|0)==535){if(!(pa&!(ca(g[h>>2])<ca(0.0)))){Za=536;break}D=ca(ca(Ra*ca(g[h>>2]))/ca(100.0));Za=539}while(0);if((Za|0)==536){Za=0;g[Ja>>2]=Ra;c[Ha>>2]=ka}else if((Za|0)==539){Za=0;ob=ca(G+D);g[Ja>>2]=ob;c[Ha>>2]=(((g[k>>2]=ob,c[k>>2]|0)&2147483647)>>>0>2139095040|ia&(c[(c[x>>2]|0)+4>>2]|0)==2)&1^1}q=y+396|0;D=ca(g[q>>2]);if(((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0<=2139095040){nb=ca(E-H);mb=ca(nb/D);nb=ca(D*nb);ob=ca(ue(y,db,$a));ob=ca(ob+ca(se(y,db)));D=ca(ve(y,db,$a));D=ca(Wn(Ya?mb:nb,ca(ob+ca(D+ca(te(y,db))))));g[Ja>>2]=D;c[Ha>>2]=1;P:do if(!(c[y+24>>2]|0)){E=ca(g[y+44>>2]);if(((g[k>>2]=E,c[k>>2]|0)&2147483647)>>>0>2139095040){E=ca(g[y+40>>2]);if(E>ca(0.0)&((g[k>>2]=E,c[k>>2]|0)&2147483647)>>>0<2139095041)Za=544;else Za=545}else Za=544;if((Za|0)==544?(Za=0,!(E!=ca(0.0))):0)Za=545;do if((Za|0)==545){Za=0;E=ca(g[y+48>>2]);if(((g[k>>2]=E,c[k>>2]|0)&2147483647)>>>0>2139095040){if(a[(c[y+964>>2]|0)+2>>0]|0)break;E=ca(g[y+40>>2]);if(!(E<ca(0.0)&((g[k>>2]=E,c[k>>2]|0)&2147483647)>>>0<2139095041))break P;E=ca(-E)}if(!(E!=ca(0.0)))break P}while(0);D=ca(Xn(ca(D-G),Ra));g[Ja>>2]=D;ob=ca(g[q>>2]);nb=ca(D*ob);ob=ca(D/ob);g[Na>>2]=ca(H+(Ya?nb:ob))}while(0);g[Ja>>2]=ca(G+D)}ye(y,cb,e,$a,La,Na);ye(y,db,Ra,$a,Ha,Ja);q=c[y+976+(z<<2)>>2]|0;switch(c[q+4>>2]|0){case 0:case 3:{Za=555;break}case 1:{if(ca(g[q>>2])<ca(0.0))Za=555;else q=0;break}case 2:{if(pa&!(ca(g[q>>2])<ca(0.0)))q=0;else Za=555;break}default:q=0}if((Za|0)==555){Za=0;q=c[y+20>>2]|0;if(!q)q=c[$>>2]|0;if((q|0)==5?(c[bb>>2]|0)>>>0<2:0)q=1;q=(q|0)==4}D=ca(g[Na>>2]);E=ca(g[Ja>>2]);h=c[La>>2]|0;w=c[Ha>>2]|0;if(o)q=q^1;else q=0;ce(y,Ya?D:E,Ya?E:D,gb,Ya?h:w,Ya?w:h,$a,_a,q,6598,p)|0;y=c[y+948>>2]|0;if(!y)break D}}while(0);E=ca(f+t);Q:do if(U&E>ca(0.0)){q=c[V>>2]|0;h=c[b+364+(q<<3)+4>>2]|0;if(!h){E=ca(0.0);break}q=b+364+(q<<3)|0;switch(h|0){case 2:{t=ca(g[q>>2]);D=ca(ca(Sa*t)/ca(100.0));break}case 1:{t=ca(g[q>>2]);D=t;break}default:{E=ca(0.0);break Q}}if(!(D>=ca(0.0))){E=ca(0.0);break}switch(h|0){case 2:{t=ca(ca(Sa*t)/ca(100.0));break}case 1:break;default:t=ca(s)}E=ca(Wn(ca(0.0),ca(t-ca(e-E))))}while(0);y=L>>>0<l>>>0;if(y){x=L;q=0;do{w=uc(c[eb>>2]|0,x)|0;if(!(c[w+24>>2]|0)){if(Ya){h=c[w+96>>2]|0;if(!h)h=c[w+60+(c[da>>2]<<3)+4>>2]|0;q=((h|0)==3&1)+q|0;h=c[w+104>>2]|0;if(!h)Za=581}else{q=((c[w+60+(c[da>>2]<<3)+4>>2]|0)==3&1)+q|0;Za=581}if((Za|0)==581){Za=0;h=c[w+60+(c[ga>>2]<<3)+4>>2]|0}q=((h|0)==3&1)+q|0}x=x+1|0}while((x|0)!=(l|0));if(q){H=ca(0.0);I=ca(0.0)}else Za=585}else Za=585;R:do if((Za|0)==585){Za=0;switch(va|0){case 1:{H=ca(0.0);I=ca(E*ca(.5));q=0;break R}case 2:{H=ca(0.0);I=E;q=0;break R}case 3:{if(K>>>0<=1){H=ca(0.0);I=ca(0.0);q=0;break R}H=ca(ca(Wn(E,ca(0.0)))/ca((K+-1|0)>>>0));I=ca(0.0);q=0;break R}case 4:{I=ca(E/ca(K>>>0));H=I;I=ca(I*ca(.5));q=0;break R}default:{H=ca(0.0);I=ca(0.0);q=0;break R}}}while(0);t=ca(xa+I);if(y){G=ca(E/ca(q|0));D=ca(0.0);x=L;do{w=uc(c[eb>>2]|0,x)|0;S:do if((c[w+36>>2]|0)!=1){T:do switch(c[w+24>>2]|0){case 1:{if(Ya){do if(!(c[w+168>>2]|0))if(!(c[w+184>>2]|0)){q=(c[w+200>>2]|0)==0?1668:w+196|0;break}else{q=w+180|0;break}else q=w+164|0;while(0);if(!(c[q+4>>2]|0))Za=602}else Za=602;if((Za|0)==602){Za=0;q=c[da>>2]|0;U:do if(!(c[w+132+(q<<3)+4>>2]|0)){do if(ua){if(!(c[w+192>>2]|0))break;q=w+188|0;break U}while(0);V:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[w+184>>2]|0))break V;q=w+180|0;break U}default:{}}while(0);q=(c[w+200>>2]|0)==0?1668:w+196|0}else q=w+132+(q<<3)|0;while(0);if(!(c[q+4>>2]|0))break T}if(!o)break S;F=ca(ca(qe(w,cb,e))+ca(se(b,cb)));W:do if(Ya){q=c[w+96>>2]|0;if(!q){Za=619;break}h=w+92|0;if((q|0)==3){E=ca(0.0);break}switch(q|0){case 2:{E=ca(ca($a*ca(g[h>>2]))/ca(100.0));break W}case 1:{E=ca(g[h>>2]);break W}default:{E=ca(s);break W}}}else Za=619;while(0);X:do if((Za|0)==619){Za=0;q=c[da>>2]|0;Y:do if(!(c[w+60+(q<<3)+4>>2]|0)){do if(ua){if(!(c[w+120>>2]|0))break;q=w+116|0;break Y}while(0);Z:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[w+112>>2]|0))break Z;q=w+108|0;break Y}default:{}}while(0);q=(c[w+128>>2]|0)==0?1604:w+124|0}else q=w+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){E=ca(0.0);break}switch(h|0){case 2:{E=ca(ca($a*ca(g[q>>2]))/ca(100.0));break X}case 1:{E=ca(g[q>>2]);break X}default:{E=ca(s);break X}}}while(0);ob=ca(F+E);g[w+400+(c[fa>>2]<<2)>>2]=ob;break S}case 0:{if(Ya?(za=c[w+96>>2]|0,(za|0)!=0):0)q=za;else q=c[w+60+(c[da>>2]<<3)+4>>2]|0;ob=ca(t+G);t=(q|0)==3?ob:t;if(o){K=w+400+(c[fa>>2]<<2)|0;g[K>>2]=ca(t+ca(g[K>>2]))}if(Ya?(Aa=c[w+104>>2]|0,(Aa|0)!=0):0)q=Aa;else q=c[w+60+(c[ga>>2]<<3)+4>>2]|0;F=ca(t+G);F=(q|0)==3?F:t;if(S){_:do if(Ya){q=c[w+96>>2]|0;if(!q){Za=648;break}h=w+92|0;if((q|0)==3){t=ca(0.0);break}switch(q|0){case 2:{t=ca(ca($a*ca(g[h>>2]))/ca(100.0));break _}case 1:{t=ca(g[h>>2]);break _}default:{t=ca(s);break _}}}else Za=648;while(0);$:do if((Za|0)==648){Za=0;q=c[da>>2]|0;aa:do if(!(c[w+60+(q<<3)+4>>2]|0)){do if(ua){if(!(c[w+120>>2]|0))break;q=w+116|0;break aa}while(0);ba:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[w+112>>2]|0))break ba;q=w+108|0;break aa}default:{}}while(0);q=(c[w+128>>2]|0)==0?1604:w+124|0}else q=w+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){t=ca(0.0);break}switch(h|0){case 2:{t=ca(ca($a*ca(g[q>>2]))/ca(100.0));break $}case 1:{t=ca(g[q>>2]);break $}default:{t=ca(s);break $}}}while(0);t=ca(H+ca(t+ca(je(w,cb,$a))));D=Ra;t=ca(F+ca(ca(g[w+504>>2])+t));break S}E=ca(g[w+904+(c[V>>2]<<2)>>2]);ca:do if(Ya){q=c[w+96>>2]|0;if(!q){Za=668;break}h=w+92|0;if((q|0)==3){t=ca(0.0);break}switch(q|0){case 2:{t=ca(ca($a*ca(g[h>>2]))/ca(100.0));break ca}case 1:{t=ca(g[h>>2]);break ca}default:{t=ca(s);break ca}}}else Za=668;while(0);da:do if((Za|0)==668){Za=0;q=c[da>>2]|0;ea:do if(!(c[w+60+(q<<3)+4>>2]|0)){do if(ua){if(!(c[w+120>>2]|0))break;q=w+116|0;break ea}while(0);fa:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[w+112>>2]|0))break fa;q=w+108|0;break ea}default:{}}while(0);q=(c[w+128>>2]|0)==0?1604:w+124|0}else q=w+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){t=ca(0.0);break}switch(h|0){case 2:{t=ca(ca($a*ca(g[q>>2]))/ca(100.0));break da}case 1:{t=ca(g[q>>2]);break da}default:{t=ca(s);break da}}}while(0);t=ca(F+ca(H+ca(ca(E+t)+ca(je(w,cb,$a)))));F=ca(g[w+904+(c[aa>>2]<<2)>>2]);ga:do if(X){q=c[w+96>>2]|0;if(!q){Za=687;break}h=w+92|0;if((q|0)==3){E=ca(0.0);break}switch(q|0){case 2:{E=ca(ca($a*ca(g[h>>2]))/ca(100.0));break ga}case 1:{E=ca(g[h>>2]);break ga}default:{E=ca(s);break ga}}}else Za=687;while(0);ha:do if((Za|0)==687){Za=0;q=c[Y>>2]|0;ia:do if(!(c[w+60+(q<<3)+4>>2]|0)){do if(Z){if(!(c[w+120>>2]|0))break;q=w+116|0;break ia}while(0);ja:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[w+112>>2]|0))break ja;q=w+108|0;break ia}default:{}}while(0);q=(c[w+128>>2]|0)==0?1604:w+124|0}else q=w+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){E=ca(0.0);break}switch(h|0){case 2:{E=ca(ca($a*ca(g[q>>2]))/ca(100.0));break ha}case 1:{E=ca(g[q>>2]);break ha}default:{E=ca(s);break ha}}}while(0);D=ca(Wn(D,ca(ca(F+E)+ca(je(w,db,$a)))));break S}default:{}}while(0);if(!o)break;ob=ca(I+ca(se(b,cb)));K=w+400+(c[fa>>2]<<2)|0;g[K>>2]=ca(ob+ca(g[K>>2]))}while(0);x=x+1|0}while((x|0)!=(l|0))}else D=ca(0.0);H=ca(ya+t);if(W){nb=ca(we(b,db,ca(Xa+D),Wa));ob=ca(ue(b,db,m));ob=ca(ob+ca(se(b,db)));G=ca(ve(b,db,m));G=ca(ca(Wn(nb,ca(ob+ca(G+ca(te(b,db))))))-Xa)}else G=Ra;nb=ca(we(b,db,ca(Xa+(oa?Ra:D)),Wa));ob=ca(ue(b,db,m));ob=ca(ob+ca(se(b,db)));F=ca(ve(b,db,m));F=ca(ca(Wn(nb,ca(ob+ca(F+ca(te(b,db))))))-Xa);if(y&o){y=L;do{x=uc(c[eb>>2]|0,y)|0;ka:do if((c[x+36>>2]|0)!=1){if((c[x+24>>2]|0)==1){if(X){do if(!(c[x+168>>2]|0))if(!(c[x+184>>2]|0)){q=(c[x+200>>2]|0)==0?1668:x+196|0;break}else{q=x+180|0;break}else q=x+164|0;while(0);if(!(c[q+4>>2]|0))Za=716}else Za=716;do if((Za|0)==716){Za=0;h=c[Y>>2]|0;la:do if(!(c[x+132+(h<<3)+4>>2]|0)){do if(Z){if(!(c[x+192>>2]|0))break;q=x+188|0;break la}while(0);ma:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[x+184>>2]|0))break ma;q=x+180|0;break la}default:{}}while(0);q=(c[x+200>>2]|0)==0?1668:x+196|0}else q=x+132+(h<<3)|0;while(0);if(c[q+4>>2]|0)break;D=ca(se(b,db));na:do if(X){w=c[x+96>>2]|0;if(!w){Za=752;break}q=x+92|0;if((w|0)==3){t=ca(0.0);break}switch(w|0){case 2:{t=ca(ca($a*ca(g[q>>2]))/ca(100.0));break na}case 1:{t=ca(g[q>>2]);break na}default:{t=ca(s);break na}}}else Za=752;while(0);oa:do if((Za|0)==752){Za=0;pa:do if(!(c[x+60+(h<<3)+4>>2]|0)){do if(Z){if(!(c[x+120>>2]|0))break;q=x+116|0;break pa}while(0);qa:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[x+112>>2]|0))break qa;q=x+108|0;break pa}default:{}}while(0);q=(c[x+128>>2]|0)==0?1604:x+124|0}else q=x+60+(h<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){t=ca(0.0);break}switch(h|0){case 2:{t=ca(ca($a*ca(g[q>>2]))/ca(100.0));break oa}case 1:{t=ca(g[q>>2]);break oa}default:{t=ca(s);break oa}}}while(0);ob=ca(D+t);g[x+400+(c[_>>2]<<2)>>2]=ob;break ka}while(0);D=ca(qe(x,db,Ra));D=ca(D+ca(se(b,db)));ra:do if(X){q=c[x+96>>2]|0;if(!q){Za=732;break}h=x+92|0;if((q|0)==3){t=ca(0.0);break}switch(q|0){case 2:{t=ca(ca($a*ca(g[h>>2]))/ca(100.0));break ra}case 1:{t=ca(g[h>>2]);break ra}default:{t=ca(s);break ra}}}else Za=732;while(0);sa:do if((Za|0)==732){Za=0;q=c[Y>>2]|0;ta:do if(!(c[x+60+(q<<3)+4>>2]|0)){do if(Z){if(!(c[x+120>>2]|0))break;q=x+116|0;break ta}while(0);ua:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[x+112>>2]|0))break ua;q=x+108|0;break ta}default:{}}while(0);q=(c[x+128>>2]|0)==0?1604:x+124|0}else q=x+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){t=ca(0.0);break}switch(h|0){case 2:{t=ca(ca($a*ca(g[q>>2]))/ca(100.0));break sa}case 1:{t=ca(g[q>>2]);break sa}default:{t=ca(s);break sa}}}while(0);ob=ca(D+t);g[x+400+(c[_>>2]<<2)>>2]=ob;break}q=c[x+20>>2]|0;if(!q)q=c[$>>2]|0;va:do switch(q|0){case 5:{q=(c[bb>>2]|0)>>>0<2?1:5;Za=822;break}case 4:{if(X?(Ba=c[x+96>>2]|0,(Ba|0)!=0):0)q=Ba;else q=c[x+60+(c[Y>>2]<<3)+4>>2]|0;if((q|0)==3){q=4;Za=822;break va}if(X?(Ca=c[x+104>>2]|0,(Ca|0)!=0):0)q=Ca;else q=c[x+60+(c[ba>>2]<<3)+4>>2]|0;if((q|0)==3){q=4;Za=822;break va}q=c[x+976+(c[aa>>2]<<2)>>2]|0;switch(c[q+4>>2]|0){case 0:case 3:break;case 1:{if(!(ca(g[q>>2])<ca(0.0))){t=r;break va}break}case 2:{if(!(ca(g[q>>2])<ca(0.0)|qa)){t=r;break va}break}default:{t=r;break va}}K=c[x+904+(c[V>>2]<<2)>>2]|0;c[Oa>>2]=K;L=c[x+396>>2]|0;E=(c[k>>2]=K,ca(g[k>>2]));D=(c[k>>2]=L,ca(g[k>>2]));if((L&2147483647)>>>0>2139095040)t=F;else{wa:do if(X){q=c[x+96>>2]|0;if(!q){Za=788;break}h=x+92|0;if((q|0)==3){t=ca(0.0);break}switch(q|0){case 2:{t=ca(ca($a*ca(g[h>>2]))/ca(100.0));break wa}case 1:{t=ca(g[h>>2]);break wa}default:{t=ca(s);break wa}}}else Za=788;while(0);xa:do if((Za|0)==788){Za=0;q=c[Y>>2]|0;ya:do if(!(c[x+60+(q<<3)+4>>2]|0)){do if(Z){if(!(c[x+120>>2]|0))break;q=x+116|0;break ya}while(0);za:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[x+112>>2]|0))break za;q=x+108|0;break ya}default:{}}while(0);q=(c[x+128>>2]|0)==0?1604:x+124|0}else q=x+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){t=ca(0.0);break}switch(h|0){case 2:{t=ca(ca($a*ca(g[q>>2]))/ca(100.0));break xa}case 1:{t=ca(g[q>>2]);break xa}default:{t=ca(s);break xa}}}while(0);nb=ca(t+ca(je(x,db,$a)));ob=ca(E/D);t=ca(E*D);t=ca(nb+(Ya?ob:t))}g[Ka>>2]=t;Aa:do if(Ya){q=c[x+96>>2]|0;if(!q){Za=808;break}h=x+92|0;if((q|0)==3){t=ca(0.0);break}switch(q|0){case 2:{t=ca(ca($a*ca(g[h>>2]))/ca(100.0));break Aa}case 1:{t=ca(g[h>>2]);break Aa}default:{t=ca(s);break Aa}}}else Za=808;while(0);Ba:do if((Za|0)==808){Za=0;q=c[da>>2]|0;Ca:do if(!(c[x+60+(q<<3)+4>>2]|0)){do if(ua){if(!(c[x+120>>2]|0))break;q=x+116|0;break Ca}while(0);Da:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[x+112>>2]|0))break Da;q=x+108|0;break Ca}default:{}}while(0);q=(c[x+128>>2]|0)==0?1604:x+124|0}else q=x+60+(q<<3)|0;while(0);h=c[q+4>>2]|0;if((h|0)==3){t=ca(0.0);break}switch(h|0){case 2:{t=ca(ca($a*ca(g[q>>2]))/ca(100.0));break Ba}case 1:{t=ca(g[q>>2]);break Ba}default:{t=ca(s);break Ba}}}while(0);g[Oa>>2]=ca(E+ca(t+ca(je(x,cb,$a))));c[Ma>>2]=1;c[Ia>>2]=1;ye(x,cb,e,$a,Ma,Oa);ye(x,db,Ra,$a,Ia,Ka);t=ca(g[Oa>>2]);nb=ca(g[Ka>>2]);ob=Ya?t:nb;t=Ya?nb:t;ce(x,ob,t,gb,((g[k>>2]=ob,c[k>>2]|0)&2147483647)>>>0<2139095041&1,((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0<2139095041&1,$a,_a,1,6603,p)|0;t=r;break}default:Za=822}while(0);Ea:do if((Za|0)==822){Za=0;D=ca(g[x+904+(c[aa>>2]<<2)>>2]);Fa:do if(X){h=c[x+96>>2]|0;if(!h){Za=828;break}w=x+92|0;if((h|0)==3){t=ca(0.0);break}switch(h|0){case 2:{t=ca(ca($a*ca(g[w>>2]))/ca(100.0));break Fa}case 1:{t=ca(g[w>>2]);break Fa}default:{t=ca(s);break Fa}}}else Za=828;while(0);Ga:do if((Za|0)==828){Za=0;h=c[Y>>2]|0;Ha:do if(!(c[x+60+(h<<3)+4>>2]|0)){do if(Z){if(!(c[x+120>>2]|0))break;h=x+116|0;break Ha}while(0);Ia:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[x+112>>2]|0))break Ia;h=x+108|0;break Ha}default:{}}while(0);h=(c[x+128>>2]|0)==0?1604:x+124|0}else h=x+60+(h<<3)|0;while(0);w=c[h+4>>2]|0;if((w|0)==3){t=ca(0.0);break}switch(w|0){case 2:{t=ca(ca($a*ca(g[h>>2]))/ca(100.0));break Ga}case 1:{t=ca(g[h>>2]);break Ga}default:{t=ca(s);break Ga}}}while(0);t=ca(D+t);t=ca(G-ca(t+ca(je(x,db,$a))));if(X?(Da=c[x+96>>2]|0,(Da|0)!=0):0)h=Da;else h=c[x+60+(c[Y>>2]<<3)+4>>2]|0;do if((h|0)==3){if(X?(Ea=c[x+104>>2]|0,(Ea|0)!=0):0)h=Ea;else h=c[x+60+(c[ba>>2]<<3)+4>>2]|0;if((h|0)!=3)break;t=ca(r+ca(Wn(ca(0.0),ca(t*ca(.5)))));break Ea}while(0);if(X?(Fa=c[x+104>>2]|0,(Fa|0)!=0):0)h=Fa;else h=c[x+60+(c[ba>>2]<<3)+4>>2]|0;if((h|0)==3){t=r;break}if(X?(Ga=c[x+96>>2]|0,(Ga|0)!=0):0)h=Ga;else h=c[x+60+(c[Y>>2]<<3)+4>>2]|0;if((h|0)==3){t=ca(r+ca(Wn(ca(0.0),t)));break}switch(q|0){case 1:{t=r;break Ea}case 2:{t=ca(r+ca(t*ca(.5)));break Ea}default:{t=ca(r+t);break Ea}}}while(0);ob=ca(u+t);L=x+400+(c[_>>2]<<2)|0;g[L>>2]=ca(ob+ca(g[L>>2]))}while(0);y=y+1|0}while((y|0)!=(l|0))}u=ca(u+F);t=ca(Wn(ja,H));q=v+1|0;if(l>>>0<fb>>>0){J=e;L=l;v=q;ja=t}else{N=u;J=t;P=q;I=e;break}}Ja:do if(o){w=P>>>0>1;Ka:do if(!w){if((c[bb>>2]|0)>>>0<2)break Ja;if((c[b+16>>2]|0)==5)break;q=qc(c[eb>>2]|0)|0;if(!q)break Ja;else h=0;while(1){Oa=uc(c[eb>>2]|0,h)|0;if((c[Oa+24>>2]|0)==0?(c[Oa+20>>2]|0)==5:0)break Ka;h=h+1|0;if(h>>>0>=q>>>0)break Ja}}while(0);q=(g[k>>2]=Ra,c[k>>2]|0)&2147483647;if(q>>>0>2139095040)break;u=ca(Ra-N);La:do switch(c[b+12>>2]|0){case 3:{t=ca(0.0);r=ca(r+u);Za=885;break}case 2:{t=ca(0.0);r=ca(r+ca(u*ca(.5)));Za=885;break}case 4:{if(!(Ra>N)){t=ca(0.0);Za=885;break La}t=ca(u/ca(P>>>0));Za=885;break}case 7:{if(!(Ra>N)){t=ca(0.0);r=ca(r+ca(u*ca(.5)));Za=885;break La}r=ca(r+ca(u/ca(P<<1>>>0)));if(!w){t=ca(0.0);Za=885;break La}t=ca(u/ca(P>>>0));break}case 6:{if(!(Ra>N&w)){t=ca(0.0);Za=885;break La}t=ca(u/ca(v>>>0));Za=885;break}default:{t=ca(0.0);Za=885}}while(0);if((Za|0)==885)if(!P)break;B=b+16|0;C=(db&-2|0)==2;K=1636+(db<<2)|0;L=db>>>0<2;l=1636+(db<<2)|0;M=1684+(db<<2)|0;A=q>>>0<2139095041;y=0;z=0;while(1){Ma:do if(y>>>0<fb>>>0){q=y;D=ca(0.0);u=ca(0.0);H=ca(0.0);while(1){x=uc(c[eb>>2]|0,q)|0;do if((c[x+36>>2]|0)==1)E=H;else{if(c[x+24>>2]|0){E=H;break}if((c[x+936>>2]|0)!=(z|0))break Ma;F=ca(g[x+904+(c[M>>2]<<2)>>2]);if(F>=ca(0.0)&((g[k>>2]=F,c[k>>2]|0)&2147483647)>>>0<2139095041){Na:do if(C){h=c[x+96>>2]|0;if(!h){Za=898;break}v=x+92|0;if((h|0)==3){E=ca(0.0);break}switch(h|0){case 2:{E=ca(ca($a*ca(g[v>>2]))/ca(100.0));break Na}case 1:{E=ca(g[v>>2]);break Na}default:{E=ca(s);break Na}}}else Za=898;while(0);Oa:do if((Za|0)==898){Za=0;h=c[K>>2]|0;Pa:do if(!(c[x+60+(h<<3)+4>>2]|0)){do if(L){if(!(c[x+120>>2]|0))break;h=x+116|0;break Pa}while(0);Qa:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[x+112>>2]|0))break Qa;h=x+108|0;break Pa}default:{}}while(0);h=(c[x+128>>2]|0)==0?1604:x+124|0}else h=x+60+(h<<3)|0;while(0);v=c[h+4>>2]|0;if((v|0)==3){E=ca(0.0);break}switch(v|0){case 2:{E=ca(ca($a*ca(g[h>>2]))/ca(100.0));break Oa}case 1:{E=ca(g[h>>2]);break Oa}default:{E=ca(s);break Oa}}}while(0);D=ca(Wn(D,ca(F+ca(E+ca(je(x,db,$a))))))}h=c[x+20>>2]|0;if(!h)h=c[B>>2]|0;if((h|0)!=5){E=H;break}if((c[bb>>2]|0)>>>0<2){E=H;break}F=ca(ze(x));w=(c[x+72>>2]|0)==0;do if(w)if(!(c[x+120>>2]|0)){h=(c[x+128>>2]|0)==0?1604:x+124|0;break}else{h=x+116|0;break}else h=x+68|0;while(0);v=c[h+4>>2]|0;Ra:do if((v|0)==3)E=ca(0.0);else switch(v|0){case 2:{E=ca(ca($a*ca(g[h>>2]))/ca(100.0));break Ra}case 1:{E=ca(g[h>>2]);break Ra}default:{E=ca(s);break Ra}}while(0);F=ca(F+E);G=ca(g[x+908>>2]);do if(w)if(!(c[x+120>>2]|0)){h=(c[x+128>>2]|0)==0?1604:x+124|0;break}else{h=x+116|0;break}else h=x+68|0;while(0);v=c[h+4>>2]|0;Sa:do if((v|0)==3)E=ca(0.0);else switch(v|0){case 2:{E=ca(ca($a*ca(g[h>>2]))/ca(100.0));break Sa}case 1:{E=ca(g[h>>2]);break Sa}default:{E=ca(s);break Sa}}while(0);E=ca(ca(G+ca(E+ca(je(x,0,$a))))-F);u=ca(Wn(u,F));E=ca(Wn(H,E));D=ca(Wn(D,ca(u+E)))}while(0);q=q+1|0;if(q>>>0<fb>>>0)H=E;else break}}else{q=y;D=ca(0.0);u=ca(0.0)}while(0);H=ca(t+D);if(y>>>0<q>>>0){F=ca(r+u);G=ca(r+H);do{w=uc(c[eb>>2]|0,y)|0;Ta:do if((c[w+36>>2]|0)!=1){if(c[w+24>>2]|0)break;h=c[w+20>>2]|0;if(!h)h=c[B>>2]|0;Ua:do switch(h|0){case 5:{if((c[bb>>2]|0)>>>0<2)break Ua;g[w+404>>2]=ca(ca(F-ca(ze(w)))+ca(qe(w,0,Ra)));break Ta}case 1:break;case 3:{ob=ca(ca(G-ca(je(w,db,$a)))-ca(g[w+904+(c[M>>2]<<2)>>2]));g[w+400+(c[l>>2]<<2)>>2]=ob;break Ta}case 2:{ob=ca(r+ca(ca(H-ca(g[w+904+(c[M>>2]<<2)>>2]))*ca(.5)));g[w+400+(c[l>>2]<<2)>>2]=ob;break Ta}case 4:{Va:do if(C){h=c[w+96>>2]|0;if(!h){Za=972;break}v=w+92|0;if((h|0)==3){u=ca(0.0);break}switch(h|0){case 2:{u=ca(ca($a*ca(g[v>>2]))/ca(100.0));break Va}case 1:{u=ca(g[v>>2]);break Va}default:{u=ca(s);break Va}}}else Za=972;while(0);Wa:do if((Za|0)==972){Za=0;h=c[K>>2]|0;Xa:do if(!(c[w+60+(h<<3)+4>>2]|0)){do if(L){if(!(c[w+120>>2]|0))break;h=w+116|0;break Xa}while(0);Ya:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[w+112>>2]|0))break Ya;h=w+108|0;break Xa}default:{}}while(0);h=(c[w+128>>2]|0)==0?1604:w+124|0}else h=w+60+(h<<3)|0;while(0);v=c[h+4>>2]|0;if((v|0)==3){u=ca(0.0);break}switch(v|0){case 2:{u=ca(ca($a*ca(g[h>>2]))/ca(100.0));break Wa}case 1:{u=ca(g[h>>2]);break Wa}default:{u=ca(s);break Wa}}}while(0);ob=ca(r+u);g[w+400+(c[l>>2]<<2)>>2]=ob;h=c[w+976+(c[M>>2]<<2)>>2]|0;switch(c[h+4>>2]|0){case 0:case 3:break;case 1:{if(!(ca(g[h>>2])<ca(0.0)))break Ta;break}case 2:{if(A&!(ca(g[h>>2])<ca(0.0)))break Ta;break}default:break Ta}if(Ya){D=ca(g[w+904>>2]);Za:do if(C){h=c[w+96>>2]|0;if(!h){Za=995;break}v=w+92|0;if((h|0)==3){u=ca(0.0);break}switch(h|0){case 2:{u=ca(ca($a*ca(g[v>>2]))/ca(100.0));break Za}case 1:{u=ca(g[v>>2]);break Za}default:{u=ca(s);break Za}}}else Za=995;while(0);_a:do if((Za|0)==995){Za=0;h=c[K>>2]|0;$a:do if(!(c[w+60+(h<<3)+4>>2]|0)){do if(L){if(!(c[w+120>>2]|0))break;h=w+116|0;break $a}while(0);ab:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[w+112>>2]|0))break ab;h=w+108|0;break $a}default:{}}while(0);h=(c[w+128>>2]|0)==0?1604:w+124|0}else h=w+60+(h<<3)|0;while(0);v=c[h+4>>2]|0;if((v|0)==3){u=ca(0.0);break}switch(v|0){case 2:{u=ca(ca($a*ca(g[h>>2]))/ca(100.0));break _a}case 1:{u=ca(g[h>>2]);break _a}default:{u=ca(s);break _a}}}while(0);E=ca(D+ca(u+ca(je(w,db,$a))));u=D;D=H}else{D=ca(g[w+908>>2]);bb:do if(C){h=c[w+96>>2]|0;if(!h){Za=1015;break}v=w+92|0;if((h|0)==3){u=ca(0.0);break}switch(h|0){case 2:{u=ca(ca($a*ca(g[v>>2]))/ca(100.0));break bb}case 1:{u=ca(g[v>>2]);break bb}default:{u=ca(s);break bb}}}else Za=1015;while(0);cb:do if((Za|0)==1015){Za=0;h=c[K>>2]|0;db:do if(!(c[w+60+(h<<3)+4>>2]|0)){do if(L){if(!(c[w+120>>2]|0))break;h=w+116|0;break db}while(0);eb:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[w+112>>2]|0))break eb;h=w+108|0;break db}default:{}}while(0);h=(c[w+128>>2]|0)==0?1604:w+124|0}else h=w+60+(h<<3)|0;while(0);v=c[h+4>>2]|0;if((v|0)==3){u=ca(0.0);break}switch(v|0){case 2:{u=ca(ca($a*ca(g[h>>2]))/ca(100.0));break cb}case 1:{u=ca(g[h>>2]);break cb}default:{u=ca(s);break cb}}}while(0);D=ca(D+ca(u+ca(je(w,db,$a))));E=H;u=ca(g[w+904>>2])}if(((g[k>>2]=E,c[k>>2]|0)&2147483647)>>>0>2139095040){if(((g[k>>2]=u,c[k>>2]|0)&2147483647)>>>0>2139095040)Za=1032}else if(ca(O(ca(E-u)))<ca(.0000999999974))Za=1032;do if((Za|0)==1032){Za=0;u=ca(g[w+908>>2]);if(((g[k>>2]=D,c[k>>2]|0)&2147483647)>>>0>2139095040)if(((g[k>>2]=u,c[k>>2]|0)&2147483647)>>>0>2139095040)break Ta;else break;else if(ca(O(ca(D-u)))<ca(.0000999999974))break Ta;else break}while(0);ce(w,E,D,gb,1,1,$a,_a,1,6611,p)|0;break Ta}default:break Ta}while(0);fb:do if(C){h=c[w+96>>2]|0;if(!h){Za=950;break}v=w+92|0;if((h|0)==3){u=ca(0.0);break}switch(h|0){case 2:{u=ca(ca($a*ca(g[v>>2]))/ca(100.0));break fb}case 1:{u=ca(g[v>>2]);break fb}default:{u=ca(s);break fb}}}else Za=950;while(0);gb:do if((Za|0)==950){Za=0;h=c[K>>2]|0;hb:do if(!(c[w+60+(h<<3)+4>>2]|0)){do if(L){if(!(c[w+120>>2]|0))break;h=w+116|0;break hb}while(0);ib:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[w+112>>2]|0))break ib;h=w+108|0;break hb}default:{}}while(0);h=(c[w+128>>2]|0)==0?1604:w+124|0}else h=w+60+(h<<3)|0;while(0);v=c[h+4>>2]|0;if((v|0)==3){u=ca(0.0);break}switch(v|0){case 2:{u=ca(ca($a*ca(g[h>>2]))/ca(100.0));break gb}case 1:{u=ca(g[h>>2]);break gb}default:{u=ca(s);break gb}}}while(0);ob=ca(r+u);g[w+400+(c[l>>2]<<2)>>2]=ob}while(0);y=y+1|0}while((y|0)!=(q|0))}r=ca(r+H);z=z+1|0;if((z|0)==(P|0))break;else y=q}}while(0);ob=ca(we(b,2,Qa,m));r=ca(ue(b,2,m));r=ca(r+ca(se(b,2)));u=ca(ve(b,2,m));Y=b+904|0;g[Y>>2]=ca(Wn(ob,ca(r+ca(u+ca(te(b,2))))));u=ca(we(b,0,Pa,n));r=ca(ue(b,0,m));do if(!(c[jb>>2]|0))if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+284|0;while(0);r=ca(r+ca(Wn(ca(g[q>>2]),ca(0.0))));t=ca(ve(b,0,m));do if(!(c[kb>>2]|0))if(!(c[b+336>>2]|0)){q=(c[b+344>>2]|0)==0?1604:b+340|0;break}else{q=b+332|0;break}else q=b+300|0;while(0);X=b+908|0;g[X>>2]=ca(Wn(u,ca(r+ca(t+ca(Wn(ca(g[q>>2]),ca(0.0)))))));do if(!ea)Za=1051;else{q=c[b+32>>2]|0;h=(ea|0)==2;if(h&(q|0)!=2){Za=1051;break}if(!(h&(q|0)==2))break;ob=ca(Ta+I);ob=ca(Wn(ca(Xn(ob,ca(we(b,cb,J,Sa)))),Ta));g[b+904+(c[1684+(cb<<2)>>2]<<2)>>2]=ob}while(0);if((Za|0)==1051){mb=ca(we(b,cb,J,Sa));nb=ca(ue(b,cb,m));nb=ca(nb+ca(se(b,cb)));ob=ca(ve(b,cb,m));ob=ca(Wn(mb,ca(nb+ca(ob+ca(te(b,cb))))));g[b+904+(c[1684+(cb<<2)>>2]<<2)>>2]=ob}do if(!Ua)Za=1056;else{h=c[b+32>>2]|0;q=(Ua|0)==2;if(q&(h|0)!=2){Za=1056;break}if(!(q&(h|0)==2))break;ob=ca(Xa+Ra);ob=ca(Wn(ca(Xn(ob,ca(we(b,db,ca(Xa+N),Wa)))),Xa));g[b+904+(c[1684+(db<<2)>>2]<<2)>>2]=ob}while(0);if((Za|0)==1056){mb=ca(we(b,db,ca(Xa+N),Wa));nb=ca(ue(b,db,m));nb=ca(nb+ca(se(b,db)));ob=ca(ve(b,db,m));ob=ca(Wn(mb,ca(nb+ca(ob+ca(te(b,db))))));g[b+904+(c[1684+(db<<2)>>2]<<2)>>2]=ob}if(!o){i=lb;return}if((c[Va>>2]|0)==2){q=1684+(db<<2)|0;h=1636+(db<<2)|0;w=0;do{v=uc(c[eb>>2]|0,w)|0;if(!(c[v+24>>2]|0)){Va=c[q>>2]|0;ob=ca(g[b+904+(Va<<2)>>2]);o=v+400+(c[h>>2]<<2)|0;ob=ca(ob-ca(g[o>>2]));g[o>>2]=ca(ob-ca(g[v+904+(Va<<2)>>2]))}w=w+1|0}while((w|0)!=(fb|0))}jb:do if(ra){K=((Ya?ea:j)|0)!=0;L=$a>ca(0.0);l=b+16|0;M=b+336|0;P=b+344|0;R=b+340|0;S=b+332|0;T=b+300|0;U=b+284|0;W=(g[k>>2]=_a,c[k>>2]|0)&2147483647;W=W>>>0>2139095040;V=((g[k>>2]=$a,c[k>>2]|0)&2147483647)>>>0>2139095040;C=ra;while(1){q=c[bb>>2]|0;kb:do if(ib){switch(q|0){case 2:{q=3;B=0;A=0;break kb}case 3:break;default:{Za=1070;break kb}}q=2;B=0;A=0}else Za=1070;while(0);if((Za|0)==1070){A=q>>>0<2;B=A?hb:0}z=(q&-2|0)==2;x=C+96|0;h=c[x>>2]|0;lb:do if(!h){do if(!(c[C+64>>2]|0))if(!(c[C+112>>2]|0)){h=(c[C+128>>2]|0)==0?1604:C+124|0;break}else{h=C+108|0;break}else h=C+60|0;while(0);v=c[h+4>>2]|0;if((v|0)==3){r=ca(0.0);break}switch(v|0){case 2:{r=ca(ca($a*ca(g[h>>2]))/ca(100.0));break lb}case 1:{r=ca(g[h>>2]);break lb}default:{r=ca(s);break lb}}}else{v=C+92|0;if((h|0)==3){r=ca(0.0);break}switch(h|0){case 2:{r=ca(ca($a*ca(g[v>>2]))/ca(100.0));break lb}case 1:{r=ca(g[v>>2]);break lb}default:{r=ca(s);break lb}}}while(0);F=ca(r+ca(je(C,2,$a)));y=C+72|0;do if(!(c[y>>2]|0))if(!(c[C+120>>2]|0)){h=(c[C+128>>2]|0)==0?1604:C+124|0;break}else{h=C+116|0;break}else h=C+68|0;while(0);v=c[h+4>>2]|0;mb:do if((v|0)==3)r=ca(0.0);else switch(v|0){case 2:{r=ca(ca($a*ca(g[h>>2]))/ca(100.0));break mb}case 1:{r=ca(g[h>>2]);break mb}default:{r=ca(s);break mb}}while(0);E=ca(r+ca(je(C,0,$a)));h=c[C+976>>2]|0;nb:do switch(c[h+4>>2]|0){case 0:case 3:{Za=1100;break}case 1:{if(ca(g[h>>2])<ca(0.0)){Za=1100;break nb}r=ca(g[h>>2]);Za=1099;break}case 2:{if(ca(g[h>>2])<ca(0.0)|V){Za=1100;break nb}r=ca(ca($a*ca(g[h>>2]))/ca(100.0));Za=1099;break}default:{r=ca(s);Za=1099}}while(0);do if((Za|0)==1099)r=ca(F+r);else if((Za|0)==1100){do if(!(c[C+168>>2]|0))if(!(c[C+184>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+180|0;break}else h=C+164|0;while(0);if(!(c[h+4>>2]|0)){do if(!(c[C+136>>2]|0))if(!(c[C+184>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+180|0;break}else h=C+132|0;while(0);if(!(c[h+4>>2]|0)){r=ca(s);break}}do if(!(c[C+176>>2]|0))if(!(c[C+184>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+180|0;break}else h=C+172|0;while(0);if(!(c[h+4>>2]|0)){do if(!(c[C+152>>2]|0))if(!(c[C+184>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+180|0;break}else h=C+148|0;while(0);if(!(c[h+4>>2]|0)){r=ca(s);break}}nb=ca(g[Y>>2]);ob=ca(se(b,2));ob=ca(nb-ca(ob+ca(te(b,2))));nb=ca(qe(C,2,$a));nb=ca(we(C,2,ca(ob-ca(nb+ca(re(C,2,$a)))),$a));ob=ca(ue(C,2,$a));ob=ca(ob+ca(se(C,2)));r=ca(ve(C,2,$a));r=ca(Wn(nb,ca(ob+ca(r+ca(te(C,2))))))}while(0);h=c[C+980>>2]|0;ob:do switch(c[h+4>>2]|0){case 0:case 3:{Za=1131;break}case 1:{if(ca(g[h>>2])<ca(0.0)){Za=1131;break ob}t=ca(g[h>>2]);Za=1130;break}case 2:{if(ca(g[h>>2])<ca(0.0)|W){Za=1131;break ob}t=ca(ca(_a*ca(g[h>>2]))/ca(100.0));Za=1130;break}default:{t=ca(s);Za=1130}}while(0);do if((Za|0)==1130)t=ca(E+t);else if((Za|0)==1131){do if(!(c[C+144>>2]|0))if(!(c[C+192>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+188|0;break}else h=C+140|0;while(0);if(!(c[h+4>>2]|0)){t=ca(s);break}do if(!(c[C+160>>2]|0))if(!(c[C+192>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+188|0;break}else h=C+156|0;while(0);if(!(c[h+4>>2]|0)){t=ca(s);break}u=ca(g[X>>2]);do if(!(c[jb>>2]|0)){if(c[M>>2]|0){h=S;break}h=(c[P>>2]|0)==0?1604:R}else h=U;while(0);t=ca(Wn(ca(g[h>>2]),ca(0.0)));do if(!(c[kb>>2]|0)){if(c[M>>2]|0){h=S;break}h=(c[P>>2]|0)==0?1604:R}else h=T;while(0);t=ca(u-ca(t+ca(Wn(ca(g[h>>2]),ca(0.0)))));D=ca(qe(C,0,_a));D=ca(we(C,0,ca(t-ca(D+ca(re(C,0,_a)))),_a));t=ca(ue(C,0,$a));do if(!(c[C+288>>2]|0))if(!(c[C+336>>2]|0)){h=(c[C+344>>2]|0)==0?1604:C+340|0;break}else{h=C+332|0;break}else h=C+284|0;while(0);t=ca(t+ca(Wn(ca(g[h>>2]),ca(0.0))));u=ca(ve(C,0,$a));do if(!(c[C+304>>2]|0))if(!(c[C+336>>2]|0)){h=(c[C+344>>2]|0)==0?1604:C+340|0;break}else{h=C+332|0;break}else h=C+300|0;while(0);t=ca(Wn(D,ca(t+ca(u+ca(Wn(ca(g[h>>2]),ca(0.0)))))))}while(0);h=((g[k>>2]=r,c[k>>2]|0)&2147483647)>>>0>2139095040;v=((g[k>>2]=t,c[k>>2]|0)&2147483647)>>>0>2139095040;do if(h^v){u=ca(g[C+396>>2]);if(((g[k>>2]=u,c[k>>2]|0)&2147483647)>>>0>2139095040)break;if(!h){if(!v)break;nb=ca(ca(r-F)/u);ob=ca(ue(C,2,$a));ob=ca(ob+ca(se(C,2)));t=ca(ve(C,2,$a));t=ca(E+ca(Wn(nb,ca(ob+ca(t+ca(te(C,2)))))));break}D=ca(ca(t-E)*u);r=ca(ue(C,0,$a));do if(!(c[C+288>>2]|0))if(!(c[C+336>>2]|0)){h=(c[C+344>>2]|0)==0?1604:C+340|0;break}else{h=C+332|0;break}else h=C+284|0;while(0);r=ca(r+ca(Wn(ca(g[h>>2]),ca(0.0))));u=ca(ve(C,0,$a));do if(!(c[C+304>>2]|0))if(!(c[C+336>>2]|0)){h=(c[C+344>>2]|0)==0?1604:C+340|0;break}else{h=C+332|0;break}else h=C+300|0;while(0);r=ca(F+ca(Wn(D,ca(r+ca(u+ca(Wn(ca(g[h>>2]),ca(0.0))))))))}while(0);v=((g[k>>2]=r,c[k>>2]|0)&2147483647)>>>0>2139095040;w=(g[k>>2]=t,c[k>>2]|0)&2147483647;if(v|w>>>0>2139095040){h=v&1^1;if(!z){j=L&(K&v);r=j?$a:r;h=j?2:h}ce(C,r,t,gb,h,w>>>0<2139095041&1,r,t,0,6629,p)|0;t=ca(g[C+904>>2]);h=c[x>>2]|0;pb:do if(!h){do if(!(c[C+64>>2]|0))if(!(c[C+112>>2]|0)){h=(c[C+128>>2]|0)==0?1604:C+124|0;break}else{h=C+108|0;break}else h=C+60|0;while(0);v=c[h+4>>2]|0;if((v|0)==3){r=ca(0.0);break}switch(v|0){case 2:{r=ca(ca($a*ca(g[h>>2]))/ca(100.0));break pb}case 1:{r=ca(g[h>>2]);break pb}default:{r=ca(s);break pb}}}else{v=C+92|0;if((h|0)==3){r=ca(0.0);break}switch(h|0){case 2:{r=ca(ca($a*ca(g[v>>2]))/ca(100.0));break pb}case 1:{r=ca(g[v>>2]);break pb}default:{r=ca(s);break pb}}}while(0);r=ca(t+ca(r+ca(je(C,2,$a))));u=ca(g[C+908>>2]);do if(!(c[y>>2]|0))if(!(c[C+120>>2]|0)){h=(c[C+128>>2]|0)==0?1604:C+124|0;break}else{h=C+116|0;break}else h=C+68|0;while(0);v=c[h+4>>2]|0;qb:do if((v|0)==3)t=ca(0.0);else switch(v|0){case 2:{t=ca(ca($a*ca(g[h>>2]))/ca(100.0));break qb}case 1:{t=ca(g[h>>2]);break qb}default:{t=ca(s);break qb}}while(0);t=ca(u+ca(t+ca(je(C,0,$a))))}ce(C,r,t,gb,1,1,r,t,1,6641,p)|0;if(z){do if(!(c[C+176>>2]|0))if(!(c[C+184>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+180|0;break}else h=C+172|0;while(0);if(c[h+4>>2]|0)Za=1221;else Za=1210}else Za=1210;do if((Za|0)==1210){h=c[1652+(q<<2)>>2]|0;rb:do if(!(c[C+132+(h<<3)+4>>2]|0)){do if(A){if(!(c[C+192>>2]|0))break;h=C+188|0;break rb}while(0);sb:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[C+184>>2]|0))break sb;h=C+180|0;break rb}default:{}}while(0);h=(c[C+200>>2]|0)==0?1668:C+196|0}else h=C+132+(h<<3)|0;while(0);if(!(c[h+4>>2]|0)){Za=1238;break}if(z)Za=1221;else Za=1227}while(0);if((Za|0)==1221){h=c[C+168>>2]|0;do if(!h)if(!(c[C+184>>2]|0)){v=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{v=C+180|0;break}else v=C+164|0;while(0);if(!(c[v+4>>2]|0))Za=1227;else Za=1240}do if((Za|0)==1227){Za=0;v=c[1636+(q<<2)>>2]|0;tb:do if(!(c[C+132+(v<<3)+4>>2]|0)){do if(A){if(!(c[C+192>>2]|0))break;h=C+188|0;break tb}while(0);ub:do switch(v|0){case 0:case 2:case 4:case 5:{if(!(c[C+184>>2]|0))break ub;h=C+180|0;break tb}default:{}}while(0);h=(c[C+200>>2]|0)==0?1668:C+196|0}else h=C+132+(v<<3)|0;while(0);if(c[h+4>>2]|0){Za=1238;break}j=c[1684+(q<<2)>>2]|0;ob=ca(g[b+904+(j<<2)>>2]);ob=ca(ob-ca(g[C+904+(j<<2)>>2]));ob=ca(ob-ca(te(b,q)));g[C+400+(v<<2)>>2]=ca(ob-ca(re(C,q,$a)))}while(0);do if((Za|0)==1238){if(!z){Za=1246;break}h=c[C+168>>2]|0;Za=1240}while(0);if((Za|0)==1240){do if(!h)if(!(c[C+184>>2]|0)){v=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{v=C+180|0;break}else v=C+164|0;while(0);if(!(c[v+4>>2]|0))Za=1246;else Za=1260}vb:do if((Za|0)==1246){Za=0;v=c[1636+(q<<2)>>2]|0;h=c[C+132+(v<<3)+4>>2]|0;wb:do if(!h){do if(A){if(!(c[C+192>>2]|0))break;w=C+188|0;break wb}while(0);xb:do switch(v|0){case 0:case 2:case 4:case 5:{if(!(c[C+184>>2]|0))break xb;w=C+180|0;break wb}default:{}}while(0);w=(c[C+200>>2]|0)==0?1668:C+196|0}else w=C+132+(v<<3)|0;while(0);do if(!(c[w+4>>2]|0)){if((c[ab>>2]|0)!=1)break;j=c[1684+(q<<2)>>2]|0;ob=ca(g[b+904+(j<<2)>>2]);g[C+400+(v<<2)>>2]=ca(ca(ob-ca(g[C+904+(j<<2)>>2]))*ca(.5));break vb}while(0);if(!z){Za=1267;break}h=c[C+168>>2]|0;Za=1260}while(0);do if((Za|0)==1260){Za=0;do if(!h)if(!(c[C+184>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+180|0;break}else h=C+164|0;while(0);if(c[h+4>>2]|0)break;v=c[1636+(q<<2)>>2]|0;h=c[C+132+(v<<3)+4>>2]|0;Za=1267}while(0);do if((Za|0)==1267){yb:do if(!h){do if(A){if(!(c[C+192>>2]|0))break;h=C+188|0;break yb}while(0);zb:do switch(v|0){case 0:case 2:case 4:case 5:{if(!(c[C+184>>2]|0))break zb;h=C+180|0;break yb}default:{}}while(0);h=(c[C+200>>2]|0)==0?1668:C+196|0}else h=C+132+(v<<3)|0;while(0);if(c[h+4>>2]|0)break;if((c[ab>>2]|0)!=2)break;j=c[1684+(q<<2)>>2]|0;ob=ca(g[b+904+(j<<2)>>2]);g[C+400+(v<<2)>>2]=ca(ob-ca(g[C+904+(j<<2)>>2]))}while(0);w=(B&-2|0)==2;if(w){do if(!(c[C+176>>2]|0))if(!(c[C+184>>2]|0)){q=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{q=C+180|0;break}else q=C+172|0;while(0);if(c[q+4>>2]|0)Za=1297;else Za=1286}else Za=1286;do if((Za|0)==1286){q=c[1652+(B<<2)>>2]|0;Ab:do if(!(c[C+132+(q<<3)+4>>2]|0)){do if(B>>>0<2){if(!(c[C+192>>2]|0))break;q=C+188|0;break Ab}while(0);Bb:do switch(q|0){case 0:case 2:case 4:case 5:{if(!(c[C+184>>2]|0))break Bb;q=C+180|0;break Ab}default:{}}while(0);q=(c[C+200>>2]|0)==0?1668:C+196|0}else q=C+132+(q<<3)|0;while(0);if(!(c[q+4>>2]|0)){Za=1314;break}if(w)Za=1297;else Za=1303}while(0);if((Za|0)==1297){q=c[C+168>>2]|0;do if(!q)if(!(c[C+184>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+180|0;break}else h=C+164|0;while(0);if(!(c[h+4>>2]|0))Za=1303;else Za=1316}do if((Za|0)==1303){Za=0;h=c[1636+(B<<2)>>2]|0;Cb:do if(!(c[C+132+(h<<3)+4>>2]|0)){do if(B>>>0<2){if(!(c[C+192>>2]|0))break;q=C+188|0;break Cb}while(0);Db:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[C+184>>2]|0))break Db;q=C+180|0;break Cb}default:{}}while(0);q=(c[C+200>>2]|0)==0?1668:C+196|0}else q=C+132+(h<<3)|0;while(0);if(c[q+4>>2]|0){Za=1314;break}j=c[1684+(B<<2)>>2]|0;ob=ca(g[b+904+(j<<2)>>2]);ob=ca(ob-ca(g[C+904+(j<<2)>>2]));ob=ca(ob-ca(te(b,B)));g[C+400+(h<<2)>>2]=ca(ob-ca(re(C,B,$a)))}while(0);do if((Za|0)==1314){if(!w){Za=1322;break}q=c[C+168>>2]|0;Za=1316}while(0);if((Za|0)==1316){do if(!q)if(!(c[C+184>>2]|0)){h=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{h=C+180|0;break}else h=C+164|0;while(0);if(!(c[h+4>>2]|0))Za=1322;else Za=1338}Eb:do if((Za|0)==1322){Za=0;v=c[1636+(B<<2)>>2]|0;q=c[C+132+(v<<3)+4>>2]|0;Fb:do if(!q){do if(B>>>0<2){if(!(c[C+192>>2]|0))break;h=C+188|0;break Fb}while(0);Gb:do switch(v|0){case 0:case 2:case 4:case 5:{if(!(c[C+184>>2]|0))break Gb;h=C+180|0;break Fb}default:{}}while(0);h=(c[C+200>>2]|0)==0?1668:C+196|0}else h=C+132+(v<<3)|0;while(0);do if(!(c[h+4>>2]|0)){h=c[C+20>>2]|0;if(!h)h=c[l>>2]|0;if((h|0)!=2)break;j=c[1684+(B<<2)>>2]|0;ob=ca(g[b+904+(j<<2)>>2]);g[C+400+(v<<2)>>2]=ca(ca(ob-ca(g[C+904+(j<<2)>>2]))*ca(.5));break Eb}while(0);if(!w){h=v;Za=1345;break}q=c[C+168>>2]|0;Za=1338}while(0);do if((Za|0)==1338){Za=0;do if(!q)if(!(c[C+184>>2]|0)){q=(c[C+200>>2]|0)==0?1668:C+196|0;break}else{q=C+180|0;break}else q=C+164|0;while(0);if(c[q+4>>2]|0)break;h=c[1636+(B<<2)>>2]|0;q=c[C+132+(h<<3)+4>>2]|0;Za=1345}while(0);do if((Za|0)==1345){Za=0;Hb:do if(!q){do if(B>>>0<2){if(!(c[C+192>>2]|0))break;q=C+188|0;break Hb}while(0);Ib:do switch(h|0){case 0:case 2:case 4:case 5:{if(!(c[C+184>>2]|0))break Ib;q=C+180|0;break Hb}default:{}}while(0);q=(c[C+200>>2]|0)==0?1668:C+196|0}else q=C+132+(h<<3)|0;while(0);if(c[q+4>>2]|0)break;q=c[C+20>>2]|0;if(!q)q=c[l>>2]|0;if((q|0)!=3)break;j=c[1684+(B<<2)>>2]|0;ob=ca(g[b+904+(j<<2)>>2]);g[C+400+(h<<2)>>2]=ca(ob-ca(g[C+904+(j<<2)>>2]))}while(0);C=c[C+948>>2]|0;if(!C)break jb}}while(0);z=(cb&-3|0)==1;A=(db&-3|0)==1;if(!(z|A)){i=lb;return}B=1684+(cb<<2)|0;C=1636+(cb<<2)|0;w=1652+(cb<<2)|0;x=1684+(db<<2)|0;y=1636+(db<<2)|0;q=1652+(db<<2)|0;v=0;do{h=uc(c[eb>>2]|0,v)|0;do if((c[h+36>>2]|0)!=1){if(z){kb=c[B>>2]|0;ob=ca(g[h+904+(kb<<2)>>2]);ob=ca(ca(g[b+904+(kb<<2)>>2])-ob);ob=ca(ob-ca(g[h+400+(c[C>>2]<<2)>>2]));g[h+400+(c[w>>2]<<2)>>2]=ob}if(!A)break;kb=c[x>>2]|0;ob=ca(g[h+904+(kb<<2)>>2]);ob=ca(ca(g[b+904+(kb<<2)>>2])-ob);ob=ca(ob-ca(g[h+400+(c[y>>2]<<2)>>2]));g[h+400+(c[q>>2]<<2)>>2]=ob}while(0);v=v+1|0}while((v|0)!=(fb|0));i=lb;return}function le(a,b,d,e,f){a=a|0;b=b|0;d=ca(d);e=ca(e);f=ca(f);var h=0,i=0,j=0,k=Hb,l=0,m=0,n=0;h=c[a+4>>2]|0;b=(b|0)==2&(c[a+940>>2]|0)!=0;a:do if(b){switch(h|0){case 2:{h=3;i=0;m=0;break a}case 3:break;default:{n=4;break a}}h=2;i=0;m=0}else n=4;while(0);if((n|0)==4){m=h>>>0<2;i=m;m=m?(b?3:2):0}k=ca(pe(a,h,d));e=ca(pe(a,m,e));b:do if((h&-2|0)==2?(j=c[a+96>>2]|0,(j|0)!=0):0){b=a+92|0;if((j|0)==3)d=ca(0.0);else switch(j|0){case 2:{d=ca(ca(ca(g[b>>2])*f)/ca(100.0));break b}case 1:{d=ca(g[b>>2]);break b}default:{d=ca(s);break b}}}else n=11;while(0);c:do if((n|0)==11){b=c[1636+(h<<2)>>2]|0;d:do if(!(c[a+60+(b<<3)+4>>2]|0)){if(i?(c[a+120>>2]|0)!=0:0){b=a+116|0;break}switch(b|0){case 0:case 2:case 4:case 5:{if(c[a+112>>2]|0){b=a+108|0;break d}break}default:{}}b=(c[a+128>>2]|0)==0?1604:a+124|0}else b=a+60+(b<<3)|0;while(0);i=c[b+4>>2]|0;if((i|0)==3)d=ca(0.0);else switch(i|0){case 2:{d=ca(ca(ca(g[b>>2])*f)/ca(100.0));break c}case 1:{d=ca(g[b>>2]);break c}default:{d=ca(s);break c}}}while(0);d=ca(k+d);g[a+400+(c[1636+(h<<2)>>2]<<2)>>2]=d;k=ca(k+ca(je(a,h,f)));g[a+400+(c[1652+(h<<2)>>2]<<2)>>2]=k;e:do if((m&-2|0)==2?(l=c[a+96>>2]|0,(l|0)!=0):0){b=a+92|0;if((l|0)==3)d=ca(0.0);else switch(l|0){case 2:{d=ca(ca(ca(g[b>>2])*f)/ca(100.0));break e}case 1:{d=ca(g[b>>2]);break e}default:{d=ca(s);break e}}}else n=30;while(0);f:do if((n|0)==30){b=c[1636+(m<<2)>>2]|0;g:do if(!(c[a+60+(b<<3)+4>>2]|0)){if(m>>>0<2?(c[a+120>>2]|0)!=0:0){b=a+116|0;break}switch(b|0){case 0:case 2:case 4:case 5:{if(c[a+112>>2]|0){b=a+108|0;break g}break}default:{}}b=(c[a+128>>2]|0)==0?1604:a+124|0}else b=a+60+(b<<3)|0;while(0);h=c[b+4>>2]|0;if((h|0)==3)d=ca(0.0);else switch(h|0){case 2:{d=ca(ca(ca(g[b>>2])*f)/ca(100.0));break f}case 1:{d=ca(g[b>>2]);break f}default:{d=ca(s);break f}}}while(0);k=ca(e+d);g[a+400+(c[1636+(m<<2)>>2]<<2)>>2]=k;f=ca(e+ca(je(a,m,f)));g[a+400+(c[1652+(m<<2)>>2]<<2)>>2]=f;return}function me(a,b,d,e){a=a|0;b=ca(b);d=ca(d);e=ca(e);var f=0,h=0,i=Hb,j=0,k=Hb,l=0,m=Hb,n=0,o=Hb;if(b==ca(0.0))return;n=a+400|0;o=ca(g[n>>2]);l=a+404|0;m=ca(g[l>>2]);j=a+416|0;k=ca(g[j>>2]);f=a+420|0;i=ca(o+d);d=ca(m+e);k=ca(i+k);e=ca(d+ca(g[f>>2]));h=(c[a+952>>2]|0)!=0;g[n>>2]=ca(oe(o,b,0,h));g[l>>2]=ca(oe(m,b,0,h));k=ca(oe(k,b,h,0));g[j>>2]=ca(k-ca(oe(i,b,0,h)));e=ca(oe(e,b,h,0));g[f>>2]=ca(e-ca(oe(d,b,0,h)));a=a+944|0;f=qc(c[a>>2]|0)|0;if(!f)return;else h=0;do{me(uc(c[a>>2]|0,h)|0,b,i,d);h=h+1|0}while((h|0)!=(f|0));return}function ne(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;switch(d|0){case 5:case 0:{b=qo(c[1177]|0,e,f)|0;return b|0}default:{b=ro(e,f)|0;return b|0}}return 0}function oe(a,b,d,e){a=ca(a);b=ca(b);d=d|0;e=e|0;var f=Hb;f=ca(Yn(a,b));if(((g[k>>2]=f,c[k>>2]|0)&2147483647)>>>0<=2139095040){a=ca(a-f);if(ca(O(ca(f)))<ca(.0000999999974)){b=a;return ca(b)}}else a=ca(a-f);if(d){b=ca(a+b);return ca(b)}if(e){b=a;return ca(b)}e=f>=ca(b*ca(.5));b=ca((e?b:ca(0.0))+a);return ca(b)}function pe(a,b,d){a=a|0;b=b|0;d=ca(d);var e=0,f=0;if((b&-2|0)==2){do if(!(c[a+168>>2]|0))if(!(c[a+184>>2]|0)){e=(c[a+200>>2]|0)==0?1668:a+196|0;break}else{e=a+180|0;break}else e=a+164|0;while(0);if(!(c[e+4>>2]|0))f=8}else f=8;if((f|0)==8){e=c[1636+(b<<2)>>2]|0;a:do if(!(c[a+132+(e<<3)+4>>2]|0)){if(b>>>0<2?(c[a+192>>2]|0)!=0:0){e=a+188|0;break}switch(e|0){case 0:case 2:case 4:case 5:{if(c[a+184>>2]|0){e=a+180|0;break a}break}default:{}}e=(c[a+200>>2]|0)==0?1668:a+196|0}else e=a+132+(e<<3)|0;while(0);if(!(c[e+4>>2]|0)){d=ca(-ca(re(a,b,d)));return ca(d)}}d=ca(qe(a,b,d));return ca(d)}function qe(a,b,d){a=a|0;b=b|0;d=ca(d);var e=0;a:do if((b&-2|0)==2){do if(!(c[a+168>>2]|0))if(!(c[a+184>>2]|0)){e=(c[a+200>>2]|0)==0?1668:a+196|0;break}else{e=a+180|0;break}else e=a+164|0;while(0);switch(c[e+4>>2]|0){case 0:break a;case 2:{d=ca(ca(ca(g[e>>2])*d)/ca(100.0));return ca(d)}case 1:{d=ca(g[e>>2]);return ca(d)}default:{d=ca(s);return ca(d)}}}while(0);e=c[1636+(b<<2)>>2]|0;b:do if(!(c[a+132+(e<<3)+4>>2]|0)){if(b>>>0<2?(c[a+192>>2]|0)!=0:0){e=a+188|0;break}switch(e|0){case 0:case 2:case 4:case 5:{if(c[a+184>>2]|0){e=a+180|0;break b}break}default:{}}e=(c[a+200>>2]|0)==0?1668:a+196|0}else e=a+132+(e<<3)|0;while(0);b=c[e+4>>2]|0;if(!b){d=ca(0.0);return ca(d)}switch(b|0){case 2:{d=ca(ca(ca(g[e>>2])*d)/ca(100.0));return ca(d)}case 1:{d=ca(g[e>>2]);return ca(d)}default:{d=ca(s);return ca(d)}}return ca(0)}function re(a,b,d){a=a|0;b=b|0;d=ca(d);var e=0;a:do if((b&-2|0)==2){do if(!(c[a+176>>2]|0))if(!(c[a+184>>2]|0)){e=(c[a+200>>2]|0)==0?1668:a+196|0;break}else{e=a+180|0;break}else e=a+172|0;while(0);switch(c[e+4>>2]|0){case 0:break a;case 2:{d=ca(ca(ca(g[e>>2])*d)/ca(100.0));return ca(d)}case 1:{d=ca(g[e>>2]);return ca(d)}default:{d=ca(s);return ca(d)}}}while(0);e=c[1652+(b<<2)>>2]|0;b:do if(!(c[a+132+(e<<3)+4>>2]|0)){if(b>>>0<2?(c[a+192>>2]|0)!=0:0){e=a+188|0;break}switch(e|0){case 0:case 2:case 4:case 5:{if(c[a+184>>2]|0){e=a+180|0;break b}break}default:{}}e=(c[a+200>>2]|0)==0?1668:a+196|0}else e=a+132+(e<<3)|0;while(0);b=c[e+4>>2]|0;if(!b){d=ca(0.0);return ca(d)}switch(b|0){case 2:{d=ca(ca(ca(g[e>>2])*d)/ca(100.0));return ca(d)}case 1:{d=ca(g[e>>2]);return ca(d)}default:{d=ca(s);return ca(d)}}return ca(0)}function se(a,b){a=a|0;b=b|0;var d=Hb;if(((b&-2|0)==2?(c[a+312>>2]|0)!=0:0)?(d=ca(g[a+308>>2]),d>=ca(0.0)):0)return ca(d);d=ca(Wn(ca(g[(Ae(a+276|0,c[1636+(b<<2)>>2]|0,1604)|0)>>2]),ca(0.0)));return ca(d)}function te(a,b){a=a|0;b=b|0;var d=Hb;if(((b&-2|0)==2?(c[a+320>>2]|0)!=0:0)?(d=ca(g[a+316>>2]),d>=ca(0.0)):0)return ca(d);d=ca(Wn(ca(g[(Ae(a+276|0,c[1652+(b<<2)>>2]|0,1604)|0)>>2]),ca(0.0)));return ca(d)}function ue(a,b,d){a=a|0;b=b|0;d=ca(d);var e=Hb,f=0,h=Hb,i=0;a:do if((b&-2|0)==2){f=a+236|0;i=c[a+240>>2]|0;switch(i|0){case 1:{h=ca(g[f>>2]);e=h;break}case 2:{h=ca(g[f>>2]);e=ca(ca(h*d)/ca(100.0));break}default:break a}if(e>=ca(0.0))switch(i|0){case 2:{d=ca(ca(h*d)/ca(100.0));return ca(d)}case 1:{d=h;return ca(d)}default:{d=ca(s);return ca(d)}}}while(0);f=c[1636+(b<<2)>>2]|0;b:do if(!(c[a+204+(f<<3)+4>>2]|0)){if(b>>>0<2?(c[a+264>>2]|0)!=0:0){f=a+260|0;break}switch(f|0){case 0:case 2:case 4:case 5:{if(c[a+256>>2]|0){f=a+252|0;break b}break}default:{}}f=(c[a+272>>2]|0)==0?1604:a+268|0}else f=a+204+(f<<3)|0;while(0);switch(c[f+4>>2]|0){case 2:{e=ca(ca(ca(g[f>>2])*d)/ca(100.0));break}case 1:{e=ca(g[f>>2]);break}default:e=ca(s)}d=ca(Wn(e,ca(0.0)));return ca(d)}function ve(a,b,d){a=a|0;b=b|0;d=ca(d);var e=Hb,f=0,h=Hb,i=0;a:do if((b&-2|0)==2){f=a+244|0;i=c[a+248>>2]|0;switch(i|0){case 1:{h=ca(g[f>>2]);e=h;break}case 2:{h=ca(g[f>>2]);e=ca(ca(h*d)/ca(100.0));break}default:break a}if(e>=ca(0.0))switch(i|0){case 2:{d=ca(ca(h*d)/ca(100.0));return ca(d)}case 1:{d=h;return ca(d)}default:{d=ca(s);return ca(d)}}}while(0);f=c[1652+(b<<2)>>2]|0;b:do if(!(c[a+204+(f<<3)+4>>2]|0)){if(b>>>0<2?(c[a+264>>2]|0)!=0:0){f=a+260|0;break}switch(f|0){case 0:case 2:case 4:case 5:{if(c[a+256>>2]|0){f=a+252|0;break b}break}default:{}}f=(c[a+272>>2]|0)==0?1604:a+268|0}else f=a+204+(f<<3)|0;while(0);switch(c[f+4>>2]|0){case 2:{e=ca(ca(ca(g[f>>2])*d)/ca(100.0));break}case 1:{e=ca(g[f>>2]);break}default:e=ca(s)}d=ca(Wn(e,ca(0.0)));return ca(d)}function we(a,b,d,e){a=a|0;b=b|0;d=ca(d);e=ca(e);var f=Hb;a:do if(b>>>0>=2)if((b&-2|0)==2){b=a+364|0;switch(c[a+368>>2]|0){case 2:{f=ca(ca(ca(g[b>>2])*e)/ca(100.0));break}case 1:{f=ca(g[b>>2]);break}default:f=ca(s)}b=a+380|0;switch(c[a+384>>2]|0){case 2:{e=ca(ca(ca(g[b>>2])*e)/ca(100.0));break a}case 1:{e=ca(g[b>>2]);break a}default:{e=ca(s);break a}}}else{e=ca(s);f=ca(s)}else{b=a+372|0;switch(c[a+376>>2]|0){case 2:{f=ca(ca(ca(g[b>>2])*e)/ca(100.0));break}case 1:{f=ca(g[b>>2]);break}default:f=ca(s)}b=a+388|0;switch(c[a+392>>2]|0){case 2:{e=ca(ca(ca(g[b>>2])*e)/ca(100.0));break a}case 1:{e=ca(g[b>>2]);break a}default:{e=ca(s);break a}}}while(0);a=e<d&(e>=ca(0.0)&((g[k>>2]=e,c[k>>2]|0)&2147483647)>>>0<2139095041);d=a?e:d;a=f>=ca(0.0)&((g[k>>2]=f,c[k>>2]|0)&2147483647)>>>0<2139095041&d<f;return ca(a?f:d)}function xe(b){b=b|0;var d=0,e=0;d=b+400|0;g[b+916>>2]=ca(0.0);g[b+912>>2]=ca(0.0);c[d>>2]=0;c[d+4>>2]=0;c[d+8>>2]=0;c[d+12>>2]=0;c[d+16>>2]=0;c[d+20>>2]=0;c[b+924>>2]=1;c[b+920>>2]=1;g[b+928>>2]=ca(0.0);g[b+932>>2]=ca(0.0);a[b+973>>0]=1;d=b+944|0;b=qc(c[d>>2]|0)|0;if(!b)return;else e=0;do{xe(uc(c[d>>2]|0,e)|0);e=e+1|0}while((e|0)!=(b|0));return}
function yo(e,f,g,j,l){e=e|0;f=f|0;g=g|0;j=j|0;l=l|0;var m=0,n=0,o=0,p=0,q=0.0,r=0,s=0,t=0,u=0,v=0.0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0;ha=i;i=i+624|0;ca=ha+24|0;ea=ha+16|0;da=ha+588|0;Y=ha+576|0;ba=ha;V=ha+536|0;ga=ha+8|0;fa=ha+528|0;M=(e|0)!=0;N=V+40|0;U=N;V=V+39|0;W=ga+4|0;X=Y+12|0;Y=Y+11|0;Z=da;_=X;aa=_-Z|0;O=-2-Z|0;P=_+2|0;Q=ca+288|0;R=da+9|0;S=R;T=da+8|0;m=0;w=f;n=0;f=0;a:while(1){do if((m|0)>-1)if((n|0)>(2147483647-m|0)){c[(Tn()|0)>>2]=75;m=-1;break}else{m=n+m|0;break}while(0);n=a[w>>0]|0;if(!(n<<24>>24)){L=245;break}else o=w;b:while(1){switch(n<<24>>24){case 37:{n=o;L=9;break b}case 0:{n=o;break b}default:{}}K=o+1|0;n=a[K>>0]|0;o=K}c:do if((L|0)==9)while(1){L=0;if((a[n+1>>0]|0)!=37)break c;o=o+1|0;n=n+2|0;if((a[n>>0]|0)==37)L=9;else break}while(0);y=o-w|0;if(M?(c[e>>2]&32|0)==0:0)lo(w,y,e)|0;if((o|0)!=(w|0)){w=n;n=y;continue}r=n+1|0;o=a[r>>0]|0;p=(o<<24>>24)+-48|0;if(p>>>0<10){K=(a[n+2>>0]|0)==36;r=K?n+3|0:r;o=a[r>>0]|0;u=K?p:-1;f=K?1:f}else u=-1;n=o<<24>>24;d:do if((n&-32|0)==32){p=0;while(1){if(!(1<<n+-32&75913)){s=p;n=r;break d}p=1<<(o<<24>>24)+-32|p;r=r+1|0;o=a[r>>0]|0;n=o<<24>>24;if((n&-32|0)!=32){s=p;n=r;break}}}else{s=0;n=r}while(0);do if(o<<24>>24==42){p=n+1|0;o=(a[p>>0]|0)+-48|0;if(o>>>0<10?(a[n+2>>0]|0)==36:0){c[l+(o<<2)>>2]=10;f=1;n=n+3|0;o=c[j+((a[p>>0]|0)+-48<<3)>>2]|0}else{if(f){m=-1;break a}if(!M){x=s;n=p;f=0;K=0;break}f=(c[g>>2]|0)+(4-1)&~(4-1);o=c[f>>2]|0;c[g>>2]=f+4;f=0;n=p}if((o|0)<0){x=s|8192;K=0-o|0}else{x=s;K=o}}else{p=(o<<24>>24)+-48|0;if(p>>>0<10){o=0;do{o=(o*10|0)+p|0;n=n+1|0;p=(a[n>>0]|0)+-48|0}while(p>>>0<10);if((o|0)<0){m=-1;break a}else{x=s;K=o}}else{x=s;K=0}}while(0);e:do if((a[n>>0]|0)==46){p=n+1|0;o=a[p>>0]|0;if(o<<24>>24!=42){r=(o<<24>>24)+-48|0;if(r>>>0<10){n=p;o=0}else{n=p;r=0;break}while(1){o=(o*10|0)+r|0;n=n+1|0;r=(a[n>>0]|0)+-48|0;if(r>>>0>=10){r=o;break e}}}p=n+2|0;o=(a[p>>0]|0)+-48|0;if(o>>>0<10?(a[n+3>>0]|0)==36:0){c[l+(o<<2)>>2]=10;n=n+4|0;r=c[j+((a[p>>0]|0)+-48<<3)>>2]|0;break}if(f){m=-1;break a}if(M){n=(c[g>>2]|0)+(4-1)&~(4-1);r=c[n>>2]|0;c[g>>2]=n+4;n=p}else{n=p;r=0}}else r=-1;while(0);t=0;while(1){o=(a[n>>0]|0)+-65|0;if(o>>>0>57){m=-1;break a}p=n+1|0;o=a[11985+(t*58|0)+o>>0]|0;s=o&255;if((s+-1|0)>>>0<8){n=p;t=s}else{J=p;break}}if(!(o<<24>>24)){m=-1;break}p=(u|0)>-1;do if(o<<24>>24==19)if(p){m=-1;break a}else L=52;else{if(p){c[l+(u<<2)>>2]=s;H=j+(u<<3)|0;I=c[H+4>>2]|0;L=ba;c[L>>2]=c[H>>2];c[L+4>>2]=I;L=52;break}if(!M){m=0;break a}Ao(ba,s,g)}while(0);if((L|0)==52?(L=0,!M):0){w=J;n=y;continue}u=a[n>>0]|0;u=(t|0)!=0&(u&15|0)==3?u&-33:u;p=x&-65537;I=(x&8192|0)==0?x:p;f:do switch(u|0){case 110:switch(t|0){case 0:{c[c[ba>>2]>>2]=m;w=J;n=y;continue a}case 1:{c[c[ba>>2]>>2]=m;w=J;n=y;continue a}case 2:{w=c[ba>>2]|0;c[w>>2]=m;c[w+4>>2]=((m|0)<0)<<31>>31;w=J;n=y;continue a}case 3:{b[c[ba>>2]>>1]=m;w=J;n=y;continue a}case 4:{a[c[ba>>2]>>0]=m;w=J;n=y;continue a}case 6:{c[c[ba>>2]>>2]=m;w=J;n=y;continue a}case 7:{w=c[ba>>2]|0;c[w>>2]=m;c[w+4>>2]=((m|0)<0)<<31>>31;w=J;n=y;continue a}default:{w=J;n=y;continue a}}case 112:{t=I|8;r=r>>>0>8?r:8;u=120;L=64;break}case 88:case 120:{t=I;L=64;break}case 111:{p=ba;o=c[p>>2]|0;p=c[p+4>>2]|0;if((o|0)==0&(p|0)==0)n=N;else{n=N;do{n=n+-1|0;a[n>>0]=o&7|48;o=So(o|0,p|0,3)|0;p=D}while(!((o|0)==0&(p|0)==0))}if(!(I&8)){o=I;t=0;s=12465;L=77}else{t=U-n+1|0;o=I;r=(r|0)<(t|0)?t:r;t=0;s=12465;L=77}break}case 105:case 100:{o=ba;n=c[o>>2]|0;o=c[o+4>>2]|0;if((o|0)<0){n=Oo(0,0,n|0,o|0)|0;o=D;p=ba;c[p>>2]=n;c[p+4>>2]=o;p=1;s=12465;L=76;break f}if(!(I&2048)){s=I&1;p=s;s=(s|0)==0?12465:12467;L=76}else{p=1;s=12466;L=76}break}case 117:{o=ba;n=c[o>>2]|0;o=c[o+4>>2]|0;p=0;s=12465;L=76;break}case 99:{a[V>>0]=c[ba>>2];w=V;o=1;t=0;u=12465;n=N;break}case 109:{n=Un(c[(Tn()|0)>>2]|0)|0;L=82;break}case 115:{n=c[ba>>2]|0;n=(n|0)!=0?n:12475;L=82;break}case 67:{c[ga>>2]=c[ba>>2];c[W>>2]=0;c[ba>>2]=ga;r=-1;L=86;break}case 83:{if(!r){Co(e,32,K,0,I);n=0;L=98}else L=86;break}case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:{q=+h[ba>>3];c[ea>>2]=0;h[k>>3]=q;if((c[k+4>>2]|0)>=0)if(!(I&2048)){H=I&1;G=H;H=(H|0)==0?12483:12488}else{G=1;H=12485}else{q=-q;G=1;H=12482}h[k>>3]=q;F=c[k+4>>2]&2146435072;do if(F>>>0<2146435072|(F|0)==2146435072&0<0){v=+_n(q,ea)*2.0;o=v!=0.0;if(o)c[ea>>2]=(c[ea>>2]|0)+-1;C=u|32;if((C|0)==97){w=u&32;y=(w|0)==0?H:H+9|0;x=G|2;n=12-r|0;do if(!(r>>>0>11|(n|0)==0)){q=8.0;do{n=n+-1|0;q=q*16.0}while((n|0)!=0);if((a[y>>0]|0)==45){q=-(q+(-v-q));break}else{q=v+q-q;break}}else q=v;while(0);o=c[ea>>2]|0;n=(o|0)<0?0-o|0:o;n=Bo(n,((n|0)<0)<<31>>31,X)|0;if((n|0)==(X|0)){a[Y>>0]=48;n=Y}a[n+-1>>0]=(o>>31&2)+43;t=n+-2|0;a[t>>0]=u+15;s=(r|0)<1;p=(I&8|0)==0;o=da;while(1){H=~~q;n=o+1|0;a[o>>0]=d[12449+H>>0]|w;q=(q-+(H|0))*16.0;do if((n-Z|0)==1){if(p&(s&q==0.0))break;a[n>>0]=46;n=o+2|0}while(0);if(!(q!=0.0))break;else o=n}r=(r|0)!=0&(O+n|0)<(r|0)?P+r-t|0:aa-t+n|0;p=r+x|0;Co(e,32,K,p,I);if(!(c[e>>2]&32))lo(y,x,e)|0;Co(e,48,K,p,I^65536);n=n-Z|0;if(!(c[e>>2]&32))lo(da,n,e)|0;o=_-t|0;Co(e,48,r-(n+o)|0,0,0);if(!(c[e>>2]&32))lo(t,o,e)|0;Co(e,32,K,p,I^8192);n=(p|0)<(K|0)?K:p;break}n=(r|0)<0?6:r;if(o){o=(c[ea>>2]|0)+-28|0;c[ea>>2]=o;q=v*268435456.0}else{q=v;o=c[ea>>2]|0}F=(o|0)<0?ca:Q;E=F;o=F;do{B=~~q>>>0;c[o>>2]=B;o=o+4|0;q=(q-+(B>>>0))*1.0e9}while(q!=0.0);p=o;o=c[ea>>2]|0;if((o|0)>0){s=F;while(1){t=(o|0)>29?29:o;r=p+-4|0;do if(r>>>0<s>>>0)r=s;else{o=0;do{B=Ro(c[r>>2]|0,0,t|0)|0;B=Po(B|0,D|0,o|0,0)|0;o=D;A=$o(B|0,o|0,1e9,0)|0;c[r>>2]=A;o=_o(B|0,o|0,1e9,0)|0;r=r+-4|0}while(r>>>0>=s>>>0);if(!o){r=s;break}r=s+-4|0;c[r>>2]=o}while(0);while(1){if(p>>>0<=r>>>0)break;o=p+-4|0;if(!(c[o>>2]|0))p=o;else break}o=(c[ea>>2]|0)-t|0;c[ea>>2]=o;if((o|0)>0)s=r;else break}}else r=F;if((o|0)<0){y=((n+25|0)/9|0)+1|0;z=(C|0)==102;w=r;while(1){x=0-o|0;x=(x|0)>9?9:x;do if(w>>>0<p>>>0){o=(1<<x)+-1|0;s=1e9>>>x;r=0;t=w;do{B=c[t>>2]|0;c[t>>2]=(B>>>x)+r;r=$(B&o,s)|0;t=t+4|0}while(t>>>0<p>>>0);o=(c[w>>2]|0)==0?w+4|0:w;if(!r){r=o;break}c[p>>2]=r;r=o;p=p+4|0}else r=(c[w>>2]|0)==0?w+4|0:w;while(0);o=z?F:r;p=(p-o>>2|0)>(y|0)?o+(y<<2)|0:p;o=(c[ea>>2]|0)+x|0;c[ea>>2]=o;if((o|0)>=0){w=r;break}else w=r}}else w=r;do if(w>>>0<p>>>0){o=(E-w>>2)*9|0;s=c[w>>2]|0;if(s>>>0<10)break;else r=10;do{r=r*10|0;o=o+1|0}while(s>>>0>=r>>>0)}else o=0;while(0);A=(C|0)==103;B=(n|0)!=0;r=n-((C|0)!=102?o:0)+((B&A)<<31>>31)|0;if((r|0)<(((p-E>>2)*9|0)+-9|0)){t=r+9216|0;z=(t|0)/9|0;r=F+(z+-1023<<2)|0;t=((t|0)%9|0)+1|0;if((t|0)<9){s=10;do{s=s*10|0;t=t+1|0}while((t|0)!=9)}else s=10;x=c[r>>2]|0;y=(x>>>0)%(s>>>0)|0;if((y|0)==0?(F+(z+-1022<<2)|0)==(p|0):0)s=w;else L=163;do if((L|0)==163){L=0;v=(((x>>>0)/(s>>>0)|0)&1|0)==0?9007199254740992.0:9007199254740994.0;t=(s|0)/2|0;do if(y>>>0<t>>>0)q=.5;else{if((y|0)==(t|0)?(F+(z+-1022<<2)|0)==(p|0):0){q=1.0;break}q=1.5}while(0);do if(G){if((a[H>>0]|0)!=45)break;v=-v;q=-q}while(0);t=x-y|0;c[r>>2]=t;if(!(v+q!=v)){s=w;break}C=t+s|0;c[r>>2]=C;if(C>>>0>999999999){o=w;while(1){s=r+-4|0;c[r>>2]=0;if(s>>>0<o>>>0){o=o+-4|0;c[o>>2]=0}C=(c[s>>2]|0)+1|0;c[s>>2]=C;if(C>>>0>999999999)r=s;else{w=o;r=s;break}}}o=(E-w>>2)*9|0;t=c[w>>2]|0;if(t>>>0<10){s=w;break}else s=10;do{s=s*10|0;o=o+1|0}while(t>>>0>=s>>>0);s=w}while(0);C=r+4|0;w=s;p=p>>>0>C>>>0?C:p}y=0-o|0;while(1){if(p>>>0<=w>>>0){z=0;C=p;break}r=p+-4|0;if(!(c[r>>2]|0))p=r;else{z=1;C=p;break}}do if(A){n=(B&1^1)+n|0;if((n|0)>(o|0)&(o|0)>-5){u=u+-1|0;n=n+-1-o|0}else{u=u+-2|0;n=n+-1|0}p=I&8;if(p)break;do if(z){p=c[C+-4>>2]|0;if(!p){r=9;break}if(!((p>>>0)%10|0)){s=10;r=0}else{r=0;break}do{s=s*10|0;r=r+1|0}while(((p>>>0)%(s>>>0)|0|0)==0)}else r=9;while(0);p=((C-E>>2)*9|0)+-9|0;if((u|32|0)==102){p=p-r|0;p=(p|0)<0?0:p;n=(n|0)<(p|0)?n:p;p=0;break}else{p=p+o-r|0;p=(p|0)<0?0:p;n=(n|0)<(p|0)?n:p;p=0;break}}else p=I&8;while(0);x=n|p;s=(x|0)!=0&1;t=(u|32|0)==102;if(t){o=(o|0)>0?o:0;u=0}else{r=(o|0)<0?y:o;r=Bo(r,((r|0)<0)<<31>>31,X)|0;if((_-r|0)<2)do{r=r+-1|0;a[r>>0]=48}while((_-r|0)<2);a[r+-1>>0]=(o>>31&2)+43;E=r+-2|0;a[E>>0]=u;o=_-E|0;u=E}y=G+1+n+s+o|0;Co(e,32,K,y,I);if(!(c[e>>2]&32))lo(H,G,e)|0;Co(e,48,K,y,I^65536);do if(t){r=w>>>0>F>>>0?F:w;o=r;do{p=Bo(c[o>>2]|0,0,R)|0;do if((o|0)==(r|0)){if((p|0)!=(R|0))break;a[T>>0]=48;p=T}else{if(p>>>0<=da>>>0)break;do{p=p+-1|0;a[p>>0]=48}while(p>>>0>da>>>0)}while(0);if(!(c[e>>2]&32))lo(p,S-p|0,e)|0;o=o+4|0}while(o>>>0<=F>>>0);do if(x){if(c[e>>2]&32)break;lo(12517,1,e)|0}while(0);if((n|0)>0&o>>>0<C>>>0){p=o;while(1){o=Bo(c[p>>2]|0,0,R)|0;if(o>>>0>da>>>0)do{o=o+-1|0;a[o>>0]=48}while(o>>>0>da>>>0);if(!(c[e>>2]&32))lo(o,(n|0)>9?9:n,e)|0;p=p+4|0;o=n+-9|0;if(!((n|0)>9&p>>>0<C>>>0)){n=o;break}else n=o}}Co(e,48,n+9|0,9,0)}else{t=z?C:w+4|0;if((n|0)>-1){s=(p|0)==0;r=w;do{o=Bo(c[r>>2]|0,0,R)|0;if((o|0)==(R|0)){a[T>>0]=48;o=T}do if((r|0)==(w|0)){p=o+1|0;if(!(c[e>>2]&32))lo(o,1,e)|0;if(s&(n|0)<1){o=p;break}if(c[e>>2]&32){o=p;break}lo(12517,1,e)|0;o=p}else{if(o>>>0<=da>>>0)break;do{o=o+-1|0;a[o>>0]=48}while(o>>>0>da>>>0)}while(0);p=S-o|0;if(!(c[e>>2]&32))lo(o,(n|0)>(p|0)?p:n,e)|0;n=n-p|0;r=r+4|0}while(r>>>0<t>>>0&(n|0)>-1)}Co(e,48,n+18|0,18,0);if(c[e>>2]&32)break;lo(u,_-u|0,e)|0}while(0);Co(e,32,K,y,I^8192);n=(y|0)<(K|0)?K:y}else{t=(u&32|0)!=0;s=q!=q|0.0!=0.0;o=s?0:G;r=o+3|0;Co(e,32,K,r,p);n=c[e>>2]|0;if(!(n&32)){lo(H,o,e)|0;n=c[e>>2]|0}if(!(n&32))lo(s?(t?12509:12513):t?12501:12505,3,e)|0;Co(e,32,K,r,I^8192);n=(r|0)<(K|0)?K:r}while(0);w=J;continue a}default:{p=I;o=r;t=0;u=12465;n=N}}while(0);g:do if((L|0)==64){p=ba;o=c[p>>2]|0;p=c[p+4>>2]|0;s=u&32;if(!((o|0)==0&(p|0)==0)){n=N;do{n=n+-1|0;a[n>>0]=d[12449+(o&15)>>0]|s;o=So(o|0,p|0,4)|0;p=D}while(!((o|0)==0&(p|0)==0));L=ba;if((t&8|0)==0|(c[L>>2]|0)==0&(c[L+4>>2]|0)==0){o=t;t=0;s=12465;L=77}else{o=t;t=2;s=12465+(u>>4)|0;L=77}}else{n=N;o=t;t=0;s=12465;L=77}}else if((L|0)==76){n=Bo(n,o,N)|0;o=I;t=p;L=77}else if((L|0)==82){L=0;I=to(n,0,r)|0;H=(I|0)==0;w=n;o=H?r:I-n|0;t=0;u=12465;n=H?n+r|0:I}else if((L|0)==86){L=0;o=0;n=0;s=c[ba>>2]|0;while(1){p=c[s>>2]|0;if(!p)break;n=ao(fa,p)|0;if((n|0)<0|n>>>0>(r-o|0)>>>0)break;o=n+o|0;if(r>>>0>o>>>0)s=s+4|0;else break}if((n|0)<0){m=-1;break a}Co(e,32,K,o,I);if(!o){n=0;L=98}else{p=0;r=c[ba>>2]|0;while(1){n=c[r>>2]|0;if(!n){n=o;L=98;break g}n=ao(fa,n)|0;p=n+p|0;if((p|0)>(o|0)){n=o;L=98;break g}if(!(c[e>>2]&32))lo(fa,n,e)|0;if(p>>>0>=o>>>0){n=o;L=98;break}else r=r+4|0}}}while(0);if((L|0)==98){L=0;Co(e,32,K,n,I^8192);w=J;n=(K|0)>(n|0)?K:n;continue}if((L|0)==77){L=0;p=(r|0)>-1?o&-65537:o;o=ba;o=(c[o>>2]|0)!=0|(c[o+4>>2]|0)!=0;if((r|0)!=0|o){o=(o&1^1)+(U-n)|0;w=n;o=(r|0)>(o|0)?r:o;u=s;n=N}else{w=N;o=0;u=s;n=N}}s=n-w|0;o=(o|0)<(s|0)?s:o;r=t+o|0;n=(K|0)<(r|0)?r:K;Co(e,32,n,r,p);if(!(c[e>>2]&32))lo(u,t,e)|0;Co(e,48,n,r,p^65536);Co(e,48,o,s,0);if(!(c[e>>2]&32))lo(w,s,e)|0;Co(e,32,n,r,p^8192);w=J}h:do if((L|0)==245)if(!e)if(f){m=1;while(1){f=c[l+(m<<2)>>2]|0;if(!f)break;Ao(j+(m<<3)|0,f,g);m=m+1|0;if((m|0)>=10){m=1;break h}}if((m|0)<10)while(1){if(c[l+(m<<2)>>2]|0){m=-1;break h}m=m+1|0;if((m|0)>=10){m=1;break}}else m=1}else m=0;while(0);i=ha;return m|0}function zo(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=a+20|0;f=c[e>>2]|0;a=(c[a+16>>2]|0)-f|0;a=a>>>0>d>>>0?d:a;To(f|0,b|0,a|0)|0;c[e>>2]=(c[e>>2]|0)+a;return d|0}function Ao(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0.0;a:do if(b>>>0<=20)do switch(b|0){case 9:{e=(c[d>>2]|0)+(4-1)&~(4-1);b=c[e>>2]|0;c[d>>2]=e+4;c[a>>2]=b;break a}case 10:{e=(c[d>>2]|0)+(4-1)&~(4-1);b=c[e>>2]|0;c[d>>2]=e+4;e=a;c[e>>2]=b;c[e+4>>2]=((b|0)<0)<<31>>31;break a}case 11:{e=(c[d>>2]|0)+(4-1)&~(4-1);b=c[e>>2]|0;c[d>>2]=e+4;e=a;c[e>>2]=b;c[e+4>>2]=0;break a}case 12:{e=(c[d>>2]|0)+(8-1)&~(8-1);b=e;f=c[b>>2]|0;b=c[b+4>>2]|0;c[d>>2]=e+8;e=a;c[e>>2]=f;c[e+4>>2]=b;break a}case 13:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;e=(e&65535)<<16>>16;f=a;c[f>>2]=e;c[f+4>>2]=((e|0)<0)<<31>>31;break a}case 14:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;f=a;c[f>>2]=e&65535;c[f+4>>2]=0;break a}case 15:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;e=(e&255)<<24>>24;f=a;c[f>>2]=e;c[f+4>>2]=((e|0)<0)<<31>>31;break a}case 16:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;f=a;c[f>>2]=e&255;c[f+4>>2]=0;break a}case 17:{f=(c[d>>2]|0)+(8-1)&~(8-1);g=+h[f>>3];c[d>>2]=f+8;h[a>>3]=g;break a}case 18:{f=(c[d>>2]|0)+(8-1)&~(8-1);g=+h[f>>3];c[d>>2]=f+8;h[a>>3]=g;break a}default:break a}while(0);while(0);return}function Bo(b,c,d){b=b|0;c=c|0;d=d|0;var e=0;if(c>>>0>0|(c|0)==0&b>>>0>4294967295)while(1){e=$o(b|0,c|0,10,0)|0;d=d+-1|0;a[d>>0]=e|48;e=_o(b|0,c|0,10,0)|0;if(c>>>0>9|(c|0)==9&b>>>0>4294967295){b=e;c=D}else{b=e;break}}if(b)while(1){d=d+-1|0;a[d>>0]=(b>>>0)%10|0|48;if(b>>>0<10)break;else b=(b>>>0)/10|0}return d|0}function Co(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0;j=i;i=i+256|0;h=j;do if((d|0)>(e|0)&(f&73728|0)==0){f=d-e|0;Qo(h|0,b|0,(f>>>0>256?256:f)|0)|0;b=c[a>>2]|0;g=(b&32|0)==0;if(f>>>0>255){e=d-e|0;do{if(g){lo(h,256,a)|0;b=c[a>>2]|0}f=f+-256|0;g=(b&32|0)==0}while(f>>>0>255);if(g)f=e&255;else break}else if(!g)break;lo(h,f,a)|0}while(0);i=j;return}function Do(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0;do if(a>>>0<245){o=a>>>0<11?16:a+11&-8;a=o>>>3;i=c[1264]|0;d=i>>>a;if(d&3){a=(d&1^1)+a|0;e=a<<1;d=5096+(e<<2)|0;e=5096+(e+2<<2)|0;f=c[e>>2]|0;g=f+8|0;h=c[g>>2]|0;do if((d|0)!=(h|0)){if(h>>>0<(c[1268]|0)>>>0)fb();b=h+12|0;if((c[b>>2]|0)==(f|0)){c[b>>2]=d;c[e>>2]=h;break}else fb()}else c[1264]=i&~(1<<a);while(0);M=a<<3;c[f+4>>2]=M|3;M=f+(M|4)|0;c[M>>2]=c[M>>2]|1;M=g;return M|0}h=c[1266]|0;if(o>>>0>h>>>0){if(d){e=2<<a;e=d<<a&(e|0-e);e=(e&0-e)+-1|0;j=e>>>12&16;e=e>>>j;f=e>>>5&8;e=e>>>f;g=e>>>2&4;e=e>>>g;d=e>>>1&2;e=e>>>d;a=e>>>1&1;a=(f|j|g|d|a)+(e>>>a)|0;e=a<<1;d=5096+(e<<2)|0;e=5096+(e+2<<2)|0;g=c[e>>2]|0;j=g+8|0;f=c[j>>2]|0;do if((d|0)!=(f|0)){if(f>>>0<(c[1268]|0)>>>0)fb();b=f+12|0;if((c[b>>2]|0)==(g|0)){c[b>>2]=d;c[e>>2]=f;k=c[1266]|0;break}else fb()}else{c[1264]=i&~(1<<a);k=h}while(0);M=a<<3;h=M-o|0;c[g+4>>2]=o|3;i=g+o|0;c[g+(o|4)>>2]=h|1;c[g+M>>2]=h;if(k){f=c[1269]|0;d=k>>>3;b=d<<1;e=5096+(b<<2)|0;a=c[1264]|0;d=1<<d;if(a&d){a=5096+(b+2<<2)|0;b=c[a>>2]|0;if(b>>>0<(c[1268]|0)>>>0)fb();else{l=a;m=b}}else{c[1264]=a|d;l=5096+(b+2<<2)|0;m=e}c[l>>2]=f;c[m+12>>2]=f;c[f+8>>2]=m;c[f+12>>2]=e}c[1266]=h;c[1269]=i;M=j;return M|0}a=c[1265]|0;if(a){d=(a&0-a)+-1|0;L=d>>>12&16;d=d>>>L;K=d>>>5&8;d=d>>>K;M=d>>>2&4;d=d>>>M;a=d>>>1&2;d=d>>>a;e=d>>>1&1;e=c[5360+((K|L|M|a|e)+(d>>>e)<<2)>>2]|0;d=(c[e+4>>2]&-8)-o|0;a=e;while(1){b=c[a+16>>2]|0;if(!b){b=c[a+20>>2]|0;if(!b){j=d;break}}a=(c[b+4>>2]&-8)-o|0;M=a>>>0<d>>>0;d=M?a:d;a=b;e=M?b:e}g=c[1268]|0;if(e>>>0<g>>>0)fb();i=e+o|0;if(e>>>0>=i>>>0)fb();h=c[e+24>>2]|0;d=c[e+12>>2]|0;do if((d|0)==(e|0)){a=e+20|0;b=c[a>>2]|0;if(!b){a=e+16|0;b=c[a>>2]|0;if(!b){n=0;break}}while(1){d=b+20|0;f=c[d>>2]|0;if(f){b=f;a=d;continue}d=b+16|0;f=c[d>>2]|0;if(!f)break;else{b=f;a=d}}if(a>>>0<g>>>0)fb();else{c[a>>2]=0;n=b;break}}else{f=c[e+8>>2]|0;if(f>>>0<g>>>0)fb();b=f+12|0;if((c[b>>2]|0)!=(e|0))fb();a=d+8|0;if((c[a>>2]|0)==(e|0)){c[b>>2]=d;c[a>>2]=f;n=d;break}else fb()}while(0);do if(h){b=c[e+28>>2]|0;a=5360+(b<<2)|0;if((e|0)==(c[a>>2]|0)){c[a>>2]=n;if(!n){c[1265]=c[1265]&~(1<<b);break}}else{if(h>>>0<(c[1268]|0)>>>0)fb();b=h+16|0;if((c[b>>2]|0)==(e|0))c[b>>2]=n;else c[h+20>>2]=n;if(!n)break}a=c[1268]|0;if(n>>>0<a>>>0)fb();c[n+24>>2]=h;b=c[e+16>>2]|0;do if(b)if(b>>>0<a>>>0)fb();else{c[n+16>>2]=b;c[b+24>>2]=n;break}while(0);b=c[e+20>>2]|0;if(b)if(b>>>0<(c[1268]|0)>>>0)fb();else{c[n+20>>2]=b;c[b+24>>2]=n;break}}while(0);if(j>>>0<16){M=j+o|0;c[e+4>>2]=M|3;M=e+(M+4)|0;c[M>>2]=c[M>>2]|1}else{c[e+4>>2]=o|3;c[e+(o|4)>>2]=j|1;c[e+(j+o)>>2]=j;b=c[1266]|0;if(b){g=c[1269]|0;d=b>>>3;b=d<<1;f=5096+(b<<2)|0;a=c[1264]|0;d=1<<d;if(a&d){b=5096+(b+2<<2)|0;a=c[b>>2]|0;if(a>>>0<(c[1268]|0)>>>0)fb();else{p=b;q=a}}else{c[1264]=a|d;p=5096+(b+2<<2)|0;q=f}c[p>>2]=g;c[q+12>>2]=g;c[g+8>>2]=q;c[g+12>>2]=f}c[1266]=j;c[1269]=i}M=e+8|0;return M|0}else q=o}else q=o}else if(a>>>0<=4294967231){a=a+11|0;m=a&-8;l=c[1265]|0;if(l){d=0-m|0;a=a>>>8;if(a)if(m>>>0>16777215)k=31;else{q=(a+1048320|0)>>>16&8;v=a<<q;p=(v+520192|0)>>>16&4;v=v<<p;k=(v+245760|0)>>>16&2;k=14-(p|q|k)+(v<<k>>>15)|0;k=m>>>(k+7|0)&1|k<<1}else k=0;a=c[5360+(k<<2)>>2]|0;a:do if(!a){f=0;a=0;v=86}else{h=d;f=0;i=m<<((k|0)==31?0:25-(k>>>1)|0);j=a;a=0;while(1){g=c[j+4>>2]&-8;d=g-m|0;if(d>>>0<h>>>0)if((g|0)==(m|0)){g=j;a=j;v=90;break a}else a=j;else d=h;v=c[j+20>>2]|0;j=c[j+16+(i>>>31<<2)>>2]|0;f=(v|0)==0|(v|0)==(j|0)?f:v;if(!j){v=86;break}else{h=d;i=i<<1}}}while(0);if((v|0)==86){if((f|0)==0&(a|0)==0){a=2<<k;a=l&(a|0-a);if(!a){q=m;break}a=(a&0-a)+-1|0;n=a>>>12&16;a=a>>>n;l=a>>>5&8;a=a>>>l;p=a>>>2&4;a=a>>>p;q=a>>>1&2;a=a>>>q;f=a>>>1&1;f=c[5360+((l|n|p|q|f)+(a>>>f)<<2)>>2]|0;a=0}if(!f){i=d;j=a}else{g=f;v=90}}if((v|0)==90)while(1){v=0;q=(c[g+4>>2]&-8)-m|0;f=q>>>0<d>>>0;d=f?q:d;a=f?g:a;f=c[g+16>>2]|0;if(f){g=f;v=90;continue}g=c[g+20>>2]|0;if(!g){i=d;j=a;break}else v=90}if((j|0)!=0?i>>>0<((c[1266]|0)-m|0)>>>0:0){f=c[1268]|0;if(j>>>0<f>>>0)fb();h=j+m|0;if(j>>>0>=h>>>0)fb();g=c[j+24>>2]|0;d=c[j+12>>2]|0;do if((d|0)==(j|0)){a=j+20|0;b=c[a>>2]|0;if(!b){a=j+16|0;b=c[a>>2]|0;if(!b){o=0;break}}while(1){d=b+20|0;e=c[d>>2]|0;if(e){b=e;a=d;continue}d=b+16|0;e=c[d>>2]|0;if(!e)break;else{b=e;a=d}}if(a>>>0<f>>>0)fb();else{c[a>>2]=0;o=b;break}}else{e=c[j+8>>2]|0;if(e>>>0<f>>>0)fb();b=e+12|0;if((c[b>>2]|0)!=(j|0))fb();a=d+8|0;if((c[a>>2]|0)==(j|0)){c[b>>2]=d;c[a>>2]=e;o=d;break}else fb()}while(0);do if(g){b=c[j+28>>2]|0;a=5360+(b<<2)|0;if((j|0)==(c[a>>2]|0)){c[a>>2]=o;if(!o){c[1265]=c[1265]&~(1<<b);break}}else{if(g>>>0<(c[1268]|0)>>>0)fb();b=g+16|0;if((c[b>>2]|0)==(j|0))c[b>>2]=o;else c[g+20>>2]=o;if(!o)break}a=c[1268]|0;if(o>>>0<a>>>0)fb();c[o+24>>2]=g;b=c[j+16>>2]|0;do if(b)if(b>>>0<a>>>0)fb();else{c[o+16>>2]=b;c[b+24>>2]=o;break}while(0);b=c[j+20>>2]|0;if(b)if(b>>>0<(c[1268]|0)>>>0)fb();else{c[o+20>>2]=b;c[b+24>>2]=o;break}}while(0);b:do if(i>>>0>=16){c[j+4>>2]=m|3;c[j+(m|4)>>2]=i|1;c[j+(i+m)>>2]=i;b=i>>>3;if(i>>>0<256){a=b<<1;e=5096+(a<<2)|0;d=c[1264]|0;b=1<<b;if(d&b){b=5096+(a+2<<2)|0;a=c[b>>2]|0;if(a>>>0<(c[1268]|0)>>>0)fb();else{s=b;t=a}}else{c[1264]=d|b;s=5096+(a+2<<2)|0;t=e}c[s>>2]=h;c[t+12>>2]=h;c[j+(m+8)>>2]=t;c[j+(m+12)>>2]=e;break}b=i>>>8;if(b)if(i>>>0>16777215)e=31;else{L=(b+1048320|0)>>>16&8;M=b<<L;K=(M+520192|0)>>>16&4;M=M<<K;e=(M+245760|0)>>>16&2;e=14-(K|L|e)+(M<<e>>>15)|0;e=i>>>(e+7|0)&1|e<<1}else e=0;b=5360+(e<<2)|0;c[j+(m+28)>>2]=e;c[j+(m+20)>>2]=0;c[j+(m+16)>>2]=0;a=c[1265]|0;d=1<<e;if(!(a&d)){c[1265]=a|d;c[b>>2]=h;c[j+(m+24)>>2]=b;c[j+(m+12)>>2]=h;c[j+(m+8)>>2]=h;break}b=c[b>>2]|0;c:do if((c[b+4>>2]&-8|0)!=(i|0)){e=i<<((e|0)==31?0:25-(e>>>1)|0);while(1){a=b+16+(e>>>31<<2)|0;d=c[a>>2]|0;if(!d)break;if((c[d+4>>2]&-8|0)==(i|0)){y=d;break c}else{e=e<<1;b=d}}if(a>>>0<(c[1268]|0)>>>0)fb();else{c[a>>2]=h;c[j+(m+24)>>2]=b;c[j+(m+12)>>2]=h;c[j+(m+8)>>2]=h;break b}}else y=b;while(0);b=y+8|0;a=c[b>>2]|0;M=c[1268]|0;if(a>>>0>=M>>>0&y>>>0>=M>>>0){c[a+12>>2]=h;c[b>>2]=h;c[j+(m+8)>>2]=a;c[j+(m+12)>>2]=y;c[j+(m+24)>>2]=0;break}else fb()}else{M=i+m|0;c[j+4>>2]=M|3;M=j+(M+4)|0;c[M>>2]=c[M>>2]|1}while(0);M=j+8|0;return M|0}else q=m}else q=m}else q=-1;while(0);d=c[1266]|0;if(d>>>0>=q>>>0){b=d-q|0;a=c[1269]|0;if(b>>>0>15){c[1269]=a+q;c[1266]=b;c[a+(q+4)>>2]=b|1;c[a+d>>2]=b;c[a+4>>2]=q|3}else{c[1266]=0;c[1269]=0;c[a+4>>2]=d|3;M=a+(d+4)|0;c[M>>2]=c[M>>2]|1}M=a+8|0;return M|0}a=c[1267]|0;if(a>>>0>q>>>0){L=a-q|0;c[1267]=L;M=c[1270]|0;c[1270]=M+q;c[M+(q+4)>>2]=L|1;c[M+4>>2]=q|3;M=M+8|0;return M|0}do if(!(c[1382]|0)){a=cb(30)|0;if(!(a+-1&a)){c[1384]=a;c[1383]=a;c[1385]=-1;c[1386]=-1;c[1387]=0;c[1375]=0;c[1382]=(xb(0)|0)&-16^1431655768;break}else fb()}while(0);j=q+48|0;i=c[1384]|0;k=q+47|0;h=i+k|0;i=0-i|0;l=h&i;if(l>>>0<=q>>>0){M=0;return M|0}a=c[1374]|0;if((a|0)!=0?(t=c[1372]|0,y=t+l|0,y>>>0<=t>>>0|y>>>0>a>>>0):0){M=0;return M|0}d:do if(!(c[1375]&4)){a=c[1270]|0;e:do if(a){f=5504;while(1){d=c[f>>2]|0;if(d>>>0<=a>>>0?(r=f+4|0,(d+(c[r>>2]|0)|0)>>>0>a>>>0):0){g=f;a=r;break}f=c[f+8>>2]|0;if(!f){v=174;break e}}d=h-(c[1267]|0)&i;if(d>>>0<2147483647){f=Wa(d|0)|0;y=(f|0)==((c[g>>2]|0)+(c[a>>2]|0)|0);a=y?d:0;if(y){if((f|0)!=(-1|0)){w=f;p=a;v=194;break d}}else v=184}else a=0}else v=174;while(0);do if((v|0)==174){g=Wa(0)|0;if((g|0)!=(-1|0)){a=g;d=c[1383]|0;f=d+-1|0;if(!(f&a))d=l;else d=l-a+(f+a&0-d)|0;a=c[1372]|0;f=a+d|0;if(d>>>0>q>>>0&d>>>0<2147483647){y=c[1374]|0;if((y|0)!=0?f>>>0<=a>>>0|f>>>0>y>>>0:0){a=0;break}f=Wa(d|0)|0;y=(f|0)==(g|0);a=y?d:0;if(y){w=g;p=a;v=194;break d}else v=184}else a=0}else a=0}while(0);f:do if((v|0)==184){g=0-d|0;do if(j>>>0>d>>>0&(d>>>0<2147483647&(f|0)!=(-1|0))?(u=c[1384]|0,u=k-d+u&0-u,u>>>0<2147483647):0)if((Wa(u|0)|0)==(-1|0)){Wa(g|0)|0;break f}else{d=u+d|0;break}while(0);if((f|0)!=(-1|0)){w=f;p=d;v=194;break d}}while(0);c[1375]=c[1375]|4;v=191}else{a=0;v=191}while(0);if((((v|0)==191?l>>>0<2147483647:0)?(w=Wa(l|0)|0,x=Wa(0)|0,w>>>0<x>>>0&((w|0)!=(-1|0)&(x|0)!=(-1|0))):0)?(z=x-w|0,A=z>>>0>(q+40|0)>>>0,A):0){p=A?z:a;v=194}if((v|0)==194){a=(c[1372]|0)+p|0;c[1372]=a;if(a>>>0>(c[1373]|0)>>>0)c[1373]=a;h=c[1270]|0;g:do if(h){g=5504;do{a=c[g>>2]|0;d=g+4|0;f=c[d>>2]|0;if((w|0)==(a+f|0)){B=a;C=d;D=f;E=g;v=204;break}g=c[g+8>>2]|0}while((g|0)!=0);if(((v|0)==204?(c[E+12>>2]&8|0)==0:0)?h>>>0<w>>>0&h>>>0>=B>>>0:0){c[C>>2]=D+p;M=(c[1267]|0)+p|0;L=h+8|0;L=(L&7|0)==0?0:0-L&7;K=M-L|0;c[1270]=h+L;c[1267]=K;c[h+(L+4)>>2]=K|1;c[h+(M+4)>>2]=40;c[1271]=c[1386];break}a=c[1268]|0;if(w>>>0<a>>>0){c[1268]=w;a=w}d=w+p|0;g=5504;while(1){if((c[g>>2]|0)==(d|0)){f=g;d=g;v=212;break}g=c[g+8>>2]|0;if(!g){d=5504;break}}if((v|0)==212)if(!(c[d+12>>2]&8)){c[f>>2]=w;n=d+4|0;c[n>>2]=(c[n>>2]|0)+p;n=w+8|0;n=(n&7|0)==0?0:0-n&7;k=w+(p+8)|0;k=(k&7|0)==0?0:0-k&7;b=w+(k+p)|0;m=n+q|0;o=w+m|0;l=b-(w+n)-q|0;c[w+(n+4)>>2]=q|3;h:do if((b|0)!=(h|0)){if((b|0)==(c[1269]|0)){M=(c[1266]|0)+l|0;c[1266]=M;c[1269]=o;c[w+(m+4)>>2]=M|1;c[w+(M+m)>>2]=M;break}i=p+4|0;d=c[w+(i+k)>>2]|0;if((d&3|0)==1){j=d&-8;g=d>>>3;i:do if(d>>>0>=256){h=c[w+((k|24)+p)>>2]|0;e=c[w+(p+12+k)>>2]|0;do if((e|0)==(b|0)){f=k|16;e=w+(i+f)|0;d=c[e>>2]|0;if(!d){e=w+(f+p)|0;d=c[e>>2]|0;if(!d){J=0;break}}while(1){f=d+20|0;g=c[f>>2]|0;if(g){d=g;e=f;continue}f=d+16|0;g=c[f>>2]|0;if(!g)break;else{d=g;e=f}}if(e>>>0<a>>>0)fb();else{c[e>>2]=0;J=d;break}}else{f=c[w+((k|8)+p)>>2]|0;if(f>>>0<a>>>0)fb();a=f+12|0;if((c[a>>2]|0)!=(b|0))fb();d=e+8|0;if((c[d>>2]|0)==(b|0)){c[a>>2]=e;c[d>>2]=f;J=e;break}else fb()}while(0);if(!h)break;a=c[w+(p+28+k)>>2]|0;d=5360+(a<<2)|0;do if((b|0)!=(c[d>>2]|0)){if(h>>>0<(c[1268]|0)>>>0)fb();a=h+16|0;if((c[a>>2]|0)==(b|0))c[a>>2]=J;else c[h+20>>2]=J;if(!J)break i}else{c[d>>2]=J;if(J)break;c[1265]=c[1265]&~(1<<a);break i}while(0);d=c[1268]|0;if(J>>>0<d>>>0)fb();c[J+24>>2]=h;b=k|16;a=c[w+(b+p)>>2]|0;do if(a)if(a>>>0<d>>>0)fb();else{c[J+16>>2]=a;c[a+24>>2]=J;break}while(0);b=c[w+(i+b)>>2]|0;if(!b)break;if(b>>>0<(c[1268]|0)>>>0)fb();else{c[J+20>>2]=b;c[b+24>>2]=J;break}}else{e=c[w+((k|8)+p)>>2]|0;f=c[w+(p+12+k)>>2]|0;d=5096+(g<<1<<2)|0;do if((e|0)!=(d|0)){if(e>>>0<a>>>0)fb();if((c[e+12>>2]|0)==(b|0))break;fb()}while(0);if((f|0)==(e|0)){c[1264]=c[1264]&~(1<<g);break}do if((f|0)==(d|0))F=f+8|0;else{if(f>>>0<a>>>0)fb();a=f+8|0;if((c[a>>2]|0)==(b|0)){F=a;break}fb()}while(0);c[e+12>>2]=f;c[F>>2]=e}while(0);b=w+((j|k)+p)|0;f=j+l|0}else f=l;b=b+4|0;c[b>>2]=c[b>>2]&-2;c[w+(m+4)>>2]=f|1;c[w+(f+m)>>2]=f;b=f>>>3;if(f>>>0<256){a=b<<1;e=5096+(a<<2)|0;d=c[1264]|0;b=1<<b;do if(!(d&b)){c[1264]=d|b;K=5096+(a+2<<2)|0;L=e}else{b=5096+(a+2<<2)|0;a=c[b>>2]|0;if(a>>>0>=(c[1268]|0)>>>0){K=b;L=a;break}fb()}while(0);c[K>>2]=o;c[L+12>>2]=o;c[w+(m+8)>>2]=L;c[w+(m+12)>>2]=e;break}b=f>>>8;do if(!b)e=0;else{if(f>>>0>16777215){e=31;break}K=(b+1048320|0)>>>16&8;L=b<<K;J=(L+520192|0)>>>16&4;L=L<<J;e=(L+245760|0)>>>16&2;e=14-(J|K|e)+(L<<e>>>15)|0;e=f>>>(e+7|0)&1|e<<1}while(0);b=5360+(e<<2)|0;c[w+(m+28)>>2]=e;c[w+(m+20)>>2]=0;c[w+(m+16)>>2]=0;a=c[1265]|0;d=1<<e;if(!(a&d)){c[1265]=a|d;c[b>>2]=o;c[w+(m+24)>>2]=b;c[w+(m+12)>>2]=o;c[w+(m+8)>>2]=o;break}b=c[b>>2]|0;j:do if((c[b+4>>2]&-8|0)!=(f|0)){e=f<<((e|0)==31?0:25-(e>>>1)|0);while(1){a=b+16+(e>>>31<<2)|0;d=c[a>>2]|0;if(!d)break;if((c[d+4>>2]&-8|0)==(f|0)){M=d;break j}else{e=e<<1;b=d}}if(a>>>0<(c[1268]|0)>>>0)fb();else{c[a>>2]=o;c[w+(m+24)>>2]=b;c[w+(m+12)>>2]=o;c[w+(m+8)>>2]=o;break h}}else M=b;while(0);b=M+8|0;a=c[b>>2]|0;L=c[1268]|0;if(a>>>0>=L>>>0&M>>>0>=L>>>0){c[a+12>>2]=o;c[b>>2]=o;c[w+(m+8)>>2]=a;c[w+(m+12)>>2]=M;c[w+(m+24)>>2]=0;break}else fb()}else{M=(c[1267]|0)+l|0;c[1267]=M;c[1270]=o;c[w+(m+4)>>2]=M|1}while(0);M=w+(n|8)|0;return M|0}else d=5504;while(1){a=c[d>>2]|0;if(a>>>0<=h>>>0?(b=c[d+4>>2]|0,e=a+b|0,e>>>0>h>>>0):0)break;d=c[d+8>>2]|0}f=a+(b+-39)|0;a=a+(b+-47+((f&7|0)==0?0:0-f&7))|0;f=h+16|0;a=a>>>0<f>>>0?h:a;b=a+8|0;d=w+8|0;d=(d&7|0)==0?0:0-d&7;M=p+-40-d|0;c[1270]=w+d;c[1267]=M;c[w+(d+4)>>2]=M|1;c[w+(p+-36)>>2]=40;c[1271]=c[1386];d=a+4|0;c[d>>2]=27;c[b>>2]=c[1376];c[b+4>>2]=c[1377];c[b+8>>2]=c[1378];c[b+12>>2]=c[1379];c[1376]=w;c[1377]=p;c[1379]=0;c[1378]=b;b=a+28|0;c[b>>2]=7;if((a+32|0)>>>0<e>>>0)do{M=b;b=b+4|0;c[b>>2]=7}while((M+8|0)>>>0<e>>>0);if((a|0)!=(h|0)){g=a-h|0;c[d>>2]=c[d>>2]&-2;c[h+4>>2]=g|1;c[a>>2]=g;b=g>>>3;if(g>>>0<256){a=b<<1;e=5096+(a<<2)|0;d=c[1264]|0;b=1<<b;if(d&b){b=5096+(a+2<<2)|0;a=c[b>>2]|0;if(a>>>0<(c[1268]|0)>>>0)fb();else{G=b;H=a}}else{c[1264]=d|b;G=5096+(a+2<<2)|0;H=e}c[G>>2]=h;c[H+12>>2]=h;c[h+8>>2]=H;c[h+12>>2]=e;break}b=g>>>8;if(b)if(g>>>0>16777215)e=31;else{L=(b+1048320|0)>>>16&8;M=b<<L;K=(M+520192|0)>>>16&4;M=M<<K;e=(M+245760|0)>>>16&2;e=14-(K|L|e)+(M<<e>>>15)|0;e=g>>>(e+7|0)&1|e<<1}else e=0;d=5360+(e<<2)|0;c[h+28>>2]=e;c[h+20>>2]=0;c[f>>2]=0;b=c[1265]|0;a=1<<e;if(!(b&a)){c[1265]=b|a;c[d>>2]=h;c[h+24>>2]=d;c[h+12>>2]=h;c[h+8>>2]=h;break}b=c[d>>2]|0;k:do if((c[b+4>>2]&-8|0)!=(g|0)){e=g<<((e|0)==31?0:25-(e>>>1)|0);while(1){a=b+16+(e>>>31<<2)|0;d=c[a>>2]|0;if(!d)break;if((c[d+4>>2]&-8|0)==(g|0)){I=d;break k}else{e=e<<1;b=d}}if(a>>>0<(c[1268]|0)>>>0)fb();else{c[a>>2]=h;c[h+24>>2]=b;c[h+12>>2]=h;c[h+8>>2]=h;break g}}else I=b;while(0);b=I+8|0;a=c[b>>2]|0;M=c[1268]|0;if(a>>>0>=M>>>0&I>>>0>=M>>>0){c[a+12>>2]=h;c[b>>2]=h;c[h+8>>2]=a;c[h+12>>2]=I;c[h+24>>2]=0;break}else fb()}}else{M=c[1268]|0;if((M|0)==0|w>>>0<M>>>0)c[1268]=w;c[1376]=w;c[1377]=p;c[1379]=0;c[1273]=c[1382];c[1272]=-1;b=0;do{M=b<<1;L=5096+(M<<2)|0;c[5096+(M+3<<2)>>2]=L;c[5096+(M+2<<2)>>2]=L;b=b+1|0}while((b|0)!=32);M=w+8|0;M=(M&7|0)==0?0:0-M&7;L=p+-40-M|0;c[1270]=w+M;c[1267]=L;c[w+(M+4)>>2]=L|1;c[w+(p+-36)>>2]=40;c[1271]=c[1386]}while(0);b=c[1267]|0;if(b>>>0>q>>>0){L=b-q|0;c[1267]=L;M=c[1270]|0;c[1270]=M+q;c[M+(q+4)>>2]=L|1;c[M+4>>2]=q|3;M=M+8|0;return M|0}}c[(Tn()|0)>>2]=12;M=0;return M|0}function Eo(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;if(!a)return;b=a+-8|0;i=c[1268]|0;if(b>>>0<i>>>0)fb();d=c[a+-4>>2]|0;e=d&3;if((e|0)==1)fb();o=d&-8;q=a+(o+-8)|0;do if(!(d&1)){b=c[b>>2]|0;if(!e)return;j=-8-b|0;l=a+j|0;m=b+o|0;if(l>>>0<i>>>0)fb();if((l|0)==(c[1269]|0)){b=a+(o+-4)|0;d=c[b>>2]|0;if((d&3|0)!=3){u=l;g=m;break}c[1266]=m;c[b>>2]=d&-2;c[a+(j+4)>>2]=m|1;c[q>>2]=m;return}f=b>>>3;if(b>>>0<256){e=c[a+(j+8)>>2]|0;d=c[a+(j+12)>>2]|0;b=5096+(f<<1<<2)|0;if((e|0)!=(b|0)){if(e>>>0<i>>>0)fb();if((c[e+12>>2]|0)!=(l|0))fb()}if((d|0)==(e|0)){c[1264]=c[1264]&~(1<<f);u=l;g=m;break}if((d|0)!=(b|0)){if(d>>>0<i>>>0)fb();b=d+8|0;if((c[b>>2]|0)==(l|0))h=b;else fb()}else h=d+8|0;c[e+12>>2]=d;c[h>>2]=e;u=l;g=m;break}h=c[a+(j+24)>>2]|0;e=c[a+(j+12)>>2]|0;do if((e|0)==(l|0)){d=a+(j+20)|0;b=c[d>>2]|0;if(!b){d=a+(j+16)|0;b=c[d>>2]|0;if(!b){k=0;break}}while(1){e=b+20|0;f=c[e>>2]|0;if(f){b=f;d=e;continue}e=b+16|0;f=c[e>>2]|0;if(!f)break;else{b=f;d=e}}if(d>>>0<i>>>0)fb();else{c[d>>2]=0;k=b;break}}else{f=c[a+(j+8)>>2]|0;if(f>>>0<i>>>0)fb();b=f+12|0;if((c[b>>2]|0)!=(l|0))fb();d=e+8|0;if((c[d>>2]|0)==(l|0)){c[b>>2]=e;c[d>>2]=f;k=e;break}else fb()}while(0);if(h){b=c[a+(j+28)>>2]|0;d=5360+(b<<2)|0;if((l|0)==(c[d>>2]|0)){c[d>>2]=k;if(!k){c[1265]=c[1265]&~(1<<b);u=l;g=m;break}}else{if(h>>>0<(c[1268]|0)>>>0)fb();b=h+16|0;if((c[b>>2]|0)==(l|0))c[b>>2]=k;else c[h+20>>2]=k;if(!k){u=l;g=m;break}}d=c[1268]|0;if(k>>>0<d>>>0)fb();c[k+24>>2]=h;b=c[a+(j+16)>>2]|0;do if(b)if(b>>>0<d>>>0)fb();else{c[k+16>>2]=b;c[b+24>>2]=k;break}while(0);b=c[a+(j+20)>>2]|0;if(b)if(b>>>0<(c[1268]|0)>>>0)fb();else{c[k+20>>2]=b;c[b+24>>2]=k;u=l;g=m;break}else{u=l;g=m}}else{u=l;g=m}}else{u=b;g=o}while(0);if(u>>>0>=q>>>0)fb();b=a+(o+-4)|0;d=c[b>>2]|0;if(!(d&1))fb();if(!(d&2)){if((q|0)==(c[1270]|0)){t=(c[1267]|0)+g|0;c[1267]=t;c[1270]=u;c[u+4>>2]=t|1;if((u|0)!=(c[1269]|0))return;c[1269]=0;c[1266]=0;return}if((q|0)==(c[1269]|0)){t=(c[1266]|0)+g|0;c[1266]=t;c[1269]=u;c[u+4>>2]=t|1;c[u+t>>2]=t;return}g=(d&-8)+g|0;f=d>>>3;do if(d>>>0>=256){h=c[a+(o+16)>>2]|0;b=c[a+(o|4)>>2]|0;do if((b|0)==(q|0)){d=a+(o+12)|0;b=c[d>>2]|0;if(!b){d=a+(o+8)|0;b=c[d>>2]|0;if(!b){p=0;break}}while(1){e=b+20|0;f=c[e>>2]|0;if(f){b=f;d=e;continue}e=b+16|0;f=c[e>>2]|0;if(!f)break;else{b=f;d=e}}if(d>>>0<(c[1268]|0)>>>0)fb();else{c[d>>2]=0;p=b;break}}else{d=c[a+o>>2]|0;if(d>>>0<(c[1268]|0)>>>0)fb();e=d+12|0;if((c[e>>2]|0)!=(q|0))fb();f=b+8|0;if((c[f>>2]|0)==(q|0)){c[e>>2]=b;c[f>>2]=d;p=b;break}else fb()}while(0);if(h){b=c[a+(o+20)>>2]|0;d=5360+(b<<2)|0;if((q|0)==(c[d>>2]|0)){c[d>>2]=p;if(!p){c[1265]=c[1265]&~(1<<b);break}}else{if(h>>>0<(c[1268]|0)>>>0)fb();b=h+16|0;if((c[b>>2]|0)==(q|0))c[b>>2]=p;else c[h+20>>2]=p;if(!p)break}d=c[1268]|0;if(p>>>0<d>>>0)fb();c[p+24>>2]=h;b=c[a+(o+8)>>2]|0;do if(b)if(b>>>0<d>>>0)fb();else{c[p+16>>2]=b;c[b+24>>2]=p;break}while(0);b=c[a+(o+12)>>2]|0;if(b)if(b>>>0<(c[1268]|0)>>>0)fb();else{c[p+20>>2]=b;c[b+24>>2]=p;break}}}else{e=c[a+o>>2]|0;d=c[a+(o|4)>>2]|0;b=5096+(f<<1<<2)|0;if((e|0)!=(b|0)){if(e>>>0<(c[1268]|0)>>>0)fb();if((c[e+12>>2]|0)!=(q|0))fb()}if((d|0)==(e|0)){c[1264]=c[1264]&~(1<<f);break}if((d|0)!=(b|0)){if(d>>>0<(c[1268]|0)>>>0)fb();b=d+8|0;if((c[b>>2]|0)==(q|0))n=b;else fb()}else n=d+8|0;c[e+12>>2]=d;c[n>>2]=e}while(0);c[u+4>>2]=g|1;c[u+g>>2]=g;if((u|0)==(c[1269]|0)){c[1266]=g;return}}else{c[b>>2]=d&-2;c[u+4>>2]=g|1;c[u+g>>2]=g}b=g>>>3;if(g>>>0<256){d=b<<1;f=5096+(d<<2)|0;e=c[1264]|0;b=1<<b;if(e&b){b=5096+(d+2<<2)|0;d=c[b>>2]|0;if(d>>>0<(c[1268]|0)>>>0)fb();else{r=b;s=d}}else{c[1264]=e|b;r=5096+(d+2<<2)|0;s=f}c[r>>2]=u;c[s+12>>2]=u;c[u+8>>2]=s;c[u+12>>2]=f;return}b=g>>>8;if(b)if(g>>>0>16777215)f=31;else{r=(b+1048320|0)>>>16&8;s=b<<r;q=(s+520192|0)>>>16&4;s=s<<q;f=(s+245760|0)>>>16&2;f=14-(q|r|f)+(s<<f>>>15)|0;f=g>>>(f+7|0)&1|f<<1}else f=0;b=5360+(f<<2)|0;c[u+28>>2]=f;c[u+20>>2]=0;c[u+16>>2]=0;d=c[1265]|0;e=1<<f;a:do if(d&e){b=c[b>>2]|0;b:do if((c[b+4>>2]&-8|0)!=(g|0)){f=g<<((f|0)==31?0:25-(f>>>1)|0);while(1){d=b+16+(f>>>31<<2)|0;e=c[d>>2]|0;if(!e)break;if((c[e+4>>2]&-8|0)==(g|0)){t=e;break b}else{f=f<<1;b=e}}if(d>>>0<(c[1268]|0)>>>0)fb();else{c[d>>2]=u;c[u+24>>2]=b;c[u+12>>2]=u;c[u+8>>2]=u;break a}}else t=b;while(0);b=t+8|0;d=c[b>>2]|0;s=c[1268]|0;if(d>>>0>=s>>>0&t>>>0>=s>>>0){c[d+12>>2]=u;c[b>>2]=u;c[u+8>>2]=d;c[u+12>>2]=t;c[u+24>>2]=0;break}else fb()}else{c[1265]=d|e;c[b>>2]=u;c[u+24>>2]=b;c[u+12>>2]=u;c[u+8>>2]=u}while(0);u=(c[1272]|0)+-1|0;c[1272]=u;if(!u)b=5512;else return;while(1){b=c[b>>2]|0;if(!b)break;else b=b+8|0}c[1272]=-1;return}function Fo(a,b){a=a|0;b=b|0;var d=0,e=0;if(!a){a=Do(b)|0;return a|0}if(b>>>0>4294967231){c[(Tn()|0)>>2]=12;a=0;return a|0}d=Go(a+-8|0,b>>>0<11?16:b+11&-8)|0;if(d){a=d+8|0;return a|0}d=Do(b)|0;if(!d){a=0;return a|0}e=c[a+-4>>2]|0;e=(e&-8)-((e&3|0)==0?8:4)|0;To(d|0,a|0,(e>>>0<b>>>0?e:b)|0)|0;Eo(a);a=d;return a|0}function Go(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;o=a+4|0;p=c[o>>2]|0;j=p&-8;l=a+j|0;i=c[1268]|0;d=p&3;if(!((d|0)!=1&a>>>0>=i>>>0&a>>>0<l>>>0))fb();e=a+(j|4)|0;f=c[e>>2]|0;if(!(f&1))fb();if(!d){if(b>>>0<256){a=0;return a|0}if(j>>>0>=(b+4|0)>>>0?(j-b|0)>>>0<=c[1384]<<1>>>0:0)return a|0;a=0;return a|0}if(j>>>0>=b>>>0){d=j-b|0;if(d>>>0<=15)return a|0;c[o>>2]=p&1|b|2;c[a+(b+4)>>2]=d|3;c[e>>2]=c[e>>2]|1;Ho(a+b|0,d);return a|0}if((l|0)==(c[1270]|0)){d=(c[1267]|0)+j|0;if(d>>>0<=b>>>0){a=0;return a|0}n=d-b|0;c[o>>2]=p&1|b|2;c[a+(b+4)>>2]=n|1;c[1270]=a+b;c[1267]=n;return a|0}if((l|0)==(c[1269]|0)){e=(c[1266]|0)+j|0;if(e>>>0<b>>>0){a=0;return a|0}d=e-b|0;if(d>>>0>15){c[o>>2]=p&1|b|2;c[a+(b+4)>>2]=d|1;c[a+e>>2]=d;e=a+(e+4)|0;c[e>>2]=c[e>>2]&-2;e=a+b|0}else{c[o>>2]=p&1|e|2;e=a+(e+4)|0;c[e>>2]=c[e>>2]|1;e=0;d=0}c[1266]=d;c[1269]=e;return a|0}if(f&2){a=0;return a|0}m=(f&-8)+j|0;if(m>>>0<b>>>0){a=0;return a|0}n=m-b|0;g=f>>>3;do if(f>>>0>=256){h=c[a+(j+24)>>2]|0;g=c[a+(j+12)>>2]|0;do if((g|0)==(l|0)){e=a+(j+20)|0;d=c[e>>2]|0;if(!d){e=a+(j+16)|0;d=c[e>>2]|0;if(!d){k=0;break}}while(1){f=d+20|0;g=c[f>>2]|0;if(g){d=g;e=f;continue}f=d+16|0;g=c[f>>2]|0;if(!g)break;else{d=g;e=f}}if(e>>>0<i>>>0)fb();else{c[e>>2]=0;k=d;break}}else{f=c[a+(j+8)>>2]|0;if(f>>>0<i>>>0)fb();d=f+12|0;if((c[d>>2]|0)!=(l|0))fb();e=g+8|0;if((c[e>>2]|0)==(l|0)){c[d>>2]=g;c[e>>2]=f;k=g;break}else fb()}while(0);if(h){d=c[a+(j+28)>>2]|0;e=5360+(d<<2)|0;if((l|0)==(c[e>>2]|0)){c[e>>2]=k;if(!k){c[1265]=c[1265]&~(1<<d);break}}else{if(h>>>0<(c[1268]|0)>>>0)fb();d=h+16|0;if((c[d>>2]|0)==(l|0))c[d>>2]=k;else c[h+20>>2]=k;if(!k)break}e=c[1268]|0;if(k>>>0<e>>>0)fb();c[k+24>>2]=h;d=c[a+(j+16)>>2]|0;do if(d)if(d>>>0<e>>>0)fb();else{c[k+16>>2]=d;c[d+24>>2]=k;break}while(0);d=c[a+(j+20)>>2]|0;if(d)if(d>>>0<(c[1268]|0)>>>0)fb();else{c[k+20>>2]=d;c[d+24>>2]=k;break}}}else{f=c[a+(j+8)>>2]|0;e=c[a+(j+12)>>2]|0;d=5096+(g<<1<<2)|0;if((f|0)!=(d|0)){if(f>>>0<i>>>0)fb();if((c[f+12>>2]|0)!=(l|0))fb()}if((e|0)==(f|0)){c[1264]=c[1264]&~(1<<g);break}if((e|0)!=(d|0)){if(e>>>0<i>>>0)fb();d=e+8|0;if((c[d>>2]|0)==(l|0))h=d;else fb()}else h=e+8|0;c[f+12>>2]=e;c[h>>2]=f}while(0);if(n>>>0<16){c[o>>2]=m|p&1|2;b=a+(m|4)|0;c[b>>2]=c[b>>2]|1;return a|0}else{c[o>>2]=p&1|b|2;c[a+(b+4)>>2]=n|3;p=a+(m|4)|0;c[p>>2]=c[p>>2]|1;Ho(a+b|0,n);return a|0}return 0}function Ho(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;q=a+b|0;d=c[a+4>>2]|0;do if(!(d&1)){k=c[a>>2]|0;if(!(d&3))return;n=a+(0-k)|0;m=k+b|0;j=c[1268]|0;if(n>>>0<j>>>0)fb();if((n|0)==(c[1269]|0)){e=a+(b+4)|0;d=c[e>>2]|0;if((d&3|0)!=3){t=n;h=m;break}c[1266]=m;c[e>>2]=d&-2;c[a+(4-k)>>2]=m|1;c[q>>2]=m;return}g=k>>>3;if(k>>>0<256){f=c[a+(8-k)>>2]|0;e=c[a+(12-k)>>2]|0;d=5096+(g<<1<<2)|0;if((f|0)!=(d|0)){if(f>>>0<j>>>0)fb();if((c[f+12>>2]|0)!=(n|0))fb()}if((e|0)==(f|0)){c[1264]=c[1264]&~(1<<g);t=n;h=m;break}if((e|0)!=(d|0)){if(e>>>0<j>>>0)fb();d=e+8|0;if((c[d>>2]|0)==(n|0))i=d;else fb()}else i=e+8|0;c[f+12>>2]=e;c[i>>2]=f;t=n;h=m;break}i=c[a+(24-k)>>2]|0;f=c[a+(12-k)>>2]|0;do if((f|0)==(n|0)){f=16-k|0;e=a+(f+4)|0;d=c[e>>2]|0;if(!d){e=a+f|0;d=c[e>>2]|0;if(!d){l=0;break}}while(1){f=d+20|0;g=c[f>>2]|0;if(g){d=g;e=f;continue}f=d+16|0;g=c[f>>2]|0;if(!g)break;else{d=g;e=f}}if(e>>>0<j>>>0)fb();else{c[e>>2]=0;l=d;break}}else{g=c[a+(8-k)>>2]|0;if(g>>>0<j>>>0)fb();d=g+12|0;if((c[d>>2]|0)!=(n|0))fb();e=f+8|0;if((c[e>>2]|0)==(n|0)){c[d>>2]=f;c[e>>2]=g;l=f;break}else fb()}while(0);if(i){d=c[a+(28-k)>>2]|0;e=5360+(d<<2)|0;if((n|0)==(c[e>>2]|0)){c[e>>2]=l;if(!l){c[1265]=c[1265]&~(1<<d);t=n;h=m;break}}else{if(i>>>0<(c[1268]|0)>>>0)fb();d=i+16|0;if((c[d>>2]|0)==(n|0))c[d>>2]=l;else c[i+20>>2]=l;if(!l){t=n;h=m;break}}f=c[1268]|0;if(l>>>0<f>>>0)fb();c[l+24>>2]=i;d=16-k|0;e=c[a+d>>2]|0;do if(e)if(e>>>0<f>>>0)fb();else{c[l+16>>2]=e;c[e+24>>2]=l;break}while(0);d=c[a+(d+4)>>2]|0;if(d)if(d>>>0<(c[1268]|0)>>>0)fb();else{c[l+20>>2]=d;c[d+24>>2]=l;t=n;h=m;break}else{t=n;h=m}}else{t=n;h=m}}else{t=a;h=b}while(0);j=c[1268]|0;if(q>>>0<j>>>0)fb();d=a+(b+4)|0;e=c[d>>2]|0;if(!(e&2)){if((q|0)==(c[1270]|0)){s=(c[1267]|0)+h|0;c[1267]=s;c[1270]=t;c[t+4>>2]=s|1;if((t|0)!=(c[1269]|0))return;c[1269]=0;c[1266]=0;return}if((q|0)==(c[1269]|0)){s=(c[1266]|0)+h|0;c[1266]=s;c[1269]=t;c[t+4>>2]=s|1;c[t+s>>2]=s;return}h=(e&-8)+h|0;g=e>>>3;do if(e>>>0>=256){i=c[a+(b+24)>>2]|0;f=c[a+(b+12)>>2]|0;do if((f|0)==(q|0)){e=a+(b+20)|0;d=c[e>>2]|0;if(!d){e=a+(b+16)|0;d=c[e>>2]|0;if(!d){p=0;break}}while(1){f=d+20|0;g=c[f>>2]|0;if(g){d=g;e=f;continue}f=d+16|0;g=c[f>>2]|0;if(!g)break;else{d=g;e=f}}if(e>>>0<j>>>0)fb();else{c[e>>2]=0;p=d;break}}else{g=c[a+(b+8)>>2]|0;if(g>>>0<j>>>0)fb();d=g+12|0;if((c[d>>2]|0)!=(q|0))fb();e=f+8|0;if((c[e>>2]|0)==(q|0)){c[d>>2]=f;c[e>>2]=g;p=f;break}else fb()}while(0);if(i){d=c[a+(b+28)>>2]|0;e=5360+(d<<2)|0;if((q|0)==(c[e>>2]|0)){c[e>>2]=p;if(!p){c[1265]=c[1265]&~(1<<d);break}}else{if(i>>>0<(c[1268]|0)>>>0)fb();d=i+16|0;if((c[d>>2]|0)==(q|0))c[d>>2]=p;else c[i+20>>2]=p;if(!p)break}e=c[1268]|0;if(p>>>0<e>>>0)fb();c[p+24>>2]=i;d=c[a+(b+16)>>2]|0;do if(d)if(d>>>0<e>>>0)fb();else{c[p+16>>2]=d;c[d+24>>2]=p;break}while(0);d=c[a+(b+20)>>2]|0;if(d)if(d>>>0<(c[1268]|0)>>>0)fb();else{c[p+20>>2]=d;c[d+24>>2]=p;break}}}else{f=c[a+(b+8)>>2]|0;e=c[a+(b+12)>>2]|0;d=5096+(g<<1<<2)|0;if((f|0)!=(d|0)){if(f>>>0<j>>>0)fb();if((c[f+12>>2]|0)!=(q|0))fb()}if((e|0)==(f|0)){c[1264]=c[1264]&~(1<<g);break}if((e|0)!=(d|0)){if(e>>>0<j>>>0)fb();d=e+8|0;if((c[d>>2]|0)==(q|0))o=d;else fb()}else o=e+8|0;c[f+12>>2]=e;c[o>>2]=f}while(0);c[t+4>>2]=h|1;c[t+h>>2]=h;if((t|0)==(c[1269]|0)){c[1266]=h;return}}else{c[d>>2]=e&-2;c[t+4>>2]=h|1;c[t+h>>2]=h}d=h>>>3;if(h>>>0<256){e=d<<1;g=5096+(e<<2)|0;f=c[1264]|0;d=1<<d;if(f&d){d=5096+(e+2<<2)|0;e=c[d>>2]|0;if(e>>>0<(c[1268]|0)>>>0)fb();else{r=d;s=e}}else{c[1264]=f|d;r=5096+(e+2<<2)|0;s=g}c[r>>2]=t;c[s+12>>2]=t;c[t+8>>2]=s;c[t+12>>2]=g;return}d=h>>>8;if(d)if(h>>>0>16777215)g=31;else{r=(d+1048320|0)>>>16&8;s=d<<r;q=(s+520192|0)>>>16&4;s=s<<q;g=(s+245760|0)>>>16&2;g=14-(q|r|g)+(s<<g>>>15)|0;g=h>>>(g+7|0)&1|g<<1}else g=0;d=5360+(g<<2)|0;c[t+28>>2]=g;c[t+20>>2]=0;c[t+16>>2]=0;e=c[1265]|0;f=1<<g;if(!(e&f)){c[1265]=e|f;c[d>>2]=t;c[t+24>>2]=d;c[t+12>>2]=t;c[t+8>>2]=t;return}d=c[d>>2]|0;a:do if((c[d+4>>2]&-8|0)!=(h|0)){g=h<<((g|0)==31?0:25-(g>>>1)|0);while(1){e=d+16+(g>>>31<<2)|0;f=c[e>>2]|0;if(!f)break;if((c[f+4>>2]&-8|0)==(h|0)){d=f;break a}else{g=g<<1;d=f}}if(e>>>0<(c[1268]|0)>>>0)fb();c[e>>2]=t;c[t+24>>2]=d;c[t+12>>2]=t;c[t+8>>2]=t;return}while(0);e=d+8|0;f=c[e>>2]|0;s=c[1268]|0;if(!(f>>>0>=s>>>0&d>>>0>=s>>>0))fb();c[f+12>>2]=t;c[e>>2]=t;c[t+8>>2]=f;c[t+12>>2]=d;c[t+24>>2]=0;return}function Io(a){a=a|0;return}function Jo(a){a=a|0;var b=0,d=0;d=a+4|0;b=c[d>>2]|0;c[d>>2]=b+-1;if(!b){Lb[c[(c[a>>2]|0)+8>>2]&127](a);a=1}else a=0;return a|0}function Ko(a){a=a|0;if(Jo(a)|0)Lo(a);return}function Lo(a){a=a|0;var b=0,d=0;d=a+8|0;b=c[d>>2]|0;c[d>>2]=b+-1;if(!b)Lb[c[(c[a>>2]|0)+16>>2]&127](a);return}function Mo(a,b){a=a|0;b=b|0;return 0}function No(){}function Oo(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;d=b-d-(c>>>0>a>>>0|0)>>>0;return (D=d,a-c>>>0|0)|0}function Po(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;c=a+c>>>0;return (D=b+d+(c>>>0<a>>>0|0)>>>0,c|0)|0}function Qo(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;h=b&3;i=d|d<<8|d<<16|d<<24;g=f&~3;if(h){h=b+4-h|0;while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}}while((b|0)<(g|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return b-e|0}function Ro(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){D=b<<c|(a&(1<<c)-1<<32-c)>>>32-c;return a<<c}D=a<<c-32;return 0}function So(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){D=b>>>c;return a>>>c|(b&(1<<c)-1)<<32-c}D=0;return b>>>c-32|0}function To(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return $a(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if(!e)return f|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function Uo(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){D=b>>c;return a>>>c|(b&(1<<c)-1)<<32-c}D=(b|0)<0?-1:0;return b>>c-32|0}function Vo(b){b=b|0;var c=0;c=a[m+(b&255)>>0]|0;if((c|0)<8)return c|0;c=a[m+(b>>8&255)>>0]|0;if((c|0)<8)return c+8|0;c=a[m+(b>>16&255)>>0]|0;if((c|0)<8)return c+16|0;return (a[m+(b>>>24)>>0]|0)+24|0}function Wo(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;f=a&65535;e=b&65535;c=$(e,f)|0;d=a>>>16;a=(c>>>16)+($(e,d)|0)|0;e=b>>>16;b=$(e,f)|0;return (D=(a>>>16)+($(e,d)|0)+(((a&65535)+b|0)>>>16)|0,a+b<<16|c&65535|0)|0}function Xo(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;j=b>>31|((b|0)<0?-1:0)<<1;i=((b|0)<0?-1:0)>>31|((b|0)<0?-1:0)<<1;f=d>>31|((d|0)<0?-1:0)<<1;e=((d|0)<0?-1:0)>>31|((d|0)<0?-1:0)<<1;h=Oo(j^a,i^b,j,i)|0;g=D;a=f^j;b=e^i;return Oo((ap(h,g,Oo(f^c,e^d,f,e)|0,D,0)|0)^a,D^b,a,b)|0}function Yo(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;f=i;i=i+16|0;j=f|0;h=b>>31|((b|0)<0?-1:0)<<1;g=((b|0)<0?-1:0)>>31|((b|0)<0?-1:0)<<1;l=e>>31|((e|0)<0?-1:0)<<1;k=((e|0)<0?-1:0)>>31|((e|0)<0?-1:0)<<1;a=Oo(h^a,g^b,h,g)|0;b=D;ap(a,b,Oo(l^d,k^e,l,k)|0,D,j)|0;e=Oo(c[j>>2]^h,c[j+4>>2]^g,h,g)|0;d=D;i=f;return (D=d,e)|0}function Zo(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=a;f=c;c=Wo(e,f)|0;a=D;return (D=($(b,f)|0)+($(d,e)|0)+a|a&0,c|0|0)|0}function _o(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return ap(a,b,c,d,0)|0}function $o(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=i;i=i+16|0;f=g|0;ap(a,b,d,e,f)|0;i=g;return (D=c[f+4>>2]|0,c[f>>2]|0)|0}function ap(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;l=a;j=b;k=j;h=d;n=e;i=n;if(!k){g=(f|0)!=0;if(!i){if(g){c[f>>2]=(l>>>0)%(h>>>0);c[f+4>>2]=0}n=0;f=(l>>>0)/(h>>>0)>>>0;return (D=n,f)|0}else{if(!g){n=0;f=0;return (D=n,f)|0}c[f>>2]=a|0;c[f+4>>2]=b&0;n=0;f=0;return (D=n,f)|0}}g=(i|0)==0;do if(h){if(!g){g=(ba(i|0)|0)-(ba(k|0)|0)|0;if(g>>>0<=31){m=g+1|0;i=31-g|0;b=g-31>>31;h=m;a=l>>>(m>>>0)&b|k<<i;b=k>>>(m>>>0)&b;g=0;i=l<<i;break}if(!f){n=0;f=0;return (D=n,f)|0}c[f>>2]=a|0;c[f+4>>2]=j|b&0;n=0;f=0;return (D=n,f)|0}g=h-1|0;if(g&h){i=(ba(h|0)|0)+33-(ba(k|0)|0)|0;p=64-i|0;m=32-i|0;j=m>>31;o=i-32|0;b=o>>31;h=i;a=m-1>>31&k>>>(o>>>0)|(k<<m|l>>>(i>>>0))&b;b=b&k>>>(i>>>0);g=l<<p&j;i=(k<<p|l>>>(o>>>0))&j|l<<m&i-33>>31;break}if(f){c[f>>2]=g&l;c[f+4>>2]=0}if((h|0)==1){o=j|b&0;p=a|0|0;return (D=o,p)|0}else{p=Vo(h|0)|0;o=k>>>(p>>>0)|0;p=k<<32-p|l>>>(p>>>0)|0;return (D=o,p)|0}}else{if(g){if(f){c[f>>2]=(k>>>0)%(h>>>0);c[f+4>>2]=0}o=0;p=(k>>>0)/(h>>>0)>>>0;return (D=o,p)|0}if(!l){if(f){c[f>>2]=0;c[f+4>>2]=(k>>>0)%(i>>>0)}o=0;p=(k>>>0)/(i>>>0)>>>0;return (D=o,p)|0}g=i-1|0;if(!(g&i)){if(f){c[f>>2]=a|0;c[f+4>>2]=g&k|b&0}o=0;p=k>>>((Vo(i|0)|0)>>>0);return (D=o,p)|0}g=(ba(i|0)|0)-(ba(k|0)|0)|0;if(g>>>0<=30){b=g+1|0;i=31-g|0;h=b;a=k<<i|l>>>(b>>>0);b=k>>>(b>>>0);g=0;i=l<<i;break}if(!f){o=0;p=0;return (D=o,p)|0}c[f>>2]=a|0;c[f+4>>2]=j|b&0;o=0;p=0;return (D=o,p)|0}while(0);if(!h){k=i;j=0;i=0}else{m=d|0|0;l=n|e&0;k=Po(m|0,l|0,-1,-1)|0;d=D;j=i;i=0;do{e=j;j=g>>>31|j<<1;g=i|g<<1;e=a<<1|e>>>31|0;n=a>>>31|b<<1|0;Oo(k,d,e,n)|0;p=D;o=p>>31|((p|0)<0?-1:0)<<1;i=o&1;a=Oo(e,n,o&m,(((p|0)<0?-1:0)>>31|((p|0)<0?-1:0)<<1)&l)|0;b=D;h=h-1|0}while((h|0)!=0);k=j;j=0}h=0;if(f){c[f>>2]=a;c[f+4>>2]=b}o=(g|0)>>>31|(k|h)<<1|(h<<1|g>>>31)&0|j;p=(g<<1|0>>>31)&-2|i;return (D=o,p)|0}function bp(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;Ib[a&3](b|0,c|0,d|0,e|0,f|0)}function cp(a,b,c){a=a|0;b=b|0;c=+c;Jb[a&31](b|0,+c)}function dp(a,b,c,d){a=a|0;b=b|0;c=ca(c);d=ca(d);return ca(Kb[a&0](b|0,ca(c),ca(d)))}function ep(a,b){a=a|0;b=b|0;Lb[a&127](b|0)}function fp(a,b,c){a=a|0;b=b|0;c=c|0;Mb[a&31](b|0,c|0)}function gp(a,b){a=a|0;b=b|0;return Nb[a&31](b|0)|0}function hp(a,b,c,d,e){a=a|0;b=b|0;c=+c;d=+d;e=e|0;Ob[a&1](b|0,+c,+d,e|0)}function ip(a,b,c,d){a=a|0;b=b|0;c=+c;d=+d;Pb[a&1](b|0,+c,+d)}function jp(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Qb[a&15](b|0,c|0,d|0)|0}function kp(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return +Rb[a&1](b|0,c|0,d|0)}function lp(a,b){a=a|0;b=b|0;return +Sb[a&15](b|0)}function mp(a,b,c){a=a|0;b=b|0;c=+c;return Tb[a&1](b|0,+c)|0}function np(a,b,c){a=a|0;b=b|0;c=c|0;return Ub[a&15](b|0,c|0)|0}function op(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=+d;e=+e;f=f|0;Vb[a&1](b|0,c|0,+d,+e,f|0)}function pp(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;Wb[a&3](b|0,c|0,d|0,e|0,f|0,g|0)}function qp(a,b,c){a=a|0;b=b|0;c=c|0;return +Xb[a&7](b|0,c|0)}function rp(a){a=a|0;return Yb[a&7]()|0}function sp(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Zb[a&1](b|0,c|0,d|0,e|0,f|0)|0}function tp(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=+e;_b[a&1](b|0,c|0,d|0,+e)}function up(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=ca(d);e=e|0;f=ca(f);g=g|0;$b[a&1](b|0,c|0,ca(d),e|0,ca(f),g|0)}function vp(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;ac[a&15](b|0,c|0,d|0)}function wp(a){a=a|0;bc[a&0]()}function xp(a,b,c,d){a=a|0;b=b|0;c=c|0;d=+d;cc[a&15](b|0,c|0,+d)}function yp(a,b,c){a=a|0;b=+b;c=+c;return dc[a&1](+b,+c)|0}function zp(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;ec[a&15](b|0,c|0,d|0,e|0)}function Ap(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;da(0)}function Bp(a,b){a=a|0;b=+b;da(1)}function Cp(a,b,c){a=a|0;b=ca(b);c=ca(c);da(2);return ca(0)}function Dp(a){a=a|0;da(3)}function Ep(a,b){a=a|0;b=b|0;da(4)}function Fp(a){a=a|0;da(5);return 0}function Gp(a,b,c,d){a=a|0;b=+b;c=+c;d=d|0;da(6)}function Hp(a,b,c){a=a|0;b=+b;c=+c;da(7)}function Ip(a,b,c){a=a|0;b=b|0;c=c|0;da(8);return 0}function Jp(a,b,c){a=a|0;b=b|0;c=c|0;da(9);return 0.0}function Kp(a){a=a|0;da(10);return 0.0}function Lp(a,b){a=a|0;b=+b;da(11);return 0}function Mp(a,b){a=a|0;b=b|0;da(12);return 0}function Np(a,b,c,d,e){a=a|0;b=b|0;c=+c;d=+d;e=e|0;da(13)}function Op(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;da(14)}function Pp(a,b){a=a|0;b=b|0;da(15);return 0.0}function Qp(){da(16);return 0}function Rp(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;da(17);return 0}function Sp(a,b,c,d){a=a|0;b=b|0;c=c|0;d=+d;da(18)}function Tp(a,b,c,d,e,f){a=a|0;b=b|0;c=ca(c);d=d|0;e=ca(e);f=f|0;da(19)}function Up(a,b,c){a=a|0;b=b|0;c=c|0;da(20)}function Vp(){da(21)}function Wp(a,b,c){a=a|0;b=b|0;c=+c;da(22)}function Xp(a,b){a=+a;b=+b;da(23);return 0}function Yp(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;da(24)}

// EMSCRIPTEN_END_FUNCS
var Ib=[Ap,Qn,Pn,sl];var Jb=[Bp,cf,df,ef,ff,gf,hf,jf,lf,mf,of,pf,qf,rf,sf,tf,uf,vf,wf,Bp,Bp,Bp,Bp,Bp,Bp,Bp,Bp,Bp,Bp,Bp,Bp,Bp];var Kb=[Cp];var Lb=[Dp,Eo,Io,hh,ih,jh,Ci,Di,Ei,Sk,Tk,Uk,Ll,Ml,Nl,pn,qn,rn,yn,zn,En,Hn,Fn,Gn,In,al,Fe,Le,Oe,kf,nf,bg,dg,bh,lh,qh,wh,Ch,Jh,Ph,Vh,$h,fi,li,ri,xi,Ki,Ri,Xi,bj,hj,nj,tj,zj,Fj,Lj,Yj,ck,ik,ok,Ak,Bk,xk,Hk,Ik,Wk,Xk,Qk,ll,nl,wm,mn,nn,Km,Qm,Wm,bn,jn,xo,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp,Dp];var Mb=[Ep,Pe,Qe,Te,Ue,Ve,We,Xe,Ye,$e,af,bf,Lf,Of,Pf,Qf,Rf,Sf,Tf,Yf,ag,mg,sj,yj,hk,dl,em,vm,Ep,Ep,Ep,Ep];var Nb=[Fp,Do,An,fo,$k,Ke,Af,Cf,Df,Ef,Ff,Gf,Hf,Jf,Kf,Zf,_f,eg,Kj,nk,dm,um,Fp,Fp,Fp,Fp,Fp,Fp,Fp,Fp,Fp,Fp];var Ob=[Gp,fg];var Pb=[Hp,Pk];var Qb=[Ip,Jn,zo,ho,go,io,Ih,Ji,Xj,Vm,Ip,Ip,Ip,Ip,Ip,Ip];var Rb=[Jp,ki];var Sb=[Kp,Mf,Nf,Uf,gg,hg,ig,jg,kg,lg,Kp,Kp,Kp,Kp,Kp,Kp];var Tb=[Lp,vk];var Ub=[Mp,Fo,Mo,Ie,$f,ah,vh,Oh,Uh,wi,Qi,Ej,tl,Pm,Mp,Mp];var Vb=[Np,ph];var Wb=[Op,Sn,Rn,an];var Xb=[Pp,Vf,ng,og,pg,qi,Pp,Pp];var Yb=[Qp,tg,Ee,Je,zk,Gk,Vk,ln];var Zb=[Rp,ne];var _b=[Sp,aj];var $b=[Tp,qg];var ac=[Up,He,Bf,If,Wf,Xf,Bh,_h,gj,mj,Jm,hn,Up,Up,Up,Up];var bc=[Vp];var cc=[Wp,Re,Se,Ze,_e,xf,yf,zf,Wi,wk,Wp,Wp,Wp,Wp,Wp,Wp];var dc=[Xp,Ok];var ec=[Yp,Ln,Mn,Oj,ei,rk,bk,Dk,Kk,_k,ql,ym,tn,Yp,Yp,Yp];return{_nbind_init:lm,_i64Subtract:Oo,_free:Eo,_i64Add:Po,_memset:Qo,_malloc:Do,_memcpy:To,_bitshift64Lshr:So,_bitshift64Shl:Ro,__GLOBAL__sub_I_nbind_cc:ug,__GLOBAL__sub_I_common_cc:kl,__GLOBAL__sub_I_Binding_cc:mm,runPostSets:No,stackAlloc:fc,stackSave:gc,stackRestore:hc,establishStackSpace:ic,setThrew:jc,setTempRet0:mc,getTempRet0:nc,dynCall_viiiii:bp,dynCall_vid:cp,dynCall_fiff:dp,dynCall_vi:ep,dynCall_vii:fp,dynCall_ii:gp,dynCall_viddi:hp,dynCall_vidd:ip,dynCall_iiii:jp,dynCall_diii:kp,dynCall_di:lp,dynCall_iid:mp,dynCall_iii:np,dynCall_viiddi:op,dynCall_viiiiii:pp,dynCall_dii:qp,dynCall_i:rp,dynCall_iiiiii:sp,dynCall_viiid:tp,dynCall_viififi:up,dynCall_viii:vp,dynCall_v:wp,dynCall_viid:xp,dynCall_idd:yp,dynCall_viiii:zp}})


// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var _nbind_init=Module["_nbind_init"]=asm["_nbind_init"];var __GLOBAL__sub_I_nbind_cc=Module["__GLOBAL__sub_I_nbind_cc"]=asm["__GLOBAL__sub_I_nbind_cc"];var _i64Subtract=Module["_i64Subtract"]=asm["_i64Subtract"];var _free=Module["_free"]=asm["_free"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var _i64Add=Module["_i64Add"]=asm["_i64Add"];var _memset=Module["_memset"]=asm["_memset"];var _malloc=Module["_malloc"]=asm["_malloc"];var __GLOBAL__sub_I_common_cc=Module["__GLOBAL__sub_I_common_cc"]=asm["__GLOBAL__sub_I_common_cc"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var _bitshift64Lshr=Module["_bitshift64Lshr"]=asm["_bitshift64Lshr"];var __GLOBAL__sub_I_Binding_cc=Module["__GLOBAL__sub_I_Binding_cc"]=asm["__GLOBAL__sub_I_Binding_cc"];var _bitshift64Shl=Module["_bitshift64Shl"]=asm["_bitshift64Shl"];var dynCall_viiiii=Module["dynCall_viiiii"]=asm["dynCall_viiiii"];var dynCall_vid=Module["dynCall_vid"]=asm["dynCall_vid"];var dynCall_fiff=Module["dynCall_fiff"]=asm["dynCall_fiff"];var dynCall_vi=Module["dynCall_vi"]=asm["dynCall_vi"];var dynCall_vii=Module["dynCall_vii"]=asm["dynCall_vii"];var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];var dynCall_viddi=Module["dynCall_viddi"]=asm["dynCall_viddi"];var dynCall_vidd=Module["dynCall_vidd"]=asm["dynCall_vidd"];var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];var dynCall_diii=Module["dynCall_diii"]=asm["dynCall_diii"];var dynCall_di=Module["dynCall_di"]=asm["dynCall_di"];var dynCall_iid=Module["dynCall_iid"]=asm["dynCall_iid"];var dynCall_iii=Module["dynCall_iii"]=asm["dynCall_iii"];var dynCall_viiddi=Module["dynCall_viiddi"]=asm["dynCall_viiddi"];var dynCall_viiiiii=Module["dynCall_viiiiii"]=asm["dynCall_viiiiii"];var dynCall_dii=Module["dynCall_dii"]=asm["dynCall_dii"];var dynCall_i=Module["dynCall_i"]=asm["dynCall_i"];var dynCall_iiiiii=Module["dynCall_iiiiii"]=asm["dynCall_iiiiii"];var dynCall_viiid=Module["dynCall_viiid"]=asm["dynCall_viiid"];var dynCall_viififi=Module["dynCall_viififi"]=asm["dynCall_viififi"];var dynCall_viii=Module["dynCall_viii"]=asm["dynCall_viii"];var dynCall_v=Module["dynCall_v"]=asm["dynCall_v"];var dynCall_viid=Module["dynCall_viid"]=asm["dynCall_viid"];var dynCall_idd=Module["dynCall_idd"]=asm["dynCall_idd"];var dynCall_viiii=Module["dynCall_viiii"]=asm["dynCall_viiii"];Runtime.stackAlloc=asm["stackAlloc"];Runtime.stackSave=asm["stackSave"];Runtime.stackRestore=asm["stackRestore"];Runtime.establishStackSpace=asm["establishStackSpace"];Runtime.setTempRet0=asm["setTempRet0"];Runtime.getTempRet0=asm["getTempRet0"];function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;var preloadStartTime=null;var calledMain=false;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};Module["callMain"]=Module.callMain=function callMain(args){assert(runDependencies==0,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");assert(__ATPRERUN__.length==0,"cannot call main when preRun functions remain to be called");args=args||[];ensureInitRuntime();var argc=args.length+1;function pad(){for(var i=0;i<4-1;i++){argv.push(0)}}var argv=[allocate(intArrayFromString(Module["thisProgram"]),"i8",ALLOC_NORMAL)];pad();for(var i=0;i<argc-1;i=i+1){argv.push(allocate(intArrayFromString(args[i]),"i8",ALLOC_NORMAL));pad()}argv.push(0);argv=allocate(argv,"i32",ALLOC_NORMAL);try{var ret=Module["_main"](argc,argv,0);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="SimulateInfiniteLoop"){Module["noExitRuntime"]=true;return}else{if(e&&typeof e==="object"&&e.stack)Module.printErr("exception thrown: "+[e,e.stack]);throw e}}finally{calledMain=true}};function run(args){args=args||Module["arguments"];if(preloadStartTime===null)preloadStartTime=Date.now();if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(Module["_main"]&&shouldRunNow)Module["callMain"](args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=Module.run=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["stdout"]["once"]("drain",(function(){process["exit"](status)}));console.log(" ");setTimeout((function(){process["exit"](status)}),500)}else if(ENVIRONMENT_IS_SHELL&&typeof quit==="function"){quit(status)}throw new ExitStatus(status)}Module["exit"]=Module.exit=exit;var abortDecorators=[];function abort(what){if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;var extra="\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output="abort("+what+") at "+stackTrace()+extra;if(abortDecorators){abortDecorators.forEach((function(decorator){output=decorator(output,what)}))}throw output}Module["abort"]=Module.abort=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"]){shouldRunNow=false}run()}))





/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), "/", __webpack_require__(4).Buffer))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function patch(prototype, name, fn) {

    let original = prototype[name];

    prototype[name] = function (... args) {
        return fn.call(this, original, ... args);
    };

}

module.exports = function (bind, lib) {

    let constants = Object.assign({

        UNDEFINED: NaN

    }, __webpack_require__(10));

    class Layout {

        constructor(left, right, top, bottom, width, height) {

            this.left = left;
            this.right = right;

            this.top = top;
            this.bottom = bottom;

            this.width = width;
            this.height = height;

        }

        fromJS(expose) {

            expose(this.left, this.right, this.top, this.bottom, this.width, this.height);

        }

        toString() {

            return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${this.width}:${this.height}>`;

        }

    }

    class Size {

        static fromJS({ width, height }) {

            return new Size(width, height);

        }

        constructor(width, height) {

            this.width = width;
            this.height = height;

        }

        fromJS(expose) {

            expose(this.width, this.height);

        }

        toString() {

            return `<Size#${this.width}x${this.height}>`;

        }

    }

    class Value {

        constructor(unit, value) {

            this.unit = unit;
            this.value = value;

        }

        fromJS(expose) {

            expose(this.unit, this.value);

        }

        toString() {

            switch (this.unit) {

                case constants.UNIT_POINT:
                    return `${this.value}`;

                case constants.UNIT_PERCENT:
                    return `${this.value}%`;

                case constants.UNIT_AUTO:
                    return `auto`;

                default: {
                    return `${this.value}?`;
                }

            }

        }

        valueOf() {

            return this.value;

        }

    }

    for (let fnName of [ `setPosition`, `setMargin`, `setFlexBasis`, `setWidth`, `setHeight`, `setMinWidth`, `setMinHeight`, `setMaxWidth`, `setMaxHeight`, `setPadding` ]) {

        let methods = { [constants.UNIT_POINT]: lib.Node.prototype[fnName], [constants.UNIT_PERCENT]: lib.Node.prototype[`${fnName}Percent`], [constants.UNIT_AUTO]: lib.Node.prototype[`${fnName}Auto`] };

        patch(lib.Node.prototype, fnName, function (original, ... args) {

            // We patch all these functions to add support for the following calls:
            // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

            let value = args.pop();
            let unit, asNumber;

            if (value === `auto`) {

                unit = constants.UNIT_AUTO;
                asNumber = undefined;

            } else if (value instanceof Value) {

                unit = value.unit;
                asNumber = value.valueOf();

            } else {

                unit = typeof value === `string` && value.endsWith(`%`) ? constants.UNIT_PERCENT : constants.UNIT_POINT;
                asNumber = parseFloat(value);

            }

            if (!Object.prototype.hasOwnProperty.call(methods, unit))
                throw new Error(`Failed to execute "${fnName}": Unsupported unit.`);

            if (asNumber !== undefined) {
                return methods[unit].call(this, ... args, asNumber);
            } else {
                return methods[unit].call(this, ... args);
            }

        });

    }

    patch(lib.Config.prototype, `free`, function () {

        // Since we handle the memory allocation ourselves (via lib.Config.create), we also need to handle the deallocation

	lib.Config.destroy(this);

    });

    patch(lib.Node, `create`, function (_, config) {

        // We decide the constructor we want to call depending on the parameters

        return config ? lib.Node.createWithConfig(config) : lib.Node.createDefault();

    });

    patch(lib.Node.prototype, `free`, function () {

        // Since we handle the memory allocation ourselves (via lib.Node.create), we also need to handle the deallocation

        lib.Node.destroy(this);

    });

    patch(lib.Node.prototype, `freeRecursive`, function () {

        for (let t = 0, T = this.getChildCount(); t < T; ++t)
            this.getChild(0).freeRecursive();

        this.free();

    });

    patch(lib.Node.prototype, `setMeasureFunc`, function (original, measureFunc) {

        // This patch is just a convenience patch, since it helps write more idiomatic source code (such as .setMeasureFunc(null))
        // We also automatically convert the return value of the measureFunc to a Size object, so that we can return anything that has .width and .height properties

        if (measureFunc) {
            return original.call(this, (... args) => Size.fromJS(measureFunc(... args)));
        } else {
            return this.unsetMeasureFunc();
        }

    });

    patch(lib.Node.prototype, `calculateLayout`, function (original, width = constants.UNDEFINED, height = constants.UNDEFINED, direction = constants.DIRECTION_LTR) {

        // Just a small patch to add support for the function default parameters

        return original.call(this, width, height, direction);

    });

    function getInstanceCount(... args) {

        return lib.getInstanceCount(... args);

    }

    bind(`Layout`, Layout);
    bind(`Size`, Size);
    bind(`Value`, Value);

    return Object.assign({

	Config: lib.Config,
        Node: lib.Node,

        Layout,
        Size,
        Value,

        getInstanceCount

    }, constants);

};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(3)
var ieee754 = __webpack_require__(5)
var isArray = __webpack_require__(6)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = {

  ALIGN_COUNT: 8,
  ALIGN_AUTO: 0,
  ALIGN_FLEX_START: 1,
  ALIGN_CENTER: 2,
  ALIGN_FLEX_END: 3,
  ALIGN_STRETCH: 4,
  ALIGN_BASELINE: 5,
  ALIGN_SPACE_BETWEEN: 6,
  ALIGN_SPACE_AROUND: 7,

  DIMENSION_COUNT: 2,
  DIMENSION_WIDTH: 0,
  DIMENSION_HEIGHT: 1,

  DIRECTION_COUNT: 3,
  DIRECTION_INHERIT: 0,
  DIRECTION_LTR: 1,
  DIRECTION_RTL: 2,

  DISPLAY_COUNT: 2,
  DISPLAY_FLEX: 0,
  DISPLAY_NONE: 1,

  EDGE_COUNT: 9,
  EDGE_LEFT: 0,
  EDGE_TOP: 1,
  EDGE_RIGHT: 2,
  EDGE_BOTTOM: 3,
  EDGE_START: 4,
  EDGE_END: 5,
  EDGE_HORIZONTAL: 6,
  EDGE_VERTICAL: 7,
  EDGE_ALL: 8,

  EXPERIMENTAL_FEATURE_COUNT: 1,
  EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,

  FLEX_DIRECTION_COUNT: 4,
  FLEX_DIRECTION_COLUMN: 0,
  FLEX_DIRECTION_COLUMN_REVERSE: 1,
  FLEX_DIRECTION_ROW: 2,
  FLEX_DIRECTION_ROW_REVERSE: 3,

  JUSTIFY_COUNT: 5,
  JUSTIFY_FLEX_START: 0,
  JUSTIFY_CENTER: 1,
  JUSTIFY_FLEX_END: 2,
  JUSTIFY_SPACE_BETWEEN: 3,
  JUSTIFY_SPACE_AROUND: 4,

  LOG_LEVEL_COUNT: 6,
  LOG_LEVEL_ERROR: 0,
  LOG_LEVEL_WARN: 1,
  LOG_LEVEL_INFO: 2,
  LOG_LEVEL_DEBUG: 3,
  LOG_LEVEL_VERBOSE: 4,
  LOG_LEVEL_FATAL: 5,

  MEASURE_MODE_COUNT: 3,
  MEASURE_MODE_UNDEFINED: 0,
  MEASURE_MODE_EXACTLY: 1,
  MEASURE_MODE_AT_MOST: 2,

  NODE_TYPE_COUNT: 2,
  NODE_TYPE_DEFAULT: 0,
  NODE_TYPE_TEXT: 1,

  OVERFLOW_COUNT: 3,
  OVERFLOW_VISIBLE: 0,
  OVERFLOW_HIDDEN: 1,
  OVERFLOW_SCROLL: 2,

  POSITION_TYPE_COUNT: 2,
  POSITION_TYPE_RELATIVE: 0,
  POSITION_TYPE_ABSOLUTE: 1,

  PRINT_OPTIONS_COUNT: 3,
  PRINT_OPTIONS_LAYOUT: 1,
  PRINT_OPTIONS_STYLE: 2,
  PRINT_OPTIONS_CHILDREN: 4,

  UNIT_COUNT: 4,
  UNIT_UNDEFINED: 0,
  UNIT_POINT: 1,
  UNIT_PERCENT: 2,
  UNIT_AUTO: 3,

  WRAP_COUNT: 3,
  WRAP_NO_WRAP: 0,
  WRAP_WRAP: 1,
  WRAP_WRAP_REVERSE: 2,

};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var nbind = __webpack_require__(1);

var ran = false;
var ret = null;

nbind({}, function (err, result) {

    if (ran)
        return;

    ran = true;

    if (err)
        throw err;

    ret = result;

});

if (!ran)
    throw new Error('Failed to load the yoga module - it needed to be loaded synchronously, but didn\'t');

module.exports = __webpack_require__(2)(ret.bind, ret.lib);


/***/ })
/******/ ]);
});