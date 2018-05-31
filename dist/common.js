webpackJsonp([6],{/***/
1734:/***/
function(e,t,n){e.exports=n(242)},/***/
242:/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){var n,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(t,n){"object"===i(e)&&"object"===i(e.exports)?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:void 0,function(o,a){function s(e,t,n){t=t||fe;var r,i=t.createElement("script");if(i.text=e,n)for(r in Se)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function u(e){return null==e?e+"":"object"===(void 0===e?"undefined":i(e))||"function"==typeof e?ye[me.call(e)]||"object":void 0===e?"undefined":i(e)}function l(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=u(e);return!Ce(e)&&!Ee(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function c(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}
// Implement the identical functionality for filter and not
function f(e,t,n){
// Single element
// Arraylike of elements (jQuery, arguments, Array)
return Ce(t)?ke.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?ke.grep(e,function(e){return e===t!==n}):"string"!=typeof t?ke.grep(e,function(e){return ve.call(t,e)>-1!==n}):ke.filter(t,e,n)}function p(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}
// Convert String-formatted options into Object-formatted ones
function d(e){var t={};return ke.each(e.match(Re)||[],function(e,n){t[n]=!0}),t}function h(e){return e}function g(e){throw e}function v(e,t,n,r){var i;try{
// Check for promise aspect first to privilege synchronous behavior
e&&Ce(i=e.promise)?i.call(e).done(t).fail(n):e&&Ce(i=e.then)?i.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(r))}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
// The ready event handler and self cleanup method
function y(){fe.removeEventListener("DOMContentLoaded",y),o.removeEventListener("load",y),ke.ready()}
// Used by camelCase as callback to replace()
function m(e,t){return t.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function x(e){return e.replace(Be,"ms-").replace(Fe,m)}function b(){this.expando=ke.expando+b.uid++}function w(e){
// Only convert to a number if it doesn't change the string
return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Ue.test(e)?JSON.parse(e):e)}function T(e,t,n){var r;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Ve,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=w(n)}catch(e){}
// Make sure we set the data so it isn't changed later
Xe.set(e,t,n)}else n=void 0;return n}function C(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ke.css(e,t,"")},u=s(),l=n&&n[3]||(ke.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(ke.cssNumber[t]||"px"!==l&&+u)&&Ye.exec(ke.css(e,t));if(c&&c[3]!==l){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
u/=2,
// Trust units reported by jQuery.css
l=l||c[3],
// Iteratively approximate from a nonzero starting point
c=+u||1;a--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
ke.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ke.style(e,t,c+l),
// Make sure we update the tween properties later on
n=n||[]}
// Apply relative offset (+=/-=) if specified
return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function E(e){var t,n=e.ownerDocument,r=e.nodeName,i=Ze[r];return i||(t=n.body.appendChild(n.createElement(r)),i=ke.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Ze[r]=i,i)}function S(e,t){
// Determine new display value for elements that need to change
for(var n,r,i=[],o=0,a=e.length;o<a;o++)r=e[o],r.style&&(n=r.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(i[o]=ze.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Je(r)&&(i[o]=E(r))):"none"!==n&&(i[o]="none",
// Remember what we're overwriting
ze.set(r,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function k(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&c(e,t)?ke.merge([e],n):n}
// Mark scripts as having already been evaluated
function D(e,t){for(var n=0,r=e.length;n<r;n++)ze.set(e[n],"globalEval",!t||ze.get(t[n],"globalEval"))}function N(e,t,n,r,i){for(var o,a,s,l,c,f,p=t.createDocumentFragment(),d=[],h=0,g=e.length;h<g;h++)if((o=e[h])||0===o)
// Add nodes directly
if("object"===u(o))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ke.merge(d,o.nodeType?[o]:o);else if(it.test(o)){for(a=a||p.appendChild(t.createElement("div")),
// Deserialize a standard representation
s=(tt.exec(o)||["",""])[1].toLowerCase(),l=rt[s]||rt._default,a.innerHTML=l[1]+ke.htmlPrefilter(o)+l[2],
// Descend through wrappers to the right content
f=l[0];f--;)a=a.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ke.merge(d,a.childNodes),
// Remember the top-level container
a=p.firstChild,
// Ensure the created nodes are orphaned (#12392)
a.textContent=""}else d.push(t.createTextNode(o));for(
// Remove wrapper from fragment
p.textContent="",h=0;o=d[h++];)
// Skip elements already in the context collection (trac-4087)
if(r&&ke.inArray(o,r)>-1)i&&i.push(o);else
// Capture executables
if(c=ke.contains(o.ownerDocument,o),
// Append to fragment
a=k(p.appendChild(o),"script"),
// Preserve script evaluation history
c&&D(a),n)for(f=0;o=a[f++];)nt.test(o.type||"")&&n.push(o);return p}function A(){return!0}function j(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function q(){try{return fe.activeElement}catch(e){}}function L(e,t,n,r,o,a){var s,u;
// Types can be a map of types/handlers
if("object"===(void 0===t?"undefined":i(t))){
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
r=r||n,n=void 0);for(u in t)L(e,u,n,r,t[u],a);return e}if(null==r&&null==o?(
// ( types, fn )
o=n,r=n=void 0):null==o&&("string"==typeof n?(
// ( types, selector, fn )
o=r,r=void 0):(
// ( types, data, fn )
o=r,r=n,n=void 0)),!1===o)o=j;else if(!o)return e;
// Use same guid so caller can remove using origFn
return 1===a&&(s=o,o=function(e){
// Can use an empty set, since event contains the info
return ke().off(e),s.apply(this,arguments)},o.guid=s.guid||(s.guid=ke.guid++)),e.each(function(){ke.event.add(this,t,o,r,n)})}
// Prefer a tbody over its parent table for containing new rows
function H(e,t){return c(e,"table")&&c(11!==t.nodeType?t:t.firstChild,"tr")?ke(e).children("tbody")[0]||e:e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function O(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function P(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function M(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(ze.hasData(e)&&(o=ze.access(e),a=ze.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)ke.event.add(t,i,l[i][n])}
// 2. Copy user data
Xe.hasData(e)&&(s=Xe.access(e),u=ke.extend({},s),Xe.set(t,u))}}
// Fix IE bugs, see support tests
function R(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&et.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function I(e,t,n,r){
// Flatten any nested arrays
t=he.apply([],t);var i,o,a,u,l,c,f=0,p=e.length,d=p-1,h=t[0],g=Ce(h);
// We can't cloneNode fragments that contain checked, in WebKit
if(g||p>1&&"string"==typeof h&&!Te.checkClone&&ft.test(h))return e.each(function(i){var o=e.eq(i);g&&(t[0]=h.call(this,i,o.html())),I(o,t,n,r)});if(p&&(i=N(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(a=ke.map(k(i,"script"),O),u=a.length;f<p;f++)l=i,f!==d&&(l=ke.clone(l,!0,!0),
// Keep references to cloned scripts for later restoration
u&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ke.merge(a,k(l,"script"))),n.call(e[f],l,f);if(u)
// Evaluate executable scripts on first document insertion
for(c=a[a.length-1].ownerDocument,
// Reenable scripts
ke.map(a,P),f=0;f<u;f++)l=a[f],nt.test(l.type||"")&&!ze.access(l,"globalEval")&&ke.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
ke._evalUrl&&ke._evalUrl(l.src):s(l.textContent.replace(pt,""),c,l))}return e}function W(e,t,n){for(var r,i=t?ke.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ke.cleanData(k(r)),r.parentNode&&(n&&ke.contains(r.ownerDocument,r)&&D(k(r,"script")),r.parentNode.removeChild(r));return e}function $(e,t,n){var r,i,o,a,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
s=e.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return n=n||ht(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||ke.contains(e.ownerDocument,e)||(a=ke.style(e,t)),!Te.pixelBoxStyles()&&dt.test(a)&&gt.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function B(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function F(e){
// Shortcut for names that are not vendor prefixed
if(e in wt)return e;for(
// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=bt.length;n--;)if((e=bt[n]+t)in wt)return e}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function _(e){var t=ke.cssProps[e];return t||(t=ke.cssProps[e]=F(e)||e),t}function z(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var r=Ye.exec(t);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function X(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;
// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)
// Both box models exclude margin
"margin"===n&&(u+=ke.css(e,n+Qe[a],!0,i)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
r?(
// For "content", subtract padding
"content"===n&&(u-=ke.css(e,"padding"+Qe[a],!0,i)),
// For "content" or "padding", subtract border
"margin"!==n&&(u-=ke.css(e,"border"+Qe[a]+"Width",!0,i))):(
// Add padding
u+=ke.css(e,"padding"+Qe[a],!0,i),
// For "border" or "margin", add border
"padding"!==n?u+=ke.css(e,"border"+Qe[a]+"Width",!0,i):s+=ke.css(e,"border"+Qe[a]+"Width",!0,i));
// Account for positive content-box scroll gutter when requested by providing computedVal
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function U(e,t,n){
// Start with computed style
var r=ht(e),i=$(e,t,r),o="border-box"===ke.css(e,"boxSizing",!1,r),a=o;
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(dt.test(i)){if(!n)return i;i="auto"}
// Adjust for the element's box model
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
// offsetWidth/offsetHeight provide border-box values
// Normalize "" and auto
// Provide the current computed size to request scroll gutter calculation (gh-3589)
return a=a&&(Te.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===ke.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+X(e,t,n||(o?"border":"content"),a,r,i)+"px"}function V(e,t,n,r,i){return new V.prototype.init(e,t,n,r,i)}function G(){Ct&&(!1===fe.hidden&&o.requestAnimationFrame?o.requestAnimationFrame(G):o.setTimeout(G,ke.fx.interval),ke.fx.tick())}
// Animations created synchronously will run synchronously
function Y(){return o.setTimeout(function(){Tt=void 0}),Tt=Date.now()}
// Generate parameters to create a standard animation
function Q(e,t){var n,r=0,i={height:e};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)n=Qe[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function J(e,t,n){for(var r,i=(ee.tweeners[t]||[]).concat(ee.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))
// We're done with this property
return r}function K(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&Je(e),v=ze.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
n.queue||(a=ke._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){
// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,ke.queue(e,"fx").length||a.empty.fire()})}));
// Detect show/hide animations
for(r in t)if(i=t[r],Et.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ke.style(e,r)}if((
// Bail out if this is a no-op like .hide().hide()
u=!ke.isEmptyObject(t))||!ke.isEmptyObject(d)){
// Restrict "overflow" and "display" styles during box animations
f&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
l=v&&v.display,null==l&&(l=ze.get(e,"display")),c=ke.css(e,"display"),"none"===c&&(l?c=l:(
// Get nonempty value(s) by temporarily forcing visibility
S([e],!0),l=e.style.display||l,c=ke.css(e,"display"),S([e]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=l)&&"none"===ke.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),
// Implement show/hide animations
u=!1;for(r in d)
// General show/hide setup for this element animation
u||(v?"hidden"in v&&(g=v.hidden):v=ze.access(e,"fxshow",{display:l}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
o&&(v.hidden=!g),
// Show elements before animating them
g&&S([e],!0),/* eslint-disable no-loop-func */
p.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
g||S([e]),ze.remove(e,"fxshow");for(r in d)ke.style(e,r,d[r])})),
// Per-property setup
u=J(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}}function Z(e,t){var n,r,i,o,a;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=x(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ke.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function ee(e,t,n){var r,i,o=0,a=ee.prefilters.length,s=ke.Deferred().always(function(){
// Don't match elem in the :animated selector
delete u.elem}),u=function(){if(i)return!1;for(var t=Tt||Y(),n=Math.max(0,l.startTime+l.duration-t),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);
// If there's more to do, yield
// If there's more to do, yield
// If this was an empty animation, synthesize a final progress notification
// Resolve the animation and report its conclusion
return s.notifyWith(e,[l,o,n]),o<1&&u?n:(u||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ke.extend({},t),opts:ke.extend(!0,{specialEasing:{},easing:ke.easing._default},n),originalProperties:t,originalOptions:n,startTime:Tt||Y(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ke.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(Z(c,l.opts.specialEasing);o<a;o++)if(r=ee.prefilters[o].call(l,e,c,l.opts))return Ce(r.stop)&&(ke._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;
// Attach callbacks from options
return ke.map(c,J,l),Ce(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ke.fx.timer(ke.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function te(e){return(e.match(Re)||[]).join(" ")}function ne(e){return e.getAttribute&&e.getAttribute("class")||""}function re(e){return Array.isArray(e)?e:"string"==typeof e?e.match(Re)||[]:[]}function ie(e,t,n,r){var o;if(Array.isArray(t))
// Serialize array item.
ke.each(t,function(t,o){n||Mt.test(e)?
// Treat each array item as a scalar.
r(e,o):
// Item is non-scalar (array or object), encode its numeric index.
ie(e+"["+("object"===(void 0===o?"undefined":i(o))&&null!=o?t:"")+"]",o,n,r)});else if(n||"object"!==u(t))
// Serialize scalar item.
r(e,t);else
// Serialize object item.
for(o in t)ie(e+"["+o+"]",t[o],n,r)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function oe(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Re)||[];if(Ce(n))
// For each dataType in the dataTypeExpression
for(;r=o[i++];)
// Prepend if requested
"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}
// Base inspection function for prefilters and transports
function ae(e,t,n,r){function i(s){var u;return o[s]=!0,ke.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Gt;return i(t.dataTypes[0])||!o["*"]&&i("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function se(e,t){var n,r,i=ke.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ke.extend(!0,e,r),e}/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
function ue(e,t,n){
// Remove auto dataType and get content-type in the process
for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}
// Check to see if we have a response for the expected dataType
if(u[0]in n)o=u[0];else{
// Try convertible dataTypes
for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}
// Or just use first one
o=o||a}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==u[0]&&u.unshift(o),n[o]}/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
function le(e,t,n,r){var i,o,a,s,u,l={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];
// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),
// Apply the dataFilter if provided
!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=u;else if("*"!==u&&u!==o){
// If none found, seek a pair
if(!(
// Seek a direct converter
a=l[u+" "+o]||l["* "+o]))for(i in l)if(
// If conv2 outputs current
s=i.split(" "),s[1]===o&&(
// If prev can be converted to accepted input
a=l[u+" "+s[0]]||l["* "+s[0]])){
// Condense equivalence converters
!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}
// Apply converter (if not an equivalence)
if(!0!==a)
// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}var ce=[],fe=o.document,pe=Object.getPrototypeOf,de=ce.slice,he=ce.concat,ge=ce.push,ve=ce.indexOf,ye={},me=ye.toString,xe=ye.hasOwnProperty,be=xe.toString,we=be.call(Object),Te={},Ce=function(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},Ee=function(e){return null!=e&&e===e.window},Se={type:!0,src:!0,noModule:!0},
// Define a local copy of jQuery
ke=function e(t,n){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new e.fn.init(t,n)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
De=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;ke.fn=ke.prototype={
// The current version of jQuery being used
jquery:"3.3.1",constructor:ke,
// The default length of a jQuery object is 0
length:0,toArray:function(){return de.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
// Return all the elements in a clean array
return null==e?de.call(this):e<0?this[e+this.length]:this[e]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=ke.merge(this.constructor(),e);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return ke.each(this,e)},map:function(e){return this.pushStack(ke.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(de.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ge,sort:ce.sort,splice:ce.splice},ke.extend=ke.fn.extend=function(){var e,t,n,r,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for(
// Handle a deep copy situation
"boolean"==typeof s&&(c=s,
// Skip the boolean and the target
s=arguments[u]||{},u++),
// Handle case when target is a string or something (possible in deep copy)
"object"===(void 0===s?"undefined":i(s))||Ce(s)||(s={}),
// Extend jQuery itself if only one argument is passed
u===l&&(s=this,u--);u<l;u++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[u]))
// Extend the base object
for(t in e)n=s[t],r=e[t],
// Prevent never-ending loop
s!==r&&(
// Recurse if we're merging plain objects or arrays
c&&r&&(ke.isPlainObject(r)||(o=Array.isArray(r)))?(o?(o=!1,a=n&&Array.isArray(n)?n:[]):a=n&&ke.isPlainObject(n)?n:{},
// Never move original objects, clone them
s[t]=ke.extend(c,a,r)):void 0!==r&&(s[t]=r));
// Return the modified object
return s},ke.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!e||"[object Object]"!==me.call(e))&&(!(t=pe(e))||"function"==typeof(n=xe.call(t,"constructor")&&t.constructor)&&be.call(n)===we)},isEmptyObject:function(e){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(e){s(e)},each:function(e,t){var n,r=0;if(l(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(De,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(l(Object(e))?ke.merge(n,"string"==typeof e?[e]:e):ge.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ve.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},
// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,a=[];
// Go through the array, translating each of the items to their new values
if(l(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);
// Flatten any nested arrays
return he.apply([],a)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:Te}),"function"==typeof Symbol&&(ke.fn[Symbol.iterator]=ce[Symbol.iterator]),
// Populate the class2type map
ke.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ye["[object "+t+"]"]=t.toLowerCase()});var Ne=/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
function(e){function t(e,t,n,r){var i,o,a,s,u,c,p,d=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
h=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&((t?t.ownerDocument||t:W)!==q&&j(t),t=t||q,H)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==h&&(u=ge.exec(e)))
// ID selector
if(i=u[1]){
// Document context
if(9===h){if(!(a=t.getElementById(i)))return n;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===i)return n.push(a),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(d&&(a=d.getElementById(i))&&R(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&b.getElementsByClassName&&t.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(i)),n}
// Take advantage of querySelectorAll
if(b.qsa&&!z[e+" "]&&(!O||!O.test(e))){if(1!==h)d=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(s=t.getAttribute("id"))?s=s.replace(xe,be):t.setAttribute("id",s=I),
// Prefix every selector in the list
c=E(e),o=c.length;o--;)c[o]="#"+s+" "+f(c[o]);p=c.join(","),
// Expand context for sibling selectors
d=ve.test(e)&&l(t.parentNode)||t}if(p)try{return Q.apply(n,d.querySelectorAll(p)),n}catch(e){}finally{s===I&&t.removeAttribute("id")}}}
// All others
return k(e.replace(oe,"$1"),t,n,r)}/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
function n(){function e(n,r){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
function r(e){return e[I]=!0,e}/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
function i(e){var t=q.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
function o(e,t){for(var n=e.split("|"),r=n.length;r--;)w.attrHandle[n[r]]=t}/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(r)return r;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
function s(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
// Option elements defer to a parent optgroup if present
// Where there is no isDisabled, check manually
/* jshint -W018 */
return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Te(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
function u(e){return r(function(t){return t=+t,r(function(n,r){
// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
function l(e){return e&&void 0!==e.getElementsByTagName&&e}
// Easy API for creating new setFilters
function c(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=B++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[$,s];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[I]||(t[I]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===$&&l[1]===s)
// Assign to newCache so results back-propagate to previous elements
return p[2]=l[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function h(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function v(e,t,n,i,o,a){return i&&!i[I]&&(i=v(i)),o&&!o[I]&&(o=v(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],v=a.length,
// Get initial elements from seed or context
y=r||h(t||"*",s.nodeType?[s]:s,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
m=!e||!r&&t?y:g(y,p,e,s,u),x=n?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
o||(r?e:v||i)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
a:m;
// Apply postFilter
if(
// Find primary matches
n&&n(m,x,s,u),i)for(l=g(x,d),i(l,[],s,u),
// Un-match failing elements by moving them back to matcherIn
c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(m[d[c]]=f));if(r){if(o||e){if(o){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
l=[],c=x.length;c--;)(f=x[c])&&
// Restore matcherIn since elem is not yet a final match
l.push(m[c]=f);o(null,x=[],l,u)}for(
// Move matched elements from seed to results to keep them synchronized
c=x.length;c--;)(f=x[c])&&(l=o?K(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=g(x===a?x.splice(v,x.length):x),o?o(null,a,x,u):Q.apply(a,x)})}function y(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
u=p(function(e){return e===t},a,!0),l=p(function(e){return K(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):l(e,n,r));
// Avoid hanging onto element (issue #299)
return t=null,i}];s<i;s++)if(n=w.relative[e[s].type])c=[p(d(c),n)];else{
// Return special upon seeing a positional matcher
if(n=w.filter[e[s].type].apply(null,e[s].matches),n[I]){for(
// Find the next relative operator (if any) for proper handling
r=++s;r<i&&!w.relative[e[r].type];r++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return v(s>1&&d(c),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(oe,"$1"),n,s<r&&y(e.slice(s,r)),r<i&&y(e=e.slice(r)),r<i&&f(e))}c.push(n)}return d(c)}function m(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",v=r&&[],y=[],m=D,
// We must always have either seed elements or outermost context
x=r||o&&w.find.TAG("*",l),
// Use integer dirruns iff this is the outermost matcher
b=$+=null==m?1:Math.random()||.1,T=x.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(l&&(D=a===q||a||l);h!==T&&null!=(c=x[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===q||(j(c),s=!H);p=e[f++];)if(p(c,a||q,s)){u.push(c);break}l&&($=b)}
// Track unmatched elements for set filters
i&&(
// They will have gone through all possible matchers
(c=!p&&c)&&d--,
// Lengthen the array for every element, matched or not
r&&v.push(c))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
d+=h,i&&h!==d){for(f=0;p=n[f++];)p(v,y,a,s);if(r){
// Reintegrate element matches to eliminate the need for sorting
if(d>0)for(;h--;)v[h]||y[h]||(y[h]=G.call(u));
// Discard index placeholder values to get only actual matches
y=g(y)}
// Add matches to results
Q.apply(u,y),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
l&&!r&&y.length>0&&d+n.length>1&&t.uniqueSort(u)}
// Override manipulation of globals by nested matchers
return l&&($=b,D=m),v};return i?r(a):a}var x,b,w,T,C,E,S,k,D,N,A,
// Local document vars
j,q,L,H,O,P,M,R,
// Instance-specific data
I="sizzle"+1*new Date,W=e.document,$=0,B=0,F=n(),_=n(),z=n(),X=function(e,t){return e===t&&(A=!0),0},
// Instance methods
U={}.hasOwnProperty,V=[],G=V.pop,Y=V.push,Q=V.push,J=V.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
K=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ee="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
te="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ne="\\["+ee+"*("+te+")(?:"+ee+
// Operator (capture 2)
"*([*^$|!~]?=)"+ee+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+te+"))|)"+ee+"*\\]",re=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ne+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ie=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ue=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),le=new RegExp(re),ce=new RegExp("^"+te+"$"),fe={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,de=/^h\d$/i,he=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ye=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),me=function(e,t,n){var r="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,be=function(e,t){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
we=function(){j()},Te=p(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Q.apply(V=J.call(W.childNodes),W.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
V[W.childNodes.length].nodeType}catch(e){Q={apply:V.length?
// Leverage slice if possible
function(e,t){Y.apply(e,J.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}
// Expose support vars for convenience
b=t.support={},/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
C=t.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
j=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:W;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
   ---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
   ---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID filter and find
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
   ---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
   ---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
   ---------------------------------------------------------------------- */
// Document order sorting
return r!==q&&9===r.nodeType&&r.documentElement?(q=r,L=q.documentElement,H=!C(q),W!==q&&(n=q.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",we,!1):n.attachEvent&&n.attachEvent("onunload",we)),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(q.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=he.test(q.getElementsByClassName),b.getById=i(function(e){return L.appendChild(e).id=I,!q.getElementsByName||!q.getElementsByName(I).length}),b.getById?(w.filter.ID=function(e){var t=e.replace(ye,me);return function(e){return e.getAttribute("id")===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&H){var n=t.getElementById(e);return n?[n]:[]}}):(w.filter.ID=function(e){var t=e.replace(ye,me);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&H){var n,r,i,o=t.getElementById(e);if(o){if((
// Verify the id attribute
n=o.getAttributeNode("id"))&&n.value===e)return[o];for(
// Fall back on getElementsByName
i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),w.find.TAG=b.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);
// Filter out possible comments
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=b.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&H)return t.getElementsByClassName(e)},P=[],O=[],(b.qsa=he.test(q.querySelectorAll))&&(i(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
L.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&O.push("[*^$]="+ee+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||O.push("\\["+ee+"*(?:value|"+Z+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+I+"-]").length||O.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||O.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+I+"+*").length||O.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=q.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&O.push("name"+ee+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&O.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
L.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&O.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),O.push(",.*:")})),(b.matchesSelector=he.test(M=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&i(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
b.disconnectedMatch=M.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
M.call(e,"[s!='']:x"),P.push("!=",re)}),O=O.length&&new RegExp(O.join("|")),P=P.length&&new RegExp(P.join("|")),t=he.test(L.compareDocumentPosition),R=t||he.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=t?function(e,t){
// Flag for duplicate removal
if(e===t)return A=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===q||e.ownerDocument===W&&R(W,e)?-1:t===q||t.ownerDocument===W&&R(W,t)?1:N?K(N,e)-K(N,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return A=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];
// Parentless nodes are either documents or disconnected
if(!i||!o)return e===q?-1:t===q?1:i?-1:o?1:N?K(N,e)-K(N,t):0;if(i===o)return a(e,t);for(
// Otherwise we need full lists of their ancestors for comparison
n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);
// Walk down the tree looking for a discrepancy
for(;s[r]===u[r];)r++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return r?a(s[r],u[r]):s[r]===W?-1:u[r]===W?1:0},q):q},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(
// Set document vars if needed
(e.ownerDocument||e)!==q&&j(e),
// Make sure that attribute selectors are quoted
n=n.replace(ue,"='$1']"),b.matchesSelector&&H&&!z[n+" "]&&(!P||!P.test(n))&&(!O||!O.test(n)))try{var r=M.call(e,n);
// IE 9's matchesSelector returns false on disconnected nodes
if(r||b.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,q,null,[e]).length>0},t.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==q&&j(e),R(e,t)},t.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==q&&j(e);var n=w.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
r=n&&U.call(w.attrHandle,t.toLowerCase())?n(e,t,!H):void 0;return void 0!==r?r:b.attributes||!H?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(xe,be)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(
// Unless we *know* we can detect duplicates, assume their presence
A=!b.detectDuplicates,N=!b.sortStable&&e.slice(0),e.sort(X),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return N=null,e},/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
T=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===i||4===i)return e.nodeValue}else
// If no nodeType, this is expected to be an array
for(;t=e[r++];)
// Do not traverse comment nodes
n+=T(t);
// Do not include comment or processing instruction nodes
return n},w=t.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:r,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){
// Move the given value to match[3] whether quoted or unquoted
return e[1]=e[1].replace(ye,me),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,me),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ye,me).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=F[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&F(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ie," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
// Shortcut for :nth-*(n)
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(v){
// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
h=g="only"===e&&!h&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(h=[a?v.firstChild:v.lastChild],a&&m){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
p=v,f=p[I]||(p[I]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===$&&l[1],x=d&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(
// Fallback to seeking `elem` from the start
x=d=0)||h.pop();)
// When found, cache indexes on `parent` and break
if(1===p.nodeType&&++x&&p===t){c[e]=[$,d,x];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
m&&(
// ...in a gzip-friendly way
p=t,f=p[I]||(p[I]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===$&&l[1],x=d),!1===x)
// Use the same loop as above to seek `elem` from the start
for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++x||(
// Cache the index of each encountered element
m&&(f=p[I]||(p[I]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[$,x]),p!==t)););
// Incorporate the offset, then check against cycle size
return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,n){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,o=w.pseudos[e]||w.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return o[I]?o(n):o.length>1?(i=[e,e,"",n],w.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=K(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{
// Potentially complex pseudos
not:r(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=S(e.replace(oe,"$1"));return i[I]?r(function(e,t,n,r){
// Match elements unmatched by `matcher`
for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){
// Don't keep the element (issue #299)
return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(ye,me),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:r(function(e){
// lang value must be a valid identifier
return ce.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ye,me).toLowerCase(),function(t){var n;do{if(n=H?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:s(!1),disabled:s(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},
// Element/input types
header:function(e){return de.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[n<0?n+t:n]}),even:u(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},w.pseudos.nth=w.pseudos.eq;
// Add button/input type pseudos
for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[x]=/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(x);for(x in{submit:!0,reset:!0})w.pseudos[x]=/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(x);/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return c.prototype=w.filters=w.pseudos,w.setFilters=new c,E=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=_[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=w.preFilter;s;){
// Comma and first run
r&&!(i=ae.exec(s))||(i&&(
// Don't consume trailing commas as valid
s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,
// Combinators
(i=se.exec(s))&&(r=i.shift(),o.push({value:r,
// Cast descendant combinators to space
type:i[0].replace(oe," ")}),s=s.slice(r.length));
// Filters
for(a in w.filter)!(i=fe[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return n?s.length:s?t.error(e):_(e,u).slice(0)},S=t.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=E(e)),n=t.length;n--;)o=y(t[n]),o[I]?r.push(o):i.push(o);
// Cache the compiled function
o=z(e,m(i,r)),
// Save selector and tokenization
o.selector=e}return o},k=t.select=function(e,t,n,r){var i,o,a,s,u,c="function"==typeof e&&e,p=!r&&E(e=c.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===p.length){if(
// Reduce context if the leading compound selector is an ID
o=p[0]=p[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&H&&w.relative[o[1].type]){if(!(t=(w.find.ID(a.matches[0].replace(ye,me),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
i=fe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((u=w.find[s])&&(r=u(a.matches[0].replace(ye,me),ve.test(o[0].type)&&l(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(i,1),!(e=r.length&&f(o)))return Q.apply(n,r),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(c||S(e,p))(r,t,!H,n,!t||ve.test(e)&&l(t.parentNode)||t),n},b.sortStable=I.split("").sort(X).join("")===I,b.detectDuplicates=!!A,j(),b.sortDetached=i(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(q.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(o);ke.find=Ne,ke.expr=Ne.selectors,
// Deprecated
ke.expr[":"]=ke.expr.pseudos,ke.uniqueSort=ke.unique=Ne.uniqueSort,ke.text=Ne.getText,ke.isXMLDoc=Ne.isXML,ke.contains=Ne.contains,ke.escapeSelector=Ne.escape;var Ae=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&ke(e).is(n))break;r.push(e)}return r},je=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},qe=ke.expr.match.needsContext,Le=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;ke.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ke.find.matchesSelector(r,e)?[r]:[]:ke.find.matches(e,ke.grep(t,function(e){return 1===e.nodeType}))},ke.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ke(e).filter(function(){for(t=0;t<r;t++)if(ke.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ke.find(e,i[t],n);return r>1?ke.uniqueSort(n):n},filter:function(e){return this.pushStack(f(this,e||[],!1))},not:function(e){return this.pushStack(f(this,e||[],!0))},is:function(e){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!f(this,"string"==typeof e&&qe.test(e)?ke(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var He,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Oe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
// Give the init function the jQuery prototype for later instantiation
(ke.fn.init=function(e,t,n){var r,i;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||He,"string"==typeof e){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Oe.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(html) -> $(array)
if(r[1]){
// HANDLE: $(html, props)
if(t=t instanceof ke?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
ke.merge(this,ke.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:fe,!0)),Le.test(r[1])&&ke.isPlainObject(t))for(r in t)
// Properties of context are called as methods if possible
Ce(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}
// Inject the element directly into the jQuery object
return i=fe.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}
// Execute immediately if ready is not present
return e.nodeType?(this[0]=e,this.length=1,this):Ce(e)?void 0!==n.ready?n.ready(e):e(ke):ke.makeArray(e,this)}).prototype=ke.fn,
// Initialize central reference
He=ke(fe);var Pe=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Me={children:!0,contents:!0,next:!0,prev:!0};ke.fn.extend({has:function(e){var t=ke(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ke.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ke(e);
// Positional selectors never match, since there's no _selection_ context
if(!qe.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(a?a.index(n)>-1:
// Don't pass non-elements to Sizzle
1===n.nodeType&&ke.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ke.uniqueSort(o):o)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?ve.call(ke(e),this[0]):ve.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ke.uniqueSort(ke.merge(this.get(),ke(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ke.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Ae(e,"parentNode")},parentsUntil:function(e,t,n){return Ae(e,"parentNode",n)},next:function(e){return p(e,"nextSibling")},prev:function(e){return p(e,"previousSibling")},nextAll:function(e){return Ae(e,"nextSibling")},prevAll:function(e){return Ae(e,"previousSibling")},nextUntil:function(e,t,n){return Ae(e,"nextSibling",n)},prevUntil:function(e,t,n){return Ae(e,"previousSibling",n)},siblings:function(e){return je((e.parentNode||{}).firstChild,e)},children:function(e){return je(e.firstChild)},contents:function(e){
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
return c(e,"iframe")?e.contentDocument:(c(e,"template")&&(e=e.content||e),ke.merge([],e.childNodes))}},function(e,t){ke.fn[e]=function(n,r){var i=ke.map(this,t,n);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ke.filter(r,i)),this.length>1&&(Me[e]||ke.uniqueSort(i),Pe.test(e)&&i.reverse()),this.pushStack(i)}});var Re=/[^\x20\t\r\n\f]+/g;/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
ke.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?d(e):ke.extend({},e);var// Flag to know if list is currently firing
t,
// Last fire value for non-forgettable lists
n,
// Flag to know if list was already fired
r,
// Flag to prevent firing
i,
// Actual callback list
o=[],
// Queue of execution data for repeatable lists
a=[],
// Index of currently firing callback (modified by add/remove as needed)
s=-1,
// Fire callbacks
l=function(){for(
// Enforce single-firing
i=i||e.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)
// Run callback and check for early termination
!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
s=o.length,n=!1);
// Forget the data if we're done with it
e.memory||(n=!1),t=!1,
// Clean up if we're done firing for good
i&&(
// Keep an empty list if we have data for future add calls
o=n?[]:"")},
// Actual Callbacks object
c={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){ke.each(n,function(n,r){Ce(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==u(r)&&
// Inspect recursively
t(r)})}(arguments),n&&!t&&l()),this},
// Remove a callback from the list
remove:function(){return ke.each(arguments,function(e,t){for(var n;(n=ke.inArray(t,o,n))>-1;)o.splice(n,1),
// Handle firing indexes
n<=s&&s--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?ke.inArray(e,o)>-1:o.length>0},
// Remove all callbacks from the list
empty:function(){return o&&(o=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},
// Call all callbacks with the given context and arguments
fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||l()),this},
// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!r}};return c},ke.extend({Deferred:function(e){var t=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",ke.Callbacks("memory"),ke.Callbacks("memory"),2],["resolve","done",ke.Callbacks("once memory"),ke.Callbacks("once memory"),0,"resolved"],["reject","fail",ke.Callbacks("once memory"),ke.Callbacks("once memory"),1,"rejected"]],n="pending",r={state:function(){return n},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var e=arguments;return ke.Deferred(function(n){ke.each(t,function(t,r){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var i=Ce(e[r[4]])&&e[r[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
a[r[1]](function(){var e=i&&i.apply(this,arguments);e&&Ce(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(e,n,r){function a(e,t,n,r){return function(){var u=this,l=arguments,c=function(){var o,c;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<s)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((o=n.apply(u,l))===t.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=o&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"===(void 0===o?"undefined":i(o))||"function"==typeof o)&&o.then,
// Handle a returned thenable
Ce(c)?
// Special processors (notify) just wait for resolution
r?c.call(o,a(s,t,h,r),a(s,t,g,r)):(
// ...and disregard older resolution values
s++,c.call(o,a(s,t,h,r),a(s,t,g,r),a(s,t,h,t.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
n!==h&&(u=void 0,l=[o]),
// Process the value(s)
// Default process is resolve
(r||t.resolveWith)(u,l))}},
// Only normal processors (resolve) catch and reject exceptions
f=r?c:function(){try{c()}catch(r){ke.Deferred.exceptionHook&&ke.Deferred.exceptionHook(r,f.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
e+1>=s&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
n!==g&&(u=void 0,l=[r]),t.rejectWith(u,l))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?f():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
ke.Deferred.getStackHook&&(f.stackTrace=ke.Deferred.getStackHook()),o.setTimeout(f))}}var s=0;return ke.Deferred(function(i){
// progress_handlers.add( ... )
t[0][3].add(a(0,i,Ce(r)?r:h,i.notifyWith)),
// fulfilled_handlers.add( ... )
t[1][3].add(a(0,i,Ce(e)?e:h)),
// rejected_handlers.add( ... )
t[2][3].add(a(0,i,Ce(n)?n:g))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?ke.extend(e,r):r}},a={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return ke.each(t,function(e,i){var o=i[2],s=i[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[i[1]]=o.add,
// Handle state
s&&o.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
n=s},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
t[3-e][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
t[3-e][3].disable,
// progress_callbacks.lock
t[0][2].lock,
// progress_handlers.lock
t[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
o.add(i[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
a[i[0]]=function(){return a[i[0]+"With"](this===a?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
a[i[0]+"With"]=o.fireWith}),r.promise(a),e&&e.call(a,a),a},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
t=arguments.length,
// count of unprocessed arguments
n=t,
// subordinate fulfillment data
r=Array(n),i=de.call(arguments),
// the master Deferred
o=ke.Deferred(),
// subordinate callback factory
a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?de.call(arguments):n,--t||o.resolveWith(r,i)}};
// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(v(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||Ce(i[n]&&i[n].then)))return o.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)v(i[n],a(n),o.reject);return o.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Ie=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ke.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
o.console&&o.console.warn&&e&&Ie.test(e.name)&&o.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ke.readyException=function(e){o.setTimeout(function(){throw e})};
// The deferred used on DOM ready
var We=ke.Deferred();ke.fn.ready=function(e){return We.then(e).catch(function(e){ke.readyException(e)}),this},ke.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--ke.readyWait:ke.isReady)||(
// Remember that the DOM is ready
ke.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
!0!==e&&--ke.readyWait>0||
// If there are functions bound, to execute
We.resolveWith(fe,[ke]))}}),ke.ready.then=We.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===fe.readyState||"loading"!==fe.readyState&&!fe.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
o.setTimeout(ke.ready):(
// Use the handy event callback
fe.addEventListener("DOMContentLoaded",y),
// A fallback to window.onload, that will always work
o.addEventListener("load",y));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var $e=function e(t,n,r,i,o,a,s){var l=0,c=t.length,f=null==r;
// Sets many values
if("object"===u(r)){o=!0;for(l in r)e(t,n,l,r[l],!0,a,s)}else if(void 0!==i&&(o=!0,Ce(i)||(s=!0),f&&(
// Bulk operations run against the entire set
s?(n.call(t,i),n=null):(f=n,n=function(e,t,n){return f.call(ke(e),n)})),n))for(;l<c;l++)n(t[l],r,s?i:i.call(t[l],l,n(t[l],r)));
// Gets
return o?t:f?n.call(t):c?n(t[0],r):a},Be=/^-ms-/,Fe=/-([a-z])/g,_e=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};b.uid=1,b.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return t||(t={},_e(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[x(t)]=n;else
// Copy the properties one-by-one to the cache object
for(r in t)i[x(r)]=t[r];return i},get:function(e,t){
// Always use camelCase key (gh-2257)
return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][x(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){
// Support array or space separated string of keys
Array.isArray(t)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=t.map(x):(t=x(t),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
t=t in r?[t]:t.match(Re)||[]),n=t.length;for(;n--;)delete r[t[n]]}
// Remove the expando if there's no more data
(void 0===t||ke.isEmptyObject(r))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ke.isEmptyObject(t)}};var ze=new b,Xe=new b,Ue=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ve=/[A-Z]/g;ke.extend({hasData:function(e){return Xe.hasData(e)||ze.hasData(e)},data:function(e,t,n){return Xe.access(e,t,n)},removeData:function(e,t){Xe.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return ze.access(e,t,n)},_removeData:function(e,t){ze.remove(e,t)}}),ke.fn.extend({data:function(e,t){var n,r,o,a=this[0],s=a&&a.attributes;
// Gets all values
if(void 0===e){if(this.length&&(o=Xe.get(a),1===a.nodeType&&!ze.get(a,"hasDataAttrs"))){for(n=s.length;n--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=x(r.slice(5)),T(a,r,o[r])));ze.set(a,"hasDataAttrs",!0)}return o}
// Sets multiple values
// Sets multiple values
return"object"===(void 0===e?"undefined":i(e))?this.each(function(){Xe.set(this,e)}):$e(this,function(t){var n;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(a&&void 0===t){if(void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
n=Xe.get(a,e)))return n;if(void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
n=T(a,e)))return n}else
// Set the data...
this.each(function(){
// We always store the camelCased key
Xe.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Xe.remove(this,e)})}}),ke.extend({queue:function(e,t,n){var r;if(e)
// Speed up dequeue by getting out quickly if this is just a lookup
return t=(t||"fx")+"queue",r=ze.get(e,t),n&&(!r||Array.isArray(n)?r=ze.access(e,t,ke.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ke.queue(e,t),r=n.length,i=n.shift(),o=ke._queueHooks(e,t),a=function(){ke.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return ze.get(e,n)||ze.access(e,n,{empty:ke.Callbacks("once memory").add(function(){ze.remove(e,[t+"queue",n])})})}}),ke.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ke.queue(this[0],e):void 0===t?this:this.each(function(){var n=ke.queue(this,e,t);
// Ensure a hooks for this queue
ke._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ke.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ke.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=ke.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=ze.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Ge=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ye=new RegExp("^(?:([+-])=|)("+Ge+")([a-z%]*)$","i"),Qe=["Top","Right","Bottom","Left"],Je=function(e,t){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return e=t||e,"none"===e.style.display||""===e.style.display&&ke.contains(e.ownerDocument,e)&&"none"===ke.css(e,"display")},Ke=function(e,t,n,r){var i,o,a={};
// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);
// Revert the old values
for(o in t)e.style[o]=a[o];return i},Ze={};ke.fn.extend({show:function(){return S(this,!0)},hide:function(){return S(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Je(this)?ke(this).show():ke(this).hide()})}});var et=/^(?:checkbox|radio)$/i,tt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,nt=/^$|^module$|\/(?:java|ecma)script/i,rt={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
rt.optgroup=rt.option,rt.tbody=rt.tfoot=rt.colgroup=rt.caption=rt.thead,rt.th=rt.td;var it=/<|&#?\w+;/;!function(){var e=fe.createDocumentFragment(),t=e.appendChild(fe.createElement("div")),n=fe.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
Te.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
t.innerHTML="<textarea>x</textarea>",Te.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var ot=fe.documentElement,at=/^key/,st=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ut=/^([^.]*)(?:\.(.+)|)/;/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
ke.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=ze.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(v)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(o=n,n=o.handler,i=o.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
i&&ke.find.matchesSelector(ot,i),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=ke.guid++),
// Init the element's event structure and main handler, if this is the first
(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==ke&&ke.event.triggered!==t.type?ke.event.dispatch.apply(e,arguments):void 0}),
// Handle multiple events separated by a space
t=(t||"").match(Re)||[""],l=t.length;l--;)s=ut.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
d&&(
// If event changes its type, use the special event handlers for the changed type
f=ke.event.special[d]||{},
// If selector defined, determine special event api type, otherwise given type
d=(i?f.delegateType:f.bindType)||d,
// Update special based on newly reset type
f=ke.event.special[d]||{},
// handleObj is passed to all event handlers
c=ke.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ke.expr.match.needsContext.test(i),namespace:h.join(".")},o),
// Init the event handler queue if we're the first
(p=u[d])||(p=u[d]=[],p.delegateCount=0,
// Only use addEventListener if the special events handler returns false
f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
i?p.splice(p.delegateCount++,0,c):p.push(c),
// Keep track of which events have ever been used, for event optimization
ke.event.global[d]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=ze.hasData(e)&&ze.get(e);if(v&&(u=v.events)){for(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(Re)||[""],l=t.length;l--;)
// Unbind all events (on this namespace, if provided) for the element
if(s=ut.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=ke.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ke.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ke.event.remove(e,d+t[l],n,r,!0);
// Remove data and the expando if it's no longer used
ke.isEmptyObject(u)&&ze.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t,n,r,i,o,a,s=ke.event.fix(e),u=new Array(arguments.length),l=(ze.get(this,"events")||{})[s.type]||[],c=ke.event.special[s.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(
// Determine handlers
a=ke.event.handlers.call(this,s,l),
// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((ke.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;
// Find delegate handlers
if(u&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)r=t[n],
// Don't conflict with Object.prototype properties (#13203)
i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?ke(i,this).index(l)>-1:ke.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}
// Add the remaining (directly-bound) handlers
return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(ke.Event.prototype,e,{enumerable:!0,configurable:!0,get:Ce(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[ke.expando]?e:new ke.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==q()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===q()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&c(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return c(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ke.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},ke.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof ke.Event))return new ke.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?A:j,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
t&&ke.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),
// Mark it as fixed
this[ke.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
ke.Event.prototype={constructor:ke.Event,isDefaultPrevented:j,isPropagationStopped:j,isImmediatePropagationStopped:j,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=A,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=A,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=A,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
ke.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==e.which&&at.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&st.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},ke.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
ke.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ke.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===r||ke.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ke.fn.extend({on:function(e,t,n,r){return L(this,e,t,n,r)},one:function(e,t,n,r){return L(this,e,t,n,r,1)},off:function(e,t,n){var r,o;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return r=e.handleObj,ke(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"===(void 0===e?"undefined":i(e))){
// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}
// ( types [, fn] )
return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=j),this.each(function(){ke.event.remove(this,e,n,t)})}});var/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
lt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ct=/<script|<style|<link/i,
// checked="checked" or checked
ft=/checked\s*(?:[^=]|=\s*.checked.)/i,pt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ke.extend({htmlPrefilter:function(e){return e.replace(lt,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=ke.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(Te.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ke.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
a=k(s),o=k(e),r=0,i=o.length;r<i;r++)R(o[r],a[r]);
// Copy the events from the original to the clone
if(t)if(n)for(o=o||k(e),a=a||k(s),r=0,i=o.length;r<i;r++)M(o[r],a[r]);else M(e,s);
// Return the cloned set
// Preserve script evaluation history
return a=k(s,"script"),a.length>0&&D(a,!u&&k(e,"script")),s},cleanData:function(e){for(var t,n,r,i=ke.event.special,o=0;void 0!==(n=e[o]);o++)if(_e(n)){if(t=n[ze.expando]){if(t.events)for(r in t.events)i[r]?ke.event.remove(n,r):ke.removeEvent(n,r,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[ze.expando]=void 0}n[Xe.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Xe.expando]=void 0)}}}),ke.fn.extend({detach:function(e){return W(this,e,!0)},remove:function(e){return W(this,e)},text:function(e){return $e(this,function(e){return void 0===e?ke.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return I(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){H(this,e).appendChild(e)}})},prepend:function(){return I(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=H(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return I(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return I(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
ke.cleanData(k(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ke.clone(this,e,t)})},html:function(e){return $e(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!ct.test(e)&&!rt[(tt.exec(e)||["",""])[1].toLowerCase()]){e=ke.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},
// Remove element nodes and prevent memory leaks
1===t.nodeType&&(ke.cleanData(k(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];
// Make the changes, replacing each non-ignored context element with the new content
return I(this,arguments,function(t){var n=this.parentNode;ke.inArray(this,e)<0&&(ke.cleanData(k(this)),n&&n.replaceChild(t,this))},e)}}),ke.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ke.fn[e]=function(e){for(var n,r=[],i=ke(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),ke(i[a])[t](n),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ge.apply(r,n.get());return this.pushStack(r)}});var dt=new RegExp("^("+Ge+")(?!px)[a-z%]+$","i"),ht=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=o),t.getComputedStyle(e)},gt=new RegExp(Qe.join("|"),"i");!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ot.appendChild(u).appendChild(l);var e=o.getComputedStyle(l);n="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
s=12===t(e.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
l.style.right="60%",a=36===t(e.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===t(e.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
l.style.position="absolute",i=36===l.offsetWidth||"absolute",ot.removeChild(u),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,a,s,u=fe.createElement("div"),l=fe.createElement("div");
// Finish early in limited (non-browser) environments
l.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",Te.clearCloneStyle="content-box"===l.style.backgroundClip,ke.extend(Te,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
vt=/^(none|table(?!-c[ea]).+)/,yt=/^--/,mt={position:"absolute",visibility:"hidden",display:"block"},xt={letterSpacing:"0",fontWeight:"400"},bt=["Webkit","Moz","ms"],wt=fe.createElement("div").style;ke.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=$(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,r){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var o,a,s,u=x(t),l=yt.test(t),c=e.style;
// Check if we're setting a value
if(
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
l||(t=_(u)),
// Gets hook for the prefixed version, then unprefixed version
s=ke.cssHooks[t]||ke.cssHooks[u],void 0===n)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(o=s.get(e,!1,r))?o:c[t];a=void 0===n?"undefined":i(n),
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===a&&(o=Ye.exec(n))&&o[1]&&(n=C(e,t,o),
// Fixes bug #9237
a="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n===n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===a&&(n+=o&&o[3]||(ke.cssNumber[u]?"":"px")),
// background-* props affect original clone's values
Te.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
s&&"set"in s&&void 0===(n=s.set(e,n,r))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,o,a,s=x(t);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return yt.test(t)||(t=_(s)),a=ke.cssHooks[t]||ke.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=$(e,t,r)),"normal"===i&&t in xt&&(i=xt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ke.each(["height","width"],function(e,t){ke.cssHooks[t]={get:function(e,n,r){if(n)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!vt.test(ke.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?U(e,t,r):Ke(e,mt,function(){return U(e,t,r)})},set:function(e,n,r){var i,o=ht(e),a="border-box"===ke.css(e,"boxSizing",!1,o),s=r&&X(e,t,r,a,o);
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
// Convert to pixels if value adjustment is needed
return a&&Te.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-X(e,t,"border",!1,o)-.5)),s&&(i=Ye.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=ke.css(e,t)),z(e,n,s)}}}),ke.cssHooks.marginLeft=B(Te.reliableMarginLeft,function(e,t){if(t)return(parseFloat($(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
ke.each({margin:"",padding:"",border:"Width"},function(e,t){ke.cssHooks[e+t]={expand:function(n){for(var r=0,i={},
// Assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Qe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(ke.cssHooks[e+t].set=z)}),ke.fn.extend({css:function(e,t){return $e(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=ht(e),i=t.length;a<i;a++)o[t[a]]=ke.css(e,t[a],!1,r);return o}return void 0!==n?ke.style(e,t,n):ke.css(e,t)},e,t,arguments.length>1)}}),ke.Tween=V,V.prototype={constructor:V,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ke.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ke.cssNumber[n]?"":"px")},cur:function(){var e=V.propHooks[this.prop];return e&&e.get?e.get(this):V.propHooks._default.get(this)},run:function(e){var t,n=V.propHooks[this.prop];return this.options.duration?this.pos=t=ke.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):V.propHooks._default.set(this),this}},V.prototype.init.prototype=V.prototype,V.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ke.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
ke.fx.step[e.prop]?ke.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[ke.cssProps[e.prop]]&&!ke.cssHooks[e.prop]?e.elem[e.prop]=e.now:ke.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
V.propHooks.scrollTop=V.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ke.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ke.fx=V.prototype.init,
// Back compat <1.8 extension point
ke.fx.step={};var Tt,Ct,Et=/^(?:toggle|show|hide)$/,St=/queueHooks$/;ke.Animation=ke.extend(ee,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return C(n.elem,e,Ye.exec(t),n),n}]},tweener:function(e,t){Ce(e)?(t=e,e=["*"]):e=e.match(Re);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ee.tweeners[n]=ee.tweeners[n]||[],ee.tweeners[n].unshift(t)},prefilters:[K],prefilter:function(e,t){t?ee.prefilters.unshift(e):ee.prefilters.push(e)}}),ke.speed=function(e,t,n){var r=e&&"object"===(void 0===e?"undefined":i(e))?ke.extend({},e):{complete:n||!n&&t||Ce(e)&&e,duration:e,easing:n&&t||t&&!Ce(t)&&t};
// Go to the end state if fx are off
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return ke.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ke.fx.speeds?r.duration=ke.fx.speeds[r.duration]:r.duration=ke.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){Ce(r.old)&&r.old.call(this),r.queue&&ke.dequeue(this,r.queue)},r},ke.fn.extend({fadeTo:function(e,t,n,r){
// Show any hidden elements after setting opacity to 0
return this.filter(Je).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ke.isEmptyObject(e),o=ke.speed(t,n,r),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=ee(this,ke.extend({},e),o);
// Empty animations, or finishing resolves immediately
(i||ze.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=ke.timers,a=ze.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&St.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&n||ke.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=ze.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ke.timers,a=r?r.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
n.finish=!0,
// Empty the queue first
ke.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);
// Turn off finishing flag
delete n.finish})}}),ke.each(["toggle","show","hide"],function(e,t){var n=ke.fn[t];ke.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Q(t,!0),e,r,i)}}),
// Generate shortcuts for custom animations
ke.each({slideDown:Q("show"),slideUp:Q("hide"),slideToggle:Q("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ke.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ke.timers=[],ke.fx.tick=function(){var e,t=0,n=ke.timers;for(Tt=Date.now();t<n.length;t++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ke.fx.stop(),Tt=void 0},ke.fx.timer=function(e){ke.timers.push(e),ke.fx.start()},ke.fx.interval=13,ke.fx.start=function(){Ct||(Ct=!0,G())},ke.fx.stop=function(){Ct=null},ke.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
ke.fn.delay=function(e,t){return e=ke.fx?ke.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=o.setTimeout(t,e);n.stop=function(){o.clearTimeout(r)}})},function(){var e=fe.createElement("input"),t=fe.createElement("select"),n=t.appendChild(fe.createElement("option"));e.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
Te.checkOn=""!==e.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
Te.optSelected=n.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
e=fe.createElement("input"),e.value="t",e.type="radio",Te.radioValue="t"===e.value}();var kt,Dt=ke.expr.attrHandle;ke.fn.extend({attr:function(e,t){return $e(this,ke.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ke.removeAttr(this,e)})}}),ke.extend({attr:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return void 0===e.getAttribute?ke.prop(e,t,n):(1===o&&ke.isXMLDoc(e)||(i=ke.attrHooks[t.toLowerCase()]||(ke.expr.match.bool.test(t)?kt:void 0)),void 0!==n?null===n?void ke.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=ke.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!Te.radioValue&&"radio"===t&&c(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(Re);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
kt={set:function(e,t,n){
// Remove boolean attributes when set to false
return!1===t?ke.removeAttr(e,n):e.setAttribute(n,n),n}},ke.each(ke.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Dt[t]||ke.find.attr;Dt[t]=function(e,t,r){var i,o,a=t.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return r||(o=Dt[a],Dt[a]=i,i=null!=n(e,t,r)?a:null,Dt[a]=o),i}});var Nt=/^(?:input|select|textarea|button)$/i,At=/^(?:a|area)$/i;ke.fn.extend({prop:function(e,t){return $e(this,ke.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[ke.propFix[e]||e]})}}),ke.extend({prop:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fix name and attach hooks
return 1===o&&ke.isXMLDoc(e)||(t=ke.propFix[t]||t,i=ke.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=ke.find.attr(e,"tabindex");return t?parseInt(t,10):Nt.test(e.nodeName)||At.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
Te.optSelected||(ke.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ke.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ke.propFix[this.toLowerCase()]=this}),ke.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(Ce(e))return this.each(function(t){ke(this).addClass(e.call(this,t,ne(this)))});if(t=re(e),t.length)for(;n=this[u++];)if(i=ne(n),r=1===n.nodeType&&" "+te(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");
// Only assign if different to avoid unneeded rendering.
s=te(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(Ce(e))return this.each(function(t){ke(this).removeClass(e.call(this,t,ne(this)))});if(!arguments.length)return this.attr("class","");if(t=re(e),t.length)for(;n=this[u++];)if(i=ne(n),
// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&" "+te(i)+" "){for(a=0;o=t[a++];)
// Remove *all* instances
for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");
// Only assign if different to avoid unneeded rendering.
s=te(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=void 0===e?"undefined":i(e),r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):Ce(e)?this.each(function(n){ke(this).toggleClass(e.call(this,n,ne(this),t),t)}):this.each(function(){var t,i,o,a;if(r)for(
// Toggle individual class names
i=0,o=ke(this),a=re(e);t=a[i++];)
// Check each className given, space separated list
o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=ne(this),t&&
// Store className if set
ze.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||!1===e?"":ze.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+te(ne(n))+" ").indexOf(t)>-1)return!0;return!1}});var jt=/\r/g;ke.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=Ce(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ke(this).val()):e,
// Treat null/undefined as ""; convert numbers to string
null==i?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=ke.map(i,function(e){return null==e?"":e+""})),
// If set returns undefined, fall back to normal setting
(t=ke.valHooks[this.type]||ke.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)
// Handle most common string cases
return(t=ke.valHooks[i.type]||ke.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(jt,""):null==n?"":n)}}}),ke.extend({valHooks:{option:{get:function(e){var t=ke.find.attr(e,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=t?t:te(ke.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;
// Loop through all the selected options
for(r=o<0?u:a?o:0;r<u;r++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(n=i[r],(n.selected||r===o)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!c(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=ke(n).val(),a)return t;
// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=ke.makeArray(t),a=i.length;a--;)r=i[a],/* eslint-disable no-cond-assign */
(r.selected=ke.inArray(ke.valHooks.option.get(r),o)>-1)&&(n=!0);
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),
// Radios and checkboxes getter/setter
ke.each(["radio","checkbox"],function(){ke.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=ke.inArray(ke(e).val(),t)>-1}},Te.checkOn||(ke.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),
// Return jQuery for attributes-only inclusion
Te.focusin="onfocusin"in o;var qt=/^(?:focusinfocus|focusoutblur)$/,Lt=function(e){e.stopPropagation()};ke.extend(ke.event,{trigger:function(e,t,n,r){var a,s,u,l,c,f,p,d,h=[n||fe],g=xe.call(e,"type")?e.type:e,v=xe.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(s=d=u=n=n||fe,3!==n.nodeType&&8!==n.nodeType&&!qt.test(g+ke.event.triggered)&&(g.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
v=g.split("."),g=v.shift(),v.sort()),c=g.indexOf(":")<0&&"on"+g,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[ke.expando]?e:new ke.Event(g,"object"===(void 0===e?"undefined":i(e))&&e),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
e.isTrigger=r?2:3,e.namespace=v.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:ke.makeArray(t,[e]),
// Allow special events to draw outside the lines
p=ke.event.special[g]||{},r||!p.trigger||!1!==p.trigger.apply(n,t))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!r&&!p.noBubble&&!Ee(n)){for(l=p.delegateType||g,qt.test(l+g)||(s=s.parentNode);s;s=s.parentNode)h.push(s),u=s;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
u===(n.ownerDocument||fe)&&h.push(u.defaultView||u.parentWindow||o)}for(
// Fire handlers on the event path
a=0;(s=h[a++])&&!e.isPropagationStopped();)d=s,e.type=a>1?l:p.bindType||g,
// jQuery handler
f=(ze.get(s,"events")||{})[e.type]&&ze.get(s,"handle"),f&&f.apply(s,t),(
// Native handler
f=c&&s[c])&&f.apply&&_e(s)&&(e.result=f.apply(s,t),!1===e.result&&e.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return e.type=g,r||e.isDefaultPrevented()||p._default&&!1!==p._default.apply(h.pop(),t)||!_e(n)||c&&Ce(n[g])&&!Ee(n)&&(u=n[c],u&&(n[c]=null),ke.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,Lt),n[g](),e.isPropagationStopped()&&d.removeEventListener(g,Lt),ke.event.triggered=void 0,u&&(n[c]=u)),e.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=ke.extend(new ke.Event,n,{type:e,isSimulated:!0});ke.event.trigger(r,null,t)}}),ke.fn.extend({trigger:function(e,t){return this.each(function(){ke.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ke.event.trigger(e,t,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
Te.focusin||ke.each({focus:"focusin",blur:"focusout"},function(e,t){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){ke.event.simulate(t,e.target,ke.event.fix(e))};ke.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=ze.access(r,t);i||r.addEventListener(e,n,!0),ze.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=ze.access(r,t)-1;i?ze.access(r,t,i):(r.removeEventListener(e,n,!0),ze.remove(r,t))}}});var Ht=o.location,Ot=Date.now(),Pt=/\?/;
// Cross-browser xml parsing
ke.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new o.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||ke.error("Invalid XML: "+e),t};var Mt=/\[\]$/,Rt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,Wt=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
ke.param=function(e,t){var n,r=[],i=function(e,t){
// If value is a function, invoke it and use its return value
var n=Ce(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!ke.isPlainObject(e))
// Serialize the form elements
ke.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)ie(n,e[n],t,i);
// Return the resulting serialization
return r.join("&")},ke.fn.extend({serialize:function(){return ke.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=ke.prop(this,"elements");return e?ke.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!ke(this).is(":disabled")&&Wt.test(this.nodeName)&&!It.test(e)&&(this.checked||!et.test(e))}).map(function(e,t){var n=ke(this).val();return null==n?null:Array.isArray(n)?ke.map(n,function(e){return{name:t.name,value:e.replace(Rt,"\r\n")}}):{name:t.name,value:n.replace(Rt,"\r\n")}}).get()}});var $t=/%20/g,Bt=/#.*$/,Ft=/([?&])_=[^&]*/,_t=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
zt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Xt=/^(?:GET|HEAD)$/,Ut=/^\/\//,/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
Vt={},/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
Gt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Yt="*/".concat("*"),
// Anchor tag for parsing the document origin
Qt=fe.createElement("a");Qt.href=Ht.href,ke.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Ht.href,type:"GET",isLocal:zt.test(Ht.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */
accepts:{"*":Yt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":ke.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){
// Building a settings object
// Extending ajaxSettings
return t?se(se(e,ke.ajaxSettings),t):se(ke.ajaxSettings,e)},ajaxPrefilter:oe(Vt),ajaxTransport:oe(Gt),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function n(e,t,n,i){var u,c,d,h,w,T=t;
// Ignore repeat invocations
f||(f=!0,
// Clear timeout if it exists
l&&o.clearTimeout(l),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,
// Cache response headers
s=i||"",
// Set readyState
E.readyState=e>0?4:0,
// Determine if successful
u=e>=200&&e<300||304===e,
// Get response data
n&&(h=ue(g,E,n)),
// Convert no matter what (that way responseXXX fields are always set)
h=le(g,h,E,u),
// If successful, handle type chaining
u?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(w=E.getResponseHeader("Last-Modified"),w&&(ke.lastModified[a]=w),(w=E.getResponseHeader("etag"))&&(ke.etag[a]=w)),
// if no content
204===e||"HEAD"===g.type?T="nocontent":304===e?T="notmodified":(T=h.state,c=h.data,d=h.error,u=!d)):(
// Extract error from statusText and normalize for non-aborts
d=T,!e&&T||(T="error",e<0&&(e=0))),
// Set data for the fake xhr object
E.status=e,E.statusText=(t||T)+"",
// Success/Error
u?m.resolveWith(v,[c,T,E]):m.rejectWith(v,[E,T,d]),
// Status-dependent callbacks
E.statusCode(b),b=void 0,p&&y.trigger(u?"ajaxSuccess":"ajaxError",[E,g,u?c:d]),
// Complete
x.fireWith(v,[E,T]),p&&(y.trigger("ajaxComplete",[E,g]),
// Handle the global AJAX counter
--ke.active||ke.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"===(void 0===e?"undefined":i(e))&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var r,
// URL without anti-cache param
a,
// Response headers
s,u,
// timeout handle
l,
// Url cleanup var
c,
// Request state (becomes false upon send and true upon completion)
f,
// To know if global events are to be dispatched
p,
// Loop variable
d,
// uncached part of the url
h,
// Create the final options object
g=ke.ajaxSetup({},t),
// Callbacks context
v=g.context||g,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(v.nodeType||v.jquery)?ke(v):ke.event,
// Deferreds
m=ke.Deferred(),x=ke.Callbacks("once memory"),
// Status-dependent callbacks
b=g.statusCode||{},
// Headers (they are sent all at once)
w={},T={},
// Default abort message
C="canceled",
// Fake xhr
E={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(f){if(!u)for(u={};t=_t.exec(s);)u[t[1].toLowerCase()]=t[2];t=u[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return f?s:null},
// Caches the header
setRequestHeader:function(e,t){return null==f&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,w[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==f&&(g.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(f)
// Execute the appropriate callbacks
E.always(e[E.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)b[t]=[b[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||C;return r&&r.abort(t),n(0,t),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
m.promise(E),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
g.url=((e||g.url||Ht.href)+"").replace(Ut,Ht.protocol+"//"),
// Alias method option to type as per ticket #12004
g.type=t.method||t.type||g.method||g.type,
// Extract dataTypes list
g.dataTypes=(g.dataType||"*").toLowerCase().match(Re)||[""],null==g.crossDomain){c=fe.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{c.href=g.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
c.href=c.href,g.crossDomain=Qt.protocol+"//"+Qt.host!=c.protocol+"//"+c.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
g.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
g.data&&g.processData&&"string"!=typeof g.data&&(g.data=ke.param(g.data,g.traditional)),
// Apply prefilters
ae(Vt,g,t,E),f)return E;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
p=ke.event&&g.global,
// Watch for a new set of requests
p&&0==ke.active++&&ke.event.trigger("ajaxStart"),
// Uppercase the type
g.type=g.type.toUpperCase(),
// Determine if request has content
g.hasContent=!Xt.test(g.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
a=g.url.replace(Bt,""),
// More options handling for requests with no content
g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace($t,"+")):(
// Remember the hash so we can put it back
h=g.url.slice(a.length),
// If data is available and should be processed, append data to url
g.data&&(g.processData||"string"==typeof g.data)&&(a+=(Pt.test(a)?"&":"?")+g.data,
// #9682: remove data so that it's not used in an eventual retry
delete g.data),
// Add or update anti-cache param if needed
!1===g.cache&&(a=a.replace(Ft,"$1"),h=(Pt.test(a)?"&":"?")+"_="+Ot+++h),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
g.url=a+h),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(ke.lastModified[a]&&E.setRequestHeader("If-Modified-Since",ke.lastModified[a]),ke.etag[a]&&E.setRequestHeader("If-None-Match",ke.etag[a])),
// Set the correct header, if data is being sent
(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&E.setRequestHeader("Content-Type",g.contentType),
// Set the Accepts header for the server, depending on the dataType
E.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Yt+"; q=0.01":""):g.accepts["*"]);
// Check for headers option
for(d in g.headers)E.setRequestHeader(d,g.headers[d]);
// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(v,E,g)||f))
// Abort if not done already and return
return E.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
C="abort",
// Install callbacks on deferreds
x.add(g.complete),E.done(g.success),E.fail(g.error),
// Get transport
r=ae(Gt,g,t,E)){
// If request was aborted inside ajaxSend, stop there
if(E.readyState=1,
// Send global event
p&&y.trigger("ajaxSend",[E,g]),f)return E;
// Timeout
g.async&&g.timeout>0&&(l=o.setTimeout(function(){E.abort("timeout")},g.timeout));try{f=!1,r.send(w,n)}catch(e){
// Rethrow post-completion exceptions
if(f)throw e;
// Propagate others as results
n(-1,e)}}else n(-1,"No Transport");return E},getJSON:function(e,t,n){return ke.get(e,t,n,"json")},getScript:function(e,t){return ke.get(e,void 0,t,"script")}}),ke.each(["get","post"],function(e,t){ke[t]=function(e,n,r,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return Ce(n)&&(i=i||r,r=n,n=void 0),ke.ajax(ke.extend({url:e,type:t,dataType:i,data:n,success:r},ke.isPlainObject(e)&&e))}}),ke._evalUrl=function(e){return ke.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},ke.fn.extend({wrapAll:function(e){var t;
// The elements to wrap the target around
return this[0]&&(Ce(e)&&(e=e.call(this[0])),t=ke(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return Ce(e)?this.each(function(t){ke(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ke(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Ce(e);return this.each(function(n){ke(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ke(this).replaceWith(this.childNodes)}),this}}),ke.expr.pseudos.hidden=function(e){return!ke.expr.pseudos.visible(e)},ke.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ke.ajaxSettings.xhr=function(){try{return new o.XMLHttpRequest}catch(e){}};var Jt={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Kt=ke.ajaxSettings.xhr();Te.cors=!!Kt&&"withCredentials"in Kt,Te.ajax=Kt=!!Kt,ke.ajaxTransport(function(e){var t,n;
// Cross domain only allowed if supported through XMLHttpRequest
if(Te.cors||Kt&&!e.crossDomain)return{send:function(r,i){var a,s=e.xhr();
// Apply custom fields if provided
if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];
// Override mime type if needed
e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(a in r)s.setRequestHeader(a,r[a]);
// Callback
t=function(e){return function(){t&&(t=n=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof s.status?i(0,"error"):i(
// File: protocol always yields status 0; see #8605, #14207
s.status,s.statusText):i(Jt[s.status]||s.status,s.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},
// Listen to events
s.onload=t(),n=s.onerror=s.ontimeout=t("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==s.onabort?s.onabort=n:s.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===s.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
o.setTimeout(function(){t&&n()})},
// Create the abort callback
t=t("abort");try{
// Do send the request (this may raise an exception)
s.send(e.hasContent&&e.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(t)throw e}},abort:function(){t&&t()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
ke.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),
// Install script dataType
ke.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ke.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
ke.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),
// Bind script tag hack transport
ke.ajaxTransport("script",function(e){
// This transport only deals with cross domain requests
if(e.crossDomain){var t,n;return{send:function(r,i){t=ke("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
fe.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Zt=[],en=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
ke.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Zt.pop()||ke.expando+"_"+Ot++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
ke.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,a,s=!1!==e.jsonp&&(en.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&en.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return r=e.jsonpCallback=Ce(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(en,"$1"+r):!1!==e.jsonp&&(e.url+=(Pt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||ke.error(r+" was not called"),a[0]},e.dataTypes[0]="json",i=o[r],o[r]=function(){a=arguments},n.always(function(){
// If previous value didn't exist - remove it
void 0===i?ke(o).removeProp(r):o[r]=i,
// Save back as free
e[r]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
Zt.push(r)),
// Call if it was a function and we have a response
a&&Ce(i)&&i(a[0]),a=i=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
Te.createHTMLDocument=function(){var e=fe.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
ke.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return t||(Te.createHTMLDocument?(t=fe.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=fe.location.href,t.head.appendChild(r)):t=fe),i=Le.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=N([e],t,o),o&&o.length&&ke(o).remove(),ke.merge([],i.childNodes))},/**
  * Load a url into a page
  */
ke.fn.load=function(e,t,n){var r,o,a,s=this,u=e.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return u>-1&&(r=te(e.slice(u)),e=e.slice(0,u)),Ce(t)?(n=t,t=void 0):t&&"object"===(void 0===t?"undefined":i(t))&&(o="POST"),s.length>0&&ke.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
a=arguments,s.html(r?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ke("<div>").append(ke.parseHTML(e)).find(r):
// Otherwise use the full result
e)}).always(n&&function(e,t){s.each(function(){n.apply(this,a||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
ke.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ke.fn[t]=function(e){return this.on(t,e)}}),ke.expr.pseudos.animated=function(e){return ke.grep(ke.timers,function(t){return e===t.elem}).length},ke.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=ke.css(e,"position"),f=ke(e),p={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),s=f.offset(),o=ke.css(e,"top"),u=ke.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),Ce(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,ke.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},ke.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){ke.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===ke.css(r,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=r.getBoundingClientRect();else{for(t=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===ke.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
i=ke(e).offset(),i.top+=ke.css(e,"borderTopWidth",!0),i.left+=ke.css(e,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:t.top-i.top-ke.css(r,"marginTop",!0),left:t.left-i.left-ke.css(r,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===ke.css(e,"position");)e=e.offsetParent;return e||ot})}}),
// Create scrollLeft and scrollTop methods
ke.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ke.fn[e]=function(r){return $e(this,function(e,r,i){
// Coalesce documents and windows
var o;if(Ee(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
ke.each(["top","left"],function(e,t){ke.cssHooks[t]=B(Te.pixelPosition,function(e,n){if(n)
// If curCSS returns percentage, fallback to offset
return n=$(e,t),dt.test(n)?ke(e).position()[t]+"px":n})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
ke.each({Height:"height",Width:"width"},function(e,t){ke.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){
// Margin is only for outerHeight, outerWidth
ke.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return $e(this,function(t,n,i){var o;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return Ee(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?ke.css(t,n,s):ke.style(t,n,i,s)},t,a?i:void 0,a)}})}),ke.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){
// Handle event binding
ke.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ke.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ke.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
ke.proxy=function(e,t){var n,r,i;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),Ce(e))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return r=de.call(arguments,2),i=function(){return e.apply(t||this,r.concat(de.call(arguments)))},i.guid=e.guid=e.guid||ke.guid++,i},ke.holdReady=function(e){e?ke.readyWait++:ke.ready(!0)},ke.isArray=Array.isArray,ke.parseJSON=JSON.parse,ke.nodeName=c,ke.isFunction=Ce,ke.isWindow=Ee,ke.camelCase=x,ke.type=u,ke.now=Date.now,ke.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=ke.type(e);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},n=[],void 0!==(r=function(){return ke}.apply(t,n))&&(e.exports=r);var
// Map over jQuery in case of overwrite
tn=o.jQuery,
// Map over the $ in case of overwrite
nn=o.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return ke.noConflict=function(e){return o.$===ke&&(o.$=nn),e&&o.jQuery===ke&&(o.jQuery=tn),ke},a||(o.jQuery=o.$=ke),ke})}).call(t,n(62)(e))}},[1734]);