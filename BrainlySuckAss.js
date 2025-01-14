// ==UserScript==
// @name         Brainly Suck Ass
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  GIMMEH THE ANSWER
// @author       AGW
// @match        https://brainly.co.id/*
// @match        https://brainly.com/*
// @icon         https://media.cdnandroid.com/item_images/770840/imagen-brainly-0thumb.jpeg
// @grant        none
// ==/UserScript==

// Last updated: 15 January 2025

(function() {
    'use strict';
	const originalContent = document.querySelector('div[data-testid="answer_box_text"]').innerHTML;
	console.log(originalContent)

    	// console.log(window.jsData.question)

	function checkDOM() {
		if (

			(document.getElementsByClassName("brn-unlock-section brn-common-unlock-section")?.length > 0) &&
			(document.querySelector('div[data-testid="answer_box_content"]').parentElement?.className.includes("contentBlocked"))

			) {

			clearInterval(intervalID); // Stops the interval

			const element = document.getElementsByClassName("brn-unlock-section brn-common-unlock-section")
			let parenting = document.querySelector('div[data-testid="answer_box_content"]').parentElement;

			console.log('Found the ads element:', element);
			console.log("Found the parentElement", parenting)

			if(typeof element == 'object') {
				element[0].remove()
			} else element.remove()

			const nx1 = parenting.nextElementSibling;
			const nx2 = nx1.nextElementSibling;

			let classesToRemove = Array.from(parenting.classList).slice(1);
  			parenting.classList.remove(...classesToRemove);

  			let noPlaceholderBS = Array.from(document.querySelector('div[data-testid="answer_box_text"]').classList).find(x => x.toLowerCase()?.includes("placeholder"))
  			document.querySelector('div[data-testid="answer_box_text"]').classList.remove(noPlaceholderBS)


  			setTimeout(() => {
				document.querySelector('div[data-testid="answer_box_text"]').innerHTML = originalContent

				nx1.remove()
				nx2.remove()
  			}, 1000)

            setTimeout(() => {
                if(window.jsData.question.answers[0].attachments.length > 0) {

                    window.jsData.question.answers[0].attachments.forEach(data => {
                        document.querySelector('div[data-testid="answer_box_text"]').innerHTML += `<img src="${data.full}" loading="eager" style="transform: rotate(0deg) scale(1); max-height: 364px;">`;
                    })
                }
            }, 2000)
		}
		else {
			console.log('Target element not found, checking again...');
		}
	}

	// Set an interval to check every second (1000 milliseconds)
	let intervalID = setInterval(checkDOM, 1000);

})();
