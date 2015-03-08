//This is a potential solution to the card dealer based on procedural functions

//It is crude and done hastily, and doesn't include any duplication checking

var cardPointer;
cardPointer = 0;
var cardQuantity;
cardQuantity = 5;

function reset() {
	//Defines the function which resets the screen
	//Declare and initialize variables
	var cardId = "";
	var cardBack = "assets/b1fv.png";
	
	//Testing LOG
	console.log("cardQuantity is "+ cardQuantity);
	//Reset Card Deck and global variables
	document.getElementById("cardDeck").src = cardBack;
	cardPointer=0;
	
	//Reset Cards; Allows for more to be added later
	for (e=0; e <= cardQuantity-1; e++) {
		cardId = "card" + e.toString();
		console.log(cardId);
		document.getElementById(cardId).src = cardBack;
	}
};

function flipCard(location,card) {
	//Flips a single card given its location and the specific card selected
	
	document.getElementById("card"+location.toString()).src = "assets/" + card.toString() + ".png";
};

function resolveClick() {
	//Resolves the behaviour of clicking on the deck
	
	var selectedCard = 0;
	var visibleCards = 0;
	
	//Grab the number of visible cards
	visibleCards = getVisibleCards();
	//Check reset case
	if (cardPointer === visibleCards) {
		//Reset deck if at end of card chain
		reset();
		
	} else {
		//Increments pointer to next card first
		cardPointer += 1;
		
		//Selects a random card based on if jokers are selected
		selectedCard = randomCard();
		//Reveal Card
		flipCard((cardPointer-1),selectedCard);
	};
};

function updateInterface() {
	//Updates the user interface when an option is changed
	
	//Variable Declaration
	var myCards = getVisibleCards();
	var cardLocation = "";
	
	//Resets the selection first
	reset();
	
	//Handles picking which cards become visible
	for (item=0; cardQuantity-1; item++){
		cardLocation = "card"+item.toString();
		if ( (item + 1).toString() <= myCards ) {
			document.getElementById(cardLocation).style.visibility = "visible";
		} else {
			document.getElementById(cardLocation).style.visibility = "hidden";
		};	
	};
};

function randomCard() {
	//Returns a random card
	var newCard = 0;
	if (document.getElementById("jokers").checked) {
		newCard = Math.floor(Math.random()*54+1);
	} else {
		newCard = Math.floor(Math.random()*52+1);	
	};
	return newCard;
};

function getVisibleCards() {
	//Returns the 
	var visC = 0;
	if (document.getElementById("cardNo1").checked){
		visC = 1;
	} else if (document.getElementById("cardNo2").checked){
		visC = 2;
	} else {
		visC = 5;	
	}
	return visC;
};

//Adding behaviour to the elements

document.getElementById("cardDeck").addEventListener("click",resolveClick,false);
document.getElementById("cardNo1").addEventListener("click",updateInterface,false);
document.getElementById("cardNo2").addEventListener("click",updateInterface,false);
document.getElementById("cardNo5").addEventListener("click",updateInterface,false);

