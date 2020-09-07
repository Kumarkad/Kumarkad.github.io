$(function() {
	var message = {

		message: [
			'am a programmer;', 
			'am a designer;',
			'love web development;',
			'am android devloper;'
		],
		counterS: 0,
		counterL: 0,
		deleteS: false,

		init: function() {
			this.cacheElem();
			this.type();
		},

		cacheElem: function() {
			this.$text = $('.text');
		},

		type: function() {
			var message 	= this.message[this.counterS],
				  that 	    = this,
				  speed 	  = 0;

			message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
			if(this.message[this.counterS] != message && !this.deleteS) {
				this.$text.text(message);
				speed = 90;
			}
			else {
				this.deleteS = true;
				speed = this.message[this.counterS] == message ? 1000 : 40;
				this.$text.text(message);
				if (message == '') {
					this.deleteS = false;
					this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
				}
			}
			setTimeout(function(){that.type()}, speed);
		}
	};
	message.init();
});
const mode = document.querySelector('.mode');
    let dark = false;
    mode.addEventListener('click',() => {
        if(dark){
            dark = false;
            document.documentElement.setAttribute('data-theme','dark');
            mode.textContent = 'light';
            
        }
        else{
            dark = true;
            document.documentElement.setAttribute('data-theme','light');
            mode.textContent = 'dark';
        }
    })
    
    const video=document.getElementById('video')
const callback=entries=>{
				entries.forEach(entry=>{
							if(entry.intersectionRatio !=1 && !video.paused){
												video.pause()
												}else if(video.paused){
														video.play()
																}
								})
				}
const options={ threshold: 0.5 }
const observer=new IntersectionObserver(callback, options)
observer.observe(video)

