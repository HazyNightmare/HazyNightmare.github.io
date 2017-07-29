//IIFE to wrap the entire script and to keep all vars local
var PAGECONTROLLER = (function($, window, document) {
	"use strict";

	var quoteHolder = [],
		authorHolder = [],
		quoteParagraph = $('#quote'),
		nameParagraph = $('#name'),
		//var used to make sure the next quote is not the same as the current one.
		testForSame = null;

	quoteHolder = [
		"Success is walking from failure to failure with no loss of enthusiasm.",
		"Try not to become a person of success, but rather try to become a person of value.",
		"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
		"If you're going through hell, keep going.",
		"I find that the harder I work, the more luck I seem to have.",
		"Only put off until tomorrow what you are willing to die having left undone.",
		"Success is liking yourself, liking what you do, and liking how you do it.",
		"The successful warrior is the average man, with laser-like focus.",
		"If you can't fly, then run. If you can't run, then walk. If you can't walk, then crawl, but whatever you do, you have to keep moving forward.",
		"Life is like riding a bicycle; to keep your balance, you must keep moving.",
		"I have not failed; I've just found 10,000 ways that won't work.",
		"900 years of time and space, and I've never met anyone who wasn't important.",
		"When you're a kid, they tell you it's all grow up, get a house, have a kid and that's it. But the truth is, the world is so much more stranger than that. It's so much darker. And so much madder. And so much better.",
		"Some people live more in 20 years than others do in 80. It's not the time that matters, it's the person.",
		"Hey, do you mind if I tell you a story? One you might not have heard? All the elements in your body were forged many, many millions of years ago, in the heart of a faraway star that exploded and died. That explosion scattered those elements across the desolation of deep space. After so, so many millions of years, these elements came together to form new stars and new planets. And on and on it went. The elements came together and burst apart, forming shoes and ships and sealing-wax and cabbages and kings. Until eventually, they came together to make you. You're unique in the universe. There is only one You. And there will never be another.",
		"Believe you can and you're halfway there.",
		"Nothing is impossible, the word itself says “I’m possible”!",
		"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
		"Do or do not. There is no try.",
		"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
		"If you hear a voice within you say \"you cannot paint,\" then by all means paint and that voice will be silenced.",
		"I would rather die of passion than of boredom.",
		"How wonderful it is that nobody need wait a single moment before starting to improve the world.",
		"When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down “happy”. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
		"Pearls don’t lie on the seashore. If you want one, you must dive for it.",
		"Nobody cares about your excuses. Nobody pities you for procrastinating. Nobody is going to cuddle you because you are lazy. It’s your ass. You move it.",
		"Remember that guy that gave up? Neither does anybody else.",
		"The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
		"Don’t tell me the sky’s the limit when there are footprints on the moon.",
		"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
		"Keep your eyes on the stars, and your feet on the ground.",
		"Be the change you want to see in the World.",
		"I like you just the way you are.",
		"The expert in anything was once a beginner.",
		"No matter what happened to you in your past, you are not your past. You are the resources and the capabilities you glean from it. And that is the basis for all change.",
		"You don't need a new year to make a change. All you need is a new Monday. Make this the week you change your life.",
		"You were born with the ability to change someone's life; don't ever waste it.",
		"Keep your face always toward the sunshine and the shadows will fall behind you.",
		"Loss of life is to be mourned, but only if the life was wasted.",
		"If there is nothing to lose, no sacrifice, then there is nothing to gain.",
		"Live Long and Prosper.",
		"If not you, then who? If not now, then when?",
		"Be someone that makes you happy.",
		"Hardships often prepare ordinary people for an extraordinary destiny.",
		"One's dignity may be assaulted, vandalized, and cruelly mocked, but it can never be taken away unless it is surrendered.",
		"Failure is only the opportunity to begin again. Only this time, more wisely."
	];

	authorHolder = [
		"Winston Churchill",
		"Albert Einstein",
		"David Brinkley",
		"Winston Churchill",
		"Thomas Jefferson",
		"Pablo Picasso",
		"Maya Angelou",
		"Bruce Lee",
		"Martin Luther King Jr.",
		"Albert Einstein",
		"Nickola Tesla",
		"The Doctor",
		"Doctor Who",
		"The Doctor",
		"The Doctor",
		"Theodore Roosevelt",
		"Audrey Hepburn",
		"Maya Angelou",
		"Yoda",
		"Mark Twain",
		"Vincent van Gogh",
		"Vincent van Gogh",
		"Anne Frank",
		"John Lennon",
		"Chinese Proverb",
		"Unknown",
		"Unknown",
		"Steve Jobs",
		"Paul Brandt",
		"Thomas A. Edison",
		"Theodore Roosevelt",
		"Mahatmas Gandhi",
		"Mr. Rogers",
		"Unknown",
		"The Wolf on Wall Street",
		"Unknown",
		"Unknown",
		"Walt Whitman",
		"Leonard Nimoy",
		"Michael Dorn",
		"Leonard Nimoy",
		"Unknown",
		"Unknown",
		"C.S. Lewis",
		"Michael J. Fox",
		"Uncle Iroh"
	];


	//used for access from the global scope
	var object = {};

	object.init = function() {
		randomBackground();
		quoteChooser();
		object.jquery();
	};

	object.jquery = function() {
		$('button').click(function() {
			quoteChooser();
		});
	};

	object.randomBackground = function() {
		randomBackground();
	};

	object.quoteChooser = function() {
		quoteChooser();
	};

	return object;


	//Private functions

	function randomBackground() {
		//Variable declarations
		var body = $('body'),
			backgrounds = [],
			min = null,
			max = null,
			chosen = null;

		//create an array that will hold the names of the backgrounds to choose from
		backgrounds = ['autumn', 'beach-at-sunset', 'city-sunset', 'mossy-hills'];

		//set min to 0 and max to the length of the backgrounds array
		min = 0;
		max = backgrounds.length;

		//Random number is generated
		chosen = random(min, max);

		if(typeof backgrounds[chosen] === 'undefined') {
			return randomBackground();
		}

		//Background of the body element is changed depending on the result of the var chosen
		body.css('background', 'url(imgs/' + backgrounds[chosen] + '.jpg)');
		body.css('background-repeat', 'no-repeat');
		body.css('background-position', 'center');
		body.css('background-attachment', 'fixed');
		body.css('background-size', 'cover');
	}

	function quoteChooser() {
		//variables for the random numnber generator
		var min = null,
			max = null,
			chosen = null;

		min = 0;
		max = quoteHolder.length;
		chosen = random(min, max);

		//If the new quote is the same as the last, call the function again for a different number
		if (chosen === testForSame) {
			return quoteChooser();
		}
		//If the quote or author is undefined, call the function again
		else if (typeof quoteHolder[chosen] === 'undefined' || typeof authorHolder === 'undefined') {
			return quoteChooser();
		}
		 else {
			//Set the quote and author to the correct element of the arrays
			quoteParagraph.text(quoteHolder[chosen]);
			nameParagraph.text("-- " + authorHolder[chosen]);
			//set the testForSame to the new quote to keep the next
			//one from being the same
			testForSame = chosen;
		}
	}

	//random number generator
	function random(min, max) {
		var holder = Math.floor(Math.random() * (max - min + 1)) + min;
		return holder;
	}

}(window.jQuery, window, document));

//Page initialization
PAGECONTROLLER.init();
