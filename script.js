	var preloader = document.getElementById("loading");

		function myFunction(){
			preloader.style.display = 'none';
		};


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
    
	
