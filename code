var button1Count = 0;
var button2Count = 0;
playSound("Steve_Combs_-_14_-_Good_Ideas_Poorly_Executed.mp3", true);
onEvent("playButton", "click", function() {
  setScreen("gameScreen");
  console.log("gamestart");
  setText("gameScreenText","You awake in a room, and everything is hazy you see a dresser and a door what do you choose?");
  setText("button1", "Dresser");
  setText("button2", "Door");
});
onEvent("button1", "click", function() {
  button1Count++;
  if (button1Count == 1 && button2Count == 1) {
    setScreen("loseScreen");
    setText("loseTextBox", "You cannot be a coward, you died from insanity as you never escaped the room.");
  }
  if (button1Count == 1 && button2Count === 0 ) {
    changeTextButton("Take","Leave","Upon reaching the dresser you see a key on top of it.");
  }
  if (button1Count == 2 && button2Count === 0) {
    changeTextButton("Search","Leave","You take the key, do you wish to search the dresser?");
  }
  if (button1Count == 3 && button2Count === 0) {
    setScreen("loseScreen");
    setText("loseTextBox", "You were greedy and upon opening the dresser you were enveloped in gas. You have died.");
  }
  if (button1Count == 3 && button2Count == 1) {
    changeTextButton("Use","Smash","You find a locked box under the rug do you wish to use your key or smash it?");
  }
  if (button1Count == 4 && button2Count == 1) {
    changeTextButton("Press","Leave","You open the box and find a button in it, do you wish to press it?");
  }
  if (button1Count == 5 && button2Count == 1) {
    setScreen("winScreen");
  }
  if (button1Count == 1 && button2Count == 2) {
    changeTextButton("Leave","Take","After rumaging around in the closet you find a knife do you wish to take it?");
  }
  if (button1Count == 2 && button2Count == 2) {
    setScreen("loseScreen");
    setText("loseTextBox", "You cannot be a coward, you died from insanity as you never escaped the room.");
  }
  if (button1Count == 2 && button2Count == 3) {
    changeTextButton("Leave", "Eat", "You stab the mirror and behind it you find a lotus flower, do you wish to eat it?");
  }
  if (button1Count == 3 && button2Count == 3) {
    setScreen("loseScreen");
    setText("loseTextBox", "You cannot be a coward, you died from insanity as you never escaped the room.");
  }
  console.log("Button 1 Count: "+button1Count+" Button 2 Count: "+ button2Count);
});
onEvent("button2", "click", function() {
  button2Count++;
  if (button1Count === 0 && button2Count == 1) {
    changeTextButton("Leave","Open","You walk up to the door and it appears unlocked, do you wish to open it?");
  }
  if (button1Count === 0 && button2Count == 2) {
    changeTextButton("Search","Leave","You open the door and find it is a closet. Do you wish to search it?");
  }
  if (button1Count == 1 && button2Count == 1) {
    setScreen("loseScreen");
    setText("loseTextBox", "You cannot be a coward, you died from insanity as you never escaped the room.");
  }
  if (button1Count == 2 && button2Count == 1) {
    changeTextButton("Look","Leave","You leave the dresser, and notice a rug on the floor that has a bump underneath it.");
  }
  if (button1Count == 2 && button2Count == 2) {
    setScreen("loseScreen");
    setText("loseTextBox", "You cannot be a coward, you died from insanity as you never escaped the room.");
  }
  if (button1Count == 3 && button2Count == 2) {
    setScreen("loseScreen");
    setText("loseTextBox", "The box exploded from you smashing it. Don't be so hasty next time.");
  }
  if (button1Count == 4 && button2Count == 2) {
    setScreen("loseScreen");
    setText("loseTextBox", "You cannot be a coward, you died from insanity as you never escaped the room.");
  }
  if (button1Count === 0 && button2Count == 3) {
    setScreen("loseScreen");
    setText("loseTextBox", "You cannot be a coward, you died from insanity as you never escaped the room.");
  }
  if (button1Count == 1 && button2Count == 3) {
    changeTextButton("Stab","Stare","You take the knife and as soon as you turn around a mirror is behind you. Do you wish to stab it or stare into it?");
  }
  if (button1Count == 1 && button2Count == 4) {
    setScreen("loseScreen");
    setText("loseTextBox", "You stared at your reflection and eventually got lost in it. You are trapped forever.");
  }
  if (button1Count == 2 && button2Count == 4) {
    setScreen("winScreen");
  }
  console.log("Button 1 Count: "+button1Count+" Button 2 Count: "+ button2Count);
});
function changeTextButton(button1Text,button2Text,gameScreenText) {
  setText("button1", button1Text);
  setText("button2", button2Text);
  setText("gameScreenText", gameScreenText);
}
onEvent("playAgainButton", "click", function() {
  console.log("playAgainButton clicked!");
  setScreen("homeScreen");
button1Count = 0;
button2Count = 0;
});
onEvent("winPlayAgain", "click", function() {
  console.log("winPlayAgain clicked!");
  setScreen("homeScreen");
button1Count = 0;
button2Count = 0;
});
