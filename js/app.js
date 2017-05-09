const video = document.getElementById('my_video');
const captionSection = document.querySelector('.caption-section');
const captions = document.querySelectorAll('section span');

// Highlight video caption text
video.addEventListener('timeupdate', (e) => {
	for (let i = 0; i < captions.length; i++) {
		let cap = captions[i];
		let time = video.getCurrentTime();
		let captionStart = cap.getAttribute('data-start');
		let captionEnd = cap.getAttribute('data-end');
		if ( time >= captionStart && time <= captionEnd ) {
			cap.className = 'highlight';
		} else {
			cap.className = 'no-highlight';
		}
	}	
});

// Click caption text to jump to video time
captionSection.addEventListener('click', (e) => {
	let currentTime = e.target.getAttribute('data-start');
	if (currentTime) {
		video.setCurrentTime(currentTime);
	}
});