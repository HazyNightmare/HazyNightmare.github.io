var PAGECONTROLLER = (function($, window, document) {
	"use strict";

	//Variable declarations
	var text,
		animate,
		animationSpeed = 45,
		moveAmount = 1,
		isPlaying = false,
		isPaused = false,
		isStopped = true;

	//Grab the element that will move.
	//It holds all of the text inside of it.
	text = $('#moving-text');

	//Object to allow access from the global scope
	var object = {};

	object.init = function() {
		jQuery();
	};

	object.play = function() {
		play();
	};

	object.pause = function() {
		pause();
	};

	object.stop = function() {
		stop();
	};

	return object;

	//Private Functions
	//Private jQuery to be called on page load
	function jQuery() {
		$('#btn-play').on('click', function() {
			//If the animation ISN'T playing, start the animation
			if (isPlaying === false) {
				play();
				isPlaying = true;
				isPaused = false;
				isStopped = false;
			}
		});

		$('#btn-pause').on('click', function() {
			//If the animation ISN'T paused, pause the animation
			if (isPaused === false) {
				pause();
				isPlaying = false;
				isPaused = true;
				isStopped = false;
			}
		});

		$('#btn-stop').on('click', function() {
			//If the animation ISN'T stopped, stop the animation
			if (isStopped === false) {
				stop();
				isPlaying = false;
				isPaused = false;
				isStopped = true;
			}
		});
	}

	function play() {
		//Take the current position of text, and update it by the moveAmount
		text.css('top', parseInt(text.css('top')) - moveAmount + 'px');
		animate = setTimeout(play, animationSpeed);
	}

	function pause() {
		clearTimeout(animate);
	}

	function stop() {
		//When stop() is called, return the text to its original
		//positioning and then stop the recurring call of moveUp()
		text.css('top', '0px');
		clearTimeout(animate);
	}

}(window.jQuery, window, document));
PAGECONTROLLER.init();
