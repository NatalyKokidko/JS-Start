let yourChoise = prompt ('Choise rock, paper or scissors?');
let computerChoise = Math.random ();
if (computerChoise < 0.34) {
  computerChoise = 'rock';
  } else if (computerChoise <= 0.68) {
    computerChoise = 'paper';
  } else {
    computerChoise= 'scissors';
  }
document.write('<p>Your choise is ' + yourChoise + '</p><br>');
document.write('<p>Computer choise is ' + computerChoise +'</p><br>');

let compare = function (choise1, choise2) {
  if (choise1 === choise2) {
    return ('It is a Draw!');
  } else if (choise1 === 'rock') {
    if (choise2 === 'paper') {
      return ('You lose!');
    } else { 
    return ('You are winner!');
    }
  } else if (choise1 === 'paper') {
    if (choise2 === 'scissors') {
      return ('You lose!');
    } else if (choise2 === 'rock') {
      return ('You are winner!');
    } else {
      return ('It is Draw!');
    }
  } else if (choise1 === 'scissors') {
    if (choise2 === 'rock') {
      return ('You are winner!');
    } else {
      return ('It is Draw!');
    }
  } else if (choise1 === 'bomb') {
    return ('You are mega winner!');
  }
}
document.write (compare(yourChoise, computerChoise));