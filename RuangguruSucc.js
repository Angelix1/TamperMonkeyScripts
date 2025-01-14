// ==UserScript==
// @name         Ruang Guru Suck
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  GIMMEH THE ANSWER
// @author       AGW
// @match        https://*.ruangguru.com/question/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ruangguru.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const answer = document.getElementsByClassName("qns_explanation_answer")?.[0];
    const lock = document.getElementsByClassName("adswall-lock")?.[0];

    if(answer) {
        answer.classList.remove("qns_explanation_answer")
    }

    if(lock) {
        lock.remove()
    }

    const paragraphs = document.querySelectorAll('p');

    // Loop through the selected elements
    paragraphs.forEach(function(paragraph) {
        if (paragraph.textContent?.toLowerCase?.().includes('iklan')) {
            // Navigate to the grandparent element and remove it
            let grandparent = paragraph?.parentElement?.parentElement;
            if (grandparent) {
                grandparent.remove();
            }
        }
    });
})();
