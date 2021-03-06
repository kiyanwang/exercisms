function Bob() {
}

function isShouting(input) {
  return (input.toUpperCase() === input && /[A-Z\xdc]/.test(input));
}

function isQuestioning(input) {
  return (input[input.length - 1] === "?");
}

function isSilence(input) {
  return (input.trim() === "");
}
Bob.prototype.hey = function(input) {
  if (isShouting(input)) {
    return "Woah, chill out!";
  } else if(isQuestioning(input)) {
    return "Sure.";
  } else if(isSilence(input)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};

module.exports = Bob;
