// Check If There's Local Storage Color List
let mainColors = localStorage.getItem("color-list");
if (mainColors !== null) {
	console.log('Local not empty')
	document.documentElement.style.setProperty('--main-color', mainColors);
// Remove Active Class From All Childerns
	document.querySelectorAll(".color-list li").forEach(element => {
		element.classList.remove("active");
	// Add Active 
	if (element.dataset.color === mainColors) {
		element.classList.add("active")	
		};
	});

};

// Start Start Switch Background Button
// random background option
let backgroundOption = true;

let backLocal = localStorage.getItem("back-OPT");

if (backLocal !== null) {
	if (backLocal === 'true'){
		backgroundOption = true;
	} else {
		backgroundOption = false;
	} 
	document.querySelectorAll(".random-background span").forEach(element => {
		element.classList.remove("active");
	});
	
	if (backLocal === 'true') {
		document.querySelector(".random-background .yes").classList.add("active");
	} else {
		document.querySelector(".random-background .no").classList.add("active");
	}
}
// variable to set into the interval 
let backgroundInterval;

// switch Images 
const randomImages = document.querySelectorAll(".random-background span"); 

randomImages.forEach(span => {
		span.addEventListener("click", (e) => {
			// Remove Active && Add Active
				holdActive(e)
			if (e.target.dataset.back === "yes") {
				backgroundOption = true;
				changeBackground();
				localStorage.setItem("back-OPT", true);
			} else {
				backgroundOption = false;
				clearInterval(backgroundInterval);
				localStorage.setItem("back-OPT", false);
			}
		})
	})


// Select Landing Page Element 
let landing = document.querySelector(".landing-page");

// Get Array Of Imgs 
let imgsArray = ["back-1.jpg", "back-2.jpg", "back-3.jpg", "back-4.jpg", "back-5.jpg"]; 

function changeBackground() {
	if (backgroundOption === true) {
		backgroundInterval = setInterval(() => {
		// Get Random Number
		let randomNumber = Math.floor(Math.random() * imgsArray.length);
		// Change background Image Url 
		landing.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] +'")';
		}, 1000);
	}
}

changeBackground();

// End Start Switch Background Button
  

  
// Toggle Spin Class On Icon
document.querySelector(".toggle .fa-gear").onclick = function () {
	this.classList.toggle("fa-spin");
	document.querySelector(".setting-box ").classList.toggle("open")
}


// Start Switch Color
const colorsLi = document.querySelectorAll(".color-list li"); 
// Loop On All List Items
colorsLi.forEach(li => {
	// Click on every items
li.addEventListener("click", (e) => {
	// set color on root
	document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
	// set color on local storage 
	localStorage.setItem("color-list", e.target.dataset.color);
	// Remove Active && Add Active
	holdActive(e)
	});
});

// End Switch Color

// Start Reset Button
document.querySelector(".reset-option").onclick = function () {
	localStorage.clear();
	window.location.reload();
}
// End Reset Button

// Start Popup Gallery 
let ourGallery = document.querySelectorAll(".gallery .images-box img");
	ourGallery.forEach(img => {
		img.addEventListener('click', (e) => {
			// Create Overleay 
			let overlay = document.createElement("div");
			// Add Class To Overleay
			overlay.className = 'popup-overlay';
			// Append Overleay To Body
			document.body.appendChild(overlay);
			// Create Popup Box 
			let popupBox = document.createElement("div");
			
			// Add Class To Popup Box
			popupBox.className = "popup-box";
			if (img.alt !== null) {
				// Create Heading
				let imgHeading = document.createElement("h3");
				// Creat Text For Heading 
				let imgText = document.createTextNode(img.alt);
				// Append Text To Heading
				imgHeading.appendChild(imgText);
				// Append Heading To Popup Box 
				popupBox.appendChild(imgHeading);
			}
			// Create The Image 
			let popupImage = document.createElement("img");
			// Set Image Source 
			popupImage.src = img.src;
			// Add Image To Popup Box
			popupBox.appendChild(popupImage);
			// Append Popup Box To Body
			document.body.appendChild(popupBox);
			
			// Create Close Span
			let closeButton = document.createElement("span");
			// Create close Button Text
			let closeText = document.createTextNode("X");
			// Append Text To Close Button
			closeButton.appendChild(closeText);
			// Add Class To Close Button
			closeButton.className = 'close-button';
			// Append Close Button To Popup Box;
			popupBox.appendChild(closeButton);
		});
	});
	// Close Popup
	document.addEventListener("click", function (e) {
		if (e.target.className == 'close-button') {
			// Remove Current Popup
			e.target.parentNode.remove();
			//Remove Overlay
			document.querySelector(".popup-overlay").remove();
		}
	});
// End Popup Gallery

// Select Al Bullets
 const allBullets = document.querySelectorAll(".nav-bullets .bullet");
 // Select All Links
 const allLinks = document.querySelectorAll(".links a");
 function scrollIo(elements) {
	elements.forEach(ele => {
		ele.addEventListener("click", (e) => {
			e.preventDefault();
			document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior: 'smooth'
			});
		});
	});
 }
 
// End Bullets
scrollIo(allBullets);
scrollIo(allLinks);

// Start Button Up
let btn = document.querySelector(".btn-Up");

 window.onscroll = function (){
	if (window.scrollY >= 2000){
		btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
 }
 
btn.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
// End Button Up
// Start Remve and Add Active 
	function holdActive(ev) {
		// Remove Active Class From All Element
		ev.target.parentElement.querySelectorAll(".active").forEach(element => {
			element.classList.remove("active");
		});
		// Add Active Class On Self
		ev.target.classList.add("active")
	}
// End Remve and Add Active 

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

// let holdBody document.querySelector("body");q

// Add Class "menu-active" On Button
toggleBtn.onclick = function (e) {
	e.stopPropagation()
	this.classList.toggle("menu-active");
	// Add Class "open" On Links
	tLinks.classList.toggle("open");
};

 document.addEventListener("click", (e) => {
		if (e.target !== toggleBtn && e.target !== tLinks) {
			if (tLinks.classList.contains("open")) {
				// Add Class "menu-active" On Button
				toggleBtn.classList.remove("menu-active");
				// Add Class "open" On Links
				tLinks.classList.remove("open");
			}
		};
	});

tLinks.onclick = function (e) {
	e.stopPropagation();
}