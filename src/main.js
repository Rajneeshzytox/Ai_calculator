

new TypeIt("#typeMain", { 
    lifeLike: false, 
    speed: 0 
})
    .type("a")
	.pause(580)
	.type("i")
	.pause(568)
	.delete(1)
	.pause(222)
	.delete(1)
	.pause(567)
	.type("A")
	.pause(574)
	.type("i")
	.pause(560)
	.type(" ")
	.pause(509)
	.type("C")
	.pause(295)
	.type("a")
	.pause(506)
	.type("l")
	.pause(500)
	.type("c")
	.pause(306)
	.type("u")
	.pause(500)
	.type("l")
	.pause(164)
	.type("a")
	.pause(509)
	.type("t")
	.pause(219)
	.type("e")
	.pause(126)
	.type("r")
	.pause(500)
	.delete(1)
	.pause(168)
	.delete(1)
	.pause(776)
	.type("o")
	.pause(139)
	.type("r")
	.go();


	// nav mobile 

	let navBtn = document.getElementById('navBtn');
	let closeNavBtn = document.getElementById('closeNavBtn');
	let navItems = document.getElementById('navItems');

	navBtn.addEventListener("click", (e) =>{
		navItems.style.opacity = "1";
		// navItems.style.scale = "1";
		navItems.style.pointerEvents = "all";

		// alert("btn clicked");
	});
	closeNavBtn.addEventListener("click", (e) =>{
		navItems.style.opacity = "0";
		// navItems.style.scale = "0";
		navItems.style.pointerEvents = "none";

		// alert("btn clicked");
	});

// ---------------------- API INPUT ----------------------

const apiInput = document.querySelector(".api-key-input")
const showApiKeyBtn = document.querySelector(".locked-api")
const hideApiKeyBtn = document.querySelector(".unlocked-api")
const setApiBtn = document.querySelector(".set-api-key")
const setApiBtnInfo = document.querySelector(".set-api-key-info")


showApiKeyBtn.addEventListener('click', ()=>{
	
	apiInput.type = "text"
	showApiKeyBtn.classList.add('hidden')
	hideApiKeyBtn.classList.remove('hidden')
})
hideApiKeyBtn.addEventListener('click', ()=>{
	
	apiInput.type = "password"
	hideApiKeyBtn.classList.add('hidden')
	showApiKeyBtn.classList.remove('hidden')
})


setApiBtn.addEventListener('click', ()=> {
	let value = apiInput.value
	localStorage.setItem('GOOGLE_API_KEY', value)
	
})
setApiBtn.addEventListener('mouseover', ()=> {
	
	setApiBtnInfo.classList.remove('hidden')
})
setApiBtn.addEventListener('mouseleave', ()=> {
	setApiBtnInfo.classList.add('hidden')
})



