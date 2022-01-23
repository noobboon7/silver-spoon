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
  sectionCount = document.querySelectorAll("body section").length,
  img = document.querySelector("img")
  ScndHeaders = document.querySelectorAll("section h2")
  ulLstCount = document.querySelectorAll("section ul").length,
  ulLst = document.querySelectorAll("section ul"),
  audio = document.querySelector("audio");


//doctype must be present 
console.assert(window.document.doctype, "You must declare a doctype in your html file on line 1");

// file named === profile.html
console.assert(window.location.href.includes("profile.html"), "You must name you html file profile.html");

// html lang attribute must be present with value en
console.assert(html.lang.includes("en"), "You must declare a lang attribute equal to \"en\" on your html element");

// charset must be utf-8
console.assert(meta, "You must declare a meta charset attribute equal to \"UTF-8\" on your html element");

// head tile must be present with value "Profile"
console.assert(title.innerText.includes("Profile"), "You must have a title element in the head tag; the content should contain \"Profile\" - [your name here] ");
// should have a h1 element with text "Profile"
console.assert(
	body.firstElementChild.tagName.toLowerCase() === "h1",
	'You must declare a h1 as the first element in your body; with text "Profile - (your name) "',
);

// must have 2 or more section elements
console.assert(sectionCount >= 2, "You must have more than 2 section elements in your body");

console.assert(img, "must have an img element in your body");
console.assert(!!img.getAttribute("alt"), "img element must have an alt attribute, with description of the image");


console.assert([...ScndHeaders].some(el => el.innerText.includes("About me")), "You must have a h2 element with text \"About me\"");

console.assert([...ScndHeaders].some(el => el.innerText.includes("Interests")), "You must have a h2 element with text \"Interests\"");

console.assert(ulLstCount >= 2, "You must have at least two ul elements in your body");

console.assert([...ulLst].every(el => el.children.length >= 2), "You must have at least two li elements in each ul element");

console.assert(audio, "You must have an audio element in your body");

console.assert([...audio.getAttributeNames()].includes("controls"), "You must have an audio element with controls attribute");

const audioContent = 'Your browser does not support HTML5 audio. Here is <a href="mp3s/YourAudioFileNameHere.mp3">a link to the audio</a>\n    instead.';

console.assert(audio.innerHTML.includes(audioContent), `You must have an audio element with the following content: \n"${audioContent}" \nIf this message does not go away check your spelling and spacing or copy and paste from nucamp instructions`);
// console.log(body.lastElementChild.previousElementSibling);
////////////// don't forget to add point system//////////////// 
// work in groups of 3-4 people
// not possible to check for head and body because live server adds them automatically
// link for this test https://cdn.jsdelivr.net/gh/noobboon7/silver-spoon/src/workshop1.js