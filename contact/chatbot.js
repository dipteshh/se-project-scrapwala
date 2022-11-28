$('.chat-bubble').click(function(){
	console.log("Bubbling")
	$('.chat-box').toggleClass('hide');
	$('.chat-bubble').toggleClass('chat-bubble-hover');
})

function scrolldown(l) {
  var mydiv = $(".inner-container");
  mydiv.scrollTop(mydiv.prop("scrollHeight"));
}

const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that.";

    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }
    if (message.includes('hello')) {
      speech.text = "Hiiii!! Welcome to our Website";
    }
    if (message.includes('good')) {
      speech.text = "That's Nice";
    }
    if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }
    if (message.includes('weather')) {
      speech.text = "Of course. Where are you currently?";
    }
    if (message.includes('are you a bot')) {
      speech.text = "Yes, I am a bot and a good one. Let me prove it. How can I help you?";
    }

    if (message.includes('one') || message.includes('1') || message.includes('what all do you collect')) {
      speech.text = "We collect almost everything which you might want to sell. Mostly we collect recyclable and reusable stuff viz. newspaper, glass items, plastic bottles, kitchen utensils, E-waste, etc. You can refer to the rate card of our Website for more details."
    }
    if (message.includes('two') || message.includes('2') || message.includes('do you operate in my city') || message.includes('city')) {
      speech.text = "We are currently operational in 10 cities which include Delhi, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad, Ahmedabad, Pune, Surat and Kanpur.";
    }
    if (message.includes('three') || message.includes('3') || message.includes('will you buy it')) {
      speech.text = "If you have used it in the past, probabilities are, somebody might want to reuse it or it is recycled. So we will make our best efforts to grab it from you if possible.";
    }
    if (message.includes('four') || message.includes('4') || message.includes('vendor is at my doorstep')) {
      speech.text = "You’ll know our vendor by their friendly smile and ID Card, which is worn at all times.";
    }
    if (message.includes('five') || message.includes('5') || message.includes('booking fee')) {
      speech.text = "Not at all! Your booking is completely free of charge. All we want to do is make it easier for you to make a tangible difference.";
    }
    if (message.includes('six') || message.includes('6') || message.includes('cancel a booking') || message.includes('cancellation fee')) {
      speech.text = "Yes, you can absolutely cancel a booking. If you wish to cancel it, you must do it at least 2 hours prior to the scheduled time. If not, you will be charged Rs. 50 for the cancellation";
    }
    if (message.includes('seven') || message.includes('7') || message.includes('today')) {
      speech.text = "No problem! You can book for the same-day collection and we’ll do our best to get our vendors to you at the earliest.";
    }
    if (message.includes('eight') || message.includes('8') || message.includes('working days') || message.includes('days')) {
      speech.text = "We are available all days of the week, including Sunday.";
    }
    if (message.includes('nine') || message.includes('9') || message.includes('minimum quantity')) {
      speech.text = "We request our customers to collect at least 8-10 kilograms of raddi to make our pickups viable. One month of TOI paper is about 8 kilograms.";
    }
    if (message.includes('ten') || message.includes('10') || message.includes('suggestions') || message.includes('feedback')) {
      speech.text = "We will be happy to hear from you. Please write to us on raddiwala@gmail.com";
    }

	$(function() {
		scrolldown();
	});

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});