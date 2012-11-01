// ==UserScript==
// @name          VikeFans SFW Script
// @namespace     http://www.vikefans.com/sfw
// @description   Turns the vikefans.com / guildportal site into a safe fore work site.
// @include       http://www.guildportal.com/*
// @include       http://vikefans.com/*
// @version       1.0
// @grant       none
// ==/UserScript==

/* document.body.style.background = "#ffffff"; */

function addCss(cssString) {
var head = document.getElementsByTagName('head')[0];
if(!head){
	return;
}
var newCss = document.createElement('style');
newCss.type = "text/css";
newCss.innerHTML = cssString;
head.appendChild(newCss);
}
addCss (
'body,div.ForumCategoryHeader, tr.ForumCategoryHeader, td.ForumCategoryHeader, tr.ForumCategoryHeader td, .quoteTitle{ background-color: #ffffff ! important; } img{display:none;} .MessageBodyCell1, .MessageBodyCell2{background-color: #fff; font: Times;} .MessageAuthorLinkCell, .MessageAuthorLinkCell1 A:link, .MessageSubjectCell1, .MessageSubjectCell1 A:link, .MessageAuthorLinkCell1 span, .MessageAuhorLinkCell2 span {color:black;}.ContentBoxTitle{background-image: none !important; background-color: #444 !important;}.straightBarWrapper,.straightBarActiveTab {color: #000!important; background-image: none !important;}.straightBarNormalTab a:link, .straightBarNormalTab a:visited, .straightBarNormalTab a:hover, .straightBarNormalTab a:active,.straightBarActiveTab a:visited, .straightBarActiveTab a:hover, .straightBarActiveTab a:active {color: #000!important;text-decoration: none!important;background-image:none!important;}'
); 
