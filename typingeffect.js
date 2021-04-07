const CONTENT="RYU GA RAM"
const text=document.querySelector(".text");
let index=0;

stop=setInterval(typing,600);

function typing(){
	text.textContent +=CONTENT[index++];
	if(index===CONTENT.length){
		clearInterval(stop);
		text.classList.add("no");
	}
}

