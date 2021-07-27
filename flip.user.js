// ==UserScript==
// @name         Masiro Keyboard Page Flip Control
// @namespace    snylonue
// @version      0.1
// @description  翻页快捷键
// @author       snylonue
// @match        https://masiro.me/admin/novelReading*
// @icon         https://www.google.com/s2/favicons?domain=masiro.me
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const last = document.querySelector(`.last`);
    const next = document.querySelector(`.next`);
    const body = document.querySelector(`body`);

    body.addEventListener("keydown", (event) => {
        switch (event.code) {
            case "ArrowRight": window.location.assign(next.firstChild.href); break;
            case "ArrowLeft": window.location.assign(last.firstChild.href); break;
            default: break;
        }
    });
})();
