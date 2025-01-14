// ==UserScript==
// @name         Brainly Suck Ass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  GIMMEH THE ANSWER
// @author       AGW
// @match        https://brainly.co.id/*
// @match        https://brainly.com/*
// @icon         https://media.cdnandroid.com/item_images/770840/imagen-brainly-0thumb.jpeg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	const targetElement = document.querySelector('div[data-testid="answer_box_text"]');
	console.log(targetElement.innerHTML)
	const originalContent = targetElement.innerHTML;

	function checkDOM() {
		if (

			(document.getElementsByClassName("brn-unlock-section brn-common-unlock-section")?.length > 0) &&
			(Object.values(document.querySelectorAll("div")).find(x => x.className.toLowerCase().includes("contentgradient"))?.className.length > 0)

			) {

			clearInterval(intervalID); // Stops the interval

			const element = document.getElementsByClassName("brn-unlock-section brn-common-unlock-section")
			let parenting = Object.values(document.querySelectorAll("div")).find(x => x.className.toLowerCase().includes("contentgradient"));

			console.log('Found the ads element:', element);
			console.log("Found the parentElement", parenting)

			if(typeof element == 'object') {
				element[0].remove()
			} else element.remove()

			const nx1 = parenting.nextElementSibling;
			const nx2 = nx1.nextElementSibling;

			let classesToRemove = Array.from(parenting.classList).slice(1);
  			parenting.classList.remove(...classesToRemove);

  			setTimeout(() => {
				document.querySelector('div[data-testid="answer_box_text"]').innerHTML = originalContent
				nx1.remove()
				nx2.remove()
  			}, 1000)
		}
		else {
			console.log('Target element not found, checking again...');
		}
	}

	// Set an interval to check every second (1000 milliseconds)
	let intervalID = setInterval(checkDOM, 1000);

})();
