var list = document.querySelector('.output ul');
//list.innerHTML = "oy";
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for(var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  if(greetings[i].indexOf('Christmas') !== -1) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}

