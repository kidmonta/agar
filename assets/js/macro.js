// *************
// NOTICE TO YOU
// ****************************************************************************************************
// This script is for my subscribers or people who watched my tutorials.
// Specifically made to support my tutorial and I'm offering it as is.
// If you don't like the keys I have setup then modify it to your liking.
// Please don't ask me to make you one or make different keys. To change
// keys it's easy. I labeled them for you, you just need to change the key mapping
// for java script. Also, when you put this on your site, you don't need Tampermonkey
// or any other Script Extension. Thank you for watching and supporting my channel. 
// ******************************************************************************************************
// AND WHY DO I STRUGGLE TO GET SUBS? BECAUSE I DO'T MAKE STUPID VIDEOS AND CALL THEM EPIC POP SPLIT, 
// EPIC TEAM TROLL, EPIC 128K MASS FROM EPIC VANISH SPLIT FROM ANOTHER EPIC BULLSHIT CLICK BAIT!!!!!!!!!
// *******************************************************************************************************

// ==UserScript==
// @name         cowpits Macro Feed and Split Control
// @version      1.3
// @description  Press & hold W for macro feed, Press A to split 2x, Press S to plit 16x.
// @author       youtube.com/cowpits
// @match        http://gkclan.tk/*
// @match        http://cowpits.tk/*
// @match        http://tutorialscow.esy.es/*
// @match        http://gkclan.96.lt/*
// @match        PUT YOUR SITE LINK HERE
// @grant        none
// @run-at       document-end
// ==/UserScript==

// User input.
var _0xc740=["\x6B\x65\x79\x64\x6F\x77\x6E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6B\x65\x79\x75\x70","\x6B\x65\x79\x43\x6F\x64\x65","\x6F\x6E\x6B\x65\x79\x64\x6F\x77\x6E","\x6F\x6E\x6B\x65\x79\x75\x70","\x74\x72\x69\x67\x67\x65\x72","\x62\x6F\x64\x79"];window[_0xc740[1]](_0xc740[0],keydown);window[_0xc740[1]](_0xc740[2],keyup);var canFeed=false;var canSplit=false;function keydown(_0xdbf3x4){switch(_0xdbf3x4[_0xc740[3]]){case 87:canFeed= true;feed();break;case 65:split();setTimeout(split,50);break}}function keyup(_0xdbf3x4){if(_0xdbf3x4[_0xc740[3]]== 83){canSplit= false}}function keyup(_0xdbf3x4){if(_0xdbf3x4[_0xc740[3]]== 87){canFeed= false}}function feed(){if(canFeed){window[_0xc740[4]]({keyCode:87});window[_0xc740[5]]({keyCode:87});setTimeout(feed,0)}}function split(){$(_0xc740[7])[_0xc740[6]]($.Event(_0xc740[0],{keyCode:32}));$(_0xc740[7])[_0xc740[6]]($.Event(_0xc740[2],{keyCode:32}))}(function(){var _0xdbf3x8=6;var _0xdbf3x9=50;var _0xdbf3xa=function(_0xdbf3xb){if(_0xdbf3xb[_0xc740[3]]=== 83){for(var _0xdbf3xc=0;_0xdbf3xc< _0xdbf3x8;++_0xdbf3xc){setTimeout(function(){window[_0xc740[4]]({keyCode:32});window[_0xc740[5]]({keyCode:32})},_0xdbf3xc* _0xdbf3x9)}}};window[_0xc740[1]](_0xc740[0],_0xdbf3xa)})()