// ==UserScript==
// @name               文本自动间距
// @name:EN            Text Auto Space
// @name:zh-TW         文字自動间距
// @version            1.0.1
// @description        这个脚本为现代浏览器添加了 text-autospace CSS 特性
// @description:EN     This script adds the text-autospace CSS feature for modern browsers
// @description:zh-TW  這個腳本為現代瀏覽器添加了 text-autospace CSS 特性
// @author             Moran Fong
// @contributionURL    https://github.com/moranfong/userscripts/blob/main/src/text-autospace.js
// @namespace          http://tampermonkey.net/
// @match              *://*/*
// @license MIT
// @grant              GM_addStyle
// ==/UserScript==
 
(function() {
    'use strict';
    
    const css = String.raw;
    GM_addStyle(css`
        :root {
            text-autospace: normal;
        }
    `);
})();