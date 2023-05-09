

const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}

function startMadlib() {
    words.number = prompt("Give me a number");
    words.adjective = prompt("Give me an adjective");
    words.pluralNoun = prompt("Give me a plural noun");
    words.adverb = prompt("Give me an adverb");
    words.anotherAdjective = prompt("Giveme another adjective");
}

function storyTime() {
    const plot = 'Once upon a time a group of ' + (words.number) + ' General Assembly graduates got together and made a startup called ' + (words.adjective) + ' Technologies. Their goal was to create smart ' + (words.pluralNoun) + '. They approached the challenge ' + (words.adverb) + ' which ultimately lead them to ' + (words.anotherAdjective) + ' fame.';
    alert(plot);
}

// I couldn't get ${ } to use in the plot for some reason, so I had to use multiple strings with + signs to get it to work. 

startMadlib();
storyTime();

