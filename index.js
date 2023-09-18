function scuberGreetingForFeet(x) {
  if(x < 400) {
    return 'This one is on me!'
  }
  else if(x >2000&& x<=2500){
    return "I will gladly take your thirty bucks."
  }
  else{
    return "No can do."
  }
}
function ternaryCheckCity(b) {
  if (b === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(t) {
  switch (t) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}