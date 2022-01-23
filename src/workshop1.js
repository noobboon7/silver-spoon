// you can create a UI for the tests
// const test = document.createElement('h1');
// test.innerHTML = 'Workshop 1';
// doc.appendChild(test);

// the first option was to create assertion test to test UI
const html = document.documentElement,
	// htmlEl = document.querySelector("html"),
  body = document.querySelector("body"),
  head = document.querySelector("head"),
  meta = document.querySelector('head meta[charset="UTF-8"]'),
  title = document.querySelector("head title"),
  sectionCount = document.querySelectorAll("body section").length;


//doctype must be present 
console.assert(window.document.doctype, "You must declare a doctype in your html file on line 1");

// file named === profile.html
console.assert(window.location.href.includes("profile.html"), "You must name you html file profile.html");

// html lang attribute must be present with value en
console.assert(html.lang.includes("en"), "You must declare a lang attribute equal to \"en\" on your html element");

// charset must be utf-8
console.assert(meta, "You must declare a meta charset attribute equal to \"UTF-8\" on your html element");

// head tile must be present with value "Profile"
console.assert(title.innerText.includes("Profile"), "You must declare a title attribute equal to \"Profile - [your name here]\"  on your head element");
// should have a h1 element with text "Profile"
console.assert(
	body.firstElementChild.tagName.toLowerCase() === "h1",
	'You must declare a h1 as the first element in your body; with text "Profile - (your name) "',
);

// must have 2 or more section elements
console.assert(sectionCount >= 2, "You must have more than 2 section elements in your body");
// should be a section element ?
console.log(body.lastElementChild.previousElementSibling);


// not possible to check for head and body because live server adds them automatically
// document.addEventListener("DOMContentLoaded", checkFormat);
// link for this test https://cdn.jsdelivr.net/gh/noobboon7/silver-spoon/src/workshop1.js