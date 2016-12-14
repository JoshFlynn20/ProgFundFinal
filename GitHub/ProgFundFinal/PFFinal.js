//First you will select a team either the Green Bay Packers or The Minnesota Vikings(Wronng)
alert("HI")
chooseTeam();

function chooseTeam() {
  var teamName = prompt("Type Packers or Vikings.");
  if (teamName === "Packers"){
    alert("Good Choice");
    namePlayer();
  }
  else {
    alert("Vikings suck, try again.")
    var teamName2 = prompt("Type Packers of Vikings.")
    if (teamName2 === "Vikings") {
      alert("You leave me no choice.")
      var i = 1;
      for (i=1; 1>0; i++) {
        alert("STEVE WILL HUNT YOU!!!!!")
      }
    }
    else {
      namePlayer();
    }
  }
}

function namePlayer() {
  var teamName = prompt(" Name the player that wears #56.");
  if (teamName === "Julius Peppers"){
    alert("Great");
    nameName();
  }
  else {
    alert("Try again.")
  }
}

function nameName() {
  var teamName = prompt(" Name the #____ of Jordy Nelson.");
  if (teamName === "87"){
    alert("Great");
    namePlayer2();
  }
  else {
    alert("Try again.")
  }
}
function namePlayer2() {
  var teamName = prompt("Who is The Player that wears #52");
  if (teamName === "Clay Matthews"){
    alert("Great");
    namePlayer3();
  }
  else {
    alert("Try again.")
  }
}

function namePlayer3() {
  var teamName = prompt("Who is The Player that wears #27");
  if (teamName === "Eddie Lacy"){
    alert("Great");
    namePlayer4();
  }
  else {
    alert("Try again.")
  }
}
function namePlayer4() {
  var teamName = prompt("Who is The Player that wears #12");
  if (teamName === "Aaron Rodgers"){
    alert("Great");
  }
  else {
    alert("Try again.")
  }
}
