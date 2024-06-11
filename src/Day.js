$.get('https://script.google.com/macros/s/nakiri-api/exec' , function(e) {
	
	if (e.live == "none"){

		/*顯示計時器*/
        
		const startDate = dayjs(e.pubt);
		setDate();
		setInterval(() => setDate(), 1000);
        
		/*每1000毫秒刷新一次*/

		function setDate() {
			let secs = dayjs().diff(startDate, 'second');
			let mins = Math.floor(secs / 60);
			let hours = Math.floor(mins / 60);
			let days = Math.floor(hours / 24);
			secs = secs - (mins * 60)
			mins = mins - (hours * 60);
			hours = hours - (days * 24);

			let secs2 = secs.toString().padStart(2, '0');
			let mins2 = mins.toString().padStart(2, '0');
			let hours2 = hours.toString().padStart(2, '0');

			$('#day').text(days);
			$('#hour').text(hours2);
			$('#min').text(mins2);
			$('#sec').text(secs2);
		}

	}
	if (e.live == "upcoming" || e.live == "live"){
		
		/*隱藏計時器*/
        
		$('<iframe>', {
			src: e.vidi,
			id:  'ytplayere',
			frameborder: 0,
			scrolling: 'no'
		}).appendTo('#ytplayer');
	
	}
	else {
		...
	}
});