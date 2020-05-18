document.getElementById('nameHolder').innerText = name
function heartFly(){
	var holder = document.getElementById('heart-holder')
	for(var i = 0 ; i< 15 ; i++){
		setTimeout(function(){
			var heart = document.createElement('span')
			heart.style.position = "absolute"
			heart.classList.add('heart')
			heart.innerText = "❤"
			heart.style.left = Math.random()*100 + '%'
			heart.style.bottom = Math.random()*100 + 50+ '%'
			heart.style.fontSize = Math.random() * 20 + 5 + 'px'
			heart.style.animation = "fly 3s linear forward"
			heart.style.animationDuration = Math.random() * 2 + 3 + 's';
			var audio = new Audio('pop.mp3');
			audio.play();
			holder.appendChild(heart)
			setTimeout(function(){
				heart.remove()
			} , 3000)
		} , i*100)
	}
}
